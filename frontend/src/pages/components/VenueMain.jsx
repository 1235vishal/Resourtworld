import { useState } from "react";
import "./VenueMap.css";

const VenueMap = () => {
  const [activeVenue, setActiveVenue] = useState(null);

  const venues = [
    {
      id: "grand-ballroom",
      name: "Grand Ballroom",
      description:
        "Our largest venue perfect for galas, weddings, and major conferences.",
      capacity: {
        banquet: 250,
        theater: 400,
        classroom: 120,
      },
      features: [
        "Crystal chandeliers",
        "Built-in stage",
        "Dance floor",
        "VIP lounge area",
      ],
      images: [
        "https://images.unsplash.com/photo-1519671482749-fd09be917c85",
        "https://images.unsplash.com/photo-1531058020387-3be344556be6",
      ],
      position: { top: "30%", left: "25%" },
    },
    {
      id: "small-ballrooms",
      name: "Small Ballrooms",
      description:
        "Intimate spaces ideal for meetings, private dinners, and small receptions.",
      capacity: {
        banquet: 80,
        theater: 120,
        classroom: 50,
      },
      features: [
        "Flexible room dividers",
        "Natural lighting",
        "Private catering access",
        "AV equipment included",
      ],
      images: [
        "https://images.unsplash.com/photo-1572111504020-d1d8d5ca3a1e",
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a",
      ],
      position: { top: "45%", left: "60%" },
    },
    {
      id: "garden-area",
      name: "Garden Area",
      description:
        "Beautiful outdoor setting surrounded by lush landscaping and floral displays.",
      capacity: {
        ceremony: 200,
        reception: 150,
        cocktail: 250,
      },
      features: [
        "Seasonal flower arrangements",
        "Garden lighting",
        "Fountain centerpiece",
        "Weather tent option",
      ],
      images: [
        "https://images.unsplash.com/photo-1513151233558-d860c5398176",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      ],
      position: { top: "70%", left: "20%" },
    },
    {
      id: "rooftop-terrace",
      name: "Rooftop Terrace",
      description:
        "Panoramic city views make this our most sought-after event space.",
      capacity: {
        cocktail: 180,
        seated: 100,
        reception: 220,
      },
      features: [
        "360° city views",
        "Retractable canopy",
        "Built-in bar stations",
        "Glass windscreens",
      ],
      images: [
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
        "https://images.unsplash.com/photo-1531058020387-3be344556be6",
      ],
      position: { top: "15%", left: "70%" },
    },
    {
      id: "water-view-lounge",
      name: "Water View Lounge",
      description: "Sophisticated lounge space with stunning waterfront views.",
      capacity: {
        lounge: 75,
        theater: 90,
        boardroom: 25,
      },
      features: [
        "Floor-to-ceiling windows",
        "Modern furnishings",
        "Premium sound system",
        "Private balcony",
      ],
      images: [
        "https://images.unsplash.com/photo-1513151233558-d860c5398176",
        "https://images.unsplash.com/photo-1511578314322-379afb476865",
      ],
      position: { top: "60%", left: "75%" },
    },
  ];

  const handlePinClick = (venueId) => {
    setActiveVenue(venueId);
  };

  return (
    <section className="venue-map-section">
      <div className="venue-map-container">
        <h2>Our Event Venues</h2>

        <div className="venue-map-content">
          <div className="map-display">
            {/* Hotel base map - replace with your actual hotel layout */}
            <div className="hotel-map">
              <div className="hotel-building"></div>
              <div className="hotel-garden"></div>
              <div className="hotel-pool"></div>

              {/* Venue pins */}
              {venues.map((venue) => (
                <div
                  key={venue.id}
                  className={`venue-pin ${
                    activeVenue === venue.id ? "active" : ""
                  }`}
                  style={{ top: venue.position.top, left: venue.position.left }}
                  onClick={() => handlePinClick(venue.id)}
                >
                  <div className="pin-icon"></div>
                  <div className="pin-label">{venue.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="venue-details">
            {!activeVenue ? (
              <div className="default-message">
                <h3>Explore Our Venues</h3>
                <p>
                  Click on any venue pin to view details about capacity,
                  features, and more.
                </p>
              </div>
            ) : (
              venues
                .filter((v) => v.id === activeVenue)
                .map((venue) => (
                  <div key={venue.id} className="venue-info">
                    <h3>{venue.name}</h3>
                    <p className="venue-description">{venue.description}</p>

                    <div className="capacity-chart">
                      <h4>Capacity</h4>
                      <ul>
                        {Object.entries(venue.capacity).map(
                          ([layout, capacity]) => (
                            <li key={layout}>
                              <span className="layout-type">{layout}:</span>
                              <span className="layout-capacity">
                                {capacity} guests
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="venue-features">
                      <h4>Features</h4>
                      <ul>
                        {venue.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="venue-gallery">
                      <h4>Gallery</h4>
                      <div className="gallery-grid">
                        {venue.images.map((img, index) => (
                          <div key={index} className="gallery-item">
                            <img
                              src={`${img}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80`}
                              alt={venue.name}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="view-tour-btn">View 360° Tour</button>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueMap;
