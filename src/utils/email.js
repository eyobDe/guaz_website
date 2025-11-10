const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || "https://back.guazexpress.com";

const postJson = async (path, payload) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error?.error || error?.message || "Failed to submit request. Please try again.");
  }

  return response.json();
};

export const sendOrderEmails = async (formData) => postJson("/web/order", formData);

export const sendContactEmails = async (formData) => postJson("/web/contact", formData);

