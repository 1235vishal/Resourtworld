// import { useEffect, useRef } from "react";
// import aboutBackground from "../../assets/hero/DSC02986-Enhanced-NR.jpg"; // Adjust path if needed
// import "./AboutUsHero.css";
// import { initAboutUsAnimation } from "./aboutUsAnimations";

// const AboutUsHero = () => {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     initAboutUsAnimation(heroRef);
//   }, []);

//   return (
//     <section className="aboutus-section" ref={heroRef}>
//       <div
//         className="aboutus-parallax-bg"
//         style={{ backgroundImage: `url(${aboutBackground})` }}
//       ></div>
//       <div className="aboutus-content">
//         <h1>About Us</h1>
//       </div>
//     </section>
//   );
// };

// export default AboutUsHero;

import { useEffect, useRef } from "react";
import aboutBackground from "../../assets/hero/banner-4.jpg"; // Adjust path if needed
import "./AboutUsHero.css";
import { initAboutUsAnimation } from "./aboutUsAnimations";

const AboutUsHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    initAboutUsAnimation(heroRef);
  }, []);

  return (
    <section className="aboutus-section" ref={heroRef}>
      <div
        className="aboutus-parallax-bg"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      ></div>
      <div className="aboutus-content">
        <h1>About Us</h1>
      </div>
    </section>
  );
};

export default AboutUsHero;
