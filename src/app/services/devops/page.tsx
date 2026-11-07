import PageHero from "@/components/PageHero";

export default function DevOpsPage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="DevOps"
        description="Cloud infrastructure, infrastructure-as-code, CI/CD pipelines, and observability — automated, repeatable, and reliable."
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <p className="text-sm leading-relaxed text-muted">
            Deep-dive content, tool tags (your DevOps toolchain), and linked
            project case studies go here.
          </p>
        </div>
      </section>
    </>
  );
}
