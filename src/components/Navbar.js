import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LiaLaptopCodeSolid } from "react-icons/lia";

const navigation = [
  { name: "HOME", href: "/#home" },
  { name: "ABOUT ME", href: "/#about" },
  { name: "Service", href: "/#service" },
  { name: "Skills", href: "/#skills" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Contact", href: "/#contact" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-[60] border-b border-cyan-300/20 bg-slate-950/90 backdrop-blur-md shadow-[0_8px_24px_rgba(2,6,23,0.45)]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center lg:justify-center px-4 sm:px-6 py-4 sm:py-5 lg:px-8 text-gray-100"
      >
        <LiaLaptopCodeSolid
          className="h-9 w-16 sm:h-10 sm:w-20 mr-auto text-white cursor-pointer rounded-full 
            transition duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]
            "
        />

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden ml-auto">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200 hover:bg-gray-800"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <HashLink
              smooth
              key={item.name}
              to={item.href}
              className="text-sm font-semibold tracking-wide text-gray-100 hover:text-cyan-300 transition hover:[text-shadow:0_0_9px_rgba(34,211,238,0.8)]"
            >
              {item.name}
            </HashLink>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[90]">
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-black/55"
            onClick={() => setMobileMenuOpen(false)}
          />

          <aside className="absolute top-0 right-0 h-screen w-[78vw] max-w-[320px] bg-slate-950/90 backdrop-blur-md ring-1 ring-cyan-300/20 shadow-[0_0_30px_rgba(2,6,23,0.8)] p-5 overflow-y-auto">
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2 text-gray-200 hover:bg-gray-800"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-4 space-y-2">
              {navigation.map((item) => (
                <HashLink
                  smooth
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-200 w-full"
                >
                  {item.name}
                </HashLink>
              ))}
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}

export default Navbar;
