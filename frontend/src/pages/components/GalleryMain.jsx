// import {
//   ChevronLeft,
//   ChevronRight,
//   Filter,
//   PlayCircle,
//   X,
//   ZoomIn,
// } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import "./Styles/GalleryMain.css";

// // Sample media data with real content
// const mediaItems = [
//   // Weddings
//   {
//     id: 1,
//     src: "../../../public/newG/birdwed.jpg",
//     category: "weddings",
//     type: "image",
//     title: "Elegant Wedding Reception",
//     description: "Luxurious ballroom setup with crystal chandeliers",
//   },
//   {
//     id: 2,
//     src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     category: "weddings",
//     type: "image",
//     title: "Bride & Groom First Dance",
//     description: "Romantic first dance in our grand ballroom",
//   },
//   {
//     id: 3,
//     src: "https://images.unsplash.com/photo-1589998059171-988d3a46f0bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     category: "weddings",
//     type: "image",
//     title: "Romantic Outdoor Ceremony",
//     description: "Garden ceremony with floral arrangements",
//   },
//   {
//     id: 4,
//     src: "/Newgallery/Magnoliya_1080p (1).mp4",
//     category: "weddings",
//     type: "video",
//     title: "Wedding Venue Tour",
//     description: "Complete tour of our wedding facilities",
//     thumbnail:
//       "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//   },
//   {
//     id: 5,
//     src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     category: "weddings",
//     type: "image",
//     title: "Wedding Cake Display",
//     description: "Exquisite wedding cake presentation",
//   },

//   // Corporate Events
//   {
//     id: 6,
//     src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80",
//     category: "corporate",
//     type: "image",
//     title: "Conference Setup",
//     description: "Professional meeting room with modern AV equipment",
//   },
//   {
//     id: 7,
//     src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80",
//     category: "corporate",
//     type: "image",
//     title: "Business Meeting",
//     description: "Executive boardroom for important meetings",
//   },
//   {
//     id: 8,
//     src: "/Newgallery/Magnoliya_1080p (1).mp4",
//     category: "corporate",
//     type: "video",
//     title: "Corporate Event Highlights",
//     description: "Showcase of our corporate event capabilities",
//     thumbnail:
//       "https://images.unsplash.com/photo-1579869847557-1f67382cc158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//   },
//   {
//     id: 9,
//     src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
//     category: "corporate",
//     type: "image",
//     title: "Corporate Gala",
//     description: "Elegant corporate gala dinner setup",
//   },

//   // Dining
//   //   {
//   //     id: 10,
//   //     src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//   //     category: "dining",
//   //     type: "image",
//   //     title: "Fine Dining Restaurant",
//   //     description: "Elegant dining room with panoramic views",
//   //   },
//   {
//     id: 11,
//     src: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     category: "dining",
//     type: "image",
//     title: "Gourmet Cuisine",
//     description: "Award-winning chef's signature dishes",
//   },
//   {
//     id: 12,
//     src: "/Newgallery/Magnoliya_1080p (1).mp4",
//     category: "dining",
//     type: "video",
//     title: "Culinary Experience Tour",
//     description: "Behind the scenes of our kitchen and dining",
//     thumbnail:
//       "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
//   },
//   {
//     id: 13,
//     src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     category: "dining",
//     type: "image",
//     title: "Private Dining Room",
//     description: "Intimate dining space for special occasions",
//   },

//   // Venues
//   {
//     id: 14,
//     src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
//     category: "venues",
//     type: "image",
//     title: "Grand Ballroom",
//     description: "Majestic ballroom for large celebrations",
//   },
//   {
//     id: 15,
//     src: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
//     category: "venues",
//     type: "image",
//     title: "Rooftop Terrace",
//     description: "Open-air terrace with city views",
//   },
//   {
//     id: 16,
//     src: "/Newgallery/Magnoliya_1080p (1).mp4",
//     category: "venues",
//     type: "video",
//     title: "Complete Venue Tour",
//     description: "Full walkthrough of all our venue spaces",
//     thumbnail:
//       "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//   },
//   {
//     id: 17,
//     src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     category: "venues",
//     type: "image",
//     title: "Garden Pavilion",
//     description: "Outdoor pavilion surrounded by lush gardens",
//   },
// ];

// const categories = [
//   { id: "all", name: "All Categories" },
//   { id: "weddings", name: "Weddings" },
//   { id: "corporate", name: "Corporate Events" },
//   { id: "dining", name: "Dining" },
//   { id: "venues", name: "Venues" },
// ];

