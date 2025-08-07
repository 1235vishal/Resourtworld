// import { useState } from "react";
// import "./EventVenueMain.css";

// const venueData = {
//   "grand-ballroom": {
//     title: "Grand Ballroom",
//     description:
//       "Our flagship venue featuring elegant crystal chandeliers, marble floors, and capacity for up to 600 guests. Perfect for weddings, galas, and large corporate events. The Grand Ballroom features a spacious dance floor, built-in stage, and state-of-the-art lighting and sound systems.",
//     image: "/eventvenu/GrandBallroom.jpg",
//     pinClass: "pin-grand-ballroom",
//     icon: "fas fa-crown",
//     details: [
//       { title: "Capacity", value: "400-600 guests" },
//       { title: "Size", value: "5,000 sq ft" },
//       { title: "Ceiling Height", value: "20 feet" },
//       {
//         title: "Features",
//         value:
//           "Built-in A/V system, Dance floor, Stage, Crystal chandeliers, Marble floors",
//       },
//       {
//         title: "Ideal For",
//         value: "Weddings, Galas, Corporate events, Award ceremonies",
//       },
//     ],
//   },
//   "small-ballrooms": {
//     title: "Small Ballrooms",
//     description:
//       "Intimate spaces perfect for smaller gatherings, meetings, and private celebrations. Each ballroom can be configured to your specific needs with flexible layouts and modern amenities. Our small ballrooms offer privacy and elegance for your special events.",
//     image: "/eventvenu/Small ballrooms’.jpg",
//     pinClass: "pin-small-ballrooms",
//     icon: "fas fa-chess-board",
//     details: [
//       { title: "Capacity", value: "50-150 guests" },
//       { title: "Size", value: "1,200 sq ft each" },
//       { title: "Ceiling Height", value: "12 feet" },
//       {
//         title: "Features",
//         value:
//           "Flexible layouts, A/V equipment, Natural light, Private entrances",
//       },
//       {
//         title: "Ideal For",
//         value: "Meetings, Private parties, Small weddings, Workshops",
//       },
//     ],
//   },
//   "garden-area": {
//     title: "Garden Area",
//     description:
//       "Beautiful outdoor space surrounded by lush landscaping and water features. Ideal for cocktail receptions, outdoor ceremonies, and garden parties. Our garden area provides a natural, romantic setting with manicured lawns and floral displays.",
//     image: "/eventvenu/Garden Area.jpg",
//     pinClass: "pin-garden-area",
//     icon: "fas fa-leaf",
//     details: [
//       { title: "Capacity", value: "100-300 guests" },
//       { title: "Size", value: "3,000 sq ft" },
//       { title: "Setting", value: "Outdoor garden with water features" },
//       {
//         title: "Features",
//         value:
//           "Weather protection options, Landscape lighting, Built-in sound system",
//       },
//       {
//         title: "Ideal For",
//         value: "Outdoor weddings, Cocktail receptions, Garden parties",
//       },
//     ],
//   },
//   "rooftop-terrace": {
//     title: "Rooftop Terrace",
//     description:
//       "Stunning rooftop venue with panoramic city views and modern amenities. Perfect for sunset cocktails and sophisticated evening events. The rooftop terrace features comfortable lounge seating, a full-service bar, and breathtaking views.",
//     image: "/eventvenu/Rooftop Terrace.jpg",
//     pinClass: "pin-rooftop-terrace",
//     icon: "fas fa-umbrella-beach",
//     details: [
//       { title: "Capacity", value: "150-400 guests" },
//       { title: "Size", value: "2,500 sq ft" },
//       { title: "Views", value: "Panoramic city skyline" },
//       {
//         title: "Features",
//         value:
//           "Full-service bar, Lounge seating, Retractable roof, Heating lamps",
//       },
//       {
//         title: "Ideal For",
//         value: "Corporate events, Cocktail parties, Social gatherings",
//       },
//     ],
//   },
//   "water-view": {
//     title: "Water View Lounge",
//     description:
//       "Sophisticated lounge space with floor-to-ceiling windows overlooking the waterfront. Ideal for corporate events and elegant receptions. The Water View Lounge offers a contemporary setting with natural light and stunning water vistas.",
//     image: "/eventvenu/Waterview Lounge.jpg",
//     pinClass: "pin-water-view",
//     icon: "fas fa-water",
//     details: [
//       { title: "Capacity", value: "75-200 guests" },
//       { title: "Size", value: "1,800 sq ft" },
//       { title: "Views", value: "Waterfront panorama" },
//       {
//         title: "Features",
//         value:
//           "Floor-to-ceiling windows, Modern furnishings, Private bar, A/V capabilities",
//       },
//       {
//         title: "Ideal For",
//         value: "Corporate events, Product launches, Intimate weddings",
//       },
//     ],
//   },
//   "event-setup": {
//     title: "Event Setup Services",
//     description:
//       "Our professional event setup team will transform any of our venues to match your vision. From elegant wedding receptions to high-tech corporate conferences, we handle all the details to create the perfect atmosphere for your event.",
//     image: "/eventvenu/Event Services.jpg",
//     pinClass: "pin-event-setup",
//     icon: "fas fa-tools",
//     details: [
//       { title: "Services", value: "Full event design and setup" },
//       { title: "Setup Time", value: "2-6 hours depending on complexity" },
//       { title: "Team Size", value: "5-15 experienced staff members" },
//       {
//         title: "Capabilities",
//         value:
//           "Stage setup, Lighting design, Table arrangements, Floral arrangements, Theming",
//       },
//       {
//         title: "Equipment Available",
//         value:
//           "Tables, Chairs, Linens, Centerpieces, Lighting, Sound equipment, Stages",
//       },
//     ],
//   },
// };

