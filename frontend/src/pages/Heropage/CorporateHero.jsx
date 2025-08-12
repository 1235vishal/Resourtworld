import { useEffect, useRef } from "react";
import corporateBackground from "/herobanner/banner-8.jpg"; // Adjust path if needed
import { initAboutUsAnimation } from "./aboutUsAnimations";
import "./CorporateHero.css";

const CorporateHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    initAboutUsAnimation(heroRef);
  }, []);

  return (
    <section className="corporate-section" ref={heroRef}>
      <div
        className="corporate-parallax-bg"
        style={{ backgroundImage: `url(${corporateBackground})` }}
      ></div>
      <div className="corporate-content">
        <h1>Corporate & Social Events</h1>
      </div>
    </section>
  );
};

export default CorporateHero;
