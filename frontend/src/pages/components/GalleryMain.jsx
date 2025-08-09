import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./Styles/GalleryMain.css";

const mediaItems = [
  { id: 1, src: "./images/1.jpg", category: "weddings" },
  { id: 2, src: "./images/2.jpg", category: "weddings" },
  { id: 3, src: "./images/3.jpg", category: "weddings" },
  { id: 4, src: "./images/4.jpg", category: "weddings" },
  { id: 5, src: "./images/5.jpg", category: "corporate" },
  { id: 6, src: "./images/6.jpg", category: "corporate" },
  { id: 7, src: "./images/7.jpg", category: "corporate" },
  { id: 8, src: "./images/8.jpg", category: "dining" },
  { id: 9, src: "./images/9.jpg", category: "dining" },
  { id: 10, src: "./images/10.jpg", category: "venues" },
  { id: 11, src: "./images/11.jpg", category: "venues" },
  { id: 12, src: "./images/12.jpg", category: "venues" },
  { id: 1, src: "./images/D1.jpg", category: "weddings" },
  { id: 2, src: "./images/D2.jpg", category: "weddings" },
  { id: 3, src: "./images/D3.jpg", category: "weddings" },
  { id: 4, src: "./images/D4.jpg", category: "weddings" },
  { id: 5, src: "./images/D5.jpg", category: "corporate" },
  { id: 6, src: "./images/D6.jpg", category: "corporate" },
  { id: 7, src: "./images/D7.jpg", category: "corporate" },
  { id: 8, src: "./images/D8.jpg", category: "dining" },
  { id: 9, src: "./images/D9.jpg", category: "dining" },
  { id: 10, src: "./images/D10.jpg", category: "venues" },
  { id: 11, src: "./images/D11.jpg", category: "venues" },
  { id: 12, src: "./images/D13.jpg", category: "venues" },
  { id: 1, src: "./images/D14.jpg", category: "weddings" },
  { id: 2, src: "./images/D15.jpg", category: "weddings" },
  { id: 1, src: "./images/S1.jpg", category: "weddings" },
  { id: 2, src: "./images/S2.jpg", category: "weddings" },
  { id: 3, src: "./images/S3.jpg", category: "weddings" },
  { id: 4, src: "./images/S4.jpg", category: "weddings" },
  { id: 5, src: "./images/S5.jpg", category: "corporate" },
//   { id: 6, src: "./images/S6.jpg", category: "corporate" },
  { id: 7, src: "./images/S7.jpg", category: "corporate" },
  { id: 8, src: "./images/S8.jpg", category: "dining" },
  { id: 9, src: "./images/S9.jpg", category: "dining" },
  
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
      let newColumns = 3;
      if (width < 768) newColumns = 2;
      if (width < 480) newColumns = 1;

      setColumns(newColumns);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Distribute images into columns for masonry
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
    <div className="pinterest-gallery-container" ref={galleryRef}>
      <div
        className="pinterest-grid"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {columnItems.map((column, colIndex) => (
          <div key={colIndex} className="pinterest-column">
            {column.map((item) => {
              const globalIndex = mediaItems.findIndex(
                (img) => img.id === item.id
              );
              return (
                <div
                  key={item.id}
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
                    <ZoomIn size={32} className="pinterest-zoom-icon" />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {lightboxIndex >= 0 && (
        <div
          className="pinterest-lightbox"
          onClick={() => setLightboxIndex(-1)}
          tabIndex={0}
        >
          <div
            className="pinterest-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxIndex(-1)}
              className="pinterest-lightbox-close1"
            >
              <X size={24} />
            </button>
            <button
              onClick={prevImage}
              className="pinterest-lightbox-nav pinterest-lightbox-nav-prev"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="pinterest-lightbox-nav pinterest-lightbox-nav-next"
            >
              <ChevronRight size={24} />
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
