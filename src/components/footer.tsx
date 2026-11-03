import type { ComponentType, SVGProps } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { InstagramIcon, LinkedinIcon, XIcon, YoutubeIcon } from "./Icons";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const socials: { label: string; href: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: LinkedinIcon },
  { label: "X", href: "https://x.com", Icon: XIcon },
  { label: "Instagram", href: "https://www.instagram.com", Icon: InstagramIcon },
  { label: "YouTube", href: "https://www.youtube.com", Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Link to="/" aria-label="Fudigita home">
            <Logo light />
          </Link>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-xs font-medium text-slate-300 transition hover:text-gold">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-200 transition hover:bg-gold hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-[11px] text-slate-400 sm:flex-row">
          <p>© 2026 Fudigita. All rights reserved.</p>
          <p>Building digital experiences for a better tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
