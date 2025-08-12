

import { useEffect, useRef } from "react";
import galleryBackground from "/herobanner/banner-9.jpg"; // Adjust path if needed
import "./HeroGallery.css";
import { initAboutUsAnimation } from "./aboutUsAnimations";

const HeroGallery = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    initAboutUsAnimation(heroRef);
  }, []);

  return (
    <section className="herogallery-section" ref={heroRef}>
      <div
        className="herogallery-parallax-bg"
        style={{ backgroundImage: `url(${galleryBackground})` }}
      ></div>
      <div className="herogallery-content">
        <h1>Our Gallery</h1>
      </div>
    </section>
  );
};

export default HeroGallery;
