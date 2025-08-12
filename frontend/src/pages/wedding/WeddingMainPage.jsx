

// import React from "react";
// import Footer from "../components/Footer";
// import weddingImages from "./WeddingImages";
// import "./WeddingMainPage.css";

// const WeddingMainPage = () => {
//   React.useEffect(() => {
//     // Smooth scrolling for navigation
//     document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//       anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute("href"));
//         if (target) {
//           target.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }
//       });
//     });

//     // Button ripple effect
//     document.querySelectorAll(".hotelweddingworld-btn").forEach((button) => {
//       button.addEventListener("click", function (e) {
//         const ripples = this.querySelectorAll(".hotelweddingworld-ripple");
//         ripples.forEach((ripple) => ripple.remove());

//         const ripple = document.createElement("span");
//         ripple.classList.add("hotelweddingworld-ripple");

//         const rect = this.getBoundingClientRect();
//         const size = Math.max(rect.width, rect.height);
//         ripple.style.width = ripple.style.height = `${size}px`;
//         ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
//         ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

//         this.appendChild(ripple);

//         setTimeout(() => {
//           ripple.remove();
//         }, 600);
//       });
//     });

//     // Add ripple styles dynamically
//     const style = document.createElement("style");
//     style.textContent = `
//       .hotelweddingworld-ripple {
//         position: absolute;
//         border-radius: 50%;
//         background-color: rgba(255, 255, 255, 0.4);
//         transform: scale(0);
//         animation: ripple 0.6s linear;
//         pointer-events: none;
//       }
      
//       @keyframes ripple {
//         to {
//           transform: scale(4);
//           opacity: 0;
//         }
//       }
//     `;
//     document.head.appendChild(style);

//     // Cleanup event listeners on component unmount
//     return () => {
//       document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//         anchor.removeEventListener("click", () => {});
//       });
//       document.querySelectorAll(".hotelweddingworld-btn").forEach((button) => {
//         button.removeEventListener("click", () => {});
//       });
//     };
//   }, []);

//   return (
//     <div className="hotelweddingworld-wedding-main-page">
//       {/* Hero Section */}
//       <section className="hotelweddingworld-hero">
//         <div className="hotelweddingworld-hero-content">
//           <h1>Your Love Story Deserves a Grand Celebration</h1>
//           <p>
//             At Magnoliya Grand, we create unforgettable weddings with elegant
//             spaces, exceptional service, and breathtaking atmosphere for your
//             perfect beginning
//           </p>
//           <div className="hotelweddingworld-hero-cta">
//             <a
//               href="https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062"
//               className="hotelweddingworld-btn hotelweddingworld-btn-primary"
//             >
//               Plan Your Wedding
//             </a>
//             <a
//               href="#gallery"
//               className="hotelweddingworld-btn hotelweddingworld-btn-secondary"
//             >
//               View Our Gallery
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Offerings Section */}
//       <section id="offerings">
//         <div className="hotelweddingworld-container">
//           <div className="hotelweddingworld-section-header">
//             <h2>Our Wedding Offerings</h2>
//             <p>
//               From intimate ceremonies to grand celebrations, we bring your
//               vision to life with exceptional attention to detail
//             </p>
//           </div>

//           <div className="hotelweddingworld-offerings-grid">
//             <div className="hotelweddingworld-offering-card hotelweddingworld-floating">
//               <div className="hotelweddingworld-offering-icon">
//                 <i className="fas fa-church"></i>
//               </div>
//               <h3>Ceremonies</h3>
//               <p>
//                 Traditional, modern, cultural, or themed ceremonies tailored to
//                 your unique love story.
//               </p>
//             </div>

//             <div className="hotelweddingworld-offering-card hotelweddingworld-floating">
//               <div className="hotelweddingworld-offering-icon">
//                 <i className="fas fa-glass-cheers"></i>
//               </div>
//               <h3>Receptions</h3>
//               <p>
//                 Elegant dining, lively dancing, and unforgettable memories in
//                 our stunning venues.
//               </p>
//             </div>

