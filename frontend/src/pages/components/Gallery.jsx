import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/gallery.css";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Sample wedding images - replace with your actual images
  const images = [
    {
      id: 1,
      src: "/wedding/gallery/imgi_104_DSC00317-S.jpg",
      alt: "Wedding ceremony at Magnoliya Grand",
      category: "ceremony",
    },
    {
      id: 2,
      src: "/wedding/gallery/imgi_149_DSC00103-X4.jpg",
      alt: "Bride and groom at the altar",
      category: "ceremony",
    },
    {
      id: 3,
      src: "/wedding/gallery/imgi_22_DSC00137-M.jpg",
      alt: "Wedding reception setup",
      category: "reception",
    },
    {
      id: 4,
      src: "/wedding/gallery/imgi_233_20ef71ec1b1f8cf1a8b19483439a8b96-xlarge.jpg",
      alt: "Wedding cake display",
      category: "reception",
    },
    {
      id: 5,
      src: "/wedding/gallery/imgi_23_DSC00138-M.jpg",
      alt: "Bride and groom first dance",
      category: "reception",
    },
    {
      id: 6,
      src: "/wedding/gallery/imgi_252_69f203bd194309d3c01c7b2d58984309-xlarge.jpg",
      alt: "Wedding decorations",
      category: "decor",
    },
    {
      id: 7,
      src: "/wedding/gallery/imgi_261_0a3841d415b7922abedfb77b047aa182-xlarge.jpg",
      alt: "Bridal party",
      category: "bridal",
    },
    {
      id: 8,
      src: "/wedding/gallery/imgi_263_229f436f36c35b7e452f8f65e8944dfe-xlarge.jpg",
      alt: "Table settings",
      category: "decor",
    },
    {
      id: 9,
      src: "/wedding/gallery/imgi_266_8e44d19800bf3bf13aaff26c65aadb54-xlarge.jpg",
      alt: "Outdoor wedding setup",
      category: "ceremony",
    },
    {
      id: 10,
      src: "/wedding/gallery/imgi_268_699db2a0c23744782bccec97193e8499-xlarge.jpg",
      alt: "Wedding toast",
      category: "reception",
    },
    {
      id: 11,
      src: "/wedding/gallery/imgi_62_DSC00231-M.jpg",
      alt: "Bride's bouquet",
      category: "bridal",
    },
    {
      id: 12,
      src: "/wedding/gallery/imgi_89_DSC00281-M.jpg",
      alt: "Groom's preparation",
      category: "bridal",
    },
  ];

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate the indices for left, center, and right images
  const getAdjacentIndex = (offset) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  const leftIndex = getAdjacentIndex(-1);
  const rightIndex = getAdjacentIndex(1);

  return (
    <div className="gallery-section">
      <div className="gallery-header-container">
        <div className="gallery-header">
          <div className="gallery-text">
            <h2 className="gallery-title">Gallery</h2>
            <p className="gallery-subtitle">CHECK OUR RECENT PROJECTS</p>
          </div>
          {/* <button className="see-full-gallery">
                      <span className="see-full-text">See Full Gallery
                      </span>    
          </button> */}
          <Link to="/Gallerypage" className="see-full-gallery">
            <span className="see-full-text">See Full Gallery</span>
          </Link>
        </div>
      </div>

      <div className="gallery-container">
        <button
          className="gallery-nav-btn gallery-nav-left"
          onClick={scrollLeft}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="gallery-scroll-container" ref={scrollContainerRef}>
          <div className="gallery-images">
            {/* Left image */}
            <div className="gallery-item left">
              <img
                src={images[leftIndex].src}
                alt={images[leftIndex].alt}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3 className="gallery-image-title">
                  {images[leftIndex].title}
                </h3>
              </div>
            </div>

            {/* Center (active) image */}
            <div className="gallery-item active">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3 className="gallery-image-title">
                  {images[currentIndex].title}
                </h3>
              </div>
            </div>

            {/* Right image */}
            <div className="gallery-item right">
              <img
                src={images[rightIndex].src}
                alt={images[rightIndex].alt}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3 className="gallery-image-title">
                  {images[rightIndex].title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <button
          className="gallery-nav-btn gallery-nav-right"
          onClick={scrollRight}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
