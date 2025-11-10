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
      <h1 className="text-4xl font-semibold">AfroBin Logistics - Guaz Express: Ethiopia’s Pioneering Technology-Driven Logistics Company.</h1>
      <p className="max-w-3xl text-lg text-muted">
        AfroBin Logistics - Guaz Express is a premier Ethiopian logistics company specializing in movers and packers relocation services, last-mile delivery, and industrial cargo transportation. Established in Addis Ababa with a commitment to efficiency, technology, and customer satisfaction, we operate a fleet integrated with a custom-built logistics management system to deliver end-to-end solutions tailored to Ethiopia.
      </p>
    </div>

    <section className="grid gap-10 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Our Story
        </span>
        <h2 className="text-3xl">Rooted in insight, built for action</h2>
        <p className="text-muted">
          We move beyond basic transport by focusing on value. Our differentiator is the combination of proprietary logistics software and deep local expertise. The result is higher on-time delivery rates, reduced costs, and maximum scalability for businesses in Addis Ababa and beyond.
        </p>
        <p className="text-muted">
          Our founders united strengths in logistics management, software engineering, and finance to build a company that sets a new benchmark—technology-first, customer-obsessed, and operationally excellent.
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
        <h2 className="text-3xl">Our Mission and Vision</h2>
        <p className="text-muted">
          <strong>Vision:</strong> To revolutionize logistics in Ethiopia through innovation, reliability, and unmatched service excellence.
        </p>
        <p className="text-muted">
          <strong>Mission:</strong> Deliver secure, timely, and cost-effective logistics solutions by leveraging cutting-edge technology for real-time tracking, professional mover & packer services, and an expanding last-mile network for Ethiopia's growing retail and e-commerce sectors.
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
