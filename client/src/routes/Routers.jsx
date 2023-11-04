import React from "react";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard//doctor-account/Dashboard";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctor/:id" element={<DoctorDetails />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoutes={["patient"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoute allowedRoutes={["doctor"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
