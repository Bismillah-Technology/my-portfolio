import React from "react";

export default function GameBoxPrivacyPolicy() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>

        <h1 style={styles.title}>
          Tap Rush – Privacy Policy
        </h1>

        <p style={styles.subTitle}>
          Privacy Policy
        </p>

        <p style={styles.text}>
          PAK-TECH built the Tap Rush game as an Ad Supported application.
          This service is provided free of cost and is intended for use as it is.
        </p>

        <p style={styles.text}>
          This Privacy Policy explains how information may be collected, used,
          and protected when you use the Tap Rush mobile game.
        </p>

        <p style={styles.text}>
          Tap Rush is a simple arcade game that does not require users to create
          an account or provide personal information to play the game.
        </p>

        <p style={styles.text}>
          By using Tap Rush, you agree to the terms of this Privacy Policy.
        </p>

        {/* DATA COLLECTION */}
        <h2 style={styles.heading}>Data Safety & Collection</h2>

        <p style={styles.text}>
          Tap Rush does not directly collect or store sensitive personal
          information such as your name, address, phone number, contacts,
          photos, videos, or personal files.
        </p>

        <p style={styles.text}>
          The game may use limited technical and advertising-related information
          through third-party services for advertising, analytics, performance,
          and crash reporting purposes.
        </p>

        <ul style={styles.list}>
          <li>Advertising ID or similar advertising identifiers</li>
          <li>Basic device information</li>
          <li>App usage and interaction information</li>
          <li>Crash and diagnostic information</li>
          <li>Performance and technical information</li>
        </ul>

        <p style={styles.text}>
          Game scores and gameplay information are primarily used to provide
          the game experience, including scoring, combos, lives, and game
          progress.
        </p>

        {/* GAME DATA */}
        <h2 style={styles.heading}>Game Data</h2>

        <p style={styles.text}>
          Tap Rush may process gameplay information such as score, combo count,
          remaining lives, and game time while you play.
        </p>

        <p style={styles.text}>
          This information is used to operate the game and provide gameplay
          features such as scoring and high-score functionality.
        </p>

        {/* PERMISSIONS */}
        <h2 style={styles.heading}>Permissions Used</h2>

        <p style={styles.text}>
          Tap Rush is designed to require only the permissions necessary for
          its functionality.
        </p>

        <ul style={styles.list}>
          <li>
            <strong>Internet:</strong> Used for displaying advertisements and
            communicating with required third-party services.
          </li>
          <li>
            <strong>Advertising ID:</strong> May be used by advertising services
            for advertising and measurement purposes.
          </li>
          <li>
            <strong>Vibration:</strong> Used for optional gameplay feedback when
            vibration is enabled.
          </li>
        </ul>

        {/* THIRD PARTY */}
        <h2 style={styles.heading}>Third-Party Services</h2>

        <p style={styles.text}>
          Tap Rush may use trusted third-party services that may collect
          information according to their own privacy policies.
        </p>

        <ul style={styles.list}>
          <li>Google AdMob – advertising</li>
          <li>Google Play Services – app and platform services</li>
          <li>Firebase / Analytics – only if enabled in the application</li>
        </ul>

        <p style={styles.text}>
          We recommend reviewing the privacy policies of these third-party
          services to understand how they handle information.
        </p>

        {/* ADVERTISING */}
        <h2 style={styles.heading}>Advertising</h2>

        <p style={styles.text}>
          Tap Rush is supported by advertisements provided through Google
          AdMob. AdMob may use advertising identifiers and other information
          permitted by the device and applicable settings to provide,
          personalize, measure, and improve advertisements.
        </p>

        <p style={styles.text}>
          Advertising preferences may also be controlled through your Android
          device settings and Google account settings where applicable.
        </p>

        {/* SECURITY */}
        <h2 style={styles.heading}>Security</h2>

        <p style={styles.text}>
          We take reasonable measures to protect information associated with
          the application. However, no electronic transmission or storage
          system can be guaranteed to be completely secure.
        </p>

        {/* CHILDREN */}
        <h2 style={styles.heading}>Children’s Privacy</h2>

        <p style={styles.text}>
          Tap Rush is not specifically directed toward children under the age
          of 13, and we do not knowingly collect personal information from
          children.
        </p>

        <p style={styles.text}>
          If you believe that a child has provided personal information through
          the application, please contact us so that appropriate action can be
          taken.
        </p>

        {/* DATA SHARING */}
        <h2 style={styles.heading}>Data Sharing</h2>

        <p style={styles.text}>
          We do not sell personal information. Information may be processed by
          third-party service providers when necessary for advertising,
          analytics, crash reporting, security, or app functionality.
        </p>

        {/* DATA RETENTION */}
        <h2 style={styles.heading}>Data Retention</h2>

        <p style={styles.text}>
          Tap Rush does not maintain a personal user account or personal profile.
          Any information collected by third-party services is retained and
          handled according to their respective policies and applicable
          retention requirements.
        </p>

        {/* CHANGES */}
        <h2 style={styles.heading}>Changes to This Privacy Policy</h2>

        <p style={styles.text}>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated policy. Users are encouraged
          to review this page periodically.
        </p>

        {/* CONTACT */}
        <h2 style={styles.heading}>Contact Us</h2>

        <p style={styles.text}>
          If you have any questions or concerns regarding this Privacy Policy,
          please contact us at:
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
    marginTop: "25px",
    fontSize: "18px",
  },

  text: {
    fontSize: "14px",
    marginTop: "10px",
  },

  list: {
    marginLeft: "20px",
    fontSize: "14px",
    lineHeight: "1.8",
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