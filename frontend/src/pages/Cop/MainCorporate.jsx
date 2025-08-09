// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect } from "react";
// import "./MainCorporate.css";

// const MainCorporate = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Simplified Hero animations
//     gsap
//       .timeline()
//       .to(".hotelcorporate-hero-title", {
//         opacity: 1,
//         duration: 0.5,
//         ease: "power2.out",
//       })
//       .to(
//         ".hotelcorporate-hero-subtitle",
//         {
//           opacity: 1,
//           duration: 0.5,
//           ease: "power2.out",
//         },
//         "-=0.3"
//       )
//       .to(
//         ".hotelcorporate-cta-button, .hotelcorporate-book-button",
//         {
//           opacity: 1,
//           duration: 0.5,
//           ease: "power2.out",
//         },
//         "-=0.3"
//       );

//     // Section title animations
//     gsap.utils.toArray(".hotelcorporate-section-title").forEach((title) => {
//       gsap.to(title, {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: title,
//           start: "top 80%",
//           end: "bottom 20%",
//           toggleActions: "play none none reverse",
//         },
//       });
//     });

//     // Section subtitle animations
//     gsap.utils
//       .toArray(".hotelcorporate-section-subtitle")
//       .forEach((subtitle) => {
//         gsap.to(subtitle, {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power2.out",
//           delay: 0.2,
//           scrollTrigger: {
//             trigger: subtitle,
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse",
//           },
//         });
//       });

//     // Event cards stagger animation
//     gsap.utils.toArray(".hotelcorporate-event-card").forEach((card, index) => {
//       gsap.to(card, {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         delay: index * 0.1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: card,
//           start: "top 85%",
//           end: "bottom 15%",
//           toggleActions: "play none none reverse",
//         },
//       });
//     });

//     // Amenity items stagger animation
//     gsap.utils
//       .toArray(".hotelcorporate-amenity-item")
//       .forEach((item, index) => {
//         gsap.to(item, {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           delay: index * 0.1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: item,
//             start: "top 85%",
//             end: "bottom 15%",
//             toggleActions: "play none none reverse",
//           },
//         });
//       });

//     // Tech category animations
//     gsap.utils
//       .toArray(".hotelcorporate-tech-category")
//       .forEach((category, index) => {
//         gsap.to(category, {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           delay: index * 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: category,
//             start: "top 85%",
//             end: "bottom 15%",
//             toggleActions: "play none none reverse",
//           },
//         });
//       });

//     // Catering cards stagger animation
//     gsap.utils
//       .toArray(".hotelcorporate-catering-card")
//       .forEach((card, index) => {
//         gsap.to(card, {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           delay: index * 0.15,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 85%",
//             end: "bottom 15%",
//             toggleActions: "play none none reverse",
//           },
//         });
//       });

//     // Booking section animation
//     gsap.to(".hotelcorporate-book-button", {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: ".hotelcorporate-book-button",
//         start: "top 80%",
//         end: "bottom 20%",
//         toggleActions: "play none none reverse",
//       },
//     });

//     // Hover effects for cards
//     const cards = document.querySelectorAll(
//       ".hotelcorporate-event-card, .hotelcorporate-amenity-item, .hotelcorporate-catering-card"
//     );
//     cards.forEach((card) => {
//       card.addEventListener("mouseenter", () => {
//         gsap.to(card, {
//           scale: 1.02,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       });
//       card.addEventListener("mouseleave", () => {
//         gsap.to(card, {
//           scale: 1,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       });
//     });

//     // Floating animation for amenity items
//     gsap.utils.toArray(".hotelcorporate-floating").forEach((element, index) => {
//       gsap.to(element, {
//         y: -10,
//         duration: 2 + index * 0.3,
//         ease: "power2.inOut",
//         yoyo: true,
//         repeat: -1,
//         delay: index * 0.2,
//       });
//     });

//     // Price tag pulse animation
//     gsap.utils.toArray(".hotelcorporate-price-tag").forEach((tag) => {
//       gsap.to(tag, {
//         scale: 1.05,
//         duration: 1.5,
//         ease: "power2.inOut",
//         yoyo: true,
//         repeat: -1,
//       });
//     });

//     // Cleanup event listeners
//     return () => {
//       cards.forEach((card) => {
//         card.removeEventListener("mouseenter", () => {});
//         card.removeEventListener("mouseleave", () => {});
//       });
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="hotelcorporate-corporate-page">
     
