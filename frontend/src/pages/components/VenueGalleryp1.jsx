import { useEffect, useRef, useState } from "react";
import "./Styles/VenueGalleryp1.css";

const VenueGalleryp1 = () => {
  const galleryRef = useRef(null);
  const iframeRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Sample hotel images (replace with your actual image URLs)
  const hotelImages = [
    "./images/D8.jpg",
    "./images/D2.jpg",
    "./images/D4.jpg",
    "./images/D5.jpg",
    "./images/16.jpg",
    "./images/10.jpg",
    "./images/14.jpg",
    "./images/S5.jpg",
  ];

  // Auto transition for gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % hotelImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [hotelImages.length]);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if (iframeRef.current.webkitRequestFullscreen) {
        iframeRef.current.webkitRequestFullscreen();
      } else if (iframeRef.current.msRequestFullscreen) {
        iframeRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div className="venuep1-container">
      <div className="venuep1-hero-section">
        <div className="venuep1-header-content">
          <h1 className="venuep1-main-title">
            Magnoliya Grand Manor Conference & Event Center Experience
          </h1>
          <p className="venuep1-subtitle">
            Take a virtual tour and explore our exquisite hotel
          </p>
        </div>

        <div className="venuep1-content-wrapper">
          {/* Left Side - Image Gallery */}
          <div className="venuep1-gallery-container">
            <div className="venuep1-image-gallery">
              <img
                src={hotelImages[currentImage]}
                alt={`Hotel Image ${currentImage + 1}`}
                className="venuep1-gallery-image"
              />
            </div>
          </div>

          {/* Right Side - Virtual Tour */}
          <div className="venuep1-rotating-gallery" ref={galleryRef}>
            <div className="venuep1-image-container">
              <iframe
                ref={iframeRef}
                src="https://www.gotyoulooking.com/1hiltongardenmanassasva/mht.html"
                className="venuep1-virtual-tour"
                title="Hotel Virtual Tour"
                allowFullScreen
                allow="fullscreen"
              ></iframe>
              <button
                className="venuep1-fullscreen-btn"
                onClick={toggleFullscreen}
                aria-label="Toggle fullscreen"
              >
                {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueGalleryp1;
