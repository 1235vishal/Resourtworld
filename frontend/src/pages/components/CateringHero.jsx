// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Styles/CateringHero.css";

// const CateringHero = () => {
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const videoRefs = useRef([]);
//   const autoSlideIntervalRef = useRef(null);

//   const slides = [
//     {
//       id: 0,
//       video: "./Hero/1.mp4",
//       poster: "./Hero/1.jpg", // Add poster images for each video
//       title: "Magnoliya Grand Manor",
//       subtitle: "Grand Event Venue",
//       description:
//         "Whether you're planning a dream wedding, an elegant business meeting, a joyful family celebration, or anything in between, our venue is here to bring your vision to life. From romantic wedding receptions to corporate events and private parties, we provide the perfect blend of grandeur, exceptional hospitality, and personalized service. Step into a world where every detail is designed to create unforgettable moments you and your guests will cherish forever.",
//       buttonText: "Book Now",
//       alt: "Magnoliya Grand Manor",
//       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
//     },
//     {
//       id: 1,
//       video: "./Hero/2.mp4",
//       poster: "./Hero/2.jpg",
//       title: "Magnoliya Grand Manor",
//       subtitle: "Exceptional Facilities",
//       description:
//         "Whether you're planning an intimate corporate retreat, a grand gala, or a dream wedding, our venues are thoughtfully designed to meet your unique needs. With advanced audiovisual capabilities and flexible configurations, your event will shine at MgM.",
//       buttonText: "View Venues",
//       alt: "Magnoliya Grand Manor Facilities",
//       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
//     },
//     {
//       id: 2,
//       video: "./Hero/3.mp4",
//       poster: "./Hero/3.jpg",
//       title: "Magnoliya Grand Manor",
//       subtitle: "Prime Location",
//       description:
//         "Located just outside the bustling capital city of Washington, D.C., and only minutes from Dulles International Airport (IAD), MGM offers the ideal blend of convenience and tranquility. Our prime location makes us a sought-after choice for weddings, corporate events, and special celebrations, providing guests with easy access while surrounding them in a elegant, picturesque setting perfect for unforgettable memories.",
//       buttonText: "Get Directions",
//       alt: "Magnoliya Grand Manor Location",
//       link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
//     },
//   ];

//   useEffect(() => {
//     // Preload videos and posters
//     const preloadAssets = async () => {
//       await Promise.all(
//         slides.map((slide) => {
//           const video = document.createElement("video");
//           video.src = slide.video;
//           video.preload = "auto";
//           video.load();

//           const img = new Image();
//           img.src = slide.poster;

//           return new Promise((resolve) => {
//             video.oncanplaythrough = resolve;
//             img.onload = resolve;
//           });
//         })
//       );

//       // Start playing the current video
//       if (videoRefs.current[currentSlideIndex]) {
//         videoRefs.current[currentSlideIndex]
//           .play()
//           .catch((e) => console.log("Autoplay prevented:", e));
//       }
//     };

//     preloadAssets();

//     startAutoSlide();
//     return () => {
//       if (autoSlideIntervalRef.current) {
//         clearInterval(autoSlideIntervalRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     // When slide changes, play the new video and pause others
//     videoRefs.current.forEach((video, index) => {
//       if (!video) return;

//       if (index === currentSlideIndex) {
//         video.currentTime = 0;
//         video.play().catch((e) => console.log("Autoplay prevented:", e));
//       } else {
//         video.pause();
//       }
//     });
//   }, [currentSlideIndex]);

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

//   const changeSlide = (direction) => {
//     let newIndex = currentSlideIndex + direction;

//     if (newIndex >= slides.length) {
//       newIndex = 0;
//     } else if (newIndex < 0) {
//       newIndex = slides.length - 1;
//     }

//     setCurrentSlideIndex(newIndex);
//     resetAutoSlide();
//   };

//   const goToSlide = (index) => {
//     if (index === currentSlideIndex) return;
//     setCurrentSlideIndex(index);
//     resetAutoSlide();
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

//   const handleVideoError = (index) => {
//     console.error(`Failed to load video: ${slides[index].video}`);
//     // Fallback to poster image if video fails to load
//     const videoElement = videoRefs.current[index];
//     if (videoElement) {
//       videoElement.style.display = "none";
//       const posterElement = videoElement.nextElementSibling;
//       if (posterElement) {
//         posterElement.style.display = "block";
//       }
//     }
//   };

