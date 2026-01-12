// import { programmes } from "@/app/data/programmes";
// import { notFound } from "next/navigation";
// import Image from "next/image";

// type PageProps = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export async function generateStaticParams() {
//   return programmes.map((programme) => ({
//     slug: programme.slug,
//   }));
// }

// export default async function ProgrammePage({ params }: PageProps) {
//   const { slug } = await params;

//   const programme = programmes.find((p) => p.slug === slug);
//   if (!programme) notFound();

//   return (
//     <main className="bg-black text-white">

//       {/* ================= HERO ================= */}
//     {/* ================= HERO ================= */}
// <section className="relative">
//   <div className="mx-auto max-w-7xl px-6 py-20">
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

//       {/* LEFT CONTENT */}
//       <div>
//         <span className="inline-block mb-4 mt-5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold">
//           {programme.level}
//         </span>

//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
//           {programme.title}
//         </h1>

//         <p className="mt-6 text-white/75 max-w-xl leading-relaxed">
//           {programme.description}
//         </p>

//         <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
//           <MetaBox label="Duration" value={programme.duration} />
//           <MetaBox label="Intake" value={programme.intake} />
//           <MetaBox label="Delivery" value={programme.delivery} />
//         </div>

//         <div className="mt-10 flex gap-4">
//           <a
//             href="/apply-now"
//             className="rounded-full bg-red-600 px-8 py-3 text-sm font-bold text-white hover:bg-red-500 transition"
//           >
//             Apply Now
//           </a>
//           <a
//             href="/contact"
//             className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
//           >
//             Speak to Advisor
//           </a>
//         </div>
//       </div>

//       {/* RIGHT IMAGE – HORIZONTAL */}
//       <div className="relative">
//         <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
//           <Image
//             src={programme.image}
//             alt={programme.title}
//             fill
//             priority
//             className="object-cover"
//           />
//         </div>

//         {/* subtle glow */}
//         <div className="absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-red-500/20 blur-3xl -z-10" />
//       </div>

//     </div>
//   </div>
// </section>


//       {/* ================= AIMS ================= */}
//       {programme.aims && (
//         <section className="border-t border-white/10 py-16">
//           <div className="mx-auto max-w-6xl px-6">
//             <h2 className="text-3xl font-extrabold mb-8">
//               Programme Aims
//             </h2>

//             <ul className="grid sm:grid-cols-2 gap-4">
//               {programme.aims.map((aim, i) => (
//                 <li
//                   key={i}
//                   className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80"
//                 >
//                   {aim}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>
//       )}

//       {/* ================= PROGRAMME INFO ================= */}
//       {programme.programmeInformation && (
//         <section className="border-t border-white/10 py-16">
//           <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2">
//             <InfoCard
//               title="Course Assessment"
//               text={programme.programmeInformation.courseAssessment}
//             />
//             <InfoCard
//               title="Teaching Method"
//               text={programme.programmeInformation.teachingMethod}
//             />
//           </div>
//         </section>
//       )}

//       {/* ================= COURSE STRUCTURE ================= */}
//       {programme.courseStructure && (
//         <section className="border-t border-white/10 py-16">
//           <div className="mx-auto max-w-6xl px-6">
//             <h2 className="text-3xl font-extrabold mb-10">
//               Course Structure
//             </h2>

//             <div className="grid md:grid-cols-2 gap-8">
//               <SemesterCard
//                 title="Semester 1"
//                 items={programme.courseStructure.semester1}
//               />
//               <SemesterCard
//                 title="Semester 2"
//                 items={programme.courseStructure.semester2}
//               />
//             </div>
//           </div>
//         </section>
//       )}

//     </main>
//   );
// }

// /* ================= COMPONENTS ================= */

// function MetaBox({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
//       <p className="text-lg font-extrabold">{value}</p>
//       <p className="text-xs text-white/60 mt-1">{label}</p>
//     </div>
//   );
// }

// function InfoCard({ title, text }: { title: string; text: string }) {
//   return (
//     <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
//       <h3 className="text-xl font-extrabold mb-4">{title}</h3>
//       <p className="text-white/75 leading-relaxed">{text}</p>
//     </div>
//   );
// }

