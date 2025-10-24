import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { navLinks } from "../data/siteContent";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <img src={logo} alt="GuazExpress logo" className="h-12 w-12 object-contain" />
          <span className="text-xl font-bold text-slate">GuazExpress</span>
        </NavLink>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-lg border border-slate/20 p-2 text-slate transition hover:border-primary hover:text-primary lg:hidden"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <nav
          id="primary-navigation"
          className={`absolute left-4 right-4 top-[72px] space-y-4 rounded-2xl border border-slate/10 bg-white p-6 shadow-soft transition-all lg:static lg:left-auto lg:right-auto lg:top-auto lg:flex lg:items-center lg:space-y-0 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0 lg:pointer-events-auto lg:opacity-100"
          }`}
        >
          <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-base font-medium transition hover:text-primary ${
                      isActive ? "text-primary" : "text-slate"
                    }`
                  }
                  onClick={closeMenu}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="tel:+251947334444"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark lg:ml-6"
            onClick={closeMenu}
          >
            +251 947 334 444
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
