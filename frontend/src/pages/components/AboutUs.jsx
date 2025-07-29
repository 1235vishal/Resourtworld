// // // // import React, { useEffect, useRef } from 'react';
// // // // import './Styles/AboutUs.css';

// // // // const AboutUs = () => {
// // // //   const parallaxRef = useRef(null);
// // // //   const contentRef = useRef(null);

// // // //   useEffect(() => {
// // // //     // Load GSAP from CDN
// // // //     const script = document.createElement('script');
// // // //     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
// // // //     script.onload = () => {
// // // //       const { gsap } = window;

// // // //       // Parallax effect for background
// // // //       const handleScroll = () => {
// // // //         const scrolled = window.pageYOffset;
// // // //         const parallax = parallaxRef.current;
// // // //         const speed = scrolled * 0.5;
// // // //         if (parallax) {
// // // //           gsap.set(parallax, { y: speed });
// // // //         }
// // // //       };

// // // //       // Content animation on load
// // // //       gsap.fromTo(contentRef.current, 
// // // //         { opacity: 0, y: 50 },
// // // //         { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
// // // //       );

// // // //       // Add scroll listener
// // // //       window.addEventListener('scroll', handleScroll);

// // // //       // Cleanup
// // // //       return () => {
// // // //         window.removeEventListener('scroll', handleScroll);
// // // //       };
// // // //     };

// // // //     document.head.appendChild(script);

// // // //     return () => {
// // // //       if (document.head.contains(script)) {
// // // //         document.head.removeChild(script);
// // // //       }
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <div className="about-us-container">
// // // //       <div className="parallax-background" ref={parallaxRef}>
// // // //         <div className="background-overlay"></div>
// // // //       </div>
      
// // // //       <div className="content-wrapper" ref={contentRef}>
// // // //         <div className="content-section">
// // // //           <div className="image-section">
// // // //             <div className="table-setup">
// // // //               <div className="floral-centerpiece"></div>
// // // //               <div className="table-setting"></div>
// // // //             </div>
// // // //           </div>
          
// // // //           <div className="text-section">
// // // //             <h1 className="main-title">About Us</h1>
// // // //             <h2 className="subtitle">WONDERFUL GRAND MANOR IN THE HEART OF VIRGINIA</h2>
            
// // // //             <div className="description">
// // // //               <p>
// // // //                 Our state-of-the-art event center attached to the Hilton Garden Inn hotel boasts a 
// // // //                 range of versatile spaces suitable for gatherings of all sizes and purposes. Whether 
// // // //                 you're planning a corporate conference, wedding celebration, or social gathering, 
// // // //                 our venues are thoughtfully designed to meet your unique needs. With advanced 
// // // //                 audiovisual capabilities and flexible configurations, your event will shine at best.
// // // //               </p>
              
// // // //               <p>
// // // //                 Just outside Washington, D.C., and near Dulles International Airport (IAD), Magnolia 
// // // //                 Grand offers the perfect balance of accessibility and serenity. With picturesque 
// // // //                 surroundings like Battlefield Park and Ample Parking, we are an ideal choice for 
// // // //                 attracting both local and out-of-town guests for all types of events.
// // // //               </p>
// // // //             </div>
            
// // // //             <button className="read-more-btn">READ FULL STORY</button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AboutUs;

// // // import React, { useEffect, useRef } from 'react';
// // // import './Styles/AboutUs.css';

// // // const AboutUs = () => {
// // //   const parallaxRef = useRef(null);
// // //   const contentRef = useRef(null);

// // //   useEffect(() => {
// // //     // Load GSAP from CDN
// // //     const script = document.createElement('script');
// // //     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
// // //     script.onload = () => {
// // //       const { gsap } = window;

// // //       // Parallax effect for background image
// // //       const handleScroll = () => {
// // //         const scrolled = window.pageYOffset;
// // //         const parallax = parallaxRef.current;
// // //         const speed = scrolled * 0.3; // Slower parallax for better effect
// // //         if (parallax) {
// // //           gsap.set(parallax, { 
// // //             transform: `translate3d(0, ${speed}px, 0)`,
// // //             ease: "none"
// // //           });
// // //         }
// // //       };

// // //       // Content animation on load
// // //       gsap.fromTo(contentRef.current, 
// // //         { opacity: 0, x: 100 },
// // //         { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
// // //       );

// // //       // Add scroll listener with throttling for performance
// // //       let ticking = false;
// // //       const optimizedScroll = () => {
// // //         if (!ticking) {
// // //           requestAnimationFrame(() => {
// // //             handleScroll();
// // //             ticking = false;
// // //           });
// // //           ticking = true;
// // //         }
// // //       };

// // //       window.addEventListener('scroll', optimizedScroll, { passive: true });

// // //       // Cleanup
// // //       return () => {
// // //         window.removeEventListener('scroll', optimizedScroll);
// // //       };
// // //     };

// // //     document.head.appendChild(script);

// // //     return () => {
// // //       if (document.head.contains(script)) {
// // //         document.head.removeChild(script);
// // //       }
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="about-us-container">
// // //       {/* Full Background Image with Parallax */}
// // //       <div className="parallax-background" ref={parallaxRef}>
// // //         <div className="background-image"></div>
// // //         <div className="background-overlay"></div>
// // //       </div>
      