// function SemesterCard({
//   title,
//   items,
// }: {
//   title: string;
//   items: string[];
// }) {
//   return (
//     <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
//       <h3 className="text-xl font-extrabold mb-4">{title}</h3>
//       <ul className="space-y-3">
//         {items.map((item, i) => (
//           <li
//             key={i}
//             className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white/80"
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



import { programmes } from "@/app/data/programmes";
import { notFound } from "next/navigation";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return programmes.map((programme) => ({
    slug: programme.slug,
  }));
}

export default async function ProgrammePage({ params }: PageProps) {
  const { slug } = await params;

  const programme = programmes.find((p) => p.slug === slug);
  if (!programme) notFound();

  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* ===== BACKGROUND DECOR ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div>
              <span className="inline-block mb-4 mt-5 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold text-red-300">
                {programme.level}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                {programme.title}
              </h1>

              <p className="mt-6 text-white/75 max-w-xl leading-relaxed">
                {programme.description}
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
                <MetaBox label="Duration" value={programme.duration} color="from-red-500 to-orange-500" />
<MetaBox
  label="Intake"
  value={
    <>
      <span className="sm:hidden">Sept</span>
      <span className="hidden sm:inline">September</span>
    </>
  }
  color="from-indigo-500 to-purple-500"
/>
                <MetaBox label="Delivery" value={programme.delivery} color="from-emerald-500 to-teal-500" />
              </div>

              <div className="mt-10 flex gap-4">
                <a
                  href="/apply-now"
                  className="rounded-full bg-red-600 px-8 py-3 text-sm font-bold text-white hover:bg-red-500 transition"
                >
                  Apply Now
                </a>
                <a
                  href="/contact"
                  className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Speak to Advisor
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src={programme.image}
                  alt={programme.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-red-500/30 blur-3xl -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* ================= AIMS ================= */}
      {programme.aims && (
        <section className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-extrabold mb-8">
              Programme Aims
            </h2>

            <ul className="grid sm:grid-cols-2 gap-4">
              {programme.aims.map((aim, i) => (
                <li
                  key={i}
                  className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-5 text-white/85 backdrop-blur"
                >
                  {aim}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ================= PROGRAMME INFO ================= */}
      {programme.programmeInformation && (
        <section className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2">
            <InfoCard
              title="Course Assessment"
              text={programme.programmeInformation.courseAssessment}
              gradient="from-red-500/20 to-orange-500/10"
            />
            <InfoCard
              title="Teaching Method"
              text={programme.programmeInformation.teachingMethod}
              gradient="from-indigo-500/20 to-purple-500/10"
            />
          </div>
        </section>
      )}

      {/* ================= COURSE STRUCTURE ================= */}
      {programme.courseStructure && (
        <section className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-extrabold mb-10">
              Course Structure
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <SemesterCard
                title="Semester 1"
                items={programme.courseStructure.semester1}
                color="from-emerald-500/30 to-teal-500/10"
              />
              <SemesterCard
                title="Semester 2"
                items={programme.courseStructure.semester2}
                color="from-purple-500/30 to-indigo-500/10"
              />
            </div>
          </div>
        </section>
      )}

    </main>
  );
}

/* ================= COMPONENTS ================= */

function MetaBox({
  label,
  value,
  color,
}: {
  label: string;
value: React.ReactNode;
  color: string;
}) {
  return (
    <div className={`rounded-2xl bg-gradient-to-r ${color} p-[1px]`}>
      <div className="rounded-2xl bg-black/70 p-4 text-center backdrop-blur">
        <p className="text-lg font-extrabold">{value}</p>
        <p className="text-xs text-white/60 mt-1">{label}</p>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  text,
  gradient,
}: {
  title: string;
  text: string;
  gradient: string;
}) {
  return (
    <div className={`rounded-3xl bg-gradient-to-br ${gradient} p-[1px]`}>
      <div className="rounded-3xl bg-black/70 p-8 backdrop-blur">
        <h3 className="text-xl font-extrabold mb-4">{title}</h3>
        <p className="text-white/75 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function SemesterCard({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: string;
}) {
  return (
    <div className={`rounded-3xl bg-gradient-to-br ${color} p-[1px]`}>
      <div className="rounded-3xl bg-black/70 p-8 backdrop-blur">
        <h3 className="text-xl font-extrabold mb-4">{title}</h3>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