// const layoutDetails = {
//   banquet: {
//     title: "Banquet Style",
//     icon: "fas fa-utensils",
//     capacity: "1000 ",
//     image: "/eventvenu/img-4.jpg",
//     description:
//       "Perfect for weddings, galas, and formal dinners with round tables seating 8-10 guests each",
//     details: [
//       { title: "Table Size", value: '72" round tables' },
//       { title: "Seating", value: "8-10 guests per table" },
//       { title: "Space Required", value: "12-15 sq ft per guest" },
//       { title: "Features", value: "Dance floor, Head table, Buffet stations" },
//       {
//         title: "Best For",
//         value: "Wedding receptions, Gala dinners, Award banquets",
//       },
//     ],
//     pros: [
//       "Elegant and formal atmosphere",
//       "Encourages social interaction",
//       "Allows for dancing and entertainment",
//       "Easy to serve meals",
//     ],
//     cons: [
//       "Requires more space",
//       "Higher furniture costs",
//       "Less flexible for presentations",
//     ],
//   },
//   theater: {
//     title: "Theater Style",
//     icon: "fas fa-theater-masks",
//     capacity: "1200  Specifications Table ",
//     image: "/eventvenu/banner-8.jpg",
//     description:
//       "Ideal for presentations, conferences, and performances with forward-facing seating",
//     details: [
//       { title: "Chair Spacing", value: '18-24" between rows' },
//       { title: "Aisle Width", value: '36-48" main aisles' },
//       { title: "Space Required", value: "6-8 sq ft per guest" },
//       { title: "Features", value: "Stage, A/V equipment, Lighting" },
//       { title: "Best For", value: "Conferences, Lectures, Performances" },
//     ],
//     pros: [
//       "Maximizes seating capacity",
//       "Clear view of presentation",
//       "Easy to set up and rearrange",
//       "Cost-effective",
//     ],
//     cons: [
//       "Limited table space",
//       "Less interaction between attendees",
//       "No dining options",
//     ],
//   },
//   //   classroom: {
//   //     title: "Classroom Style",
//   //     icon: "fas fa-chalkboard-teacher",
//   //     capacity: "100-300 guests",
//   //     image: "/eventvenu/img-4.jpg",
//   //     description:
//   //       "Great for training sessions, workshops, and educational events with tables and chairs",
//   //     details: [
//   //       { title: "Table Size", value: "6' or 8' rectangular tables" },
//   //       { title: "Seating", value: "2-3 guests per table side" },
//   //       { title: "Space Required", value: "12-14 sq ft per guest" },
//   //       { title: "Features", value: "Writing surface, Power outlets, A/V setup" },
//   //       { title: "Best For", value: "Workshops, Training sessions, Seminars" },
//   //     ],
//   //     pros: [
//   //       "Provides work surface",
//   //       "Good for note-taking",
//   //       "Balances presentation and interaction",
//   //       "Professional setting",
//   //     ],
//   //     cons: [
//   //       "Requires more space than theater",
//   //       "Higher furniture costs",
//   //       "Limited to smaller groups",
//   //     ],
//   //   },
//   //   venueSummary: {
//   //     title: "Venue Capacity Summary",
//   //     icon: "fas fa-map-marked-alt",
//   //     capacity: "All Venue Spaces",
//   //     image: "/eventvenu/layout.jpg", // Optional placeholder image
//   //     description:
//   //       "Summary of all venue spaces with square footage and capacity.",
//   //     details: [
//   //       {
//   //         title: "Magna Ball Room",
//   //         value: "14,500 sqft | Theater: 2000 | Banquet: 1200",
//   //       },
//   //       {
//   //         title: "Yoshino Ball Room (dividable)",
//   //         value: "7,250 sqft | Theater: 1000 | Banquet: 600",
//   //       },
//   //       {
//   //         title: "Denali Diamond Ball Room (dividable)",
//   //         value: "7,250 sqft | Theater: 1000 | Banquet: 600",
//   //       },
//   //       {
//   //         title: "Kwanzan Hall (dividable)",
//   //         value: "2,000 sqft | Theater: 260 | Banquet: 180",
//   //       },
//   //       {
//   //         title: "Liberty Hall",
//   //         value: "1,800 sqft | Theater: 175 | Banquet: 125",
//   //       },
//   //       {
//   //         title: "Front Pre-function Area",
//   //         value: "3,000 sqft | Theater: — | Banquet: —",
//   //       },
//   //       {
//   //         title: "Back Pre-function Area",
//   //         value: "2,000 sqft | Theater: — | Banquet: —",
//   //       },
//   //       {
//   //         title: "Lakeview Terrace",
//   //         value: "1,800 sqft | Theater: — | Banquet: —",
//   //       },
//   //       {
//   //         title: "Lakeview Patio",
//   //         value: "2,000 sqft | Theater: — | Banquet: —",
//   //       },
//   //       {
//   //         title: "Lakeview Garden",
//   //         value: "8,000 sqft | Theater: — | Banquet: —",
//   //       },
//   //     ],
//   //     pros: [
//   //       "Full overview of space sizes",
//   //       "Supports planning for different event scales",
//   //       "Helpful for comparison and layout decisions",
//   //     ],
//   //     cons: [
//   //       "Does not include images of each space",
//   //       "Some capacity values are not defined",
//   //     ],
//   //   },
// };

// const EventVenueMain = () => {
//   const [activeVenue, setActiveVenue] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
//   const [activeLayout, setActiveLayout] = useState(null);
//   const [isLayoutModalOpen, setIsLayoutModalOpen] = useState(false);

//   const handleVenueClick = (venueId) => {
//     setActiveVenue(venueId);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleCtaClick = () => {
//     document.getElementById("neweventvenue-venues").scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   const handleView360 = (venueId) => {
//     const venue = venueData[venueId] || {};
//     window.open(
//       "https://www.gotyoulooking.com/1hiltongardenmanassasva/mht.html",
//       "_blank"
//     );
//   };

//   const handleContactClick = () => {
//     window.location.href = "/ContactUs";
//   };

//   const handleBookingClick = () => {
//     window.location.href =
//       "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062";
//   };

//   const handleModalAction = (isPrimary) => {
//     if (isPrimary) {
//       window.location.href =
//         "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062";
//     } else {
//       window.location.href = "/ContactUs";
//     }
//   };

//   const openGalleryModal = (image) => {
//     setSelectedImage(image);
//     setIsGalleryModalOpen(true);
//   };

//   const closeGalleryModal = () => {
//     setIsGalleryModalOpen(false);
//   };

//   const openLayoutModal = (layoutId) => {
//     setActiveLayout(layoutId);
//     setIsLayoutModalOpen(true);
//   };

//   const closeLayoutModal = () => {
//     setIsLayoutModalOpen(false);
//   };

