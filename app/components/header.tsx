'use client';

import { useState } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 max-w-[1920px] m-auto uppercase text-white">
      <nav
        className="flex items-center justify-between p-6 lg:px-24"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Lorem ipsum</span>
            <img
              className="h-20 w-auto"
              src="/logo-white-text.png"
              alt="Dual Strength logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden" onClick={() => setOpenMenu(!openMenu)}>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blueLight"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="#home"
            className="text-sm font-semibold leading-6 text-blueLight"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-sm font-semibold leading-6 text-blueLight"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-sm font-semibold leading-6 text-blueLight"
            onClick={() => setOpenMenu(false)}
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-semibold leading-6 text-blueLight"
            onClick={() => setOpenMenu(false)}
          >
            Contact
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      {openMenu && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          {/* <!-- Background backdrop, show/hide based on slide-over state. -->  */}
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="./derkachLogo.png" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setOpenMenu(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#home"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setOpenMenu(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setOpenMenu(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setOpenMenu(false)}
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setOpenMenu(false)}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
