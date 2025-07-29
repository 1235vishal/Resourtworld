// // export default Contactphase2;
// import { useState } from "react";
// import "./Contactphase2.css";

// const Contactphase2 = () => {
//   const [phoneAlert, setPhoneAlert] = useState("");

// //   const handleContactSubmit = (e) => {
// //     e.preventDefault();
// //     const formData = new FormData(e.target);

// //     const phone = formData.get("phone").trim();
// //     const phoneRegex = /^[0-9]{10,15}$/;

// //     if (!phoneRegex.test(phone)) {
// //       alert("Please enter a valid phone number (digits only, 10–15 digits).");
// //       return;
// //     }

// //     const data = {
// //       name: formData.get("name"),
// //       email: formData.get("email"),
// //       phone,
// //       message: formData.get("message"),
// //     };

// //     console.log("Contact Form Submitted:", data);
// //     alert("Thank you for contacting us!");
// //     e.target.reset();
// //     setPhoneAlert("");
// //   };
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);

//   const phone = formData.get("phone").trim();
//   const phoneRegex = /^[0-9]{10,15}$/;
//   if (!phoneRegex.test(phone)) {
//     alert("Please enter a valid phone number (10–15 digits only).");
//     return;
//   }

//   const data = {
//     name: formData.get("name"),
//     email: formData.get("email"),
//     phone,
//     message: formData.get("message"),
//   };

//   try {
//     const res = await fetch("http://localhost:5000/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const result = await res.json();
//     if (res.ok) {
//       alert("✅ Message sent successfully!");
//       e.target.reset();
//       setPhoneAlert("");
//     } else {
//       alert(`❌ ${result.error}`);
//     }
//   } catch (error) {
//     alert("❌ Failed to submit. Please try again.");
//     console.error("Error:", error);
//   }
// };

//   const handlePhoneInput = (e) => {
//     const value = e.target.value;
//     if (/[^0-9]/.test(value)) {
//       setPhoneAlert("Only numbers are allowed in phone field.");
//     } else {
//       setPhoneAlert("");
//     }
//   };

//   return (
//     <section className="contact-wrapper">
//       {/* Map Section */}
//       {/* <div className="map-section">
//         <iframe
//           title="Google Map"
//           className="map-embed"
//           src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19828.693848012265!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719860000000!5m2!1sen!2sin"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//         <div className="map-address">
//           <span className="map-pin">📍</span>
//           7001 Infantry Ridge Rd, Manassas, VA 20109, USA
//         </div>
//       </div> */}
//       <div className="map-section">
//         <iframe
//           title="Google Map"
//           className="map-embed"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.589093921854!2d-77.52176522407095!3d38.78419497177226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65e65f56d169f%3A0x3d8d143c7bdf3095!2s7001%20Infantry%20Ridge%20Rd%2C%20Manassas%2C%20VA%2020109%2C%20USA!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//         <p className="map-address"></p>
//       </div>

//       {/* Form Section */}
//       <div className="form-section">
//         <p className="form-subtitle">GET IN TOUCH</p>
//         <h2 className="form-title">Feel Free To Contact Us</h2>
//         <form onSubmit={handleSubmit} className="contact-form">
//           <div className="form-row">
//             <input type="text" name="name" placeholder="Your Name" required />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//             />
//           </div>
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Your Phone Number"
//             required
//             onInput={handlePhoneInput}
//             maxLength={15}
//           />
//           {phoneAlert && (
//             <p style={{ color: "red", fontSize: "0.9rem", marginTop: "5px" }}>
//               {phoneAlert}
//             </p>
//           )}
//           <textarea
//             name="message"
//             placeholder="Message"
//             rows="4"
//             required
//           ></textarea>
//           <button type="submit" className="submit-button">
//             SUBMIT NOW
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contactphase2;

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import "./Contactphase2.css";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Contactphase2 = () => {
  const [phoneAlert, setPhoneAlert] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: "What are your business hours?",
      answer:
        "Our business hours are Monday to Friday from 9:00 AM to 5:00 PM, and Saturday from 10:00 AM to 2:00 PM.",
    },
    {
      question: "Do you offer event planning services?",
      answer:
        "Yes, we provide full-service event planning for conferences, weddings, and corporate events.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellations made 30 days prior to the event receive a full refund. Between 15-30 days, 50% refund. Less than 15 days, no refund.",
    },
    {
      question: "Is parking available on site?",
      answer: "Yes, we have ample free parking available for all guests.",
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer:
        "Absolutely! Please inform us of any dietary requirements when booking your event.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const phone = formData.get("phone").trim();
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number (10–15 digits only).");
      return;
    }

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone,
      message: formData.get("message"),
    };

    try {
      const res = await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        alert("✅ Message sent successfully!");
        e.target.reset();
        setPhoneAlert("");
      } else {
        alert(`❌ ${result.error}`);
      }
    } catch (error) {
      alert("❌ Failed to submit. Please try again.");
      console.error("Error:", error);
    }
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) {
      setPhoneAlert("Only numbers are allowed in phone field.");
    } else {
      setPhoneAlert("");
    }
  };

  return (
    <div className="contact-page-container">
      {/* Contact Information and Form Section */}
      <div className="contact-main-section">
        {/* Left Side - Contact Information */}
        <div className="contact-info-section">
          <h2 className="contact-info-title">Contact Information</h2>
          <p className="contact-info-description">
            Reach out to us for any inquiries or to book your next event at our
            beautiful venue.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <Phone size={20} />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+17038435553">+1 (703) 843-5553</a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <Mail size={20} />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:sales@magnoliyagrand.com">
                  sales@magnoliyagrand.com
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-details">
                <h3>Address</h3>
                <p>7001 Infantry Ridge Rd, Manassas, VA 20109, USA</p>
              </div>
            </div>
          </div>

          <div className="social-media-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/magnoliyagrand/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/MagnoliyaGrand"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/magnoliyagrand/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCNG6YVfx2i9b5O98vgE7rFw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-section">
          <p className="form-subtitle">GET IN TOUCH</p>
          <h2 className="form-title">Feel Free To Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
              onInput={handlePhoneInput}
              maxLength={15}
            />
            {phoneAlert && <p className="error-text">{phoneAlert}</p>}
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="submit-button">
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <iframe
          title="Google Map"
          className="map-embed"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.589093921854!2d-77.52176522407095!3d38.78419497177226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65e65f56d169f%3A0x3d8d143c7bdf3095!2s7001%20Infantry%20Ridge%20Rd%2C%20Manassas%2C%20VA%2020109%2C%20USA!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeFaq === index ? "active" : ""}`}
              key={index}
            >
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <h3>{faq.question}</h3>
                <span className="faq-toggle">
                  {activeFaq === index ? "-" : "+"}
                </span>
              </div>
              {activeFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contactphase2;