//   return (
//     <div className="neweventvenue-container">
//       {/* Hero Section */}
//       {/* <section className="neweventvenue-hero">
//         <div className="neweventvenue-hero-content">
//           <h1>Exceptional Event Venues</h1>
//           <p>Host unforgettable events in our stunning spaces</p>
//           <button className="neweventvenue-cta-button" onClick={handleCtaClick}>
//             Explore Venues
//           </button>
//         </div>
//       </section> */}
//       {/* Photo Gallery */}
//       <section
//         className="neweventvenue-gallery-section container"
//         id="neweventvenue-gallery"
//       >
//         <h2 className="neweventvenue-section-title">Photo Gallery</h2>
//         <p className="neweventvenue-section-subtitle">
//           Explore our beautiful venues through stunning photography
//         </p>

//         <div className="neweventvenue-gallery-grid">
//           {Object.keys(venueData).map((venueId) => {
//             const venue = venueData[venueId];
//             return (
//               <div
//                 key={venueId}
//                 className="neweventvenue-gallery-item"
//                 onClick={() => openGalleryModal(venue.image)}
//               >
//                 <img src={venue.image} alt={venue.title} />
//                 <div className="neweventvenue-gallery-overlay">
//                   <div className="neweventvenue-gallery-text">
//                     {venue.title}
//                   </div>
//                   <button
//                     className="neweventvenue-gallery-view-btn"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleView360(venueId);
//                     }}
//                   >
//                     <i className="fas fa-vr-cardboard"></i> 360° View
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//       {/* Main Content */}
//       <main className="neweventvenue-main-content">
//         {/* Interactive Venue Map */}
//         <section
//           className="neweventvenue-venue-map-section container"
//           id="neweventvenue-venues"
//         >
//           <h2 className="neweventvenue-section-title">Interactive Venue Map</h2>
//           <p className="neweventvenue-section-subtitle">
//             Click on any venue to explore details and capacity options
//           </p>

//           <div className="neweventvenue-venue-map">
//             <div className="neweventvenue-map-container">
//               {Object.keys(venueData).map((venueId) => {
//                 const venue = venueData[venueId];
//                 return (
//                   <div
//                     key={venueId}
//                     className={`neweventvenue-venue-pin ${venue.pinClass} ${
//                       activeVenue === venueId ? "neweventvenue-active" : ""
//                     }`}
//                     onClick={() => handleVenueClick(venueId)}
//                     data-name={venue.title}
//                   >
//                     <i className={venue.icon}></i>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* Booking Button Section */}
//         <section className="neweventvenue-booking-section container">
//           <button
//             className="neweventvenue-booking-button"
//             onClick={handleBookingClick}
//           >
//             <i className="fas fa-calendar-alt"></i> Book Your Event Now
//           </button>
//         </section>

//         {/* Capacity Charts */}
//         <section
//           className="neweventvenue-capacity-section container"
//           id="neweventvenue-capacity"
//         >
//           <h2 className="neweventvenue-section-title">
//             Venue Capacity Summary
//           </h2>
//           <p className="neweventvenue-section-subtitle">
//             Flexible arrangements for every type of event
//           </p>

//           <div className="neweventvenue-layout-options">
//             {Object.keys(layoutDetails).map((layoutId) => {
//               const layout = layoutDetails[layoutId];
//               return (
//                 <div
//                   key={layoutId}
//                   className="neweventvenue-layout-card"
//                   onClick={() => openLayoutModal(layoutId)}
//                 >
//                   <div className="neweventvenue-layout-icon">
//                     <i className={layout.icon}></i>
//                   </div>
//                   <h3 className="neweventvenue-layout-title">{layout.title}</h3>
//                   <div className="neweventvenue-layout-capacity">
//                     {layout.capacity}
//                   </div>
//                   <p className="neweventvenue-layout-description">
//                     {layout.description}
//                   </p>
//                   <button
//                     className="neweventvenue-layout-details-btn"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       openLayoutModal(layoutId);
//                     }}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* Photo Gallery */}
//         {/* <section
//           className="neweventvenue-gallery-section container"
//           id="neweventvenue-gallery"
//         >
//           <h2 className="neweventvenue-section-title">Photo Gallery</h2>
//           <p className="neweventvenue-section-subtitle">
//             Explore our beautiful venues through stunning photography
//           </p>

//           <div className="neweventvenue-gallery-grid">
//             {Object.keys(venueData).map((venueId) => {
//               const venue = venueData[venueId];
//               return (
//                 <div
//                   key={venueId}
//                   className="neweventvenue-gallery-item"
//                   onClick={() => openGalleryModal(venue.image)}
//                 >
//                   <img src={venue.image} alt={venue.title} />
//                   <div className="neweventvenue-gallery-overlay">
//                     <div className="neweventvenue-gallery-text">
//                       {venue.title}
//                     </div>
//                     <button
//                       className="neweventvenue-gallery-view-btn"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleView360(venueId);
//                       }}
//                     >
//                       <i className="fas fa-vr-cardboard"></i> 360° View
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section> */}
//       </main>

