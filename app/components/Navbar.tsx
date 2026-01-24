"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Short Courses", href: "/shortcourses" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
  <header
  className={[
    "fixed inset-x-0 top-0 z-50",
    "text-white",
    "transition-all duration-300",
    // background behavior
    scrolled
      ? "bg-black border-b border-white/15"
      : "bg-transparent border-b border-transparent",
    // desktop always solid
   
  ].join(" ")}
>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2">
            <div className="relative h-12 w-44 sm:h-14 sm:w-60">
              <Image
                src="/logo.png"
                alt="Metaverse Age"
                fill
                sizes="(max-width: 640px) 176px, 240px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/90 hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}

            {/* Study Portal */}
            <Link
              href="https://lms.mati.ac.ae/"
              target="blank"
              className="rounded-full px-4 py-2 text-sm font-semibold border border-white/35 text-white hover:bg-white/10 transition"
            >
              Student Portal
            </Link>

            {/* Apply Now */}
            <Link
              href="/apply-now"
              className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-lg p-2 text-white hover:bg-white/10 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl bg-black/95 backdrop-blur p-3 border border-white/10">
              <div className="flex flex-col">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                 href="https://lms.mati.ac.ae/"
              target="blank"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl border border-white/30 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-white/10"
                >
                  Study Portal
                </Link>

                <Link
                  href="/apply-now"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-red-700"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
