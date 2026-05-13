import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutJR from "./components/AboutJR";
import AppsList from "./components/AppsList";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdBanner from "./components/AdBanner";

// Pages
import SpeedBrowserPrivacyPolicy from "./components/SpeedBrowserPrivacyPolicy";
import FlutterAppBundleGuide from "./components/FlutterAppBundleGuide";
import LottieFlutterBlog from "./components/blogs/LottieBlog";
import SmartManagerPrivacyPolicy from "./components/SmartManagerPrivacyPolicy";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />

      <div style={{ backgroundColor: "black" }}>
        <AdBanner />
      </div>

      <section id="about">
        <AboutJR />
      </section>

      <section id="apps" className="section">
        <h2>My Apps</h2>
        <AppsList />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>

          {/* HOME */}
          <Route path="/" element={<HomePage />} />

          {/* PRIVACY POLICY */}
          <Route
            path="/speed-browser-privacy-policy"
            element={<SpeedBrowserPrivacyPolicy />}
          />
          {/* Smart Manager Privacy Policy */}
          <Route
          path="/smart-manager-privacy-policy"
          element={<SmartManagerPrivacyPolicy />}
          />
          {/* FLUTTER GUIDE */}
          <Route
            path="/flutter-app-bundle-guide"
            element={<FlutterAppBundleGuide />}
          />

          {/* LOTTIE BLOG */}
          <Route
            path="/lottie-flutter-blog"
            element={<LottieFlutterBlog />}
          />

        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;