

import { Link } from "react-router-dom"; // ✅ Import Link
import backgroundImage from "../../../public/images/D10.jpg"; // Use your new uploaded image
import "./Styles/AboutUs.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div
        className="about-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="about-card">
        <div className="abouttext">
          <h2>About Us</h2>
          <div className="sub-heading-wrapper">
            <hr className="line" />
            <h4 className="sub-heading">
              Wonderful Grand Manor in the Heart of Virginia
            </h4>
          </div>
          <p>
            Our state-of-the-art event center attached to the Hilton Garden Inn hotel boasts a
            range of versatile spaces suitable for gatherings of all sizes and purposes. Whether
            you're planning an intimate corporate retreat, a grand gala, or a dream wedding, our
            venues are thoughtfully designed to meet your unique needs. With advanced audiovisual
            capabilities and flexible configurations, your event will shine at MgM.
          </p>
          <p>
            Just outside Washington, D.C., and near Dulles International Airport (IAD), Magnoliya
            Grand offers the perfect balance of accessibility and serenity. With picturesque
            surroundings like Battlefield Park and Ample Parking, we are an ideal choice for
            attracting both local and out-of-town guests for all types of events.
          </p>
          
          {/* ✅ Updated: Replaced <a> with <Link> */}
          <Link to="/Aboutus" className="read-more">Read Full Story</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
