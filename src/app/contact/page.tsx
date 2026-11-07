import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        description="Book a call, or reach out directly — whichever's easier."
      />
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 lg:px-12">
          <div className="flex flex-col gap-6 border border-border-subtle bg-surface p-8">
            <p className="text-sm text-muted">
              Calendly embed goes here once you connect your account.
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit bg-foreground px-7 py-3.5 text-sm font-medium tracking-wide text-background transition hover:bg-foreground/85"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
