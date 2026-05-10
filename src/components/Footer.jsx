import React from 'react'


export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} Muhammad Ali Website | All Rights Reserved</p>
      <div style={styles.links}>
        <a href="/about" style={styles.link}>About</a>
        <a href="/contact" style={styles.link}>Contact</a>
        <a href="/privacy" style={styles.link}>Privacy Policy</a>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#282c34',
    padding: '20px',
    marginTop: '40px',
    textAlign: 'center',
    color: '#fff',
    borderTop: '2px solid #444'
  },
  text: {
    margin: '0',
    fontSize: '14px'
  },
  links: {
    marginTop: '10px'
  },
  link: {
    margin: '0 10px',
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '14px'
  }
}
