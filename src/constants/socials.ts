import { FunctionComponent } from "react";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface ISocial {
  href: string;
  title: string;
  icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const socials: ISocial[] = [
  {
    href: "mailto:av.shirinskaya@gmail.com",
    title: "Email",
    icon: MdEmail,
  },
  {
    href: "https://www.linkedin.com/in/anna-shirinskaya/",
    title: "LinkedinIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://github.com/avshir",
    title: "Github",
    icon: FaGithub,
  },
  // {
  //   href: "tel:+48786651374",
  //   title: "Phone",
  //   icon: FaPhoneAlt,
  // },
];
