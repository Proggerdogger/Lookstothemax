"use client";

import React from "react";

export default function Support() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <a href="/" className="text-blue-400 font-bold text-lg hover:underline">
              ← Back
            </a>
          </div>

          <h1 className="text-4xl font-bold mb-2 text-center">LooksMax Plus Support</h1>
          <p className="text-gray-400 text-center mb-10">
            Welcome to the LooksMax Plus support center. My goal is to help you understand your facial aesthetics and provide the best possible experience with my AI-powered analysis.
          </p>

          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions (FAQ)</h2>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">1. How does the analysis work?</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              LooksMax Plus uses a two-step process:
            </p>

            <h4 className="text-xl font-bold text-blue-400 mt-6 mb-2">MediaPipe Geometry</h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              I use advanced computer vision to map 468 3D facial landmarks to calculate precise geometric measurements (canthal tilt, facial thirds, midface ratio, etc.).
            </p>

            <h4 className="text-xl font-bold text-blue-400 mt-6 mb-2">xAI (Grok) Intelligence</h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              These measurements are then analyzed by the AI model to provide qualitative insights and personalized attractiveness ratings.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">2. What are the usage limits?</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I have the following daily limits:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li><span className="font-bold text-white">Face Analysis:</span> 3 scans on your first day, and 2 scans per day thereafter.</li>
              <li><span className="font-bold text-white">Hairstyle Generation:</span> 2 generations per week.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              These limits reset automatically based on your local device time.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">3. Is my data private?</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Yes. LooksMax Plus is designed with privacy in mind. I do not store your personal identity. Images are processed to provide your report, and you have full control over your local history. You can clear your data at any time within the app settings.
            </p>
          </section>

          <h2 className="text-3xl font-bold mb-6 mt-12">Technical Support</h2>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">App Crashes or Freezes</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              If the app crashes, my integrated Sentry system automatically notifies me with a technical log and a session replay so I can fix the bug. You don&apos;t need to do anything! Just ensure you are running the latest version of the app from the Play Store or App Store.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">&ldquo;Server Overloaded&rdquo; Message</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you see a message saying the server is busy, it means the AI processors are currently at maximum capacity. Please wait 2–5 minutes (or hours) and try again.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Contact me</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              If your question isn&apos;t answered above, or you have feedback on how I can improve my AI models, then you can reach out to me:
            </p>
            <p className="text-gray-300 leading-relaxed mb-2">
              <span className="font-bold text-white">Email: </span>
              <span className="text-gray-300">
                adrian [at] helpallround [dot] com
              </span>
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              When contacting me, please include your device model (e.g., iPhone 15, Samsung S23) and a description of what you were doing when the issue occurred.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
