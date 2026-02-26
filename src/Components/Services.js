import React from "react";

import pkg1 from "../Photos/package-1.png";
import pkg2 from "../Photos/package-2.png";
import pkg3 from "../Photos/package-3.png";
import pkg4 from "../Photos/package-4.png";
import pkg5 from "../Photos/package-5.png";
import pkg6 from "../Photos/package-6.png";

const packages = [
  { img: pkg1 },
  { img: pkg2 },
  { img: pkg3 },
  { img: pkg4 },
  { img: pkg5 },
  { img: pkg6 },
];

export default function Home() {
  return (
    <section style={styles.section} id="home">
      <style>{css}</style>
      <div style={styles.content} className="page">
        <h1 style={styles.title}>Bouquet Bar Menu</h1>
        <p style={styles.tagline}>Custom floral experiences for events, brands, and moments that matter.</p>
      </div>

      {/* Full-screen package photos */}
      {packages.map((pkg, i) => (
        <div key={i} className="pkg-slide">
          <div className="pkg-slide-inner">
            <img src={pkg.img} alt={`Package ${i + 1}`} className="pkg-full-img" />
            <div className="pkg-overlay">
            </div>
          </div>
        </div>
      ))}

    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    width: "100%",
    maxWidth: 900,
    padding: "48px 16px 64px",
    margin: "0 auto",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },
  title: {
    margin: 0,
    fontFamily: "Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    fontWeight: 550,
    fontSize: "30px",
    letterSpacing: 0.3,
    color: "#1b1b1b",
  },
  tagline: {
    marginTop: 2,
    fontStyle: "italic",
    fontSize: 8.5,
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
    .page { padding-left: 25px; padding-right: 25px; }
  }
  @media (max-width: 390px) {
    .page { padding-left: 30px; padding-right: 30px; }
  }

  .pkg-slide {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 0 60px;
    box-sizing: border-box;
  }

  .pkg-slide-inner {
    position: relative;
    width: 100%;
    max-width: 600px;
  }

  .pkg-full-img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    border-radius: 12px;
  }

  .pkg-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 32px 24px;
    background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%);
    border-radius: 0 0 12px 12px;
  }

  .pkg-full-label {
    margin: 0;
    font-family: Montserrat, system-ui, sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1px;
    text-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }

  @media (max-width: 640px) {
    .pkg-slide {
      padding: 0 20px 40px;
    }
    .pkg-full-label {
      font-size: 22px;
    }
  }
`;