import React from "react";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>

        <h1 style={styles.title}>
          Welcome to <span style={styles.brand}>Bismillah Technologies</span>
        </h1>

        <p style={styles.subtitle}>
          Building trust, quality, and innovation for generations. <br />
          Proudly delivering secure apps, smart tools, and modern digital solutions.
        </p>

        <div style={styles.buttons}>
          <a href="#about" style={styles.btnPrimary}>
            Learn More
          </a>
          <a href="#contact" style={styles.btnSecondary}>
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}
const styles = {
  hero: {
    position: 'relative',
    height: '90vh',
    backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: '40px',
    borderRadius: '15px'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  brand: {
    color: '#61dafb'
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    lineHeight: '1.6'
  },
  buttons: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center'
  },
  btnPrimary: {
    backgroundColor: '#61dafb',
    padding: '12px 24px',
    borderRadius: '8px',
    color: '#000',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  btnSecondary: {
    border: '2px solid #61dafb',
    padding: '12px 24px',
    borderRadius: '8px',
    color: '#61dafb',
    fontWeight: 'bold',
    textDecoration: 'none'
  }
}