//       {/* Contact Section */}
//       <section
//         className="neweventvenue-contact-section"
//         id="neweventvenue-contact"
//       >
//         <div className="neweventvenue-contact-content">
//           <h2 className="neweventvenue-contact-title">
//             Ready to Plan Your Event?
//           </h2>
//           <p className="neweventvenue-contact-subtitle">
//             Let our expert team help you create an unforgettable experience
//           </p>
//           <div className="neweventvenue-contact-buttons">
//             <button
//               className="neweventvenue-contact-button"
//               onClick={handleBookingClick}
//             >
//               <i className="fas fa-calendar-check"></i> Book Now
//             </button>
//             <button
//               className="neweventvenue-contact-button neweventvenue-secondary"
//               onClick={handleContactClick}
//             >
//               <i className="fas fa-phone-alt"></i> Contact Us
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Venue Details Modal */}
//       {isModalOpen && activeVenue && (
//         <div className="neweventvenue-modal" id="neweventvenue-modal">
//           <div className="neweventvenue-modal-content">
//             <span className="neweventvenue-close-modal" onClick={closeModal}>
//               &times;
//             </span>
//             <h2 className="neweventvenue-modal-title">
//               {venueData[activeVenue].title}
//             </h2>
//             <div className="neweventvenue-modal-image">
//               <img src={venueData[activeVenue].image} alt="Venue" />
//             </div>
//             <p className="neweventvenue-modal-description">
//               {venueData[activeVenue].description}
//             </p>
//             <div className="neweventvenue-modal-details">
//               {venueData[activeVenue].details.map((detail, index) => (
//                 <div key={index} className="neweventvenue-modal-detail-item">
//                   <h4>{detail.title}</h4>
//                   <p>{detail.value}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="neweventvenue-modal-actions">
//               <button
//                 className="neweventvenue-modal-button neweventvenue-primary"
//                 onClick={() => handleModalAction(true)}
//               >
//                 <i className="fas fa-calendar-alt"></i> Book This Venue
//               </button>
//               <button
//                 className="neweventvenue-modal-button neweventvenue-secondary"
//                 onClick={() => handleModalAction(false)}
//               >
//                 <i className="fas fa-info-circle"></i> Request More Info
//               </button>
//               <button
//                 className="neweventvenue-modal-button neweventvenue-tertiary"
//                 onClick={() => handleView360(activeVenue)}
//               >
//                 <i className="fas fa-vr-cardboard"></i> View 360° Tour
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Gallery Modal */}
//       {isGalleryModalOpen && (
//         <div className="neweventvenue-gallery-modal">
//           <div className="neweventvenue-gallery-modal-content">
//             <span
//               className="neweventvenue-close-modal"
//               onClick={closeGalleryModal}
//             >
//               &times;
//             </span>
//             <img src={selectedImage} alt="Venue" />
//             <div className="neweventvenue-gallery-modal-actions">
//               <button
//                 className="neweventvenue-gallery-modal-button"
//                 onClick={() => {
//                   closeGalleryModal();
//                   handleView360(activeVenue);
//                 }}
//               >
//                 <i className="fas fa-vr-cardboard"></i> View 360° Tour
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Layout Details Modal */}
//       {isLayoutModalOpen && activeLayout && (
//         <div className="neweventvenue-layout-modal">
//           <div className="neweventvenue-layout-modal-content">
//             <span
//               className="neweventvenue-close-modal"
//               onClick={closeLayoutModal}
//             >
//               &times;
//             </span>
//             <h2 className="neweventvenue-layout-modal-title">
//               {layoutDetails[activeLayout].title} Layout
//             </h2>
//             <div className="neweventvenue-layout-modal-image">
//               <img
//                 src={layoutDetails[activeLayout].image}
//                 alt={layoutDetails[activeLayout].title}
//               />
//             </div>
//             <p className="neweventvenue-layout-modal-description">
//               {layoutDetails[activeLayout].description}
//             </p>

//             <div className="neweventvenue-layout-modal-details">
//               <div className="neweventvenue-layout-modal-section">
//                 <h3>table layout</h3>
//                 {layoutDetails[activeLayout].details.map((detail, index) => (
//                   <div
//                     key={index}
//                     className="neweventvenue-layout-modal-detail-item"
//                   >
//                     <strong>{detail.title}:</strong> {detail.value}
//                   </div>
//                 ))}
//               </div>

//               <div className="neweventvenue-layout-modal-pros-cons"></div>
//             </div>

//             <div className="neweventvenue-layout-modal-actions">
//               <button
//                 className="neweventvenue-layout-modal-button neweventvenue-primary"
//                 onClick={handleBookingClick}
//               >
//                 <i className="fas fa-calendar-alt"></i> Book now
//               </button>
//               <button
//                 className="neweventvenue-layout-modal-button neweventvenue-secondary"
//                 onClick={closeLayoutModal}
//               >
//                 <i className="fas fa-times"></i> Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventVenueMain;

// import { useEffect, useState } from "react";
// import "./EventVenueMain.css";

