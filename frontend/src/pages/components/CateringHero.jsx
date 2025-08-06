// // // import { gsap } from "gsap";
// // // import { useEffect, useRef, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import "./Styles/CateringHero.css";

// // // const CateringHero = () => {
// // //   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
// // //   const [touchStart, setTouchStart] = useState(0);
// // //   const [touchEnd, setTouchEnd] = useState(0);
// // //   const autoSlideIntervalRef = useRef(null);
// // //   const heroContainerRef = useRef(null);
// // //   const floatingElementsRef = useRef(null);

// // //   const slides = [
// // //     {
// // //       id: 0,
// // //       image: "./Hero/1.jpg",
// // //       title: "Magnoliya Grand Manor",
// // //       subtitle: "Grand Event Venue",
// // //       description:
// // //         "Whether you're planning a business meeting, a family celebration, or anything in between, we are here to make your vision a reality. Welcome to a world of grandeur, hospitality, and unforgettable moments.",
// // //       buttonText: "Book Now",
// // //       alt: "Magnoliya Grand Manor",
// // //       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
// // //     },
// // //     {
// // //       id: 1,
// // //       image: "./Hero/2.jpg",
// // //       title: "Exceptional Facilities",
// // //       subtitle: "Premium Event Spaces",
// // //       description:
// // //         "Whether you're planning an intimate corporate retreat, a grand gala, or a dream wedding, our venues are thoughtfully designed to meet your unique needs. With advanced audiovisual capabilities and flexible configurations, your event will shine at MgM.",
// // //       buttonText: "View Venues",
// // //       alt: "Magnoliya Grand Manor Facilities",
// // //       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
// // //     },
// // //     {
// // //       id: 2,
// // //       image: "./Hero/3.jpg",
// // //       title: "Convenience and Accessibility",
// // //       subtitle: "Prime Location",
// // //       description:
// // //         "Located just outside the bustling capital city of Washington, D.C., and in close proximity to Dulles International Airport (IAD), MgM offers the perfect balance of accessibility and serenity.",
// // //       buttonText: "Get Directions",
// // //       alt: "Magnoliya Grand Manor Location",
// // //       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
// // //     },
// // //     {
// // //       id: 3,
// // //       image: "./Hero/4.jpg",
// // //       title: "Magnoliya Grand Manor",
// // //       subtitle: "Grand Event Venue",
// // //       description:
// // //         "Whether you're planning a business meeting, a family celebration, or anything in between, we are here to make your vision a reality. Welcome to a world of grandeur, hospitality, and unforgettable moments.",
// // //       buttonText: "Book Now",
// // //       alt: "Magnoliya Grand Manor",
// // //       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
// // //     },
// // //     {
// // //       id: 4,
// // //       image: "./Hero/5.jpg",
// // //       title: "Exceptional Facilities",
// // //       subtitle: "Premium Event Spaces",
// // //       description:
// // //         "Whether you're planning an intimate corporate retreat, a grand gala, or a dream wedding, our venues are thoughtfully designed to meet your unique needs. With advanced audiovisual capabilities and flexible configurations, your event will shine at MgM.",
// // //       buttonText: "View Venues",
// // //       alt: "Magnoliya Grand Manor Facilities",
// // //       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
// // //     },
// // //     {
// // //       id: 5,
// // //       image: "./Hero/6.jpg",
// // //       title: "Convenience and Accessibility",
// // //       subtitle: "Prime Location",
// // //       description:
// // //         "Located just outside the bustling capital city of Washington, D.C., and in close proximity to Dulles International Airport (IAD), MgM offers the perfect balance of accessibility and serenity.",
// // //       buttonText: "Get Directions",
// // //       alt: "Magnoliya Grand Manor Location",
// // //       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
// // //     },
// // //     {
// // //       id: 6,
// // //       image: "./Hero/7.jpg",
// // //       title: "Magnoliya Grand Manor",
// // //       subtitle: "Grand Event Venue",
// // //       description:
// // //         "Whether you're planning a business meeting, a family celebration, or anything in between, we are here to make your vision a reality. Welcome to a world of grandeur, hospitality, and unforgettable moments.",
// // //       buttonText: "Book Now",
// // //       alt: "Magnoliya Grand Manor",
// // //       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
// // //     },
// // //     {
// // //       id: 7,
// // //       image: "./Hero/8.jpg",
// // //       title: "Exceptional Facilities",
// // //       subtitle: "Premium Event Spaces",
// // //       description:
// // //         "Whether you're planning an intimate corporate retreat, a grand gala, or a dream wedding, our venues are thoughtfully designed to meet your unique needs. With advanced audiovisual capabilities and flexible configurations, your event will shine at MgM.",
// // //       buttonText: "View Venues",
// // //       alt: "Magnoliya Grand Manor Facilities",
// // //       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
// // //     },
// // //   ];

