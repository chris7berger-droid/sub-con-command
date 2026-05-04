export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-dark text-linen">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Helping Craftsmen Become{" "}
            <span className="text-teal">Businessmen</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-linen-card">
            The Command Suite — Sales, Schedule, Field, and AR tools built for
            commercial and industrial subcontractors. By a sub, for subs.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="https://salescommand.app"
              className="rounded-md bg-teal px-6 py-3 text-sm font-semibold text-dark transition-colors hover:bg-teal/90"
            >
              Get Started
            </a>
            <a
              href="/videos"
              className="rounded-md border border-linen-deep/30 px-6 py-3 text-sm font-semibold text-linen transition-colors hover:border-teal hover:text-teal"
            >
              Watch Videos
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold text-dark">
            The Command Suite
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-linen-deep">
            Four tools that cover your entire workflow — from first call to final
            payment.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Sales Command",
                desc: "CRM, proposals, and invoicing built for the way subs actually sell.",
                status: "Live",
              },
              {
                name: "Schedule Command",
                desc: "Crew scheduling, job tracking, and daily production reports.",
                status: "Live",
              },
              {
                name: "Field Command",
                desc: "Mobile-first crew app with offline support and real-time sync.",
                status: "Coming Soon",
              },
              {
                name: "AR Command",
                desc: "Accounts receivable, aging reports, and collections tracking.",
                status: "Coming Soon",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="rounded-lg bg-linen-card p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-dark">{product.name}</h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      product.status === "Live"
                        ? "bg-dark text-teal"
                        : "bg-linen-deep text-dark"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-dark/70">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-linen">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold">
            Stop fighting software built for resi
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-linen-card">
            BuilderTrend, Jobber, ServiceTitan — they&apos;re all built for
            residential. The Command Suite is built for commercial and industrial
            subs who need real tools, not dumbed-down apps.
          </p>
          <a
            href="https://salescommand.app"
            className="mt-8 inline-block rounded-md bg-teal px-6 py-3 text-sm font-semibold text-dark transition-colors hover:bg-teal/90"
          >
            Try It Free
          </a>
        </div>
      </section>
    </div>
  );
}
