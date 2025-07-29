// import { useState } from 'react';
// // import './App.css';

// function BookingForm() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     ext: '',
//     company: '',
//     nature: '',
//     arriving: '',
//     departing: '',
//     info: '',
//     heard: '',
//     eventsNeeded: false,
//     eventNature: '',
//     eventDate: '',
//     startTime: '',
//     endTime: '',
//     people: ''
//   });

//   const handleChange = e => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
//   };

//   const handleNext = () => setStep(prev => prev + 1);
//   const handlePrevious = () => setStep(prev => prev - 1);

//   const handleSubmit = e => {
//     e.preventDefault();
//     alert('Form Submitted Successfully!');
//     setStep(1);
//   };

//   return (
//     <div className="container">
//       <h2>Booking Request</h2>
//       {step === 1 && (
//         <form className="form">
//           <h3>Your Contact Information</h3>
//           <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
//           <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
//           <input name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
//           <div className="phone-group">
//             <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
//             <input name="ext" placeholder="Ext." value={formData.ext} onChange={handleChange} />
//           </div>
//           <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
//           <button type="button" onClick={handleNext}>Next</button>
//         </form>
//       )}

//       {step === 2 && (
//         <form className="form">
//           <h3>Your Booking Details</h3>
//           <textarea name="nature" placeholder="Nature of this Booking (e.g. Conference, Wedding)" value={formData.nature} onChange={handleChange} />
//           <div className="date-group">
//             <label>Arriving On</label>
//             <input type="date" name="arriving" value={formData.arriving} onChange={handleChange} />
//             <label>Departing On</label>
//             <input type="date" name="departing" value={formData.departing} onChange={handleChange} />
//           </div>
//           <textarea name="info" placeholder="Additional Information" value={formData.info} onChange={handleChange} />
//           <select name="heard" value={formData.heard} onChange={handleChange}>
//             <option value="">How did you hear about us?</option>
//             <option value="Facebook">Facebook</option>
//             <option value="Google">Google</option>
//             <option value="Friend">Friend</option>
//           </select>
//           <label>
//             <input type="checkbox" name="eventsNeeded" checked={formData.eventsNeeded} onChange={handleChange} /> Events Needed
//           </label>

//           {formData.eventsNeeded && (
//             <div className="event-section">
//               <h4>Your Event Details</h4>
//               <textarea name="eventNature" placeholder="Nature of this series of Events" value={formData.eventNature} onChange={handleChange} />
//               <label>Start Date</label>
//               <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
//               <label>Start Time</label>
//               <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} />
//               <label>End Time</label>
//               <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} />
//               <input name="people" placeholder="Number of People" type="number" value={formData.people} onChange={handleChange} />
//             </div>
//           )}
//           <div className="form-actions">
//             <button type="button" onClick={handlePrevious}>Previous</button>
//             <button type="button" onClick={handleNext}>Next</button>
//           </div>
//         </form>
//       )}

//       {step === 3 && (
//         <div className="summary">
//           <h3>Your Booking Summary</h3>
//           <p><strong>First Name:</strong> {formData.firstName}</p>
//           <p><strong>Last Name:</strong> {formData.lastName}</p>
//           <p><strong>Email:</strong> {formData.email}</p>
//           <p><strong>Phone:</strong> {formData.phone}</p>
//           <p><strong>Company:</strong> {formData.company}</p>
//           <p><strong>Nature:</strong> {formData.nature}</p>
//           <p><strong>Arriving:</strong> {formData.arriving}</p>
//           <p><strong>Departing:</strong> {formData.departing}</p>
//           <p><strong>Additional Info:</strong> {formData.info}</p>
//           <p><strong>Heard About Us:</strong> {formData.heard}</p>
//           {formData.eventsNeeded && (
//             <>
//               <h4>Event Details</h4>
//               <p><strong>Nature:</strong> {formData.eventNature}</p>
//               <p><strong>Date:</strong> {formData.eventDate}</p>
//               <p><strong>Time:</strong> {formData.startTime} to {formData.endTime}</p>
//               <p><strong>People:</strong> {formData.people}</p>
//             </>
//           )}
//           <div className="form-actions">
//             <button type="button" onClick={handlePrevious}>Previous</button>
//             <button type="submit" onClick={handleSubmit}>Submit</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BookingForm;

