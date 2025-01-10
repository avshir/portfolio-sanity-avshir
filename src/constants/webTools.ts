import { FunctionComponent } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaJsSquare,
  FaJira,
} from "react-icons/fa";
import { SiTailwindcss, SiReacthookform } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import { ViteIcon, FigmaIcon } from "./icons";

interface IWebTool {
  id: number;
  title: string;
  icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  color?: string;
}

export const webTools: IWebTool[] = [
  {
    id: 1,
    title: "HTML5",
    icon: FaHtml5,
    color: "#fc490b",
  },
  {
    id: 2,
    title: "CSS3",
    icon: FaCss3Alt,
    color: "#2196f3",
  },
  {
    id: 3,
    title: "Java Script",
    icon: FaJsSquare,
    color: "#efd81d",
  },
  {
    id: 4,
    title: "Type Script",
    icon: BiLogoTypescript,
    color: "#3178c6",
  },
  {
    id: 5,
    title: "React",
    icon: FaReact,
    color: "#087ea4",
  },
  {
    id: 6,
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38bdf8",
  },
  {
    id: 7,
    title: "Vite",
    icon: ViteIcon,
    color: "black",
  },
  {
    id: 8,
    title: "Git",
    icon: FaGitAlt,
    color: "#f64d27",
  },
  {
    id: 9,
    title: "Framer motion",
    icon: TbBrandFramerMotion,
    color: "black",
  },
  {
    id: 10,
    title: "Figma",
    icon: FigmaIcon,
    color: "black",
  },
  {
    id: 11,
    title: "Jira",
    icon: FaJira,
    color: "#1558bc",
  },
  {
    id: 12,
    title: "React Hook Form",
    icon: SiReacthookform,
    color: "#ec5990",
  },
];
