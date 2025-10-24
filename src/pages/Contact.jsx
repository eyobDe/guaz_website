import { useState } from "react";
import { Link } from "react-router-dom";
import { contactDetails } from "../data/siteContent";

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus({ type: "error", message: "Please complete the required fields before submitting your message." });
      return;
    }

    setStatus({ type: "success", message: "Thank you. Our team will reach out shortly." });
    setFormData(initialState);
  };

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <nav className="text-sm text-muted">
          <Link to="/" className="transition hover:text-primary">
            Home
          </Link>{" "}
          / <span className="text-primary-dark">Contact</span>
        </nav>
        <h1 className="text-4xl font-semibold">Contact GuazExpress</h1>
        <p className="max-w-3xl text-lg text-muted">
          We are here to help. Reach out for logistics support, pricing, partnerships, or any other questions and our
          team responds quickly.
        </p>
      </div>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
        <div className="space-y-6 rounded-3xl border border-slate/10 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold">Contact details</h2>
          <ul className="space-y-4 text-sm text-muted">
            {contactDetails.map(({ label, value, href }) => (
              <li key={label}>
                <span className="block text-xs font-semibold uppercase tracking-wide text-primary-dark">{label}</span>
                {href ? (
                  <a href={href} className="mt-1 inline-block text-sm text-slate transition hover:text-primary">
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-slate">{value}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate/10 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold">Drop a line for us</h2>
          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate/15 bg-surface-light px-4 py-3 text-sm text-slate outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate/15 bg-surface-light px-4 py-3 text-sm text-slate outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-slate">
                  Phone *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="09........"
                  className="w-full rounded-2xl border border-slate/15 bg-surface-light px-4 py-3 text-sm text-slate outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-slate">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full rounded-2xl border border-slate/15 bg-surface-light px-4 py-3 text-sm text-slate outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your request"
                className="w-full rounded-2xl border border-slate/15 bg-surface-light px-4 py-3 text-sm text-slate outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {status && (
              <div
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-primary/30 bg-primary/10 text-primary-dark"
                    : "border-red-200 bg-red-50 text-red-600"
                }`}
              >
                {status.message}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 text-white shadow-soft">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Order now and experience reliable logistics</h2>
            <p className="max-w-2xl text-sm text-white/85">
              Need moving support today? Submit an order form and our team will call you back.
            </p>
          </div>
          <Link
            to="/order"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
          >
            Place an order
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
