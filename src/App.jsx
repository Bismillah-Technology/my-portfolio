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
      <AboutJR />
      <section id="apps" className="section">
        <h2>My Apps</h2>
        <AppsList />
      </section>
              <Blog />
        <Contact />
      <Footer />
    </div>
  );
}

export default App;
