import { useEffect, useState } from "react";
import "./EventVenueMain.css";

const venueData = {
  "grand-ballroom": {
    title: "Grand Ballroom",
    description:
      "Our flagship venue featuring elegant crystal chandeliers, marble floors, and capacity for up to 600 guests. Perfect for weddings, galas, and large corporate events.",
    image: "/eventvenu/mapimages/GrandBallroom.jpg", // Image for interactive map modal
    galleryImage: "/eventvenu/G1.jpg", // Different image for gallery
    pinClass: "pin-grand-ballroom",
    icon: "fas fa-crown",
  },
  "small-ballrooms": {
    title: "Small Ballrooms",
    description:
      "Intimate spaces perfect for smaller gatherings, meetings, and private celebrations. Each ballroom can be configured to your specific needs.",
    image: "/eventvenu/mapimages/smallballroom.jpg", // Image for interactive map modal
    galleryImage: "/eventvenu/G2'.jpg", // Different image for gallery
    pinClass: "pin-small-ballrooms",
    icon: "fas fa-chess-board",
  },
  "garden-area": {
    title: "Garden Area",
    description:
      "Beautiful outdoor space surrounded by lush landscaping and water features. Ideal for cocktail receptions, outdoor ceremonies, and garden parties.",
    image: "/eventvenu/mapimages/Garden.jpg", // Image for interactive map modal
    galleryImage: "/eventvenu/G3.jpg", // Different image for gallery
    pinClass: "pin-garden-area",
    icon: "fas fa-leaf",
  },
  "rooftop-terrace": {
    title: "Rooftop Terrace",
    description:
      "Stunning rooftop venue with panoramic city views and modern amenities. Perfect for sunset cocktails and sophisticated evening events.",
    image: "/eventvenu/mapimages/terraserooftop.jpg", // Image for interactive map modal
    galleryImage: "/eventvenu/G4.jpg", // Different image for gallery
    pinClass: "pin-rooftop-terrace",
    icon: "fas fa-umbrella-beach",
  },
  "water-view": {
    title: "Water View Lounge",
    description:
      "Sophisticated lounge space with floor-to-ceiling windows overlooking the waterfront. Ideal for corporate events and elegant receptions.",
    image: "/eventvenu/mapimages/laung.jpg", // Image for interactive map modal
    galleryImage: "/eventvenu/G5.jpg", // Different image for gallery
    pinClass: "pin-water-view",
    icon: "fas fa-water",
  },
  "event-setup": {
    title: "Event Setup Services",
    description:
      "Our professional event setup team will transform any of our venues to match your vision. From elegant wedding receptions to high-tech corporate conferences.",
    image: "/eventvenu/mapimages/eventsetupservie.jpg", // Image for interactive map modal
    galleryImage: "/eventvenu/G6.jpg", // Different image for gallery
    pinClass: "pin-event-setup",
    icon: "fas fa-tools",
  },
};

