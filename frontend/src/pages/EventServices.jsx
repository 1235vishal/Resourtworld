import { useEffect } from "react";
import "./EventServices.css";
import EventServicesHero from "./Heropage/EventServicesHero";
import Footer from "./components/Footer";

const EventServices = () => {
  useEffect(() => {
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
      ".eventservice-highlight-card"
    );

    animatedElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease";
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <EventServicesHero />
      <div className="eventservice-container">
        {/* Highlights Strip */}
        <section className="eventservice-highlights">
          <div className="eventservice-container-inner">
            <div className="eventservice-highlights-grid">
              <div className="eventservice-highlight-card">
                <div className="eventservice-highlight-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <h3>Multicuisine Restaurants</h3>
                <p>
                  Indulge in diverse, world-class dining options for every
                  palate.
                </p>
              </div>
              <div className="eventservice-highlight-card">
                <div className="eventservice-highlight-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>Panoramic Water View</h3>
                <p>
                  Enjoy breathtaking waterfront vistas for a memorable event.
                </p>
              </div>
              <div className="eventservice-highlight-card">
                <div className="eventservice-highlight-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3>State-of-the-Art AV & Lighting</h3>
                <p>
                  Advanced audio-visual systems for stunning event experiences.
                </p>
              </div>
              <div className="eventservice-highlight-card">
                <div className="eventservice-highlight-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </div>
                <h3>Terrace & Garden Venues</h3>
                <p>Elegant outdoor spaces for unforgettable gatherings.</p>
              </div>
              <div className="eventservice-highlight-card">
                <div className="eventservice-highlight-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2a10 10 0 0 0-9 9v3.5l-3 3.5h6a10 10 0 0 0 12 0h6l-3-3.5V11a10 10 0 0 0-9-9z" />
                    <path d="M12 12v4" />
                    <path d="M10 14h4" />
                  </svg>
                </div>
                <h3>End-to-End Event Management</h3>
                <p>Seamless planning and execution for stress-free events.</p>
              </div>
            </div>
          </div>
              </section>
              <Footer />
      </div>
    </>
  );
};

export default EventServices;
