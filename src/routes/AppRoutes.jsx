import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Main Layouts
import Main from "../components/layouts/Main";
// Pages
import Hero from "../components/hero/Hero";


import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutUs from "../components/aboutUs/AboutUs";
import Service from "../pages/Service";
import ContactPage from "../pages/ContactPage";
import ProjectSection from "../components/project/ProjectSection";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicePage";
import ProjectsPage from "../pages/ProjectPage";




const ErrorElement = () => (
  <div className="min-h-screen flex items-center justify-center bg-red-300">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">Oops!</h1>
      <p className="text-xl text-gray-600 mb-4">
        Sorry, an unexpected error has occurred.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Go Back Home
      </Link>
    </div>
  </div>
);



const AppRoutes = () => {

  useEffect(() => {
    AOS.init({
      once: false, // Ensure the animation triggers every time it scrolls back into view
      duration: 100, // Animation duration
      easing: "ease-in-out",
    });

    AOS.refresh(); // Ensure re-initialization to avoid stale animations
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<><Hero /><AboutUs /><ProjectSection /> <Service /> </>} />

        <Route path="about" element={<AboutPage />} />
        <Route path="service" element={<ServicesPage />} />
        <Route path="project" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<ErrorElement />} />
    </Routes>
  );
};

export default AppRoutes;

