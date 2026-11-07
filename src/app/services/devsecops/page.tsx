import PageHero from "@/components/PageHero";

export default function DevSecOpsPage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="DevSecOps"
        description="Security woven into CI/CD pipelines — SAST, DAST, SCA, IDE plugins, and policy-as-code."
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <p className="text-sm leading-relaxed text-muted">
            Deep-dive content, tool tags (your DevSecOps toolchain),
            and linked project case studies go here.
          </p>
        </div>
      </section>
    </>
  );
}
