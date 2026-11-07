import PageHero from "@/components/PageHero";
import Link from "next/link";

const focusAreas = [
  "DevOps & cloud infrastructure",
  "DevSecOps & CI/CD security",
  "Cloud Security (AWS, Azure)",
  "AI / LLM security",
  "Infrastructure as Code",
  "Observability & automation",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The engineer behind Aese.io"
        description="Security engineer, builder, and lifelong student of systems — digital and otherwise."
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-12">
          <div className="aspect-[4/5] w-full border border-border-subtle bg-surface" />
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-2xl font-semibold">Adewale Agbabiaka</h2>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              I&apos;m a DevOps, DevSecOps, and cloud &amp; AI security
              engineer. Aese.io is where I bring that work together — a
              practice built on hands-on engineering, not slideware.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              My background spans DevOps and DevSecOps, and I&apos;ve built
              depth across cloud platforms, security tooling, and AI security.
              I&apos;m driven by a simple standard: ship work that holds up
              under pressure.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              I&apos;m currently open to roles in DevOps, DevSecOps, and
              cloud &amp; AI security — particularly with teams building
              something that matters.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block w-fit bg-foreground px-7 py-3.5 text-sm font-medium tracking-wide text-background transition hover:bg-foreground/85"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="border-t border-border-subtle py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="mb-10 text-xs uppercase tracking-wider-3 text-muted">
            Focus areas
          </h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border-subtle sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="bg-surface p-6 text-sm font-medium"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