// const venueData = {
//   "grand-ballroom": {
//     title: "Grand Ballroom",
//     description:
//       "Our flagship venue featuring elegant crystal chandeliers, marble floors, and capacity for up to 600 guests. Perfect for weddings, galas, and large corporate events. The Grand Ballroom features a spacious dance floor, built-in stage, and state-of-the-art lighting and sound systems.",
//     image: "/eventvenu/GrandBallroom.jpg",
//     pinClass: "pin-grand-ballroom",
//     icon: "fas fa-crown",
//     details: [
//       { title: "Capacity", value: "400-600 guests" },
//       { title: "Size", value: "5,000 sq ft" },
//       { title: "Ceiling Height", value: "20 feet" },
//       {
//         title: "Features",
//         value:
//           "Built-in A/V system, Dance floor, Stage, Crystal chandeliers, Marble floors",
//       },
//       {
//         title: "Ideal For",
//         value: "Weddings, Galas, Corporate events, Award ceremonies",
//       },
//     ],
//   },
//   "small-ballrooms": {
//     title: "Small Ballrooms",
//     description:
//       "Intimate spaces perfect for smaller gatherings, meetings, and private celebrations. Each ballroom can be configured to your specific needs with flexible layouts and modern amenities. Our small ballrooms offer privacy and elegance for your special events.",
//     image: "/eventvenu/Small ballrooms’.jpg",
//     pinClass: "pin-small-ballrooms",
//     icon: "fas fa-chess-board",
//     details: [
//       { title: "Capacity", value: "50-150 guests" },
//       { title: "Size", value: "1,200 sq ft each" },
//       { title: "Ceiling Height", value: "12 feet" },
//       {
//         title: "Features",
//         value:
//           "Flexible layouts, A/V equipment, Natural light, Private entrances",
//       },
//       {
//         title: "Ideal For",
//         value: "Meetings, Private parties, Small weddings, Workshops",
//       },
//     ],
//   },
//   "garden-area": {
//     title: "Garden Area",
//     description:
//       "Beautiful outdoor space surrounded by lush landscaping and water features. Ideal for cocktail receptions, outdoor ceremonies, and garden parties. Our garden area provides a natural, romantic setting with manicured lawns and floral displays.",
//     image: "/eventvenu/Garden Area.jpg",
//     pinClass: "pin-garden-area",
//     icon: "fas fa-leaf",
//     details: [
//       { title: "Capacity", value: "100-300 guests" },
//       { title: "Size", value: "3,000 sq ft" },
//       { title: "Setting", value: "Outdoor garden with water features" },
//       {
//         title: "Features",
//         value:
//           "Weather protection options, Landscape lighting, Built-in sound system",
//       },
//       {
//         title: "Ideal For",
//         value: "Outdoor weddings, Cocktail receptions, Garden parties",
//       },
//     ],
//   },
//   "rooftop-terrace": {
//     title: "Rooftop Terrace",
//     description:
//       "Stunning rooftop venue with panoramic city views and modern amenities. Perfect for sunset cocktails and sophisticated evening events. The rooftop terrace features comfortable lounge seating, a full-service bar, and breathtaking views.",
//     image: "/eventvenu/Rooftop Terrace.jpg",
//     pinClass: "pin-rooftop-terrace",
//     icon: "fas fa-umbrella-beach",
//     details: [
//       { title: "Capacity", value: "150-400 guests" },
//       { title: "Size", value: "2,500 sq ft" },
//       { title: "Views", value: "Panoramic city skyline" },
//       {
//         title: "Features",
//         value:
//           "Full-service bar, Lounge seating, Retractable roof, Heating lamps",
//       },
//       {
//         title: "Ideal For",
//         value: "Corporate events, Cocktail parties, Social gatherings",
//       },
//     ],
//   },
//   "water-view": {
//     title: "Water View Lounge",
//     description:
//       "Sophisticated lounge space with floor-to-ceiling windows overlooking the waterfront. Ideal for corporate events and elegant receptions. The Water View Lounge offers a contemporary setting with natural light and stunning water vistas.",
//     image: "/eventvenu/Waterview Lounge.jpg",
//     pinClass: "pin-water-view",
//     icon: "fas fa-water",
//     details: [
//       { title: "Capacity", value: "75-200 guests" },
//       { title: "Size", value: "1,800 sq ft" },
//       { title: "Views", value: "Waterfront panorama" },
//       {
//         title: "Features",
//         value:
//           "Floor-to-ceiling windows, Modern furnishings, Private bar, A/V capabilities",
//       },
//       {
//         title: "Ideal For",
//         value: "Corporate events, Product launches, Intimate weddings",
//       },
//     ],
//   },
//   "event-setup": {
//     title: "Event Setup Services",
//     description:
//       "Our professional event setup team will transform any of our venues to match your vision. From elegant wedding receptions to high-tech corporate conferences, we handle all the details to create the perfect atmosphere for your event.",
//     image: "/eventvenu/Event Services.jpg",
//     pinClass: "pin-event-setup",
//     icon: "fas fa-tools",
//     details: [
//       { title: "Services", value: "Full event design and setup" },
//       { title: "Setup Time", value: "2-6 hours depending on complexity" },
//       { title: "Team Size", value: "5-15 experienced staff members" },
//       {
//         title: "Capabilities",
//         value:
//           "Stage setup, Lighting design, Table arrangements, Floral arrangements, Theming",
//       },
//       {
//         title: "Equipment Available",
//         value:
//           "Tables, Chairs, Linens, Centerpieces, Lighting, Sound equipment, Stages",
//       },
//     ],
//   },
// };

// const layoutDetails = {
//   banquet: {
//     title: "Banquet Style",
//     icon: "fas fa-utensils",
//     capacity: "1000",
//     image: "/eventvenu/img-4.jpg",
//     description:
//       "Perfect for weddings, galas, and formal dinners with round tables seating 8-10 guests each",
//     details: [
//       { title: "Table Size", value: '72" round tables' },
//       { title: "Seating", value: "8-10 guests per table" },
//       { title: "Space Required", value: "12-15 sq ft per guest" },
//       { title: "Features", value: "Dance floor, Head table, Buffet stations" },
//       {
//         title: "Best For",
//         value: "Wedding receptions, Gala dinners, Award banquets",
//       },
//     ],
//     pros: [
//       "Elegant and formal atmosphere",
//       "Encourages social interaction",
//       "Allows for dancing and entertainment",
//       "Easy to serve meals",
//     ],
//     cons: [
//       "Requires more space",
//       "Higher furniture costs",
//       "Less flexible for presentations",
//     ],
//   },
//   theater: {
//     title: "Theater Style",
//     icon: "fas fa-theater-masks",
//     capacity: "1200",
//     image: "/eventvenu/banner-8.jpg",
//     description:
//       "Ideal for presentations, conferences, and performances with forward-facing seating",
//     details: [
//       { title: "Chair Spacing", value: '18-24" between rows' },
//       { title: "Aisle Width", value: '36-48" main aisles' },
//       { title: "Space Required", value: "6-8 sq ft per guest" },
//       { title: "Features", value: "Stage, A/V equipment, Lighting" },
//       { title: "Best For", value: "Conferences, Lectures, Performances" },
//     ],
//     pros: [
//       "Maximizes seating capacity",
//       "Clear view of presentation",
//       "Easy to set up and rearrange",
//       "Cost-effective",
//     ],
//     cons: [
//       "Limited table space",
//       "Less interaction between attendees",
//       "No dining options",
//     ],
//   },
// };

// const EventVenueMain = () => {
//   const [activeVenue, setActiveVenue] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
//   const [activeLayout, setActiveLayout] = useState(null);
//   const [isLayoutModalOpen, setIsLayoutModalOpen] = useState(false);

//   const handleVenueClick = (venueId) => {
//     setActiveVenue(venueId);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleCtaClick = () => {
//     document.getElementById("neweventvenue-venues").scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   const handleView360 = (venueId) => {
//     window.open(
//       "https://www.gotyoulooking.com/1hiltongardenmanassasva/mht.html",
//       "_blank"
//     );
//   };

//   const handleContactClick = () => {
//     window.location.href = "/ContactUs";
//   };

//   const handleBookingClick = () => {
//     window.location.href =
//       "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062";
//   };

//   const handleModalAction = (isPrimary) => {
//     if (isPrimary) {
//       window.location.href =
//         "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062";
//     } else {
//       window.location.href = "/ContactUs";
//     }
//   };

//   const openGalleryModal = (image) => {
//     setSelectedImage(image);
//     setIsGalleryModalOpen(true);
//   };

