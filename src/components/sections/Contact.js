import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/forms/ContactForm';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto grid max-w-7xl gap-12 px-5 py-28 sm:px-8 lg:grid-cols-12">
      <div className="lg:col-span-5"><SectionHeading id="contact-title" eyebrow="GET STARTED" title="Your Next Chapter Starts Here.">Have a passion for technology and the ambition to build something meaningful? Start exploring your path with Nexora Academy.</SectionHeading></div>
      <div className="lg:col-span-7"><ContactForm /></div>
    </section>
  );
}
