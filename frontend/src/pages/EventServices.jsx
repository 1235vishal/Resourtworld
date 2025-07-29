// import { useEffect } from "react";
// import "./EventServices.css";
// import TestimonialSection from "./components/TestimonialCard";

// const EventServices = () => {
//   useEffect(() => {
//     // Store the click handler in a variable for proper cleanup
//     const handleCtaClick = (e) => {
//       e.preventDefault();
//       document.querySelector("#services").scrollIntoView({
//         behavior: "smooth",
//       });
//     };

//     // Smooth scrolling for CTA button
//     const ctaButton = document.querySelector(".eventservice-cta-button");
//     if (ctaButton) {
//       ctaButton.addEventListener("click", handleCtaClick);
//     }

//     // Intersection Observer for animations
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -50px 0px",
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.style.opacity = "1";
//           entry.target.style.transform = "translateY(0)";
//         }
//       });
//     }, observerOptions);

//     const animatedElements = document.querySelectorAll(
//       ".eventservice-service-card, .eventservice-tech-card, .eventservice-testimonial-card, .eventservice-story-card, .eventservice-section-title, .eventservice-contact-content"
//     );

//     animatedElements.forEach((el) => {
//       el.style.opacity = "0";
//       el.style.transform = "translateY(30px)";
//       el.style.transition = "all 0.6s ease";
//       observer.observe(el);
//     });

//     return () => {
//       // Cleanup event listener with the stored handler
//       if (ctaButton) {
//         ctaButton.removeEventListener("click", handleCtaClick);
//       }

//       // Cleanup Intersection Observer
//       animatedElements.forEach((el) => {
//         observer.unobserve(el);
//       });
//     };
//   }, []);

//   return (
//     <div className="eventservice-container">
//       {/* Hero Section */}
//       <section className="eventservice-hero">
//         <div className="eventservice-hero-overlay"></div>
//         <div className="eventservice-container-inner">
//           <div className="eventservice-hero-content">
//             <h1>Event Services</h1>
//             <p>
//               Creating Unforgettable Experiences with Cutting-Edge Technology
//             </p>
//             <a href="#services" className="eventservice-cta-button">
//               Explore Our Services
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="eventservice-services" id="services">
//         <div className="eventservice-container-inner">
//           <h2 className="eventservice-section-title">Our Services</h2>
//           <div className="eventservice-services-grid">
//             <div className="eventservice-service-card">
//               <div className="eventservice-service-icon">
//                 <img
//                   src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                   alt="Event Planning"
//                 />
//               </div>
//               <h3>Planning & Coordination</h3>
//               <p>
//                 From concept to execution, we handle every detail of your event.
//                 Our experienced team ensures seamless coordination, timeline
//                 management, and flawless execution of your vision.
//               </p>
//             </div>
//             <div className="eventservice-service-card">
//               <div className="eventservice-service-icon">
//                 <img
//                   src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                   alt="Event Design"
//                 />
//               </div>
//               <h3>Event Design & Direction</h3>
//               <p>
//                 Transform your ideas into stunning visual experiences. Our
//                 creative directors craft unique themes, aesthetics, and
//                 atmospheres that captivate and engage your audience.
//               </p>
//             </div>
//             <div className="eventservice-service-card">
//               <div className="eventservice-service-icon">
//                 <img
//                   src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                   alt="Vendors"
//                 />
//               </div>
//               <h3>Vendors & Partnerships</h3>
//               <p>
//                 Access our extensive network of trusted vendors and partners.
//                 We've cultivated relationships with the best in the industry to
//                 ensure quality and reliability for your event.
//               </p>
//             </div>
//             <div className="eventservice-service-card">
//               <div className="eventservice-service-icon">
//                 <img
//                   src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                   alt="Audio Visual Experts"
//                 />
//               </div>
//               <h3>Audio Visual Experts</h3>
//               <p>Premium sound and visual equipment providers</p>
//             </div>
//             <div className="eventservice-service-card">
//               <div className="eventservice-service-icon">
//                 <img
//                   src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                   alt="Tech Support"
//                 />
//               </div>
//               <h3>Tech Support</h3>
//               <p>24/7 technical support and equipment backup</p>
//             </div>
//             <div className="eventservice-service-card">
//               <div className="eventservice-service-icon">
//                 <img
//                   src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                   alt="Venue Management"
//                 />
//               </div>
//               <h3>Venue Management</h3>
//               <p>Exclusive partnerships with premium venues</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Lighting & AV Section */}
//       <section className="eventservice-lighting-av">
//         <div className="eventservice-container-inner">
//           <h2 className="eventservice-section-title">
//             Lighting & AV Technology
//           </h2>
//           <div className="eventservice-tech-features">
//             <div className="eventserviceservice-tech-card">
//               <div className="eventservice-tech-icon">
//                 <img
//                   src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                   alt="Lighting"
//                 />
//               </div>
//               <h3>Latest Lighting Technology</h3>
//               <p>
//                 State-of-the-art LED systems, intelligent moving lights, and
//                 custom lighting design that transforms any space into an
//                 immersive experience.
//               </p>
//             </div>
//             <div className="eventservice-tech-card">
//               <div className="eventservice-tech-icon">
//                 <img
//                   src="https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                   alt="Live Streaming"
//                 />
//               </div>
//               <h3>Live Streaming</h3>
//               <p>
//                 Professional multi-camera setups, real-time streaming, and
//                 broadcast-quality production for global audience reach.
//               </p>
//             </div>
//             <div className="eventservice-tech-card">
//               <div className="eventservice-tech-icon">
//                 <img
//                   src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                   alt="Hybrid Event"
//                 />
//               </div>
//               <h3>Hybrid Event Capabilities</h3>
//               <p>
//                 Seamlessly blend in-person and virtual experiences with
//                 interactive platforms, real-time engagement tools, and
//                 synchronized content delivery.
//               </p>
//             </div>
//             <div className="eventservice-tech-card">
//               <div className="eventservice-tech-icon">
//                 <img
//                   src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                   alt="Audio"
//                 />
//               </div>
//               <h3>Audio Excellence</h3>
//               <p>
//                 Crystal-clear sound systems, wireless microphones, and acoustic
//                 optimization for perfect audio in any venue.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <TestimonialSection />

