import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/TestimonialTable.css";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const TestimonialTable = () => {
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = () => {
    axios
      .get(`${backendUrl}/api/testimonials`)
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error("Failed to load testimonials"));
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      try {
        await axios.delete(`${backendUrl}/api/testimonials/${id}`);
        fetchTestimonials(); // refresh list
      } catch (error) {
        alert("Delete failed");
      }
    }
  };

  const handleEdit = (testimonial) => {
    navigate("/admin/testimonials/add", { state: { testimonial } });
  };

  return (
    <div className="testimonial-table-container">
      <div className="table-header">
        <h2>Testimonials</h2>
        <Link to="/admin/testimonials/add" className="add-button">
          + Add Testimonial
        </Link>
      </div>
      <table className="testimonial-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Role</th>
            <th>Quote</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* <tbody>
          {testimonials.map((t) => (
            <tr key={t.id}>
              <td>
                <img
                  src={`http://localhost:5000${t.image}`}
                  alt={t.name}
                  height="60"
                />
              </td>
              <td>{t.name}</td>
              <td>{t.role}</td>
              <td>{t.quote}</td>
              <td>
                <button onClick={() => handleEdit(t)} className="edit-btn">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
        <tbody>
          {testimonials.map((t) => (
            <tr key={t.id}>
              <td data-label="Image">
                <img src={`${backendUrl}${t.image}`} alt={t.name} height="60" />
              </td>
              <td data-label="Name">{t.name}</td>
              <td data-label="Role">{t.role}</td>
              <td data-label="Quote">{t.quote}</td>
              <td data-label="Actions">
                <button onClick={() => handleEdit(t)} className="edit-btn">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestimonialTable;
