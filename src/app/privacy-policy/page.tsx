import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - LooksMaxPlus.ai",
  description: "Privacy Policy for LooksMaxPlus.ai",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-brand-light text-brand-dark min-h-screen font-sans">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-6">Privacy Policy</h1>
          <p className="mb-4">Last Updated: June 25, 2025</p>

          <p className="mb-6">
            We know that how we collect, use, exchange and protect your information is important to you, and we value your trust. Our Privacy Policy outlines how we do this. It covers:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Information we collect</li>
            <li>How we use your information</li>
            <li>Who we may exchange your information with</li>
            <li>How we keep your information secure</li>
            <li>How you can access, update and correct your information</li>
            <li>How you can make a complaint about misuse of your information</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. About this policy</h2>
          <p className="mb-6">
            This privacy policy outlines the personal information handling practices of LooksMaxPlus.ai (‘we’, ‘us’ or ‘our’). We will update this privacy policy when our information handling practices change.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Collection and storage of your personal information</h2>
          <h3 className="text-xl font-semibold mt-6 mb-2">2.1. Why do we collect your personal information?</h3>
          <p className="mb-6">
            To provide you with our free PDF guide and to send you related marketing communications and information about our products and services. We only collect the information we need to provide these services to you.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">2.2. What personal information do we collect and store?</h3>
          <p className="mb-6">
            When you sign up to receive our PDF, the information we collect and store includes your name (first and last) and your email address.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">2.3. How do we collect personal information?</h3>
          <p className="mb-2">
            <strong>Direct collection:</strong> We collect your information when you fill out the form on our website to receive our PDF guide.
          </p>
          <p className="mb-6">
            <strong>Cookies:</strong> We may use cookies (small text files stored in your browser) and other techniques to help us understand how you use our website. This helps us research our users' habits so that we can improve our online products and services. You can set your browser to refuse cookies, but this may affect the functionality of our site.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. What if you don't provide us with your personal information?</h2>
          <p className="mb-6">
            If you don't provide your personal information to us, we will not be able to send you the PDF guide or let you know about other products and services that might be useful to you.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclosure</h2>
          <p className="mb-2">
            Your privacy and the protection of your personal information are very important to us. We do not sell or rent your personal information to other organizations.
          </p>
          <p className="mb-6">
            We may disclose your information to our contracted technology service providers, such as those that host our website servers, manage our IT, or provide email marketing services. Our technology service providers (like our hosting provider Vercel or email providers) may store and process data in various countries. By using our services, you consent to the potential transfer of your information to these locations.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Security of your personal information</h2>
          <p className="mb-6">
            The security of your personal information is a high priority for us. We take reasonable steps to protect it from misuse, interference and loss, and from unauthorised access, modification or disclosure. We utilize reputable third-party services that have their own robust security measures, including data encryption and firewalls.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Direct Marketing</h2>
          <p className="mb-6">
            We will send you direct marketing communications and information about our products and services. We will always let you know that you can opt-out from receiving our marketing offers and will provide an easy way to do so, such as an "unsubscribe" link in our emails.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Accessing and correcting your personal information</h2>
          <p className="mb-6">
            You have the right to ask for access to the personal information that we hold about you and to ask that we correct it if it's inaccurate. You can ask for access or correction by contacting us (see section 8). We will ask you to verify your identity before we give you access to your information or correct it.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. How to make an enquiry or a complaint</h2>
          <p className="mb-6">
            If you have an enquiry or a complaint about how we handle your personal information, please contact us at: <a href="mailto:privacy@looksmaxplus.ai" className="text-brand-pink hover:underline">privacy@looksmaxplus.ai</a>. We are committed to resolving your complaint and doing the right thing by our users. If you still feel your issue hasn't been resolved, you can raise your concern with the relevant data protection authority in your jurisdiction.
          </p>

        </div>
      </main>
    </div>
  );
}
