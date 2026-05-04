import Link from "next/link";

const nav = [
  { label: "Videos", href: "/videos" },
  { label: "Learn", href: "/learn" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  return (
    <header className="bg-dark text-linen">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-teal text-xl font-bold tracking-tight">
          Sub Con Command
        </Link>
        <nav className="flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-linen-card hover:text-teal transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://salescommand.app"
            className="rounded-md bg-teal px-4 py-2 text-sm font-semibold text-dark transition-colors hover:bg-teal/90"
          >
            Sign In
          </a>
        </nav>
      </div>
    </header>
  );
}