// // //   // Initialize GSAP animations and floating elements
// // //   useEffect(() => {
// // //     initFloatingElements();
// // //     animateSlideIn();
// // //     startAutoSlide();

// // //     return () => {
// // //       if (autoSlideIntervalRef.current) {
// // //         clearInterval(autoSlideIntervalRef.current);
// // //       }
// // //     };
// // //   }, []);

// // //   // Handle slide changes
// // //   useEffect(() => {
// // //     animateSlideIn();
// // //   }, [currentSlideIndex]);

// // //   const initFloatingElements = () => {
// // //     const floatingContainer = floatingElementsRef.current;
// // //     if (!floatingContainer) return;

// // //     floatingContainer.innerHTML = "";

// // //     for (let i = 0; i < 20; i++) {
// // //       const element = document.createElement("div");
// // //       element.className = "floating-element";
// // //       element.style.left = Math.random() * 100 + "%";
// // //       element.style.top = Math.random() * 100 + "%";
// // //       element.style.animationDelay = Math.random() * 6 + "s";
// // //       floatingContainer.appendChild(element);
// // //     }
// // //   };

// // //   const animateSlideIn = () => {
// // //     const currentSlide = heroContainerRef.current?.querySelector(
// // //       `[data-slide="${currentSlideIndex}"]`
// // //     );
// // //     if (!currentSlide) return;

// // //     const title = currentSlide.querySelector(".hero-title");
// // //     const subtitle = currentSlide.querySelector(".hero-subtitle");
// // //     const description = currentSlide.querySelector(".hero-description");
// // //     const divider = currentSlide.querySelector(".hero-divider");
// // //     const button = currentSlide.querySelector(".hero-button");

// // //     gsap.set([title, subtitle, description, divider, button], { opacity: 0 });
// // //     gsap.set(title, { y: 50 });
// // //     gsap.set(subtitle, { y: 30 });
// // //     gsap.set(description, { y: 20 });
// // //     gsap.set(divider, { scaleX: 0 });
// // //     gsap.set(button, { y: 20 });

// // //     const tl = gsap.timeline();

// // //     tl.to(title, {
// // //       opacity: 1,
// // //       y: 0,
// // //       duration: 1.2,
// // //       ease: "power3.out",
// // //     })
// // //       .to(
// // //         subtitle,
// // //         {
// // //           opacity: 1,
// // //           y: 0,
// // //           duration: 1,
// // //           ease: "power3.out",
// // //         },
// // //         "-=0.8"
// // //       )
// // //       .to(
// // //         divider,
// // //         {
// // //           opacity: 1,
// // //           scaleX: 1,
// // //           duration: 0.8,
// // //           ease: "power2.out",
// // //         },
// // //         "-=0.6"
// // //       )
// // //       .to(
// // //         description,
// // //         {
// // //           opacity: 1,
// // //           y: 0,
// // //           duration: 1,
// // //           ease: "power3.out",
// // //         },
// // //         "-=0.5"
// // //       )
// // //       .to(
// // //         button,
// // //         {
// // //           opacity: 1,
// // //           y: 0,
// // //           duration: 0.8,
// // //           ease: "back.out(1.7)",
// // //         },
// // //         "-=0.4"
// // //       );
// // //   };

// // //   const animateSlideOut = () => {
// // //     const currentSlide = heroContainerRef.current?.querySelector(
// // //       `[data-slide="${currentSlideIndex}"]`
// // //     );
// // //     if (!currentSlide) return;

// // //     const elements = currentSlide.querySelectorAll(
// // //       ".hero-title, .hero-subtitle, .hero-description, .hero-divider, .hero-button"
// // //     );

// // //     return gsap.to(elements, {
// // //       opacity: 0,
// // //       y: -20,
// // //       duration: 0.6,
// // //       ease: "power2.in",
// // //       stagger: 0.1,
// // //     });
// // //   };

// // //   const changeSlide = (direction) => {
// // //     animateSlideOut();

// // //     setTimeout(() => {
// // //       let newIndex = currentSlideIndex + direction;

// // //       if (newIndex >= slides.length) {
// // //         newIndex = 0;
// // //       } else if (newIndex < 0) {
// // //         newIndex = slides.length - 1;
// // //       }

// // //       setCurrentSlideIndex(newIndex);
// // //     }, 1000);

// // //     resetAutoSlide();
// // //   };

// // //   const goToSlide = (index) => {
// // //     if (index === currentSlideIndex) return;

// // //     animateSlideOut();

