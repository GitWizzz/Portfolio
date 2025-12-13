import React from "react";
import Layout from "./component/Layout";
import AboutSection from "./component/AboutSection";
import ResumeSection from "./component/ResumeSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioSection from "./component/PortfolioSection";
import BlogSection from "./component/BlogSection";
import ContactSection from "./component/ContactSection";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AboutSection />} />
          <Route path="/resume" element={<ResumeSection/>} />
          <Route path="/portfolio" element={<PortfolioSection />} />
          <Route path="/blog" element={<BlogSection/>} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
