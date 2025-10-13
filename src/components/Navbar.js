import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { Dialog, DialogPanel } from "@headlessui/react";

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
    <header className="fixed w-full top-0 z-50 bg-[#0F172A] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <nav
        aria-label="Global"
        className="flex items-center lg:justify-center p-6 lg:px-8 text-gray-100"
      >
        <LiaLaptopCodeSolid
          className="h-10 w-20 mr-auto text-white cursor-pointer rounded-full 
            transition duration-300 
            "
        />

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden ml-auto">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:bg-gray-800"
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
              className="text-sm font-semibold text-gray-100 hover:text-blue-400 transition"
            >
              {item.name}
            </HashLink>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40 bg-black/50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-[300px] overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:bg-gray-800"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <HashLink
                    smooth
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-300 hover:bg-gray-800 w-full"
                  >
                    {item.name}
                  </HashLink>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Navbar;