// // //       {/* Right Side Content Card */}
// // //       <div className="content-card" ref={contentRef}>
// // //         <div className="card-content">
// // //           <h1 className="main-title">About Us</h1>
// // //           <h2 className="subtitle">WONDERFUL GRAND MANOR IN THE HEART OF VIRGINIA</h2>
          
// // //           <div className="description">
// // //             <p>
// // //               Our state-of-the-art event center attached to the Hilton Garden Inn hotel boasts a 
// // //               range of versatile spaces suitable for gatherings of all sizes and purposes. Whether 
// // //               you're planning an intimate corporate retreat, a grand gala, or a dream wedding, 
// // //               our venues are thoughtfully designed to meet your unique needs. With advanced 
// // //               audiovisual capabilities and flexible configurations, your event will shine at MgM.
// // //             </p>
            
// // //             <p>
// // //               Just outside Washington, D.C., and near Dulles International Airport (IAD), Magnolia 
// // //               Grand offers the perfect balance of accessibility and serenity. With picturesque 
// // //               surroundings like Battlefield Park and Ample Parking, we are an ideal choice for 
// // //               attracting both local and out-of-town guests for all types of events.
// // //             </p>
// // //           </div>
          
// // //           <button className="read-more-btn">READ FULL STORY</button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AboutUs;

// // import { useEffect, useRef } from 'react';
// // import './Styles/AboutUs.css';

// // const AboutUs = () => {
// //   const parallaxRef = useRef(null);
// //   const contentRef = useRef(null);

// //   useEffect(() => {
// //     // Load GSAP from CDN
// //     const script = document.createElement('script');
// //     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
// //     script.onload = () => {
// //       const { gsap } = window;

// //       // Simple parallax effect for background image - only Y translation
// //       const handleScroll = () => {
// //         const scrolled = window.pageYOffset;
// //         const parallax = parallaxRef.current;
// //         const speed = scrolled * 0.2; // Controlled speed
// //         if (parallax) {
// //           gsap.set(parallax, { 
// //             y: -speed, // Only move vertically
// //             ease: "none"
// //           });
// //         }
// //       };

// //       // Content animation on load
// //       gsap.fromTo(contentRef.current, 
// //         { opacity: 0, x: 50 },
// //         { opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 0.3 }
// //       );

// //       // Optimized scroll listener
// //       let ticking = false;
// //       const optimizedScroll = () => {
// //         if (!ticking) {
// //           requestAnimationFrame(() => {
// //             handleScroll();
// //             ticking = false;
// //           });
// //           ticking = true;
// //         }
// //       };

// //       window.addEventListener('scroll', optimizedScroll, { passive: true });

// //       // Cleanup
// //       return () => {
// //         window.removeEventListener('scroll', optimizedScroll);
// //       };
// //     };

// //     document.head.appendChild(script);

// //     return () => {
// //       if (document.head.contains(script)) {
// //         document.head.removeChild(script);
// //       }
// //     };
// //   }, []);

// //   return (
// //     <div className="about-us-container">
// //       {/* Fixed Background Image with Controlled Parallax */}
// //       <div className="parallax-background" ref={parallaxRef}>
// //         <div className="background-image"></div>
// //         <div className="background-overlay"></div>
// //       </div>
      
// //       {/* Fixed Right Side Content Card */}
// //       <div className="content-card" ref={contentRef}>
// //         <div className="card-content">
// //           <h1 className="main-title">About Us</h1>
// //           <h2 className="subtitle">WONDERFUL GRAND MANOR IN THE HEART OF VIRGINIA</h2>
          
// //           <div className="description">
// //             <p>
// //               Our state-of-the-art event center attached to the Hilton Garden Inn hotel boasts a 
// //               range of versatile spaces suitable for gatherings of all sizes and purposes. Whether 
// //               you're planning an intimate corporate retreat, a grand gala, or a dream wedding, 
// //               our venues are thoughtfully designed to meet your unique needs. With advanced 
// //               audiovisual capabilities and flexible configurations, your event will shine at MgM.
// //             </p>
            
// //             <p>
// //               Just outside Washington, D.C., and near Dulles International Airport (IAD), Magnolia 
// //               Grand offers the perfect balance of accessibility and serenity. With picturesque 
// //               surroundings like Battlefield Park and Ample Parking, we are an ideal choice for 
// //               attracting both local and out-of-town guests for all types of events.
// //             </p>
// //           </div>
          
// //           <button className="read-more-btn">READ FULL STORY</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutUs;

// import { useEffect, useRef } from 'react';
// import './Styles/AboutUs.css';

// const AboutUs = () => {
//   const parallaxRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
//     script.onload = () => {
//       const { gsap } = window;

//       // Only apply parallax on larger screens
//       const handleScroll = () => {
//         if (window.innerWidth > 992) {
//           const scrolled = window.pageYOffset;
//           const speed = scrolled * 0.2;
//           if (parallaxRef.current) {
//             gsap.set(parallaxRef.current, { 
//               y: -speed,
//               ease: "none"
//             });
//           }
//         }
//       };

