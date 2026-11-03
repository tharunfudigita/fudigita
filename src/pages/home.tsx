import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ParallaxLayer from "../components/ParallaxLayer";
import Reveal from "../components/Reveal";
import CtaBanner from "../components/CtaBanner";
import {
  ArrowIcon,
  ChartIcon,
  ChevronLeft,
  ChevronRight,
  CodeIcon,
  HeartIcon,
  MegaphoneIcon,
  PaletteIcon,
  UsersIcon,
} from "../components/Icons";
import { services } from "../data/services";

const aboutPoints = [
  { Icon: CodeIcon, title: "Technology Driven", text: "Modern tools. Scalable solutions. Future ready." },
  { Icon: MegaphoneIcon, title: "Marketing Focused", text: "Data-informed strategies. Real audience growth." },
  { Icon: HeartIcon, title: "Client Centric", text: "Your goals. Our priority." },
];

const whyPoints = [
  { Icon: CodeIcon, title: "Modern Technology", text: "Future-ready solutions" },
  { Icon: PaletteIcon, title: "Creative Approach", text: "Designs that connect" },
  { Icon: ChartIcon, title: "Strategic Thinking", text: "Data-driven decisions" },
  { Icon: UsersIcon, title: "Long-term Partnership", text: "Your growth, our mission" },
];

const projects = [
  { title: "Better Solutions for a Smarter Tomorrow", tag: "Corporate website", image: "/assets/work-mockup.svg" },
  { title: "Digital Growth Platform", tag: "Web application", image: "/assets/hero-laptop.svg" },
  { title: "Brand Experience", tag: "Branding & design", image: "/assets/about-office.svg" },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);

  const prev = () => setSlide((s) => (s - 1 + projects.length) % projects.length);
  const next = () => setSlide((s) => (s + 1) % projects.length);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden bg-slate-100">
        {/* Layer 1: slow background */}
        <ParallaxLayer speed={0.3} className="absolute inset-x-0 -top-32 h-[130%]">
          <img src="/assets/hero-bg.svg" alt="" className="h-full w-full object-cover" />
        </ParallaxLayer>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent" />

        <div className="relative mx-auto grid min-h-[640px] max-w-7xl items-center gap-8 px-6 pb-20 pt-36 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow">Ideas / Technology / Growth</p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.15] text-navy sm:text-5xl">
              Digital Transformation
              <br />
              &amp; Tech Solutions
              <br />
              <span className="text-gold">for a Bigger Tomorrow</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-600">
              Fudigita is a full-service digital agency dedicated to turning innovative ideas into
              powerful digital experiences. We build modern websites, scalable applications, and
              impactful marketing strategies that help businesses grow in the digital world.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link to="/contact" className="btn-gold">
                Get Started <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-link">
                Explore Our Services <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Layer 2: faster foreground laptop */}
          <ParallaxLayer speed={-0.12} className="relative">
            <img
              src="/assets/hero-laptop.svg"
              alt="Laptop showing a Fudigita project"
              className="mx-auto w-full max-w-xl drop-shadow-2xl lg:max-w-none"
            />
          </ParallaxLayer>

          <div className="absolute right-10 top-32 hidden text-[11px] font-semibold uppercase leading-5 tracking-[0.3em] text-slate-500 xl:block">
            We build
            <br />
            digital
            <br />
            experiences
            <span className="mt-3 block h-[2px] w-8 bg-gold" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="grid items-end gap-6 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Our Services</p>
              <h2 className="section-title mt-5">
                End-to-end digital
                <br />
                solutions for your brand.
              </h2>
            </div>
            <p className="border-slate-200 text-sm leading-7 text-slate-500 lg:border-l lg:pl-8">
              From stunning websites to intelligent automation, we help businesses grow with
              technology, creativity and strategic thinking.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ id, title, short, Icon }, i) => (
              <Reveal key={id} delay={i * 100}>
                <article className="group h-full rounded-xl border border-slate-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-gold/40">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-base font-semibold leading-snug text-navy">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-slate-500">{short}</p>
                  <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-gold">
                    Learn More <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <div className="relative h-[420px] overflow-hidden rounded-2xl bg-navy-900 shadow-card">
              <ParallaxLayer speed={0.12} className="absolute inset-x-0 -top-12 h-[125%]">
                <img src="/assets/about-office.svg" alt="Fudigita workspace" className="h-full w-full object-cover" />
              </ParallaxLayer>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              <div className="absolute left-8 top-8">
                <p className="eyebrow !text-slate-200">About Fudigita</p>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-white">
                  Your Partner in
                  <br />
                  Digital Growth
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h3 className="text-xl font-bold text-navy">More than just a digital agency.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              We are a passionate team of developers, marketers, and creators, working together to
              help businesses build a strong online presence. We combine technical expertise with
              creative strategy to deliver solutions that make an impact.
            </p>
            <ul className="mt-8 space-y-5">
              {aboutPoints.map(({ Icon, title, text }) => (
                <li key={title} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy">{title}</p>
                    <p className="text-xs text-slate-500">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-link mt-8">
              More about us <ArrowIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHY FUDIGITA */}
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <ParallaxLayer speed={0.2} className="pointer-events-none absolute -right-20 -top-20 h-[140%] w-[60%]">
          <div className="h-full w-full rotate-12 bg-gradient-to-br from-navy-600/50 to-transparent" />
        </ParallaxLayer>
        <div className="absolute right-0 top-0 h-px w-1/3 origin-right -rotate-12 bg-gold/60" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <p className="eyebrow !text-slate-300">Why Fudigita</p>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Built for brands
              <br />
              that think ahead.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              We blend technology, creativity and strategy to help businesses navigate the digital
              world with confidence.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 self-center">
            {whyPoints.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 100}>
                <Icon className="h-8 w-8 text-gold-light" />
                <p className="mt-3 text-sm font-semibold">{title}</p>
                <p className="mt-1 text-xs text-slate-400">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.6fr] lg:px-10">
          <Reveal>
            <p className="eyebrow">Our Work</p>
            <h2 className="section-title mt-5">
              Ideas into
              <br />
              Digital Experiences
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-500">
              We design and develop digital solutions that are functional, beautiful and built for growth.
            </p>
            <Link to="/services" className="btn-link mt-6 !text-gold">
              View Our Work <ArrowIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-card">
                <ParallaxLayer speed={0.06}>
                  <img
                    key={slide}
                    src={projects[slide].image}
                    alt={projects[slide].title}
                    className="h-[320px] w-full object-cover sm:h-[380px]"
                  />
                </ParallaxLayer>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-navy">{projects[slide].title}</p>
                  <p className="text-xs text-slate-500">{projects[slide].tag}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous project"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-sm transition hover:border-gold hover:text-gold"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next project"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-sm transition hover:border-gold hover:text-gold"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