//   const closeGalleryModal = () => {
//     setIsGalleryModalOpen(false);
//   };

//   const openLayoutModal = (layoutId) => {
//     setActiveLayout(layoutId);
//     setIsLayoutModalOpen(true);
//   };

//   const closeLayoutModal = () => {
//     setIsLayoutModalOpen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const layoutCards = document.querySelectorAll(
//         ".neweventvenue-layout-card"
//       );
//       const gallery = document.querySelector(".neweventvenue-gallery-iframe");
//       layoutCards.forEach((card) => {
//         const rect = card.getBoundingClientRect();
//         if (rect.top <= window.innerHeight * 0.8) {
//           card.classList.add("animate");
//         }
//       });
//       if (gallery) {
//         const galleryRect = gallery.getBoundingClientRect();
//         if (galleryRect.top <= window.innerHeight * 0.8) {
//           gallery.classList.add("animate");
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="neweventvenue-container">
//       {/* Photo Gallery */}
//       <section
//         className="neweventvenue-gallery-section container"
//         id="neweventvenue-gallery"
//       >
//         <h2 className="neweventvenue-section-title">
//           Exceptional Event Venues
//         </h2>
//         <p className="neweventvenue-section-subtitle">
//           Host unforgettable events in our stunning spaces at Magnoliya Grand
//           Manor
//         </p>
//         <div className="neweventvenue-gallery-grid">
//           {Object.keys(venueData).map((venueId) => {
//             const venue = venueData[venueId];
//             return (
//               <div
//                 key={venueId}
//                 className="neweventvenue-gallery-item"
//                 onClick={() => openGalleryModal(venue.image)}
//               >
//                 <img src={venue.image} alt={venue.title} />
//                 <div className="neweventvenue-gallery-overlay">
//                   <div className="neweventvenue-gallery-text">
//                     {venue.title}
//                   </div>
//                   <button
//                     className="neweventvenue-gallery-view-btn"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleView360(venueId);
//                     }}
//                   >
//                     <i className="fas fa-vr-cardboard"></i> 360° View
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="neweventvenue-main-content">
//         {/* Interactive Venue Map */}
//         <section
//           className="neweventvenue-venue-map-section container"
//           id="neweventvenue-venues"
//         >
//           <h2 className="neweventvenue-section-title">Interactive Venue Map</h2>
//           <p className="neweventvenue-section-subtitle">
//             Click on any venue to explore details and capacity options
//           </p>
//           <div className="neweventvenue-venue-map">
//             <div className="neweventvenue-map-container">
//               {Object.keys(venueData).map((venueId) => {
//                 const venue = venueData[venueId];
//                 return (
//                   <div
//                     key={venueId}
//                     className={`neweventvenue-venue-pin ${venue.pinClass} ${
//                       activeVenue === venueId ? "neweventvenue-active" : ""
//                     }`}
//                     onClick={() => handleVenueClick(venueId)}
//                     data-name={venue.title}
//                   >
//                     <i className={venue.icon}></i>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* Booking Button Section */}
//         <section className="neweventvenue-booking-section container">
//           <button
//             className="neweventvenue-booking-button"
//             onClick={handleBookingClick}
//           >
//             <i className="fas fa-calendar-alt"></i> Book Your Event Now
//           </button>
//         </section>

//         {/* Capacity Charts */}
//         <section
//           className="neweventvenue-capacity-section container"
//           id="neweventvenue-capacity"
//         >
//           <h2 className="neweventvenue-section-title">
//             Venue Capacity Summary
//           </h2>
//           <p className="neweventvenue-section-subtitle">
//             Flexible arrangements for every type of event
//           </p>
//           <div className="neweventvenue-layout-options">
//             {Object.keys(layoutDetails).map((layoutId) => {
//               const layout = layoutDetails[layoutId];
//               return (
//                 <div
//                   key={layoutId}
//                   className="neweventvenue-layout-card"
//                   onClick={() => openLayoutModal(layoutId)}
//                 >
//                   <div className="neweventvenue-layout-icon">
//                     <i className={layout.icon}></i>
//                   </div>
//                   <h3 className="neweventvenue-layout-title">{layout.title}</h3>
//                   <div className="neweventvenue-layout-capacity">
//                     {layout.capacity}
//                   </div>
//                   <p className="neweventvenue-layout-description">
//                     {layout.description}
//                   </p>
//                   <button
//                     className="neweventvenue-layout-details-btn"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       openLayoutModal(layoutId);
//                     }}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       </main>

