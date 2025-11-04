// src/App.jsx
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutJR from "./components/AboutJR";
import AppsList from "./components/AppsList";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <section id="about" >
        <AboutJR />
      </section>

      <section id="apps" className="section">
        <h2>My Apps</h2>
        <AppsList />
      </section>
      <section id="blog"  >
      <Blog />
      </section>
      <section id="contact" >
      <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