//       // Content animation on load
//       gsap.fromTo(contentRef.current, 
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.3 }
//       );

//       let ticking = false;
//       const optimizedScroll = () => {
//         if (!ticking) {
//           requestAnimationFrame(() => {
//             handleScroll();
//             ticking = false;
//           });
//           ticking = true;
//         }
//       };

//       window.addEventListener('scroll', optimizedScroll, { passive: true });

//       return () => {
//         window.removeEventListener('scroll', optimizedScroll);
//       };
//     };

//     document.head.appendChild(script);

//     return () => {
//       if (document.head.contains(script)) {
//         document.head.removeChild(script);
//       }
//     };
//   }, []);

//   return (
//     <div className="about-us-container">
//       {/* Parallax Background - Only active on desktop */}
//       <div className="parallax-background" ref={parallaxRef}>
//         <div className="background-image"></div>
//         <div className="background-overlay"></div>
//       </div>
      
//       {/* Content Card - Responsive layout */}
//       <div className="content-card" ref={contentRef}>
//         <div className="card-content">
//           <h1 className="main-title">About Us</h1>
//           <h2 className="subtitle">WONDERFUL GRAND MANOR IN THE HEART OF VIRGINIA</h2>
          
//           <div className="description">
//             <p>
//               Our state-of-the-art event center attached to the Hilton Garden Inn hotel boasts a 
//               range of versatile spaces suitable for gatherings of all sizes and purposes. Whether 
//               you're planning an intimate corporate retreat, a grand gala, or a dream wedding, 
//               our venues are thoughtfully designed to meet your unique needs. With advanced 
//               audiovisual capabilities and flexible configurations, your event will shine at MgM.
//             </p>
            
//             <p>
//               Just outside Washington, D.C., and near Dulles International Airport (IAD), Magnolia 
//               Grand offers the perfect balance of accessibility and serenity. With picturesque 
//               surroundings like Battlefield Park and Ample Parking, we are an ideal choice for 
//               attracting both local and out-of-town guests for all types of events.
//             </p>
//           </div>
          
//           <button className="read-more-btn">READ FULL STORY</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

// import backgroundImage from '../../../public/bgaboutimage.png'; // Rename uploaded image and place in public/assets or src/assets
// import './Styles/AboutUs.css';

// const AboutSection = () => {
//   return (
//     <section className="about-section">
//       <div
//         className="about-bg"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       ></div>

//       <div className="about-card">
//         <h2>About Us</h2>
//         <h4 className="sub-heading">
//           Wonderful Grand Manor in the Heart of Virginia
//         </h4>
//         <p>
//           Our state-of-the-art event center attached to the Hilton Garden Inn hotel boasts a
//           range of versatile spaces suitable for gatherings of all sizes and purposes. Whether
//           you're planning an intimate corporate retreat, a grand gala, or a dream wedding, our
//           venues are thoughtfully designed to meet your unique needs. With advanced audiovisual
//           capabilities and flexible configurations, your event will shine at MgM.
//         </p>
//         <p>
//           Just outside Washington, D.C., and near Dulles International Airport (IAD), Magnoliya
//           Grand offers the perfect balance of accessibility and serenity. With picturesque
//           surroundings like Battlefield Park and Ample Parking, we are an ideal choice for
//           attracting both local and out-of-town guests for all types of events.
//         </p>
//         <a href="#" className="read-more">Read Full Story</a>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


// // AboutUs.jsx
// import backgroundImage from "../../../public/bgaboutimage.png"; // Use your new uploaded image
// import "./Styles/AboutUs.css";

// const AboutSection = () => {
//   return (
//     <section className="about-section">
//       <div
//         className="about-bg"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       ></div>

//           <div className="about-card">
//               <div className="abouttext">
//                 <h2>About Us</h2>
//         <div className="sub-heading-wrapper">
//           <hr className="line" />
//           <h4 className="sub-heading">
//             Wonderful Grand Manor in the Heart of Virginia
//           </h4>
//         </div>
//         <p>
//           Our state-of-the-art event center attached to the Hilton Garden Inn hotel boasts a
//           range of versatile spaces suitable for gatherings of all sizes and purposes. Whether
//           you're planning an intimate corporate retreat, a grand gala, or a dream wedding, our
//           venues are thoughtfully designed to meet your unique needs. With advanced audiovisual
//           capabilities and flexible configurations, your event will shine at MgM.
//         </p>
//         <p>
//           Just outside Washington, D.C., and near Dulles International Airport (IAD), Magnoliya
//           Grand offers the perfect balance of accessibility and serenity. With picturesque
//           surroundings like Battlefield Park and Ample Parking, we are an ideal choice for
//           attracting both local and out-of-town guests for all types of events.
//         </p>
//         <a href="/Aboutus" className="read-more">Read Full Story</a>
//       </div>  
//               </div>
        
//     </section>
//   );
// };

// export default AboutSection;

import { Link } from "react-router-dom"; // ✅ Import Link
import backgroundImage from "../../../public/bgaboutimage.png"; // Use your new uploaded image
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
