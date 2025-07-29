// import { gsap } from 'gsap';
// import { useEffect } from 'react';
// import './WelcomeSection.css';

// const WelcomeSection = () => {
//   useEffect(() => {
//     const welcomeTl = gsap.timeline({ delay: 0.5 });
//     welcomeTl
//       .to(".hotelp2-welcome-title", {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: "power3.out",
//       })
//       .to(
//         ".hotelp2-welcome-tagline",
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//         },
//         "-=0.8"
//       )
//       .to(
//         ".hotelp2-welcome-cta",
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//         },
//         "-=0.6"
//       );

//     // Button hover effects
//     document.querySelectorAll('.hotelp2-welcome-book-btn, .hotelp2-welcome-event-btn').forEach((button) => {
//       button.addEventListener("mouseenter", () => {
//         gsap.to(button, {
//           scale: 1.05,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       });

//       button.addEventListener("mouseleave", () => {
//         gsap.to(button, {
//           scale: 1,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       });
//     });

//     return () => {
//       // Clean up event listeners
//       document.querySelectorAll('.hotelp2-welcome-book-btn, .hotelp2-welcome-event-btn').forEach((button) => {
//         button.removeEventListener("mouseenter");
//         button.removeEventListener("mouseleave");
//       });
//     };
//   }, []);

//   return (
//     <section className="welcome-section hotelp2-welcome" id="welcome">
//       <div className="container hotelp2-welcome-container">
//         <div className="welcome-content hotelp2-welcome-content">
//           <h1 className="welcome-title hotelp2-welcome-title"> Magnoliya Grand Manor Conference & Event Center</h1>
//           <p className="welcome-tagline hotelp2-welcome-tagline">
//             Luxury Stays. Memorable Events. Exceptional Experiences.
//           </p>
//           {/* <div className="cta-section hotelp2-welcome-cta">
//             <a href="#book" className="cta-button primary hotelp2-welcome-book-btn">Book a Room</a>
//             <a href="#events" className="cta-button hotelp2-welcome-event-btn">Plan Your Event</a>
//           </div> */}
//                   <div className="cta-section hotelp2-welcome-cta" style={{ opacity: 1 }}>
//   <a href="#book" className="cta-button primary hotelp2-welcome-book-btn" style={{ opacity: 1 }}>Book a Room</a>
//   <a href="#events" className="cta-button hotelp2-welcome-event-btn" style={{ opacity: 1 }}>Plan Your Event</a>
// </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WelcomeSection;

import { gsap } from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./WelcomeSection.css";

const WelcomeSection = () => {
  useEffect(() => {
    const welcomeTl = gsap.timeline({ delay: 0.5 });
    welcomeTl
      .to(".hotelp2-welcome-title", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      })
      .to(
        ".hotelp2-welcome-tagline",
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .to(
        ".hotelp2-welcome-cta",
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );

    // Button hover effects
    const buttons = document.querySelectorAll(
      ".hotelp2-welcome-book-btn, .hotelp2-welcome-event-btn"
    );
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <section className="welcome-section hotelp2-welcome" id="welcome">
      <div className="container hotelp2-welcome-container">
        <div className="welcome-content hotelp2-welcome-content">
          <h1 className="welcome-title hotelp2-welcome-title">
            Magnoliya Grand Manor Conference & Event Center
          </h1>
          <p className="welcome-tagline hotelp2-welcome-tagline">
            Luxury Stays. Memorable Events. Exceptional Experiences.
          </p>
          <div className="cta-section hotelp2-welcome-cta">
            {/* <Link
              to="/rooms"
              className="cta-button primary hotelp2-welcome-book-btn"
            >
              Book a Room
            </Link> */}
            <Link to="/events" className="cta-button hotelp2-welcome-event-btn">
              Plan Your Event
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
