import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutJR from "./components/AboutJR";
import AppsList from "./components/AppsList";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import SpeedBrowserPrivacyPolicy from "./components/SpeedBrowserPrivacyPolicy";

function HomePage() {
  return (
    <>
      <Header />

      <Hero />

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
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Privacy Policy Page */}
        <Route path="/speed-browser-privacy-policy" element={<SpeedBrowserPrivacyPolicy />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
// 
// src/App.jsx
// import React from "react";
// import "./App.css";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import AboutJR from "./components/AboutJR";
// import AppsList from "./components/AppsList";
// import Blog from "./components/Blog";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import PrivacyPolicy from "./PrivacyPolicy";


// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Hero />
//       <section id="about" >
//         <AboutJR />
//       </section>

//       <section id="apps" className="section">
//         <h2>My Apps</h2>
//         <AppsList />
//       </section>
//       <section id="blog"  >
//       <Blog />
//       </section>
//       <section id="contact" >
//       <Contact />
//       </section>
//       <Footer />
//     </div>
//   );
// }

// export default App;
