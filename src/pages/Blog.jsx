import { useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-6HMHCJMLS3", { page_path: "/blog" });
    }
  }, []);

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <nav className="text-sm text-muted">
          <Link to="/" className="transition hover:text-primary">
            Home
          </Link>{" "}
          / <span className="text-primary-dark">Blog</span>
        </nav>
        <h1 className="text-4xl font-semibold">Insights & Advice</h1>
        <p className="max-w-3xl text-lg text-muted">
          Fresh perspectives from GuazExpress veterans on moving, logistics, and the rhythms of Addis Ababa.
        </p>
      </div>

      <section className="space-y-8 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-primary-dark">Featured Insight</p>
            <h2 className="text-3xl font-semibold">The Month-End Move</h2>
            <p className="text-sm text-muted">
              Why the last days of the month are crowded, costly, and how to outsmart the rush with smart timing.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-dark">Author</p>
            <div className="flex items-center gap-3">
              <img
                src="/Biniyam Ketema, CEO Afobin Logisitcs PLC.jpg"
                alt="Biniyam Ketema"
                className="h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold text-primary-dark">Biniyam Ketema</p>
                <p className="text-xs text-muted">Founder, AfroBin Logistics - GuazExpress</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <img
            src="/Blog1 Assets/photo_2025-11-14_11-06-09.jpg"
            alt="Packed truck"
            className="h-48 w-full rounded-3xl object-cover"
          />
          <img
            src="/Blog1 Assets/photo_2025-11-14_11-06-22.jpg"
            alt="Crew working"
            className="h-48 w-full rounded-3xl object-cover"
          />
        </div>
        <article className="space-y-6 text-sm text-muted">
          <p>
            <strong>The Month-End Move:</strong> If you’ve ever tried to book a moving company for the last few days of the
            month, you’ve likely encountered fully booked schedules and higher prices. This isn't a coincidence; it’s a
            direct result of supply and demand. At Guaz Movers, with 16 years of experience on Ethiopian roads, we see
            this pattern every month. Understanding why helps you plan a smarter, less stressful, and more affordable move.
          </p>
          <div className="space-y-2 rounded-3xl border border-slate/10 bg-primary/5 p-4 text-sm text-primary-dark">
            <p className="font-semibold">Why Month-Ends are Chaotic</p>
            <ul className="space-y-1 pl-4 text-xs text-primary-dark">
              <li>Lease cycle alignment aligns most your move dates within a narrow 3-4 day window.</li>
              <li>Payday timing makes the end of month the most affordable time to relocate.</li>
              <li>Companies shift offices around financial cutoffs, adding commercial demand.</li>
            </ul>
          </div>
          <p>
            Peak pricing kicks in as trucks and crews stay fixed while demand spikes. Higher service rates, hidden rush
            fees, and limited negotiation power all increase the final quote. There’s also a higher risk of inexperienced
            crews or fly-by-night operators offering low prices but poor outcomes.
          </p>
          <p>
            <strong>Your strategy:</strong> Aim for mid-month moves, book 3-4 weeks ahead if you must move at month-end, and
            choose weekdays to dodge the highest demand. Even a 48-hour shift away from the 30th can unlock better pricing.
          </p>
          <p>
            <strong>How Guaz Movers helps:</strong> We operate with transparent peak pricing, prioritize bookings in the
            order received, and rely on expert crew management so your belongings stay protected even during the rush.
          </p>
          <p>
            While the end of the month feels logical, it’s often the most expensive and stressful. Shift by a week or two,
            and you’ll find better rates, more availability, and a calmer moving experience.
          </p>
          <p className="text-sm font-semibold text-primary-dark">
            Ready to plan smarter? Contact Guaz Movers today for a free, no-obligation quote and let 16 years of experience
            guide your next move.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Blog;
