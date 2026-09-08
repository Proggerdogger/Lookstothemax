import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="font-serif text-4xl tracking-tight md:text-5xl">Contact</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        For business enquiries, write to the company email. We read every
        message.
      </p>

      <div className="mt-12 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl">Email</h2>
          <a
            href="mailto:adriansmark@looksmaxplus.ai"
            className="mt-3 inline-block text-lg underline decoration-gold underline-offset-4"
          >
            adriansmark@looksmaxplus.ai
          </a>
        </div>
        <div>
          <h2 className="font-serif text-2xl">Registered office</h2>
          <address className="mt-3 not-italic leading-relaxed text-muted">
            I LOVE MONEY LTD
            <br />
            71-75 Shelton Street
            <br />
            Covent Garden
            <br />
            London WC2H 9JQ
            <br />
            United Kingdom
          </address>
        </div>
      </div>
    </main>
  );
}
