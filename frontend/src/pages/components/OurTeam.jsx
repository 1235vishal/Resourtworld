// import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// const OurTeam = () => {
//   const teamMembers = [
//     {
//       name: "William Doe",
//       position: "DESIGNER",
//       image: "./team/1.jpg",
//       social: {
//         twitter: "#",
//         linkedin: "#",
//         instagram: "#"
//       }
//     },
//     {
//       name: "Jack Black",
//       position: "DEVELOPER",
//       image: "./team/2.jpg",
//       social: {
//         twitter: "#",
//         github: "#"
//       }
//     },
//     {
//       name: "John Cena",
//       position: "MARKETING",
//       image: "./team/3.jpg",
//       social: {
//         linkedin: "#",
//         instagram: "#"
//       }
//     },
//     {
//       name: "Emma Doe",
//       position: "DESIGNER",
//       image: "./team/4.jpg",
//       social: {
//         twitter: "#",
//         linkedin: "#"
//       }
//     },
//     {
//       name: "Jane Watson",
//       position: "CEO",
//       image: "./team/5.jpg",
//       social: {
//         twitter: "#",
//         linkedin: "#",
//         github: "#"
//       }
//     },
//     {
//       name: "Kat Parry",
//       position: "HR",
//       image: "./team/6.jpg",
//       social: {
//         instagram: "#",
//         linkedin: "#"
//       }
//     },
//   ];

//   return (
//     <div style={styles.container}>
//       <div style={styles.content}>
//         <div style={styles.header}>
//           <h2 style={styles.heading}>Our Team</h2>
//           <p style={styles.subHeading}>MEET AWESOME PEOPLE</p>
//         </div>

