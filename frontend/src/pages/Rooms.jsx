
import "./Rooms.css";

const Rooms = () => {
  return (
    <div className="newhotelroom-page">
      {/* Hero Section with Iframe */}
      <section className="newhotelroom-hero">
        <div className="newhotelroom-hero-iframe-container">
          <iframe
            src="https://www.gotyoulooking.com/1hiltongardenmanassasva/mht.html"
            title="Hotel Virtual Tour"
            className="newhotelroom-hero-iframe"
            allowFullScreen
          />
        </div>
        <div className="newhotelroom-hero-content">
          <h1 className="newhotelroom-hero-title">Luxury Accommodations</h1>
          <p className="newhotelroom-hero-description">
            Discover our exquisite collection of rooms and suites, each designed
            to provide the ultimate in comfort and sophistication with
            breathtaking views.
          </p>
          <div className="newhotelroom-hero-stats">
            <div className="newhotelroom-stat-item">
              <span className="newhotelroom-stat-number">4.9</span>
              <span className="newhotelroom-stat-label">Rating</span>
            </div>
            <div className="newhotelroom-stat-item">
              <span className="newhotelroom-stat-number">200+</span>
              <span className="newhotelroom-stat-label">Rooms</span>
            </div>
            <div className="newhotelroom-stat-item">
              <span className="newhotelroom-stat-number">5★</span>
              <span className="newhotelroom-stat-label">Luxury</span>
            </div>
          </div>
          <a
            href="https://www.hilton.com/en/hotels/mnzmngi-hilton-garden-inn-manassas/"
            className="newhotelroom-book-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Room
          </a>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