// const HotelGallery = () => {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [lightboxIndex, setLightboxIndex] = useState(-1);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [imagesLoaded, setImagesLoaded] = useState(0);

//   const galleryRef = useRef(null);

//   // Filter items based on category
//   const filteredItems =
//     activeCategory === "all"
//       ? mediaItems
//       : mediaItems.filter((item) => item.category === activeCategory);

//   // Simulate loading
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   // Handle category change with animation
//   const handleCategoryChange = (categoryId) => {
//     setActiveCategory(categoryId);
//     setIsMobileFiltersOpen(false);
//   };

//   // Handle media click
//   const handleMediaClick = (index, type) => {
//     if (type === "image") {
//       setLightboxIndex(index);
//     } else {
//       setIsVideoPlaying(index);
//     }
//   };

//   // Lightbox navigation
//   const nextImage = () => {
//     const imageItems = filteredItems.filter((item) => item.type === "image");
//     setLightboxIndex((prev) => (prev + 1) % imageItems.length);
//   };

//   const prevImage = () => {
//     const imageItems = filteredItems.filter((item) => item.type === "image");
//     setLightboxIndex(
//       (prev) => (prev - 1 + imageItems.length) % imageItems.length
//     );
//   };

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (lightboxIndex >= 0) {
//         if (e.key === "ArrowRight") nextImage();
//         if (e.key === "ArrowLeft") prevImage();
//         if (e.key === "Escape") setLightboxIndex(-1);
//       }
//       if (isVideoPlaying !== false && e.key === "Escape") {
//         setIsVideoPlaying(false);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [lightboxIndex, isVideoPlaying]);

//   //   if (isLoading) {
//   //     return (
//   //       <div className="hotelgallery-loading">
//   //         <div className="hotelgallery-loading-content">
//   //           <div className="hotelgallery-loading-spinner"></div>
//   //           <p className="hotelgallery-loading-text">Loading Gallery...</p>
//   //         </div>
//   //       </div>
//   //     );
//   //   }

//   return (
//     <div className="hotelgallery-container">
//       {/* Header Section */}
//       <div className="hotelgallery-header">
//         <div className="hotelgallery-header-content">
//           {/* <h1 className="hotelgallery-header-title">Gallery</h1> */}
//           <div className="hotelgallery-header-divider"></div>
//           {/* <p className="hotelgallery-header-description">
//             Explore our stunning venues and memorable moments captured in
//             exquisite detail
//           </p> */}
//         </div>
//       </div>

//       {/* Filter Section */}
//       <div className="hotelgallery-filter-section">
//         <div className="hotelgallery-filter-container">
//           {/* Mobile Filter Toggle */}
//           <button
//             onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
//             className="hotelgallery-mobile-filter-toggle"
//           >
//             <Filter size={20} />
//             <span>Filter Categories</span>
//           </button>

//           {/* Filter Buttons */}
//           <div
//             className={`hotelgallery-filter-buttons ${
//               isMobileFiltersOpen ? "hotelgallery-mobile-open" : ""
//             }`}
//           >
//             <div className="hotelgallery-filter-buttons-container">
//               {categories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => handleCategoryChange(category.id)}
//                   className={`hotelgallery-filter-button ${
//                     activeCategory === category.id ? "hotelgallery-active" : ""
//                   }`}
//                 >
//                   {category.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <div className="hotelgallery-grid-section">
//         <div className="hotelgallery-grid-container">
//           <div className="hotelgallery-grid">
//             {filteredItems.map((item, index) => (
//               <div
//                 key={item.id}
//                 className="hotelgallery-item"
//                 onClick={() => handleMediaClick(index, item.type)}
//               >
//                 <div className="hotelgallery-item-image-container">
//                   <img
//                     src={item.type === "video" ? item.thumbnail : item.src}
//                     alt={item.title}
//                     className="hotelgallery-item-image"
//                     loading="lazy"
//                   />

//                   {/* Overlay */}
//                   <div className="hotelgallery-item-overlay">
//                     <div className="hotelgallery-item-overlay-content">
//                       {item.type === "video" ? (
//                         <div>
//                           <PlayCircle
//                             size={48}
//                             className="hotelgallery-overlay-icon"
//                           />
//                           <p className="hotelgallery-overlay-text">
//                             Play Video
//                           </p>
//                         </div>
//                       ) : (
//                         <div>
//                           <ZoomIn
//                             size={32}
//                             className="hotelgallery-overlay-icon"
//                           />
//                           <p className="hotelgallery-overlay-text">
//                             View Full Size
//                           </p>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Video Badge */}
//                   {item.type === "video" && (
//                     <div className="hotelgallery-video-badge">Video</div>
//                   )}
//                 </div>

//                 <div className="hotelgallery-item-content">
//                   <h3 className="hotelgallery-item-title">{item.title}</h3>
//                   <p className="hotelgallery-item-description">
//                     {item.description}
//                   </p>
//                   <div className="hotelgallery-item-footer">
//                     <span className="hotelgallery-item-category">
//                       {categories.find((cat) => cat.id === item.category)?.name}
//                     </span>
//                     <div className="hotelgallery-item-icon">
//                       {item.type === "video" ? (
//                         <PlayCircle size={16} />
//                       ) : (
//                         <ZoomIn size={16} />
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Image Lightbox */}
//       {lightboxIndex >= 0 && (
//         <div
//           className="hotelgallery-lightbox"
//           onClick={() => setLightboxIndex(-1)}
//         >
//           <div
//             className="hotelgallery-lightbox-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setLightboxIndex(-1)}
//               className="hotelgallery-lightbox-close"
//             >
//               <X size={24} />
//             </button>

