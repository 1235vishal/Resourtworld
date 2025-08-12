import { useEffect, useRef } from "react";
import eventVenueBackground from "/herobanner/banner-9.jpg"; // Adjust path if needed
import { initAboutUsAnimation } from "./aboutUsAnimations";
import "./eventVenue.css";

const EventVenueHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    initAboutUsAnimation(heroRef);
  }, []);

  return (
    <section className="eventvenue-section" ref={heroRef}>
      <div
        className="eventvenue-parallax-bg"
        style={{ backgroundImage: `url(${eventVenueBackground})` }}
      ></div>
      <div className="eventvenue-content">
        <h1>Event Venue</h1>
      </div>
    </section>
  );
};

export default EventVenueHero;
