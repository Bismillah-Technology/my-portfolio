import React from "react";

export default function SpeedBrowserPrivacyPolicy() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>

        <h1 style={styles.title}>
          Speed Browser Fast Mini & Lite - Privacy Policy
        </h1>

        <p style={styles.subTitle}>
          Privacy Policy
        </p>

        <p style={styles.text}>
          PAK-TECH built the Speed Browser Fast Mini & Lite app as an Ad Supported application.
          This service is provided free of cost and is intended for use as it is.
        </p>

        <p style={styles.text}>
          This Privacy Policy explains how we handle information when you use our browser application.
        </p>

        <p style={styles.text}>
          This Privacy Policy is aligned with Google Play Data Safety requirements.
        </p>

        <p style={styles.text}>
          By using this app, you agree to the collection and use of information in accordance with this policy.
        </p>

        {/* DATA SAFETY SECTION */}
        <h2 style={styles.heading}>Data Safety & Handling</h2>

        <p style={styles.text}>
          Speed Browser Fast Mini & Lite collects limited data only for app functionality, performance,
          and advertising services.
        </p>

        <ul style={styles.list}>
          <li>Web browsing history (stored locally on device)</li>
          <li>In-app search history (stored locally on device)</li>
          <li>App interactions (user actions inside the app)</li>
          <li>Crash logs (for bug fixing and stability)</li>
          <li>Device or other IDs (used for advertising via AdMob)</li>
        </ul>

        <p style={styles.text}>
          This data is used strictly for app functionality, analytics, and advertising purposes.
          We do not sell personal data or misuse user information.
        </p>

        <p style={styles.text}>
          Some data may be temporarily processed in memory (ephemeral processing) for real-time features.
        </p>

        <p style={styles.text}>
          Users can delete browsing history and search history anytime from app settings.
        </p>

        {/* INFORMATION SECTION */}
        <h2 style={styles.heading}>Information Collection & Use</h2>

        <p style={styles.text}>
          Speed Browser Fast Mini & Lite is a lightweight web browser designed for fast and secure browsing.
        </p>

        <p style={styles.text}>
          The app may request basic permissions such as internet access, storage (for downloads),
          and network state. These permissions are used only for browser functionality.
        </p>

        {/* THIRD PARTY */}
        <h2 style={styles.heading}>Third-Party Services</h2>

        <p style={styles.text}>
          The app uses third-party services that may collect limited data:
        </p>

        <ul style={styles.list}>
          <li>Google Play Services</li>
          <li>Google AdMob</li>
        </ul>

        {/* LOG DATA */}
        <h2 style={styles.heading}>Log Data</h2>

        <p style={styles.text}>
          In case of an error, we may collect diagnostic data such as device model,
          OS version, app performance, and crash logs to improve stability.
        </p>

        {/* COOKIES */}
        <h2 style={styles.heading}>Cookies</h2>

        <p style={styles.text}>
          Websites visited through the browser may use cookies. These cookies are controlled by the websites,
          not by Speed Browser Fast Mini & Lite.
        </p>

        {/* SERVICE PROVIDERS */}
        <h2 style={styles.heading}>Service Providers</h2>

        <p style={styles.text}>
          We may use third-party companies for:
        </p>

        <ul style={styles.list}>
          <li>App analytics</li>
          <li>Advertising (AdMob)</li>
          <li>Crash reporting</li>
        </ul>

        {/* SECURITY */}
        <h2 style={styles.heading}>Security</h2>

        <p style={styles.text}>
          We take reasonable measures to protect user data. However, no method of internet transmission
          or electronic storage is 100% secure.
        </p>

        {/* CHILDREN */}
        <h2 style={styles.heading}>Children’s Privacy</h2>

        <p style={styles.text}>
          This app does not target children under 13 and does not knowingly collect personal information
          from children.
        </p>

        {/* CHANGES */}
        <h2 style={styles.heading}>Changes to This Policy</h2>

        <p style={styles.text}>
          We may update this Privacy Policy from time to time. Users are advised to review this page periodically.
        </p>

        {/* CONTACT */}
        <h2 style={styles.heading}>Contact Us</h2>

        <p style={styles.text}>
          If you have any questions, contact us at:
        </p>

        <p style={styles.email}>786paktech@gmail.com</p>

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
    color: "#ffcc00",
    fontSize: "24px",
    marginBottom: "10px",
  },
  subTitle: {
    color: "#ff4444",
    marginBottom: "20px",
  },
  heading: {
    color: "#ffcc00",
    marginTop: "20px",
    fontSize: "18px",
  },
  text: {
    fontSize: "14px",
    marginTop: "10px",
  },
  list: {
    marginLeft: "20px",
  },
  email: {
    color: "#00ffcc",
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