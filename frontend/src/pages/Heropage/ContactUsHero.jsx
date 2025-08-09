import { useEffect, useRef } from "react";
import aboutBackground from "../../assets/hero/banner-7.jpg"; // Adjust path if needed
import { initAboutUsAnimation } from "./aboutUsAnimations";
import "./contact.css";

const ContactUsHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    initAboutUsAnimation(heroRef);
  }, []);

  return (
    <section className="contacthero-section" ref={heroRef}>
      <div
        className="contacthero-parallax-bg"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      ></div>
      <div className="contacthero-content">
        {/* <h1>Contact Us</h1> */}
      </div>
    </section>
  );
};

export default ContactUsHero;
