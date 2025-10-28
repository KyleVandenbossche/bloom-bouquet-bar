// src/Components/Header.js
import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../Photos/bloom-logo.png";
import background from "../Photos/background.png"; // ← background now lives here
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setExpanded(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeDrawer = () => setExpanded(false);

  return (
    <header>
      {/* GLOBAL, SITEWIDE BACKGROUND (fixed behind every route) */}
<div
  style={{
    position: "fixed",
    inset: 0,
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    zIndex: -1,              // <- was 0
    pointerEvents: "none",
  }}
/>
<div
  style={{
    position: "fixed",
    inset: 0,
    background: "rgba(255,255,255,0.5)",
    zIndex: -1,              // <- was 0
    pointerEvents: "none",
  }}
/>

      <style>{`
        .bloom-header {
          position: sticky;
          top: 0;
          z-index: 2000;
          background: #fff;
          box-shadow: 0 1px 8px rgba(0,0,0,0.05);
        }

        /* NAV LINK (Montserrat + pink underline on hover/active) */
        .bloom-link {
          position: relative;
          font-family: "Montserrat", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          font-weight: 600;
          font-size: 17px;
          letter-spacing: 0.2px;
          color: #1b1b1b;
          text-decoration: none;
          padding: 6px 2px;
          line-height: 1.2;
          transition: color .16s ease;
        }
        .bloom-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0%;
          background-color: #E9B8C9;
          transition: width .25s ease;
        }
        .bloom-link:hover { color: #E9B8C9; }
        .bloom-link:hover::after { width: 100%; }
        .bloom-link.active { color: #E9B8C9; }
        .bloom-link.active::after { width: 100%; }

        /* ---------- MOBILE FIRST ---------- */
        .bloom-mobile { display: flex; flex-direction: column; }
        .bloom-desktop { display: none; }

        .bloom-mobile-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0 18px;
        }

        .bloom-brand { display: flex; align-items: center; padding-left: 12px; }
        .bloom-brand img { height: 185px; width: auto; object-fit: contain; display: block; }

        .bloom-right { display: flex; align-items: center; gap: 18px; }
        .bloom-socials { display: flex; align-items: center; gap: 14px; }
        .bloom-socials i { font-size: 20px; cursor: pointer; transition: transform .2s ease; }
        .bloom-socials i:hover { transform: scale(1.15); }
        .bloom-socials .facebook { color: #A7C4B5; }
        .bloom-socials .instagram { color: #E9B8C9; }
        .bloom-socials .linkedin { color: #F7B27A; }

        .navbar-toggler { border: none !important; box-shadow: none !important; outline: none !important; }

        .bloom-cover {
          position: fixed; inset: 0;
          background: rgba(255,255,255,0.6);
          opacity: 0; visibility: hidden;
          transition: opacity .35s ease, visibility .35s ease;
          z-index: 2050;
        }
        .bloom-cover.show { opacity: 1; visibility: visible; }

        .bloom-drawer {
          position: fixed; top: 0; right: 0; height: 100vh;
          width: 75%; max-width: 260px;
          background: #fff;
          box-shadow: -4px 0 16px rgba(0,0,0,0.12);
          border-left: 1px solid rgba(0,0,0,0.06);
          transform: translateX(100%);
          opacity: 0; visibility: hidden;
          transition: transform .35s ease, opacity .35s ease, visibility .35s ease;
          display: flex; flex-direction: column;
          padding: 24px 22px;
          z-index: 2100;
        }
        .bloom-drawer.open { transform: translateX(0); opacity: 1; visibility: visible; }
        .bloom-close {
          position: absolute; top: 12px; right: 12px;
          background: transparent; border: none; padding: 8px;
          font-size: 28px; line-height: 1; color: #333; cursor: pointer;
        }
        .bloom-drawer-nav { margin-top: 40px; }
        .bloom-drawer .bloom-link { display: block; font-size: 18px; text-align: right; padding: 12px 0; }

        /* ---------- DESKTOP (≥768px) ---------- */
        @media (min-width: 768px) {
          .bloom-mobile { display: none; }
          .bloom-desktop { display: block; }

          .bloom-desktop-logo {
            display: flex; justify-content: center; align-items: center;
            margin-bottom: -25px;
          }
          .bloom-desktop-logo img {
            height: 215px; width: auto; object-fit: contain;
            margin-top: -35px;
          }
          .bloom-desktop-nav {
            display: flex; justify-content: center; gap: 70px;
            padding-bottom: 15px;
          }
        }
      `}</style>

      <div className="bloom-header">
        {/* MOBILE HEADER */}
        <div className="bloom-mobile">
          <Navbar expand={false} bg="white">
            <div className="bloom-mobile-bar">
              <Navbar.Brand as={Link} to="/" className="bloom-brand" onClick={closeDrawer}>
                <img src={logo} alt="Bloom Bouquet Bar" />
              </Navbar.Brand>

              <div className="bloom-right">
                <div className="bloom-socials">
                  <a href="https://www.instagram.com/bloom.bouquet.bar/" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/share/1F3LrwNB6v/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook-f facebook"></i>
                  </a>
                </div>

                <Navbar.Toggle
                  aria-controls="bloom-drawer"
                  onClick={() => setExpanded((v) => !v)}
                />
              </div>
            </div>
          </Navbar>

          {/* Overlay for drawer */}
          <div className={`bloom-cover ${expanded ? "show" : ""}`} onClick={closeDrawer} />

          {/* Drawer */}
          <div className={`bloom-drawer ${expanded ? "open" : ""}`} id="bloom-drawer">
            <button type="button" className="bloom-close" aria-label="Close menu" onClick={closeDrawer}>
              ×
            </button>

            <Nav className="flex-column text-end bloom-drawer-nav">
              <NavLink className="bloom-link" to="/" onClick={closeDrawer}>Home</NavLink>
              <NavLink className="bloom-link" to="/gallery" onClick={closeDrawer}>Gallery</NavLink>
              <NavLink className="bloom-link" to="/services" onClick={closeDrawer}>Services</NavLink>
              <NavLink className="bloom-link" to="/contact" onClick={closeDrawer}>Contact</NavLink>
            </Nav>
          </div>
        </div>

        {/* DESKTOP HEADER */}
        <div className="bloom-desktop">
          <Container>
            <div className="bloom-desktop-logo">
              <Link to="/" aria-label="Home">
                <img src={logo} alt="Bloom Bouquet Bar" />
              </Link>
            </div>
            <nav className="bloom-desktop-nav">
              <NavLink className="bloom-link" to="/">Home</NavLink>
              <NavLink className="bloom-link" to="/gallery">Gallery</NavLink>
              <NavLink className="bloom-link" to="/services">Services</NavLink>
              <NavLink className="bloom-link" to="/contact">Contact</NavLink>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
};

export default Header;
