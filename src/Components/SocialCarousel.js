// src/Components/SocialCarousel.jsx
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SocialCarousel = ({ instagramUrls = [], facebookUrls = [], title }) => {
  // Re-process embeds after mount/updates
  useEffect(() => {
    // Instagram
    if (window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }
    // Facebook
    if (window.FB?.XFBML?.parse) {
      window.FB.XFBML.parse();
    }
  });

  const slideStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  };

  return (
    <section style={{ maxWidth: 900, margin: "0 auto" }}>
      {title && (
        <h3 style={{ fontFamily: "Raleway, sans-serif", textAlign: "center", marginBottom: 12 }}>
          {title}
        </h3>
      )}

      <Swiper
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
      >
        {/* Instagram posts */}
        {instagramUrls.map((url) => (
          <SwiperSlide key={url} style={slideStyle}>
            {/* Official Instagram oEmbed markup (no token needed) */}
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: "#fff",
                border: 0,
                margin: 0,
                width: "100%",
                maxWidth: 540,
              }}
            />
          </SwiperSlide>
        ))}

        {/* Facebook posts */}
        {facebookUrls.map((url) => (
          <SwiperSlide key={url} style={slideStyle}>
            {/* Official Facebook post embed */}
            <div
              className="fb-post"
              data-href={url}
              data-show-text="true"
              data-width="500"
              style={{ width: "100%", maxWidth: 540 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SocialCarousel;
