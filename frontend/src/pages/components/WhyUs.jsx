// import './Styles/WhyUs.css';

// const WhyUs = () => {
//   const features = [
//     {
//       icon: (
//         <svg viewBox="0 0 64 64" className="feature-icon">
//           <rect x="8" y="20" width="48" height="32" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <rect x="12" y="24" width="40" height="24" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <circle cx="16" cy="28" r="2" fill="currentColor"/>
//           <circle cx="20" cy="28" r="2" fill="currentColor"/>
//           <rect x="24" y="26" width="8" height="4" fill="currentColor"/>
//           <rect x="36" y="26" width="12" height="4" fill="currentColor"/>
//           <rect x="16" y="34" width="32" height="2" fill="currentColor"/>
//           <rect x="16" y="38" width="24" height="2" fill="currentColor"/>
//           <rect x="16" y="42" width="28" height="2" fill="currentColor"/>
//         </svg>
//       ),
//       title: "Exclusive Design",
//       description: "Apparently we had reached a great height in the atmosphere"
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 64 64" className="feature-icon">
//           <circle cx="32" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <path d="M20 20 Q32 8 44 20" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <path d="M24 24 Q32 16 40 24" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <rect x="28" y="32" width="8" height="16" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <rect x="26" y="48" width="12" height="8" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <circle cx="29" cy="52" r="1.5" fill="currentColor"/>
//           <circle cx="35" cy="52" r="1.5" fill="currentColor"/>
//         </svg>
//       ),
//       title: "Client Focused",
//       description: "Apparently we had reached a great height in the atmosphere"
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 64 64" className="feature-icon">
//           <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <circle cx="32" cy="32" r="16" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <rect x="28" y="16" width="8" height="12" fill="currentColor"/>
//           <rect x="24" y="28" width="16" height="2" fill="currentColor"/>
//           <rect x="26" y="32" width="12" height="2" fill="currentColor"/>
//           <rect x="28" y="36" width="8" height="2" fill="currentColor"/>
//         </svg>
//       ),
//       title: "Fresh Ingredients",
//       description: "Apparently we had reached a great height in the atmosphere"
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 64 64" className="feature-icon">
//           <circle cx="20" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <circle cx="44" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <circle cx="32" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <path d="M20 32 L32 32 L44 32" stroke="currentColor" strokeWidth="2"/>
//           <polygon points="16,20 20,16 24,20" fill="currentColor"/>
//           <polygon points="40,20 44,16 48,20" fill="currentColor"/>
//           <polygon points="28,36 32,32 36,36" fill="currentColor"/>
//         </svg>
//       ),
//       title: "Diverse Client Base",
//       description: "Apparently we had reached a great height in the atmosphere"
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 64 64" className="feature-icon">
//           <ellipse cx="32" cy="42" rx="20" ry="12" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <ellipse cx="32" cy="38" rx="16" ry="8" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <circle cx="32" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <path d="M28 28 Q32 24 36 28" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <rect x="30" y="16" width="4" height="8" fill="currentColor"/>
//         </svg>
//       ),
//       title: "Responsible Sourcing",
//       description: "Apparently we had reached a great height in the atmosphere"
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 64 64" className="feature-icon">
//           <circle cx="32" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <path d="M26 26 L32 32 L38 26" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <rect x="24" y="32" width="16" height="20" fill="none" stroke="currentColor" strokeWidth="2"/>
//           <rect x="28" y="36" width="8" height="4" fill="currentColor"/>
//           <rect x="26" y="42" width="4" height="4" fill="currentColor"/>
//           <rect x="34" y="42" width="4" height="4" fill="currentColor"/>
//           <rect x="30" y="48" width="4" height="2" fill="currentColor"/>
//         </svg>
//       ),
//       title: "Flexible Services",
//       description: "Apparently we had reached a great height in the atmosphere"
//     }
//   ];

