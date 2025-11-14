import { Link } from "react-router-dom";
import { services, ecoCommitments } from "../data/siteContent";

const gallery = ["/12.png", "/House moving 2.jpg", "/3.png"];

const Services = () => (
  <div className="space-y-16">
    <div className="space-y-4">
      <nav className="text-sm text-muted">
        <Link to="/" className="transition hover:text-primary">
          Home
        </Link>{" "}
        / <span className="text-primary-dark">Services</span>
      </nav>
      <h1 className="text-4xl font-semibold">Comprehensive Logistics Solutions.</h1>
      <p className="max-w-3xl text-lg text-muted">
        Powered by our unique blend of hands-on experience and a dynamic digital network, GuazExpress delivers movers
        and packers excellence, international relocations, last-mile delivery, and industrial logistics with a single
        accountable team.
      </p>
    </div>

    <section className="space-y-8">
      <header className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Core Services
        </span>
        <h2 className="text-3xl">Integrated support for every move.</h2>
        <p className="max-w-3xl text-muted">
          Relocations across borders, office transitions, last-mile networks, and commercial logistics all run on the
          same intelligent GuazExpress platform.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {services.map(({ title, description, features, ctaLabel, ctaLink }) => (
          <article key={title} className="flex h-full flex-col rounded-3xl border border-slate/10 bg-white p-6 shadow-soft">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm text-muted">{description}</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to={ctaLink}
              className="mt-auto inline-flex items-center justify-start pt-6 text-sm font-semibold text-primary transition hover:text-primary-dark"
            >
              {ctaLabel}
            </Link>
          </article>
        ))}
      </div>
    </section>

    <section className="grid gap-8 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Our Pillars
        </span>
        <h2 className="text-3xl">How we deliver movers and packers excellence.</h2>
        <p className="text-muted">
          Every logistics program is anchored in four commitments—reliability, visibility, simplicity, and national
          growth.
        </p>
        <ul className="grid gap-3 text-sm text-muted">
          {ecoCommitments.map((item) => (
            <li key={item} className="rounded-2xl border border-slate/10 bg-surface-light px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-4">
        {gallery.map((src) => (
          <div key={src} className="overflow-hidden rounded-2xl border border-slate/10">
            <img src={src} alt="GuazExpress service delivery" className="h-40 w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>

    <section className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 text-white shadow-soft">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Need a tailored logistics program?</h2>
          <p className="max-w-2xl text-sm text-white/85">
            Tell us about your movers and packers requirements, last-mile delivery challenges, or industrial logistics
            plans. Our consultants map the fastest path from strategy to execution.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            to="/order"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
          >
            Get a Quote
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Talk to a Specialist
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
