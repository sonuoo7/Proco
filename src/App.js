import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero-Section/Hero";
import NewsLetter from "./Components/Newsletter/NewsLetter";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/ContactUs/Contact";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Hero />}></Route>
        <Route exact path="/about" element={<AboutUs />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
      <NewsLetter />
      <Footer />
      {/* <Page/> */}
      {/* <OverlayImage/> */}
    </Router>
  );
};

export default App;
