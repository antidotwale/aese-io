import PageHero from "@/components/PageHero";

export default function AiSecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="AI Security"
        description="LLM security, agent guardrails, and securing AI-driven systems end to end."
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <p className="text-sm leading-relaxed text-muted">
            Deep-dive content, tool tags (your AI security toolchain), and
            linked project case studies go here.
          </p>
        </div>
      </section>
    </>
  );
}
