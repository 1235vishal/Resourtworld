// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useEffect } from 'react';
// import './SerQuickNav.css';

// const SerQuickNav = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Section title animation
//     gsap.to(".SerQuickN-title", {
//       opacity: 1,
//       y: 0,
//       duration: 1.2,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: ".SerQuickN-section",
//         start: "top 80%",
//         end: "bottom 20%",
//         toggleActions: "play none none reverse",
//       },
//     });

//     // Tile animations
//     gsap.to(".SerQuickN-tile", {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       stagger: 0.3,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: ".SerQuickN-grid",
//         start: "top 80%",
//         end: "bottom 20%",
//         toggleActions: "play none none reverse",
//       },
//     });

//     // Tile hover effects
//     document.querySelectorAll(".SerQuickN-tile").forEach((tile) => {
//       tile.addEventListener("mouseenter", () => {
//         gsap.to(tile, {
//           scale: 1.02,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//         gsap.to(tile.querySelector(".SerQuickN-icon"), {
//           scale: 1.1,
//           rotation: 5,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       });

//       tile.addEventListener("mouseleave", () => {
//         gsap.to(tile, {
//           scale: 1,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//         gsap.to(tile.querySelector(".SerQuickN-icon"), {
//           scale: 1,
//           rotation: 0,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       document.querySelectorAll(".SerQuickN-tile").forEach((tile) => {
//         tile.removeEventListener("mouseenter");
//         tile.removeEventListener("mouseleave");
//       });
//     };
//   }, []);

//   return (
//     <section className="SerQuickN-section" id="services">
//       <div className="SerQuickN-container">
//         <div className="SerQuickN-header">
//           <div className="SerQuickN-header-content">
//             <h2 className="SerQuickN-title">Explore Our Services</h2>
//             <p className="SerQuickN-subtitle">PREMIUM HOTEL SERVICES</p>
//             <div className="SerQuickN-underline"></div>
//           </div>
//         </div>

//         <div className="SerQuickN-grid">
//           <div className="SerQuickN-tile">
//             <div className="SerQuickN-icon-wrapper">
//               <div className="SerQuickN-icon">
//                 <svg viewBox="0 0 64 64" className="SerQuickN-svg-icon">
//                   <rect x="12" y="16" width="40" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
//                   <rect x="20" y="24" width="24" height="8" fill="none" stroke="currentColor" strokeWidth="2"/>
//                   <rect x="16" y="36" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2"/>
//                   <rect x="40" y="36" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2"/>
//                   <rect x="28" y="36" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2"/>
//                   <circle cx="24" cy="28" r="2" fill="currentColor"/>
//                   <circle cx="40" cy="28" r="2" fill="currentColor"/>
//                 </svg>
//               </div>
//             </div>
//             <div className="SerQuickN-content">
//               <h3 className="SerQuickN-tile-title">Rooms & Suites</h3>
//               <p className="SerQuickN-tile-description">
//                 Elegantly designed accommodations with premium amenities,
//                 spectacular views, and personalized service for an unforgettable
//                 stay.
//               </p>
//               <button className="SerQuickN-button">Explore Rooms</button>
//             </div>
//           </div>

//           <div className="SerQuickN-tile">
//             <div className="SerQuickN-icon-wrapper">
//               <div className="SerQuickN-icon">
//                 <svg viewBox="0 0 64 64" className="SerQuickN-svg-icon">
//                   <rect x="16" y="16" width="32" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
//                   <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
//                   <path d="M24 24 L40 40" stroke="currentColor" strokeWidth="2"/>
//                   <path d="M40 24 L24 40" stroke="currentColor" strokeWidth="2"/>
//                   <circle cx="28" cy="28" r="2" fill="currentColor"/>
//                   <circle cx="36" cy="28" r="2" fill="currentColor"/>
//                   <circle cx="28" cy="36" r="2" fill="currentColor"/>
//                   <circle cx="36" cy="36" r="2" fill="currentColor"/>
//                   <rect x="30" cy="32" width="4" height="4" fill="currentColor"/>
//                 </svg>
//               </div>
//             </div>
//             <div className="SerQuickN-content">
//               <h3 className="SerQuickN-tile-title">Dining</h3>
//               <p className="SerQuickN-tile-description">
//                 Exquisite culinary journey featuring world-class chefs, fresh
//                 local ingredients, and diverse international cuisines.
//               </p>
//               <button className="SerQuickN-button">View Restaurants</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SerQuickNav;

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./SerQuickNav.css";