//         <div style={styles.teamGrid}>
//           {teamMembers.map((member, index) => (
//             <div key={index} style={styles.memberCard}>
//               <div style={styles.imageWrapper}>
//                 <div style={styles.circleFrame}>
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     style={styles.memberImage}
//                     loading="lazy"
//                   />
//                 </div>
//                 <div style={styles.socialIcons}>
//                   {member.social.twitter && (
//                     <a href={member.social.twitter} style={styles.socialLink}>
//                       <FaTwitter style={styles.icon} />
//                     </a>
//                   )}
//                   {member.social.linkedin && (
//                     <a href={member.social.linkedin} style={styles.socialLink}>
//                       <FaLinkedin style={styles.icon} />
//                     </a>
//                   )}
//                   {member.social.instagram && (
//                     <a href={member.social.instagram} style={styles.socialLink}>
//                       <FaInstagram style={styles.icon} />
//                     </a>
//                   )}
//                   {member.social.github && (
//                     <a href={member.social.github} style={styles.socialLink}>
//                       <FaGithub style={styles.icon} />
//                     </a>
//                   )}
//                 </div>
//               </div>
//               <h3 style={styles.memberName}>{member.name}</h3>
//               <p style={styles.memberPosition}>{member.position}</p>
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
//     padding: "60px 20px",
//     boxSizing: "border-box",
//     backgroundColor: "#FFFFFF",
//     fontFamily: "'Helvetica Neue', Arial, sans-serif",
//   },
//   content: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },
//   header: {
//     textAlign: "left",
//     marginBottom: "50px",
//     paddingLeft: "20px",
//   },
//   heading: {
//     fontSize: "clamp(32px, 4vw, 42px)",
//     fontWeight: "600",
//     marginBottom: "10px",
//     color: "#333",
//     letterSpacing: "0.5px",
//   },
//   subHeading: {
//     fontSize: "clamp(14px, 2vw, 16px)",
//     color: "#999",
//     textTransform: "uppercase",
//     letterSpacing: "2px",
//     marginTop: "0",
//     fontStyle: "italic",
//     fontWeight: "300",
//   },
//   teamGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
//     gap: "40px",
//     justifyContent: "center",
//     padding: "0 20px",
//   },
//   memberCard: {
//     textAlign: "center",
//     transition: "all 0.3s ease",
//   },
//   imageWrapper: {
//     position: "relative",
//     marginBottom: "20px",
//     '&:hover $socialIcons': {
//       opacity: 1,
//       transform: "translateY(0)",
//     }
//   },
//   circleFrame: {
//     width: "200px",
//     height: "200px",
//     borderRadius: "50%",
//     overflow: "hidden",
//     margin: "0 auto",
//     border: "5px solid #f0f0f0",
//     boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//     transition: "all 0.3s ease",
//     '&:hover': {
//       transform: "scale(1.05)",
//       borderColor: "#ddd",
//     },
//   },
//   memberImage: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     transition: "transform 0.5s ease",
//     '&:hover': {
//       transform: "scale(1.1)",
//     },
//   },
//   socialIcons: {
//     position: "absolute",
//     bottom: "20px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     display: "flex",
//     gap: "10px",
//     opacity: 0,
//     transition: "all 0.3s ease",
//   },
//   socialLink: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "36px",
//     height: "36px",
//     borderRadius: "50%",
//     backgroundColor: "#fff",
//     color: "#555",
//     boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
//     transition: "all 0.3s ease",
//     '&:hover': {
//       backgroundColor: "#333",
//       color: "#fff",
//       transform: "translateY(-3px)",
//     },
//   },
//   icon: {
//     fontSize: "16px",
//   },
//   memberName: {
//     fontSize: "20px",
//     fontWeight: "600",
//     margin: "10px 0 5px",
//     color: "#333",
//     letterSpacing: "0.5px",
//   },
//   memberPosition: {
//     fontSize: "14px",
//     color: "#777",
//     marginBottom: "0",
//     textTransform: "uppercase",
//     letterSpacing: "1px",
//     fontWeight: "500",
//   },
//   // Media queries for responsiveness
//   '@media (max-width: 768px)': {
//     teamGrid: {
//       gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
//       gap: "30px",
//     },
//     circleFrame: {
//       width: "180px",
//       height: "180px",
//     },
//     container: {
//       padding: "40px 15px",
//     },
//     header: {
//       paddingLeft: "10px",
//     },
//   },
//   '@media (max-width: 576px)': {
//     teamGrid: {
//       gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
//       gap: "25px",
//     },
//     circleFrame: {
//       width: "150px",
//       height: "150px",
//     },
//     memberName: {
//       fontSize: "18px",
//     },
//     memberPosition: {
//       fontSize: "12px",
//     },
//   },
//   '@media (max-width: 480px)': {
//     teamGrid: {
//       gridTemplateColumns: "1fr 1fr",
//       gap: "20px",
//     },
//     circleFrame: {
//       width: "130px",
//       height: "130px",
//     },
//     heading: {
//       fontSize: "28px",
//     },
//     subHeading: {
//       fontSize: "12px",
//     },
//   },
//   '@media (max-width: 360px)': {
//     teamGrid: {
//       gridTemplateColumns: "1fr",
//       maxWidth: "250px",
//       margin: "0 auto",
//     },
//   },
// };

// export default OurTeam;

import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./OurTeam.css";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "William Doe",
      position: "Designer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Jack Black",
      position: "Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: {
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "John Cena",
      position: "Marketing",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf335d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: {
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Emma Doe",
      position: "Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Jane Watson",
      position: "CEO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d877c828f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Kat Parry",
      position: "HR",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: {
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <div className="our-team">
      <div className="team-container">
        <div className="team-header">
          <h2>Our Team</h2>
          <p>Meet Awesome People</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="member-card">
              <div className="image-wrapper">
                <div className="circle-frame">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="member-image"
                    loading="lazy"
                  />
                </div>
                <div className="social-icons">
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="social-link">
                      <FaTwitter className="icon" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="social-link">
                      <FaLinkedin className="icon" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="social-link">
                      <FaInstagram className="icon" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="social-link">
                      <FaGithub className="icon" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-position">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
