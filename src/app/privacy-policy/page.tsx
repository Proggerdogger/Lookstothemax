"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <a href="/" className="text-blue-400 font-bold text-lg hover:underline">
              ← Back
            </a>
          </div>

          <h1 className="text-4xl font-bold mb-2 text-center">Privacy Policy</h1>
          <p className="text-gray-400 text-center mb-10">Last Updated: January 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              LooksMax Plus ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you use our facial analysis app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data We Collect</h2>
            
            <h3 className="text-xl font-bold text-blue-400 mt-6 mb-2">Photos</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you upload or take photos for facial analysis, these images are processed locally on your device and sent to our secure servers for AI analysis. Photos are used solely for analysis purposes and are not stored permanently.
            </p>

            <h3 className="text-xl font-bold text-blue-400 mt-6 mb-2">Facial Measurements</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We extract facial landmark coordinates, measurements, and ratios using MediaPipe technology. This data is processed to provide analysis results and may be temporarily stored locally on your device.
            </p>

            <h3 className="text-xl font-bold text-blue-400 mt-6 mb-2">Analysis History</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your analysis results, ratings, and timestamps are stored locally on your device. This allows you to review your previous analyses and track progress over time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the following third-party services to provide our analysis features:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li>xAI (Grok): For AI-powered facial analysis and attractiveness ratings</li>
              <li>Perfect Corp YCE: For virtual hairstyle generation</li>
              <li>Google MediaPipe: For facial landmark detection (processed locally)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed italic">
              These services receive your photos only for processing and do not retain them permanently.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your data is used exclusively to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li>Provide facial analysis and attractiveness ratings</li>
              <li>Generate personalized improvement recommendations</li>
              <li>Enable virtual hairstyle try-on features</li>
              <li>Store your analysis history locally for review</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Storage and Security</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li>All analysis history and measurements are stored locally on your device only</li>
              <li>Photos are not permanently stored on our servers</li>
              <li>We implement industry-standard security measures to protect data in transit</li>
              <li>No personal data is shared with advertisers or third parties for marketing purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li>Access all data stored on your device</li>
              <li>Delete all your data at any time (see below)</li>
              <li>Opt out of data processing by uninstalling the app</li>
              <li>Contact us with privacy concerns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            <a href="mailto:adrian@helpllaround.com" className="text-blue-400 underline text-lg">
              adrian@helpllaround.com
            </a>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Delete Your Data</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You can delete all your stored data at any time. This will permanently remove:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>All facial analysis history</li>
              <li>Cached measurement images</li>
              <li>Stored facial measurements</li>
              <li>Any locally saved analysis results</li>
            </ul>
            
            <div className="flex justify-center mb-10">
              <button 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
                onClick={() => alert('Data deletion is handled within the mobile app.')}
              >
                Delete All My Data
              </button>
            </div>

            <p className="text-gray-500 text-xs italic text-center leading-relaxed">
              This app is for entertainment and educational purposes only. Results should not be considered medical or professional advice.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
