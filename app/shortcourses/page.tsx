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
    <main className="bg-black text-white overflow-hidden">
      {/* HERO  */}
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-black to-black" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-xl mb-6">
            <Sparkles className="h-4 w-4 text-red-400" />
            <span className="text-sm font-semibold">SHORT COURSES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Explore a Diverse Range of{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
              Transformative Programmes
            </span>
          </h1>

          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Industry-focused short courses designed to enhance skills, accelerate
            careers, and unlock new opportunities.
          </p>
        </div>
      </section>

      {/* COURSES  */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 border-l-4 border-red-500 pl-4">
                {cat.title}
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.courses.map((course) => (
                  <div
                    key={course}
                    className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-red-500/50 hover:bg-white/10 transition"
                  >
                    <p className="text-lg font-medium group-hover:text-red-400 transition">
                      {course}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section>
        <div className="">
            
        </div>
      </section>
    </main>
  );
  
}
