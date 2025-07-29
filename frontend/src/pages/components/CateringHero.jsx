// import { gsap } from "gsap";
// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Styles/CateringHero.css";

// const CateringHero = () => {
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const autoSlideIntervalRef = useRef(null);
//   const heroContainerRef = useRef(null);
//   const floatingElementsRef = useRef(null);

//   const slides = [
//     {
//       id: 0,
//       image: "./Hero/12.JPG",
//       title: "Magnoliya Grand Manor",
//       subtitle: "Grand Event Venue",
//       description:
//         "Whether you're planning a business meeting, a family celebration, or anything in between, we are here to make your vision a reality. Welcome to a world of grandeur, hospitality, and unforgettable moments.",
//       buttonText: "Book Now",
//       alt: "Magnoliya Grand Manor",
//       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
//     },
//     {
//       id: 1,
//       image: "./Hero/2.jpg",
//       title: "Exceptional Facilities",
//       subtitle: "Premium Event Spaces",
//       description:
//         "Whether you're planning an intimate corporate retreat, a grand gala, or a dream wedding, our venues are thoughtfully designed to meet your unique needs. With advanced audiovisual capabilities and flexible configurations, your event will shine at MgM.",
//       buttonText: "View Venues",
//       alt: "Magnoliya Grand Manor Facilities",
//       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
//     },
//     {
//       id: 2,
//       image: "./Hero/3.jpg",
//       title: "Convenience and Accessibility",
//       subtitle: "Prime Location",
//       description:
//         "Located just outside the bustling capital city of Washington, D.C., and in close proximity to Dulles International Airport (IAD), MgM offers the perfect balance of accessibility and serenity.",
//       buttonText: "Get Directions",
//       alt: "Magnoliya Grand Manor Location",
//       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
//     },
//   ];

//   // Initialize GSAP animations and floating elements
//   useEffect(() => {
//     initFloatingElements();
//     animateSlideIn();
//     startAutoSlide();

//     return () => {
//       if (autoSlideIntervalRef.current) {
//         clearInterval(autoSlideIntervalRef.current);
//       }
//     };
//   }, []);

//   // Handle slide changes
//   useEffect(() => {
//     animateSlideIn();
//   }, [currentSlideIndex]);

//   const initFloatingElements = () => {
//     const floatingContainer = floatingElementsRef.current;
//     if (!floatingContainer) return;

//     floatingContainer.innerHTML = "";

//     for (let i = 0; i < 20; i++) {
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
//     }, 1000);

//     resetAutoSlide();
//   };

//   const goToSlide = (index) => {
//     if (index === currentSlideIndex) return;

//     animateSlideOut();

//     setTimeout(() => {
//       setCurrentSlideIndex(index);
//     }, 1000);

//     resetAutoSlide();
//   };

//   const startAutoSlide = () => {
//     autoSlideIntervalRef.current = setInterval(() => {
//       changeSlide(1);
//     }, 1000);
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
//           <img src={slide.image} alt={slide.alt} className="hero-bg" />
//           <div className="hero-content">
//             <h2 className="hero-title">{slide.title}</h2>
//             <p className="hero-subtitle">{slide.subtitle}</p>
//             <div className="hero-divider"></div>
//             <p className="hero-description">{slide.description}</p>
//             <Link to={slide.link} className="hero-button">
//               {slide.buttonText}
//             </Link>
//           </div>
//         </div>
//       ))}

//       {/* <div className="slide-arrows prev-arrow" onClick={() => changeSlide(-1)}>
//         ‹
//       </div>
//       <div className="slide-arrows next-arrow" onClick={() => changeSlide(1)}>
//         ›
//       </div> */}

