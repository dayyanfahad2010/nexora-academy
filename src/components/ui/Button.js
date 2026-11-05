import Link from 'next/link';
import { cn } from '@/lib/utils';

const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition duration-300 active:scale-[0.98]';
const variants = {
  primary: 'bg-accent text-white hover:bg-[#7a6dff] hover:-translate-y-0.5',
  ghost: 'border border-white/15 text-fg hover:border-white/40 hover:bg-white/5',
};

export default function Button({ href, variant = 'primary', className, children, ...rest }) {
  const cls = cn(base, variants[variant], className);
  if (href) return <Link href={href} className={cls} {...rest}>{children}</Link>;
  return <button className={cls} {...rest}>{children}</button>;
}
