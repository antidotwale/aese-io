import PageHero from "@/components/PageHero";
import Link from "next/link";

// Placeholder personal projects — replace with real GitHub repos / write-ups later.
const placeholderProjects = [
  { slug: "cloud-security-posture-dashboard", title: "Cloud Security Posture Dashboard", tag: "Cloud Security" },
  { slug: "kubernetes-hardening-lab", title: "Kubernetes Hardening Lab", tag: "DevSecOps" },
  { slug: "secure-cicd-pipeline", title: "Secure CI/CD Pipeline with Policy Gates", tag: "DevOps" },
  { slug: "home-lab-threat-detection", title: "Home Lab Threat Detection Stack", tag: "AI Security" },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Selected work"
        description="A growing archive of personal projects, labs, and builds. Live and still expanding."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden border border-border-subtle px-0 sm:grid-cols-2 lg:px-0">
          {placeholderProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group flex aspect-[16/10] flex-col justify-between bg-surface p-8 transition hover:bg-white/[0.03]"
            >
              <span className="text-xs uppercase tracking-wider-3 text-muted">
                {p.tag}
              </span>
              <h3 className="text-xl font-semibold leading-snug">
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
