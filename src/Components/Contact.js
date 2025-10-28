// src/Components/Contact.js
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null); // "ok" | "error" | null

  const onSubmit = (e) => {
    e.preventDefault();

    // Very simple client validation example:
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    // TODO: wire this up to your backend / Email provider.
    // For now, just show a success state and reset:
    setStatus("ok");
    form.reset();
  };

  return (
    <section style={styles.section} id="contact">
      <style>{css}</style>

      <div style={styles.wrap} className="page">
        <h1 style={styles.title}>Send a Petalgram</h1>
        <p style={styles.tagline}>
          Tell us about your event—let’s make it bloom.
        </p>

        <form style={styles.form} onSubmit={onSubmit} noValidate>
          {/* Name */}
          <div style={styles.row}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              style={styles.input}
              required
            />
          </div>

          {/* Email */}
          <div style={styles.row}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              style={styles.input}
              required
            />
          </div>

          {/* Phone (optional) */}
          <div style={styles.row}>
            <label htmlFor="phone" style={styles.label}>Phone (optional)</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(###) ###-####"
              style={styles.input}
            />
          </div>

          {/* Event date + Type */}
          <div style={styles.grid2}>
            <div style={styles.row}>
              <label htmlFor="date" style={styles.label}>Event Date</label>
              <input
                id="date"
                name="date"
                type="date"
                style={styles.input}
              />
            </div>
            <div style={styles.row}>
              <label htmlFor="type" style={styles.label}>Event Type</label>
              <select id="type" name="type" style={styles.input}>
                <option value="">Select an option</option>
                <option>Wedding</option>
                <option>Corporate Activation</option>
                <option>Social / Party</option>
                <option>Brand / Pop-Up</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Budget */}
          <div style={styles.row}>
            <label htmlFor="budget" style={styles.label}>Approx. Budget</label>
            <select id="budget" name="budget" style={styles.input}>
              <option value="">Select a range</option>
              <option>$500 – $1,500</option>
              <option>$1,500 – $3,000</option>
              <option>$3,000 – $5,000</option>
              <option>$5,000+</option>
            </select>
          </div>

          {/* Message */}
          <div style={styles.row}>
            <label htmlFor="message" style={styles.label}>Tell us about your vision</label>
            <textarea
              id="message"
              name="message"
              placeholder="Color palette, vibe, guest count, venue, etc."
              rows={5}
              style={{ ...styles.input, resize: "vertical" }}
              required
            />
          </div>

          {/* Submit */}
          <button type="submit" style={styles.button}>Send</button>

          {/* Status */}
          {status === "ok" && (
            <p style={{ ...styles.status, color: "#2e7d32" }}>
              Thanks! We’ll get back to you shortly.
            </p>
          )}
          {status === "error" && (
            <p style={{ ...styles.status, color: "#b00020" }}>
              Please fill out name, email, and message.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 48,
    position: "relative",
    zIndex: 1, // sits above the fixed background from Header
  },
  wrap: {
    width: "100%",
    maxWidth: 860,
    padding: "0 16px 64px",
    margin: "0 auto",
  },
  title: {
    margin: 0,
    textAlign: "center",
    fontFamily: "Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    fontWeight: 700,
    fontSize: 34,
    color: "#1b1b1b",
    letterSpacing: 0.25,
  },
  tagline: {
    textAlign: "center",
    marginTop: 8,
    marginBottom: 22,
    color: "#333",
    fontSize: 16,
  },
  form: {
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(2px)",
    border: "1px solid rgba(0,0,0,0.06)",
    padding: 20,
  },
  row: { marginBottom: 14 },
  label: {
    display: "block",
    fontSize: 13,
    color: "#444",
    marginBottom: 6,
    fontWeight: 600,
  },
  input: {
    width: "100%",
    fontSize: 15,
    padding: "10px 12px",
    border: "1px solid #ddd",
    outline: "none",
    background: "#fff",
    borderRadius: 6,
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 14,
  },
  button: {
    display: "inline-block",
    marginTop: 4,
    padding: "10px 18px",
    background: "#E9B8C9",
    color: "#1b1b1b",
    fontWeight: 700,
    fontSize: 15,
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    transition: "transform .12s ease",
  },
  status: {
    marginTop: 10,
    fontSize: 14,
  },
};

const css = `
  @media (max-width: 560px) {
    .page { padding-left: 20px; padding-right: 20px; }
  }
  @media (max-width: 390px) {
    .page { padding-left: 24px; padding-right: 24px; }
  }
  @media (max-width: 720px) {
    /* stack date/type on narrow screens */
    form .grid2 { grid-template-columns: 1fr !important; }
  }
`;
