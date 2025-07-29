import React from "react";
import ScrollReveal from "scrollreveal";
import "./WeddingMainPage.css";
import Footer from "../components/Footer";

const WeddingMainPage = () => {
  React.useEffect(() => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Scroll reveal animation
    const scrollReveal = ScrollReveal({
      origin: "bottom",
      distance: "60px",
      duration: 1000,
      delay: 200,
      reset: true,
    });

    scrollReveal.reveal(
      ".hotelweddingworld-offering-card, .hotelweddingworld-package-card, .hotelweddingworld-gallery-item",
      {
        interval: 200,
      }
    );

    // Button ripple effect
    document.querySelectorAll(".hotelweddingworld-btn").forEach((button) => {
      button.addEventListener("click", function (e) {
        const ripples = this.querySelectorAll(".hotelweddingworld-ripple");
        ripples.forEach((ripple) => ripple.remove());

        const ripple = document.createElement("span");
        ripple.classList.add("hotelweddingworld-ripple");

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

        this.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });

    // Add ripple styles dynamically
    const style = document.createElement("style");
    style.textContent = `
      .hotelweddingworld-ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      }
      
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    // Cleanup event listeners on component unmount
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
      document.querySelectorAll(".hotelweddingworld-btn").forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="hotelweddingworld-wedding-main-page">
      {/* Hero Section */}
      <section className="hotelweddingworld-hero">
        <div className="hotelweddingworld-hero-content">
          <h1>Your Love Story Deserves a Grand Celebration</h1>
          <p>
            At Magnoliya Grand, we create unforgettable weddings with elegant
            spaces, exceptional service, and breathtaking atmosphere for your
            perfect beginning
          </p>
          <div className="hotelweddingworld-hero-cta">
            <a
              href="https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062"
              className="hotelweddingworld-btn hotelweddingworld-btn-primary"
            >
              Plan Your Wedding
            </a>
            <a
              href="https://pronine.pixieset.com/magnoliya/"
              className="hotelweddingworld-btn hotelweddingworld-btn-secondary"
            >
              View Our Gallery
            </a>
          </div>
          {/* <div className="hotelweddingworld-hero-scroll">
            <i className="fas fa-chevron-down"></i>
          </div> */}
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings">
        <div className="hotelweddingworld-container">
          <div className="hotelweddingworld-section-header">
            <h2>Our Wedding & Event Offerings</h2>
            <p>
              From intimate ceremonies to grand celebrations, we bring your
              vision to life with exceptional attention to detail
            </p>
          </div>

          <div className="hotelweddingworld-offerings-grid">
            <div className="hotelweddingworld-offering-card hotelweddingworld-floating">
              <div className="hotelweddingworld-offering-icon">
                <i className="fas fa-church"></i>
              </div>
              <h3>Wedding Ceremonies</h3>
              <p>
                Beautiful ceremony spaces with customizable layouts, floral
                arrangements, and professional coordination to make your special
                day perfect.
              </p>
            </div>

            <div className="hotelweddingworld-offering-card hotelweddingworld-floating">
              <div className="hotelweddingworld-offering-icon">
                <i className="fas fa-glass-cheers"></i>
              </div>
              <h3>Reception Planning</h3>
              <p>
                Complete reception services including catering, entertainment
                coordination, lighting design, and guest management.
              </p>
            </div>

            <div className="hotelweddingworld-offering-card hotelweddingworld-floating">
              <div className="hotelweddingworld-offering-icon">
                <i className="fas fa-birthday-cake"></i>
              </div>
              <h3>Social Events</h3>
              <p>
                Anniversary parties, birthday celebrations, corporate events,
                and special occasions planned with creativity and precision.
              </p>
            </div>

            <div className="hotelweddingworld-offering-card hotelweddingworld-floating">
              <div className="hotelweddingworld-offering-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Full-Service Planning</h3>
              <p>
                End-to-end event management from initial consultation to final
                cleanup, ensuring a stress-free experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Content Section */}
      <section id="wedding-details">
        <div className="hotelweddingworld-container">
          <div className="hotelweddingworld-section-header">
            <h2>Weddings at Magnoliya Grand</h2>
            <p>Every wedding should be as unforgettable as your love story</p>
          </div>

          <div className="hotelweddingworld-wedding-content">
            <p>
              At <strong>Magnoliya Grand Conference & Event Center</strong>, we
              believe every wedding should be as unforgettable as your love
              story. Our elegant spaces, exceptional service, and breathtaking
              atmosphere set the stage for the perfect beginning to your happily
              ever after.
            </p>

            <h3>The Perfect Venue for Your Special Day</h3>
            <p>
              Whether you're dreaming of a grand celebration or an intimate
              gathering, Magnoliya Grand offers the flexibility and beauty to
              bring your vision to life:
            </p>
            <ul>
              <li>Stunning Ballrooms with customizable layouts</li>
              <li>Romantic ceremony options</li>
              <li>Elegant reception spaces with sophisticated décor</li>
              <li>Beautiful backdrops for memorable photos and video</li>
            </ul>

            <h3>Weddings at Magnoliya Grand Include:</h3>
            <ul>
              <li>Spacious bridal/glam suites for pre-ceremony preparations</li>
              <li>Customizable ceremony and reception setups</li>
              <li>Professional event coordination and day-of management</li>
              <li>On-site catering with tailored wedding menus</li>
              <li>Full-service bar packages</li>
              <li>High-quality sound, lighting, and A/V systems</li>
              <li>Ample parking for your guests</li>
              <li>
                Partnerships with trusted local florists, photographers, and
                decorators
              </li>
            </ul>

            <h3>We Make Every Moment Special</h3>
            <ul>
              <li>
                <strong>Ceremonies</strong> — Traditional, modern, cultural, or
                themed
              </li>
              <li>
                <strong>Receptions</strong> — Elegant dining, lively dancing,
                and unforgettable memories
              </li>
              <li>
                <strong>Rehearsal Dinners</strong> — Private and beautifully
                curated events
              </li>
              <li>
                <strong>Bridal Showers & Engagement Parties</strong> — Celebrate
                every milestone in style
              </li>
            </ul>

            <h3>Your Vision, Our Commitment</h3>
            <p>
              From the first walk-through to the final dance, our experienced
              wedding specialists work closely with you to ensure every detail
              reflects your unique style and love story. We are here to bring
              your dreams to life — flawlessly and joyfully.
            </p>

            <p style={{ marginTop: "40px", textAlign: "center" }}>
              <a
                href="https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062"
                className="hotelweddingworld-btn hotelweddingworld-btn-primary"
              >
                Let's Start Planning Your Dream Wedding
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      {/* <section id="packages" style={{ background: "#f8f9fa" }}>
        <div className="hotelweddingworld-container">
          <div className="hotelweddingworld-section-header">
            <h2>Wedding Packages</h2>
            <p>
              Choose from our carefully curated packages or let us create a
              custom solution for your unique celebration
            </p>
          </div>

          <div className="hotelweddingworld-packages-grid">
            <div className="hotelweddingworld-package-card">
              <div className="hotelweddingworld-package-header">
                <div className="hotelweddingworld-package-title">Intimate</div>
                <div className="hotelweddingworld-package-price">$2,500</div>
                <div className="hotelweddingworld-package-subtitle">
                  Up to 50 guests
                </div>
              </div>
              <div className="hotelweddingworld-package-content">
                <ul className="hotelweddingworld-package-features">
                  <li>4-hour venue rental</li>
                  <li>Basic floral arrangements</li>
                  <li>Ceremony setup</li>
                  <li>Bridal suite access</li>
                  <li>Professional coordination</li>
                  <li>Basic lighting</li>
                </ul>
                <div className="hotelweddingworld-customizable-note">
                  <strong>Fully Customizable:</strong> Add catering,
                  photography, music, and more based on your preferences.
                </div>
              </div>
            </div>

            <div className="hotelweddingworld-package-card hotelweddingworld-featured">
              <div className="hotelweddingworld-package-header">
                <div className="hotelweddingworld-package-title">
                  Grand Celebration
                </div>
                <div className="hotelweddingworld-package-price">$7,500</div>
                <div className="hotelweddingworld-package-subtitle">
                  Up to 200 guests
                </div>
              </div>
              <div className="hotelweddingworld-package-content">
                <ul className="hotelweddingworld-package-features">
                  <li>8-hour venue rental</li>
                  <li>Premium floral designs</li>
                  <li>Ceremony & reception setup</li>
                  <li>Bridal suite & groom's room</li>
                  <li>Dedicated event coordinator</li>
                  <li>Premium lighting & sound</li>
                  <li>Champagne toast</li>
                  <li>Guest parking included</li>
                </ul>
                <div className="hotelweddingworld-customizable-note">
                  <strong>Most Popular:</strong> Includes premium amenities with
                  options for catering, entertainment, and photography packages.
                </div>
              </div>
            </div>

            <div className="hotelweddingworld-package-card">
              <div className="hotelweddingworld-package-header">
                <div className="hotelweddingworld-package-title">
                  Luxury Experience
                </div>
                <div className="hotelweddingworld-package-price">$12,000</div>
                <div className="hotelweddingworld-package-subtitle">
                  Up to 300 guests
                </div>
              </div>
              <div className="hotelweddingworld-package-content">
                <ul className="hotelweddingworld-package-features">
                  <li>Full day venue access</li>
                  <li>Luxury floral & decor</li>
                  <li>Multiple venue spaces</li>
                  <li>Premium suites</li>
                  <li>Personal wedding planner</li>
                  <li>Professional lighting design</li>
                  <li>Welcome reception</li>
                  <li>Valet parking service</li>
                  <li>Exclusive vendor access</li>
                </ul>
                <div className="hotelweddingworld-customizable-note">
                  <strong>All-Inclusive Option:</strong> Work with our team to
                  create a completely bespoke experience with unlimited
                  customization.
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <a
              href="https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062"
              className="hotelweddingworld-btn hotelweddingworld-btn-primary"
            >
              Contact Sales for Custom Quote
            </a>
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="hotelweddingworld-gallery-section" id="gallery">
        <div className="hotelweddingworld-container">
          <div className="hotelweddingworld-section-header">
            <h2>Our Wedding Gallery</h2>
            <p>
              Explore our beautiful venue and see how we've brought couples'
              dreams to life
            </p>
          </div>

          <div className="hotelweddingworld-gallery-grid">
            <a
              href="https://pronine.pixieset.com/magnoliya/"
              className="hotelweddingworld-gallery-item"
            >
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Wedding Ceremony"
                className="hotelweddingworld-gallery-image"
              />
              <div className="hotelweddingworld-gallery-overlay">
                <h4>Elegant Ceremony</h4>
                <p>Our beautiful ceremony space with floral arches</p>
              </div>
            </a>

            <a
              href="https://pronine.pixieset.com/magnoliya/"
              className="hotelweddingworld-gallery-item"
            >
              <img
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Wedding Reception"
                className="hotelweddingworld-gallery-image"
              />
              <div className="hotelweddingworld-gallery-overlay">
                <h4>Grand Reception</h4>
                <p>Elegant dining and dancing under chandeliers</p>
              </div>
            </a>

            <a
              href="https://pronine.pixieset.com/magnoliya/"
              className="hotelweddingworld-gallery-item"
            >
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bridal Suite"
                className="hotelweddingworld-gallery-image"
              />
              <div className="hotelweddingworld-gallery-overlay">
                <h4>Bridal Suite</h4>
                <p>Luxurious preparation space for the wedding party</p>
              </div>
            </a>

            <a
              href="https://pronine.pixieset.com/magnoliya/"
              className="hotelweddingworld-gallery-item"
            >
              <img
                src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Outdoor Ceremony"
                className="hotelweddingworld-gallery-image"
              />
              <div className="hotelweddingworld-gallery-overlay">
                <h4>Garden Ceremony</h4>
                <p>Romantic outdoor wedding setting</p>
              </div>
            </a>

            <a
              href="https://pronine.pixieset.com/magnoliya/"
              className="hotelweddingworld-gallery-item"
            >
              <img
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Wedding Cake"
                className="hotelweddingworld-gallery-image"
              />
              <div className="hotelweddingworld-gallery-overlay">
                <h4>Sweet Moments</h4>
                <p>Beautiful cake displays and dessert tables</p>
              </div>
            </a>

            <a
              href="https://pronine.pixieset.com/magnoliya/"
              className="hotelweddingworld-gallery-item"
            >
              <img
                src="https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Wedding Details"
                className="hotelweddingworld-gallery-image"
              />
              <div className="hotelweddingworld-gallery-overlay">
                <h4>Beautiful Details</h4>
                <p>Custom decor and personalized touches</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hotelweddingworld-cta-section" id="contact">
        <div className="hotelweddingworld-container">
          <div className="hotelweddingworld-cta-content">
            <h2>Ready to Begin Your Journey?</h2>
            <p>
              Contact us today to schedule a tour of our beautiful venue and
              start planning your dream wedding
            </p>
            <div className="hotelweddingworld-cta-buttons">
              <a
                href="/ContactUs"
                className="hotelweddingworld-btn hotelweddingworld-btn-primary"
              >
                <i className="fas fa-phone"></i> Call Us Now
              </a>
              <a
                href="/ContactUs"
                className="hotelweddingworld-btn hotelweddingworld-btn-secondary"
              >
                <i className="fas fa-envelope"></i> Email Our Planners
              </a>
            </div>
          </div>
        </div>
          </section>
          <Footer />
    </div>
  );
};

export default WeddingMainPage;
