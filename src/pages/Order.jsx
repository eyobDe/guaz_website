import { useState } from "react";
import { Link } from "react-router-dom";
import { supportHighlights } from "../data/siteContent";
import { sendOrderEmails } from "../utils/email";

const initialState = {
  userType: "",
  organizationName: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  locations: "",
  pickup: "",
  delivery: "",
  serviceType: "",
  notes: "",
};

const Order = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.userType || !formData.firstName || !formData.lastName || !formData.phone || !formData.pickup || !formData.delivery || !formData.serviceType) {
      setStatus({ type: "error", message: "Please complete the required fields before submitting your order." });
      return;
    }

    try {
      setStatus({ type: "loading", message: "Submitting your order..." });
      await sendOrderEmails(formData);
      setStatus({ type: "success", message: "Thanks for reaching out. Our coordination team will contact you shortly." });
      setFormData(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        message: error?.message || "We could not submit your order. Please try again or call our team directly.",
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
          / <span className="text-primary-dark">Order</span>
        </nav>
        <h1 className="text-4xl font-semibold">Place your order</h1>
        <p className="max-w-3xl text-lg text-muted">
          Share the details of your move or delivery. Our coordination team will review your request, confirm
          availability, and send tailored pricing.
        </p>
      </div>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)]">
        <div className="rounded-3xl border border-slate/10 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold">Order the service you need</h2>
          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            <fieldset className="space-y-3">
              <legend className="text-sm font-semibold text-slate">Type of user *</legend>
              <div className="flex flex-wrap gap-3">
                {["Individual", "VIP", "Organization"].map((option) => (
                  <label
                    key={option}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                      formData.userType === option.toLowerCase()
                        ? "border-primary bg-primary/10 text-primary-dark"
                        : "border-slate/20 text-slate hover:border-primary/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name="userType"
                      value={option.toLowerCase()}
                      checked={formData.userType === option.toLowerCase()}
                      onChange={handleChange}
                      className="h-4 w-4 accent-primary"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="organizationName" className="text-sm font-semibold text-slate">
                  Organization name (optional)
                </label>
                <input
                  id="organizationName"
                  name="organizationName"
                  type="text"
                  value={formData.organizationName}
                  onChange={handleChange}
                  placeholder="Only required for organizations"
                  className="w-full rounded-2xl border border-slate/15 bg-surface-light px-4 py-3 text-sm text-slate outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-semibold text-slate">
                  Contact first name *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="First"
                  className="w-full rounded-2xl border border-slate/15 bg-surface-light px-4 py-3 text-sm text-slate outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-semibold text-slate">
                  Contact last name *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Last"
                  className="w-full rounded-2xl border border-slate/15 bg-surface-light px-4 py-3 text-sm text-slate outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-slate">
                  Phone number *
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
                <label htmlFor="email" className="text-sm font-semibold text-slate">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full rounded-2xl border border-slate/15 bg-surface-light px-4 py-3 text-sm text-slate outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="locations" className="text-sm font-semibold text-slate">
                  Number of locations
                </label>
                <input
                  id="locations"
                  name="locations"
                  type="number"
                  min="1"
                  value={formData.locations}
                  onChange={handleChange}
                  placeholder="Total locations involved"
                  className="w-full rounded-2xl border border-slate/15 bg-surface-light px-4 py-3 text-sm text-slate outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="pickup" className="text-sm font-semibold text-slate">
                  Pick up location *
                </label>
                <input
                  id="pickup"
                  name="pickup"
                  type="text"
                  value={formData.pickup}
                  onChange={handleChange}
                  required
                  placeholder="Addis Ababa, Ethiopia"
                  className="w-full rounded-2xl border border-slate/15 bg-surface-light px-4 py-3 text-sm text-slate outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="delivery" className="text-sm font-semibold text-slate">
                  Delivery location *
                </label>
                <input
                  id="delivery"
                  name="delivery"
                  type="text"
                  value={formData.delivery}
                  onChange={handleChange}
                  required
                  placeholder="Destination city"
                  className="w-full rounded-2xl border border-slate/15 bg-surface-light px-4 py-3 text-sm text-slate outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="serviceType" className="text-sm font-semibold text-slate">
                Requested service *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate/15 bg-surface-light px-4 py-3 text-sm text-slate outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Select a service</option>
                <option>Household & Office Relocation</option>
                <option>Last-Mile Delivery Network</option>
                <option>Industrial & Commercial Logistics</option>
                <option>Technology & Innovation Support</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="notes" className="text-sm font-semibold text-slate">
                Additional details
              </label>
              <textarea
                id="notes"
                name="notes"
                rows="4"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Share timelines, special handling instructions, or other information."
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
                Submit order
              </button>
            </div>
          </form>
        </div>

        <aside className="flex flex-col gap-6 rounded-3xl border border-primary/20 bg-primary/10 p-8 shadow-soft">
          <span className="inline-flex items-center rounded-full bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
            Need support?
          </span>
          <h3 className="text-2xl font-semibold text-primary-dark">Work with our coordination team</h3>
          <p className="text-sm text-primary-dark/80">
            Prefer to speak with someone? Call our hotline and we will walk you through each step of your move or
            delivery.
          </p>
          <ul className="space-y-3 text-sm text-primary-dark/80">
            {supportHighlights.map((item) => (
              <li key={item} className="rounded-2xl border border-primary/20 bg-white/60 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <a
            href="tel:+251947334444"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark"
          >
            Call +251 947 334 444
          </a>
        </aside>
      </section>
    </div>
  );
};

export default Order;
