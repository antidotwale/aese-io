type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-border-subtle py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {eyebrow && (
          <p className="mb-5 text-xs uppercase tracking-wider-3 text-muted">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
