import PageHero from "@/components/PageHero";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      <PageHero eyebrow="Project" title={title} />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <div className="mb-10 aspect-video w-full border border-border-subtle bg-surface" />
          <p className="text-sm leading-relaxed text-muted">
            Full case study goes here — overview, problem, approach, tools, and
            outcome, with images and links to the repo. Placeholder for now.
          </p>
        </div>
      </section>
    </>
  );
}