//       <div className="navigation">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`nav-dot ${index === currentSlideIndex ? "active" : ""}`}
//             onClick={() => goToSlide(index)}
//           />
//         ))}
//       </div>

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

  const slides = [
    {
      id: 0,
      image: "./Hero/1.jpg",
      title: "Magnoliya Grand Manor",
      subtitle: "Grand Event Venue",
      description:
        "Whether you're planning a business meeting, a family celebration, or anything in between, we are here to make your vision a reality. Welcome to a world of grandeur, hospitality, and unforgettable moments.",
      buttonText: "Book Now",
      alt: "Magnoliya Grand Manor",
      link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
    },
    {
      id: 1,
      image: "./Hero/2.jpg",
      title: "Exceptional Facilities",
      subtitle: "Premium Event Spaces",
      description:
        "Whether you're planning an intimate corporate retreat, a grand gala, or a dream wedding, our venues are thoughtfully designed to meet your unique needs. With advanced audiovisual capabilities and flexible configurations, your event will shine at MgM.",
      buttonText: "View Venues",
      alt: "Magnoliya Grand Manor Facilities",
      link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
    },
    {
      id: 2,
      image: "./Hero/3.jpg",
      title: "Convenience and Accessibility",
      subtitle: "Prime Location",
      description:
        "Located just outside the bustling capital city of Washington, D.C., and in close proximity to Dulles International Airport (IAD), MgM offers the perfect balance of accessibility and serenity.",
      buttonText: "Get Directions",
      alt: "Magnoliya Grand Manor Location",
      link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
    },
    {
      id: 3,
      image: "./Hero/4.jpg",
      title: "Magnoliya Grand Manor",
      subtitle: "Grand Event Venue",
      description:
        "Whether you're planning a business meeting, a family celebration, or anything in between, we are here to make your vision a reality. Welcome to a world of grandeur, hospitality, and unforgettable moments.",
      buttonText: "Book Now",
      alt: "Magnoliya Grand Manor",
      link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
    },
    {
      id: 4,
      image: "./Hero/5.jpg",
      title: "Exceptional Facilities",
      subtitle: "Premium Event Spaces",
      description:
        "Whether you're planning an intimate corporate retreat, a grand gala, or a dream wedding, our venues are thoughtfully designed to meet your unique needs. With advanced audiovisual capabilities and flexible configurations, your event will shine at MgM.",
      buttonText: "View Venues",
      alt: "Magnoliya Grand Manor Facilities",
      link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
    },
    {
      id: 5,
      image: "./Hero/6.jpg",
      title: "Convenience and Accessibility",
      subtitle: "Prime Location",
      description:
        "Located just outside the bustling capital city of Washington, D.C., and in close proximity to Dulles International Airport (IAD), MgM offers the perfect balance of accessibility and serenity.",
      buttonText: "Get Directions",
      alt: "Magnoliya Grand Manor Location",
      link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
    },
    {
      id: 6,
      image: "./Hero/7.jpg",
      title: "Magnoliya Grand Manor",
      subtitle: "Grand Event Venue",
      description:
        "Whether you're planning a business meeting, a family celebration, or anything in between, we are here to make your vision a reality. Welcome to a world of grandeur, hospitality, and unforgettable moments.",
      buttonText: "Book Now",
      alt: "Magnoliya Grand Manor",
      link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
    },
    {
      id: 7,
      image: "./Hero/8.jpg",
      title: "Exceptional Facilities",
      subtitle: "Premium Event Spaces",
      description:
        "Whether you're planning an intimate corporate retreat, a grand gala, or a dream wedding, our venues are thoughtfully designed to meet your unique needs. With advanced audiovisual capabilities and flexible configurations, your event will shine at MgM.",
      buttonText: "View Venues",
      alt: "Magnoliya Grand Manor Facilities",
      link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
    },
  ];

  // Initialize GSAP animations and floating elements
  useEffect(() => {
    initFloatingElements();
    animateSlideIn();
    startAutoSlide();

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, []);

  // Handle slide changes
  useEffect(() => {
    animateSlideIn();
  }, [currentSlideIndex]);

  const initFloatingElements = () => {
    const floatingContainer = floatingElementsRef.current;
    if (!floatingContainer) return;

    floatingContainer.innerHTML = "";

    for (let i = 0; i < 20; i++) {
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
    }, 1000);

    resetAutoSlide();
  };

  const goToSlide = (index) => {
    if (index === currentSlideIndex) return;

    animateSlideOut();

    setTimeout(() => {
      setCurrentSlideIndex(index);
    }, 1000);

    resetAutoSlide();
  };

  const startAutoSlide = () => {
    autoSlideIntervalRef.current = setInterval(() => {
      changeSlide(1);
    }, 1000);
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
          <img src={slide.image} alt={slide.alt} className="hero-bg" />
          <div className="hero-content">
            <h2 className="hero-title">{slide.title}</h2>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <div className="hero-divider"></div>
            <p className="hero-description">{slide.description}</p>
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