//             <div className="hotelweddingworld-offering-card hotelweddingworld-floating">
//               <div className="hotelweddingworld-offering-icon">
//                 <i className="fas fa-utensils"></i>
//               </div>
//               <h3>Rehearsal Dinners</h3>
//               <p>
//                 Private and beautifully curated events to prepare for your big
//                 day in style.
//               </p>
//             </div>

//             <div className="hotelweddingworld-offering-card hotelweddingworld-floating">
//               <div className="hotelweddingworld-offering-icon">
//                 <i className="fas fa-heart"></i>
//               </div>
//               <h3>Bridal Showers & Engagement Parties</h3>
//               <p>
//                 Celebrate every milestone in style with customized, elegant
//                 gatherings.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Wedding Content Section */}
//       <section id="wedding-details">
//         <div className="hotelweddingworld-container">
//           <div className="hotelweddingworld-section-header">
//             <h2>Weddings at Magnoliya Grand</h2>
//             <p>Every wedding should be as unforgettable as your love story</p>
//           </div>

//           <div className="hotelweddingworld-wedding-content">
//             <p>
//               At <strong>Magnoliya Grand Conference & Event Center</strong>, we
//               believe every wedding should be as unforgettable as your love
//               story. Our elegant spaces, exceptional service, and breathtaking
//               atmosphere set the stage for the perfect beginning to your happily
//               ever after.
//             </p>

//             <h3>The Perfect Venue for Your Special Day</h3>
//             <p>
//               Whether you're dreaming of a grand celebration or an intimate
//               gathering, Magnoliya Grand offers the flexibility and beauty to
//               bring your vision to life:
//             </p>
//             <ul>
//               <li>Stunning Ballrooms with customizable layouts</li>
//               <li>Romantic ceremony options</li>
//               <li>Elegant reception spaces with sophisticated décor</li>
//               <li>Beautiful backdrops for memorable photos and video</li>
//             </ul>

//             <h3>Weddings at Magnoliya Grand Include:</h3>
//             <ul>
//               <li>Spacious bridal/glam suites for pre-ceremony preparations</li>
//               <li>Customizable ceremony and reception setups</li>
//               <li>Professional event coordination and day-of management</li>
//               <li>On-site catering with tailored wedding menus</li>
//               <li>Full-service bar packages</li>
//               <li>High-quality sound, lighting, and A/V systems</li>
//               <li>Ample parking for your guests</li>
//               <li>
//                 Partnerships with trusted local florists, photographers, and
//                 decorators
//               </li>
//             </ul>
//             <p style={{ marginTop: "40px", textAlign: "center" }}>
//               <a
//                 href="https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062"
//                 className="hotelweddingworld-btn hotelweddingworld-btn-primary"
//               >
//                 Let's Start Planning Your Dream Wedding
//               </a>
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="hotelweddingworld-gallery-section" id="gallery">
//         <div className="hotelweddingworld-container">
//           <div className="hotelweddingworld-section-header">
//             <h2>Our Wedding Gallery</h2>
//             <p>
//               Discover the beauty and elegance of weddings at Magnoliya Grand
//             </p>
//           </div>
//           <div className="hotelweddingworld-masonry-gallery">
//             {weddingImages.map((image) => (
//               <div key={image.id} className="hotelweddingworld-masonry-item">
//                 <img src={image.src} alt={image.alt} loading="lazy" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="hotelweddingworld-cta-section" id="contact">
//         <div className="hotelweddingworld-container">
//           <div className="hotelweddingworld-cta-content">
//             <h2>Ready to Begin Your Journey?</h2>
//             <p>
//               Contact us today to schedule a tour of our beautiful venue and
//               start planning your dream wedding
//             </p>
//             <div className="hotelweddingworld-cta-buttons">
//               <a
//                 href="/ContactUs"
//                 className="hotelweddingworld-btn hotelweddingworld-btn-primary"
//               >
//                 <i className="fas fa-phone"></i> Call Us Now
//               </a>
//               <a
//                 href="/ContactUs"
//                 className="hotelweddingworld-btn hotelweddingworld-btn-secondary"
//               >
//                 <i className="fas fa-envelope"></i> Email Our Planners
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default WeddingMainPage;


