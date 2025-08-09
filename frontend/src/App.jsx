
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminDashboard from "./admin/components/AdminDashboard";
import AdminLayout from "./admin/components/AdminLayout";
import AdminLogin from "./admin/components/AdminLogin";
import AdminRegister from "./admin/components/AdminRegister";
import AdminContact from "./admin/components/Contact";
import AdminNews from "./admin/components/News";
import TestimonialAdd from "./admin/components/TestimonialAdd";
import TestimonialTable from "./admin/components/TestimonialTable";

import "./App.css";
import Aboutus from "./pages/Aboutus";
import BookingForm from "./pages/Bookingform";
import Contactus from "./pages/ContactUs";
import Corporateevents from "./pages/corporateevents";
import Events from "./pages/events";
import EventServices from "./pages/EventServices";
import Gallerypage from "./pages/Gallery";
import Home from "./pages/Home";
import HotelDining from "./pages/HotelDining";
import Navnew from "./pages/NavNew";
import Rooms from "./pages/Rooms";
import Wedding from "./pages/Wedding";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navnew />}
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Gallerypage" element={<Gallerypage />} />
        <Route path="/Bookingform" element={<BookingForm />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/HotelDining" element={<HotelDining />} />
        <Route path="/events" element={<Events />} />
        <Route path="/EventServices" element={<EventServices />} />
        <Route path="/Wedding" element={<Wedding />} />
        <Route path="/corporateevents" element={<Corporateevents />} />

        {/* Admin Auth */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />

        {/* Admin Dashboard Layout with Nested Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="contact" element={<AdminContact />} />
          <Route path="news" element={<AdminNews />} />
          <Route path="testimonials" element={<TestimonialTable />} />
          <Route path="testimonials/add" element={<TestimonialAdd />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
