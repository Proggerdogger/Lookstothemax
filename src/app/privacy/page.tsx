import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
        Privacy policy
      </h1>
      <p className="mt-3 text-sm text-muted">Last updated: 9 September 2026</p>

      <div className="mt-10 space-y-8 leading-relaxed text-muted">
        <section>
          <h2 className="font-serif text-2xl text-ink">Who we are</h2>
          <p className="mt-3">
            I LOVE MONEY LTD (company number 17446881) is the data controller
            for this website. Our registered office is 71-75 Shelton Street,
            Covent Garden, London, WC2H 9JQ, United Kingdom. Contact:{" "}
            <a
              href="mailto:adriansmark@looksmaxplus.ai"
              className="text-ink underline decoration-gold underline-offset-4"
            >
              adriansmark@looksmaxplus.ai
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">What this site collects</h2>
          <p className="mt-3">
            This website does not ask you to create an account and does not use
            a contact form. If you email us, we receive whatever you send,
            including your email address and the contents of your message. We
            use that information only to reply and to run the business.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">Hosting logs</h2>
          <p className="mt-3">
            Our hosting provider may keep standard server logs such as IP
            address, browser type, and pages visited. These logs are used to
            keep the site running and to fix problems. We do not sell this
            data.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">How long we keep email</h2>
          <p className="mt-3">
            We keep business email for as long as we need it to handle your
            request and to meet legal and accounting rules, then we delete it.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">Your rights</h2>
          <p className="mt-3">
            If you are in the UK or EU, you can ask to see, correct, or delete
            personal data we hold about you. Email{" "}
            <a
              href="mailto:adriansmark@looksmaxplus.ai"
              className="text-ink underline decoration-gold underline-offset-4"
            >
              adriansmark@looksmaxplus.ai
            </a>{" "}
            to make a request. You can also complain to the Information
            Commissioner&apos;s Office (ICO).
          </p>
        </section>
      </div>
    </main>
  );
}
