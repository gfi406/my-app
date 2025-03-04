import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import EquipmentGallery from "./components/EquipmentGallery";
import EquipmentDetail from "./pages/EquipmentDetail";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <div id="hero"><Hero /></div>
              {/* <div id="about"><Features /></div> */}
              <div id="equipment"><EquipmentGallery /></div>
              <div id="contact"></div>
            </>
          } />
          <Route path="/equipment/:id" element={<EquipmentDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
//"https://wa.me/79168497675" 
export default App;