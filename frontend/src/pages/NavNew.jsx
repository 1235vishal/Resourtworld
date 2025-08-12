import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/Navnew.css";

const NewNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownMenuRef = useRef(null);

  const handleLogoClick = () => {
    window.open("/");
  };

  const handleQuoteClick = () => {
    window.open(
      "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
      "_blank"
    );
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Handle dropdown positioning for fixed positioning approach
  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current && dropdownMenuRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const dropdown = dropdownMenuRef.current;

      dropdown.style.top = `${rect.bottom}px`;
      dropdown.style.left = `${rect.left}px`;
    }
  }, [isDropdownOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="newnav-header-parent">
      {/* Top Section */}
      <div className="newnav-top-section">
        <div className="newnav-container">
          <div className="newnav-top-left">
            <div className="newnav-address">
              <h4 className="newnav-address-text">
                7001 Infantry Ridge Rd, Manassas, VA 20109
              </h4>
            </div>
            <div className="newnav-divider"></div>
            <div className="newnav-office-hours">
              <span className="newnav-office-label">Office Hours:</span>
              <span className="newnav-office-time">9:00 - 5:00 pm</span>
            </div>
          </div>

          <div className="newnav-top-center">
            <img
              className="newnav-logo"
              alt="Logo"
              src="./logobest.png"
              onClick={handleLogoClick}
            />
          </div>

          <div className="newnav-top-right">
            <div className="newnav-support-section">
              <span className="newnav-support-label">Contact Us</span>
              <span className="newnav-support-number">+1 (703) 843-5543</span>
            </div>
            <div className="newnav-divider"></div>
            {/* <div className="newnav-quote-section">
              <button className="newnav-quote-btn" onClick={handleQuoteClick}>
                REQUEST A QUOTE
              </button>
            </div> */}
            <div className="newnav-social-icons">
              <a
                href="https://www.facebook.com/magnoliyagrand/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://x.com/MagnoliyaGrand"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/magnoliyagrand/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/magnoliya-grand-7727b92ab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.tiktok.com/@magnoliyagrand?_t=ZT-8tbtueOhSP5&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCNG6YVfx2i9b5O98vgE7rFw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="newnav-mobile-toggle">
            <button
              className={`newnav-hamburger ${isSidebarOpen ? "active" : ""}`}
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Section - Desktop */}
      <div className="newnav-nav-section">
        <div className="newnav-nav-top-line">
          <img className="newnav-top-line-image" alt="" src="./newnav.png" />
        </div>
        <div className="newnav-nav-container">
          <div className="newnav-nav-left">
            <nav className="newnav-navigation">
              <Link to="/" className="newnav-nav-item">
                HOME
              </Link>
              <Link to="/rooms" className="newnav-nav-item">
                Rooms & Suites
              </Link>
              <Link to="/HotelDining" className="newnav-nav-item">
                Dining
              </Link>
              <Link to="/events" className="newnav-nav-item">
                Event Venues
              </Link>
              <Link to="/Wedding" className="newnav-nav-item">
                Weddings
              </Link>
            </nav>
          </div>

          <div className="newnav-nav-center">
            <div className="newnav-center-divider">
              <img className="newnav-center-icon" alt="" src="Vector.svg" />
            </div>
          </div>

          <div className="newnav-nav-right">
            <nav className="newnav-navigation">
              <Link to="/corporateevents" className="newnav-nav-item">
                Corporate & Social Events
              </Link>
              <Link to="/EventServices" className="newnav-nav-item">
                Event Services
              </Link>
              <Link to="/Gallerypage" className="newnav-nav-item">
                Gallery
              </Link>
              <Link to="/Aboutus" className="newnav-nav-item">
                About Us
              </Link>
              <Link to="/ContactUs" className="newnav-nav-item">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`newnav-sidebar-overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={closeSidebar}
      ></div>

      {/* Mobile Sidebar */}
      <div className={`newnav-sidebar ${isSidebarOpen ? "active" : ""}`}>
        <div className="newnav-sidebar-header">
          <img
            className="newnav-sidebar-logo"
            alt="Logo"
            src="./logobest.png"
            onClick={handleLogoClick}
          />
        </div>

        <div className="newnav-sidebar-content">
          <nav className="newnav-sidebar-nav">
            <Link to="/" className="newnav-sidebar-link" onClick={closeSidebar}>
              HOME
            </Link>
            <Link
              to="/rooms"
              className="newnav-sidebar-link"
              onClick={closeSidebar}
            >
              Rooms & Suites
            </Link>
            <Link
              to="/HotelDining"
              className="newnav-sidebar-link"
              onClick={closeSidebar}
            >
              Dining
            </Link>
            <Link
              to="/events"
              className="newnav-sidebar-link"
              onClick={closeSidebar}
            >
              Event Venues
            </Link>
            <Link
              to="/Wedding"
              className="newnav-sidebar-link"
              onClick={closeSidebar}
            >
              Weddings
            </Link>
            <Link
              to="/corporateevents"
              className="newnav-sidebar-link"
              onClick={closeSidebar}
            >
              Corporate & Social Events
            </Link>
            <Link
              to="/EventServices"
              className="newnav-sidebar-link"
              onClick={closeSidebar}
            >
              Event Services
            </Link>
            <Link
              to="/Gallerypage"
              className="newnav-sidebar-link"
              onClick={closeSidebar}
            >
              Gallery
            </Link>
            <Link
              to="/Aboutus"
              className="newnav-sidebar-link"
              onClick={closeSidebar}
            >
              About Us
            </Link>
            <Link
              to="/ContactUs"
              className="newnav-sidebar-link"
              onClick={closeSidebar}
            >
              Contact
            </Link>
          </nav>

          {/* <div className="newnav-sidebar-quote">
            <button
              className="newnav-sidebar-quote-btn"
              onClick={handleQuoteClick}
            >
              REQUEST A QUOTE
            </button>
          </div> */}

          <div className="newnav-sidebar-info">
            <div className="newnav-sidebar-address">
              <span className="newnav-sidebar-label">Address:</span>
              <span className="newnav-sidebar-text">
                7001 Infantry Ridge Rd, Manassas, VA 20109
              </span>
            </div>
            <div className="newnav-sidebar-hours">
              <span className="newnav-sidebar-label">Office Hours:</span>
              <span className="newnav-sidebar-text">9:00 - 5:00 pm</span>
            </div>
            <div className="newnav-sidebar-support">
              <span className="newnav-sidebar-label">Contact Us:</span>
              <span className="newnav-sidebar-phone">+1 (703) 843-5543</span>
            </div>
          </div>

          <div className="newnav-sidebar-social-icons">
            <a
              href="https://www.facebook.com/magnoliyagrand/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://x.com/MagnoliyaGrand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/magnoliyagrand/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/magnoliya-grand-7727b92ab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.tiktok.com/@magnoliyagrand?_t=ZT-8tbtueOhSP5&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCNG6YVfx2i9b5O98vgE7rFw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNav;
