import { Link } from "react-router-dom";
import { innovationHighlights, visionPoints, ecoCommitments } from "../data/siteContent";

const About = () => (
  <div className="space-y-16">
    <div className="space-y-4">
      <nav className="text-sm text-muted">
        <Link to="/" className="transition hover:text-primary">
          Home
        </Link>{" "}
        / <span className="text-primary-dark">About</span>
      </nav>
      <h1 className="text-4xl font-semibold">First logistics company for moving services in Ethiopia.</h1>
      <p className="max-w-3xl text-lg text-muted">
        We are on a mission to make city logistics frictionless. GuazExpress blends supply chain
        expertise, technology leadership, and financial stewardship to serve Addis Ababa and regions
        beyond.
      </p>
    </div>

    <section className="grid gap-10 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Our Story
        </span>
        <h2 className="text-3xl">Rooted in insight, built for action</h2>
        <p className="text-muted">
          GuazExpress was founded by logistics professionals who witnessed gaps in Ethiopia urban
          logistics services. A decade in the supply chain sector, combined with academic research at
          master level, revealed the need for dependable, tech-enabled solutions.
        </p>
        <p className="text-muted">
          Our founders united their strengths in logistics management, software engineering, and
          finance to build a company that sets a new benchmark. We integrate knowledge from public and
          private institutions, backed by practical experience that keeps customers at the center.
        </p>
      </div>
      <div className="space-y-4 rounded-3xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-xl font-semibold text-primary-dark">Expertise that powers GuazExpress</h3>
        <p className="text-sm text-muted">
          <strong className="text-primary-dark">Logistics leadership:</strong> 10+ years managing complex city
          logistics and moving services.
        </p>
        <p className="text-sm text-muted">
          <strong className="text-primary-dark">Technology excellence:</strong> Software specialists with a
          decade creating secure platforms for government and private organizations.
        </p>
        <p className="text-sm text-muted">
          <strong className="text-primary-dark">Financial stewardship:</strong> Finance experts with 12 years of
          business control experience ensuring sustainable growth.
        </p>
      </div>
    </section>

    <section className="grid gap-10 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft lg:grid-cols-2">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Vision and Mission
        </span>
        <h2 className="text-3xl">Best innovative solutions for urban logistics</h2>
        <p className="text-muted">
          Our vision is to provide comprehensive logistical solutions for the sustainable growth of
          city centers through dependable and creative service, earning the trust and preference of
          customers.
        </p>
        <p className="text-muted">
          Our mission is to become Ethiopia leading city logistics service provider by utilizing
          information, innovation, and service excellence to create sustainable social and economic
          improvements for all stakeholders.
        </p>
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

    <section className="space-y-8">
      <header className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          What Sets Us Apart
        </span>
        <h2 className="text-3xl">Driving the future of city logistics</h2>
      </header>
      <div className="grid gap-6 lg:grid-cols-3">
        {innovationHighlights.map(({ label, description, tag }) => (
          <article
            key={label}
            className="rounded-3xl border border-slate/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{label}</h3>
              <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary-dark">
                {tag}
              </span>
            </div>
            <p className="mt-4 text-sm text-muted">{description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="grid gap-10 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Our Experience
        </span>
        <h2 className="text-3xl">We bring more than shipments</h2>
        <p className="text-muted">
          Over ten years of experience means we anticipate challenges before they appear. We pair insight
          with agility to keep each move on track and every customer confident.
        </p>
      </div>
      <div className="space-y-4 rounded-3xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-xl font-semibold text-primary-dark">Our commitment</h3>
        <ul className="space-y-2 text-sm text-muted">
          {ecoCommitments.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default About;
