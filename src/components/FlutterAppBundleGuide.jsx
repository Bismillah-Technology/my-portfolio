import React from "react";

export default function FlutterAppBundleGuide() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-16">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1400&auto=format&fit=crop"
            alt="Flutter App Bundle"
            className="w-full h-[320px] object-cover rounded-3xl mb-8"
          />

          <h1 className="text-5xl font-bold mb-4">
            How To Create Android App Bundle (.AAB) In Flutter
          </h1>

          <p className="text-gray-400 text-lg">
            Complete beginner to advanced guide for generating signed release
            bundles for Google Play Console.
          </p>
        </div>

        {/* INTRO */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">
            What Is Android App Bundle?
          </h2>

          <p className="text-gray-300 leading-8">
            Android App Bundle (.aab) is the official upload format for Google
            Play Store. Flutter developers use signed release bundles to publish
            apps securely on Play Console.
          </p>
        </section>

        {/* STEP 1 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            1. Create Upload Keystore (.jks)
          </h2>

          <div className="bg-zinc-900 rounded-2xl p-6 overflow-auto">
            <pre className="text-green-400">
{`keytool -genkey -v -keystore bismillahtechnology.jks -keyalg RSA -keysize 2048 -validity 10000 -alias bismillah`}
            </pre>
          </div>

          <p className="text-gray-300 mt-4">
            This command creates your secure signing keystore.
          </p>
        </section>

        {/* STEP 2 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            2. Place JKS File Correctly
          </h2>

          <p className="text-gray-300 mb-4">
            Put your keystore file here:
          </p>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <pre className="text-yellow-400">
{`project_folder/
 ├── android/
 │    └── app/
 │         ├── bismillahtechnology.jks
 │         └── build.gradle.kts
 │
 ├── key.properties`}
            </pre>
          </div>
        </section>

        {/* STEP 3 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            3. Create key.properties
          </h2>

          <div className="bg-zinc-900 rounded-2xl p-6 overflow-auto">
            <pre className="text-cyan-400">
{`storePassword=YOUR_PASSWORD
keyPassword=YOUR_PASSWORD
keyAlias=bismillah
storeFile=bismillahtechnology.jks`}
            </pre>
          </div>
        </section>

        {/* STEP 4 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            4. Configure build.gradle.kts
          </h2>

          <div className="bg-zinc-900 rounded-2xl p-6 overflow-auto">
            <pre className="text-pink-400 text-sm">
{`import java.util.Properties
import java.io.FileInputStream

val keystoreProperties = Properties()
val keystorePropertiesFile = rootProject.file("key.properties")

if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(FileInputStream(keystorePropertiesFile))
}

android {

    signingConfigs {
        create("release") {
            keyAlias = keystoreProperties["keyAlias"] as String
            keyPassword = keystoreProperties["keyPassword"] as String
            storeFile = file(keystoreProperties["storeFile"] as String)
            storePassword = keystoreProperties["storePassword"] as String
        }
    }

    buildTypes {
        release {
            signingConfig = signingConfigs.getByName("release")

            isMinifyEnabled = false
            isShrinkResources = false
        }
    }
}`}
            </pre>
          </div>
        </section>

        {/* COMMANDS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            5. Build Release App Bundle
          </h2>

          <div className="space-y-5">

            <div className="bg-zinc-900 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                flutter clean
              </h3>

              <p className="text-gray-300">
                Removes old cache and broken build files.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                flutter pub get
              </h3>

              <p className="text-gray-300">
                Downloads dependencies and refreshes packages.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                flutter build appbundle --release
              </h3>

              <p className="text-gray-300">
                Generates signed production Android App Bundle (.aab).
              </p>
            </div>

          </div>
        </section>

        {/* OUTPUT */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            6. Final AAB File Location
          </h2>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <pre className="text-green-400">
{`build/app/outputs/bundle/release/app-release.aab`}
            </pre>
          </div>

          <p className="text-gray-300 mt-4">
            Upload this file to Google Play Console.
          </p>
        </section>

        {/* ERRORS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Common Errors & Fixes
          </h2>

          <div className="space-y-5">

            <div className="bg-red-950 border border-red-700 rounded-2xl p-5">
              <h3 className="text-xl font-bold text-red-400 mb-2">
                Keystore file not found
              </h3>

              <pre className="text-red-300 text-sm">
{`Keystore file not found for signing config release`}
              </pre>

              <p className="text-gray-300 mt-3">
                Your JKS file path is wrong.
              </p>
            </div>

            <div className="bg-red-950 border border-red-700 rounded-2xl p-5">
              <h3 className="text-xl font-bold text-red-400 mb-2">
                Tag number over 30 is not supported
              </h3>

              <pre className="text-red-300 text-sm">
{`Failed to read key from store`}
              </pre>

              <p className="text-gray-300 mt-3">
                Usually caused by:
              </p>

              <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-2">
                <li>Corrupted JKS file</li>
                <li>Wrong keystore type</li>
                <li>Old unsupported key format</li>
                <li>Wrong alias or password</li>
              </ul>

              <p className="text-gray-300 mt-4">
                Best solution:
              </p>

              <div className="bg-black rounded-xl p-4 mt-3">
                <pre className="text-green-400 text-sm">
{`Create a new JKS file again using keytool`}
                </pre>
              </div>
            </div>

          </div>
        </section>

        {/* BONUS */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Bonus Production Build Command
          </h2>

          <div className="bg-zinc-900 rounded-2xl p-6 overflow-auto">
            <pre className="text-green-400">
{`flutter build appbundle --release --obfuscate --split-debug-info=debug-info`}
            </pre>
          </div>

          <p className="text-gray-300 mt-4">
            This reduces reverse engineering and improves release security.
          </p>
        </section>

        {/* FOOTER */}
        <div className="text-center border-t border-zinc-800 pt-10">
          <p className="text-gray-500">
            Flutter Android Release Guide • Modern React Blog UI
          </p>
        </div>

      </div>
    </div>
  );
}