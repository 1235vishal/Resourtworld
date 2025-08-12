

import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./Styles/GalleryMain.css";

const mediaItems = [
  {
    id: 1,
    src: "./images/ballroom/B1.jpg",
    category: "weddings",
  },
  {
    id: 2,
    src: "./images/ballroom/B2.jpg",
    category: "weddings",
  },
  {
    id: 3,
    src: "./images/ballroom/B3.jpg",
    category: "weddings",
  },
  {
    id: 4,
    src: "./images/ballroom/B4.jpg",
    category: "weddings",
  },
  {
    id: 5,
    src: "./images/ballroom/B5.jpg",
    category: "corporate",
  },
  {
    id: 6,
    src: "./images/ballroom/B6.jpg",
    category: "corporate",
  },
  {
    id: 7,
    src: "./images/ballroom/B7.jpg",
    category: "corporate",
  },
  {
    id: 8,
    src: "./images/ballroom/B8.jpg",
    category: "dining",
  },
  {
    id: 9,
    src: "./images/ballroom/B9.jpg",
    category: "dining",
  },
  {
    id: 10,
    src: "./images/ballroom/B10.jpg",
    category: "venues",
  },
  {
    id: 11,
    src: "./images/ballroom/B11.jpg",
    category: "venues",
  },
  {
    id: 12,
    src: "./images/ballroom/B12.jpg",
    category: "venues",
  },
  {
    id: 13,
    src: "./images/ballroom/B13.jpg",
    category: "weddings",
  },
  {
    id: 14,
    src: "./images/Terrace/T1.jpg",
    category: "weddings",
  },
  {
    id: 15,
    src: "./images/Terrace/T2.jpg",
    category: "weddings",
  },
  {
    id: 16,
    src: "./images/Terrace/T3.jpg",
    category: "corporate",
  },
  {
    id: 17,
    src: "./images/Terrace/T4.jpg",
    category: "corporate",
  },
  {
    id: 18,
    src: "./images/Terrace/T5.jpg",
    category: "dining",
  },
  {
    id: 19,
    src: "./images/Terrace/T6.jpg",
    category: "dining",
  },
  {
    id: 20,
    src: "./images/Terrace/T7.jpg",
    category: "venues",
  },
  {
    id: 21,
    src: "./images/Terrace/T8.jpg",
    category: "corporate",
  },
  {
    id: 22,
    src: "./images/Terrace/T9.jpg",
    category: "dining",
  },
  {
    id: 23,
    src: "./images/Terrace/T10.jpg",
    category: "dining",
  },
  {
    id: 24,
    src: "./images/Terrace/T11.jpg",
    category: "venues",
  },
  {
    id: 25,
    src: "./images/outside/D1.jpg",
    category: "dining",
  },
  {
    id: 26,
    src: "./images/outside/D2.jpg",
    category: "dining",
  },
  {
    id: 27,
    src: "./images/outside/D3.jpg",
    category: "venues",
  },
  {
    id: 28,
    src: "./images/outside/D4.jpg",
    category: "corporate",
  },
  {
    id: 29,
    src: "./images/outside/D5.jpg",
    category: "dining",
  },
  {
    id: 30,
    src: "./images/outside/D6.jpg",
    category: "dining",
  },
  {
    id: 31,
    src: "./images/outside/D7.jpg",
    category: "venues",
  },
];

const HotelGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [columns, setColumns] = useState(3);
  const [columnItems, setColumnItems] = useState([[], [], []]);
  const galleryRef = useRef(null);

  // Open lightbox with clicked image
  const handleMediaClick = (index) => setLightboxIndex(index);

  // Next and previous image in lightbox
  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % mediaItems.length);
  const prevImage = () =>
    setLightboxIndex(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
    );

  // Keyboard nav in lightbox
  const handleKeyDown = (e) => {
    if (lightboxIndex >= 0) {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setLightboxIndex(-1);
    }
  };

  // Update column count on resize
  useEffect(() => {
    const handleResize = () => {
      if (!galleryRef.current) return;

      const width = galleryRef.current.offsetWidth;
      let newColumns = 4;
      if (width < 1200) newColumns = 3;
      if (width < 768) newColumns = 2;
      if (width < 480) newColumns = 1;

      setColumns(newColumns);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Distribute. images into columns for masonry
  useEffect(() => {
    const newColumnItems = Array.from({ length: columns }, () => []);
    mediaItems.forEach((item, index) => {
      newColumnItems[index % columns].push(item);
    });
    setColumnItems(newColumnItems);
  }, [columns]);

  // Keyboard listener for lightbox navigation
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="pinterest-gallery">
      <div className="pinterest-container" ref={galleryRef}>
        <div
          className="pinterest-grid"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {columnItems.map((column, colIndex) => (
            <div key={colIndex} className="pinterest-column">
              {column.map((item, itemIndex) => {
                const globalIndex = mediaItems.findIndex(
                  (img) => img.src === item.src
                );
                return (
                  <div
                    key={`${item.id}-${itemIndex}`}
                    className="pinterest-item"
                    onClick={() => handleMediaClick(globalIndex)}
                  >
                    <img
                      src={item.src}
                      alt=""
                      className="pinterest-image"
                      loading="lazy"
                    />
                    <div className="pinterest-overlay">
                      <ZoomIn size={24} className="pinterest-zoom-icon" />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex >= 0 && (
        <div
          className="pinterest-lightbox"
          onClick={() => setLightboxIndex(-1)}
        >
          <div
            className="pinterest-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxIndex(-1)}
              className="pinterest-close-btn"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <button
              onClick={prevImage}
              className="pinterest-nav-btn pinterest-nav-prev"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              className="pinterest-nav-btn pinterest-nav-next"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            <img
              src={mediaItems[lightboxIndex]?.src}
              alt=""
              className="pinterest-lightbox-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelGallery;
