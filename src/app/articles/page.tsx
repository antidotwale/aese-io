import PageHero from "@/components/PageHero";

// Articles live on Medium — link out for now. Replace/add real titles + links later.
const MEDIUM_URL = "https://agbabiaka.medium.com";

const articles = [
  {
    title: "Read my writing on Medium",
    source: "Medium",
    note: "DevOps, DevSecOps, cloud & containers",
    href: MEDIUM_URL,
  },
];

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Articles"
        title="Writing &amp; case studies"
        description="Notes from the field on cloud, security, and engineering — published on Medium."
      />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <div className="flex flex-col divide-y divide-border-subtle border-y border-border-subtle">
            {articles.map((a) => (
              <a
                key={a.title}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 transition hover:bg-white/[0.03]"
              >
                <div>
                  <h3 className="text-base font-medium">{a.title}</h3>
                  <p className="mt-1 text-xs text-muted">
                    {a.source} · {a.note}
                  </p>
                </div>
                <span className="text-muted transition group-hover:translate-x-1 group-hover:text-foreground">
                  →
                </span>
              </a>
            ))}
          </div>
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block border border-foreground/30 px-7 py-3.5 text-sm tracking-wide transition hover:border-foreground"
          >
            View all on Medium →
          </a>
        </div>
      </section>
    </>
  );
}