import { useState } from 'react';
import './BookingForm.css'; // Adjust the path as needed

function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ext: '',
    company: '',
    nature: '',
    arriving: '',
    departing: '',
    info: '',
    heard: '',
    eventsNeeded: false,
    eventNature: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    people: ''
  });

  const [errors, setErrors] = useState({});

  const validateStep = (currentStep) => {
    const newErrors = {};
    
    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }
    
    if (currentStep === 2) {
      if (!formData.nature.trim()) newErrors.nature = 'Nature of booking is required';
      if (!formData.arriving) newErrors.arriving = 'Arrival date is required';
      if (!formData.departing) newErrors.departing = 'Departure date is required';
      if (formData.eventsNeeded) {
        if (!formData.eventNature.trim()) newErrors.eventNature = 'Event nature is required';
        if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
        if (!formData.startTime) newErrors.startTime = 'Start time is required';
        if (!formData.endTime) newErrors.endTime = 'End time is required';
        if (!formData.people) newErrors.people = 'Number of people is required';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => setStep(prev => prev - 1);

  const handleSubmit = e => {
    e.preventDefault();
    if (validateStep(3)) {
      console.log('Form submitted:', formData);
      alert('Form Submitted Successfully!');
      // Here you would typically send the data to your backend
      setStep(1);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        ext: '',
        company: '',
        nature: '',
        arriving: '',
        departing: '',
        info: '',
        heard: '',
        eventsNeeded: false,
        eventNature: '',
        eventDate: '',
        startTime: '',
        endTime: '',
        people: ''
      });
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-form-wrapper">
        <div className="booking-header">
          <h2>Booking Request</h2>
          <div className="progress-bar">
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`progress-line ${step >= 3 ? 'active' : ''}`}></div>
            <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3</div>
          </div>
        </div>

        {step === 1 && (
          <form className="booking-form">
            <h3>Your Contact Information</h3>
            
            <div className="form-group">
              <div className="input-group">
                <i className="fas fa-user"></i>
                <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
              </div>
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            
            <div className="form-group">
              <div className="input-group">
                <i className="fas fa-user"></i>
                <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
              </div>
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
            
            <div className="form-group">
              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
              </div>
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <div className="phone-group">
                <div className="input-group">
                  <i className="fas fa-phone"></i>
                  <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="input-group ext-group">
                  <input name="ext" placeholder="Ext." value={formData.ext} onChange={handleChange} />
                </div>
              </div>
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            
            <div className="form-group">
              <div className="input-group">
                <i className="fas fa-building"></i>
                <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
              </div>
            </div>
            
            <div className="form-actions">
              <button type="button" className="btn-next" onClick={handleNext}>Next</button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form className="booking-form">
            <h3>Your Booking Details</h3>
            
            <div className="form-group">
              <div className="input-group">
                <i className="fas fa-info-circle"></i>
                <textarea name="nature" placeholder="Nature of this Booking (e.g. Conference, Wedding)" value={formData.nature} onChange={handleChange} />
              </div>
              {errors.nature && <span className="error">{errors.nature}</span>}
            </div>
            
            <div className="form-group date-group">
              <div className="date-input">
                <div className="input-group">
                  <i className="fas fa-calendar-alt"></i>
                  <label>Arriving On</label>
                  <input type="date" name="arriving" value={formData.arriving} onChange={handleChange} />
                </div>
                {errors.arriving && <span className="error">{errors.arriving}</span>}
              </div>
              
              <div className="date-input">
                <div className="input-group">
                  <i className="fas fa-calendar-alt"></i>
                  <label>Departing On</label>
                  <input type="date" name="departing" value={formData.departing} onChange={handleChange} />
                </div>
                {errors.departing && <span className="error">{errors.departing}</span>}
              </div>
            </div>
            
            <div className="form-group">
              <div className="input-group">
                <i className="fas fa-comment"></i>
                <textarea name="info" placeholder="Additional Information" value={formData.info} onChange={handleChange} />
              </div>
            </div>
            
            <div className="form-group">
              <div className="input-group">
                <i className="fas fa-question-circle"></i>
                <select name="heard" value={formData.heard} onChange={handleChange}>
                  <option value="">How did you hear about us?</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Google">Google</option>
                  <option value="Friend">Friend</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="form-group checkbox-group">
              <label>
                <input type="checkbox" name="eventsNeeded" checked={formData.eventsNeeded} onChange={handleChange} />
                <span className="checkmark"></span>
                <span className="checkbox-label">Events Needed</span>
              </label>
            </div>

            {formData.eventsNeeded && (
              <div className="event-section">
                <h4>Your Event Details</h4>
                
                <div className="form-group">
                  <div className="input-group">
                    <i className="fas fa-calendar-check"></i>
                    <textarea name="eventNature" placeholder="Nature of this series of Events" value={formData.eventNature} onChange={handleChange} />
                  </div>
                  {errors.eventNature && <span className="error">{errors.eventNature}</span>}
                </div>
                
                <div className="form-group">
                  <div className="input-group">
                    <i className="fas fa-calendar-day"></i>
                    <label>Event Date</label>
                    <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
                  </div>
                  {errors.eventDate && <span className="error">{errors.eventDate}</span>}
                </div>
                
                <div className="form-group date-group">
                  <div className="date-input">
                    <div className="input-group">
                      <i className="fas fa-clock"></i>
                      <label>Start Time</label>
                      <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} />
                    </div>
                    {errors.startTime && <span className="error">{errors.startTime}</span>}
                  </div>
                  
                  <div className="date-input">
                    <div className="input-group">
                      <i className="fas fa-clock"></i>
                      <label>End Time</label>
                      <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} />
                    </div>
                    {errors.endTime && <span className="error">{errors.endTime}</span>}
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="input-group">
                    <i className="fas fa-users"></i>
                    <input name="people" placeholder="Number of People" type="number" min="1" value={formData.people} onChange={handleChange} />
                  </div>
                  {errors.people && <span className="error">{errors.people}</span>}
                </div>
              </div>
            )}
            
            <div className="form-actions">
              <button type="button" className="btn-previous" onClick={handlePrevious}>Previous</button>
              <button type="button" className="btn-next" onClick={handleNext}>Next</button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="summary">
            <h3>Your Booking Summary</h3>
            <div className="summary-content">
              <div className="summary-section">
                <h4>Contact Information</h4>
                <p><strong>First Name:</strong> {formData.firstName}</p>
                <p><strong>Last Name:</strong> {formData.lastName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone} {formData.ext && `(Ext: ${formData.ext})`}</p>
                <p><strong>Company:</strong> {formData.company}</p>
              </div>
              
              <div className="summary-section">
                <h4>Booking Details</h4>
                <p><strong>Nature:</strong> {formData.nature}</p>
                <p><strong>Arriving:</strong> {new Date(formData.arriving).toLocaleDateString()}</p>
                <p><strong>Departing:</strong> {new Date(formData.departing).toLocaleDateString()}</p>
                <p><strong>Additional Info:</strong> {formData.info || 'None'}</p>
                <p><strong>Heard About Us:</strong> {formData.heard || 'Not specified'}</p>
              </div>
              
              {formData.eventsNeeded && (
                <div className="summary-section">
                  <h4>Event Details</h4>
                  <p><strong>Nature:</strong> {formData.eventNature}</p>
                  <p><strong>Date:</strong> {new Date(formData.eventDate).toLocaleDateString()}</p>
                  <p><strong>Time:</strong> {formData.startTime} to {formData.endTime}</p>
                  <p><strong>Number of People:</strong> {formData.people}</p>
                </div>
              )}
            </div>
            
            <div className="form-actions">
              <button type="button" className="btn-previous" onClick={handlePrevious}>Previous</button>
              <button type="submit" className="btn-submit" onClick={handleSubmit}>Submit Booking</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingForm;