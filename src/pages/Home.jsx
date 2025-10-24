import { Link } from "react-router-dom";
import {
  coreValues,
  heroStats,
  services,
  innovationHighlights,
  experienceStats,
  testimonials,
} from "../data/siteContent";

const Home = () => (
  <div className="space-y-16 lg:space-y-20">
    <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full bg-primary/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Trusted Logistics
        </span>
        <h1 className="text-4xl leading-tight sm:text-5xl">
          City logistics that move Addis Ababa forward.
        </h1>
        <p className="text-lg text-muted">
          GuazExpress is your partner for dependable relocations, vehicle deliveries, and specialized
          transport. We blend technology, operational excellence, and a passionate team to deliver
          moving experiences customers can trust.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/order"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark"
          >
            Order a Service
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border border-slate/15 bg-white px-6 py-3 text-sm font-semibold text-slate transition hover:border-primary hover:text-primary"
          >
            Explore Services
          </Link>
        </div>
      </div>
      <div className="grid gap-4 rounded-2xl border border-slate/10 bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-semibold">Why customers choose GuazExpress</h2>
        <p className="text-sm text-muted">
          Reliability, teamwork, efficiency, and innovation are at the heart of every delivery.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {heroStats.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-center text-primary-dark"
            >
              <div className="text-3xl font-semibold">{value}</div>
              <div className="text-xs font-medium uppercase tracking-wide text-primary-dark/80">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <header className="max-w-3xl space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Our Promise
        </span>
        <h2 className="text-3xl sm:text-4xl">Logistics powered by purpose</h2>
        <p className="text-muted">
          From first contact to final delivery, we orchestrate every move with precision. Our values
          guide how we collaborate with partners, support communities, and create memorable experiences.
        </p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((value) => (
          <li key={value} className="rounded-2xl border border-slate/10 bg-white p-5 text-sm font-medium text-slate">
            {value}
          </li>
        ))}
      </ul>
    </section>

    <section className="space-y-8">
      <header className="max-w-3xl space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Our Services
        </span>
        <h2 className="text-3xl sm:text-4xl">Everything you need to relocate with confidence</h2>
        <p className="text-muted">
          We offer a full spectrum of moving and logistics services for households, businesses, public
          sector partners, and industrial clients across Ethiopia.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-3">
        {services.slice(0, 3).map(({ title, description, secondary }) => (
          <article
            key={title}
            className="flex h-full flex-col rounded-2xl border border-slate/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/40"
          >
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm text-muted">{description}</p>
            <p className="mt-3 text-sm text-muted">{secondary}</p>
            <Link
              to="/services"
              className="mt-auto inline-flex items-center justify-start pt-4 text-sm font-semibold text-primary transition hover:text-primary-dark"
            >
              See full service list
            </Link>
          </article>
        ))}
      </div>
    </section>

    <section className="grid gap-10 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Driving the Future
        </span>
        <h2 className="text-3xl sm:text-4xl">Smart logistics engineered for Addis Ababa</h2>
        <p className="text-muted">
          We combine insight, innovation, and sustainable practices to deliver experiences that keep
          commerce moving. Continuous improvement keeps us ahead and supports our partners growth.
        </p>
        <div className="space-y-4">
          {innovationHighlights.map(({ label, description, tag }) => (
            <div key={label} className="flex gap-4 rounded-2xl border border-slate/10 p-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-sm font-semibold text-primary-dark">
                {tag}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{label}</h3>
                <p className="text-sm text-muted">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-soft">
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold">Ready to plan your next move?</h3>
          <p className="text-sm text-white/90">
            Our specialists co-create logistics programs that balance speed, safety, and value.
          </p>
        </div>
        <Link
          to="/order"
          className="mt-6 inline-flex items-center justify-center self-start rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
        >
          Start Your Order
        </Link>
      </div>
    </section>

    <section className="space-y-8">
      <header className="max-w-3xl space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Our Experience
        </span>
        <h2 className="text-3xl sm:text-4xl">Over a decade of relocation expertise</h2>
        <p className="text-muted">
          Ten years in moving logistics gives us the insight to prevent risks, minimize delays, and
          create friendly, efficient service moments across every touchpoint.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {experienceStats.map(({ value, label }) => (
          <div
            key={label}
            className="rounded-2xl border border-slate/10 bg-white p-6 text-center shadow-soft"
          >
            <div className="text-3xl font-semibold text-primary-dark">{value}</div>
            <p className="mt-2 text-sm font-medium text-muted">{label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-8">
      <header className="max-w-3xl space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Testimonials
        </span>
        <h2 className="text-3xl sm:text-4xl">What clients say</h2>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {testimonials.map(({ quote, author }) => (
          <blockquote
            key={author}
            className="relative rounded-3xl border border-slate/10 bg-white p-8 shadow-soft"
          >
            <span className="absolute -top-4 left-8 text-6xl font-bold text-primary/20">"</span>
            <p className="text-base text-muted">{quote}</p>
            <footer className="mt-6 text-sm font-semibold text-slate">- {author}</footer>
          </blockquote>
        ))}
      </div>
    </section>

    <section className="grid gap-8 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft lg:grid-cols-2">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Mobile Experience
        </span>
        <h2 className="text-3xl sm:text-4xl">Get the GuazExpress app</h2>
        <p className="text-muted">
          Manage moves, request vehicles, and order deliveries from your phone. The app connects
          individuals, businesses, and VIP clients with a single logistics hub.
        </p>
        <a
          href="https://play.google.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark"
        >
          Download on Google Play
        </a>
      </div>
      <div className="rounded-3xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-xl font-semibold text-primary-dark">What you can do</h3>
        <ul className="mt-4 space-y-3 text-sm text-muted">
          <li>Arrange home moving services for a hassle-free relocation experience.</li>
          <li>Order any vehicle to transport goods or for personal use.</li>
          <li>Shop from stores and have items delivered conveniently.</li>
          <li>Track deliveries and receive notifications in real time.</li>
        </ul>
      </div>
    </section>
  </div>
);

export default Home;
