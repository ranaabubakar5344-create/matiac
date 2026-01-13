"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Programme = {
  level: "EDUQUAL LEVEL 3" | "EDUQUAL LEVEL 4" | "EDUQUAL LEVEL 5";
  title: string;
  href: string;
  image: string;
  tag?: "KHDA Approved" | "Popular" | "New";
};

type Dir = -1 | 0 | 1;

export default function ProgrammeSlider() {
  const items = useMemo<Programme[]>(
    () => [
      {
        level: "EDUQUAL LEVEL 4",
        title: "Certificate in Cyber Security",
        href: "/programmes/cyber-security-l4",
        image: "/cyb.jpg",
        tag: "KHDA Approved",
      },
      {
        level: "EDUQUAL LEVEL 4",
        title: "Certificate in Psychology",
        href: "/programmes/psychology-l4",
        image: "/phys.webp",
        tag: "KHDA Approved",
      },
      {
        level: "EDUQUAL LEVEL 3",
        title: "Diploma in International Foundation Studies",
        href: "/programmes/international-foundation-studies-l3",
        image: "/happy-graduated-students.jpg",
        tag: "KHDA Approved",
      },
         {
        level: "EDUQUAL LEVEL 4",
        title: "Certificate in Creative Computing",
        href: "/programmes/creative-computing-l4",
        image: "/cre.jpg",
        tag: "KHDA Approved",
      },
      {
        level: "EDUQUAL LEVEL 4",
        title: "Certificate in Business and Management",
        href: "/programmes/business-management-l4",
        image: "/buis.jpg",
        tag: "KHDA Approved",
      },
   
      {
        level: "EDUQUAL LEVEL 4",
        title: "Certificate in Creative Media",
        href: "/programmes/creative-media-l4",
        image: "/crea.jpg",
        tag: "KHDA Approved",
      },
    ],
    []
  );

  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // ✅ Pointer-based drag (mouse + touch)
  const isDown = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const moved = useRef(false);

  const DRAG_SPEED = 1.8; // ✅ increase = easier drag
  const MOVE_THRESHOLD = 6; // px (click vs drag)

  const [pressed, setPressed] = useState(false); // pointer down (for cursor)
  const [dragging, setDragging] = useState(false); // actually moved beyond threshold

  // ✅ Animated cursor state
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
    dir: 0 as Dir,
  });

  const lastClientX = useRef(0);

  const updateCursor = (clientX: number, clientY: number) => {
    const el = scrollerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const dx = clientX - lastClientX.current;
    lastClientX.current = clientX;

    let dir: Dir = 0;
    if (dx > 2) dir = 1;
    else if (dx < -2) dir = -1;

    setCursor((p) => ({ ...p, x, y, visible: true, dir }));
  };

  const onPointerEnter = (e: React.PointerEvent) => {
    lastClientX.current = e.clientX;
    updateCursor(e.clientX, e.clientY);
    setCursor((p) => ({ ...p, visible: true }));
  };

  const onPointerLeave = () => {
    // if dragging (pointer capture) then don’t hide
    if (!isDown.current) setCursor((p) => ({ ...p, visible: false, dir: 0 }));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el) return;

    // capture pointer so drag remains smooth even if pointer goes outside
    try {
if (e.pointerType !== "mouse") {
  e.currentTarget.setPointerCapture(e.pointerId);
}
    } catch {}

    isDown.current = true;
    moved.current = false;
    setPressed(true);
    setDragging(false);

    const rect = el.getBoundingClientRect();
    startX.current = e.clientX - rect.left;
    startScroll.current = el.scrollLeft;

    updateCursor(e.clientX, e.clientY);
  };

 const onPointerMove = (e: React.PointerEvent) => {
  updateCursor(e.clientX, e.clientY);

  const el = scrollerRef.current;
  if (!el || !isDown.current) return;

  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const dx = x - startX.current;

  if (!moved.current && Math.abs(dx) > MOVE_THRESHOLD) {
    moved.current = true;
    setDragging(true);
  }

  // ✅ ONLY prevent default when dragging
  if (moved.current) {
    e.preventDefault();
    el.scrollLeft = startScroll.current - dx * DRAG_SPEED;
  }
};


  const endPointer = () => {
  isDown.current = false;
  setPressed(false);
  setDragging(false);
  moved.current = false;
};


  const onPointerUp = () => endPointer();
  const onPointerCancel = () => endPointer();

  // ✅ Button scroll
  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-card='true']");
    const w = card?.offsetWidth ?? 360;
    const gap = 24; // same as gap-6

    el.scrollBy({ left: dir * (w + gap), behavior: "smooth" });
  };

  const cursorLabel = pressed
    ? cursor.dir === -1
      ? "←"
      : cursor.dir === 1
      ? "→"
      : "↔"
    : "DRAG";

  return (
<section className="relative text-white overflow-hidden
  bg-gradient-to-br from-[#0b0b0f] via-[#0f0f1a] to-[#050507]">

      {/* Premium background glow */}

       {/* 🌈 DESKTOP ONLY GLOW */}
<div className="absolute inset-0 hidden sm:block
  bg-[radial-gradient(700px_circle_at_30%_40%,rgba(239,68,68,0.45),transparent_60%)]" />

<div className="absolute inset-0 hidden sm:block
  bg-[radial-gradient(600px_circle_at_70%_30%,rgba(59,130,246,0.35),transparent_60%)]" />

<div className="absolute inset-0 hidden sm:block
  bg-[radial-gradient(500px_circle_at_50%_70%,rgba(168,85,247,0.25),transparent_65%)]" />


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            {/* <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              KHDA Approved Programmes
            </p> */}

            <h2 className="text-4xl sm:text-6xl font-bold  mb-6
  text-white leading-tight ">
         
              Reshape Your Future
            </h2>

            <p className="mt-2 max-w-2xl text-white  sm:text-lg">
              Embrace a range of dynamic programmes tailored for your success.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollByCard(-1)}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition"
              aria-label="Previous"
            >
              ← Prev
            </button>
            <button
              onClick={() => scrollByCard(1)}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition"
              aria-label="Next"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-10">
          <div className="relative">
            {/* ✅ Animated cursor (desktop only) */}
            <div
              className={[
                "pointer-events-none absolute left-0 top-0 z-30 hidden md:block",
                cursor.visible ? "opacity-100" : "opacity-0",
                "transition-opacity duration-150",
              ].join(" ")}
              style={{
                transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
              }}
            >
<div className="relative -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {dragging && (
                  <div className="absolute inset-0 rounded-full border border-red-500/40 animate-ping" />
                )}

                <div
                  className={[
                    "h-14 w-14 rounded-full",
                    "border border-white/35 bg-black/40 backdrop-blur",
                    "flex items-center justify-center",
                        "pointer-events-none", // 🔥 ADD THIS
                    "text-xs font-extrabold tracking-widest text-white",
                    "shadow-[0_0_30px_rgba(239,68,68,0.15)]",
                    "transition-transform duration-100 ease-out",
                    pressed ? "scale-110" : "scale-100",
                  ].join(" ")}
                >
                  {cursorLabel}
                </div>
              </div>
            </div>

            <div
              ref={scrollerRef}
              // ✅ Pointer Events = super smooth + mobile support
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
              // stop default image dragging selection
              onDragStart={(e) => e.preventDefault()}
              // // ✅ optional: wheel to horizontal
              // onWheel={(e) => {
              //   if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
              //     e.currentTarget.scrollLeft += e.deltaY;
              //   }
              // }}
              style={{ touchAction: "pan-y" }} // ✅ allow vertical page scroll, but we handle horizontal drag
              className={[
                "flex gap-6 overflow-x-auto scroll-smooth pb-5",
                "snap-x snap-proximity", // ✅ easier feel than snap-mandatory
                "[scrollbar-width:none] [-ms-overflow-style:none]",
                "md:cursor-none", // ✅ hide native cursor only on desktop
                pressed ? "select-none" : "",
              ].join(" ")}
            >
              {items.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  data-card="true"
                  className={[
                    "group relative snap-start shrink-0",
                    "w-[86%] sm:w-[440px] lg:w-[520px]",
                    "h-[360px] sm:h-[420px]",
                    "rounded-[28px] overflow-hidden",
                    "ring-1 ring-white/10 shadow-2xl",
                    "transition-transform duration-300 hover:-translate-y-1",
                    "md:cursor-none",
                  ].join(" ")}
                onClick={(e) => {
  if (dragging) {
    e.preventDefault();
    e.stopPropagation();
  }
}}

                
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 86vw, (max-width: 1024px) 440px, 520px"
                    className="object-cover"
                    priority={false}
                    draggable={false}
                  />

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/10" />

                  {/* Tag */}
                  {/* <div className="absolute left-6 top-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-red-600/90 px-4 py-2 text-xs font-extrabold text-white shadow-lg">
                      <span className="h-2 w-2 rounded-full bg-white/90" />
                      {p.tag ?? "KHDA Approved"}
                    </span>
                  </div> */}

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        {/* <p className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white/90 backdrop-blur">
                          {p.level}
                        </p> */}

                        <h3 className=" text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                          {p.title}
                        </h3>
                      </div>

                  {/* <div
  className="
    h-12 w-12 rounded-full
    border border-white/20
    bg-white/10 backdrop-blur
    flex items-center justify-center
    transition-all duration-300
    group-hover:bg-red-500
    group-hover:border-red-500
    group-hover:scale-110
  "
>
  <ArrowRight className="h-5 w-5 text-white" />
</div> */}

                    </div>

                    {/* bottom pills */}
                    <div className="mt-5 flex gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
                      <span className="whitespace-nowrap rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white">
                        View Programme
                      </span>
                      {/* <span className="whitespace-nowrap rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white/85">
                        Download Brochure
                      </span> */}
                    </div>
                  </div>

                  {/* glow */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-red-500/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}
