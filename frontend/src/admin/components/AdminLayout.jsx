import { Outlet } from "react-router-dom";
import "../styles/AdminLayout.css";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <header className="dashboard-header">
          <h2 className="admin-logo">Magnoliya Grand Manor Admin</h2>
        </header>
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
