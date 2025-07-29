// import { useEffect, useRef } from "react";
// import "./Styles/TourHero.css";
// import { gsap } from "gsap";

// const TourHero = () => {
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     gsap.from(titleRef.current, {
//       opacity: 0,
//       y: -50,
//       duration: 1,
//       ease: "power2.out",
//     });

//     gsap.from(subtitleRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       delay: 0.3,
//       ease: "power2.out",
//     });

//     gsap.from(iframeRef.current, {
//       opacity: 0,
//       scale: 0.95,
//       duration: 1,
//       delay: 0.6,
//       ease: "power2.out",
//     });
//   }, []);

//   return (
//     <section className="tour-hero">
//       <div className="tour-content">
//         <h1 ref={titleRef} className="tour-title">Explore Our Hotel Virtually</h1>
//         <p ref={subtitleRef} className="tour-subtitle">
//           Take a virtual walkthrough of our luxurious rooms and spaces
//         </p>
//         <div ref={iframeRef} className="tour-iframe-container">
//           <iframe
//             title="Hotel Virtual Tour"
//             src="https://kuula.co/share/collection/7J4X8?logo=0&info=1&fs=1&vr=1&sd=1&thumbs=1"
//             allowFullScreen
//             className="tour-iframe"
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TourHero;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Styles/TourHero.css";
import bgImage from "../../assets/tourbg.jpg"; // use your theme background

const TourHero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    gsap.from([titleRef.current, subtitleRef.current, iframeRef.current], {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      className="tour-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="tour-overlay">
        <div className="tour-content">
          <h1 ref={titleRef} className="tour-title">
            Explore Our Hotel Virtually
          </h1>
          <p ref={subtitleRef} className="tour-subtitle">
            Take a virtual walkthrough of our luxurious rooms and event spaces
          </p>
          <div ref={iframeRef} className="tour-iframe-container">
            <iframe
              title="Hotel Virtual Tour"
              src="https://kuula.co/share/collection/7J4X8?logo=0&info=1&fs=1&vr=1&sd=1&thumbs=1"
              allowFullScreen
              className="tour-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourHero;
