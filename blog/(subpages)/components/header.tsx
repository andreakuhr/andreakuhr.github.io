import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-4">
        <nav className="sticky top-0 flex">
          <Link href="/">this is a basic header</Link>
        </nav>
      </div>
    </header>
  );
}
