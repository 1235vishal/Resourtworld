// // import { ChevronLeft, ChevronRight } from 'lucide-react';
// // import { useRef, useState } from 'react';
// // import './Styles/gallery.css';

// // const Gallery = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const scrollContainerRef = useRef(null);

// //   // Sample wedding images - replace with your actual images
// //   const images = [
// //     {
// //       id: 1,
// //       src: "./gallery/1.jpg",
// //       alt: "Wedding Ceremony",
// //       title: "Emily & Brad Wedding"
// //     },
// //     {
// //       id: 2,
// //       src: "./gallery/2.jpg",
// //       alt: "Wedding Reception",
// //       title: "Sarah & Mike Wedding"
// //     },
// //     {
// //       id: 3,
// //       src: "./gallery/3.jpg",
// //       alt: "Outdoor Wedding",
// //       title: "Jessica & David Wedding"
// //     },
// //     {
// //       id: 4,
// //       src: "./gallery/4.jpg",
// //       alt: "Beach Wedding",
// //       title: "Anna & Tom Wedding"
// //     },
// //     {
// //       id: 5,
// //       src: "./gallery/5.jpg",
// //       alt: "Garden Wedding",
// //       title: "Lisa & John Wedding"
// //     },
// //     {
// //       id: 6,
// //       src: "./gallery/6.jpg",
// //       alt: "Vintage Wedding",
// //       title: "Rachel & Chris Wedding"
// //     }
// //   ];

// //   const scrollLeft = () => {
// //     if (currentIndex > 0) {
// //       setCurrentIndex(currentIndex - 1);
// //     } else {
// //       // Go to last image for infinite scroll
// //       setCurrentIndex(images.length - 1);
// //     }
// //   };

// //   const scrollRight = () => {
// //     if (currentIndex < images.length - 1) {
// //       setCurrentIndex(currentIndex + 1);
// //     } else {
// //       // Reset to beginning for infinite scroll
// //       setCurrentIndex(0);
// //     }
// //   };

// //   return (
// //     <div className="gallery-section">
// //       <div className="gallery-header">
// //         <h2 className="gallery-title">Gallery</h2>
// //         <p className="gallery-subtitle">CHECK OUR RECENT PROJECTS</p>
// //         <button className="see-full-gallery">See Full Gallery</button>
// //       </div>
      
// //       <div className="gallery-container">
// //         <button 
// //           className="gallery-nav-btn gallery-nav-left"
// //           onClick={scrollLeft}
// //         >
// //           <ChevronLeft size={24} />
// //         </button>
        
// //         <div className="gallery-scroll-container" ref={scrollContainerRef}>
// //           <div className="gallery-images">
// //             {images.map((image, index) => {
// //               let positionClass = '';
// //               const diff = index - currentIndex;
              
// //               if (diff === 0) {
// //                 positionClass = 'active';
// //               } else if (diff === -1 || (currentIndex === 0 && index === images.length - 1)) {
// //                 positionClass = 'adjacent left';
// //               } else if (diff === 1 || (currentIndex === images.length - 1 && index === 0)) {
// //                 positionClass = 'adjacent right';
// //               } else {
// //                 positionClass = 'distant';
// //               }
              
// //               return (
// //                 <div 
// //                   key={image.id} 
// //                   className={`gallery-item ${positionClass}`}
// //                 >
// //                   <img 
// //                     src={image.src} 
// //                     alt={image.alt}
// //                     className="gallery-image"
// //                   />
// //                   <div className="gallery-overlay">
// //                     <h3 className="gallery-image-title">{image.title}</h3>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
        
// //         <button 
// //           className="gallery-nav-btn gallery-nav-right"
// //           onClick={scrollRight}
// //         >
// //           <ChevronRight size={24} />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Gallery;

// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { useRef, useState } from 'react';
// import './Styles/gallery.css';

// const Gallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollContainerRef = useRef(null);

