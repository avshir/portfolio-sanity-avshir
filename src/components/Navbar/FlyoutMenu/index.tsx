// https://tailwindui.com/components/marketing/elements/headers
// https://tailwindui.com/components/application-ui/navigation/navbars
import { useState } from "react";
import { Link, NavLink } from "react-router";

import { HiBars3, HiXMark } from "react-icons/hi2";
import { Dialog, DialogPanel } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

import Logo from "../../Logo";
import { navlinks } from "../../../constants/navlinks";

const FlyoutMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const openMobileMenu = () => setMobileMenuOpen(true);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    twMerge(
      "text-gray-50 py-2 font-medium border-b-2 border-transparent hover:border-accent transition-all duration-300",
      isActive && "text-accent"
    );

  return (
    <>
      <nav aria-label="Global" className="flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>

        {/* Mobile menu button*/}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={openMobileMenu}
            className="-m-2.5 inline-flex items-center rounded-xl justify-center p-2.5 text-gray-50 hover:text-accent transition-color hover:bg-accent/10"
          >
            <span className="sr-only">Open main menu</span>
            <HiBars3 aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* Desktop menu */}
        <ul className="hidden items-center lg:flex lg:gap-x-8">
          {navlinks.map((item) => (
            <li>
              <NavLink key={item.label} to={item.href} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Profile dropdown */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden "
      >
        {/* <div className="fixed inset-0 z-10" /> */}
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto border-l border-accent-gray/20 bg-black px-6 py-6 text-gray-50 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 divide-y divide-gray-50/20">
          <div className="flex items-center justify-between py-3">
            <Link to="/" onClick={closeMobileMenu}>
              <Logo />
            </Link>
            <button
              type="button"
              onClick={closeMobileMenu}
              className="-m-2.5 rounded-xl p-2.5 text-gray-50 hover:text-accent transition-color hover:bg-accent-gray/20"
            >
              <span className="sr-only">Close menu</span>
              <HiXMark aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="flow-root">
            <div className="space-y-2 py-3">
              {navlinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    twMerge(
                      "-mx-3 block px-3 py-2 font-medium border-l-2 border-transparent rounded-tr-xl rounded-br-xl  hover:border-accent transition-all hover:bg-accent-gray/20",
                      isActive && "active text-accent"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default FlyoutMenu;
