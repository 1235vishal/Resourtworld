import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Default closed on small screens
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const adminData = localStorage.getItem("adminData");
      if (!adminData) {
        navigate("/admin/login");
        return;
      }
      setAdmin(JSON.parse(adminData));
    } catch (err) {
      setError("Failed to load admin data");
      console.error("Sidebar error:", err);
    }
  }, [navigate]);

  const handleLogout = () => {
    try {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminData");
      navigate("/admin/login");
    } catch (err) {
      setError("Failed to logout");
      console.error("Logout error:", err);
    }
  };

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (!admin) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className={`dashboard-sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <button
          className="toggle-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <i className={`fas fa-chevron-${sidebarOpen ? "left" : "right"}`}></i>
        </button>
      </div>
      <nav className="sidebar-nav">
        <Link to="/admin/dashboard" className="nav-item">
          <i className="fas fa-home"></i>
          <span>Dashboard</span>
        </Link>
        <Link to="/admin/contact" className="nav-item">
          <i className="fas fa-envelope"></i>
          <span>Contact</span>
        </Link>
        <Link to="/admin/news" className="nav-item">
          <i className="fas fa-newspaper"></i>
          <span>News</span>
        </Link>
        <Link to="/admin/testimonials" className="nav-item">
          <i className="fas fa-comment-dots"></i>
          <span>Testimonials</span>
        </Link>
        <div className="nav-item" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