//       {/* Event Types Section */}
//       <section className="hotelcorporate-section" id="event-types">
//         <div className="hotelcorporate-container">
//           <h2 className="hotelcorporate-section-title">Event Types</h2>
//           <p className="hotelcorporate-section-subtitle">
//             Professional solutions for every business occasion
//           </p>
//           <div className="hotelcorporate-event-types">
//             <div className="hotelcorporate-event-card">
//               <h3>Conferences</h3>
//               <p>
//                 Large-scale professional gatherings with keynote speakers and
//                 networking opportunities.
//               </p>
//               <ul className="hotelcorporate-event-features">
//                 <li>Multi-day event support</li>
//                 <li>Keynote speaker coordination</li>
//                 <li>Networking sessions</li>
//                 <li>Exhibition spaces</li>
//                 <li>Live streaming capabilities</li>
//               </ul>
//             </div>
//             <div className="hotelcorporate-event-card">
//               <h3>Seminars</h3>
//               <p>
//                 Focused educational sessions and workshops for skill development
//                 and knowledge sharing.
//               </p>
//               <ul className="hotelcorporate-event-features">
//                 <li>Interactive workshops</li>
//                 <li>Expert facilitators</li>
//                 <li>Hands-on training</li>
//                 <li>Certification programs</li>
//                 <li>Small group discussions</li>
//               </ul>
//             </div>
//             <div className="hotelcorporate-event-card">
//               <h3>Product Launches</h3>
//               <p>
//                 Spectacular unveiling events that create buzz and drive business
//                 impact.
//               </p>
//               <ul className="hotelcorporate-event-features">
//                 <li>Brand activation</li>
//                 <li>Media coverage</li>
//                 <li>Demonstration areas</li>
//                 <li>Press conferences</li>
//                 <li>Social media integration</li>
//               </ul>
//             </div>
//             <div className="hotelcorporate-event-card">
//               <h3>Corporate Retreats</h3>
//               <p>
//                 Team-building experiences that strengthen relationships and
//                 boost productivity.
//               </p>
//               <ul className="hotelcorporate-event-features">
//                 <li>Team building activities</li>
//                 <li>Leadership development</li>
//                 <li>Strategic planning sessions</li>
//                 <li>Wellness programs</li>
//                 <li>Recreational activities</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

    
//       {/* Booking Section */}
//       <section className="hotelcorporate-section" id="booking">
//         <div className="hotelcorporate-container">
//           <h2 className="hotelcorporate-section-title">Book Your Event</h2>
//           <p className="hotelcorporate-section-subtitle">
//             Let us help you create an unforgettable corporate experience
//           </p>
//           <div style={{ textAlign: "center", marginTop: "2rem" }}>
//             <a
//               href="https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062"
//               className="hotelcorporate-book-button"
//             >
//               Book Now
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MainCorporate;


import React from "react";
import "./MainCorporate.css";

const MainCorporate = () => {
  return (
    <div className="hotelcorporate-corporate-page">
      {/* Event Types Section */}
      <section className="hotelcorporate-section" id="event-types">
        <div className="hotelcorporate-container">
          <h2 className="hotelcorporate-section-title">Corporate Events</h2>
          <p className="hotelcorporate-section-subtitle">
            Professional solutions for every business occasion
          </p>
          <div className="hotelcorporate-event-types">
            <div className="hotelcorporate-event-card">
              <h3>Conferences</h3>
              <p>
                Large-scale professional gatherings with keynote speakers and
                networking opportunities.
              </p>
              <ul className="hotelcorporate-event-features">
                <li>Multi-day event support</li>
                <li>Keynote speaker coordination</li>
                <li>Networking sessions</li>
                <li>Exhibition spaces</li>
                <li>Live streaming capabilities</li>
              </ul>
            </div>
            <div className="hotelcorporate-event-card">
              <h3>Seminars</h3>
              <p>
                Focused educational sessions and workshops for skill development
                and knowledge sharing.
              </p>
              <ul className="hotelcorporate-event-features">
                <li>Interactive workshops</li>
                <li>Expert facilitators</li>
                <li>Hands-on training</li>
                <li>Certification programs</li>
                <li>Small group discussions</li>
              </ul>
            </div>
            <div className="hotelcorporate-event-card">
              <h3>Product Launches</h3>
              <p>
                Spectacular unveiling events that create buzz and drive business
                impact.
              </p>
              <ul className="hotelcorporate-event-features">
                <li>Brand activation</li>
                <li>Media coverage</li>
                <li>Demonstration areas</li>
                <li>Press conferences</li>
                <li>Social media integration</li>
              </ul>
            </div>
            <div className="hotelcorporate-event-card">
              <h3>Corporate Retreats</h3>
              <p>
                Team-building experiences that strengthen relationships and
                boost productivity.
              </p>
              <ul className="hotelcorporate-event-features">
                <li>Team building activities</li>
                <li>Leadership development</li>
                <li>Strategic planning sessions</li>
                <li>Wellness programs</li>
                <li>Recreational activities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Events Section */}
      <section className="hotelcorporate-section" id="social-events">
        <div className="hotelcorporate-container">
          <h2 className="hotelcorporate-section-title">Social Events</h2>
          <p className="hotelcorporate-section-subtitle">
            Celebrate life's special moments with elegance and joy
          </p>
          <div className="hotelcorporate-social-events">
            <div className="hotelcorporate-social-card">
              <div className="hotelcorporate-social-header">
                <i className="fas fa-birthday-cake hotelcorporate-social-icon"></i>
                <h3>Birthdays</h3>
              </div>
              <p>Memorable birthday celebrations tailored to your vision.</p>
              <ul className="hotelcorporate-event-features">
                <li>Themed parties</li>
                <li>Milestone celebrations</li>
                <li>Custom decorations</li>
              </ul>
            </div>
            <div className="hotelcorporate-social-card">
              <div className="hotelcorporate-social-header">
                <i className="fas fa-graduation-cap hotelcorporate-social-icon"></i>
                <h3>Graduations</h3>
              </div>
              <p>Commemorate academic achievements with style.</p>
              <ul className="hotelcorporate-event-features">
                <li>High school, college, post-grad events</li>
                <li>Family-style or formal dinners</li>
              </ul>
            </div>
            <div className="hotelcorporate-social-card">
              <div className="hotelcorporate-social-header">
                <i className="fas fa-users hotelcorporate-social-icon"></i>
                <h3>Reunions</h3>
              </div>
              <p>Reconnect with loved ones in a nostalgic setting.</p>
              <ul className="hotelcorporate-event-features">
                <li>Class or family reunions</li>
                <li>Multimedia displays & memory walls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="hotelcorporate-section" id="booking">
        <div className="hotelcorporate-container">
          <h2 className="hotelcorporate-section-title">Book Your Event</h2>
          <p className="hotelcorporate-section-subtitle">
            Let us help you create an unforgettable corporate or social
            experience
          </p>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a
              href="https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062"
              className="hotelcorporate-book-button"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainCorporate;