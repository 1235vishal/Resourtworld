import axios from "axios";
import { useEffect, useState } from "react";
import bgImage from "../../../public/Image.png";
import "./Styles/TestimonialCard.css";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/testimonials`)
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error("Failed to fetch testimonials", err));
  }, []);

  const handlePrev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const autoScroll = setInterval(handleNext, 5000);
    return () => clearInterval(autoScroll);
  }, [testimonials]);

  if (!testimonials.length)
    return (
      <div className="hoteltestimonial-loading">Loading Testimonials...</div>
    );

  const current = testimonials[index];

  return (
    <div
      className="hoteltestimonial-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hoteltestimonial-card">
        <div className="hoteltestimonial-text">
          <div className="hoteltestimonial-quote-icon">&ldquo;</div>
          <p className="hoteltestimonial-quote">{current.quote}</p>

          <div className="hoteltestimonial-divider">
            <span className="hoteltestimonial-decor-line" />
            <span className="hoteltestimonial-decor-icon">&#10084;</span>
            <span className="hoteltestimonial-decor-line" />
          </div>

          <div className="hoteltestimonial-author-box">
            <button
              onClick={handlePrev}
              className="hoteltestimonial-nav-button"
            >
              &#8592;
            </button>
            <img src={`${backendUrl}${current.image}`} alt={current.name} />

            <button
              onClick={handleNext}
              className="hoteltestimonial-nav-button hoteltestimonial-filled"
            >
              &#8594;
            </button>
          </div>

          <h4 className="hoteltestimonial-name">{current.name}</h4>
          <p className="hoteltestimonial-role">{current.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
