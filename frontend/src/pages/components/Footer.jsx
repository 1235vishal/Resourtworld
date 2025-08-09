// import {
//   ChevronUp,
//   Facebook,
//   Instagram,
//   MapPin,
//   Twitter,
//   Youtube,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import "./footer.css";

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <footer className="hotelfooter">
//       <div className="hotelfooter-container">
//         {/* Main Footer Content */}
//         <div className="hotelfooter-content">
//           {/* Left Section - Contact & Brand */}
//           <div className="hotelfooter-left">
//             <div className="hotelfooter-contact-section">
//               <h3 className="hotelfooter-contact-title">
//                 Call us for any help
//               </h3>
//               <a href="tel:+17038435553" className="hotelfooter-phone-number">
//                 +1 (703) 843-553
//               </a>
//             </div>

//             <div className="hotelfooter-email-section">
//               <h3 className="hotelfooter-email-title">Email us for support</h3>
//               <a
//                 href="mailto:sales@magnoliyagrand.com"
//                 className="hotelfooter-email-address"
//               >
//                 sales@magnoliyagrand.com
//               </a>
//             </div>

//             {/* Brand Section */}
//             <div className="hotelfooter-brand-section">
//               <div className="hotelfooter-logo-container">
//                 <img
//                   src="/logobest.png"
//                   alt="Magnoliya Grand Logo"
//                   className="hotelfooter-logo-image"
//                 />
//               </div>
//               <p className="hotelfooter-brand-description">
//                 Apparently we had reached a great height in the atmo-sphere, for
//                 the sky was a dead black, and the stars had ceased to twinkle.
//               </p>
//             </div>
//           </div>

//           {/* Center Section - Navigation */}
//           <div className="hotelfooter-center">
//             <div className="hotelfooter-links-grid">
//               <div className="hotelfooter-links-column">
//                 <h3 className="hotelfooter-section-title">Explore</h3>
//                 <nav className="hotelfooter-nav-menu">
//                   <Link to="/Aboutus" className="hotelfooter-nav-link">
//                     About Us
//                   </Link>
//                   <Link to="/services" className="hotelfooter-nav-link">
//                     Services
//                   </Link>
//                   <Link to="/Gallerypage" className="hotelfooter-nav-link">
//                     Gallery
//                   </Link>
//                   <Link to="/blog" className="hotelfooter-nav-link">
//                     Blog
//                   </Link>
//                   <Link to="/ContactUs" className="hotelfooter-nav-link">
//                     Contact
//                   </Link>
//                 </nav>
//               </div>

//               <div className="hotelfooter-links-column">
//                 <h3 className="hotelfooter-section-title">Quick Links</h3>
//                 <nav className="hotelfooter-nav-menu">
//                   <Link to="/faq" className="hotelfooter-nav-link">
//                     FAQ
//                   </Link>
//                   <Link to="/terms" className="hotelfooter-nav-link">
//                     Terms & Conditions
//                   </Link>
//                   <Link to="/privacy" className="hotelfooter-nav-link">
//                     Privacy Policy
//                   </Link>
//                   <Link to="/accessibility" className="hotelfooter-nav-link">
//                     Accessibility
//                   </Link>
//                   <Link to="/sitemap" className="hotelfooter-nav-link">
//                     Site Map
//                   </Link>
//                 </nav>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Newsletter */}
//           <div className="hotelfooter-right">
//             <h3 className="hotelfooter-section-title">Join Our Mailing List</h3>
//             <p className="hotelfooter-newsletter-description">
//               Receive invitations, updates and bonuses for purchasing
//             </p>
//             <div className="hotelfooter-newsletter-form">
//               <input
//                 type="email"
//                 placeholder="Enter Email..."
//                 className="hotelfooter-email-input"
//               />
//               <button type="submit" className="hotelfooter-subscribe-btn">
//                 SUBSCRIBE
//               </button>
//             </div>

//             {/* Review Badges */}
//             <div className="hotelfooter-review-badges">
//               <a
//                 href="https://www.tripadvisor.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hotelfooter-review-badge"
//               >
//                 <img
//                   src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
//                   alt="TripAdvisor"
//                   className="hotelfooter-review-img"
//                 />
//               </a>
//               <a
//                 href="https://www.google.com/search"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hotelfooter-review-badge"
//               >
//                 <img
//                   src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png"
//                   alt="Google Reviews"
//                   className="hotelfooter-review-img"
//                 />
//               </a>
//             </div>

//             {/* Social Media Icons */}
//             <div className="hotelfooter-social-icons">
//               <a
//                 href="https://www.facebook.com/magnoliyagrand/"
//                 className="hotelfooter-social-icon"
//                 aria-label="Facebook"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Facebook size={16} />
//               </a>
//               <a
//                 href="https://x.com/MagnoliyaGrand"
//                 className="hotelfooter-social-icon"
//                 aria-label="Twitter"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Twitter size={16} />
//               </a>
//               <a
//                 href="https://www.youtube.com/channel/UCNG6YVfx2i9b5O98vgE7rFw"
//                 className="hotelfooter-social-icon"
//                 aria-label="YouTube"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Youtube size={16} />
//               </a>
//               <a
//                 href="https://www.instagram.com/magnoliyagrand/"
//                 className="hotelfooter-social-icon"
//                 aria-label="Instagram"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Instagram size={16} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/magnoliya-grand-7727b92ab"
//                 className="hotelfooter-social-icon"
//                 aria-label="LinkedIn"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <MapPin size={16} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="hotelfooter-bottom">
//           <div className="hotelfooter-bottom-content">
//             <div className="hotelfooter-bottom-left">
//               <div className="hotelfooter-legal-links">
//                 <Link to="/privacy" className="hotelfooter-legal-link">
//                   Privacy Policy
//                 </Link>
//                 <span className="hotelfooter-legal-separator">|</span>
//                 <Link to="/accessibility" className="hotelfooter-legal-link">
//                   Accessibility Statement
//                 </Link>
//                 <span className="hotelfooter-legal-separator">|</span>
//                 <Link to="/terms" className="hotelfooter-legal-link">
//                   Terms of Service
//                 </Link>
//               </div>
//               <p className="hotelfooter-copyright">
//                 Copyright © 2025. All Rights Reserved.
//               </p>
//             </div>