// // //     setTimeout(() => {
// // //       setCurrentSlideIndex(index);
// // //     }, 1000);

// // //     resetAutoSlide();
// // //   };

// // //   const startAutoSlide = () => {
// // //     autoSlideIntervalRef.current = setInterval(() => {
// // //       changeSlide(1);
// // //     }, 1000);
// // //   };

// // //   const resetAutoSlide = () => {
// // //     if (autoSlideIntervalRef.current) {
// // //       clearInterval(autoSlideIntervalRef.current);
// // //     }
// // //     startAutoSlide();
// // //   };

// // //   const handleKeyDown = (e) => {
// // //     if (e.key === "ArrowLeft") {
// // //       changeSlide(-1);
// // //     } else if (e.key === "ArrowRight") {
// // //       changeSlide(1);
// // //     }
// // //   };

// // //   const handleTouchStart = (e) => {
// // //     setTouchStart(e.changedTouches[0].screenX);
// // //   };

// // //   const handleTouchEnd = (e) => {
// // //     setTouchEnd(e.changedTouches[0].screenX);
// // //     handleSwipe();
// // //   };

// // //   const handleSwipe = () => {
// // //     const swipeThreshold = 50;
// // //     const diff = touchStart - touchEnd;

// // //     if (Math.abs(diff) > swipeThreshold) {
// // //       if (diff > 0) {
// // //         changeSlide(1);
// // //       } else {
// // //         changeSlide(-1);
// // //       }
// // //     }
// // //   };

// // //   const handleMouseEnter = () => {
// // //     if (autoSlideIntervalRef.current) {
// // //       clearInterval(autoSlideIntervalRef.current);
// // //     }
// // //   };

// // //   const handleMouseLeave = () => {
// // //     startAutoSlide();
// // //   };

// // //   return (
// // //     <div
// // //       className="hero-container"
// // //       ref={heroContainerRef}
// // //       onKeyDown={handleKeyDown}
// // //       onTouchStart={handleTouchStart}
// // //       onTouchEnd={handleTouchEnd}
// // //       onMouseEnter={handleMouseEnter}
// // //       onMouseLeave={handleMouseLeave}
// // //       tabIndex={0}
// // //     >
// // //       {slides.map((slide, index) => (
// // //         <div
// // //           key={slide.id}
// // //           className={`hero-slide ${
// // //             index === currentSlideIndex ? "active" : ""
// // //           }`}
// // //           data-slide={index}
// // //         >
// // //           <img src={slide.image} alt={slide.alt} className="hero-bg" />
// // //           <div className="hero-content">
// // //             <h2 className="hero-title">{slide.title}</h2>
// // //             <p className="hero-subtitle">{slide.subtitle}</p>
// // //             <div className="hero-divider"></div>
// // //             <p className="hero-description">{slide.description}</p>
// // //             <Link to={slide.link} className="hero-button">
// // //               {slide.buttonText}
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       ))}

// // //       <div className="navigation">
// // //         {slides.map((_, index) => (
// // //           <div
// // //             key={index}
// // //             className={`nav-dot ${index === currentSlideIndex ? "active" : ""}`}
// // //             onClick={() => goToSlide(index)}
// // //           />
// // //         ))}
// // //       </div>

// // //       <div className="floating-elements" ref={floatingElementsRef}></div>
// // //     </div>
// // //   );
// // // };

// // // export default CateringHero;

// // import { gsap } from "gsap";
// // import { useEffect, useRef, useState } from "react";
// // import { Link } from "react-router-dom";
// // import "./Styles/CateringHero.css";

// // const CateringHero = () => {
// //   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
// //   const [touchStart, setTouchStart] = useState(0);
// //   const [touchEnd, setTouchEnd] = useState(0);
// //   const autoSlideIntervalRef = useRef(null);
// //   const heroContainerRef = useRef(null);
// //   const floatingElementsRef = useRef(null);

