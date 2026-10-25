import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className="font-serif text-xl tracking-tight">
          I LOVE MONEY LTD
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <Link href="/#nitro" className="text-gold hover:text-ink">
            Nitro
          </Link>
          <Link href="/#founder" className="hover:text-ink">
            Founder
          </Link>
          <Link href="/#what-we-do" className="hover:text-ink">
            What we do
          </Link>
          <Link href="/#company" className="hover:text-ink">
            Company
          </Link>
          <Link href="/contact" className="hover:text-ink">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
