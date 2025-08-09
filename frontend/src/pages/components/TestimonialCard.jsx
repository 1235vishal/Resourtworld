// import "./Styles/TestimonialCard.css";

// const TestimonialCard = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       role: "Marketing Director at TechCorp",
//       image:
//         "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=150&h=150&fit=crop&crop=face",
//       review:
//         "Outstanding service! The team went above and beyond our expectations. Their attention to detail and commitment to excellence truly sets them apart from the competition.",
//       rating: 5,
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "CEO & Founder of InnovateLab",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//       review:
//         "Working with this company has been a game-changer for our business. Their innovative solutions and professional approach helped us achieve results we never thought possible.",
//       rating: 5,
//     },
//     {
//       id: 3,
//       name: "Emily Rodriguez",
//       role: "Operations Manager at GrowthCo",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
//       review:
//         "Exceptional quality and customer service! From start to finish, the entire process was smooth and efficient. I highly recommend their services to anyone looking for excellence.",
//       rating: 5,
//     },
//     {
//       id: 4,
//       name: "David Thompson",
//       role: "Product Manager at NextGen Solutions",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
//       review:
//         "The level of professionalism and expertise displayed by this team is remarkable. They delivered exactly what we needed, on time and within budget. Truly impressive!",
//       rating: 5,
//     },
//     {
//       id: 5,
//       name: "Lisa Wang",
//       role: "Creative Director at DesignStudio",
//       image:
//         "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
//       review:
//         "I'm blown away by the quality of work and attention to detail. The team understood our vision perfectly and brought it to life beyond our expectations. Simply amazing!",
//       rating: 5,
//     },
//     {
//       id: 6,
//       name: "Robert Anderson",
//       role: "Sales Director at MarketLeaders",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//       review:
//         "This company has transformed our approach to business. Their strategic insights and execution have helped us achieve unprecedented growth. Couldn't be happier!",
//       rating: 5,
//     },
//   ];

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
//         ★
//       </span>
//     ));
//   };

//   // Duplicate testimonials for infinite scroll
//   const duplicatedTestimonials = [
//     ...testimonials,
//     ...testimonials,
//     ...testimonials,
//   ];

//   return (
//     <section className="testimonial-section">
//       <div className="testimonial-overlay"></div>
//       <div className="testimonial-container">
//         <div className="testimonial-header">
//           <h2 className="testimonial-title">What Our Clients Say</h2>
//           <p className="testimonial-subtitle">
//             Trusted by thousands of satisfied customers worldwide
//           </p>
//         </div>

//         <div className="testimonial-wrapper">
//           <div className="testimonial-track">
//             {duplicatedTestimonials.map((testimonial, index) => (
//               <div
//                 key={`${testimonial.id}-${index}`}
//                 className="testimonial-card"
//               >
//                 <div className="testimonial-header-card">
//                   <div className="client-info">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="client-image"
//                       loading="lazy"
//                     />
//                     <div className="client-details">
//                       <h3 className="client-name">{testimonial.name}</h3>
//                       <p className="client-role">{testimonial.role}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="testimonial-content">
//                   <p className="testimonial-text">{testimonial.review}</p>
//                 </div>
//                 <div className="rating">{renderStars(testimonial.rating)}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="testimonial-indicators">
//           <span className="indicator"></span>
//           <span className="indicator active"></span>
//           <span className="indicator"></span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialCard;

import axios from "axios";
import { useEffect, useState } from "react";
import "./Styles/TestimonialCard.css";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const TestimonialCard = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/testimonials`);
        setTestimonials(response.data);
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  if (loading) {
    return (
      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-header">
            <h2 className="testimonial-title">What Our Clients Say</h2>
            <p className="testimonial-subtitle">Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials.length) {
    return (
      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-header">
            <h2 className="testimonial-title">What Our Clients Say</h2>
            <p className="testimonial-subtitle">
              No testimonials available at the moment
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Duplicate testimonials for infinite scroll effect (optional)
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-overlay"></div>
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2 className="testimonial-title">What Our Clients Say</h2>
          <p className="testimonial-subtitle">
            Trusted by thousands of satisfied customers worldwide
          </p>
        </div>

        <div className="testimonial-wrapper">
          <div className="testimonial-track">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial._id || index}-${index}`}
                className="testimonial-card"
              >
                <div className="testimonial-header-card">
                  <div className="client-info">
                    <img
                      src={`${backendUrl}${testimonial.image}`}
                      alt={testimonial.name}
                      className="client-image"
                      loading="lazy"
                    />
                    <div className="client-details">
                      <h3 className="client-name">{testimonial.name}</h3>
                      <p className="client-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    {testimonial.quote || testimonial.review}
                  </p>
                </div>
                <div className="rating">
                  {renderStars(testimonial.rating || 5)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonial-indicators">
          {testimonials.slice(0, 3).map((_, i) => (
            <span
              key={i}
              className={`indicator ${i === 0 ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
