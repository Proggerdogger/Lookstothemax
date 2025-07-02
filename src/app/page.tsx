"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export default function Home() {
  const [submissionCount, setSubmissionCount] = useState<number | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const counterRef = doc(db, "app-state", "surveyCounter");
    const unsubscribe = onSnapshot(counterRef, (doc) => {
      if (doc.exists()) {
        setSubmissionCount(doc.data().count);
      } else {
        setSubmissionCount(0);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage("");

    try {
      const response = await fetch('/api/get-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormMessage("Success! Check your email for the PDF.");
        setFirstName("");
        setLastName("");
        setEmail("");
      } else {
        setFormMessage(data.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      setFormMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-light min-h-screen font-sans">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-brand-dark">LooksMaxPlus.ai</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="text-center md:text-left md:col-span-3">
            <p className="text-lg font-semibold text-brand-pink uppercase">
              6 minute looksmaxxing advice
            </p>
            <h2 className="text-3xl md:text-3xl font-extrabold text-brand-dark mt-2">
              BECOME BETTER LOOKING WITH 5 QUICK TIPS
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              We'll cover scientifically proven methods to look better.
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <div className="relative w-full max-w-xs md:max-w-sm aspect-[9/16] bg-black rounded-lg shadow-lg overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/EAnrBsTdWKc" 
                  title="Looksmaxxing Tips Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-brand-orange p-8 rounded-lg shadow-lg md:col-span-2">
            <h3 className="text-2xl font-bold text-white text-center">
              Don't have 6 minutes?
            </h3>
            <p className="text-white text-center mt-2 mb-6">
              Enter your first name, last name and email here to get the looksmaxxing PDF for free
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="sr-only">First name</label>
                  <input 
                    type="text" 
                    name="first-name" 
                    id="first-name" 
                    placeholder="First name *" 
                    className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-brand-pink focus:border-brand-pink" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="sr-only">Last name</label>
                  <input 
                    type="text" 
                    name="last-name" 
                    id="last-name" 
                    placeholder="Last name *" 
                    className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-brand-pink focus:border-brand-pink" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Email *" 
                  className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-brand-pink focus:border-brand-pink" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full mt-6 bg-brand-pink text-white font-bold py-4 px-4 rounded-md hover:bg-opacity-90 transition-colors hover:underline cursor-pointer disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'GET THE PDF'}
              </button>
              {formMessage && <p className="text-center text-sm text-white mt-4">{formMessage}</p>}
            </form>
            <p className="text-center text-xs text-gray-400 mt-6">
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </main>
      <section className="bg-brand-orange py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-dark">
            Struggling to look better but don't know how?
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-6 px-2">
          <div className="text-lg text-gray-300 max-w-xl text-center md:text-left">
            <p>
            Gaining better looks helps you get the respect of your peers, gain odds in the dating market and feel great. Our AI will give parts of your body scores out of 10, and then a full looks score out of 10, so you know where you stand. Then, with our custom looksmaxxing AI we'll show you exactly where the problem areas on your face are and give you tailored non-surgical advice to help you look your best. 
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[410px] h-[400px]">
              <Image src="Simpler_gif.gif" alt="Facial Analysis" fill className="object-cover rounded-lg" unoptimized />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-teal py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Be the First to Know & Get a Free Month!</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            In exchange for filling out a short survey on our upcoming looksmaxxing AI, get one month's free use of the product and an email notification when it's released.
            <strong className="text-white block mt-2">This offer is limited to the first 125 people.</strong>
            <span className="text-gray-300 block mt-2">
              {submissionCount !== null ? submissionCount : '...'} people have submitted the form.
            </span>
          </p>
          <a href="/survey" className="mt-8 inline-block bg-brand-pink text-white font-bold py-4 px-8 rounded-md hover:bg-opacity-90 transition-colors">
            Take the Survey Now
          </a>
        </div>
      </section>
    </div>
  );
}
