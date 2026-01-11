"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ShortCourse = {
  title: string;
  image: string;
  href: string;
  duration: string;
};

export default function ShortCoursesSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const courses: ShortCourse[] = [
    {
      title: "AI & Machine Learning",
      image: "/ai.jpg",
      href: "/short-courses/Artificial Intelligence & Machine Learning",
      duration: "Short Course",
    },
    {
      title: "Big Data Analytics",
      image: "/bigdata.jpg",
      href: "/short-courses/big-data-analytics",
      duration: "Short Course",
    },
    {
      title: "Mobile App Development",
      image: "/mob.jpg",
      href: "/short-courses/mob-app-dev",
      duration: "Short Course",
    },
    {
      title: "The Responsive Web",
      image: "/Gemini_Generated_Image_gybieogybieogybi.jpg",
      href: "/short-courses/the-resp-web",
      duration: "Short Course",
    },
    {
      title: "Advance Programming Skills",
      image: "/adv.jpg",
      href: "/short-courses/adv-pro-skills",
      duration: "Short Course",
    },
     {
      title: "Digital Marketing",
      image: "/dig.jpg",
      href: "/short-courses/digital-marketing",
      duration: "Short Course",
    },
  ];

  // 🔁 AUTO SLIDE LOGIC
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        if (!slider) return;

        const maxScroll =
          slider.scrollWidth - slider.clientWidth;

        if (slider.scrollLeft >= maxScroll - 10) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
const cardWidth =
  slider.querySelector<HTMLElement>("a")?.offsetWidth || 360;

const card =
  slider.querySelector<HTMLElement>("a");
const gap = 24;

const scrollAmount =
  (card?.offsetWidth || 360) + gap;


slider.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
    
}
      }, 2000); // ⏱️ speed
    };

    startAutoSlide();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const pauseAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const resumeAutoSlide = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const maxScroll =
          slider.scrollWidth - slider.clientWidth;

        if (slider.scrollLeft >= maxScroll - 10) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
const card =
  slider.querySelector<HTMLElement>("a");
const gap = 24;

const scrollAmount =
  (card?.offsetWidth || 360) + gap;

const cardWidth =
  slider.querySelector<HTMLElement>("a")?.offsetWidth || 360;

slider.scrollBy({ left: cardWidth + 24, behavior: "smooth" });

      }  }, 2000);
    }
  };

  const manualScroll = (dir: 1 | -1) => {
    pauseAutoSlide();
    sliderRef.current?.scrollBy({
      left: dir * 360,
      behavior: "smooth",
    });
    resumeAutoSlide();
  };

  return (
    <section className="relative overflow-hidden
      bg-black text-white py-20">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold">
          Featured Short Courses
        </h2>
        <p className="mt-4 text-white/70 text-lg">
          Explore our most popular short courses designed for career success
        </p>
        <span className="mt-5 inline-block h-1 w-24 rounded-full bg-red-600" />
      </div>

      {/* CONTROLS */}
      <div className="absolute right-10 top-24 hidden md:flex gap-3 z-20">
        <button
          onClick={() => manualScroll(-1)}
          className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition">
          ←
        </button>
        <button
          onClick={() => manualScroll(1)}
          className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition">
          →
        </button>
      </div>

      {/* SLIDER */}
<div
  ref={sliderRef}
  onMouseEnter={pauseAutoSlide}
  onMouseLeave={resumeAutoSlide}
 className="
  flex gap-6
  pl-4 pr-4 sm:px-6
  overflow-x-auto scroll-smooth
  snap-x snap-proximity
  scrollbar-hide
"

>




        {courses.map((course) => (
  <a
  key={course.href}
  href={course.href}
  className="group shrink-0
w-[82%] sm:w-[340px]
  snap-center
  bg-white text-black rounded-[22px]
  shadow-2xl hover:-translate-y-2 transition-all"
>




            {/* IMAGE */}
            <div className="relative h-[190px] rounded-t-[22px] overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />

              {/* BADGE */}
              <span className="absolute top-4 left-4
                bg-red-600 text-white text-xs font-bold
                px-4 py-1 rounded-full shadow">
                {course.duration}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-bold leading-snug">
                {course.title}
              </h3>

              {/* PILLS */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                  Industry Ready
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                  Job Support
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-700">
                  Certificate
                </span>
              </div>

              {/* CTA */}
              <button className="mt-6 w-full rounded-xl
                bg-red-600 text-white py-3 font-semibold
                hover:bg-red-700 transition">
                Start Learning
              </button>

            </div>
          </a>
        ))}

      </div>
      {/* CTA BELOW SLIDER */}
<div className="mt-10 text-center">
{/* <p className="mt-3 text-white/70 text-lg">
    Explore all our courses
  </p> */}

  <div className="mt-3">
    <a
      href="/programmes"
      className="inline-flex items-center gap-3
      rounded-full px-8 py-4 text-base font-semibold
     bg-red-600
      text-white shadow-xl
      hover:scale-105 transition-transform"
    >
      View All Courses
      <span className="text-xl">→</span>
    </a>
  </div>
</div>

    </section>
  );
}
