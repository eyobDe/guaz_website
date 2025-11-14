import { Link } from "react-router-dom";
import { navLinks, socialLinks } from "../data/siteContent";

const quickLinks = navLinks.filter(({ name }) => ["Home", "About", "Services", "Contact", "Get a Quote"].includes(name));

const Footer = () => (
  <footer className="mt-16 bg-slate text-white">
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[1.5fr,1fr,1fr,1fr] lg:px-8">
      <div className="space-y-4">
        <div className="text-2xl font-semibold text-white">Afro-Bin Logistics - GuazExpress</div>
        <p className="max-w-md text-sm text-white/70">Logistics, Perfected.</p>
        <p className="max-w-md text-sm text-white/70">
          Movers and packers in Ethiopia backed by technology, transparency, and an expanding last-mile network.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
        <ul className="mt-4 space-y-3 text-sm text-white/70">
          {quickLinks.map(({ name, path }) => (
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
          <li>Around Hayahulet, Nesibu Mola Building, 3rd floor, Addis Ababa</li>
          <li>
            <a href="mailto:contact@guazexpress.com" className="transition hover:text-white">
              contact@guazexpress.com
            </a>
          </li>
          <li>
            <a href="tel:+251947334444" className="transition hover:text-white">
              +251 947 33 44 44
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">Connect</h3>
        <ul className="mt-4 space-y-3 text-sm text-white/70">
          {socialLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" className="transition hover:text-white">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6 space-y-2 text-xs text-white/60">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
      &copy; 2025 Afro-Bin Logistics - GuazExpress. All rights reserved.
    </div>
  </footer>
);

export default Footer;