//             <div className="hotelfooter-bottom-right">
//               {/* <p className="hotelfooter-crafted-by">
//                 Carefully crafted by <strong>Magnoliya Grand</strong>
//               </p> */}
//               <button
//                 onClick={scrollToTop}
//                 className="hotelfooter-back-to-top"
//                 aria-label="Back to top"
//               >
//                 <span>BACK TO TOP</span>
//                 <ChevronUp size={16} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import {
  ChevronUp,
  Facebook,
  Instagram,
  MapPin,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="hotelfooter">
      <div className="hotelfooter-container">
        {/* Main Footer Content */}
        <div className="hotelfooter-content">
          {/* Left Section - Contact & Brand */}
          <div className="hotelfooter-left">
            <div className="hotelfooter-contact-section">
              <h3 className="hotelfooter-contact-title">
                Call us for any help
              </h3>
              <a href="tel:+17038435553" className="hotelfooter-phone-number">
                +1 (703) 843-553
              </a>
            </div>

            <div className="hotelfooter-email-section">
              <h3 className="hotelfooter-email-title">Email us for support</h3>
              <a
                href="mailto:sales@magnoliyagrand.com"
                className="hotelfooter-email-address"
              >
                sales@magnoliyagrand.com
              </a>
            </div>

            {/* Brand Section */}
            <div className="hotelfooter-brand-section">
              <div className="hotelfooter-logo-container">
                <img
                  src="/logobest.png"
                  alt="Magnoliya Grand Logo"
                  className="hotelfooter-logo-image"
                />
              </div>
              <p className="hotelfooter-brand-description">
                Apparently we had reached a great height in the atmo-sphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
              </p>
            </div>
          </div>

          {/* Center Section - Navigation */}
          <div className="hotelfooter-center">
            <div className="hotelfooter-links-grid">
              <div className="hotelfooter-links-column">
                <h3 className="hotelfooter-section-title">Explore</h3>
                <nav className="hotelfooter-nav-menu">
                  <Link to="/" className="hotelfooter-nav-link">
                    Home
                  </Link>
                  <Link to="/rooms" className="hotelfooter-nav-link">
                    Rooms & Suites
                  </Link>
                  <Link to="/HotelDining" className="hotelfooter-nav-link">
                    Dining
                  </Link>
                  <Link to="/events" className="hotelfooter-nav-link">
                    Event Venues
                  </Link>
                  <Link to="/Wedding" className="hotelfooter-nav-link">
                    Weddings
                  </Link>
                </nav>
              </div>

              <div className="hotelfooter-links-column">
                <h3 className="hotelfooter-section-title">More</h3>
                <nav className="hotelfooter-nav-menu">
                  <Link to="/corporateevents" className="hotelfooter-nav-link">
                    Corporate & Social Events
                  </Link>
                  <Link to="/Gallerypage" className="hotelfooter-nav-link">
                    Gallery
                  </Link>
                  <Link to="/Aboutus" className="hotelfooter-nav-link">
                    About Us
                  </Link>
                  <Link to="/ContactUs" className="hotelfooter-nav-link">
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </div>

          {/* Right Section - Newsletter */}
          <div className="hotelfooter-right">
            <h3 className="hotelfooter-section-title">Join Our Mailing List</h3>
            <p className="hotelfooter-newsletter-description">
              Receive invitations, updates and bonuses for purchasing
            </p>
            <div className="hotelfooter-newsletter-form">
              <input
                type="email"
                placeholder="Enter Email..."
                className="hotelfooter-email-input"
              />
              <button type="submit" className="hotelfooter-subscribe-btn">
                SUBSCRIBE
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="hotelfooter-social-icons">
              <a
                href="https://www.facebook.com/magnoliyagrand/"
                className="hotelfooter-social-icon"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://x.com/MagnoliyaGrand"
                className="hotelfooter-social-icon"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCNG6YVfx2i9b5O98vgE7rFw"
                className="hotelfooter-social-icon"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://www.instagram.com/magnoliyagrand/"
                className="hotelfooter-social-icon"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/magnoliya-grand-7727b92ab"
                className="hotelfooter-social-icon"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="hotelfooter-bottom">
          <div className="hotelfooter-bottom-content">
            <div className="hotelfooter-bottom-left">
              {/* <div className="hotelfooter-legal-links">
                <Link to="/privacy" className="hotelfooter-legal-link">
                  Privacy Policy
                </Link>
                <span className="hotelfooter-legal-separator">|</span>
                <Link to="/accessibility" className="hotelfooter-legal-link">
                  Accessibility Statement
                </Link>
                <span className="hotelfooter-legal-separator">|</span>
                <Link to="/terms" className="hotelfooter-legal-link">
                  Terms of Service
                </Link>
              </div> */}
              <p className="hotelfooter-copyright">
                Copyright © 2025. All Rights Reserved.
              </p>
            </div>

            <div className="hotelfooter-bottom-right">
              <button
                onClick={scrollToTop}
                className="hotelfooter-back-to-top"
                aria-label="Back to top"
              >
                <span>BACK TO TOP</span>
                <ChevronUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
