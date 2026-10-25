import Image from "next/image";
import Link from "next/link";

const appStoreUrl =
  "https://apps.apple.com/us/app/nitro-ai-car-video/id6824505118";

const nitroFeatures = [
  {
    title: "AI car design",
    body: "Upload a photo of your car and restyle it: new paint, wheels, widebody kits, spoilers, underglow and full looks like cyberpunk, drift or luxury.",
  },
  {
    title: "Dream Car",
    body: "Describe the car you want in a sentence and Nitro designs it for you.",
  },
  {
    title: "AI video reels",
    body: "Turn a car photo into a 10-second cinematic reel: reveals, jumps, chases, storms and more, ready to save and share.",
  },
];

const reels = [
  { src: "/nitro/reel-chase.jpg", alt: "Nitro reel: chase" },
  { src: "/nitro/reel-bridge-jump.jpg", alt: "Nitro reel: bridge jump" },
  { src: "/nitro/reel-storm-charged.jpg", alt: "Nitro reel: storm charged" },
  { src: "/nitro/reel-rooftop-leap.jpg", alt: "Nitro reel: rooftop leap" },
];

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
      <section id="nitro" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="flex items-center gap-4">
          <Image
            src="/nitro/icon.png"
            alt="Nitro app icon"
            width={64}
            height={64}
            className="rounded-2xl"
            priority
          />
          <p className="text-sm tracking-[0.18em] text-gold uppercase">
            Our app · iPhone
          </p>
        </div>
        <h1 className="mt-6 max-w-3xl bg-[linear-gradient(100deg,_#f3efe4_0%,_#d9b45a_55%,_#f3efe4_100%)] bg-clip-text font-serif text-5xl leading-[1.05] tracking-tight text-transparent drop-shadow-[0_2px_24px_rgba(217,180,90,0.25)] md:text-7xl">
          Nitro: AI Car &amp; Video
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Design your dream car with AI, then turn it into a cinematic video
          reel. Nitro is made and published by I LOVE MONEY LTD.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={appStoreUrl}
            className="bg-gold px-6 py-3 font-semibold text-paper hover:opacity-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on the App Store
          </a>
        </div>
        <div className="mt-12 overflow-hidden rounded-2xl border border-line">
          <Image
            src="/nitro/hero.jpg"
            alt="A black widebody coupe with orange wheels, fire and blue lightning on wet asphalt at night, made in Nitro"
            width={1536}
            height={1024}
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {nitroFeatures.map((feature) => (
            <div key={feature.title}>
              <h2 className="font-serif text-xl">{feature.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{feature.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {reels.map((reel) => (
            <Image
              key={reel.src}
              src={reel.src}
              alt={reel.alt}
              width={800}
              height={800}
              className="aspect-square h-auto w-full rounded-xl border border-line object-cover"
            />
          ))}
        </div>
      </section>

      <section id="founder" className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm tracking-[0.18em] text-gold uppercase">
            Founder
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight md:text-4xl">
            Adrian Smark
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Adrian is the founder and director of I LOVE MONEY LTD, and the
            maker of Nitro: AI Car &amp; Video. He designs, builds and
            publishes the company&apos;s apps himself.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={appStoreUrl}
              className="bg-gold px-5 py-3 text-sm font-semibold text-paper hover:opacity-90"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Nitro on the App Store
            </a>
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
        </div>
      </section>

      <section id="what-we-do" className="border-t border-line">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              What we do
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              I LOVE MONEY LTD publishes software, starting with Nitro: AI
              Car &amp; Video. We turn product ideas into working apps, then
              release and look after them.
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
