import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminRegister.css";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const AdminRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/admin/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration successful!");
        navigate("/admin/login");
      } else {
        const data = await response.json();
        alert(data.error || "Registration failed");
      }
    } catch (error) {
      alert("Error during registration");
    }
  };

  return (
    <div className="admin-register">
      <div className="register-form-container">
        <div className="form-header">
          <img src="/logobest.png" alt="Hotel Logo" className="auth-logo" />
          <h2>Admin Registration</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p className="auth-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/admin/login")} className="link">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;
