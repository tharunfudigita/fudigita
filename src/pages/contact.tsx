import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ParallaxLayer from "../components/ParallaxLayer";
import { ArrowIcon, MailIcon, PhoneIcon, PinIcon } from "../components/Icons";

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

const initial: FormState = { name: "", email: "", service: "Web & App Development", message: "" };

const details = [
  { Icon: MailIcon, label: "Email", value: "fudigita@gmail.com" },
  { Icon: PhoneIcon, label: "Phone", value: "+00 000 000 0000" },
  { Icon: PinIcon, label: "Location", value: "Add your office address here" },
];

const field =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-gold focus:ring-2 focus:ring-gold/20";

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send `form` to your backend / email service here.
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm(initial);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something"
        accent="amazing together."
        subtitle="Tell us about your idea and we'll get back to you with the next steps."
      />

      <section className="relative overflow-hidden bg-white py-24">
        <ParallaxLayer speed={0.15} className="pointer-events-none absolute -right-32 top-10 h-96 w-96">
          <div className="h-full w-full rounded-full bg-gold-soft/70 blur-3xl" />
        </ParallaxLayer>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-10">
          <Reveal>
            <p className="eyebrow">Get in touch</p>
            <h2 className="section-title mt-5">Ready to turn your ideas into digital success?</h2>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              Get in touch with us today and let&apos;s create something amazing for your brand.
            </p>
            <ul className="mt-8 space-y-5">
              {details.map(({ Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400">{label}</p>
                    <p className="text-sm font-semibold text-navy">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={onSubmit} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card">
              {sent && (
                <p role="status" className="mb-6 rounded-lg bg-gold-soft px-4 py-3 text-sm font-medium text-navy">
                  Thanks! Your message has been received. We&apos;ll be in touch soon.
                </p>
              )}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold text-navy">Name</label>
                  <input id="name" name="name" required value={form.name} onChange={onChange} placeholder="Your name" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold text-navy">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="you@company.com" className={field} />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="service" className="mb-2 block text-xs font-semibold text-navy">I&apos;m interested in</label>
                <select id="service" name="service" value={form.service} onChange={onChange} className={field}>
                  <option>Web &amp; App Development</option>
                  <option>Digital Marketing (SEO &amp; SMO)</option>
                  <option>Branding &amp; Design</option>
                  <option>Creative Solutions</option>
                </select>
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-xs font-semibold text-navy">Message</label>
                <textarea id="message" name="message" required rows={5} value={form.message} onChange={onChange} placeholder="Tell us about your project" className={field} />
              </div>
              <button type="submit" className="btn-gold mt-6">
                Send Message <ArrowIcon className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