//   // Sample wedding images - replace with your actual images
//   const images = [
//     {
//       id: 1,
//       src: "./gallery/1.jpg",
//       alt: "Wedding Ceremony",
//       title: "Emily & Brad Wedding"
//     },
//     {
//       id: 2,
//       src: "./gallery/2.jpg",
//       alt: "Wedding Reception",
//       title: "Sarah & Mike Wedding"
//     },
//     {
//       id: 3,
//       src: "./gallery/3.jpg",
//       alt: "Outdoor Wedding",
//       title: "Jessica & David Wedding"
//     },
//     {
//       id: 4,
//       src: "./gallery/4.jpg",
//       alt: "Beach Wedding",
//       title: "Anna & Tom Wedding"
//     },
//     {
//       id: 5,
//       src: "./gallery/5.jpg",
//       alt: "Garden Wedding",
//       title: "Lisa & John Wedding"
//     },
//     {
//       id: 6,
//       src: "./gallery/6.jpg",
//       alt: "Vintage Wedding",
//       title: "Rachel & Chris Wedding"
//     }
//   ];

//   const scrollLeft = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const scrollRight = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Calculate the indices for left, center, and right images
//   const getAdjacentIndex = (offset) => {
//     return (currentIndex + offset + images.length) % images.length;
//   };

//   const leftIndex = getAdjacentIndex(-1);
//   const rightIndex = getAdjacentIndex(1);

//   return (
//     <div className="gallery-section">
//       <div className="gallery-header">
//         <div className="gallery-text">
//           <h2 className="gallery-title">Gallery</h2>
//           <p className="gallery-subtitle">CHECK OUR RECENT PROJECTS</p>
//         </div>
//         <button className="see-full-gallery">See Full Gallery</button>
//       </div>
      
//       <div className="gallery-container">
//         <button 
//           className="gallery-nav-btn gallery-nav-left"
//           onClick={scrollLeft}
//         >
//           <ChevronLeft size={24} />
//         </button>
        
//         <div className="gallery-scroll-container" ref={scrollContainerRef}>
//           <div className="gallery-images">
//             {/* Left image */}
//             <div className="gallery-item left">
//               <img 
//                 src={images[leftIndex].src} 
//                 alt={images[leftIndex].alt}
//                 className="gallery-image"
//               />
//               <div className="gallery-overlay">
//                 <h3 className="gallery-image-title">{images[leftIndex].title}</h3>
//               </div>
//             </div>
            
//             {/* Center (active) image */}
//             <div className="gallery-item active">
//               <img 
//                 src={images[currentIndex].src} 
//                 alt={images[currentIndex].alt}
//                 className="gallery-image"
//               />
//               <div className="gallery-overlay">
//                 <h3 className="gallery-image-title">{images[currentIndex].title}</h3>
//               </div>
//             </div>
            
//             {/* Right image */}
//             <div className="gallery-item right">
//               <img 
//                 src={images[rightIndex].src} 
//                 alt={images[rightIndex].alt}
//                 className="gallery-image"
//               />
//               <div className="gallery-overlay">
//                 <h3 className="gallery-image-title">{images[rightIndex].title}</h3>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <button 
//           className="gallery-nav-btn gallery-nav-right"
//           onClick={scrollRight}
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/gallery.css';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Sample wedding images - replace with your actual images
  const images = [
    {
      id: 1,
      src: "./gallery/1.jpg",
      alt: "Wedding Ceremony",
      title: "Emily & Brad Wedding"
    },
    {
      id: 2,
      src: "./gallery/2.jpg",
      alt: "Wedding Reception",
      title: "Sarah & Mike Wedding"
    },
    {
      id: 3,
      src: "./gallery/3.jpg",
      alt: "Outdoor Wedding",
      title: "Jessica & David Wedding"
    },
    {
      id: 4,
      src: "./gallery/4.jpg",
      alt: "Beach Wedding",
      title: "Anna & Tom Wedding"
    },
    {
      id: 5,
      src: "./gallery/5.jpg",
      alt: "Garden Wedding",
      title: "Lisa & John Wedding"
    },
    {
      id: 6,
      src: "./gallery/6.jpg",
      alt: "Vintage Wedding",
      title: "Rachel & Chris Wedding"
    }
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
                <h3 className="gallery-image-title">{images[leftIndex].title}</h3>
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
                <h3 className="gallery-image-title">{images[currentIndex].title}</h3>
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
                <h3 className="gallery-image-title">{images[rightIndex].title}</h3>
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