const SerQuickNav = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".SerQuickN-title", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".SerQuickN-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(".SerQuickN-tile", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".SerQuickN-grid",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    document.querySelectorAll(".SerQuickN-tile").forEach((tile) => {
      tile.addEventListener("mouseenter", () => {
        gsap.to(tile, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(tile.querySelector(".SerQuickN-icon"), {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      tile.addEventListener("mouseleave", () => {
        gsap.to(tile, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(tile.querySelector(".SerQuickN-icon"), {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.querySelectorAll(".SerQuickN-tile").forEach((tile) => {
        tile.removeEventListener("mouseenter", () => {});
        tile.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <section className="SerQuickN-section" id="services">
      <div className="SerQuickN-container">
        <div className="SerQuickN-header">
          <div className="SerQuickN-header-content">
            <h2 className="SerQuickN-title">Explore Our Services</h2>
            <p className="SerQuickN-subtitle">PREMIUM HOTEL SERVICES</p>
            <div className="SerQuickN-underline"></div>
          </div>
        </div>

        <div className="SerQuickN-grid">
          {/* Rooms Tile */}
          <div className="SerQuickN-tile">
            <div className="SerQuickN-icon-wrapper">
              <div className="SerQuickN-icon">
                {/* SVG Icon */}
                <svg viewBox="0 0 64 64" className="SerQuickN-svg-icon">
                  <rect
                    x="12"
                    y="16"
                    width="40"
                    height="32"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="20"
                    y="24"
                    width="24"
                    height="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="16"
                    y="36"
                    width="8"
                    height="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="40"
                    y="36"
                    width="8"
                    height="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="28"
                    y="36"
                    width="8"
                    height="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="24" cy="28" r="2" fill="currentColor" />
                  <circle cx="40" cy="28" r="2" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="SerQuickN-content">
              <h3 className="SerQuickN-tile-title">Rooms & Suites</h3>
              <p className="SerQuickN-tile-description">
                Elegantly designed accommodations with premium amenities,
                spectacular views, and personalized service for an unforgettable
                stay.
              </p>
              <Link to="/rooms" className="SerQuickN-button">
                Explore Rooms
              </Link>
            </div>
          </div>

          {/* Dining Tile */}
          <div className="SerQuickN-tile">
            <div className="SerQuickN-icon-wrapper">
              <div className="SerQuickN-icon">
                {/* SVG Icon */}
                <svg viewBox="0 0 64 64" className="SerQuickN-svg-icon">
                  <rect
                    x="16"
                    y="16"
                    width="32"
                    height="32"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M24 24 L40 40"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M40 24 L24 40"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="28" cy="28" r="2" fill="currentColor" />
                  <circle cx="36" cy="28" r="2" fill="currentColor" />
                  <circle cx="28" cy="36" r="2" fill="currentColor" />
                  <circle cx="36" cy="36" r="2" fill="currentColor" />
                  <rect
                    x="30"
                    cy="32"
                    width="4"
                    height="4"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="SerQuickN-content">
              <h3 className="SerQuickN-tile-title">Dining</h3>
              <p className="SerQuickN-tile-description">
                Exquisite culinary journey featuring world-class chefs, fresh
                local ingredients, and diverse international cuisines.
              </p>
              <Link to="/HotelDining" className="SerQuickN-button">
                View Restaurants
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SerQuickNav;
