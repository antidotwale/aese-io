import PageHero from "@/components/PageHero";

export default function CloudSecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Cloud Security"
        description="IAM, posture management, threat detection, and defense-in-depth across AWS and Azure environments."
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <p className="text-sm leading-relaxed text-muted">
            Deep-dive content, tool tags (your cloud security toolchain), and
            linked project case studies go here.
          </p>
        </div>
      </section>
    </>
  );
}
