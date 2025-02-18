import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import EquipmentGallery from "./components/EquipmentGallery";
import EquipmentDetail from "./pages/EquipmentDetail";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <EquipmentGallery />
            </>
          } />
          <Route path="/equipment/:id" element={<EquipmentDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
