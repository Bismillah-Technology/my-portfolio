import { useEffect, useState } from "react";

function Modern404Game() {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({
    top: "50%",
    left: "50%",
  });

  const moveTarget = () => {
    const top = Math.random() * 80;
    const left = Math.random() * 80;

    setPosition({
      top: `${top}%`,
      left: `${left}%`,
    });
  };

  const handleCatch = () => {
    setScore((prev) => prev + 1);
    moveTarget();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveTarget();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1f2937, #000000)",
        color: "white",
        overflow: "hidden",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      {/* Glow Effects */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "#facc15",
          filter: "blur(180px)",
          opacity: 0.15,
          top: "-100px",
          left: "-100px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "#3b82f6",
          filter: "blur(180px)",
          opacity: 0.15,
          bottom: "-100px",
          right: "-100px",
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "7rem",
            margin: 0,
            fontWeight: 900,
            background: "linear-gradient(90deg,#facc15,#ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "2rem",
            marginTop: "1rem",
          }}
        >
          Lost in the Digital Jungle 🌌
        </h2>

        <p
          style={{
            color: "#9ca3af",
            maxWidth: "600px",
            lineHeight: 1.7,
            marginTop: "1rem",
          }}
        >
          The page you are trying to visit does not exist.
          But while you're here, catch the glowing AI orb 👇
        </p>

        <div
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Score: {score}
        </div>

        <a
          href="/"
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            borderRadius: "16px",
            background: "#facc15",
            color: "black",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          Return Home
        </a>
      </div>

      {/* Floating Game Orb */}
      <div
        onClick={handleCatch}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,#facc15,#f59e0b)",
          boxShadow: "0 0 40px #facc15",
          cursor: "pointer",
          transition: "all 0.4s ease",
          zIndex: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
        }}
      >
        ⚡
      </div>
    </div>
  );
}

export default Modern404Game;