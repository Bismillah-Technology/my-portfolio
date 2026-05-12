import React from "react";
import { Helmet } from "react-helmet-async";

export default function LottieFlutterBlog() {

  // 📋 Copy function
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Code copied to clipboard ✅");
    } catch (err) {
      alert("Failed to copy ❌");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
   {/* SEO SECTION */}
      <Helmet>
        <title>Lottie Animations in Flutter - Complete Guide</title>
        <meta name="description" content="Learn Flutter Lottie animations step by step with setup, JSON, assets, and best practices." />
        <meta name="keywords" content="Flutter Lottie, Flutter animations, JSON animation Flutter, mobile UI animations" />

        {/* Open Graph (Facebook / WhatsApp preview) */}
        <meta property="og:title" content="Flutter Lottie Complete Guide" />
        <meta property="og:description" content="Step by step guide to use Lottie animations in Flutter apps." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1555066931-4365d14bab8c" />
        <meta property="og:type" content="article" />
      </Helmet>
      {/* HERO SECTION */}
      <div
        className="h-[60vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/60 p-8 rounded-2xl backdrop-blur-md max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Lottie Animations in Flutter 🚀
          </h1>
          <p className="mt-3 text-gray-200">
            Complete guide: setup, JSON, assets, control, performance & best practices
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">

        {/* INTRO */}
        <section>
          <h2 className="text-2xl font-bold mb-3">✨ Introduction</h2>
          <p className="text-gray-300">
            Lottie animations Flutter apps ko modern, smooth aur professional look deti hain.
          </p>
        </section>

        {/* PACKAGE */}
        <section>
          <h2 className="text-2xl font-bold mb-3">📦 1) Install Lottie Package</h2>

          <div className="relative bg-gray-900 p-4 rounded-xl">

            {/* COPY BUTTON */}
            <button
              onClick={() =>
                handleCopy(`dependencies:
  flutter:
    sdk: flutter

  lottie: ^3.3.1`)
              }
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xs"
            >
              📋 Copy
            </button>

            <pre className="text-green-400 text-sm">
{`dependencies:
  flutter:
    sdk: flutter

  lottie: ^3.3.1`}
            </pre>
          </div>
        </section>

        {/* ASSETS */}
        <section>
          <h2 className="text-2xl font-bold mb-3">📁 2) Assets Setup</h2>

          <div className="relative bg-gray-900 p-4 rounded-xl">

            <button
              onClick={() => handleCopy(`assets/animations/`)}
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xs"
            >
              📋 Copy
            </button>

            <pre className="text-white">
assets/animations/
            </pre>
          </div>
        </section>

        {/* PUBSPEC */}
        <section>
          <h2 className="text-2xl font-bold mb-3">🧠 3) Pubspec Configuration</h2>

          <div className="relative bg-gray-900 p-4 rounded-xl">

            <button
              onClick={() =>
                handleCopy(`flutter:
  uses-material-design: true

  assets:
    - assets/animations/`)
              }
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xs"
            >
              📋 Copy
            </button>

            <pre className="text-yellow-300 text-sm">
{`flutter:
  uses-material-design: true

  assets:
    - assets/animations/`}
            </pre>
          </div>
        </section>

        {/* JSON */}
        <section>
          <h2 className="text-2xl font-bold mb-3">🎬 4) Sample Lottie JSON</h2>

          <div className="relative bg-gray-900 p-4 rounded-xl overflow-auto">

            <button
              onClick={() =>
                handleCopy(`{
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 120
}`)
              }
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xs"
            >
              📋 Copy
            </button>

            <pre className="text-blue-300 text-xs">
{`{
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 120,
  "w": 512,
  "h": 512,
  "nm": "Generic Loader"
}`}
            </pre>
          </div>
        </section>

        {/* FLUTTER CODE */}
        <section>
          <h2 className="text-2xl font-bold mb-3">📱 5) Flutter Usage</h2>

          <div className="relative bg-gray-900 p-4 rounded-xl">

            <button
              onClick={() =>
                handleCopy(`import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';`)
              }
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xs"
            >
              📋 Copy
            </button>

            <pre className="text-green-300 text-sm">
{`import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';`}
            </pre>
          </div>
        </section>

        {/* LOADING */}
        <section>
          <h2 className="text-2xl font-bold mb-3">⏳ 6) Loading Screen</h2>

          <div className="relative bg-gray-900 p-4 rounded-xl">

            <button
              onClick={() =>
                handleCopy(`Scaffold(
  backgroundColor: Colors.black,
  body: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      Lottie.asset('assets/animations/example.json')
    ],
  ),
);`)
              }
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xs"
            >
              📋 Copy
            </button>

            <pre className="text-pink-300 text-sm">
{`Scaffold(
  backgroundColor: Colors.black,
  body: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      Lottie.asset('assets/animations/example.json')
    ],
  ),
);`}
            </pre>
          </div>
        </section>

      </div>
    </div>
  );
}