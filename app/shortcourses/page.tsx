"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const CATEGORIES = [
  {
    title: "Computer & Technology",
    courses: [
      "Computer Skills Training",
      "Artificial Intelligence & Machine Learning",
      "Big Data Analytics",
      "Cyber Security",
      "Mobile App Development and Design",
      "Game Design and Development",
      "Programming Fundamentals",
      "Digital Marketing",
      "Cloud Computing",
      "Microsoft Office 2021 Essentials Training",
      "Advance Programming Skills",
      "Emerging Technologies",
      "The Responsive Web",
      "Flutter & Dart",
      "PHP with Laravel",
      "React Native",
      "Ethical Hacking Fundamentals",
      "Introduction to Computer",
      "Vue.js 3 Fundamentals",
    ],
  },
  {
    title: "Management Training",
    courses: [
      "Design Thinking for Managers",
      "Personal and Professional Development for Managers",
      "Innovation Management for Managers",
      "Business Communication and Report Writing Skills",
      "Understanding Business Environment",
      "Statistics for Business Decision Making",
      "Understanding Organisational Behaviour",
      "Economics & Globalization",
      "Design Thinking for Enterprise",
      "Creativity for Business Managers",
      "Operations & Project Management",
      "Introduction to Business",
    ],
  },
  {
    title: "Psychology & Behaviour",
    courses: [
      "Modern Applications of Business Psychology",
      "Fundamentals of Business Psychology",
      "Introduction to Psychology",
      "Understanding Psychology",
      "Psychology Research Methods and Data Analysis",
      "Personality and Individual Differences",
      "Issues and Debates in Psychology",
      "Cognitive Development Through the Ages",
      "BioSocial Psychology",
      "Abnormal Psychology",
    ],
  },
  {
    title: "Design, Media & Creative",
    courses: [
      "User-Experience and User-Interface Design",
      "Media Production",
      "3D & Virtual Reality",
      "Adobe Premiere Pro CC Masterclass",
      "Advance Skills in Graphic Designing",
      "Digital Storytelling",
      "VFX Training And Character Animation",
      "Creative Industry Challenge",
    ],
  },
  {
    title: "Language Training",
    courses: [
      "English Language - Advanced Level",
      "Basic Academic Skills",
      "English Language Skills",
      "Academic English",
      "Public Speaking",
    ],
  },
  {
    title: "Human Resources",
    courses: [
      "Awareness Sessions on UAE Labour and Employment Law",
      "Human Resource Management for Managers",
      "Human Resources Information Systems (HRIS) Including ESS",
      "Public Speaking"
    ],
  },
  {
    title: "Accounting & Finance",
    courses: [
      "Value Added Tax: Principles and Applications",
      "Financial Accounting for Business Managers",
      "UAE Corporate Tax",
    ],
  },
  {
    title: "Construction & Built Environment",
    courses: ["Construction, Mechanical and Built Environment Skills Training"],
  },
    {
    title: "Training in AI",
    courses: ["Training in Applied AI Incubation", "Training in Freelancing Advanced Skills","Training in Advanced AI-Led E-Commerce","Training in Advanced Skills for Canva AI Tools","Training in AI-Led Sales & Marketing",
      "Training in AI-Led YouTube Monetization & Automation","Training in Emotional Intillegence Leadership",
     "AI in Buisness",
     "AI in Physcology",
     "AI in Creative Computing",
     "AI in Cyber Security",
     "Utilizing ChatGPT-4 for maximum Effeciency",
     "Prompt Engineering"
    ],
  },
  {
    title:"Coder Series",
    courses:[
      "Coder Series - Basic",
      "Coder Series - Intermediate",
      "Coder Series -  Expert",
      "Coder Series  - Advance",
    ],

    
  },
    {
    title:"Industrial Robotic Series",
    courses:[
      "Industrial Robotic Series - Basic",
      "Industrial Robotic Series - Intermediate",
      "Industrial Robotic Series -  Expert",
      "Industrial Robotic Series  - Advance",
    ]
  },

  {
    title:"Astronomy Series",
    courses:[
      "Astronomy Seriess - Basic",
      "Astronomy Series - Intermediate",
      "Astronomy Series -  Expert",
      "Astronomy Series - Advance",
    ]

  }
];



export default function ShortCoursesPage() {
  return (
<main className="relative text-white overflow-hidden
  bg-gradient-to-br from-[#0f1016] via-[#111827] to-[#0b0c12]">

      <section className="relative pt-36 pb-28">
        {/* cinematic background */}
       <div className="absolute inset-0
  bg-gradient-to-br from-red-600/20 via-[#111827] to-[#0b0c12]" />

        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />

        {/* glow */}
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl mb-8">
            <Sparkles className="h-4 w-4 text-red-400" />
            <span className="text-sm font-semibold tracking-wide">
              SHORT COURSES
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Industry-Focused{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
              Short Courses
            </span>
          </h1>

          <p className="text-white/70 max-w-3xl mx-auto text-lg sm:text-xl">
            Practical, career-driven programmes designed to upgrade skills,
            empower professionals, and open new opportunities.
          </p>
        </div>
      </section>
      

      {/* COURSES */}
      <section className="relative pb-32">
        {/* section glow */}
<div className="absolute inset-0
  bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-28">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
            >
              {/* CATEGORY HEADER */}
              <div className="mb-10 flex items-center gap-4">
                <div className="h-10 w-1 rounded-full bg-gradient-to-b from-red-500 to-red-700" />
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {cat.title}
                </h2>
              </div>

              {/* COURSES GRID */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.courses.map((course) => (
                  <motion.div
                    key={course}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-2xl p-6
                               hover:border-red-500/50 hover:shadow-[0_20px_60px_rgba(220,38,38,0.25)]"
                  >
                    {/* hover glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-red-600/0 blur-3xl transition-all duration-500 group-hover:bg-red-600/30" />

                    <p className="relative text-lg font-semibold text-white/90 group-hover:text-red-400 transition">
                      {course}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}