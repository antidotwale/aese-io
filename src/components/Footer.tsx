import Link from "next/link";

const footerLinks = [
  {
    heading: "Services",
    links: [
      { name: "DevOps", href: "/services/devops" },
      { name: "DevSecOps", href: "/services/devsecops" },
      { name: "Cloud Security", href: "/services/cloud-security" },
      { name: "AI Security", href: "/services/ai-security" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { name: "Articles", href: "/articles" },
      { name: "Stories", href: "/articles#stories" },
    ],
  },
];

const socials = [
  { name: "GitHub", href: "https://github.com" },
  { name: "Medium", href: "https://agbabiaka.medium.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
          <div className="col-span-2">
            <span className="text-xl font-bold tracking-wider-2">
              AESE.IO
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              The practice of Adewale Agbabiaka. DevOps, DevSecOps, and
              cloud &amp; AI security — for teams that can&apos;t afford to
              get it wrong.
            </p>
            <div className="mt-6 flex gap-5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition hover:text-foreground"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.heading}>
              <p className="text-xs uppercase tracking-wider-3 text-muted">
                {col.heading}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border-subtle pt-8 text-xs text-muted lg:flex-row lg:items-center">
          <p>© {new Date().getFullYear()} Aese.io — Adewale Agbabiaka. All rights reserved.</p>
          <Link
            href="/contact"
            className="text-foreground/80 transition hover:text-foreground"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </footer>
  );
}