//       {/* Contact Section */}
//       <section
//         className="neweventvenue-contact-section"
//         id="neweventvenue-contact"
//       >
//         <div className="neweventvenue-contact-content">
//           <h2 className="neweventvenue-contact-title">
//             Ready to Plan Your Event?
//           </h2>
//           <p className="neweventvenue-contact-subtitle">
//             Let our expert team help you create an unforgettable experience
//           </p>
//           <div className="neweventvenue-contact-buttons">
//             <button
//               className="neweventvenue-contact-button"
//               onClick={handleBookingClick}
//             >
//               <i className="fas fa-calendar-check"></i> Book Now
//             </button>
//             <button
//               className="neweventvenue-contact-button neweventvenue-secondary"
//               onClick={handleContactClick}
//             >
//               <i className="fas fa-phone-alt"></i> Contact Us
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Venue Details Modal */}
//       {isModalOpen && activeVenue && (
//         <div className="neweventvenue-modal" id="neweventvenue-modal">
//           <div className="neweventvenue-modal-content">
//             <span className="neweventvenue-close-modal" onClick={closeModal}>
//               &times;
//             </span>
//             <h2 className="neweventvenue-modal-title">
//               {venueData[activeVenue].title}
//             </h2>
//             <div className="neweventvenue-modal-image">
//               <img src={venueData[activeVenue].image} alt="Venue" />
//             </div>
//             <p className="neweventvenue-modal-description">
//               {venueData[activeVenue].description}
//             </p>
//             <div className="neweventvenue-modal-details">
//               {venueData[activeVenue].details.map((detail, index) => (
//                 <div key={index} className="neweventvenue-modal-detail-item">
//                   <h4>{detail.title}</h4>
//                   <p>{detail.value}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="neweventvenue-modal-actions">
//               <button
//                 className="neweventvenue-modal-button neweventvenue-primary"
//                 onClick={() => handleModalAction(true)}
//               >
//                 <i className="fas fa-calendar-alt"></i> Book This Venue
//               </button>
//               <button
//                 className="neweventvenue-modal-button neweventvenue-secondary"
//                 onClick={() => handleModalAction(false)}
//               >
//                 <i className="fas fa-info-circle"></i> Request More Info
//               </button>
//               <button
//                 className="neweventvenue-modal-button neweventvenue-tertiary"
//                 onClick={() => handleView360(activeVenue)}
//               >
//                 <i className="fas fa-vr-cardboard"></i> View 360° Tour
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Gallery Modal */}
//       {isGalleryModalOpen && (
//         <div className="neweventvenue-gallery-modal">
//           <div className="neweventvenue-gallery-modal-content">
//             <span
//               className="neweventvenue-close-modal"
//               onClick={closeGalleryModal}
//             >
//               &times;
//             </span>
//             <img src={selectedImage} alt="Venue" />
//             <div className="neweventvenue-gallery-modal-actions">
//               <button
//                 className="neweventvenue-gallery-modal-button"
//                 onClick={() => {
//                   closeGalleryModal();
//                   handleView360(activeVenue);
//                 }}
//               >
//                 <i className="fas fa-vr-cardboard"></i> View 360° Tour
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Layout Details Modal */}
//       {isLayoutModalOpen && activeLayout && (
//         <div className="neweventvenue-layout-modal">
//           <div className="neweventvenue-layout-modal-content">
//             <span
//               className="neweventvenue-close-modal"
//               onClick={closeLayoutModal}
//             >
//               &times;
//             </span>
//             <h2 className="neweventvenue-layout-modal-title">
//               {layoutDetails[activeLayout].title} Layout
//             </h2>
//             <div className="neweventvenue-layout-modal-image">
//               <img
//                 src={layoutDetails[activeLayout].image}
//                 alt={layoutDetails[activeLayout].title}
//               />
//             </div>
//             <p className="neweventvenue-layout-modal-description">
//               {layoutDetails[activeLayout].description}
//             </p>
//             <div className="neweventvenue-layout-modal-details">
//               <div className="neweventvenue-layout-modal-section">
//                 <h3>Layout Specifications</h3>
//                 <table className="neweventvenue-layout-table">
//                   <thead>
//                     <tr>
//                       <th>Specification</th>
//                       <th>Details</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {layoutDetails[activeLayout].details.map(
//                       (detail, index) => (
//                         <tr key={index}>
//                           <td>{detail.title}</td>
//                           <td>{detail.value}</td>
//                         </tr>
//                       )
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//               <div className="neweventvenue-layout-modal-pros-cons"></div>
//             </div>
//             <div className="neweventvenue-layout-modal-actions">
//               <button
//                 className="neweventvenue-layout-modal-button neweventvenue-primary"
//                 onClick={handleBookingClick}
//               >
//                 <i className="fas fa-calendar-alt"></i> Book Now
//               </button>
//               <button
//                 className="neweventvenue-layout-modal-button neweventvenue-secondary"
//                 onClick={closeLayoutModal}
//               >
//                 <i className="fas fa-times"></i> Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventVenueMain;

import { useEffect, useState } from "react";
import "./EventVenueMain.css";