// //   const slides = [
// //     {
// //       id: 0,
// //       video: "./Hero/1.mp4",
// //       title: "Magnoliya Grand Manor",
// //       subtitle: "Grand Event Venue",
// //       description:
// //         "Whether you're planning a dream wedding, an elegant business meeting, a joyful family celebration, or anything in between, our venue is here to bring your vision to life. From romantic wedding receptions to corporate events and private parties, we provide the perfect blend of grandeur, exceptional hospitality, and personalized service. Step into a world where every detail is designed to create unforgettable moments you and your guests will cherish forever.",
// //       buttonText: "Book Now",
// //       alt: "Magnoliya Grand Manor",
// //       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
// //     },
// //     {
// //       id: 1,
// //       video: "./Hero/2.mp4",
// //       title: "Exceptional Facilities",
// //       subtitle: "Premium Event Spaces",
// //       description:
// //         "Whether you're planning an intimate corporate retreat, a grand gala, or a dream wedding, our venues are thoughtfully designed to meet your unique needs. With advanced audiovisual capabilities and flexible configurations, your event will shine at MgM.",
// //       buttonText: "View Venues",
// //       alt: "Magnoliya Grand Manor Facilities",
// //       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
// //     },
// //     {
// //       id: 2,
// //       video: "./Hero/3.mp4",
// //       title: "Convenience and Accessibility",
// //       subtitle: "Prime Location",
// //       description:
// //         "Located just outside the bustling capital city of Washington, D.C., and only minutes from Dulles International Airport (IAD), MGM offers the ideal blend of convenience and tranquility. Our prime location makes us a sought-after choice for weddings, corporate events, and special celebrations, providing guests with easy access while surrounding them in a elegant, picturesque setting perfect for unforgettable memories.",
// //       buttonText: "Get Directions",
// //       alt: "Magnoliya Grand Manor Location",
// //       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
// //     },
// //   ];

// //   useEffect(() => {
// //     initFloatingElements();
// //     animateSlideIn();
// //     startAutoSlide();

// //     return () => {
// //       if (autoSlideIntervalRef.current) {
// //         clearInterval(autoSlideIntervalRef.current);
// //       }
// //     };
// //   }, []);

// //   useEffect(() => {
// //     animateSlideIn();
// //   }, [currentSlideIndex]);

// //   const initFloatingElements = () => {
// //     const floatingContainer = floatingElementsRef.current;
// //     if (!floatingContainer) return;

// //     floatingContainer.innerHTML = "";

// //     for (let i = 0; i < 15; i++) {
// //       const element = document.createElement("div");
// //       element.className = "floating-element";
// //       element.style.left = Math.random() * 100 + "%";
// //       element.style.top = Math.random() * 100 + "%";
// //       element.style.animationDelay = Math.random() * 6 + "s";
// //       floatingContainer.appendChild(element);
// //     }
// //   };

// //   const animateSlideIn = () => {
// //     const currentSlide = heroContainerRef.current?.querySelector(
// //       `[data-slide="${currentSlideIndex}"]`
// //     );
// //     if (!currentSlide) return;

// //     const title = currentSlide.querySelector(".hero-title");
// //     const subtitle = currentSlide.querySelector(".hero-subtitle");
// //     const description = currentSlide.querySelector(".hero-description");
// //     const divider = currentSlide.querySelector(".hero-divider");
// //     const button = currentSlide.querySelector(".hero-button");

// //     gsap.set([title, subtitle, description, divider, button], { opacity: 0 });
// //     gsap.set(title, { y: 50 });
// //     gsap.set(subtitle, { y: 30 });
// //     gsap.set(description, { y: 20 });
// //     gsap.set(divider, { scaleX: 0 });
// //     gsap.set(button, { y: 20 });

// //     const tl = gsap.timeline();

// //     tl.to(title, {
// //       opacity: 1,
// //       y: 0,
// //       duration: 1.2,
// //       ease: "power3.out",
// //     })
// //       .to(
// //         subtitle,
// //         {
// //           opacity: 1,
// //           y: 0,
// //           duration: 1,
// //           ease: "power3.out",
// //         },
// //         "-=0.8"
// //       )
// //       .to(
// //         divider,
// //         {
// //           opacity: 1,
// //           scaleX: 1,
// //           duration: 0.8,
// //           ease: "power2.out",
// //         },
// //         "-=0.6"
// //       )
// //       .to(
// //         description,
// //         {
// //           opacity: 1,
// //           y: 0,
// //           duration: 1,
// //           ease: "power3.out",
// //         },
// //         "-=0.5"
// //       )
// //       .to(
// //         button,
// //         {
// //           opacity: 1,
// //           y: 0,
// //           duration: 0.8,
// //           ease: "back.out(1.7)",
// //         },
// //         "-=0.4"
// //       );
// //   };

// //   const animateSlideOut = () => {
// //     const currentSlide = heroContainerRef.current?.querySelector(
// //       `[data-slide="${currentSlideIndex}"]`
// //     );
// //     if (!currentSlide) return;

// //     const elements = currentSlide.querySelectorAll(
// //       ".hero-title, .hero-subtitle, .hero-description, .hero-divider, .hero-button"
// //     );

// //     return gsap.to(elements, {
// //       opacity: 0,
// //       y: -20,
// //       duration: 0.6,
// //       ease: "power2.in",
// //       stagger: 0.1,
// //     });
// //   };

// //   const changeSlide = (direction) => {
// //     animateSlideOut();

// //     setTimeout(() => {
// //       let newIndex = currentSlideIndex + direction;