//             {/* Navigation Buttons */}
//             <button
//               onClick={prevImage}
//               className="hotelgallery-lightbox-nav hotelgallery-lightbox-nav-prev"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button
//               onClick={nextImage}
//               className="hotelgallery-lightbox-nav hotelgallery-lightbox-nav-next"
//             >
//               <ChevronRight size={24} />
//             </button>

//             {/* Image */}
//             <img
//               src={
//                 filteredItems.filter((item) => item.type === "image")[
//                   lightboxIndex
//                 ]?.src
//               }
//               alt={
//                 filteredItems.filter((item) => item.type === "image")[
//                   lightboxIndex
//                 ]?.title
//               }
//               className="hotelgallery-lightbox-image"
//             />

//             {/* Image Info */}
//             <div className="hotelgallery-lightbox-info">
//               <h3 className="hotelgallery-lightbox-info-title">
//                 {
//                   filteredItems.filter((item) => item.type === "image")[
//                     lightboxIndex
//                   ]?.title
//                 }
//               </h3>
//               <p className="hotelgallery-lightbox-info-description">
//                 {
//                   filteredItems.filter((item) => item.type === "image")[
//                     lightboxIndex
//                   ]?.description
//                 }
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Video Modal */}
//       {isVideoPlaying !== false && (
//         <div
//           className="hotelgallery-video-modal"
//           onClick={() => setIsVideoPlaying(false)}
//         >
//           <div
//             className="hotelgallery-video-modal-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setIsVideoPlaying(false)}
//               className="hotelgallery-video-modal-close"
//             >
//               <X size={24} />
//             </button>

//             {/* Video */}
//             <iframe
//               src={`${filteredItems[isVideoPlaying].src}?autoplay=1&title=0&byline=0&portrait=0`}
//               className="hotelgallery-video-modal-iframe"
//               allow="autoplay; fullscreen; picture-in-picture"
//               allowFullScreen
//             />

//             {/* Video Info */}
//             <div className="hotelgallery-video-modal-info">
//               <h3 className="hotelgallery-video-modal-info-title">
//                 {filteredItems[isVideoPlaying].title}
//               </h3>
//               <p className="hotelgallery-video-modal-info-description">
//                 {filteredItems[isVideoPlaying].description}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HotelGallery;

