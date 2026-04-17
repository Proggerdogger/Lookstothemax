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
          <p className="text-gray-400 text-center mb-10">Last Updated: April 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              LooksMax Plus (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you use our facial analysis app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data We Collect</h2>

            <h3 className="text-xl font-bold text-blue-400 mt-6 mb-2">Photos</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you upload or take photos for facial analysis, images are sent over an encrypted connection to our processing server and forwarded to our AI analysis provider. Photos are used solely to generate your analysis results and are not permanently retained on our servers or by our analysis providers.
            </p>

            <h3 className="text-xl font-bold text-blue-400 mt-6 mb-2">Facial Measurements</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We extract facial landmark coordinates, measurements, and ratios using Google MediaPipe, which runs entirely on your device. This data is processed to provide analysis results and is stored locally on your device only.
            </p>

            <h3 className="text-xl font-bold text-blue-400 mt-6 mb-2">Analysis History</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your analysis results, ratings, and timestamps are stored locally on your device. This allows you to review your previous analyses and track progress over time.
            </p>

            <h3 className="text-xl font-bold text-blue-400 mt-6 mb-2">Subscription &amp; Purchase Data</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you subscribe to LooksMax Plus, your purchase is processed entirely by Apple (App Store / StoreKit) or Google (Google Play Billing), depending on your platform. We do not see or store your payment card number, billing address, or other financial details. We only receive the information the platform provides to us: a transaction identifier, product identifier, purchase/renewal/expiry timestamps, and subscription status. This is used to verify your entitlement and deliver the paid features.
            </p>

            <h3 className="text-xl font-bold text-blue-400 mt-6 mb-2">Device &amp; Technical Information</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              To operate the app and measure advertising, we (or our providers) may process limited technical information such as device model, operating system version, app version, language, IP address, advertising identifier (IDFA on iOS / Android Advertising ID on Android, only when you have granted tracking permission), and timestamps of in-app events.
            </p>

            <h3 className="text-xl font-bold text-blue-400 mt-6 mb-2">Crash &amp; Diagnostic Data</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use Sentry to collect crash reports, error logs, and performance diagnostics. These reports contain technical details about the error and your device but never include your photos, facial measurements, or analysis results.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the following third-party services, each acting as a data processor on our behalf for a specific purpose:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li><strong>xAI (Grok):</strong> AI-powered facial analysis and attractiveness ratings. Receives your photo only for the duration of processing.</li>
              <li><strong>Google Cloud AI Services:</strong> Optional image generation for style, hairstyle, and &quot;inspiration&quot; visualisations. Only receives your photo when you use those features.</li>
              <li><strong>Google MediaPipe:</strong> On-device facial landmark detection. Runs locally; no photo or measurement data leaves your device through MediaPipe.</li>
              <li><strong>Apple (App Store / StoreKit) &amp; Google (Google Play Billing):</strong> Subscription purchase processing, renewal, cancellation, and receipt validation. Governed by Apple&apos;s and Google&apos;s respective privacy policies.</li>
              <li><strong>TikTok (TikTok Business SDK, operated by TikTok Ltd. / ByteDance):</strong> Advertising attribution and conversion measurement. See &quot;Advertising &amp; Tracking&quot; below.</li>
              <li><strong>Sentry:</strong> Crash reporting and error diagnostics.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed italic">
              None of these providers receive your photos for any purpose other than the one described, and none are permitted to use your photos to train their own models or for their own marketing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Subscriptions, Payments &amp; Free Trials</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              LooksMax Plus offers a paid weekly subscription. All purchases, renewals, refunds, and cancellations are handled directly by Apple or Google through your App Store or Google Play account. We never receive, see, or store your payment card details.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your subscription automatically renews for the same price and period unless you cancel at least 24 hours before the end of the current period. You can manage or cancel your subscription at any time from your device&apos;s Subscriptions settings (iOS: Settings → [your name] → Subscriptions; Android: Google Play → Subscriptions).
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you are eligible for a free trial, we store a local timestamp on your device to track the trial period. Subscription status checks may contact Apple or Google to verify your current entitlement.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We may retain transaction and receipt data for the period required to comply with tax, accounting, consumer-protection, and anti-fraud obligations (typically up to 7 years, depending on your jurisdiction).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Advertising &amp; Tracking</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the TikTok Business SDK to measure the effectiveness of our advertising campaigns on TikTok. Specifically, we record a small number of non-sensitive in-app events so that TikTok can attribute ad impressions and clicks to downstream actions. The events we send are:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li><em>LaunchAPP</em> — the app was opened</li>
              <li><em>Registration</em> — a user completed the initial consent/onboarding step</li>
              <li><em>CompleteTutorial</em> — an analysis was completed</li>
              <li><em>ViewPaywall</em> — the paywall screen was displayed</li>
              <li><em>Subscribe</em> — the user tapped the subscribe button</li>
              <li><em>CompletePayment</em> — a subscription purchase completed successfully</li>
              <li><em>ViewScreen_*</em> — navigation to key screens inside the app</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              Alongside these events, the SDK transmits standard attribution signals such as your IP address, advertising identifier (only when tracking has been permitted), TikTok click identifier (if you arrived from a TikTok ad), device model, and operating system version. These events never include your photos, facial measurements, analysis results, name, or email address.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              TikTok acts as an independent data controller for the data it receives and may process it outside your country of residence, including in Singapore, the United States, Ireland, and, for certain operations, mainland China. You can review TikTok&apos;s practices and opt-out controls at{' '}
              <a href="https://www.tiktok.com/legal/page/row/privacy-policy/en" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">tiktok.com/legal/page/row/privacy-policy/en</a>
              {' '}and{' '}
              <a href="https://www.tiktok.com/legal/page/row/personalized-ads-controls/en" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">tiktok.com/legal/page/row/personalized-ads-controls/en</a>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              On iOS, you will be prompted to allow tracking via Apple&apos;s App Tracking Transparency framework. You can allow or deny this request, and you can change your choice at any time in Settings → Privacy &amp; Security → Tracking. On Android, you can reset or opt out of your Advertising ID in Settings → Privacy → Ads.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The TikTok SDK is not initialised, and no TikTok events are sent, until you have accepted our in-app privacy consent. If you decline tracking, or live in a jurisdiction where additional consent is required and you do not grant it, you will still see ads but they may be less relevant, and core app functionality (facial analysis, ratings, recommendations, subscriptions) will continue to work normally.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For California residents: we do not sell your personal information for money. However, the sharing of device and event data with TikTok for advertising attribution may be considered a &quot;sale&quot; or &quot;share&quot; of personal information under the CCPA/CPRA. You can opt out by declining the ATT prompt on iOS, resetting / opting out of your Advertising ID on Android, or by emailing us at the address at the bottom of this policy with the subject line &quot;Do Not Sell or Share My Personal Information&quot;.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your data is used to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li>Provide facial analysis and attractiveness ratings</li>
              <li>Generate personalised improvement recommendations</li>
              <li>Generate optional style and hairstyle visualisations</li>
              <li>Store your analysis history locally for review</li>
              <li>Process and validate subscription purchases and free trials</li>
              <li>Diagnose crashes and improve app stability</li>
              <li>Measure advertising effectiveness and show relevant ads</li>
              <li>Comply with legal, tax, and consumer-protection obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Some of our service providers (including xAI, Google, Sentry, Apple, and TikTok) operate infrastructure in the United States and other countries outside your country of residence. Where we transfer personal data out of the European Economic Area, United Kingdom, or Switzerland, we rely on legally recognised transfer mechanisms such as the European Commission&apos;s Standard Contractual Clauses, UK International Data Transfer Addenda, or equivalent safeguards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Storage and Security</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li>All analysis history and measurements are stored locally on your device only</li>
              <li>Photos are not permanently stored on our servers or by our AI providers</li>
              <li>Data in transit is protected using TLS 1.2 or higher</li>
              <li>Subscription and payment processing is performed by Apple and Google; we never store your card details</li>
              <li>Limited advertising measurement data may be shared with TikTok (see Advertising &amp; Tracking above)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your jurisdiction (including under the GDPR, UK GDPR, and CCPA/CPRA), you may have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to or restrict certain processing</li>
              <li>Opt out of ad tracking at any time via your device settings</li>
              <li>Opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal information (California)</li>
              <li>Cancel your subscription directly through the App Store or Google Play</li>
              <li>Opt out of all data processing by uninstalling the app</li>
              <li>Lodge a complaint with your local data-protection authority</li>
              <li>Contact us with privacy concerns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              LooksMax Plus is not directed at children under the age of 16 and we do not knowingly collect personal data from children. If you believe a child has provided personal data through the app, please contact us and we will delete it.
            </p>
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
