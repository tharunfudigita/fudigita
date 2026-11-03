import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps, children: ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

export const CodeIcon = (p: IconProps) =>
  base(p, <><path d="m8 7-5 5 5 5" /><path d="m16 7 5 5-5 5" /><path d="m14 4-4 16" /></>);

export const ChartIcon = (p: IconProps) =>
  base(p, <><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-8" /><path d="M22 20H2" /><path d="m3 7 5-4 5 4 6-3" /></>);

export const PaletteIcon = (p: IconProps) =>
  base(p, <><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 2-2 0-1.3-1-1.7-1-3 0-1.2 1-2 2.2-2H17a4 4 0 0 0 4-4c0-3.9-4-7-9-7Z" /><circle cx="7.5" cy="11" r="1" /><circle cx="10" cy="7" r="1" /><circle cx="15" cy="7" r="1" /></>);

export const BulbIcon = (p: IconProps) =>
  base(p, <><path d="M9 18h6" /><path d="M10 21h4" /><path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3Z" /></>);

export const MegaphoneIcon = (p: IconProps) =>
  base(p, <><path d="M3 11v2a1 1 0 0 0 1 1h3l8 5V5L7 10H4a1 1 0 0 0-1 1Z" /><path d="M18 9a4 4 0 0 1 0 6" /></>);

export const HeartIcon = (p: IconProps) =>
  base(p, <path d="M12 20s-8-4.7-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.3 12 20 12 20Z" />);

export const UsersIcon = (p: IconProps) =>
  base(p, <><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="9" r="2.4" /><path d="M16 14.2c3 .2 5 2.4 5 5.3" /></>);

export const ArrowIcon = (p: IconProps) =>
  base(p, <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>);

export const ChevronLeft = (p: IconProps) => base(p, <path d="m15 6-6 6 6 6" />);
export const ChevronRight = (p: IconProps) => base(p, <path d="m9 6 6 6-6 6" />);

export const MailIcon = (p: IconProps) =>
  base(p, <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>);

export const PhoneIcon = (p: IconProps) =>
  base(p, <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />);

export const PinIcon = (p: IconProps) =>
  base(p, <><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>);

export const MenuIcon = (p: IconProps) =>
  base(p, <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>);

export const CloseIcon = (p: IconProps) =>
  base(p, <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>);

export const CheckIcon = (p: IconProps) => base(p, <path d="m5 12 5 5 9-10" />);

export const LinkedinIcon = (p: IconProps) =>
  base(p, <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M12 13c0-1.4 1-2 2-2s2 .8 2 2v3" /></>);

export const XIcon = (p: IconProps) => base(p, <><path d="m4 4 16 16" /><path d="M20 4 4 20" /></>);

export const InstagramIcon = (p: IconProps) =>
  base(p, <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5v.01" /></>);

export const YoutubeIcon = (p: IconProps) =>
  base(p, <><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="m10.5 9.5 4 2.5-4 2.5Z" /></>);

export const SearchIcon = (p: IconProps) =>
  base(p, <><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></>);

export const TargetIcon = (p: IconProps) =>
  base(p, <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" /></>);

export const RocketIcon = (p: IconProps) =>
  base(p, <><path d="M5 15c-1.5 1-2 4-2 6 2 0 5-.5 6-2" /><path d="M14 4c3-1.5 6-1 7-1 0 1 .5 4-1 7l-7 7-6-6Z" /><circle cx="15" cy="9" r="1.4" /></>);
