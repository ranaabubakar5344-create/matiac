"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useState } from "react";

export default function FooterPremium() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();


// yahan baad mein API call laga sakte ho
setSubscribed(true);
};
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* premium bg (no glow, subtle) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black to-black/95" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        {/* Top CTA strip */}
       

        {/* ✅ Main grid */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            {/* ✅ BIG FOOTER LOGO (no small square) */}
            <div className="relative w-[220px] sm:w-[260px] h-[72px]">
              <Image
                src="/logo.png"
                alt="Metaverse Age"
                fill
                sizes="260px"
                className="object-contain"
                priority
              />
            </div>

            {/* <p className="mt-3 text-sm text-white/60">
              Metaverse Age Training Institute • KHDA Permit: 630465
            </p> */}

            <p className="mt-4 text-white/70 leading-relaxed max-w-sm">
              Professional trainings, diplomas, and certifications designed for
              real-world outcomes — with structured pathways and support.
            </p>

            {/* quick contacts */}
            <div className="mt-6 space-y-3">
              <Link
                href="tel:043393803"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/85 hover:bg-white/[0.07] transition"
              >
                <span className="h-9 w-9 rounded-xl border border-white/10 bg-black/30 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-red-400" />
                </span>
                <span className="truncate">04-339-3803</span>
              </Link>

              <Link
                href="mailto:admissions@metaverseage.ae"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/85 hover:bg-white/[0.07] transition"
              >
                <span className="h-9 w-9 rounded-xl border border-white/10 bg-black/30 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-red-400" />
                </span>
                <span className="truncate">admissions@metaverseage.ae</span>
              </Link>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/85">
                <span className="h-9 w-9 rounded-xl border border-white/10 bg-black/30 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-red-400" />
                </span>
                <span className="leading-relaxed">
                  Office 339, Office Tower, Al Ghurair Center, Deira Dubai
                </span>
              </div>
            </div>

            {/* social */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition inline-flex items-center justify-center"
                >
                  <Icon className="h-5 w-5 text-white/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FooterCol
                title="Programs"
                links={[
                  { label: "All Courses", href: "/programmes" },
                  { label: "Short Courses", href: "/shortcourses" },
                  { label: "Certifications", href: "/programmes" },
                ]}
              />
              <FooterCol
                title="Institute"
                links={[
                  { label: "About Us", href: "/about" },
                  { label: "Why Choose Us", href: "/about" },
                  { label: "Admissions", href: "/apply-now" },
                  { label: "Contact", href: "/contact" },
                ]}
              />
              <FooterCol
                title="Support"
                links={[
                  { label: "FAQs", href: "/#" },
                  { label: "Policies", href: "/#" },
                  { label: "Privacy Policy", href: "/#" },
                  { label: "Terms & Conditions", href: "/#" },
                ]}
              />
            </div>

            {/* newsletter */}
            <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                
                  <h4 className="mt-1 text-xl font-extrabold">
                    Get course updates and announcements
                  </h4>
                 
                </div>

               {!subscribed ? (
<form
onSubmit={handleSubmit}
className="flex w-full max-w-xl flex-col gap-3 sm:flex-row"
>
<input
type="email"
required
placeholder="Your email address"
className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
/>
<button
type="submit"
className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition"
>
Subscribe
</button>
</form>
) : (
<div className="w-full max-w-xl rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-4">
<p className="text-sm font-medium text-green-400">
Thank you for subscribing to our newsletter!
</p>
</div>
)}
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/55">
            © {year} Metaverse Age Training Institute. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/55">
            <Link href="/" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="/" className="hover:text-white transition">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition inline-flex items-center gap-2"
            >
              {l.label}
              <span className="text-white/35">↗</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

