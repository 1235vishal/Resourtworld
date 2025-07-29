
// const OurClients = () => {
//   // Array of client data - replace placeholder image URLs with your actual client logos
//   const clients = [
//     { name: "Unstage", logo: "./ourclients/1.png" },
//     { name: "BEST", logo: "./ourclients/2.png" },
//     { name: "RETRO", logo: "./ourclients/3.png" },
//     { name: "RETRO", logo: "./ourclients/4.png" },
//     { name: "RETRO", logo: "./ourclients/5.png" },
//       { name: "RETRO", logo: "./ourclients/6.png" },
//       { name: "Unstage", logo: "./ourclients/7.png" },
//       { name: "BEST", logo: "./ourclients/8.png" },
//       { name: "RETRO", logo: "./ourclients/9.png" },
//       { name: "RETRO", logo: "./ourclients/10.png" },
//       { name: "RETRO", logo: "./ourclients/11.png" },
//       { name: "RETRO", logo: "./ourclients/12.png" },
//   ];

//   return (
//     <div style={styles.container}>
//       <div style={styles.content}>
//         <h2 style={styles.heading}>Our Clients</h2>
//         <p style={styles.subHeading}>WE HAVE OVER 35 YEARS OF EXPERIENCE</p>
        
//         <div className="ourclinetlogo" style={styles.grid}>
//           {clients.map((client, index) => (
//             <div key={index} style={styles.card}>
//               <img 
//                 src={client.logo} 
//                 alt={client.name} 
//                 style={styles.logo}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: "100%",
//     padding: "40px 20px",
//     boxSizing: "border-box",
//     backgroundColor: "#FFFFFF",
//     fontFamily: "'Arial', sans-serif",
//   },
//   content: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },
//   heading: {
//     fontSize: "42px",
//     fontWeight: "500",
//     marginBottom: "10px",
//     textAlign: "left",
    
      
//   },
//   subHeading: {
//     // fontSize: "16px",
//     // marginBottom: "30px",
//     // textAlign: "left",
//     // color: "#666",
//     // textTransform: "uppercase",
//       // letterSpacing: "1px",
//       fontstyle: "italic",
//       color: "#aaa",
//       fontSize: "14px",
//       marginTop: "8px",
//       matterSpacing: "1px",
//       textUppercase: "uppercase",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(236px, 0fr))",
//     },

//   card: {
//     // backgroundColor: "#fff",
//     // borderRadius: "8px",
//     padding: "20px",
//     textAlign: "center",
//     // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     transition: "transform 0.3s ease",
//     aspectRatio: "1/1",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     '&:hover': {
//       transform: "translateY(-5px)",
//     },
//   },
//   logo: {
//     maxWidth: "80%",
//     maxHeight: "80%",
//     objectFit: "contain",
//     filter: "grayscale(100%) contrast(60%)",
//     transition: "filter 0.3s ease",
//     '&:hover': {
//       filter: "grayscale(0%) contrast(100%)",
//     },
//   },
// };

// export default OurClients;


const OurClients = () => {
  const clients = [
    { name: "Unstage", logo: "./ourclients/1.png" },
    { name: "BEST", logo: "./ourclients/2.png" },
    { name: "RETRO", logo: "./ourclients/3.png" },
    { name: "RETRO", logo: "./ourclients/4.png" },
    { name: "RETRO", logo: "./ourclients/5.png" },
    { name: "RETRO", logo: "./ourclients/6.png" },
    { name: "Unstage", logo: "./ourclients/7.png" },
    { name: "BEST", logo: "./ourclients/8.png" },
    { name: "RETRO", logo: "./ourclients/9.png" },
    { name: "RETRO", logo: "./ourclients/10.png" },
    { name: "RETRO", logo: "./ourclients/11.png" },
    { name: "RETRO", logo: "./ourclients/12.png" },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.header}>
          <h2 style={styles.heading}>Our Clients</h2>
          <p style={styles.subHeading}>WE HAVE OVER 35 YEARS OF EXPERIENCE</p>
        </div>
        
        <div style={styles.grid}>
          {clients.map((client, index) => (
            <div key={index} style={styles.card}>
              <img 
                src={client.logo} 
                alt={client.name} 
                style={styles.logo}
                loading="lazy" // For better performance
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    padding: "40px 20px",
    boxSizing: "border-box",
    backgroundColor: "#FFFFFF",
    fontFamily: "'Arial', sans-serif",
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "40px",
    padding: "0 15px",
  },
  heading: {
    fontSize: "clamp(28px, 4vw, 42px)", // Responsive font size
    fontWeight: "500",
    marginBottom: "8px",
    textAlign: "left",
    color: "#333",
    lineHeight: "1.2",
  },
  subHeading: {
    fontStyle: "italic",
    color: "#aaa",
    fontSize: "clamp(12px, 2vw, 14px)",
    marginTop: "8px",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: "15px",
    alignItems: "center",
    justifyItems: "center",
  },
  card: {
    width: "100%",
    padding: "15px",
    textAlign: "center",
    transition: "all 0.3s ease",
    aspectRatio: "1/1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    '&:hover': {
      transform: "scale(1.03)",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    },
  },
  logo: {
    width: "80%",
    height: "80%",
    objectFit: "contain",
    filter: "grayscale(100%)",
    opacity: "0.8",
    transition: "all 0.3s ease",
    '&:hover': {
      filter: "grayscale(0%)",
      opacity: "1",
    },
  },
  // Media queries for responsiveness
  '@media (max-width: 768px)': {
    grid: {
      gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
      gap: "10px",
    },
    card: {
      padding: "10px",
    },
    container: {
      padding: "30px 15px",
    },
  },
  '@media (max-width: 480px)': {
    grid: {
      gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
      gap: "8px",
    },
    heading: {
      fontSize: "24px",
    },
    subHeading: {
      fontSize: "11px",
    },
  },
};

export default OurClients;