// //       if (newIndex >= slides.length) {
// //         newIndex = 0;
// //       } else if (newIndex < 0) {
// //         newIndex = slides.length - 1;
// //       }

// //       setCurrentSlideIndex(newIndex);
// //     }, 600);

// //     resetAutoSlide();
// //   };

// //   const goToSlide = (index) => {
// //     if (index === currentSlideIndex) return;

// //     animateSlideOut();

// //     setTimeout(() => {
// //       setCurrentSlideIndex(index);
// //     }, 600);

// //     resetAutoSlide();
// //   };

// //   const startAutoSlide = () => {
// //     autoSlideIntervalRef.current = setInterval(() => {
// //       changeSlide(1);
// //     }, 8000);
// //   };

// //   const resetAutoSlide = () => {
// //     if (autoSlideIntervalRef.current) {
// //       clearInterval(autoSlideIntervalRef.current);
// //     }
// //     startAutoSlide();
// //   };

// //   const handleKeyDown = (e) => {
// //     if (e.key === "ArrowLeft") {
// //       changeSlide(-1);
// //     } else if (e.key === "ArrowRight") {
// //       changeSlide(1);
// //     }
// //   };

// //   const handleTouchStart = (e) => {
// //     setTouchStart(e.changedTouches[0].screenX);
// //   };

// //   const handleTouchEnd = (e) => {
// //     setTouchEnd(e.changedTouches[0].screenX);
// //     handleSwipe();
// //   };

// //   const handleSwipe = () => {
// //     const swipeThreshold = 50;
// //     const diff = touchStart - touchEnd;

// //     if (Math.abs(diff) > swipeThreshold) {
// //       if (diff > 0) {
// //         changeSlide(1);
// //       } else {
// //         changeSlide(-1);
// //       }
// //     }
// //   };

// //   const handleMouseEnter = () => {
// //     if (autoSlideIntervalRef.current) {
// //       clearInterval(autoSlideIntervalRef.current);
// //     }
// //   };

// //   const handleMouseLeave = () => {
// //     startAutoSlide();
// //   };

// //   return (
// //     <div
// //       className="hero-container"
// //       ref={heroContainerRef}
// //       onKeyDown={handleKeyDown}
// //       onTouchStart={handleTouchStart}
// //       onTouchEnd={handleTouchEnd}
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //       tabIndex={0}
// //     >
// //       {slides.map((slide, index) => (
// //         <div
// //           key={slide.id}
// //           className={`hero-slide ${
// //             index === currentSlideIndex ? "active" : ""
// //           }`}
// //           data-slide={index}
// //         >
// //           <video
// //             className="hero-bg"
// //             autoPlay
// //             loop
// //             muted
// //             playsInline
// //             src={slide.video}
// //             alt={slide.alt}
// //           />
// //           <div className="hero-content">
// //             <h2 className="hero-title">{slide.title}</h2>
// //             <p className="hero-subtitle">{slide.subtitle}</p>
// //             <div className="hero-divider"></div>
// //             <p className="hero-description">{slide.description}</p>
// //             <Link to={slide.link} className="hero-button">
// //               {slide.buttonText}
// //             </Link>
// //           </div>
// //         </div>
// //       ))}

// //       <div className="navigation">
// //         {slides.map((_, index) => (
// //           <div
// //             key={index}
// //             className={`nav-dot ${index === currentSlideIndex ? "active" : ""}`}
// //             onClick={() => goToSlide(index)}
// //           />
// //         ))}
// //       </div>

// //       <div className="floating-elements" ref={floatingElementsRef}></div>
// //     </div>
// //   );
// // };

// // export default CateringHero;

// import { gsap } from "gsap";
// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Styles/CateringHero.css";

// const CateringHero = () => {
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const [isMuted, setIsMuted] = useState(false); // State for mute/unmute
//   const autoSlideIntervalRef = useRef(null);
//   const heroContainerRef = useRef(null);
//   const floatingElementsRef = useRef(null);
//   const videoRefs = useRef([]);

