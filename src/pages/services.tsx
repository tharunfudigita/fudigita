import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ParallaxLayer from "../components/ParallaxLayer";
import Reveal from "../components/Reveal";
import CtaBanner from "../components/CtaBanner";
import { ArrowIcon, CheckIcon, RocketIcon, SearchIcon, TargetIcon, BulbIcon } from "../components/Icons";
import { services } from "../data/services";

const process = [
  { Icon: SearchIcon, title: "Discover", text: "We learn your business, audience and goals." },
  { Icon: BulbIcon, title: "Strategise", text: "We shape a clear plan and roadmap." },
  { Icon: TargetIcon, title: "Create", text: "Design and engineering, in tight feedback loops." },
  { Icon: RocketIcon, title: "Launch & Grow", text: "We ship, measure and keep improving." },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="End-to-end digital solutions"
        accent="for your brand."
        subtitle="From stunning websites to intelligent automation, we help businesses grow with technology, creativity and strategic thinking."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-6 lg:px-10">
          {services.map(({ id, title, description, points, Icon }, i) => (
            <Reveal key={id}>
              <article id={id} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative h-72 overflow-hidden rounded-2xl bg-navy shadow-card">
                  <ParallaxLayer speed={0.1} className="absolute inset-x-0 -top-10 h-[130%]">
                    <img src="/assets/mountains-bg.svg" alt="" className="h-full w-full object-cover opacity-80" />
                  </ParallaxLayer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gold-soft text-gold shadow-xl">
                      <Icon className="h-10 w-10" />
                    </span>
                  </div>
                </div>

                <div>
                  <p className="eyebrow">0{i + 1}</p>
                  <h2 className="section-title mt-4">{title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-500">{description}</p>
                  <ul className="mt-6 space-y-3">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-link mt-8 !text-gold">
                    Talk to us about this <ArrowIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <ParallaxLayer speed={0.15} className="pointer-events-none absolute -left-20 -top-10 h-[140%] w-1/2">
          <div className="h-full w-full -rotate-12 bg-gradient-to-tr from-navy-600/50 to-transparent" />
        </ParallaxLayer>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow !text-slate-300">How we work</p>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">A simple, transparent process.</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 100}>
                <Icon className="h-8 w-8 text-gold-light" />
                <p className="mt-4 text-xs font-semibold text-gold-light">Step 0{i + 1}</p>
                <p className="mt-1 text-base font-semibold">{title}</p>
                <p className="mt-2 text-xs leading-6 text-slate-400">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
