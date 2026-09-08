import Link from "next/link";

const facts = [
  { label: "Legal name", value: "I LOVE MONEY LTD" },
  { label: "Company number", value: "17446881" },
  { label: "Status", value: "Active" },
  { label: "Company type", value: "Private limited company" },
  { label: "Incorporated", value: "8 September 2026" },
  { label: "Registered in", value: "England and Wales" },
  { label: "Nature of business", value: "58290 — Other software publishing" },
  { label: "Director", value: "Adrian Smark" },
  { label: "Secretary", value: "Adrian Smark" },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-sm tracking-[0.18em] text-gold uppercase">
          Software publishing · London
        </p>
        <h1 className="mt-5 max-w-3xl bg-[linear-gradient(100deg,_#f3efe4_0%,_#d9b45a_55%,_#f3efe4_100%)] bg-clip-text font-serif text-5xl leading-[1.05] tracking-tight text-transparent drop-shadow-[0_2px_24px_rgba(217,180,90,0.25)] md:text-7xl">
          I LOVE MONEY LTD
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          A private limited company that designs, builds and publishes
          software in order to make its founder money.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="bg-ink px-5 py-3 text-sm text-paper hover:opacity-90"
          >
            Get in touch
          </Link>
          <a
            href="https://find-and-update.company-information.service.gov.uk/company/17446881"
            className="border border-ink px-5 py-3 text-sm hover:bg-ink hover:text-paper"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Companies House
          </a>
        </div>
      </section>

      <section id="what-we-do" className="border-t border-line">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              What we do
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We publish software. That means we turn product ideas into
              working programs, then release and look after them.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl">Product software</h3>
              <p className="mt-2 leading-relaxed text-muted">
                Plan, design, and ship software that people can actually use.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl">Publishing and release</h3>
              <p className="mt-2 leading-relaxed text-muted">
                Put software out into the world: store listings, websites, and
                updates after launch.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl">Ongoing care</h3>
              <p className="mt-2 leading-relaxed text-muted">
                Keep published products running, fix bugs, and improve them
                over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="company" className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Company information
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            These details match the public record at Companies House. They are
            current as of 9 September 2026.
          </p>
          <dl className="mt-10 divide-y divide-line border-y border-line">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-8"
              >
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
            <div className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-8">
              <dt className="text-sm text-muted">Registered office</dt>
              <dd>
                71-75 Shelton Street
                <br />
                Covent Garden
                <br />
                London
                <br />
                WC2H 9JQ
                <br />
                United Kingdom
              </dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-8">
              <dt className="text-sm text-muted">Email</dt>
              <dd>
                <a
                  href="mailto:adriansmark@looksmaxplus.ai"
                  className="underline decoration-gold underline-offset-4"
                >
                  adriansmark@looksmaxplus.ai
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
