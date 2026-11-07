import PageHero from "@/components/PageHero";
import Link from "next/link";

const services = [
  {
    name: "DevOps",
    description:
      "Cloud infrastructure, IaC, CI/CD, and observability — automated and reliable.",
    href: "/services/devops",
  },
  {
    name: "DevSecOps",
    description:
      "Security embedded into pipelines — SAST, DAST, SCA, and policy-as-code.",
    href: "/services/devsecops",
  },
  {
    name: "Cloud Security",
    description:
      "IAM, posture management, threat detection, and defense across AWS & Azure.",
    href: "/services/cloud-security",
  },
  {
    name: "AI Security",
    description:
      "LLM security, agent guardrails, and securing AI-driven systems end to end.",
    href: "/services/ai-security",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four disciplines, deep expertise"
        description="Each service area links to project examples, write-ups, and the tools behind the work."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden border border-border-subtle sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative flex min-h-[280px] flex-col justify-between bg-surface p-8 transition hover:bg-white/[0.03]"
            >
              <span className="text-xs uppercase tracking-wider-3 text-muted">
                0{i + 1}
              </span>
              <div>
                <h3 className="mb-3 text-xl font-semibold">{s.name}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/70 transition group-hover:text-foreground">
                Learn more
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
