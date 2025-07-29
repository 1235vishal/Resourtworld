

// import { Building2, CalendarClock, MapPin, Star, Users2 } from "lucide-react"; // Icons
// import { useEffect, useState } from "react";
// import storyImage from "../../assets/imgi_37_about_img-300x203.jpg";
// import "./OurStory.css";

// const slides = [
//   {
//     icon: <CalendarClock size={40} color="#D4A574" />,
//     title: "Our Vision",
//     text: "At Magnoliya Grand Manor, our vision is to provide you with an unparalleled event experience. We believe that every gathering, from corporate conferences to life's most celebrated moments, deserves a setting that is both exceptional and effortlessly accommodating.",
//   },
//   {
//     icon: <Building2 size={40} color="#D4A574" />,
//     title: "Exceptional Facilities",
//     text: "Our state-of-the-art event center boasts a range of versatile spaces suitable for gatherings of all sizes and purposes. With advanced audiovisual capabilities and flexible configurations, your event will shine at MgM.",
//   },
//   {
//     icon: <Users2 size={40} color="#D4A574" />,
//     title: "Dedicated Service",
//     text: "Our team of experienced professionals is passionate about creating exceptional experiences for our clients. From event planning to gourmet catering, our meticulous attention to detail ensures that your event runs seamlessly.",
//   },
//   {
//     icon: <MapPin size={40} color="#D4A574" />,
//     title: "Convenience and Accessibility",
//     text: "Located just outside Washington, D.C., and near Dulles Airport (IAD), MgM offers the perfect balance of accessibility and serenity, attracting both local and out-of-town guests.",
//   },
//   {
//     icon: <Star size={40} color="#D4A574" />,
//     title: "Your Journey Begins Here",
//     text: "We invite you to explore Magnoliya Grand Manor further and discover the endless possibilities for your upcoming event. Welcome to a world of grandeur, hospitality, and unforgettable moments.",
//   },
// ];

// const OurStory = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="our-story">
//       <div className="story-wrapper">
//         <div className="story-header">
//           <h2>Our Story</h2>
//           <p className="subheading">We have over 35 years of experience</p>
//         </div>

//         <div className="story-card">
//           <div className="story-image">
//             <img src={storyImage} alt="Dining Table" />
//           </div>
//           <div className="story-text">
//             <div className="story-icon">{slides[activeIndex].icon}</div>
//             <p className="main-text">{slides[activeIndex].title}</p>
//             <p className="sub-text">{slides[activeIndex].text}</p>

//             <div className="dots-container">
//               {slides.map((_, idx) => (
//                 <span
//                   key={idx}
//                   className={`dot ${idx === activeIndex ? "active" : ""}`}
//                   onClick={() => setActiveIndex(idx)}
//                 ></span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurStory;

import { Building2, CalendarClock, MapPin, Star, Users2 } from "lucide-react";
import { useEffect, useState } from "react";
import "./OurStory.css";

const slides = [
  {
    icon: <CalendarClock size={40} color="#D4A574" />,
    title: "Our Vision",
    text: "At Magnoliya Grand Manor, our vision is to provide you with an unparalleled event experience. We believe that every gathering, from corporate conferences to life's most celebrated moments, deserves a setting that is both exceptional and effortlessly accommodating.",
    image: "/aboutpage/ourstroy/1.jpg", // Elegant event space
  },
  {
    icon: <Building2 size={40} color="#D4A574" />,
    title: "Exceptional Facilities",
    text: "Our state-of-the-art event center boasts a range of versatile spaces suitable for gatherings of all sizes and purposes. With advanced audiovisual capabilities and flexible configurations, your event will shine at MgM.",
    image: "/aboutpage/ourstroy/2.jpg", // Modern venue interior
  },
  {
    icon: <Users2 size={40} color="#D4A574" />,
    title: "Dedicated Service",
    text: "Our team of experienced professionals is passionate about creating exceptional experiences for our clients. From event planning to gourmet catering, our meticulous attention to detail ensures that your event runs seamlessly.",
    image: "/aboutpage/ourstroy/3.jpg", // Event staff at work
  },
  {
    icon: <MapPin size={40} color="#D4A574" />,
    title: "Convenience and Accessibility",
    text: "Located just outside Washington, D.C., and near Dulles Airport (IAD), MgM offers the perfect balance of accessibility and serenity, attracting both local and out-of-town guests.",
    image: "/aboutpage/ourstroy/2.jpg", // Scenic location near city
  },
  {
    icon: <Star size={40} color="#D4A574" />,
    title: "Your Journey Begins Here",
    text: "We invite you to explore Magnoliya Grand Manor further and discover the endless possibilities for your upcoming event. Welcome to a world of grandeur, hospitality, and unforgettable moments.",
    image : "/aboutpage/ourstroy/1.jpg", // Grand event setup
  },
];

const OurStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="our-story">
      <div className="story-wrapper">
        <div className="story-header">
          <h2>Our Story</h2>
          <p className="subheading">We have over 35 years of experience</p>
        </div>

        <div className="story-card">
          <div className="story-image">
            <img src={slides[activeIndex].image} alt={slides[activeIndex].title} />
          </div>
          <div className="story-text">
            <div className="story-icon">{slides[activeIndex].icon}</div>
            <p className="main-text">{slides[activeIndex].title}</p>
            <p className="sub-text">{slides[activeIndex].text}</p>

            <div className="dots-container">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(idx)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;