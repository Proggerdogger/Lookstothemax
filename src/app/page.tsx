"use client";

import React from "react";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-mono flex flex-col items-center justify-center p-4 text-center overflow-hidden">
      {/* Floating Doge Background Elements */}
      <div className="absolute top-10 left-10 text-yellow-400 text-2xl animate-bounce opacity-50">wow</div>
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

      <div className="fixed bottom-4 right-4 text-xs text-gray-600">
        very looksmaxplus.ai
      </div>
    </div>
  );
}