//   const slides = [
//     {
//       id: 0,
//       video: "./Hero/1.mp4",
//       title: "Magnoliya Grand Manor",
//       subtitle: "Grand Event Venue",
//       description:
//         "Plan your dream wedding, elegant business meeting, or joyful family celebration with us. Our venue offers a perfect blend of grandeur and personalized service, creating unforgettable moments for you and your guests.",
//       buttonText: "Book Now",
//       alt: "Magnoliya Grand Manor",
//       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
//     },
//     {
//       id: 1,
//       video: "./Hero/2.mp4",
//       title: "Exceptional Facilities",
//       subtitle: "Premium Event Spaces",
//       description:
//         "From intimate corporate retreats to grand galas, our versatile venues feature advanced audiovisual capabilities and flexible configurations to make your event truly spectacular.",
//       buttonText: "View Venues",
//       alt: "Magnoliya Grand Manor Facilities",
//       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
//     },
//     {
//       id: 2,
//       video: "./Hero/3.mp4",
//       title: "Convenience and Accessibility",
//       subtitle: "Prime Location",
//       description:
//         "Located minutes from Dulles International Airport and Washington, D.C., our venue combines easy access with an elegant, tranquil setting perfect for creating lasting memories.",
//       buttonText: "Get Directions",
//       alt: "Magnoliya Grand Manor Location",
//       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
//     },
//   ];

//   useEffect(() => {
//     initFloatingElements();
//     animateSlideIn();
//     startAutoSlide();

//     // Manage video playback and audio
//     videoRefs.current.forEach((video, index) => {
//       if (video) {
//         if (index === currentSlideIndex) {
//           video.play();
//           video.muted = isMuted;
//           video.volume = isMuted ? 0 : 0.5;
//         } else {
//           video.pause();
//           video.currentTime = 0;
//           video.muted = true;
//         }
//       }
//     });

//     return () => {
//       if (autoSlideIntervalRef.current) {
//         clearInterval(autoSlideIntervalRef.current);
//       }
//     };
//   }, [currentSlideIndex, isMuted]);

//   const initFloatingElements = () => {
//     const floatingContainer = floatingElementsRef.current;
//     if (!floatingContainer) return;

//     floatingContainer.innerHTML = "";

//     for (let i = 0; i < 15; i++) {
//       const element = document.createElement("div");
//       element.className = "floating-element";
//       element.style.left = Math.random() * 100 + "%";
//       element.style.top = Math.random() * 100 + "%";
//       element.style.animationDelay = Math.random() * 6 + "s";
//       floatingContainer.appendChild(element);
//     }
//   };

//   const animateSlideIn = () => {
//     const currentSlide = heroContainerRef.current?.querySelector(
//       `[data-slide="${currentSlideIndex}"]`
//     );
//     if (!currentSlide) return;

//     const title = currentSlide.querySelector(".hero-title");
//     const subtitle = currentSlide.querySelector(".hero-subtitle");
//     const description = currentSlide.querySelector(".hero-description");
//     const divider = currentSlide.querySelector(".hero-divider");
//     const button = currentSlide.querySelector(".hero-button");

//     gsap.set([title, subtitle, description, divider, button], { opacity: 0 });
//     gsap.set(title, { y: 50 });
//     gsap.set(subtitle, { y: 30 });
//     gsap.set(description, { y: 20 });
//     gsap.set(divider, { scaleX: 0 });
//     gsap.set(button, { y: 20 });

//     const tl = gsap.timeline();

//     tl.to(title, {
//       opacity: 1,
//       y: 0,
//       duration: 1.2,
//       ease: "power3.out",
//     })
//       .to(
//         subtitle,
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//         },
//         "-=0.8"
//       )
//       .to(
//         divider,
//         {
//           opacity: 1,
//           scaleX: 1,
//           duration: 0.8,
//           ease: "power2.out",
//         },
//         "-=0.6"
//       )
//       .to(
//         description,
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//         },
//         "-=0.5"
//       )
//       .to(
//         button,
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           ease: "back.out(1.7)",
//         },
//         "-=0.4"
//       );
//   };

//   const animateSlideOut = () => {
//     const currentSlide = heroContainerRef.current?.querySelector(
//       `[data-slide="${currentSlideIndex}"]`
//     );
//     if (!currentSlide) return;

//     const elements = currentSlide.querySelectorAll(
//       ".hero-title, .hero-subtitle, .hero-description, .hero-divider, .hero-button"
//     );

//     return gsap.to(elements, {
//       opacity: 0,
//       y: -20,
//       duration: 0.6,
//       ease: "power2.in",
//       stagger: 0.1,
//     });
//   };

//   const changeSlide = (direction) => {
//     animateSlideOut();

//     setTimeout(() => {
//       let newIndex = currentSlideIndex + direction;

//       if (newIndex >= slides.length) {
//         newIndex = 0;
//       } else if (newIndex < 0) {
//         newIndex = slides.length - 1;
//       }

//       setCurrentSlideIndex(newIndex);
//     }, 600);

//     resetAutoSlide();
//   };

//   const goToSlide = (index) => {
//     if (index === currentSlideIndex) return;

//     animateSlideOut();

//     setTimeout(() => {
//       setCurrentSlideIndex(index);
//     }, 600);

//     resetAutoSlide();
//   };

