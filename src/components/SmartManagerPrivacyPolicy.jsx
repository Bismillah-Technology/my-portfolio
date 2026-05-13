import React from "react";

export default function SmartManagerPrivacyPolicy() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>

        <h1 style={styles.title}>
          Smart Manager – Privacy Policy
        </h1>

        <p style={styles.subTitle}>
          Privacy Policy
        </p>

        <p style={styles.text}>
          PAK-TECH built the Smart Manager app as an Ad Supported application.
          This service is provided free of cost and is intended for use as it is.
        </p>

        <p style={styles.text}>
          This Privacy Policy explains how we collect, use, and protect user information
          when you use Smart Manager.
        </p>

        <p style={styles.text}>
          This policy is aligned with Google Play Data Safety requirements.
        </p>

        <p style={styles.text}>
          By using this app, you agree to the terms of this Privacy Policy.
        </p>

        {/* DATA SAFETY */}
        <h2 style={styles.heading}>Data Safety & Collection</h2>

        <p style={styles.text}>
          Smart Manager collects limited data only for functionality, performance, and advertising.
        </p>

        <ul style={styles.list}>
          <li>Device files (images, videos, audio, documents - user selected only)</li>
          <li>App usage data (for performance improvement)</li>
          <li>Crash logs (for fixing bugs and stability)</li>
          <li>Device or advertising ID (for AdMob ads)</li>
        </ul>

        <p style={styles.text}>
          All file access remains on-device unless user explicitly shares or transfers data.
        </p>

        <p style={styles.text}>
          We do not sell, misuse, or share personal user data with unauthorized parties.
        </p>

        {/* PERMISSIONS */}
        <h2 style={styles.heading}>Permissions Used</h2>

        <ul style={styles.list}>
          <li>Manage External Storage Access – to manage files</li>
          <li>Internet – for ads and updates</li>
          <li>Network State – to check connectivity</li>
          <li>Device ID (AD_ID) – for advertising purposes</li>
        </ul>

        {/* THIRD PARTY */}
        <h2 style={styles.heading}>Third-Party Services</h2>

        <p style={styles.text}>
          Smart Manager uses trusted third-party services:
        </p>

        <ul style={styles.list}>
          <li>Google AdMob (advertising)</li>
          <li>Google Play Services</li>
          <li>Firebase / Analytics (if used)</li>
        </ul>

        {/* FILE MANAGER NOTE */}
        <h2 style={styles.heading}>File Access</h2>

        <p style={styles.text}>
          Smart Manager only accesses files that are selected or visible to the user.
          We do not upload or store personal files on external servers.
        </p>

        {/* SECURITY */}
        <h2 style={styles.heading}>Security</h2>

        <p style={styles.text}>
          We use reasonable security measures to protect data on the device.
          However, no system is 100% secure.
        </p>

        {/* CHILDREN */}
        <h2 style={styles.heading}>Children’s Privacy</h2>

        <p style={styles.text}>
          This app does not target children under 13 and does not knowingly collect
          personal data from children.
        </p>

        {/* ADS */}
        <h2 style={styles.heading}>Advertising</h2>

        <p style={styles.text}>
          This app shows ads using Google AdMob. Ads may use anonymized identifiers
          to show relevant content.
        </p>

        {/* CHANGES */}
        <h2 style={styles.heading}>Changes to This Policy</h2>

        <p style={styles.text}>
          We may update this Privacy Policy anytime. Users are advised to check this page regularly.
        </p>

        {/* CONTACT */}
        <h2 style={styles.heading}>Contact Us</h2>

        <p style={styles.text}>
          If you have any questions, contact us at:
        </p>

        <p style={styles.email}>
          786paktech@gmail.com
        </p>

        <p style={styles.footer}>
          © PAK-TECH. All rights reserved.
        </p>

      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "#0b0b0b",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    maxWidth: "900px",
    width: "100%",
    backgroundColor: "#111",
    padding: "25px",
    borderRadius: "12px",
    color: "#fff",
    lineHeight: "1.6",
  },
  title: {
    color: "#00ffcc",
    fontSize: "24px",
    marginBottom: "10px",
  },
  subTitle: {
    color: "#ff4444",
    marginBottom: "20px",
  },
  heading: {
    color: "#00ffcc",
    marginTop: "20px",
    fontSize: "18px",
  },
  text: {
    fontSize: "14px",
    marginTop: "10px",
  },
  list: {
    marginLeft: "20px",
    fontSize: "14px",
  },
  email: {
    color: "#ffcc00",
    fontWeight: "bold",
    marginTop: "10px",
  },
  footer: {
    marginTop: "30px",
    fontSize: "12px",
    color: "#888",
    textAlign: "center",
  },
};