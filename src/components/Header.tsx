"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { name: "DevOps", href: "/services/devops" },
  { name: "DevSecOps", href: "/services/devsecops" },
  { name: "Cloud Security", href: "/services/cloud-security" },
  { name: "AI Security", href: "/services/ai-security" },
];

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Articles", href: "/articles" },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-wider-2">AESE.IO</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm tracking-wide text-foreground/90 transition hover:text-foreground">
              Services
              <svg
                className={`h-3 w-3 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full w-56 border border-border-subtle bg-surface py-2 shadow-2xl">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-5 py-3 text-sm text-foreground/80 transition hover:bg-white/5 hover:text-foreground"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-foreground/90 transition hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="border border-foreground/30 px-5 py-2.5 text-sm tracking-wide transition hover:border-foreground hover:bg-foreground hover:text-background"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-px w-6 bg-foreground transition ${
              mobileOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-foreground transition ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-foreground transition ${
              mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border-subtle bg-background px-6 py-6 lg:hidden">
          <p className="mb-3 text-xs uppercase tracking-wider-3 text-muted">
            Services
          </p>
          <div className="mb-6 flex flex-col gap-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-base text-foreground/90"
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-foreground/90"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-6 block border border-foreground/30 px-5 py-3 text-center text-sm tracking-wide"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
