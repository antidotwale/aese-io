import Link from "next/link";
import Hero3D from "@/components/Hero3D";

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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.06), transparent 60%)",
          }}
        />
        {/* Rotating 3D crystal — reacts to mouse + scroll */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Hero3D />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
          <p className="mb-6 text-xs uppercase tracking-wider-3 text-muted">
            DevOps · DevSecOps · Cloud & AI Security
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Secure, automated
            <br />
            cloud infrastructure,
            <br />
            <span className="text-foreground/40">built to last.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted">
            Aese.io is the practice of Adewale Agbabiaka — DevOps, DevSecOps,
            and cloud &amp; AI security for teams that can&apos;t afford to get
            it wrong.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="bg-foreground px-7 py-3.5 text-sm font-medium tracking-wide text-background transition hover:bg-foreground/85"
            >
              View the Work
            </Link>
            <Link
              href="/contact"
              className="border border-foreground/30 px-7 py-3.5 text-sm tracking-wide transition hover:border-foreground"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-border-subtle py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-14 flex items-end justify-between">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              What we do
            </h2>
            <Link
              href="/services"
              className="hidden text-sm text-muted transition hover:text-foreground sm:block"
            >
              All services →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border-subtle sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative flex flex-col justify-between bg-surface p-8 transition hover:bg-white/[0.03] sm:min-h-[280px]"
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
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capability stats */}
      <section className="border-t border-border-subtle py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-border-subtle lg:grid-cols-4">
            {[
              { value: "12+", label: "Tools & platforms in production" },
              { value: "50+", label: "Projects across cloud & security" },
              { value: "4", label: "Core disciplines" },
              { value: "100%", label: "Hands-on, shipped work" },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface p-8">
                <div className="text-3xl font-bold sm:text-4xl">
                  {stat.value}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-border-subtle py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Looking for an engineer who ships?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted">
            Open to roles in DevOps, DevSecOps, and cloud &amp; AI security.
            Let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-foreground px-8 py-3.5 text-sm font-medium tracking-wide text-background transition hover:bg-foreground/85"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
