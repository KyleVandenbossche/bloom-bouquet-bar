// src/Components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Nav links */}
      <nav style={styles.navRow}>
        <a href="/" style={styles.navLink}>Home</a>
        <a href="/gallery" style={styles.navLink}>Gallery</a>
        <a href="/services" style={styles.navLink}>Services</a>
        <a href="/contact" style={styles.navLink}>Contact</a>
      </nav>

      {/* Social icons */}
      <div style={styles.socials}>
        <a
          href="https://www.facebook.com/channydean"
          target="_blank"
          rel="noreferrer"
          style={styles.iconLink}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#A7C4B5"
              d="M22 12.07C22 6.49 17.52 2 11.93 2S2 6.49 2 12.07C2 17.06 5.66 21.13 10.44 22v-7.02H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.45h-1.25c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33V22C18.34 21.13 22 17.06 22 12.07z"
            />
          </svg>
        </a>

        <a
          href="https://www.instagram.com/bloom.bouquet.bar/"
          target="_blank"
          rel="noreferrer"
          style={styles.iconLink}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#E9B8C9"
              d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2A2.8 2.8 0 1014.8 12 2.8 2.8 0 0012 9.2zM17.5 6.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"
            />
          </svg>
        </a>


      </div>

      {/* Copyright */}
      <p style={styles.copy}>
        © {new Date().getFullYear()} Bloom Bouquet Bar. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    background: "rgba(255, 255, 255, 0.9)", // ✅ Light white overlay to make text readable
    padding: "28px 12px",
    fontFamily: "Montserrat, sans-serif",
    textAlign: "center",
    marginTop: "auto",
    flexShrink: 0,
    zIndex: 2,
    position: "relative",
    boxShadow: "0 -2px 8px rgba(0,0,0,0.05)", // subtle top shadow
  },
  navRow: {
    display: "flex",
    justifyContent: "center",
    gap: "28px",
    flexWrap: "wrap",
    marginBottom: "14px",
  },
  navLink: {
    fontSize: 14,
    color: "#444",
    textDecoration: "none",
    transition: "color .15s ease",
  },
  socials: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
    marginBottom: 10,
  },
  iconLink: {
    lineHeight: 0,
    transform: "translateZ(0)",
    transition: "transform .2s ease",
  },
  copy: {
    color: "#666",
    fontSize: 13,
    marginTop: 6,
  },
};

export default Footer;
