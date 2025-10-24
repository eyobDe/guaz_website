import { Link } from "react-router-dom";
import { navLinks } from "../data/siteContent";

const Footer = () => (
  <footer className="mt-16 bg-slate text-white">
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[2fr,1fr,1fr] lg:px-8">
      <div className="space-y-4">
        <div className="text-2xl font-semibold text-white">GuazExpress</div>
        <p className="max-w-md text-sm text-white/70">
          GuazExpress delivers innovative, customer-first logistics solutions across Ethiopia. We move
          cities forward with dependable service, technology, and a passion for people.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">Useful Links</h3>
        <ul className="mt-4 space-y-3 text-sm text-white/70">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link to={path} className="transition hover:text-white">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">Contact</h3>
        <ul className="mt-4 space-y-3 text-sm text-white/70">
          <li>22 Area Nesibu Mola Building, 3rd floor, Addis Ababa, Ethiopia</li>
          <li>
            <a href="mailto:contact@guazexpress.com" className="transition hover:text-white">
              contact@guazexpress.com
            </a>
          </li>
          <li>
            <a href="tel:+251947334444" className="transition hover:text-white">
              +251 947 334 444
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
      &copy; 2025 AfroBin Logistics | GuazExpress. All rights reserved.
    </div>
  </footer>
);

export default Footer;
