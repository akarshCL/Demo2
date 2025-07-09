import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style.css";

import Company from "./Company";
import Services from "./Services";
import Contact from "./Pages/Contact";

import Navbar from "./Navigation";


const Footer = () => {
  return (
    <div className="footer">
      <Router>
        <Navbar />
        <Routes>
          

          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Company" element={<Company />} />

          <Route />
          <Route />
        </Routes>
      </Router>
    </div>
  );
};

export default Footer;
