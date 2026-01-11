// components/TopHeaderBar.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  FileText,
  CreditCard,
  Users,
  GraduationCap,
  MoreHorizontal,
  X,
  Phone,
  Mail,
} from "lucide-react";

type Action = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export default function TopHeaderBar() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const PHONE_DISPLAY = "04-339-3803";
  const PHONE_TEL = "043393803";
  const EMAIL = "admissions@metaverseage.ae";

  const actions: Action[] = [
    { label: "Inquire", href: "/inquire", icon: <FileText className="h-4 w-4" /> },
    { label: "Online Payment", href: "/payment", icon: <CreditCard className="h-4 w-4" /> },
    { label: "Alumni", href: "/alumni", icon: <Users className="h-4 w-4" /> },
    { label: "Student Portal", href: "/portal", icon: <GraduationCap className="h-4 w-4" /> },
    { label: `Call: ${PHONE_DISPLAY}`, href: `tel:${PHONE_TEL}`, icon: <Phone className="h-4 w-4" /> },
    { label: `Email: ${EMAIL}`, href: `mailto:${EMAIL}`, icon: <Mail className="h-4 w-4" /> },
  ];

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);

    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="w-full bg-[#0B0B0B] text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between gap-4 py-2.5">
          {/* Left */}
          <p className="hidden md:block text-[13px] font-semibold">
            Admission Hours:{" "}
            <span className="font-normal text-white/90">
              Mon–Thu 9am–5pm, Sat 9am–5pm
            </span>
          </p>

          {/* Right */}
          <div className="relative flex items-center gap-2" ref={wrapRef}>
            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <TopButton
                href="/inquire"
                icon={<FileText className="h-4 w-4" />}
                label="Inquire"
              />

              <TopButton
                href="/apply"
                icon={<ClipboardList className="h-4 w-4" />}
                label="Apply Now"
                primary
              />

              <TopButton
                href="/portal"
                icon={<GraduationCap className="h-4 w-4" />}
                label="Student Portal"
                variant="portal"
              />

              <ContactButton
                href={`tel:${PHONE_TEL}`}
                icon={<Phone className="h-4 w-4" />}
                label={PHONE_DISPLAY}
              />

              <ContactButton
                href={`mailto:${EMAIL}`}
                icon={<Mail className="h-4 w-4" />}
                label={EMAIL}
              />
            </div>

            {/* Tablet */}
            <div className="hidden md:flex lg:hidden items-center gap-2">
              <TopButton
                href="/apply"
                icon={<ClipboardList className="h-4 w-4" />}
                label="Apply Now"
                primary
              />

              <MoreButton open={open} setOpen={setOpen} />

              {open && (
                <Dropdown>
                  {actions.map((a) => (
                    <DropLink key={a.label} {...a} onClick={() => setOpen(false)} />
                  ))}
                </Dropdown>
              )}
            </div>

            {/* Mobile */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                href="/apply"
                className="inline-flex h-8 items-center gap-2 rounded-full bg-[#E10600] px-4 text-[12px] font-extrabold hover:bg-[#B80000]"
              >
                <ClipboardList className="h-4 w-4" />
                Apply
              </Link>

              <IconButton open={open} setOpen={setOpen} />

              {open && (
                <Dropdown right>
                  {actions.map((a) => (
                    <DropLink key={a.label} {...a} onClick={() => setOpen(false)} />
                  ))}
                </Dropdown>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#E10600] to-transparent" />
    </div>
  );
}

/* ----------------- Helpers ----------------- */

function TopButton({
  href,
  icon,
  label,
  primary,
  variant,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
  variant?: "portal";
}) {
  const base =
    "inline-flex h-8 min-w-[110px] items-center justify-center gap-2 rounded-full px-4 text-[12px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/20";

  const primaryCls =
    "bg-[#E10600] text-white font-extrabold hover:bg-[#B80000]";

  const portalCls =
    "border border-[#E10600] text-[#E10600] hover:bg-[#E10600] hover:text-white";

  const ghostCls =
    "border border-white/12 bg-white/5 text-white/85 hover:bg-white/10";

  const cls = primary ? primaryCls : variant === "portal" ? portalCls : ghostCls;

  return (
    <Link href={href} className={`${base} ${cls}`}>
      {icon}
      {label}
    </Link>
  );
}

function ContactButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex h-8 items-center gap-2 rounded-full bg-red-600 px-4 text-[12px] font-semibold hover:bg-[#B80000]"
    >
      {icon}
      <span className="hidden xl:inline">{label}</span>
    </a>
  );
}

function Dropdown({ children, right }: { children: React.ReactNode; right?: boolean }) {
  return (
    <div
      role="menu"
      className={`absolute z-50 mt-2 w-80 rounded-2xl border border-white/10 bg-[#0B0B0B] shadow-xl ${
        right ? "right-0" : "left-0"
      }`}
    >
      <div className="p-2">{children}</div>
    </div>
  );
}

function DropLink({
  href,
  label,
  icon,
  onClick,
}: Action & { onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-white/5"
    >
      {icon}
      {label}
    </Link>
  );
}

function MoreButton({ open, setOpen }: { open: boolean; setOpen: any }) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="inline-flex h-8 items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 text-[12px] font-semibold hover:bg-white/10"
    >
      <MoreHorizontal className="h-4 w-4" />
      More
    </button>
  );
}

function IconButton({ open, setOpen }: { open: boolean; setOpen: any }) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/5 hover:bg-white/10"
    >
      {open ? <X className="h-4 w-4" /> : <MoreHorizontal className="h-4 w-4" />}
    </button>
  );
}