//   const startAutoSlide = () => {
//     autoSlideIntervalRef.current = setInterval(() => {
//       changeSlide(1);
//     }, 8000);
//   };

//   const resetAutoSlide = () => {
//     if (autoSlideIntervalRef.current) {
//       clearInterval(autoSlideIntervalRef.current);
//     }
//     startAutoSlide();
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowLeft") {
//       changeSlide(-1);
//     } else if (e.key === "ArrowRight") {
//       changeSlide(1);
//     }
//   };

//   const handleTouchStart = (e) => {
//     setTouchStart(e.changedTouches[0].screenX);
//   };

//   const handleTouchEnd = (e) => {
//     setTouchEnd(e.changedTouches[0].screenX);
//     handleSwipe();
//   };

//   const handleSwipe = () => {
//     const swipeThreshold = 50;
//     const diff = touchStart - touchEnd;

//     if (Math.abs(diff) > swipeThreshold) {
//       if (diff > 0) {
//         changeSlide(1);
//       } else {
//         changeSlide(-1);
//       }
//     }
//   };

//   const handleMouseEnter = () => {
//     if (autoSlideIntervalRef.current) {
//       clearInterval(autoSlideIntervalRef.current);
//     }
//   };

//   const handleMouseLeave = () => {
//     startAutoSlide();
//   };

//   const toggleMute = () => {
//     setIsMuted((prev) => !prev);
//   };

//   return (
//     <div
//       className="hero-container"
//       ref={heroContainerRef}
//       onKeyDown={handleKeyDown}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       tabIndex={0}
//     >
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`hero-slide ${
//             index === currentSlideIndex ? "active" : ""
//           }`}
//           data-slide={index}
//         >
//           <video
//             className="hero-bg"
//             autoPlay
//             loop
//             playsInline
//             preload="auto"
//             src={slide.video}
//             alt={slide.alt}
//             ref={(el) => (videoRefs.current[index] = el)}
//           />
//           <div className="hero-content">
//             <h2 className="hero-title">{slide.title}</h2>
//             <p className="hero-subtitle">{slide.subtitle}</p>
//             <div className="hero-divider"></div>
//             <div className="hero-description">{slide.description}</div>
//             <Link to={slide.link} className="hero-button">
//               {slide.buttonText}
//             </Link>
//           </div>
//         </div>
//       ))}

//       <div className="navigation">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`nav-dot ${index === currentSlideIndex ? "active" : ""}`}
//             onClick={() => goToSlide(index)}
//           />
//         ))}
//       </div>

//       <button
//         className="mute-button"
//         onClick={toggleMute}
//         aria-label={isMuted ? "Unmute video" : "Mute video"}
//       >
//         {isMuted ? "🔇" : "🔊"}
//       </button>

//       <div className="floating-elements" ref={floatingElementsRef}></div>
//     </div>
//   );
// };

// export default CateringHero;

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/CateringHero.css";

