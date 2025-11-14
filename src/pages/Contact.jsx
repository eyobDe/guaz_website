import { useState } from "react";
import { Link } from "react-router-dom";
import { contactDetails, socialLinks } from "../data/siteContent";
import { sendContactEmails } from "../utils/email";

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message || !formData.service) {
      setStatus({ type: "error", message: "Please complete the required fields before submitting your message." });
      return;
    }

    try {
      setStatus({ type: "loading", message: "Submitting your message..." });
      await sendContactEmails(formData);
      setStatus({ type: "success", message: "Thank you. Our team will reach out shortly." });
      setFormData(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        message: error?.message || "We could not submit your message. Please try again or call our team directly.",
      });
    }
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
        <h1 className="text-4xl font-semibold">Let's Move Your World.</h1>
        <p className="max-w-3xl text-lg text-muted">
          Tell us about your logistics challenge, and our team will craft the perfect solution. Whether you need movers
          and packers pricing in Ethiopia, a last-mile delivery partner, or industrial logistics across borders—we are
          here.
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
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-slate">Follow us</h3>
            <ul className="mt-3 flex flex-wrap gap-3 text-sm text-muted">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" className="transition hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-slate/10 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold">Tell us about your move</h2>
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
                <label htmlFor="company" className="text-sm font-semibold text-slate">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name (optional)"
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
            </div>
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-semibold text-slate">
                Service of Interest *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate/15 bg-surface-light px-4 py-3 text-sm text-slate outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Choose a service</option>
                <option value="International Move">International Move</option>
                <option value="Local Move">Local Move</option>
                <option value="Last-Mile Delivery">Last-Mile Delivery</option>
                <option value="Commercial Logistics">Commercial Logistics</option>
              </select>
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
                    : status.type === "loading"
                    ? "border-primary/20 bg-primary/5 text-primary-dark"
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
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="rounded-3xl border border-slate/10 bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-semibold">Visit us</h2>
        <div className="mt-4 overflow-hidden rounded-3xl">
          <iframe
            title="GuazExpress location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.232856169453!2d38.780512475018824!3d9.013377391047353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b2c8b05b87%3A0x708e8b75b7bc8138!2sGuazExpress%20Movers!5e1!3m2!1sen!2set!4v1763108645616!5m2!1sen!2set"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full"
          />
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 text-white shadow-soft">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Need movers and packers pricing fast?</h2>
            <p className="max-w-2xl text-sm text-white/85">
              Submit our order form and our logistics coordinators will call you back with transparent options.
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