import { ChevronLeft, ChevronRight, Filter, X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";
import "./Styles/GalleryMain.css";

const mediaItems = [
  // Weddings
  {
    id: 1,
    src: "./gallery/1.jpg",
    category: "weddings",
    type: "image",
    title: "Elegant Wedding Reception",
    description: "Luxurious ballroom setup with crystal chandeliers",
  },
  {
    id: 2,
    src: "./gallery/2.jpg",
    category: "weddings",
    type: "image",
    title: "Bride & Groom First Dance",
    description: "Romantic first dance in our grand ballroom",
  },
  {
    id: 3,
    src: "./gallery/3.jpg",
    category: "weddings",
    type: "image",
    title: "Romantic Outdoor Ceremony",
    description: "Garden ceremony with floral arrangements",
  },
  {
    id: 4,
    src: "./gallery/4.jpg",
    category: "weddings",
    type: "image",
    title: "Wedding Cake Display",
    description: "Exquisite wedding cake presentation",
  },

  // Corporate Events
  {
    id: 5,
    src: "./gallery/5.jpg",
    category: "corporate",
    type: "image",
    title: "Conference Setup",
    description: "Professional meeting room with modern AV equipment",
  },
  {
    id: 6,
    src: "./gallery/6.jpg",
    category: "corporate",
    type: "image",
    title: "Business Meeting",
    description: "Executive boardroom for important meetings",
  },
  {
    id: 7,
    src: "./gallery/7.jpg",
    category: "corporate",
    type: "image",
    title: "Corporate Gala",
    description: "Elegant corporate gala dinner setup",
  },

  // Dining
  {
    id: 8,
    src: "./gallery/8.jpg",
    category: "dining",
    type: "image",
    title: "Gourmet Cuisine",
    description: "Award-winning chef's signature dishes",
  },
  {
    id: 9,
    src: "./gallery/9.jpg",
    category: "dining",
    type: "image",
    title: "Private Dining Room",
    description: "Intimate dining space for special occasions",
  },

  // Venues
  {
    id: 10,
    src: "./gallery/10.jpg",
    category: "venues",
    type: "image",
    title: "Grand Ballroom",
    description: "Majestic ballroom for large celebrations",
  },
  {
    id: 11,
    src: "./gallery/11.jpg",
    category: "venues",
    type: "image",
    title: "Rooftop Terrace",
    description: "Open-air terrace with city views",
  },
  {
    id: 12,
    src: "./gallery/12.jpg",
    category: "venues",
    type: "image",
    title: "Garden Pavilion",
    description: "Outdoor pavilion surrounded by lush gardens",
  },
];

const categories = [
  { id: "all", name: "All Categories" },
  { id: "weddings", name: "Weddings" },
  { id: "corporate", name: "Corporate Events" },
  { id: "dining", name: "Dining" },
  { id: "venues", name: "Venues" },
];

const HotelGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Filter items based on category
  const filteredItems =
    activeCategory === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeCategory);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle category change with animation
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setIsMobileFiltersOpen(false);
  };

  // Handle media click
  const handleMediaClick = (index) => {
    setLightboxIndex(index);
  };

  // Lightbox navigation
  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setLightboxIndex(
      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex >= 0) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") setLightboxIndex(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="hotelgallery-container">
      {/* Header Section */}
      <div className="hotelgallery-header">
        <div className="hotelgallery-header-content">
          <div className="hotelgallery-header-divider"></div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="hotelgallery-filter-section">
        <div className="hotelgallery-filter-container">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="hotelgallery-mobile-filter-toggle"
          >
            <Filter size={20} />
            <span>Filter Categories</span>
          </button>

          {/* Filter Buttons */}
          <div
            className={`hotelgallery-filter-buttons ${
              isMobileFiltersOpen ? "hotelgallery-mobile-open" : ""
            }`}
          >
            <div className="hotelgallery-filter-buttons-container">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`hotelgallery-filter-button ${
                    activeCategory === category.id ? "hotelgallery-active" : ""
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="hotelgallery-grid-section">
        <div className="hotelgallery-grid-container">
          <div className="hotelgallery-grid">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="hotelgallery-item"
                onClick={() => handleMediaClick(index)}
              >
                <div className="hotelgallery-item-image-container">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="hotelgallery-item-image"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="hotelgallery-item-overlay">
                    <div className="hotelgallery-item-overlay-content">
                      <ZoomIn size={32} className="hotelgallery-overlay-icon" />
                      <p className="hotelgallery-overlay-text">
                        View Full Size
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hotelgallery-item-content">
                  <h3 className="hotelgallery-item-title">{item.title}</h3>
                  <p className="hotelgallery-item-description">
                    {item.description}
                  </p>
                  <div className="hotelgallery-item-footer">
                    <span className="hotelgallery-item-category">
                      {categories.find((cat) => cat.id === item.category)?.name}
                    </span>
                    <div className="hotelgallery-item-icon">
                      <ZoomIn size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {lightboxIndex >= 0 && (
        <div
          className="hotelgallery-lightbox"
          onClick={() => setLightboxIndex(-1)}
        >
          <div
            className="hotelgallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(-1)}
              className="hotelgallery-lightbox-close"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="hotelgallery-lightbox-nav hotelgallery-lightbox-nav-prev"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="hotelgallery-lightbox-nav hotelgallery-lightbox-nav-next"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <img
              src={filteredItems[lightboxIndex]?.src}
              alt={filteredItems[lightboxIndex]?.title}
              className="hotelgallery-lightbox-image"
            />

            {/* Image Info */}
            <div className="hotelgallery-lightbox-info">
              <h3 className="hotelgallery-lightbox-info-title">
                {filteredItems[lightboxIndex]?.title}
              </h3>
              <p className="hotelgallery-lightbox-info-description">
                {filteredItems[lightboxIndex]?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelGallery;
