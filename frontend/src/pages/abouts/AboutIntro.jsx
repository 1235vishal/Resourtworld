// import { Building2, CalendarClock, MapPin, Star, Users2 } from "lucide-react";
// import { useEffect, useState } from "react";
// import "./AboutIntro.css";

// // Slides array for the image carousel, matching OurStory for consistency
// const slides = [
//   {
//     icon: <CalendarClock size={40} color="#D4A574" />,
//     title: "Our Vision",
//     image:
//       "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1350&q=80", // Elegant planning board
//   },
//   {
//     icon: <Building2 size={40} color="#D4A574" />,
//     title: "Exceptional Facilities",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80", // Interior modern building
//   },
//   {
//     icon: <Users2 size={40} color="#D4A574" />,
//     title: "Dedicated Service",
//     image:
//       "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1350&q=80", // Team service
//   },
//   {
//     icon: <MapPin size={40} color="#D4A574" />,
//     title: "Convenience and Accessibility",
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Easy to reach
//   },
//   {
//     icon: <Star size={40} color="#D4A574" />,
//     title: "Your Journey Begins Here",
//     image:
//       "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1350&q=80", // Event setup
//   },
// ];

// const AboutIntro = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % slides.length);
//     }, 5000); // Change every 5 seconds, matching OurStory
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="aboutintro">
//       <div className="aboutintro-container">
//         <div className="aboutintro-content">
//           <h1>Story Of Magnoliya Grand Manor</h1>
//           <h2>Welcome to Magnoliya Grand Manor</h2>
//           <p>
//             Welcome to Magnoliya Grand Manor (MgM), where extraordinary events
//             and unforgettable conferences find their home. Attached to the
//             esteemed Hilton Garden Inn, we are proud to be your premier event
//             destination conveniently nestled just 25 miles from the vibrant
//             heart of Washington, D.C., and a mere 12 miles from Dulles
//             International Airport (IAD), ensuring easy accessibility for all
//             your guests.
//           </p>
//         </div>
//         <div className="aboutintro-image">
//           <img
//             src={slides[activeIndex].image}
//             alt={slides[activeIndex].title}
//             className="carousel-image"
//           />
//           <div className="image-caption">
//             <div className="caption-icon">{slides[activeIndex].icon}</div>
//             <p>{slides[activeIndex].title}</p>
//           </div>
//           <div className="dots-container">
//             {slides.map((_, idx) => (
//               <span
//                 key={idx}
//                 className={`dot ${idx === activeIndex ? "active" : ""}`}
//                 onClick={() => setActiveIndex(idx)}
//               ></span>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* <div className="aboutintro-bottom-image">
//         <img
//           src="https://images.unsplash.com/photo-1519741497674-4113f7d8b5f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//           alt="Magnoliya Grand Manor Event"
//         />
//       </div> */}
//     </div>
//   );
// };

// export default AboutIntro;

import { useEffect, useState } from "react";
import "./AboutIntro.css";

// Slides array for the image carousel using placeholder Pixieset images
const slides = [
  {
    image: "/aboutpage/1.jpg", // Replace with actual Pixieset image URL
  },
  {
    image: "/aboutpage/2.jpg", // Replace with actual Pixieset image URL
  },
  {
    image: "/aboutpage/3.jpg", // Replace with actual Pixieset image URL
  },
  {
    image: "/aboutpage/4.jpg", // Replace with actual Pixieset image URL
  },
  {
    image: "/aboutpage/5.jpg", // Replace with actual Pixieset image URL
  },
  {
    image: "/aboutpage/6.jpg", // Replace with actual Pixieset image URL
  },
  {
    image: "/aboutpage/7.jpg", // Replace with actual Pixieset image URL
  },
];

const AboutIntro = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="aboutintro">
      <div className="aboutintro-container">
        <div className="aboutintro-content">
          <h1>Story Of Magnoliya Grand Manor</h1>
          <p>
            Our state-of-the-art event center, conveniently attached to the
            Hilton Garden Inn hotel, offers a variety of versatile spaces
            perfect for gatherings of all sizes and occasions. Whether you're
            hosting an intimate corporate retreat, a lavish gala, or your dream
            wedding, our venues are thoughtfully designed to meet your unique
            needs. With advanced audiovisual technology, elegant décor, and
            flexible room configurations, every event at Magnoliya Grand is set
            to impress. Located just outside Washington, D.C., and only minutes
            from Dulles International Airport (IAD), Magnoliya Grand combines
            accessibility with serenity. Surrounded by picturesque settings like
            Battlefield Park and featuring ample on-site parking, we are the
            ideal choice for wedding ceremonies, receptions, corporate events,
            and special occasions.
          </p>
        </div>
        <div className="aboutintro-image">
          <img
            src={slides[activeIndex].image}
            alt="Magnoliya Grand Manor Venue"
            className="carousel-image"
          />
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
  );
};

export default AboutIntro;
