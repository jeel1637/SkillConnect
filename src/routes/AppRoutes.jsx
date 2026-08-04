import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Student/Dashboard";
import ProtectedRoute from "../components/auth/ProtectedRoute";

import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Courses from "../pages/Courses/Courses";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />}  />
      <Route path="/courses" element={<Courses />} />
      <Route
        path="/student/dashboard"
        element={
        <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default AppRoutes;