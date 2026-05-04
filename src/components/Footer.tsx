import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-dark text-linen-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-teal font-bold">Sub Con Command</p>
            <p className="mt-2 text-sm text-linen-deep">
              Helping craftsmen become businessmen.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-linen">Products</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a href="https://salescommand.app" className="hover:text-teal transition-colors">
                  Sales Command
                </a>
              </li>
              <li>
                <a href="https://schedulecommand.com" className="hover:text-teal transition-colors">
                  Schedule Command
                </a>
              </li>
              <li>
                <span className="text-linen-deep">Field Command (coming soon)</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-linen">Resources</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link href="/videos" className="hover:text-teal transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/learn" className="hover:text-teal transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-teal transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-linen-deep/20 pt-6 text-center text-xs text-linen-deep">
          &copy; {new Date().getFullYear()} Sub Con Command. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
