import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Modal from "./Components/Modal/Modal";
import Carousel from "./Components/Carousel/Carousel";
import ArticleSection from "./Components/ArticleSection/ArticleSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";
import RegisterAccount from "./Pages/Register";
import Consultation from "./Pages/Consultation";
import BookingDoctor from "./Pages/BookingDoctor";
import AboutUs from "./Pages/AboutUs";
import ArticlePage from "./Pages/ArticlePage";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div id="page-top">
        <Navbar />
        <Modal />
        {location.pathname === "/" && <Carousel />}
        <Routes>
          <Route path="/" element={<ArticleSection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/register-account" element={<RegisterAccount />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/booking-doctor" element={<BookingDoctor />} />
          <Route path="/article-page" element={<ArticlePage />} />
        </Routes>
        {location.pathname !== "/register-account" &&
          location.pathname !== "/booking-doctor" &&
          location.pathname !== "/article-page" && <ContactSection />}
        <Footer />
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router basename="/alodokterweb">
      <App />
    </Router>
  );
}

export default AppWrapper;