const layoutDetails = {
  banquet: {
    title: "Banquet Style",
    icon: "fas fa-utensils",
    capacity: "1000",
    image: "/eventvenu/img-4.jpg",
    description:
      "Perfect for weddings, galas, and formal dinners with round tables seating 8-10 guests each",
    details: [
      { title: "Table Size", value: '72" round tables' },
      { title: "Seating", value: "8-10 guests per table" },
      { title: "Space Required", value: "12-15 sq ft per guest" },
      { title: "Features", value: "Dance floor, Head table, Buffet stations" },
      {
        title: "Best For",
        value: "Wedding receptions, Gala dinners, Award banquets",
      },
    ],
  },
  theater: {
    title: "Theater Style",
    icon: "fas fa-theater-masks",
    capacity: "1200",
    image: "/eventvenu/banner-8.jpg",
    description:
      "Ideal for presentations, conferences, and performances with forward-facing seating",
    details: [
      { title: "Chair Spacing", value: '18-24" between rows' },
      { title: "Aisle Width", value: '36-48" main aisles' },
      { title: "Space Required", value: "6-8 sq ft per guest" },
      { title: "Features", value: "Stage, A/V equipment, Lighting" },
      { title: "Best For", value: "Conferences, Lectures, Performances" },
    ],
  },
};
const EventVenueMain = () => {
  const [activeVenue, setActiveVenue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [activeLayout, setActiveLayout] = useState(null);
  const [isLayoutModalOpen, setIsLayoutModalOpen] = useState(false);

  const handleVenueClick = (venueId) => {
    setActiveVenue(venueId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCtaClick = () => {
    document.getElementById("neweventvenue-venues").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleView360 = (venueId) => {
    window.open(
      "https://www.gotyoulooking.com/1hiltongardenmanassasva/mht.html",
      "_blank"
    );
  };

  const handleContactClick = () => {
    window.location.href = "/ContactUs";
  };

  const handleBookingClick = () => {
    window.location.href =
      "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062";
  };

  const openGalleryModal = (image) => {
    setSelectedImage(image);
    setIsGalleryModalOpen(true);
  };

  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false);
  };

  const openLayoutModal = (layoutId) => {
    setActiveLayout(layoutId);
    setIsLayoutModalOpen(true);
  };

  const closeLayoutModal = () => {
    setIsLayoutModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const layoutCards = document.querySelectorAll(
        ".neweventvenue-layout-card"
      );
      const gallery = document.querySelector(".neweventvenue-gallery-iframe");
      layoutCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          card.classList.add("animate");
        }
      });
      if (gallery) {
        const galleryRect = gallery.getBoundingClientRect();
        if (galleryRect.top <= window.innerHeight * 0.8) {
          gallery.classList.add("animate");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="neweventvenue-container">
      {/* Photo Gallery */}
      <section
        className="neweventvenue-gallery-section container"
        id="neweventvenue-gallery"
      >
        <h2 className="neweventvenue-section-title">
          Exceptional Event Venues
        </h2>
        <p className="neweventvenue-section-subtitle">
          Host unforgettable events in our stunning spaces at Magnoliya Grand
          Manor
        </p>
        <div className="neweventvenue-gallery-grid">
          {Object.keys(venueData).map((venueId) => {
            const venue = venueData[venueId];
            return (
              <div
                key={venueId}
                className="neweventvenue-gallery-item"
                onClick={() => openGalleryModal(venue.galleryImage)}
              >
                <img src={venue.galleryImage} alt={venue.title} />
                <div className="neweventvenue-gallery-overlay">
                  <div className="neweventvenue-gallery-text">
                    {venue.title}
                  </div>
                  <button
                    className="neweventvenue-gallery-view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleView360(venueId);
                    }}
                  >
                    <i className="fas fa-vr-cardboard"></i> 360° View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Content */}
      <main className="neweventvenue-main-content">
        {/* Interactive Venue Map */}
        <section
          className="neweventvenue-venue-map-section container"
          id="neweventvenue-venues"
        >
          <h2 className="neweventvenue-section-title">Interactive Venue Map</h2>
          <p className="neweventvenue-section-subtitle">
            Click on any venue to explore details and capacity options
          </p>
          <div className="neweventvenue-venue-map">
            <div className="neweventvenue-map-container">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="neweventvenue-map-video"
              >
                <source src="/Hero/1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {Object.keys(venueData).map((venueId) => {
                const venue = venueData[venueId];
                return (
                  <div
                    key={venueId}
                    className={`neweventvenue-venue-pin ${venue.pinClass} ${
                      activeVenue === venueId ? "neweventvenue-active" : ""
                    }`}
                    onClick={() => handleVenueClick(venueId)}
                    data-name={venue.title}
                  >
                    <i className={venue.icon}></i>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Booking Button Section */}
        <section className="neweventvenue-booking-section container">
          <button
            className="neweventvenue-booking-button"
            onClick={handleBookingClick}
          >
            <i className="fas fa-calendar-alt"></i> Book Your Event Now
          </button>
        </section>

        {/* Capacity Charts */}
        <section
          className="neweventvenue-capacity-section container"
          id="neweventvenue-capacity"
        >
          <h2 className="neweventvenue-section-title">
            Venue Capacity Summary
          </h2>
          <p className="neweventvenue-section-subtitle">
            Flexible arrangements for every type of event
          </p>
          <div className="neweventvenue-layout-options">
            {Object.keys(layoutDetails).map((layoutId) => {
              const layout = layoutDetails[layoutId];
              return (
                <div
                  key={layoutId}
                  className="neweventvenue-layout-card"
                  onClick={() => openLayoutModal(layoutId)}
                >
                  <div className="neweventvenue-layout-header">
                    <div className="neweventvenue-layout-icon">
                      <i className={layout.icon}></i>
                    </div>
                    <h3 className="neweventvenue-layout-title">
                      {layout.title}
                    </h3>
                  </div>
                  <div className="neweventvenue-layout-capacity">
                    {layout.capacity}
                  </div>
                  <p className="neweventvenue-layout-description">
                    {layout.description}
                  </p>
                  <button
                    className="neweventvenue-layout-details-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLayoutModal(layoutId);
                    }}
                  >
                    View Details
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section
        className="neweventvenue-contact-section"
        id="neweventvenue-contact"
      >
        <div className="neweventvenue-contact-content">
          <h2 className="neweventvenue-contact-title">
            Ready to Plan Your Event?
          </h2>
          <p className="neweventvenue-contact-subtitle">
            Let our expert team help you create an unforgettable experience
          </p>
          <div className="neweventvenue-contact-buttons">
            <button
              className="neweventvenue-contact-button"
              onClick={handleBookingClick}
            >
              <i className="fas fa-calendar-check"></i> Book Now
            </button>
            <button
              className="neweventvenue-contact-button neweventvenue-secondary"
              onClick={handleContactClick}
            >
              <i className="fas fa-phone-alt"></i> Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Simplified Venue Details Modal - Image Only */}
      {isModalOpen && activeVenue && (
        <div className="neweventvenue-modal" id="neweventvenue-modal">
          <div className="neweventvenue-modal-content">
            <span className="neweventvenue-close-modal" onClick={closeModal}>
              &times;
            </span>
            <div className="neweventvenue-modal-image">
              <img
                src={venueData[activeVenue].image}
                alt={venueData[activeVenue].title}
              />
            </div>
            <h2 className="neweventvenue-modal-title">
              {venueData[activeVenue].title}
            </h2>
          </div>
        </div>
      )}

      {/* Gallery Modal */}
      {isGalleryModalOpen && (
        <div className="neweventvenue-gallery-modal">
          <div className="neweventvenue-gallery-modal-content">
            <span
              className="neweventvenue-close-modal"
              onClick={closeGalleryModal}
            >
              &times;
            </span>
            <img src={selectedImage} alt="Venue" />
            <div className="neweventvenue-gallery-modal-actions">
              <button
                className="neweventvenue-gallery-modal-button"
                onClick={() => {
                  closeGalleryModal();
                  handleView360(activeVenue);
                }}
              >
                <i className="fas fa-vr-cardboard"></i> View 360° Tour
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Layout Details Modal */}
      {isLayoutModalOpen && activeLayout && (
        <div className="neweventvenue-layout-modal">
          <div className="neweventvenue-layout-modal-content">
            <span
              className="neweventvenue-close-modal"
              onClick={closeLayoutModal}
            >
              &times;
            </span>
            <h2 className="neweventvenue-layout-modal-title">
              {layoutDetails[activeLayout].title} Layout
            </h2>
            <div className="neweventvenue-layout-modal-image">
              <img
                src={layoutDetails[activeLayout].image}
                alt={layoutDetails[activeLayout].title}
              />
            </div>
            <p className="neweventvenue-layout-modal-description">
              {layoutDetails[activeLayout].description}
            </p>
            <div className="neweventvenue-layout-modal-details">
              <div className="neweventvenue-layout-modal-section">
                <h3>table layout</h3>
                <table className="neweventvenue-layout-table">
                  <thead>
                    <tr>
                      <th>layout</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {layoutDetails[activeLayout].details.map(
                      (detail, index) => (
                        <tr key={index}>
                          <td>{detail.title}</td>
                          <td>{detail.value}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="neweventvenue-layout-modal-actions">
              <button
                className="neweventvenue-layout-modal-button neweventvenue-primary"
                onClick={handleBookingClick}
              >
                <i className="fas fa-calendar-alt"></i> Book Now
              </button>
              <button
                className="neweventvenue-layout-modal-button neweventvenue-secondary"
                onClick={closeLayoutModal}
              >
                <i className="fas fa-times"></i> Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventVenueMain;
