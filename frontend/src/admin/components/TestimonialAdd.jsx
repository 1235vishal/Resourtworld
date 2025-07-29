import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/TestimonialAdd.css";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const TestimonialAdd = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const editData = state?.testimonial;

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    quote: "",
  });
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState("");

  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name,
        role: editData.role,
        quote: editData.quote,
      });
      setExistingImage(editData.image);
    }
  }, [editData]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("role", formData.role);
    data.append("quote", formData.quote);
    if (image) {
      data.append("image", image);
    } else {
      data.append("existingImage", existingImage); // fallback to existing image
    }

    try {
      if (editData) {
        await axios.put(`${backendUrl}/api/testimonials/${editData.id}`, data);
        alert("Testimonial updated");
      } else {
        await axios.post(`${backendUrl}/api/testimonials`, data);
        alert("Testimonial added");
      }
      navigate("/admin/testimonials");
    } catch (error) {
      alert("Submit failed");
    }
  };

  return (
    <div className="testimonial-add-container">
      <h2>{editData ? "Edit" : "Add"} Testimonial</h2>
      <form onSubmit={handleSubmit} className="testimonial-form">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          required
        />
        <textarea
          name="quote"
          placeholder="Quote"
          value={formData.quote}
          onChange={handleChange}
          required
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {existingImage && !image && (
          <img
            src={`${backendUrl}${existingImage}`}
            alt="Current"
            height="50"
            style={{ marginTop: "10px", borderRadius: "8px" }}
          />
        )}
        <button type="submit">{editData ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
};

export default TestimonialAdd;
