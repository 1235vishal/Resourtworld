import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/AdminDashboard.css";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const AdminDashboard = () => {
  const [contactCount, setContactCount] = useState(0);
  const [testimonialCount, setTestimonialCount] = useState(0);
  const [newsCount, setNewsCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch contact count
        const contactRes = await axios.get(`${backendUrl}/api/contact`);
        setContactCount(contactRes.data.length || 0);

        // Fetch testimonial count
        const testimonialRes = await axios.get(
          `${backendUrl}/api/testimonials`
        );
        setTestimonialCount(testimonialRes.data.length || 0);

        // Fetch news count
        // const newsRes = await axios.get(`${backendUrl}/api/news`);
        // setNewsCount(newsRes.data.length || 0);
      } catch (err) {
        setError("Failed to fetch dashboard data");
        console.error("Dashboard error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (loading) {
    return <div className="loading-message">Loading dashboard...</div>;
  }

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <i className="fas fa-envelope"></i>
        <div className="stat-info">
          <h4>Total Contact Messages</h4>
          <p>{contactCount}</p>
        </div>
      </div>
      <div className="stat-card">
        <i className="fas fa-newspaper"></i>
        <div className="stat-info">
          <h4>Published News Articles</h4>
          <p>{newsCount}</p>
        </div>
      </div>
      <div className="stat-card">
        <i className="fas fa-comment-dots"></i>
        <div className="stat-info">
          <h4>Client Testimonials</h4>
          <p>{testimonialCount}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
