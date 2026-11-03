import PageHero from "../components/PageHero";
import ParallaxLayer from "../components/ParallaxLayer";
import Reveal from "../components/Reveal";
import CtaBanner from "../components/CtaBanner";
import { ChartIcon, CodeIcon, HeartIcon, PaletteIcon, UsersIcon } from "../components/Icons";

const values = [
  { Icon: CodeIcon, title: "Technology Driven", text: "Modern tools, scalable solutions and future-ready engineering." },
  { Icon: PaletteIcon, title: "Creative Approach", text: "Design that connects with people and reflects your brand." },
  { Icon: ChartIcon, title: "Strategic Thinking", text: "Decisions grounded in data, not guesswork." },
  { Icon: HeartIcon, title: "Client Centric", text: "Your goals are our priority, always." },
  { Icon: UsersIcon, title: "Long-term Partnership", text: "Your growth is our mission." },
];

const stats = [
  { value: "4", label: "Core service lines" },
  { value: "100%", label: "Client-focused" },
  { value: "24/7", label: "Always reachable" },
  { value: "∞", label: "Ideas to explore" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Fudigita"
        title="Your Partner in"
        accent="Digital Growth."
        subtitle="We are a passionate team of developers, marketers and creators helping businesses build a strong online presence."
      />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <div className="relative h-[460px] overflow-hidden rounded-2xl bg-navy-900 shadow-card">
              <ParallaxLayer speed={0.14} className="absolute inset-x-0 -top-14 h-[125%]">
                <img src="/assets/about-office.svg" alt="Fudigita workspace" className="h-full w-full object-cover" />
              </ParallaxLayer>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow">Who we are</p>
            <h2 className="section-title mt-5">More than just a digital agency.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              Fudigita is a full-service digital agency dedicated to turning innovative ideas into
              powerful digital experiences. We combine technical expertise with creative strategy to
              deliver solutions that make an impact.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              Whether you need a modern website, a scalable application, a memorable brand or a
              marketing strategy that finds your audience, we work as an extension of your team from
              the first idea to long after launch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-white">
        <ParallaxLayer speed={0.2} className="pointer-events-none absolute -right-24 -top-16 h-[150%] w-1/2">
          <div className="h-full w-full rotate-12 bg-gradient-to-bl from-navy-600/50 to-transparent" />
        </ParallaxLayer>
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 lg:grid-cols-4 lg:px-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <p className="text-4xl font-bold text-gold-light">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-300">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow">What we stand for</p>
            <h2 className="section-title mt-5">Built for brands that think ahead.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="h-full rounded-xl border border-slate-100 p-6 shadow-card transition hover:-translate-y-1 hover:border-gold/40">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-navy">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-500">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
