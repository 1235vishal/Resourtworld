import { useEffect, useRef } from "react";
import eventServicesBackground from "../../assets/hero/B6.jpg"; // Adjust path if needed
import "./EventServicesHero.css";
import { initAboutUsAnimation } from "./aboutUsAnimations";

const EventServicesHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    initAboutUsAnimation(heroRef);
  }, []);

  return (
    <section className="eventservices-section" ref={heroRef}>
      <div
        className="eventservices-parallax-bg"
        style={{ backgroundImage: `url(${eventServicesBackground})` }}
      ></div>
      <div className="eventservices-content">
        <h1>Event Services</h1>
      </div>
    </section>
  );
};

export default EventServicesHero;
