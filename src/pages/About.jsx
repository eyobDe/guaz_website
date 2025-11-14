import { Link } from "react-router-dom";
import { founderJourney, visionPoints, companyValues } from "../data/siteContent";

const About = () => (
  <div className="space-y-16">
    <div className="space-y-4">
      <nav className="text-sm text-muted">
        <Link to="/" className="transition hover:text-primary">
          Home
        </Link>{" "}
        / <span className="text-primary-dark">About</span>
      </nav>
      <h1 className="text-4xl font-semibold">Our Story: Where Grit Meets Code.</h1>
      <p className="max-w-3xl text-lg text-muted">
        Guaz Express Movers & Packers is a trusted moving company based in Addis Ababa, offering fast, safe, and affordable
        home moving, office relocation, packing, loading, unloading, and transportation services across the city and
        throughout Ethiopia. We pair 16 years of field-tested logistics know-how with agile technology to keep every
        relocation visible, professional, and stress-free.
      </p>
      <p className="max-w-3xl text-lg text-muted">
        Our experienced crew handles furniture assembly/disassembly, fragile item protection, box packing, and secure
        transport so every move is smooth. Whether you’re searching for movers in Addis Ababa, nationwide moving service,
        or affordable movers and packers, Guaz Express coordinates local, long-distance, and full-service packing moves
        with care and competitive pricing.
      </p>
    </div>

    <section className="grid gap-10 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Forged in Addis Ababa
        </span>
        <h2 className="text-3xl">Rooted in insight, built for action.</h2>
        <p className="text-muted">
          We saw the potential of movers and packers in Ethiopia, yet we also witnessed gaps in transparency and
          technology. Afro-Bin Logistics bridges that gap—connecting 300+ trucks with a control tower that keeps
          customers informed and cargo protected.
        </p>
        <p className="text-muted">
          The result is a logistics network designed for households, offices, and enterprises that must move at the speed
          of Ethiopia’s growth.
        </p>
      </div>
      <figure className="rounded-3xl border border-primary/20 bg-primary/5 p-6">
        <img src="/10.png" alt="Afro-Bin Logistics loading operation" className="h-64 w-full rounded-2xl object-cover" loading="lazy" />
        <figcaption className="mt-4 text-sm text-muted">
          “In 2025, we launched Afro-Bin Logistics - GuazExpress. It is a tech-powered logistics network built on
          irreplaceable, hard-won experience.”
        </figcaption>
      </figure>
    </section>

    <section className="space-y-8">
      <header className="max-w-3xl space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          The Founders' Journey
        </span>
        <h2 className="text-3xl">Grit meets code.</h2>
        <p className="text-muted">
          Two perspectives, one company. A veteran mover who knows every corner of Addis Ababa. A technologist who knows
          that data can unlock efficiency.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-3">
        {founderJourney.map(({ title, description }) => (
          <article key={title} className="rounded-3xl border border-slate/10 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm text-muted">{description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="grid gap-10 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft lg:grid-cols-2">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Vision & Mission
        </span>
        <h2 className="text-3xl">Built with purpose.</h2>
        <p className="text-muted">
          <strong>Vision:</strong> “To revolutionize logistics in Ethiopia through innovation, reliability, and unmatched
          service excellence.”
        </p>
        <p className="text-muted">
          <strong>Mission:</strong> “To empower movement and commerce in Ethiopia with logistics solutions that are
          reliable, visible, and surprisingly simple.”
        </p>
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6">
          <h3 className="text-lg font-semibold text-primary-dark">Our promise</h3>
          <p className="mt-3 text-sm text-muted">
            Reliable movers and packers pricing, transparent tracking, and a single partner for home moves, office
            relocations, and industrial logistics.
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {visionPoints.map(({ title, description, tag }) => (
          <div key={title} className="flex gap-4 rounded-3xl border border-slate/10 p-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-sm font-semibold text-primary-dark">
              {tag}
            </span>
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-muted">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="grid gap-10 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <figure className="rounded-3xl border border-primary/20 bg-primary/5 p-6">
        <img src="/11.png" alt="Team GuazExpress coordinating deliveries" className="h-72 w-full rounded-2xl object-cover" loading="lazy" />
        <figcaption className="mt-3 text-sm text-muted">
          Growing with Ethiopia: last-mile delivery engineered for e-commerce and national retail.
        </figcaption>
      </figure>
      <div className="space-y-6">
        <div>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
            Our Values
          </span>
          <h2 className="mt-4 text-3xl">What guides every decision.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {companyValues.map(({ title, description }) => (
            <article key={title} className="rounded-3xl border border-slate/10 bg-surface-light p-5">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
