import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import MyAccount from "../Dashboard/user-account/MyAccount";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctor/:id" element={<DoctorDetails />} />

      <Route
        path="/register"
        element={
          <PrivateRoute>
            <Signup />
          </PrivateRoute>
        }
      />

      <Route
        path="/login"
        element={
          <PrivateRoute>
            <Signin />
          </PrivateRoute>
        }
      />
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
