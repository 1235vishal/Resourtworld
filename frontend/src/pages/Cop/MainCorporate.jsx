import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import "./MainCorporate.css";

const MainCorporate = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Simplified Hero animations
    gsap
      .timeline()
      .to(".hotelcorporate-hero-title", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(
        ".hotelcorporate-hero-subtitle",
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(
        ".hotelcorporate-cta-button, .hotelcorporate-book-button",
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );

    // Section title animations
    gsap.utils.toArray(".hotelcorporate-section-title").forEach((title) => {
      gsap.to(title, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Section subtitle animations
    gsap.utils
      .toArray(".hotelcorporate-section-subtitle")
      .forEach((subtitle) => {
        gsap.to(subtitle, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: subtitle,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });

    // Event cards stagger animation
    gsap.utils.toArray(".hotelcorporate-event-card").forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Amenity items stagger animation
    gsap.utils
      .toArray(".hotelcorporate-amenity-item")
      .forEach((item, index) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        });
      });

    // Tech category animations
    gsap.utils
      .toArray(".hotelcorporate-tech-category")
      .forEach((category, index) => {
        gsap.to(category, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: category,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        });
      });

    // Catering cards stagger animation
    gsap.utils
      .toArray(".hotelcorporate-catering-card")
      .forEach((card, index) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        });
      });

    // Booking section animation
    gsap.to(".hotelcorporate-book-button", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hotelcorporate-book-button",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Hover effects for cards
    const cards = document.querySelectorAll(
      ".hotelcorporate-event-card, .hotelcorporate-amenity-item, .hotelcorporate-catering-card"
    );
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Floating animation for amenity items
    gsap.utils.toArray(".hotelcorporate-floating").forEach((element, index) => {
      gsap.to(element, {
        y: -10,
        duration: 2 + index * 0.3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.2,
      });
    });

    // Price tag pulse animation
    gsap.utils.toArray(".hotelcorporate-price-tag").forEach((tag) => {
      gsap.to(tag, {
        scale: 1.05,
        duration: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    // Cleanup event listeners
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="hotelcorporate-corporate-page">
      {/* Hero Section */}
      {/* <section className="hotelcorporate-hero">
        <div className="hotelcorporate-container"> */}
          {/* <div className="hotelcorporate-hero-content">
            <h1 className="hotelcorporate-hero-title">Corporate Events</h1>
            <p className="hotelcorporate-hero-subtitle">
              Elevate your business gatherings with premium event solutions
            </p> */}
            {/* <a
              href="https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062"
              className="hotelcorporate-cta-button"
            >
              Book Your Event
            </a>
            <a
              href="https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062"
              className="hotelcorporate-book-button"
            >
              Book Now
            </a> */}
          {/* </div>
        </div>
      </section> */}

      {/* Event Types Section */}
      <section className="hotelcorporate-section" id="event-types">
        <div className="hotelcorporate-container">
          <h2 className="hotelcorporate-section-title">Event Types</h2>
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

      {/* Business Amenities Section */}
      <section className="hotelcorporate-section" id="amenities">
        <div className="hotelcorporate-container">
          <h2 className="hotelcorporate-section-title">
            Business-Class Amenities
          </h2>
          <p className="hotelcorporate-section-subtitle">
            Premium facilities designed for professional excellence
          </p>
          <div className="hotelcorporate-amenities-grid">
            <div className="hotelcorporate-amenity-item hotelcorporate-floating">
              <div className="hotelcorporate-amenity-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Executive Lounges</h3>
              <p>Exclusive spaces for VIP guests and networking</p>
            </div>
            <div className="hotelcorporate-amenity-item hotelcorporate-floating">
              <div className="hotelcorporate-amenity-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <h3>Premium Dining</h3>
              <p>Gourmet catering and fine dining experiences</p>
            </div>
            <div className="hotelcorporate-amenity-item hotelcorporate-floating">
              <div className="hotelcorporate-amenity-icon">
                <i className="fas fa-car"></i>
              </div>
              <h3>Valet Parking</h3>
              <p>Convenient parking solutions for your guests</p>
            </div>
            <div className="hotelcorporate-amenity-item hotelcorporate-floating">
              <div className="hotelcorporate-amenity-icon">
                <i className="fas fa-concierge-bell"></i>
              </div>
              <h3>Concierge Services</h3>
              <p>Dedicated support for all your event needs</p>
            </div>
            <div className="hotelcorporate-amenity-item hotelcorporate-floating">
              <div className="hotelcorporate-amenity-icon">
                <i className="fas fa-wifi"></i>
              </div>
              <h3>High-Speed WiFi</h3>
              <p>Reliable internet connectivity throughout</p>
            </div>
            <div className="hotelcorporate-amenity-item hotelcorporate-floating">
              <div className="hotelcorporate-amenity-icon">
                <i className="fas fa-dumbbell"></i>
              </div>
              <h3>Fitness Center</h3>
              <p>Modern wellness facilities for active guests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audio/Visual Tech Section */}
      {/* <section className="hotelcorporate-section" id="tech">
        <div className="hotelcorporate-container">
          <h2 className="hotelcorporate-section-title">
            Audio/Visual Technology
          </h2>
          <p className="hotelcorporate-section-subtitle">
            State-of-the-art equipment for seamless presentations
          </p>
          <div className="hotelcorporate-tech-grid">
            <div className="hotelcorporate-tech-category">
              <h3>Audio Systems</h3>
              <ul className="hotelcorporate-event-features">
                <li>Professional sound systems</li>
                <li>Wireless microphones</li>
                <li>Audio mixing consoles</li>
                <li>Noise cancellation technology</li>
                <li>Multi-zone audio control</li>
              </ul>
            </div>
            <div className="hotelcorporate-tech-category">
              <h3>Visual Equipment</h3>
              <ul className="hotelcorporate-event-features">
                <li>4K projectors and screens</li>
                <li>LED video walls</li>
                <li>Digital displays</li>
                <li>Interactive whiteboards</li>
                <li>Document cameras</li>
              </ul>
            </div>
            <div className="hotelcorporate-tech-category">
              <h3>Lighting & Effects</h3>
              <ul className="hotelcorporate-event-features">
                <li>Intelligent lighting systems</li>
                <li>Stage lighting</li>
                <li>Ambient lighting control</li>
                <li>Special effects lighting</li>
                <li>Automated lighting sequences</li>
              </ul>
            </div>
            <div className="hotelcorporate-tech-category">
              <h3>Streaming & Recording</h3>
              <ul className="hotelcorporate-event-features">
                <li>Live streaming solutions</li>
                <li>Multi-camera setups</li>
                <li>Professional recording</li>
                <li>Real-time editing</li>
                <li>Broadcast quality output</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Catering Options Section */}
      {/* <section className="hotelcorporate-section" id="catering">
        <div className="hotelcorporate-container">
          <h2 className="hotelcorporate-section-title">Catering Options</h2>
          <p className="hotelcorporate-section-subtitle">
            Exceptional culinary experiences for every occasion
          </p>
          <div className="hotelcorporate-catering-options">
            <div className="hotelcorporate-catering-card">
              <h3>Continental Breakfast</h3>
              <div className="hotelcorporate-price-tag">$25/person</div>
              <ul className="hotelcorporate-event-features">
                <li>Fresh pastries and breads</li>
                <li>Seasonal fruits</li>
                <li>Premium coffee and tea</li>
                <li>Yogurt and cereals</li>
                <li>Juice selection</li>
              </ul>
            </div>
            <div className="hotelcorporate-catering-card">
              <h3>Business Lunch</h3>
              <div className="hotelcorporate-price-tag">$45/person</div>
              <ul className="hotelcorporate-event-features">
                <li>Gourmet sandwiches</li>
                <li>Fresh salads</li>
                <li>Hot entrées</li>
                <li>Dessert selection</li>
                <li>Beverages included</li>
              </ul>
            </div>
            <div className="hotelcorporate-catering-card">
              <h3>Cocktail Reception</h3>
              <div className="hotelcorporate-price-tag">$65/person</div>
              <ul className="hotelcorporate-event-features">
                <li>Premium hors d'oeuvres</li>
                <li>Signature cocktails</li>
                <li>Wine and beer selection</li>
                <li>Passed appetizers</li>
                <li>Professional service</li>
              </ul>
            </div>
            <div className="hotelcorporate-catering-card">
              <h3>Formal Dinner</h3>
              <div className="hotelcorporate-price-tag">$85/person</div>
              <ul className="hotelcorporate-event-features">
                <li>Multi-course dining</li>
                <li>Chef's specialties</li>
                <li>Wine pairing options</li>
                <li>Elegant table service</li>
                <li>Dietary accommodations</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Booking Section */}
      <section className="hotelcorporate-section" id="booking">
        <div className="hotelcorporate-container">
          <h2 className="hotelcorporate-section-title">Book Your Event</h2>
          <p className="hotelcorporate-section-subtitle">
            Let us help you create an unforgettable corporate experience
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
