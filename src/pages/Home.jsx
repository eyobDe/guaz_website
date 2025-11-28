import { Link } from "react-router-dom";
import {
  advantageHighlights,
  coreValues,
  experienceStats,
  heroStats,
  serviceSnapshots,
  testimonials,
} from "../data/siteContent";

const serviceGallery = ["/7.png", "/House moving 1.jpg", "/3.png", "/4.png"];
const appScreenshots = [
  "/Guazapp screenshot 1.png",
  "/Guazapp screenshot 2.png",
  "/Guazapp screenshot 3.png",
  "/Guazapp screenshot 4.png",
];
const appFeatures = [
  "Place moving, delivery, and logistics requests instantly.",
  "Track drivers, trucks, and cargo in real time.",
  "Browse transparent pricing, add-ons, and discounts.",
  "Message coordinators and upload documents or photos securely.",
  "View order history, receipts, and payment portals in one place.",
];

const Home = () => (
  <div className="space-y-16 lg:space-y-20">
    <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full bg-primary/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Afro-Bin Logistics – GuazExpress
        </span>
        <h1 className="text-4xl leading-tight sm:text-5xl">Logistics, Perfected by Experience & Technology.</h1>
        <p className="text-lg text-muted">
          Guaz Express Movers & Packers is a trusted, professional team in Addis Ababa delivering fast, safe, and
          affordable home moving, office relocation, packing, loading, unloading, and transportation across the city
          and throughout Ethiopia. From furniture disassembly to fragile protection and secure transport, we keep every
          move smooth, stress-free, and on time.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/order"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark"
          >
            Get a Free Quote
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border border-slate/15 bg-white px-6 py-3 text-sm font-semibold text-slate transition hover:border-primary hover:text-primary"
          >
            Explore Our Services
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {heroStats.map(({ value, label }) => (
            <div key={label} className="rounded-2xl border border-primary/15 bg-white/80 p-4 text-primary-dark shadow-soft">
              <div className="text-3xl font-semibold">{value}</div>
              <div className="text-xs font-medium uppercase tracking-wide text-primary-dark/80">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-slate/10 bg-white/80 p-1 shadow-soft self-start">
        <img
          src="/9.png"
          alt="GuazExpress movers on the road"
          className="h-full min-h-[280px] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-4 left-4 rounded-full border border-white/50 bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          GuazExpress
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <header className="max-w-3xl space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Services Snapshot
        </span>
        <h2 className="text-3xl sm:text-4xl">Our Integrated Logistics Network.</h2>
        <p className="text-muted">
          From movers and packers in Ethiopia to industrial freight partners across borders, our integrated services keep
          your world moving.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-4">
        {serviceSnapshots.map(({ title, summary, icon }) => (
          <article
            key={title}
            className="rounded-3xl border border-slate/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-dark">{icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted">{summary}</p>
          </article>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {serviceGallery.map((src) => (
          <div key={src} className="overflow-hidden rounded-2xl border border-slate/10">
            <img src={src} alt="Afro-Bin Logistics project" className="h-40 w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-6 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Short Intro
        </span>
        <h2 className="text-3xl sm:text-4xl">The Power of Two Worlds.</h2>
        <p className="text-muted">
          At Afro-Bin Logistics - GuazExpress, we fused deep-rooted logistics expertise with agile digital innovation.
          Our founder's 16 years of leadership in packing and moving, combined with our co-founder's software prowess,
          creates a logistics solution that is both powerfully reliable and intelligently efficient.
        </p>
        <p className="text-muted">
          We don't just move goods; we move data, track assets, and deliver peace of mind. Every relocation, last-mile
          delivery, or industrial move benefits from proprietary software and a support team that speaks the language of
          technology and transportation.
        </p>
        <ul className="flex flex-wrap gap-3">
          {coreValues.map((value) => (
            <li key={value} className="rounded-full border border-slate/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate">
              {value}
            </li>
          ))}
        </ul>
      </div>
    </section>
    <section className="grid gap-6 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Internal Moving Services
        </span>
        <h2 className="text-3xl sm:text-4xl">Domestic moves that keep Addis Ababa on the go.</h2>
        <p className="text-muted">
          Our internal moving crews deliver safe, efficient relocations inside Addis Ababa and across Ethiopia. Whether
          you need home, apartment, or office moving, our experienced teams handle packing, furniture disassembly,
          secure transport, and reassembly with professionalism and care.
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
            Transparent mover and packer pricing.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
            Dedicated crews for residential and office transitions.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
            Stress-free coordination from booking to delivery.
          </li>
        </ul>
        <Link
          to="/international-relocation"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark"
        >
          View more
        </Link>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate/10 bg-surface-light">
        <img src="/7.png" alt="Internal movers loading a truck" className="h-full w-full object-cover" loading="lazy" />
      </div>
    </section>

    <section className="grid gap-8 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          GuazExpress Client App
        </span>
        <h2 className="text-3xl sm:text-4xl">Download, order, track, and pay from your phone.</h2>
        <p className="text-muted">
          Manage moves, orders, and deliveries from a single hub. The GuazExpress Client App tracks every vehicle,
          surfaces pricing, and keeps you connected to coordinators and documents.
        </p>
        <ul className="space-y-2 text-sm text-muted">
          {appFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <a
          href="https://play.google.com/store/apps/details?id=com.guazexpress.guaz_client&hl=en"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-slate/5 px-0 py-0 text-white transition hover:opacity-90"
        >
          <img
            src="/GetItOnGooglePlay_Badge_Digital_color_Finnish.png"
            alt="Get it on Google Play"
            className="h-14 w-auto object-contain"
          />
        </a>
        <p className="text-xs text-muted">
          Download the app to place, pay, and monitor every shipment from your phone.
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {appScreenshots.map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-3xl border border-slate/10 bg-surface-light"
              style={{ aspectRatio: "9 / 16" }}
            >
              <img src={src} alt="GuazExpress app screen" className="h-full w-full object-contain" loading="lazy" />
            </div>
          ))}
        </div>
        <p className="text-xs text-muted">Screenshots represent the GuazExpress Client App experience.</p>
      </div>
    </section>

      <section className="space-y-6 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft">
        <div className="space-y-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
            The GuazExpress Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl">Why Choose GuazExpress?</h2>
          <p className="text-muted">
            Movers and packers pricing stays predictable when technology optimizes every leg of the journey. From local
            movers in Addis Ababa to international cargo, you get one accountable partner.
          </p>
          <Link to="/network" className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary-dark">
            Explore the GuazExpress Network →
          </Link>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-3">
            {advantageHighlights.map(({ title, description, icon }) => (
              <article key={title} className="rounded-3xl border border-slate/10 bg-surface-light p-5 text-center">
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-dark">{icon}</div>
                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted">{description}</p>
              </article>
            ))}
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate/10">
            <img src="/5.png" alt="GuazExpress fleet" className="h-64 w-full object-cover" loading="lazy" />
          </div>
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
          <blockquote key={author} className="relative rounded-3xl border border-slate/10 bg-white p-8 shadow-soft">
            <span className="absolute -top-4 left-8 text-6xl font-bold text-primary/20">"</span>
            <p className="text-base text-muted">{quote}</p>
            <footer className="mt-6 text-sm font-semibold text-slate">- {author}</footer>
          </blockquote>
        ))}
      </div>
    </section>

    <section className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 text-white shadow-soft">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Ready to Experience a Smarter Way to Move?</h2>
          <p className="max-w-2xl text-sm text-white/85">
            Join the countless individuals and businesses who trust GuazExpress for their most critical logistics needs.
            Movers and packers price discussions, last-mile optimization, or industrial dispatch—our experts answer it
            all.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            to="/order"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
          >
            Connect With Our Logistics Expert Today
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
