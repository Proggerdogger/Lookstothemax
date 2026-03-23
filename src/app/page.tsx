"use client";

import React, { useState } from "react";

export default function Home() {
  const [isFun, setIsFun] = useState(true);

  return (
    <div className="bg-black text-white min-h-screen font-mono flex flex-col items-center justify-center p-4 text-center overflow-hidden relative">
      <div className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <span
          className={`text-xl font-bold transition-colors duration-300 ${
            isFun ? "text-yellow-400" : "text-gray-600"
          }`}
        >
          Fun
        </span>
        <button
          onClick={() => setIsFun(!isFun)}
          className="relative w-28 h-14 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 cursor-pointer"
          style={{
            backgroundColor: isFun ? "#facc15" : "#6366f1",
          }}
          aria-label={`Switch to ${isFun ? "serious" : "fun"} mode`}
        >
          <div
            className="absolute top-1 w-12 h-12 bg-white rounded-full shadow-md transition-transform duration-300"
            style={{
              transform: isFun ? "translateX(4px)" : "translateX(60px)",
            }}
          />
        </button>
        <span
          className={`text-xl font-bold transition-colors duration-300 ${
            !isFun ? "text-indigo-400" : "text-gray-600"
          }`}
        >
          Serious
        </span>
      </div>

      {isFun ? <FunContent /> : <SeriousContent />}

      <div className="fixed bottom-4 right-4 text-xs text-gray-600">
        {isFun ? "very looksmaxplus.ai" : "looksmaxplus.ai"}
      </div>
    </div>
  );
}

function FunContent() {
  return (
    <>
      <div className="absolute top-24 left-10 text-yellow-400 text-2xl animate-bounce opacity-50">wow</div>
      <div className="absolute top-20 right-20 text-pink-400 text-3xl animate-pulse opacity-40">so aesthetic</div>
      <div className="absolute bottom-20 left-1/4 text-blue-400 text-xl animate-bounce opacity-60">very handsome</div>
      <div className="absolute top-1/3 right-10 text-green-400 text-2xl animate-pulse opacity-50">much jawline</div>
      <div className="absolute bottom-10 right-1/4 text-purple-400 text-3xl animate-bounce opacity-40">very looksmax</div>

      <main className="z-10 max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-yellow-400 tracking-tighter">
          LOOKSMAX PLUS
        </h1>

        <div className="space-y-6 text-2xl md:text-4xl font-bold">
          <p className="text-pink-500 transform -rotate-2">many face analysis</p>
          <p className="text-blue-500 transform rotate-3">many good looks</p>
          <p className="text-green-500 transform -rotate-1">Much satisfied customer</p>
          <p className="text-purple-500 transform rotate-2">some hair change</p>
        </div>

        <div className="mt-12 space-y-4 text-gray-400 text-lg">
          <p>wow such ai</p>
          <p>very computer vision</p>
          <p>so geometry</p>
          <p>much landmark</p>
          <p>very 468 points</p>
          <p>wow such grok</p>
          <p>very intelligence</p>
          <p>so measurement</p>
          <p>much ratio</p>
          <p>very tilt</p>
          <p>wow such attractiveness</p>
          <p>very rating</p>
          <p>so insight</p>
          <p>much personalized</p>
          <p>very report</p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm opacity-50">
          <a href="/support" className="hover:text-yellow-400 underline">much support</a>
          <a href="/privacy" className="hover:text-yellow-400 underline">very privacy</a>
        </div>
      </main>
    </>
  );
}

function SeriousContent() {
  return (
    <main className="z-10 max-w-3xl px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-10 text-indigo-400 tracking-tight">
        LOOKSMAX PLUS
      </h1>

      <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
        LooksMax Plus is an advanced AI-powered facial analysis platform that
        delivers brutally honest, data-driven insights into your facial
        aesthetics and attractiveness.
      </p>

      <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
        Using computer vision and Grok AI from xAI, LooksMax Plus performs a
        comprehensive 11-step analysis combining precise quantitative
        measurements with sophisticated qualitative assessment. Our system
        analyzes 478 facial landmarks to evaluate critical aesthetic factors
        including jaw structure, eye harmony, facial proportions, skin quality,
        symmetry, and overall facial harmony.
      </p>

      <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
        Unlike generic beauty filters or superficial apps, LooksMax Plus
        provides scientific-grade analysis with specific, actionable
        recommendations. We identify your strongest features that enhance your
        attractiveness, as well as the limiting factors holding you back from
        reaching your full potential. Every analysis includes detailed trait
        ratings, precise measurements, and a personalized looksmaxxing plan
        designed to maximize your genetic potential.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-indigo-300 mb-4">
          The platform combines:
        </h2>
        <ul className="space-y-3 text-gray-300 text-base md:text-lg text-left">
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 mt-1">&#9670;</span>
            <span>Native MediaPipe for real-time facial landmark detection</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 mt-1">&#9670;</span>
            <span>Grok AI for expert-level aesthetic interpretation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 mt-1">&#9670;</span>
            <span>Clinical-grade measurements for objective analysis</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-400 mt-1">&#9670;</span>
            <span>
              Personalized improvement protocols for jaw, eyes, skin, hair, and
              overall facial harmony
            </span>
          </li>
        </ul>
      </div>

      <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10">
        Whether you&apos;re just beginning your looksmaxxing journey or looking
        to break through plateaus, LooksMax Plus gives you the clarity and
        direction needed to become the best version of yourself.
      </p>

      <div className="flex flex-wrap justify-center gap-8 text-sm opacity-60">
        <a href="/support" className="hover:text-indigo-400 underline">Support</a>
        <a href="/privacy" className="hover:text-indigo-400 underline">Privacy</a>
      </div>
    </main>
  );
}