//   return (
//     <div
//       className="hero-container"
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
//             ref={(el) => (videoRefs.current[index] = el)}
//             className="hero-bg"
//             autoPlay
//             loop
//             muted
//             playsInline
//             preload="auto"
//             src={slide.video}
//             poster={slide.poster}
//             alt={slide.alt}
//             onError={() => handleVideoError(index)}
//             onCanPlayThrough={() => {
//               const video = videoRefs.current[index];
//               if (video && index === currentSlideIndex) {
//                 video.style.opacity = 1;
//               }
//             }}
//           />
//           <img
//             className="hero-poster"
//             src={slide.poster}
//             alt={slide.alt}
//             style={{ display: "none" }}
//           />
//           <div className="hero-content">
//             <h2 className="hero-title magnoliya-title">{slide.title}</h2>
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
//     </div>
//   );
// };

// export default CateringHero;

// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import "./Styles/CateringHero.css";

// const CateringHero = () => {
//   const videoRef = useRef(null);

//   const slide = {
//     video: "./Hero/1.mp4",
//     poster: "./Hero/1.jpg",
//     title: "Magnoliya Grand Manor",
//     tagline: "Luxury Stays. Memorable Events. Exceptional Experiences.",
//     buttonText: "Book With Us",
//     alt: "Magnoliya Grand Manor",
//     link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
//   };

//   useEffect(() => {
//     // Preload video and poster
//     const preloadAssets = async () => {
//       const video = document.createElement("video");
//       video.src = slide.video;
//       video.preload = "auto";
//       video.load();

//       const img = new Image();
//       img.src = slide.poster;

//       await Promise.all([
//         new Promise((resolve) => {
//           video.oncanplaythrough = resolve;
//         }),
//         new Promise((resolve) => {
//           img.onload = resolve;
//         }),
//       ]);

//       // Start playing the video
//       if (videoRef.current) {
//         videoRef.current
//           .play()
//           .catch((e) => console.log("Autoplay prevented:", e));
//       }
//     };

//     preloadAssets();
//   }, []);

//   const handleVideoError = () => {
//     console.error(`Failed to load video: ${slide.video}`);
//     // Fallback to poster image if video fails to load
//     if (videoRef.current) {
//       videoRef.current.style.display = "none";
//       const posterElement = videoRef.current.nextElementSibling;
//       if (posterElement) {
//         posterElement.style.display = "block";
//       }
//     }
//   };

//   return (
//     <div className="hero-container">
//       <div className="hero-slide active">
//         <video
//           ref={videoRef}
//           className="hero-bg"
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//           src={slide.video}
//           poster={slide.poster}
//           alt={slide.alt}
//           onError={handleVideoError}
//           onCanPlayThrough={() => {
//             if (videoRef.current) {
//               videoRef.current.style.opacity = 1;
//             }
//           }}
//         />
//         <img
//           className="hero-poster"
//           src={slide.poster}
//           alt={slide.alt}
//           style={{ display: "none" }}
//         />
//         <div className="hero-content">
//           <h2 className="hero-title magnoliya-title smaller">{slide.title}</h2>
//           <p className="hero-tagline">{slide.tagline}</p>
//           <Link to={slide.link} className="hero-button">
//             {slide.buttonText}
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CateringHero;

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Styles/CateringHero.css";

const CateringHero = () => {
  const videoRef = useRef(null);

  const slide = {
    video: "./Hero/1.mp4",
    title: "Magnoliya Grand Manor",
    tagline: "Luxury Stays. Memorable Events. Exceptional Experiences.",
    buttonText: "Book With Us",
    alt: "Magnoliya Grand Manor",
    link: "https://magnoliyagrandmanorconferenceandeventcenter.tripleseat.com/booking_request/35062",
  };

  useEffect(() => {
    // Preload video
    const preloadVideo = async () => {
      const video = document.createElement("video");
      video.src = slide.video;
      video.preload = "auto";
      video.load();

      await new Promise((resolve) => {
        video.oncanplaythrough = resolve;
      });

      // Start playing the video
      if (videoRef.current) {
        videoRef.current
          .play()
          .catch((e) => console.log("Autoplay prevented:", e));
      }
    };

    preloadVideo();
  }, []);

  const handleVideoError = () => {
    console.error(`Failed to load video: ${slide.video}`);
  };

  return (
    <div className="hero-container">
      <div className="hero-slide active">
        <video
          ref={videoRef}
          className="hero-bg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src={slide.video}
          alt={slide.alt}
          onError={handleVideoError}
          onCanPlayThrough={() => {
            if (videoRef.current) {
              videoRef.current.style.opacity = 1;
            }
          }}
        />
        <div className="hero-content">
          <h2 className="hero-title">{slide.title}</h2>
          <p className="hero-tagline">{slide.tagline}</p>
          <Link to={slide.link} className="hero-button">
            {slide.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CateringHero;
