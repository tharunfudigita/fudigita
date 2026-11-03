import type { ComponentType, SVGProps } from "react";
import { BulbIcon, ChartIcon, CodeIcon, PaletteIcon } from "../components/Icons";

export interface Service {
  id: string;
  title: string;
  short: string;
  description: string;
  points: string[];
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const services: Service[] = [
  {
    id: "development",
    title: "Web & App Development",
    short:
      "Build secure, scalable and high-performance applications using modern tech stacks (.NET, React, Angular and more).",
    description:
      "From marketing websites to complex business platforms, we engineer fast, secure and maintainable software that grows with you.",
    points: [
      "Custom websites and web applications",
      "Mobile-first, responsive interfaces",
      "API design, integrations and cloud deployment",
      "Performance, security and accessibility audits",
    ],
    Icon: CodeIcon,
  },
  {
    id: "marketing",
    title: "Digital Marketing (SEO & SMO)",
    short:
      "Drive targeted traffic, improve search visibility and build engaged social communities that convert.",
    description:
      "Data-informed campaigns that put your brand in front of the right audience and turn attention into measurable growth.",
    points: [
      "Technical and on-page SEO",
      "Content strategy and social media management",
      "Paid campaigns and conversion optimisation",
      "Analytics, reporting and growth experiments",
    ],
    Icon: ChartIcon,
  },
  {
    id: "branding",
    title: "Branding & Design",
    short:
      "Craft memorable brand identities that resonate with your audience and set you apart.",
    description:
      "We shape the look, voice and feel of your brand so every touchpoint feels consistent, confident and unmistakably yours.",
    points: [
      "Logo and visual identity systems",
      "UI / UX design and prototyping",
      "Brand guidelines and design systems",
      "Marketing collateral and presentations",
    ],
    Icon: PaletteIcon,
  },
  {
    id: "creative",
    title: "Creative Solutions",
    short:
      "From strategy to execution, we bring creative ideas to life with purpose and impact.",
    description:
      "Workshops, campaigns and one-of-a-kind digital experiences that solve real business problems in unexpected ways.",
    points: [
      "Discovery workshops and product strategy",
      "Campaign concepts and storytelling",
      "Motion graphics and video content",
      "Automation and workflow ideas that save time",
    ],
    Icon: BulbIcon,
  },
];
