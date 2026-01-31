"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";

// Note: Metadata export is not supported in client components.
// We can set the title in the RootLayout or a parent component if needed.
/*
export const metadata: Metadata = {
  title: "Survey - LooksMaxPlus.ai",
  description: "Help us build the best product for you and get one month free.",
};
*/

export default function SurveyPage() {
  const [submissionCount, setSubmissionCount] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    
    const formData = new FormData(event.currentTarget);

    if (formData.getAll('topics').length === 0) {
      setFormError("Please select at least one topic you're interested in.");
      return;
    }

    const data = {
      firstName: formData.get('first-name'),
      lastName: formData.get('last-name'),
      email: formData.get('email'),
      topics: formData.getAll('topics'),
      price: formData.get('price'),
      suggestions: formData.get('suggestions'),
    };

    try {
      const response = await fetch('/api/submit-survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        setFormError(errorData.error || "Something went wrong. Please try again.");
      }
    } catch {
      setFormError("An error occurred. Please check your connection and try again.");
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-brand-light min-h-screen font-sans flex items-center justify-center px-4">
        <div className="bg-brand-orange p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-white text-lg mb-6">
            Your survey has been submitted. We'll notify you at the email provided when we launch, and you'll receive your free month!
          </p>
          <a href="/" className="inline-block bg-brand-pink text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-light min-h-screen font-sans">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-brand-dark">LooksMaxPlus.ai</a>
          <div className="text-brand-dark font-medium">
            {submissionCount !== null ? `${submissionCount}/125 spots taken` : 'Loading spots...'}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-brand-dark mb-4">Help Us Build the Future of Looksmaxxing</h1>
          <p className="text-lg text-gray-300">
            Fill out this 1-minute survey to get <span className="text-brand-pink font-bold">1 month free</span> and early access.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-brand-orange p-8 rounded-lg shadow-lg">
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="first-name" className="block text-white text-sm font-bold mb-2">First Name *</label>
              <input type="text" id="first-name" name="first-name" required className="block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-brand-pink focus:border-brand-pink" />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-white text-sm font-bold mb-2">Last Name *</label>
              <input type="text" id="last-name" name="last-name" required className="block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-brand-pink focus:border-brand-pink" />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email Address *</label>
            <input type="email" id="email" name="email" required className="block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-brand-pink focus:border-brand-pink" />
          </div>

          <fieldset className="mb-6">
            <legend className="block text-white text-sm font-bold mb-2">Which areas of looksmaxxing are you most interested in? (Select all that apply)</legend>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input id="topic-skin" name="topics" type="checkbox" value="skin" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 rounded bg-gray-700" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="topic-skin" className="font-medium text-gray-300">Skincare & Clear Skin</label>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input id="topic-jaw" name="topics" type="checkbox" value="jaw" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 rounded bg-gray-700" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="topic-jaw" className="font-medium text-gray-300">Jawline & Bone Structure</label>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input id="topic-hair" name="topics" type="checkbox" value="hair" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 rounded bg-gray-700" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="topic-hair" className="font-medium text-gray-300">Hair & Hairstyles</label>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input id="topic-eyes" name="topics" type="checkbox" value="eyes" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 rounded bg-gray-700" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="topic-eyes" className="font-medium text-gray-300">Eyes & Eye Area</label>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input id="topic-body" name="topics" type="checkbox" value="body" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 rounded bg-gray-700" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="topic-body" className="font-medium text-gray-300">Body Composition & Gym</label>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input id="topic-style" name="topics" type="checkbox" value="style" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 rounded bg-gray-700" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="topic-style" className="font-medium text-gray-300">Fashion & Style</label>
                </div>
              </div>
            </div>
          </fieldset>
          
          <fieldset className="mb-6">
            <legend className="block text-white text-sm font-bold mb-2">How much per month would you be willing to pay for this AI?</legend>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input id="price-0-1" name="price" type="radio" value="0-1" required className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 bg-gray-700" />
                <label htmlFor="price-0-1" className="ml-3 block text-sm font-medium text-gray-300">$0-$1</label>
              </div>
              <div className="flex items-center">
                <input id="price-1-5" name="price" type="radio" value="1-5" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 bg-gray-700" />
                <label htmlFor="price-1-5" className="ml-3 block text-sm font-medium text-gray-300">$1-$5</label>
              </div>
              <div className="flex items-center">
                <input id="price-5-10" name="price" type="radio" value="5-10" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 bg-gray-700" />
                <label htmlFor="price-5-10" className="ml-3 block text-sm font-medium text-gray-300">$5-$10</label>
              </div>
              <div className="flex items-center">
                <input id="price-10-15" name="price" type="radio" value="10-15" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 bg-gray-700" />
                <label htmlFor="price-10-15" className="ml-3 block text-sm font-medium text-gray-300">$10-$15</label>
              </div>
              <div className="flex items-center">
                <input id="price-15-plus" name="price" type="radio" value="15+" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 bg-gray-700" />
                <label htmlFor="price-15-plus" className="ml-3 block text-sm font-medium text-gray-300">$15+</label>
              </div>
            </div>
          </fieldset>
          
          <div className="mb-6">
            <label htmlFor="suggestions" className="block text-white text-sm font-bold mb-2">Is there anything else you'd like to see in a 'looksmaxxing' product?</label>
            <textarea id="suggestions" name="suggestions" rows={4} className="block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-brand-pink focus:border-brand-pink" placeholder="Your suggestions..." required></textarea>
          </div>
          
          <div className="text-right">
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-pink text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Submit Survey
            </button>
          </div>
          {formError && <p className="text-red-400 text-sm mt-4 text-right">{formError}</p>}

        </form>
      </main>
    </div>
  );
}
