import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../src/components/Home";
import Login from "../src/components/Login";
import Signup from "../src/components/Signup";
import { Toaster } from "react-hot-toast";
import Buy from "./components/Buy";
import Courses from "./components/Courses";
import Purchases from "./components/Purchases";
import AdminLogin from "../src/admin/AdminLogin";
import CreateCourse from "../src/admin/CreateCourse";
import AdminSignup from "../src/admin/AdminSignup";
import OurCourses from "../src/admin/OurCourses";
import UpdateCourse from "../src/admin/UpdateCourse";
import Dashboard from "../src/admin/Dashboard";
// import "./App.css";

const App = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  return (
    <div>
      <Routes>
        {/* User Route */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Course Route */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/buy/:courseId" element={<Buy />} />
        <Route path="/purchases" element={<Purchases />} />

        {/* Admin Route */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route
          path="/admin/dashboard"
          element={admin ? <Dashboard /> : <Navigate to={"/admin/login"} />}
        />
        <Route path="/admin/create/course" element={<CreateCourse />} />
        <Route path="/admin/update/:id" element={<UpdateCourse />} />
        <Route path="/admin/courses" element={<OurCourses />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