//       {/* Success Stories Section */}
//       <section className="eventservice-success-stories">
//         <div className="eventservice-container-inner">
//           <h2 className="eventservice-section-title">Success Stories</h2>
//           <div className="eventservice-story-grid">
//             <div className="eventservice-story-card">
//               <div className="eventservice-story-number">01</div>
//               <div className="eventservice-story-title">
//                 Global Product Launch
//               </div>
//               <div className="eventservice-story-description">
//                 Successfully executed a hybrid product launch reaching 50,000+
//                 attendees across 15 countries with seamless live streaming and
//                 interactive engagement.
//               </div>
//             </div>
//             <div className="eventservice-story-card">
//               <div className="eventservice-story-number">02</div>
//               <div className="eventservice-story-title">Award-Winning Gala</div>
//               <div className="eventservice-story-description">
//                 Designed and produced a charity gala that raised $2.5M,
//                 featuring innovative lighting design and immersive multimedia
//                 experiences.
//               </div>
//             </div>
//             <div className="eventservice-story-card">
//               <div className="eventservice-story-number">03</div>
//               <div className="eventservice-story-title">
//                 Corporate Conference
//               </div>
//               <div className="eventservice-story-description">
//                 Transformed a traditional conference into an engaging hybrid
//                 experience with real-time polling, breakout rooms, and
//                 networking features.
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="eventservice-contact">
//         <div className="eventservice-contact-overlay"></div>
//         <div className="eventservice-container-inner">
//           <div className="eventservice-contact-content">
//             <h2>Ready to Create Something Amazing?</h2>
//             <p>
//               Let's discuss your vision and bring your next event to life with
//               our expertise and cutting-edge technology.
//             </p>
//             <a
//               href="https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062"
//               className="eventservice-cta-button"
//             >
//               Get Started Today
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default EventServices;

import { useEffect } from "react";
import TestimonialSection from "./components/TestimonialCard";
import "./EventServices.css";
import EventServicesHero from "./Heropage/EventServicesHero";