import React from "react";
import Footer from "../components/Footer";
import weddingImages from "./WeddingImages";
import "./WeddingMainPage.css";

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

    // Intersection Observer for testimonials animation
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
      ".hotelweddingworld-testimonial-card"
    );
    animatedElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease";
      observer.observe(el);
    });

    // Cleanup event listeners on component unmount
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
      document.querySelectorAll(".hotelweddingworld-btn").forEach((button) => {
        button.removeEventListener("click", () => {});
      });
      animatedElements.forEach((el) => {
        observer.unobserve(el);
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
              href="#gallery"
              className="hotelweddingworld-btn hotelweddingworld-btn-secondary"
            >
              View Our Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings">
        <div className="hotelweddingworld-container">
          <div className="hotelweddingworld-section-header">
            <h2>Our Wedding Offerings</h2>
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
              <h3>Ceremonies</h3>
              <p>
                Traditional, modern, cultural, or themed ceremonies tailored to
                your unique love story.
              </p>
            </div>

            <div className="hotelweddingworld-offering-card hotelweddingworld-floating">
              <div className="hotelweddingworld-offering-icon">
                <i className="fas fa-glass-cheers"></i>
              </div>
              <h3>Receptions</h3>
              <p>
                Elegant dining, lively dancing, and unforgettable memories in
                our stunning venues.
              </p>
            </div>

            <div className="hotelweddingworld-offering-card hotelweddingworld-floating">
              <div className="hotelweddingworld-offering-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <h3>Rehearsal Dinners</h3>
              <p>
                Private and beautifully curated events to prepare for your big
                day in style.
              </p>
            </div>

            <div className="hotelweddingworld-offering-card hotelweddingworld-floating">
              <div className="hotelweddingworld-offering-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Bridal Showers & Engagement Parties</h3>
              <p>
                Celebrate every milestone in style with customized, elegant
                gatherings.
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

      {/* Gallery Section */}
      <section className="hotelweddingworld-gallery-section" id="gallery">
        <div className="hotelweddingworld-container">
          <div className="hotelweddingworld-section-header">
            <h2>Our Wedding Gallery</h2>
            <p>
              Discover the beauty and elegance of weddings at Magnoliya Grand
            </p>
          </div>
          <div className="hotelweddingworld-masonry-gallery">
            {weddingImages.map((image) => (
              <div key={image.id} className="Masonry-item">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="hotelweddingworld-testimonials-section"
        id="testimonials"
      >
        <div className="hotelweddingworld-container">
          <div className="hotelweddingworld-section-header">
            <h2>What Our Couples Say</h2>
            <p>Hear from happy couples who celebrated their love with us</p>
          </div>
          <div className="hotelweddingworld-testimonials-grid">
            <div className="hotelweddingworld-testimonial-card">
              <div className="hotelweddingworld-testimonial-stars">★★★★★</div>
              <p>
                "Magnoliya Grand made our wedding day absolutely perfect! The
                staff was incredible, and the venue was stunning."
              </p>
              <div className="hotelweddingworld-testimonial-author">
                — Sarah & James
              </div>
            </div>
            <div className="hotelweddingworld-testimonial-card">
              <div className="hotelweddingworld-testimonial-stars">★★★★★</div>
              <p>
                "The attention to detail and personalized service at Magnoliya
                Grand exceeded our expectations. Truly magical!"
              </p>
              <div className="hotelweddingworld-testimonial-author">
                — Emma & Liam
              </div>
            </div>
            <div className="hotelweddingworld-testimonial-card">
              <div className="hotelweddingworld-testimonial-stars">★★★★★</div>
              <p>
                "From planning to execution, Magnoliya Grand delivered a
                flawless experience. Our guests are still raving!"
              </p>
              <div className="hotelweddingworld-testimonial-author">
                — Olivia & Noah
              </div>
            </div>
          </div>
          <div className="hotelweddingworld-testimonials-cta">
            <a
              href="https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062"
              className="hotelweddingworld-btn hotelweddingworld-btn-primary"
            >
              Schedule a Tour
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