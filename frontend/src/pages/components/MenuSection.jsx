// import React, { useEffect, useRef, useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import './Styles/MenuSection.css';

// const MenuSection = () => {
//   const scrollContainerRef = useRef(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   const menuItems = [
//     {
//       id: 1,
//       title: 'Buffet Family',
//       image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       id: 2,
//       title: 'Office Catering',
//       image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       id: 3,
//       title: 'Cultural Celebrations',
//       image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       id: 4,
//       title: 'Wedding Banquet',
//       image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       id: 5,
//       title: 'Corporate Events',
//       image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       id: 6,
//       title: 'Fine Dining',
//       image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
//     }
//   ];

//   const checkScrollButtons = () => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       setCanScrollLeft(container.scrollLeft > 0);
//       setCanScrollRight(
//         container.scrollLeft < container.scrollWidth - container.clientWidth - 1
//       );
//     }
//   };

//   const scrollLeft = () => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const cardWidth = container.querySelector('.menu-card').offsetWidth;
//       const gap = 24; // 1.5rem gap
//       container.scrollBy({
//         left: -(cardWidth + gap),
//         behavior: 'smooth'
//       });
//     }
//   };

//   const scrollRight = () => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const cardWidth = container.querySelector('.menu-card').offsetWidth;
//       const gap = 24; // 1.5rem gap
//       container.scrollBy({
//         left: cardWidth + gap,
//         behavior: 'smooth'
//       });
//     }
//   };

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       checkScrollButtons();
//       container.addEventListener('scroll', checkScrollButtons);
//       window.addEventListener('resize', checkScrollButtons);
      
//       return () => {
//         container.removeEventListener('scroll', checkScrollButtons);
//         window.removeEventListener('resize', checkScrollButtons);
//       };
//     }
//   }, []);

//   useEffect(() => {
//     // GSAP Animation
//     if (typeof window !== 'undefined' && window.gsap) {
//       const tl = window.gsap.timeline();
      
//       tl.from('.menu-header', {
//         y: 50,
//         opacity: 0,
//         duration: 0.8,
//         ease: 'power2.out'
//       })
//       .from('.menu-card', {
//         y: 80,
//         opacity: 0,
//         duration: 0.6,
//         stagger: 0.15,
//         ease: 'power2.out'
//       }, '-=0.4')
//       .from('.scroll-button', {
//         scale: 0,
//         opacity: 0,
//         duration: 0.4,
//         stagger: 0.1,
//         ease: 'back.out(1.7)'
//       }, '-=0.3');
//     }
//   }, []);

//   return (
//     <section className="menu-section">
//       <div className="menu-container">
//         <div className="menu-header">
//           <h2 className="menu-title">Our Menus</h2>
//           <p className="menu-subtitle">SELECT FROM THE FOLLOWING MENU OPTIONS</p>
//         </div>
        
//         <div className="menu-scroll-wrapper">
//           <div 
//             className="menu-scroll-container" 
//             ref={scrollContainerRef}
//           >
//             {menuItems.map((item) => (
//               <div key={item.id} className="menu-card">
//                 <div className="menu-card-image">
//                   <img src={item.image} alt={item.title} loading="lazy" />
//                   <div className="menu-card-overlay">
//                     <h3 className="menu-card-title">{item.title}</h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="scroll-controls">
//             <button 
//               className={`scroll-button scroll-left ${!canScrollLeft ? 'disabled' : ''}`}
//               onClick={scrollLeft}
//               disabled={!canScrollLeft}
//               aria-label="Scroll left"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button 
//               className={`scroll-button scroll-right ${!canScrollRight ? 'disabled' : ''}`}
//               onClick={scrollRight}
//               disabled={!canScrollRight}
//               aria-label="Scroll right"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Load GSAP */}
//       <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
//     </section>
//   );
// };

// export default MenuSection;
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import './Styles/MenuSection.css';

const MenuSection = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const menuItems = [
    {
      id: 1,
      title: 'Buffet Family',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Office Catering',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Cultural Celebrations',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Wedding Banquet',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Corporate Events',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Fine Dining',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    }
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.querySelector('.menu-card').offsetWidth;
      const gap = 24; // 1.5rem gap
      container.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.querySelector('.menu-card').offsetWidth;
      const gap = 24; // 1.5rem gap
      container.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      
      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  useEffect(() => {
    // GSAP Animation
    if (typeof window !== 'undefined' && window.gsap) {
      const tl = window.gsap.timeline();
      
      tl.from('.menu-header', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      })
      .from('.menu-card', {
        y: 80,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
      }, '-=0.4')
      .from('.scroll-button', {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }, '-=0.3');
    }
  }, []);

  return (
    <section className="menu-section">
      <div className="menu-container">
        <div className="menu-header">
          <h2 className="menu-title">Our Menus</h2>
          <p className="menu-subtitle">SELECT FROM THE FOLLOWING MENU OPTIONS</p>
        </div>
        
        <div className="menu-content-wrapper">
          <div className="scroll-controls">
            <button 
              className={`scroll-button scroll-left ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className={`scroll-button scroll-right ${!canScrollRight ? 'disabled' : ''}`}
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="menu-scroll-wrapper">
            <div 
              className="menu-scroll-container" 
              ref={scrollContainerRef}
            >
              {menuItems.map((item) => (
                <div key={item.id} className="menu-card">
                  <div className="menu-card-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="menu-card-overlay">
                      <h3 className="menu-card-title">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Load GSAP */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    </section>
  );
};

export default MenuSection;