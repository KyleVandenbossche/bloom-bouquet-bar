// src/Components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import michiganMap from "../Photos/mitten-flower.png";

export default function Home() {
  const styles = {
    section: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: 48,
    },
    content: {
      width: "100%",
      maxWidth: 900,
      padding: "0 16px 64px",
      margin: "0 auto",
      textAlign: "center",
      position: "relative",
      zIndex: 1,
    },
    title: {
      margin: 0,
      fontFamily: "Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      fontWeight: 700,
      fontSize: "36px",
      letterSpacing: 0.3,
      color: "#1b1b1b",
    },
    tagline: {
      marginTop: 8,
      fontSize: 18,
      color: "#333",
    },
    copyWrap: {
      margin: "28px auto 0",
      maxWidth: 760,
      background: "rgba(255,255,255,0.78)",
      backdropFilter: "blur(2px)",
      padding: "28px 28px",
      borderRadius: "10px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    },
    copy: {
      fontSize: 16,
      color: "#333",
      lineHeight: 1.8,
      margin: 0,
    },
    divider: {
      border: "none",
      borderTop: "1px solid #f0d6e0",
      margin: "20px 0",
    },
    offeringsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "14px",
      margin: "0 0 4px",
      textAlign: "center",
    },
    offeringCard: {
      background: "rgba(249,236,241,0.6)",
      borderRadius: "10px",
      padding: "14px 10px",
    },
    offeringEmoji: {
      fontSize: 22,
      marginBottom: 6,
    },
    offeringTitle: {
      fontSize: 13,
      fontWeight: 700,
      color: "#c0607a",
      margin: "0 0 4px",
      fontFamily: "Montserrat, sans-serif",
      letterSpacing: 0.3,
    },
    offeringDesc: {
      fontSize: 12,
      color: "#555",
      lineHeight: 1.5,
      margin: 0,
    },
    copySmall: {
      marginTop: 4,
      color: "#666",
      fontSize: 13,
      fontStyle: "italic",
    },
    bottomRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 16,
      gap: 40,
    },
    mapImg: {
      width: 140,
      opacity: 0.92,
      flexShrink: 0,
    },
    buttonWrap: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  const css = `
    .page { --bb-pink:#E9B8C9; --bb-pink-d:#D99AB2; }

    .contactBtn {
      display:inline-block;
      padding:12px 28px;
      border-radius:30px;
      background:var(--bb-pink);
      color:#fff;
      font-weight:600;
      font-size:16px;
      text-decoration:none;
      box-shadow:0 6px 14px rgba(233,184,201,.35);
      transition:transform .18s ease, box-shadow .22s ease, background .22s ease;
      will-change:transform;
    }
    .contactBtn:hover {
      background:var(--bb-pink-d);
      transform:translateY(-2px);
      box-shadow:0 10px 20px rgba(233,184,201,.4);
    }
    .contactBtn:active {
      transform:translateY(0);
      box-shadow:0 4px 10px rgba(0,0,0,.15);
    }
    .contactBtn:focus-visible {
      outline:3px solid var(--bb-pink-d);
      outline-offset:2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .contactBtn { transition:none; }
      .contactBtn:hover, .contactBtn:active { transform:none; }
    }

    @media (max-width: 560px) {
      .page { padding-left:20px; padding-right:20px; }
      .offerings-grid { grid-template-columns: 1fr !important; }
    }
    @media (max-width:390px){ .page{ padding-left:24px; padding-right:24px; } }
  `;

  const offerings = [
    {
      emoji: "💐",
      title: "Bouquet Bars",
      desc: "Guests hand-pick stems and build their own bouquet — perfect for weddings & showers.",
    },
    {
      emoji: "✨",
      title: "Pop-Up Experiences",
      desc: "Eye-catching floral stations for brand activations, markets, and corporate events.",
    },
    {
      emoji: "🌸",
      title: "Custom Installations",
      desc: "Lush, photo-worthy floral backdrops and displays designed around your vision.",
    },
  ];

  return (
    <section style={styles.section} id="home">
      <style>{css}</style>
      <div style={styles.content} className="page">
        <h1 style={styles.title}>Bloom Bouquet Bar</h1>
        <p style={styles.tagline}>
          A rental bouquet bar for any event — weddings, showers, pop-ups & more.
        </p>

        <div style={styles.copyWrap}>
          <p style={styles.copy}>
            We bring an elevated, interactive floral experience right to your event. Guests hand-select the blooms they
            love and leave with a beautifully curated, take-home bouquet — Effortless, elegant, fun and full of good vibes.
          </p>

          <hr style={styles.divider} />

          <div style={styles.offeringsGrid} className="offerings-grid">
            {offerings.map((o) => (
              <div key={o.title} style={styles.offeringCard}>
                <div style={styles.offeringEmoji}>{o.emoji}</div>
                <p style={styles.offeringTitle}>{o.title}</p>
                <p style={styles.offeringDesc}>{o.desc}</p>
              </div>
            ))}
          </div>

          <hr style={styles.divider} />

          <p style={styles.copySmall}>Based in Metro Detroit • Available for travel • DM us to book!</p>

          <div style={styles.bottomRow} className="bottom-row">
            <img
              src={michiganMap}
              alt="Michigan — Metro Detroit"
              style={styles.mapImg}
            />
            <div style={styles.buttonWrap} className="btn-wrap">
              <Link to="/contact" className="contactBtn">Get in Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}