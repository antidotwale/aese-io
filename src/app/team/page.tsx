import PageHero from "@/components/PageHero";

const team = [
  { name: "Adewale Agbabiaka", role: "Founder / DevOps · DevSecOps · Cloud & AI Security" },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="The people behind the work"
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {team.map((member) => (
              <div key={member.name}>
                <div className="mb-4 aspect-square w-full border border-border-subtle bg-surface" />
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
