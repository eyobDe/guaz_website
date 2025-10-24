import { Link } from "react-router-dom";
import { services, ecoCommitments, innovationHighlights } from "../data/siteContent";

const Services = () => (
  <div className="space-y-16">
    <div className="space-y-4">
      <nav className="text-sm text-muted">
        <Link to="/" className="transition hover:text-primary">
          Home
        </Link>{" "}
        / <span className="text-primary-dark">Services</span>
      </nav>
      <h1 className="text-4xl font-semibold">Core services designed for Addis Ababa and beyond</h1>
      <p className="max-w-3xl text-lg text-muted">
        Every relocation, delivery, and logistics program is tailored to match your timeline. We combine
        reliable crews, purpose-built vehicles, and tech-enabled coordination to safeguard every move.
      </p>
    </div>

    <section className="space-y-8">
      <header className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Core Services
        </span>
        <h2 className="text-3xl">Services we serve</h2>
        <p className="max-w-3xl text-muted">
          From residential moves to complex industrial projects, GuazExpress delivers comprehensive
          moving logistics with customer-first care.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {services.map(({ title, description, secondary }) => (
          <article
            key={title}
            className="rounded-3xl border border-slate/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/40"
          >
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm text-muted">{description}</p>
            <p className="mt-3 text-sm text-muted">{secondary}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="grid gap-8 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Our Experience
        </span>
        <h2 className="text-3xl">Over 10 years of moving logistics</h2>
        <p className="text-muted">
          The AfroBin Logistics team brings a decade of practical insight to relocation planning. We help
          you navigate complexities, manage risks, and deliver every load with care.
        </p>
        <ul className="grid gap-2 text-sm text-muted sm:grid-cols-2">
          {ecoCommitments.map((item) => (
            <li key={item} className="rounded-2xl border border-slate/10 bg-surface-light px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4 rounded-3xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-xl font-semibold text-primary-dark">Driving the future of city logistics</h3>
        <div className="space-y-3">
          {innovationHighlights.slice(0, 4).map(({ label, description }) => (
            <div key={label} className="rounded-2xl border border-slate/10 bg-white/60 p-4">
              <h4 className="text-sm font-semibold text-primary-dark">{label}</h4>
              <p className="text-sm text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 text-white shadow-soft">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Need a tailored logistics program?</h2>
          <p className="max-w-2xl text-sm text-white/85">
            Our consultants map the fastest path from strategy to execution. Share your project details and
            we will design a plan that fits.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
        >
          Talk to a specialist
        </Link>
      </div>
    </section>
  </div>
);

export default Services;
