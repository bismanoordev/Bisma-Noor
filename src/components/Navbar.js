import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT ME", href: "/#about" },
  { name: "Service", href: "/#service" },
  { name: "Skills", href: "/#skills" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Contact", href: "/#contact" }
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
    setMobileMenuOpen(false);
  };

  return (
    <div>
      <header className="fixed w-full top-0 z-50 bg-[#0a0f1c] backdrop-blur-md border-b border-gray-800 shadow-md">
        <nav
          aria-label="Global"
          className="flex items-center lg:justify-center p-6 lg:px-8 from-gray-900 to-black text-gray-100 "
        >
          <LiaLaptopCodeSolid
            className="h-10 w-20 mr-auto text-white cursor-pointer rounded-full 
              transition duration-300 
              hover:shadow-[0_0_25px_5px_rgba(0,150,255,0.7)]"
          />

          <div className="flex lg:hidden ml-auto">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500 hover:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden  lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <HashLink
                smooth
                // key={item.name}
                to={item.href}
                className="text-sm/6 font-semibold text-gray-100 "
              >
                {item.name}
              </HashLink>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-40" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-[300px] overflow-y-auto bg-gray-900  p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:bg-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <button
                      onClick={() => handleNavigate(item?.href)}
                      className="-mx-3 w-full items-start block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-300 hover:bg-gray-700"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-300 hover:bg-gray-700"
                  ></a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}

export default Navbar;
