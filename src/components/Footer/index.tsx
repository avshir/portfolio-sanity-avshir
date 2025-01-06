import { Link } from "react-router";

import { socials } from "../../constants/socials";
import { Container } from "../../components/Container";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-gray-100 py-4 md:py-8">
      <Container className="gap-4 flex flex-col justify-center lg:flex-row lg:justify-between items-center">
        <div className="basis-1/3">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="basis-1/3 text-white text-center lg:text-left">
          <span>
            © {new Date().getFullYear()}{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/avshir"
              className="text-accent"
            >
              avshir
            </a>
            {" | "}
            <span>Anna Shirinskaya</span>. All rights reserved
          </span>
        </div>
        <ul className="flex basis-1/3 justify-center lg:justify-end space-x-4">
          {socials &&
            socials.map((social) => (
              <li key={social.title}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={social.href}
                  title={social.title}
                  className="group flex items-center justify-center size-10 rounded-full bg-accent-gray transition-colors"
                >
                  <social.icon
                    className="fill-black group-hover:fill-accent size-5"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
