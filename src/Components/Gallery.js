// src/Components/Gallery.js
import React, { useEffect, useRef, useState } from "react";

// 9 photos
import bloomOne from "../Photos/bloom-1.PNG";
import bloomTwo from "../Photos/bloom-2.PNG";
import bloomThree from "../Photos/bloom-3.PNG";
import bloomFour from "../Photos/bloom-4.PNG";
import bloomFive from "../Photos/bloom-5.PNG";
import bloomSix from "../Photos/bloom-6.PNG";
import bloomSeven from "../Photos/bloom-7.PNG";
import bloomEight from "../Photos/bloom-8.PNG";
import bloomNine from "../Photos/bloom-9.PNG";

const photos = [
  bloomOne,
  bloomTwo,
  bloomThree,
  bloomFour,
  bloomFive,
  bloomSix,
  bloomSeven,
  bloomEight,
  bloomNine,
];

/** Single square tile with cursor-follow hover **/
const FollowCard = ({ src, onOpen }) => {
  const imgRef = useRef(null);
  const wrapRef = useRef(null);
  const FOLLOW = 6;         // px drift toward cursor
  const HOVER_SCALE = 1.03; // gentle scale on hover

  const onMove = (e) => {
    if (!wrapRef.current || !imgRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const tx = Math.max(-1, Math.min(1, dx)) * FOLLOW;
    const ty = Math.max(-1, Math.min(1, dy)) * FOLLOW;
    imgRef.current.style.transform = `translate(${tx}px, ${ty}px) scale(${HOVER_SCALE})`;
  };

  const onLeave = () => {
    if (!imgRef.current) return;
    imgRef.current.style.transform = "translate(0px, 0px) scale(1)";
  };

  return (
    <button
      ref={wrapRef}
      className="tile"
      style={styles.tile}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onOpen}
      aria-label="Open image"
    >
      <img
        ref={imgRef}
        src={src}
        alt="gallery"
        style={styles.tileImg}
        draggable={false}
      />
    </button>
  );
};

export default function Gallery() {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // ESC closes lightbox
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setLightboxSrc(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // trigger fade/scale animation
  useEffect(() => {
    if (lightboxSrc) {
      const id = requestAnimationFrame(() => setLightboxOpen(true));
      return () => cancelAnimationFrame(id);
    } else {
      setLightboxOpen(false);
    }
  }, [lightboxSrc]);

  return (
    <section id="gallery" style={styles.wrap}>
      <style>{css}</style>

      <div className="page" style={styles.container}>
        <h2 style={styles.heading}>Petal Portraits</h2>
        <p style={styles.sub}>
          A peek into our installs, bouquet bars, and floral moments.
        </p>

        <div className="grid-ig" style={styles.grid}>
          {photos.map((src, i) => (
            <FollowCard key={i} src={src} onOpen={() => setLightboxSrc(src)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className={`lightbox ${lightboxOpen ? "open" : ""}`}
          style={styles.lightbox}
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
        >
          <img src={lightboxSrc} alt="enlarged" style={styles.lightboxImg} />
          <button
            aria-label="Close"
            style={styles.closeBtn}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxSrc(null);
            }}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}

const styles = {
  wrap: {
    background: "transparent", // no background image here
  },
  container: {
    width: "100%",
    maxWidth: 940,
    padding: "48px 16px 72px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    margin: 0,
    fontFamily: "Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    fontWeight: 700,
    fontSize: "36px",
    letterSpacing: 0.3,
    color: "#1b1b1b",
  },
  sub: {
    marginTop: 6,
    color: "#444",
  },
  grid: {
    display: "grid",
    gap: 6,           // tight IG-like gap
    marginTop: 24,
  },
  tile: {
    position: "relative",
    padding: 0,
    margin: 0,
    width: "100%",
    aspectRatio: "1 / 1", // squares
    overflow: "hidden",
    background: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
  tileImg: {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    transform: "translate(0px, 0px) scale(1)",
    willChange: "transform, opacity",
    userSelect: "none",
    WebkitUserDrag: "none",
    opacity: 0.9,
    transition: "opacity 200ms ease, transform 200ms ease",
  },

  // Lightbox
  lightbox: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.0)",
    display: "grid",
    placeItems: "center",
    zIndex: 50,
    opacity: 0,
    transition: "opacity 220ms ease, background 220ms ease",
  },
  lightboxImg: {
    maxWidth: "92vw",
    maxHeight: "90vh",
    objectFit: "contain",
    transform: "scale(0.98)",
    transition: "transform 240ms ease",
    background: "transparent",
  },
  closeBtn: {
    position: "fixed",
    top: 16,
    right: 18,
    fontSize: 34,
    lineHeight: 1,
    width: 44,
    height: 44,
    borderRadius: 6,
    background: "rgba(255,255,255,0.92)",
    border: "none",
    cursor: "pointer",
  },
};

const css = `
  /* 3 columns on desktop, 2 on tablet, 1 on phones */
  .grid-ig {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    .grid-ig { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 560px) {
    .grid-ig { grid-template-columns: 1fr; }
    .page { padding-left: 20px; padding-right: 20px; }
  }
  @media (max-width: 390px) {
    .page { padding-left: 24px; padding-right: 24px; }
  }

  /* Lightbox fade & scale */
  .lightbox.open {
    opacity: 1;
    background: rgba(0,0,0,0.85);
  }
  .lightbox.open img {
    transform: scale(1);
  }
`;
