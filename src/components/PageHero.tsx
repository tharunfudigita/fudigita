import ParallaxLayer from "./ParallaxLayer";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle: string;
}

/** Dark parallax banner used at the top of the inner pages. */
export default function PageHero({ eyebrow, title, accent, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-24 pt-40 text-white">
      <ParallaxLayer speed={0.25} className="absolute inset-x-0 -top-20 h-[130%]">
        <img src="/assets/mountains-bg.svg" alt="" className="h-full w-full object-cover opacity-70" />
      </ParallaxLayer>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/60 to-navy-900" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow !text-slate-300">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          {title} {accent && <span className="text-gold-light">{accent}</span>}
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">{subtitle}</p>
      </div>
    </section>
  );
}
