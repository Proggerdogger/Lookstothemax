"use client";

import type { Metadata } from "next";
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
      setFormError("Please select at least one topic you are interested in.");
      return;
    }

    const data: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      // Handle checkboxes
      if (data[key]) {
        if (!Array.isArray(data[key])) {
          data[key] = [data[key]];
        }
        data[key].push(value);
      } else {
        data[key] = value;
      }
    });

    try {
      const response = await fetch('/api/submit-survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      setIsSubmitted(true);

    } catch (error: any) {
      console.error('There was a problem with the submission:', error);
      setFormError(error.message || 'An error occurred. Please try again.');
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-brand-light text-brand-dark min-h-screen font-sans flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Thank You!</h1>
          <p className="text-lg text-gray-300">
            Your survey has been submitted successfully. We'll be in touch soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-light text-brand-dark min-h-screen font-sans">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Help Us Build a Better Product</h1>
          <p className="text-lg text-gray-300 mb-8">
            Your feedback is important. Complete this survey to get an email notification at launch and <strong>one month of free access</strong>.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg mb-8 inline-block">
            <p className="font-bold text-white">
              <span className="text-brand-pink">{submissionCount !== null ? submissionCount : '...'}</span> people have already completed the survey.
            </p>
            <p className="text-sm text-gray-400 mt-1">This offer is limited to the first 125 people!</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-brand-orange p-8 rounded-lg shadow-lg">
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="first-name" className="block text-white text-sm font-bold mb-2">First Name</label>
              <input type="text" name="first-name" id="first-name" placeholder="First name *" required className="block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-brand-pink focus:border-brand-pink" />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-white text-sm font-bold mb-2">Last Name</label>
              <input type="text" name="last-name" id="last-name" placeholder="Last name *" required className="block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-brand-pink focus:border-brand-pink" />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Your Email Address</label>
            <p className="text-gray-400 text-xs mb-2">We'll use this to send your free month of access upon launch.</p>
            <input type="email" name="email" id="email" placeholder="you@example.com" required className="block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-brand-pink focus:border-brand-pink" />
          </div>

          <div className="mb-6">
            <label htmlFor="age" className="block text-white text-sm font-bold mb-2">Age</label>
            <input type="number" name="age" id="age" placeholder="Your age" required className="block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-brand-pink focus:border-brand-pink" />
          </div>

          <fieldset className="mb-6">
            <legend className="block text-white text-sm font-bold mb-2">How would you describe your current knowledge of looksmaxxing?</legend>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input id="knowledge-beginner" name="knowledge" type="radio" value="beginner" required className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 bg-gray-700" />
                <label htmlFor="knowledge-beginner" className="ml-3 block text-sm font-medium text-gray-300">Beginner</label>
              </div>
              <div className="flex items-center">
                <input id="knowledge-intermediate" name="knowledge" type="radio" value="intermediate" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 bg-gray-700" />
                <label htmlFor="knowledge-intermediate" className="ml-3 block text-sm font-medium text-gray-300">Intermediate</label>
              </div>
              <div className="flex items-center">
                <input id="knowledge-expert" name="knowledge" type="radio" value="expert" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 bg-gray-700" />
                <label htmlFor="knowledge-expert" className="ml-3 block text-sm font-medium text-gray-300">Expert</label>
              </div>
            </div>
          </fieldset>
          
          <fieldset className="mb-6">
            <legend className="block text-white text-sm font-bold mb-2">What most attracts you to a looksmaxxing AI?</legend>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input id="attraction-tailored" name="attraction" type="radio" value="tailored-results" required className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 bg-gray-700" />
                <label htmlFor="attraction-tailored" className="ml-3 block text-sm font-medium text-gray-300">Tailored results to your face</label>
              </div>
              <div className="flex items-center">
                <input id="attraction-inexpensive" name="attraction" type="radio" value="inexpensive" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 bg-gray-700" />
                <label htmlFor="attraction-inexpensive" className="ml-3 block text-sm font-medium text-gray-300">Inexpensive</label>
              </div>
              <div className="flex items-center">
                <input id="attraction-know-how" name="attraction" type="radio" value="know-how" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 bg-gray-700" />
                <label htmlFor="attraction-know-how" className="ml-3 block text-sm font-medium text-gray-300">Convenient</label>
              </div>
            </div>
          </fieldset>
          
          <fieldset className="mb-6">
            <legend className="block text-white text-sm font-bold mb-2">What topics are you most interested in? (Select all that apply)</legend>
            <div className="mt-2 space-y-2">
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input id="topic-skincare" name="topics" type="checkbox" value="skincare" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 rounded bg-gray-700" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="topic-skincare" className="font-medium text-gray-300">Skincare & Grooming</label>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input id="topic-fitness" name="topics" type="checkbox" value="fitness" className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-500 rounded bg-gray-700" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="topic-fitness" className="font-medium text-gray-300">Fitness & Body Composition</label>
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