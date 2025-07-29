import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("adminData", JSON.stringify(data.admin));
        alert("Login successful!");
        navigate("/admin/dashboard");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      alert("Error during login");
    }
  };

  return (
    <div className="admin-login">
      <div className="login-form-container">
        <div className="login-header">
          <img src="/logobest.png" alt="Hotel Logo" className="login-logo" />
          <h2>Admin Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
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
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/admin/register")} className="link">
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
