import bgImage from "../../assets/footerherobg.jpg"; // Replace with your image path
import "./Styles/FooterHero.css";

const FooterHero = () => {
  return (
    <section
      className="newfooterhero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="newfooterhero-content">
        <p className="newfooterhero-top-text">UPCOMING EVENTS? BOOK NOW</p>
        <h1 className="newfooterhero-heading">
          Let Us Make Your Events Flawless
        </h1>
        <a
          href="https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062"
          rel="noopener noreferrer"
        >
          <button className="newfooterhero-button">SEND REQUEST</button>
        </a>
      </div>
    </section>
  );
};

export default FooterHero;