const venueData = {
  "grand-ballroom": {
    title: "Grand Ballroom",
    description:
      "Our flagship venue featuring elegant crystal chandeliers, marble floors, and capacity for up to 600 guests. Perfect for weddings, galas, and large corporate events. The Grand Ballroom features a spacious dance floor, built-in stage, and state-of-the-art lighting and sound systems.",
    image: "/eventvenu/GrandBallroom.jpg",
    pinClass: "pin-grand-ballroom",
    icon: "fas fa-crown",
    details: [
      { title: "Capacity", value: "400-600 guests" },
      { title: "Size", value: "5,000 sq ft" },
      { title: "Ceiling Height", value: "20 feet" },
      {
        title: "Features",
        value:
          "Built-in A/V system, Dance floor, Stage, Crystal chandeliers, Marble floors",
      },
      {
        title: "Ideal For",
        value: "Weddings, Galas, Corporate events, Award ceremonies",
      },
    ],
  },
  "small-ballrooms": {
    title: "Small Ballrooms",
    description:
      "Intimate spaces perfect for smaller gatherings, meetings, and private celebrations. Each ballroom can be configured to your specific needs with flexible layouts and modern amenities. Our small ballrooms offer privacy and elegance for your special events.",
    image: "/eventvenu/Small ballrooms’.jpg",
    pinClass: "pin-small-ballrooms",
    icon: "fas fa-chess-board",
    details: [
      { title: "Capacity", value: "50-150 guests" },
      { title: "Size", value: "1,200 sq ft each" },
      { title: "Ceiling Height", value: "12 feet" },
      {
        title: "Features",
        value:
          "Flexible layouts, A/V equipment, Natural light, Private entrances",
      },
      {
        title: "Ideal For",
        value: "Meetings, Private parties, Small weddings, Workshops",
      },
    ],
  },
  "garden-area": {
    title: "Garden Area",
    description:
      "Beautiful outdoor space surrounded by lush landscaping and water features. Ideal for cocktail receptions, outdoor ceremonies, and garden parties. Our garden area provides a natural, romantic setting with manicured lawns and floral displays.",
    image: "/eventvenu/Garden Area.jpg",
    pinClass: "pin-garden-area",
    icon: "fas fa-leaf",
    details: [
      { title: "Capacity", value: "100-300 guests" },
      { title: "Size", value: "3,000 sq ft" },
      { title: "Setting", value: "Outdoor garden with water features" },
      {
        title: "Features",
        value:
          "Weather protection options, Landscape lighting, Built-in sound system",
      },
      {
        title: "Ideal For",
        value: "Outdoor weddings, Cocktail receptions, Garden parties",
      },
    ],
  },
  "rooftop-terrace": {
    title: "Rooftop Terrace",
    description:
      "Stunning rooftop venue with panoramic city views and modern amenities. Perfect for sunset cocktails and sophisticated evening events. The rooftop terrace features comfortable lounge seating, a full-service bar, and breathtaking views.",
    image: "/eventvenu/Rooftop Terrace.jpg",
    pinClass: "pin-rooftop-terrace",
    icon: "fas fa-umbrella-beach",
    details: [
      { title: "Capacity", value: "150-400 guests" },
      { title: "Size", value: "2,500 sq ft" },
      { title: "Views", value: "Panoramic city skyline" },
      {
        title: "Features",
        value:
          "Full-service bar, Lounge seating, Retractable roof, Heating lamps",
      },
      {
        title: "Ideal For",
        value: "Corporate events, Cocktail parties, Social gatherings",
      },
    ],
  },
  "water-view": {
    title: "Water View Lounge",
    description:
      "Sophisticated lounge space with floor-to-ceiling windows overlooking the waterfront. Ideal for corporate events and elegant receptions. The Water View Lounge offers a contemporary setting with natural light and stunning water vistas.",
    image: "/eventvenu/Waterview Lounge.jpg",
    pinClass: "pin-water-view",
    icon: "fas fa-water",
    details: [
      { title: "Capacity", value: "75-200 guests" },
      { title: "Size", value: "1,800 sq ft" },
      { title: "Views", value: "Waterfront panorama" },
      {
        title: "Features",
        value:
          "Floor-to-ceiling windows, Modern furnishings, Private bar, A/V capabilities",
      },
      {
        title: "Ideal For",
        value: "Corporate events, Product launches, Intimate weddings",
      },
    ],
  },
  "event-setup": {
    title: "Event Setup Services",
    description:
      "Our professional event setup team will transform any of our venues to match your vision. From elegant wedding receptions to high-tech corporate conferences, we handle all the details to create the perfect atmosphere for your event.",
    image: "/eventvenu/Event Services.jpg",
    pinClass: "pin-event-setup",
    icon: "fas fa-tools",
    details: [
      { title: "Services", value: "Full event design and setup" },
      { title: "Setup Time", value: "2-6 hours depending on complexity" },
      { title: "Team Size", value: "5-15 experienced staff members" },
      {
        title: "Capabilities",
        value:
          "Stage setup, Lighting design, Table arrangements, Floral arrangements, Theming",
      },
      {
        title: "Equipment Available",
        value:
          "Tables, Chairs, Linens, Centerpieces, Lighting, Sound equipment, Stages",
      },
    ],
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
    pros: [
      "Elegant and formal atmosphere",
      "Encourages social interaction",
      "Allows for dancing and entertainment",
      "Easy to serve meals",
    ],
    cons: [
      "Requires more space",
      "Higher furniture costs",
      "Less flexible for presentations",
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
    pros: [
      "Maximizes seating capacity",
      "Clear view of presentation",
      "Easy to set up and rearrange",
      "Cost-effective",
    ],
    cons: [
      "Limited table space",
      "Less interaction between attendees",
      "No dining options",
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

  const handleModalAction = (isPrimary) => {
    if (isPrimary) {
      window.location.href =
        "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062";
    } else {
      window.location.href = "/ContactUs";
    }
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
      {/* Hero Section */}
      {/* <section className="neweventvenue-hero">
        <div className="neweventvenue-hero-content">
          <h1>Exceptional Event Venues</h1>
          <p>
            Host unforgettable events in our stunning spaces at Magnoliya Grand
            Manor
          </p>
          <button className="neweventvenue-cta-button" onClick={handleCtaClick}>
            Explore Venues
          </button>
        </div>
      </section> */}

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
                onClick={() => openGalleryModal(venue.image)}
              >
                <img src={venue.image} alt={venue.title} />
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
                  <div className="neweventvenue-layout-icon">
                    <i className={layout.icon}></i>
                  </div>
                  <h3 className="neweventvenue-layout-title">{layout.title}</h3>
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
          {/* <div className="neweventvenue-gallery-iframe">
            <iframe
              src="https://pronine.pixieset.com/magnoliya360/fotos/"
              title="Magnoliya Venue Gallery"
              allowFullScreen
            ></iframe>
          </div> */}
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

      {/* Venue Details Modal */}
      {isModalOpen && activeVenue && (
        <div className="neweventvenue-modal" id="neweventvenue-modal">
          <div className="neweventvenue-modal-content">
            <span className="neweventvenue-close-modal" onClick={closeModal}>
              &times;
            </span>
            <h2 className="neweventvenue-modal-title">
              {venueData[activeVenue].title}
            </h2>
            <div className="neweventvenue-modal-image">
              <img src={venueData[activeVenue].image} alt="Venue" />
            </div>
            <p className="neweventvenue-modal-description">
              {venueData[activeVenue].description}
            </p>
            <div className="neweventvenue-modal-details">
              {venueData[activeVenue].details.map((detail, index) => (
                <div key={index} className="neweventvenue-modal-detail-item">
                  <h4>{detail.title}</h4>
                  <p>{detail.value}</p>
                </div>
              ))}
            </div>
            <div className="neweventvenue-modal-actions">
              <button
                className="neweventvenue-modal-button neweventvenue-primary"
                onClick={() => handleModalAction(true)}
              >
                <i className="fas fa-calendar-alt"></i> Book This Venue
              </button>
              <button
                className="neweventvenue-modal-button neweventvenue-secondary"
                onClick={() => handleModalAction(false)}
              >
                <i className="fas fa-info-circle"></i> Request More Info
              </button>
              <button
                className="neweventvenue-modal-button neweventvenue-tertiary"
                onClick={() => handleView360(activeVenue)}
              >
                <i className="fas fa-vr-cardboard"></i> View 360° Tour
              </button>
            </div>
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
                <h3>Table Layout</h3>
                <table className="neweventvenue-layout-table">
                  <thead>
                    <tr>
                      <th>Specification</th>
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
              {/* <div className="neweventvenue-layout-modal-pros-cons">
                <div className="neweventvenue-layout-modal-pros">
                  <h3>Advantages</h3>
                  <ul>
                    {layoutDetails[activeLayout].pros.map((pro, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="neweventvenue-layout-modal-cons">
                  <h3>Considerations</h3>
                  <ul>
                    {layoutDetails[activeLayout].cons.map((con, index) => (
                      <li key={index}>
                        <i className="fas fa-exclamation-circle"></i> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
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
