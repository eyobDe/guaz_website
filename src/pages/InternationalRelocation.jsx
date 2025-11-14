import { Link } from "react-router-dom";

const InternationalRelocation = () => (
  <div className="space-y-16">
    <div className="space-y-4">
      <nav className="text-sm text-muted">
        <Link to="/" className="transition hover:text-primary">
          Home
        </Link>{" "}
        / <span className="text-primary-dark">International Relocation</span>
      </nav>
      <h1 className="text-4xl font-semibold">Your Trusted Partner for International Relocation</h1>
      <p className="max-w-3xl text-lg text-muted">
        Moving abroad from Ethiopia is a significant journey, and AfroBin Logistics PLC stands beside you with detailed
        planning, secure packing, customs expertise, and a global network to keep your move seamless from Addis Ababa to
        anywhere in the world.
      </p>
    </div>

    <section className="space-y-6 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft">
      <h2 className="text-2xl font-semibold">Comprehensive Planning and Meticulous Organization</h2>
      <p className="text-sm text-muted">
        We begin with a detailed in-home consultation in Addis Ababa so our experts can assess your belongings,
        recommend safe packing methods, and map optimal shipping routes. A clear timeline is built for collection,
        transit, and delivery so every milestone is coordinated with care.
      </p>
    </section>

    <section className="space-y-6 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft">
      <h2 className="text-2xl font-semibold">Secure, Professional Packing and Expert Handling</h2>
      <p className="text-sm text-muted">
        International moves require specialized materials and technique. We wrap fragile goods, use ISPM 15-certified
        wood for crates, and handle delicate Ethiopian cultural pieces—from jebena coffee pots to Mesobs and modern art
        —with precision so they withstand the voyage.
      </p>
    </section>

    <section className="space-y-6 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft">
      <h2 className="text-2xl font-semibold">Expert Navigation of Customs and Documentation</h2>
      <p className="text-sm text-muted">
        Customs regulations can be complex. Our team manages export permits, documentation for Ethiopian authorities,
        and import formalities at your destination. We ensure compliance with every rule, preventing delays and keeping
        your shipment moving.
      </p>
    </section>

    <section className="space-y-6 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft">
      <h2 className="text-2xl font-semibold">Flexible and Tracked Transportation Solutions</h2>
      <p className="text-sm text-muted">
        Choose air freight for speed or secure sea freight through Djibouti Port for volume. Every option comes with
        full shipment tracking so you receive real-time updates on location and arrival estimates.
      </p>
    </section>

    <section className="space-y-6 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft">
      <h2 className="text-2xl font-semibold">Unpacking, Setup, and Specialized Care</h2>
      <p className="text-sm text-muted">
        We assist after delivery with unpacking, furniture assembly, and space arrangement to help you settle in quickly.
        Our team is trained to cradle heirlooms, pianos, and antiques with custom crating so they arrive in perfect
        condition.
      </p>
    </section>

    <section className="grid gap-6 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft lg:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Insurance Coverage</h2>
        <p className="text-sm text-muted">
          Comprehensive insurance protects your belongings against loss or damage, providing peace of mind and financial
          security throughout the move.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Local Expertise & Global Network</h2>
        <p className="text-sm text-muted">
          Based in Ethiopia, we know pre-move requirements and partner with trusted agents worldwide to ease transitions,
          navigate language barriers, and deliver culturally aware service from start to finish.
        </p>
      </div>
    </section>

    <section className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 text-white shadow-soft">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">Ready for your international move?</h2>
        <p className="max-w-2xl text-sm text-white/90">
          Contact our AfroBin Logistics team for a guided relocation plan, customs support, and global tracking.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
        >
          Contact us
        </Link>
      </div>
    </section>
  </div>
);

export default InternationalRelocation;
