'use client';
import { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { programs } from '@/data/programs';

const ENDPOINT = process.env.NEXT_PUBLIC_INQUIRY_ENDPOINT;
const levels = ['Beginner', 'Some experience', 'Intermediate', 'Advanced'];
const empty = { name: '', email: '', phone: '', program: '', level: '', message: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Enter your full name.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address, like name@example.com.';
  if (v.phone && !/^[+\d\s()-]{7,20}$/.test(v.phone)) e.phone = 'Use 7 to 20 digits, spaces, or + ( ) -.';
  if (!v.program) e.program = 'Choose a program of interest.';
  if (!v.level) e.level = 'Choose your experience level.';
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters.';
  return e;
}

function Field({ id, label, error, children, optional }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm">{label}{optional && <span className="text-mute"> (optional)</span>}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-[#ff8a8a]">{error}</p>}
    </div>
  );
}

const input = 'w-full rounded-lg border border-white/15 bg-surface px-4 py-3 text-fg placeholder:text-mute/60 focus:border-teal focus:outline-none aria-[invalid=true]:border-[#ff8a8a]';

export default function ContactForm() {
  const [v, setV] = useState(empty);
  const [err, setErr] = useState({});
  const [status, setStatus] = useState('idle');
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });
  const p = (id, k) => ({ id, value: v[k], onChange: set(k), className: input, 'aria-invalid': !!err[k], 'aria-describedby': err[k] ? `${id}-err` : undefined });

  async function submit(e) {
    e.preventDefault();
    const found = validate(v);
    setErr(found);
    if (Object.keys(found).length) { document.getElementById(`f-${Object.keys(found)[0]}`)?.focus(); return; }
    setStatus('loading');
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(v) });
        if (!res.ok) throw new Error('Request failed');
        setStatus('sent');
      } else {
        await new Promise((r) => setTimeout(r, 900));
        setStatus('demo');
      }
      setV(empty);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent' || status === 'demo') {
    return (
      <div role="status" className="rounded-xl border border-teal/40 bg-surface p-8">
        <CheckCircle2 className="text-teal" />
        <h3 className="mt-4 text-2xl font-medium">{status === 'sent' ? 'Inquiry sent' : 'Form checked (demo mode)'}</h3>
        <p className="mt-2 text-mute">{status === 'sent' ? 'Thanks. We will reply by email.' : 'Your details passed validation, but no backend is configured, so nothing was sent or stored. Set NEXT_PUBLIC_INQUIRY_ENDPOINT to enable real submissions.'}</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-teal underline underline-offset-4">Fill the form again</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 rounded-xl border border-white/10 bg-surface/60 p-6 sm:grid-cols-2 sm:p-8">
      <Field id="f-name" label="Full name" error={err.name}><input {...p('f-name', 'name')} autoComplete="name" /></Field>
      <Field id="f-email" label="Email address" error={err.email}><input {...p('f-email', 'email')} type="email" autoComplete="email" /></Field>
      <Field id="f-phone" label="Phone number" optional error={err.phone}><input {...p('f-phone', 'phone')} type="tel" autoComplete="tel" /></Field>
      <Field id="f-program" label="Program of interest" error={err.program}>
        <select {...p('f-program', 'program')}><option value="">Select a program</option>{programs.map((x) => <option key={x.slug} value={x.title}>{x.title}</option>)}</select>
      </Field>
      <div className="sm:col-span-2"><Field id="f-level" label="Experience level" error={err.level}>
        <select {...p('f-level', 'level')}><option value="">Select your level</option>{levels.map((l) => <option key={l}>{l}</option>)}</select>
      </Field></div>
      <div className="sm:col-span-2"><Field id="f-message" label="Message" error={err.message}><textarea {...p('f-message', 'message')} rows={5} /></Field></div>
      {status === 'error' && <p role="alert" className="text-[#ff8a8a] sm:col-span-2">Sending failed. Check your connection and try again.</p>}
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === 'loading'} className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-medium text-white transition hover:bg-[#7a6dff] disabled:opacity-60">
          {status === 'loading' && <Loader2 size={16} className="animate-spin" />}{status === 'loading' ? 'Sending' : 'Send Inquiry'}
        </button>
      </div>
    </form>
  );
}
