import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>JR-Sons Consultancy</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#apps">Apps</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to My Professional Consultancy</h2>
        <p>
          I help businesses and individuals with modern solutions in technology
          and consultancy. Explore my apps, blogs, and services below.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am JDR, a professional consultant and app developer. I have multiple
          apps on the Play Store and provide technology guidance, business
          solutions, and app development consultancy.
        </p>
      </section>

      {/* Apps Section */}
      <section id="apps" className="section">
        <h2>My Apps</h2>
        <ul>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.example.app1"
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 App 1 - Call Blocker
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.example.app2"
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 App 2 - Phone Tracker
            </a>
          </li>
        </ul>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section">
        <h2>Blog</h2>
        <p>Coming soon... I’ll share tech insights and consultancy tips here.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:yourmail@gmail.com">yourmail@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Profile</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 JDR Consultancy. All Rights Reserved.</p>
        <a href="/privacy.txt" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>{" | "}
        <a href="/terms.txt" target="_blank" rel="noopener noreferrer">
          Terms & Conditions
        </a>
      </footer>
    </div>
  );
}

export default App;
