import { Link } from "react-router-dom";
import ParallaxLayer from "./ParallaxLayer";
import Reveal from "./Reveal";
import { ArrowIcon } from "./Icons";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <ParallaxLayer speed={-0.18} className="absolute inset-x-0 -top-24 h-[140%]">
        <img
          src="/assets/mountains-bg.svg"
          alt=""
          className="h-full w-full object-cover opacity-90"
        />
      </ParallaxLayer>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/60 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="eyebrow !text-slate-300">Let&apos;s build together</p>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            Ready to turn your ideas
            <br />
            into digital success?
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
            Get in touch with us today and let&apos;s create something amazing for your brand.
          </p>
          <Link to="/contact" className="btn-gold mt-8">
            Get Started <ArrowIcon className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={150} className="hidden items-center justify-end lg:flex">
          <div className="border-l border-gold/50 pl-6 text-[11px] font-medium uppercase leading-7 tracking-[0.32em] text-slate-200">
            <p>Your Vision</p>
            <p>Our Technology</p>
            <p>Real Impact</p>
            <span className="mt-3 block h-[2px] w-8 bg-gold" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
