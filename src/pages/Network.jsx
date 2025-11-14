import { Link } from "react-router-dom";
import { networkFlow, networkBenefits } from "../data/siteContent";

const gallery = ["/4.png", "/5.png", "/6.png"];

const Network = () => (
  <div className="space-y-16">
    <div className="space-y-4">
      <nav className="text-sm text-muted">
        <Link to="/" className="transition hover:text-primary">
          Home
        </Link>{" "}
        / <span className="text-primary-dark">Network</span>
      </nav>
      <h1 className="text-4xl font-semibold">The GuazExpress Advantage: Intelligence on the Move.</h1>
      <p className="max-w-3xl text-lg text-muted">
        Our proprietary software is the brain behind our massive operation, transforming a traditional fleet into a
        responsive, intelligent network that never sleeps.
      </p>
    </div>

    <section className="grid gap-8 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          How It Works
        </span>
        <h2 className="text-3xl">Intelligence orchestrating every mile.</h2>
        <div className="space-y-4">
          {networkFlow.map(({ title, description }) => (
            <article key={title} className="rounded-3xl border border-slate/10 bg-surface-light p-5">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        {gallery.map((src) => (
          <div key={src} className="overflow-hidden rounded-2xl border border-slate/10">
            <img src={src} alt="GuazExpress technology in action" className="h-44 w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-6 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Benefits for You
        </span>
        <h2 className="text-3xl">Technology that protects your promise.</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-4">
        {networkBenefits.map(({ title, description }) => (
          <article key={title} className="rounded-3xl border border-slate/10 bg-white p-5 shadow-soft">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted">{description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 text-white shadow-soft">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">Bring intelligence to your logistics.</h2>
        <p className="max-w-3xl text-sm text-white/85">
          No more no-show trucks. Whether you need delivery companies in Ethiopia to scale faster or industrial logistics
          that spans borders, the GuazExpress network is ready.
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <Link
          to="/order"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
        >
          Book the Network
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Talk to an Expert
        </Link>
      </div>
    </section>
  </div>
);

export default Network;