//   return (
//       <section className="why-us-section">
//                 <div className="top-background-image">
//         <img 
//           src="./imgi_40_h1_bg-1.jpg"
//           alt="Background"
//           className="top-bg-image"
//         />
//       </div>

//       <div className="container">
//         <div className="why-us-header">
//           <div className="header-content">
//             <h2 className="why-us-title">Why Us</h2>
//             <p className="why-us-subtitle">FOR ALL YOUR CATERING NEEDS</p>
//             <div className="underline-arrow"></div>
//           </div>
//         </div>
        
//         <div className="features-grid">
//           {features.map((feature, index) => (
//             <div key={index} className="feature-card">
//               <div className="feature-icon-wrapper">
//                 {feature.icon}
//               </div>
//               <div className="feature-content">
//                 <h3 className="feature-title">{feature.title}</h3>
//                 <p className="feature-description">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyUs;

import './Styles/WhyUs.css';

const WhyUs = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 64 64" className="feature-icon">
          <rect x="12" y="16" width="40" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="16" y="20" width="32" height="4" fill="currentColor"/>
          <rect x="12" y="32" width="40" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="40" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="40" r="2" fill="currentColor"/>
          <circle cx="40" cy="40" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="40" cy="40" r="2" fill="currentColor"/>
          <rect x="22" cy="46" width="20" height="4" fill="currentColor"/>
        </svg>
      ),
      title: "Multicuisine Restaurants",
      description: "International flavors crafted by expert chefs"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" className="feature-icon">
          <path d="M32 12 L32 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 32 L52 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M22 22 L42 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M42 22 L22 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M32 12 A20 20 0 0 1 52 32" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M32 12 A20 20 0 0 0 12 32" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "Panoramic Water View",
      description: "Breathtaking waterfront vistas from every room"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" className="feature-icon">
          <rect x="16" y="16" width="32" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M32 20 L32 44" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 32 L44 32" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="32" r="4" fill="currentColor"/>
          <rect x="28" y="28" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "State-of-the-Art AV & Lighting",
      description: "Premium audio-visual technology for events"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" className="feature-icon">
          <path d="M12 32 L52 32" stroke="currentColor" strokeWidth="2"/>
          <path d="M32 12 L32 52" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 20 L44 44" stroke="currentColor" strokeWidth="2"/>
          <path d="M44 20 L20 44" stroke="currentColor" strokeWidth="2"/>
          <circle cx="26" cy="26" r="2" fill="currentColor"/>
          <circle cx="38" cy="26" r="2" fill="currentColor"/>
          <circle cx="26" cy="38" r="2" fill="currentColor"/>
          <circle cx="38" cy="38" r="2" fill="currentColor"/>
        </svg>
      ),
      title: "Terrace & Garden Venues",
      description: "Beautiful outdoor spaces for special occasions"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" className="feature-icon">
          <rect x="12" y="12" width="40" height="40" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="20" y="20" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 12 L52 52" stroke="currentColor" strokeWidth="2"/>
          <path d="M52 12 L12 52" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="32" r="4" fill="currentColor"/>
          <rect x="30" y="18" width="4" height="8" fill="currentColor"/>
          <rect x="30" y="38" width="4" height="8" fill="currentColor"/>
          <rect x="18" y="30" width="8" height="4" fill="currentColor"/>
          <rect x="38" y="30" width="8" height="4" fill="currentColor"/>
        </svg>
      ),
      title: "End-to-End Event Management",
      description: "Complete planning and coordination services"
    }
  ];

  return (
    <section className="why-us-section">
      <div className="top-background-image">
        <img 
          src="./imgi_40_h1_bg-1.jpg"
          alt="Background"
          className="top-bg-image"
        />
      </div>

      <div className="container">
        <div className="why-us-header">
          <div className="header-content">
            <h2 className="why-us-title">Why Choose Us</h2>
            <p className="why-us-subtitle">PREMIUM HOTEL AMENITIES</p>
            <div className="underline-arrow"></div>
          </div>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;