import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-muted">
        <p className="font-serif text-base text-ink">I LOVE MONEY LTD</p>
        <p className="mt-3 max-w-xl leading-relaxed">
          Publisher of Nitro: AI Car &amp; Video. Founded by Adrian Smark.
          Private limited company registered in England and Wales. Company
          number 17446881. Registered office: 71-75 Shelton Street, Covent
          Garden, London, WC2H 9JQ, United Kingdom.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <Link href="/contact" className="hover:text-ink">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <a
            href="https://find-and-update.company-information.service.gov.uk/company/17446881"
            className="hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Companies House
          </a>
        </div>
      </div>
    </footer>
  );
}
