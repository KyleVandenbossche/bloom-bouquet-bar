// src/Components/Home.js
import React from "react";

export default function Home() {
  return (
    <section style={styles.section} id="home">
      <style>{css}</style>
      <div style={styles.content} className="page">
        <h1 style={styles.title}>Bloom Bouquet Bar</h1>
        <p style={styles.tagline}>Custom floral experiences for events, brands, and moments that matter.</p>

        <div style={styles.copyWrap}>
          <p style={styles.copy}>
            Bloom Bouquet Bar creates immersive, photo-worthy floral installations and bouquet stations for
            weddings, corporate activations, and social events. From modern, minimal palettes to lush,
            editorial blooms, we design interactive moments your guests won’t forget.
          </p>
          <ul style={styles.list}>
            <li>On-site bouquet bars and pop-up experiences</li>
            <li>Custom installations & brand activations</li>
            <li>Full-service design, setup, and teardown</li>
          </ul>
          <p style={styles.copySmall}>
            Based in Metro Detroit • Available for travel • <a href="#contact" style={styles.link}>Get in touch</a>
          </p>
        </div>
      </div>
    </section>
  );
}

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
    zIndex: 1, // ensure above the fixed background from Header
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
    padding: "22px 18px",
  },
  copy: {
    fontSize: 16,
    color: "#222",
    lineHeight: 1.6,
    margin: 0,
  },
  list: {
    textAlign: "left",
    margin: "14px auto",
    padding: "0 0 0 18px",
    maxWidth: 640,
    lineHeight: 1.6,
  },
  copySmall: {
    marginTop: 8,
    color: "#444",
  },
  link: {
    color: "#E9B8C9",
    textDecoration: "none",
    borderBottom: "2px solid #E9B8C9",
  },
};

const css = `
  @media (max-width: 560px) {
    .page { padding-left: 20px; padding-right: 20px; }
  }
  @media (max-width: 390px) {
    .page { padding-left: 24px; padding-right: 24px; }
  }
`;
