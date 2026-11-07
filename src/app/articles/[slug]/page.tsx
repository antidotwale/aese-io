import PageHero from "@/components/PageHero";

export default async function ArticleDetailPage({
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
      <PageHero eyebrow="Article" title={title} />
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 lg:px-12">
          <p className="text-sm leading-relaxed text-muted">
            Full article content goes here, pulled from Sanity CMS or linked
            out to the original Medium/Hashnode post.
          </p>
        </div>
      </section>
    </>
  );
}