const CateringHero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoSlideIntervalRef = useRef(null);
  const heroContainerRef = useRef(null);
  const floatingElementsRef = useRef(null);
  const videoRefs = useRef([]);

  const slides = [
    {
      id: 0,
      video: "./Hero/1.mp4",
      poster: "./Hero/1.jpg", // Fallback image
      title: "Magnoliya Grand Manor",
      subtitle: "Grand Event Venue",
      description:
        "Plan your dream wedding, elegant business meeting, or joyful family celebration with us. Our venue offers a perfect blend of grandeur and personalized service, creating unforgettable moments for you and your guests.",
      buttonText: "Book Now",
      alt: "Magnoliya Grand Manor",
      link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
    },
    {
      id: 1,
      video: "./Hero/2.mp4",
      poster: "./Hero/2.jpg", // Fallback image
      title: "Exceptional Facilities",
      subtitle: "Premium Event Spaces",
      description:
        "From intimate corporate retreats to grand galas, our versatile venues feature advanced audiovisual capabilities and flexible configurations to make your event truly spectacular.",
      buttonText: "View Venues",
      alt: "Magnoliya Grand Manor Facilities",
      link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
    },
    {
      id: 2,
      video: "./Hero/3.mp4",
      poster: "./Hero/3.jpg", // Fallback image
      title: "Convenience and Accessibility",
      subtitle: "Prime Location",
      description:
        "Located minutes from Dulles International Airport and Washington, D.C., our venue combines easy access with an elegant, tranquil setting perfect for creating lasting memories.",
      buttonText: "Get Directions",
      alt: "Magnoliya Grand Manor Location",
      link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
    },
  ];

  useEffect(() => {
    initFloatingElements();
    animateSlideIn();
    startAutoSlide();

    // Initialize videos
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.muted = index !== currentSlideIndex;
        video.volume = index === currentSlideIndex ? 0.5 : 0;
        video.currentTime = 0;
        video.play().catch((error) => {
          console.error(`Error playing video ${slides[index].video}:`, error);
        });
      }
    });

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    animateSlideIn();
    // Smooth video transition and playback
    videoRefs.current.forEach((video, index) => {
      if (video) {
        gsap.to(video, {
          opacity: index === currentSlideIndex ? 1 : 0,
          duration: 0.8,
          ease: "power2.inOut",
        });
        video.muted = index !== currentSlideIndex;
        video.volume = index === currentSlideIndex ? 0.5 : 0;
        video.currentTime = 0;
        video.play().catch((error) => {
          console.error(`Error playing video ${slides[index].video}:`, error);
        });
      }
    });
  }, [currentSlideIndex]);

  const initFloatingElements = () => {
    const floatingContainer = floatingElementsRef.current;
    if (!floatingContainer) return;

    floatingContainer.innerHTML = "";

    for (let i = 0; i < 15; i++) {
      const element = document.createElement("div");
      element.className = "floating-element";
      element.style.left = Math.random() * 100 + "%";
      element.style.top = Math.random() * 100 + "%";
      element.style.animationDelay = Math.random() * 6 + "s";
      floatingContainer.appendChild(element);
    }
  };

  const animateSlideIn = () => {
    const currentSlide = heroContainerRef.current?.querySelector(
      `[data-slide="${currentSlideIndex}"]`
    );
    if (!currentSlide) return;

    const title = currentSlide.querySelector(".hero-title");
    const subtitle = currentSlide.querySelector(".hero-subtitle");
    const description = currentSlide.querySelector(".hero-description");
    const divider = currentSlide.querySelector(".hero-divider");
    const button = currentSlide.querySelector(".hero-button");

    gsap.set([title, subtitle, description, divider, button], { opacity: 0 });
    gsap.set(title, { y: 50 });
    gsap.set(subtitle, { y: 30 });
    gsap.set(description, { y: 20 });
    gsap.set(divider, { scaleX: 0 });
    gsap.set(button, { y: 20 });

    const tl = gsap.timeline();

    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    })
      .to(
        subtitle,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .to(
        divider,
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        description,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        button,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );
  };

  const animateSlideOut = () => {
    const currentSlide = heroContainerRef.current?.querySelector(
      `[data-slide="${currentSlideIndex}"]`
    );
    if (!currentSlide) return;

    const elements = currentSlide.querySelectorAll(
      ".hero-title, .hero-subtitle, .hero-description, .hero-divider, .hero-button"
    );

    return gsap.to(elements, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power2.in",
      stagger: 0.1,
    });
  };

  const changeSlide = (direction) => {
    animateSlideOut();

    setTimeout(() => {
      let newIndex = currentSlideIndex + direction;

      if (newIndex >= slides.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = slides.length - 1;
      }

      setCurrentSlideIndex(newIndex);
    }, 600);

    resetAutoSlide();
  };

  const goToSlide = (index) => {
    if (index === currentSlideIndex) return;

    animateSlideOut();

    setTimeout(() => {
      setCurrentSlideIndex(index);
    }, 600);

    resetAutoSlide();
  };

  const startAutoSlide = () => {
    autoSlideIntervalRef.current = setInterval(() => {
      changeSlide(1);
    }, 8000);
  };

  const resetAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
    startAutoSlide();
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      changeSlide(-1);
    } else if (e.key === "ArrowRight") {
      changeSlide(1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].screenX);
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        changeSlide(1);
      } else {
        changeSlide(-1);
      }
    }
  };

  const handleMouseEnter = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    startAutoSlide();
  };

  const handleVideoError = (index) => {
    console.error(`Failed to load video: ${slides[index].video}`);
  };

  return (
    <div
      className="hero-container"
      ref={heroContainerRef}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${
            index === currentSlideIndex ? "active" : ""
          }`}
          data-slide={index}
        >
          <video
            className="hero-bg"
            autoPlay
            loop
            playsinline
            src={slide.video}
            poster={slide.poster}
            alt={slide.alt}
            ref={(el) => (videoRefs.current[index] = el)}
            onError={() => handleVideoError(index)}
          />
          <div className="hero-content">
            <h2 className="hero-title">{slide.title}</h2>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <div className="hero-divider"></div>
            <div className="hero-description">{slide.description}</div>
            <Link to={slide.link} className="hero-button">
              {slide.buttonText}
            </Link>
          </div>
        </div>
      ))}

      <div className="navigation">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`nav-dot ${index === currentSlideIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div className="floating-elements" ref={floatingElementsRef}></div>
    </div>
  );
};

export default CateringHero;