const EventServices = () => {
  //   const heroRef = useRef(null);

  useEffect(() => {
    // Smooth scrolling for CTA button
    const handleCtaClick = (e) => {
      e.preventDefault();
      document.querySelector("#services").scrollIntoView({
        behavior: "smooth",
      });
    };

    const ctaButton = document.querySelector(".eventservice-cta-button");
    if (ctaButton) {
      ctaButton.addEventListener("click", handleCtaClick);
    }

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      ".eventservice-service-card, .eventservice-tech-card, .eventservice-testimonial-card, .eventservice-story-card, .eventservice-section-title, .eventservice-contact-content"
    );

    animatedElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease";
      observer.observe(el);
    });

    return () => {
      if (ctaButton) {
        ctaButton.removeEventListener("click", handleCtaClick);
      }

      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <EventServicesHero />
      <div className="eventservice-container">
        {/* Hero Section */}
        {/* <section className="eventservices-section" ref={heroRef}>
        <div
          className="eventservices-parallax-bg"
          style={{
            backgroundImage: `url(${
              eventServicesBackground ||
              "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            })`,
          }}
        ></div>
        <div className="eventservices-content">
          <h1>Event Services</h1>
        </div>
      </section> */}

        {/* Services Section */}
        <section className="eventservice-services" id="services">
          <div className="eventservice-container-inner">
            <h2 className="eventservice-section-title">Our Services</h2>
            <div className="eventservice-services-grid">
              <div className="eventservice-service-card">
                <div className="eventservice-service-icon">
                  <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Event Planning"
                  />
                </div>
                <h3>Planning & Coordination</h3>
                <p>
                  From concept to execution, we handle every detail of your
                  event. Our experienced team ensures seamless coordination,
                  timeline management, and flawless execution of your vision.
                </p>
              </div>
              <div className="eventservice-service-card">
                <div className="eventservice-service-icon">
                  <img
                    src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Event Design"
                  />
                </div>
                <h3>Event Design & Direction</h3>
                <p>
                  Transform your ideas into stunning visual experiences. Our
                  creative directors craft unique themes, aesthetics, and
                  atmospheres that captivate and engage your audience.
                </p>
              </div>
              <div className="eventservice-service-card">
                <div className="eventservice-service-icon">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Vendors"
                  />
                </div>
                <h3>Vendors & Partnerships</h3>
                <p>
                  Access our extensive network of trusted vendors and partners.
                  We've cultivated relationships with the best in the industry
                  to ensure quality and reliability for your event.
                </p>
              </div>
              <div className="eventservice-service-card">
                <div className="eventservice-service-icon">
                  <img
                    src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Audio Visual Experts"
                  />
                </div>
                <h3>Audio Visual Experts</h3>
                <p>Premium sound and visual equipment providers</p>
              </div>
              <div className="eventservice-service-card">
                <div className="eventservice-service-icon">
                  <img
                    src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Tech Support"
                  />
                </div>
                <h3>Tech Support</h3>
                <p>24/7 technical support and equipment backup</p>
              </div>
              <div className="eventservice-service-card">
                <div className="eventservice-service-icon">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Venue Management"
                  />
                </div>
                <h3>Venue Management</h3>
                <p>Exclusive partnerships with premium venues</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lighting & AV Section */}
        <section className="eventservice-lighting-av">
          <div className="eventservice-container-inner">
            <h2 className="eventservice-section-title">
              Lighting & AV Technology
            </h2>
            <div className="eventservice-tech-features">
              <div className="eventservice-tech-card">
                <div className="eventservice-tech-icon">
                  <img
                    src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Lighting"
                  />
                </div>
                <h3>Latest Lighting Technology</h3>
                <p>
                  State-of-the-art LED systems, intelligent moving lights, and
                  custom lighting design that transforms any space into an
                  immersive experience.
                </p>
              </div>
              <div className="eventservice-tech-card">
                <div className="eventservice-tech-icon">
                  <img
                    src="https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Live Streaming"
                  />
                </div>
                <h3>Live Streaming</h3>
                <p>
                  Professional multi-camera setups, real-time streaming, and
                  broadcast-quality production for global audience reach.
                </p>
              </div>
              <div className="eventservice-tech-card">
                <div className="eventservice-tech-icon">
                  <img
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fEVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Hybrid Event"
                  />
                </div>
                <h3>Hybrid Event Capabilities</h3>
                <p>
                  Seamlessly blend in-person and virtual experiences with
                  interactive platforms, real-time engagement tools, and
                  synchronized content delivery.
                </p>
              </div>
              <div className="eventservice-tech-card">
                <div className="eventservice-tech-icon">
                  <img
                    src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fEVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Audio"
                  />
                </div>
                <h3>Audio Excellence</h3>
                <p>
                  Crystal-clear sound systems, wireless microphones, and
                  acoustic optimization for perfect audio in any venue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialSection />

        {/* Success Stories Section */}
        <section className="eventservice-success-stories">
          <div className="eventservice-container-inner">
            <h2 className="eventservice-section-title">Success Stories</h2>
            <div className="eventservice-story-grid">
              <div className="eventservice-story-card">
                <div className="eventservice-story-number">01</div>
                <div className="eventservice-story-title">
                  Global Product Launch
                </div>
                <div className="eventservice-story-description">
                  Successfully executed a hybrid product launch reaching 50,000+
                  attendees across 15 countries with seamless live streaming and
                  interactive engagement.
                </div>
              </div>
              <div className="eventservice-story-card">
                <div className="eventservice-story-number">02</div>
                <div className="eventservice-story-title">
                  Award-Winning Gala
                </div>
                <div className="eventservice-story-description">
                  Designed and produced a charity gala that raised $2.5M,
                  featuring innovative lighting design and immersive multimedia
                  experiences.
                </div>
              </div>
              <div className="eventservice-story-card">
                <div className="eventservice-story-number">03</div>
                <div className="eventservice-story-title">
                  Corporate Conference
                </div>
                <div className="eventservice-story-description">
                  Transformed a traditional conference into an engaging hybrid
                  experience with real-time polling, breakout rooms, and
                  networking features.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="eventservice-contact">
          <div className="eventservice-contact-overlay"></div>
          <div className="eventservice-container-inner">
            <div className="eventservice-contact-content">
              <h2>Ready to Create Something Amazing?</h2>
              <p>
                Let's discuss your vision and bring your next event to life with
                our expertise and cutting-edge technology.
              </p>
              <a
                href="https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062"
                className="eventservice-cta-button"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </div>{" "}
    </>
  );
};

export default EventServices;
