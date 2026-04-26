import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationItems = [
  {
    title: "BS Computer Science",
    institute: "Virtual University of Pakistan",
    period: "2021 - 2025",
    detail:
      "Focused on software engineering, web development, and modern technologies.",
  },
  {
    title: "Intermediate (ICS)",
    institute: "Punjab Group of Colleges",
    period: "2019 - 2021",
    detail:
      "Built a strong base in programming, mathematics, and computer fundamentals.",
  },
  {
    title: "Matriculation",
    institute: "Board of Intermediate & Secondary Education",
    period: "2017 - 2019",
    detail:
      "Completed foundational studies with interest in technology and computing.",
  },
];

export default function Education() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 sm:h-56 sm:w-56 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <h1 className="text-center text-[#2DB0F2] text-3xl sm:text-5xl md:text-6xl font-semibold pt-6">
        Education
      </h1>

      <p className="text-center text-[#869FBA] text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4 mt-2 mb-4">
        A quick overview of my academic journey and core learning foundations.
      </p>

      <div
        id="education"
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 
        text-white px-4 sm:px-6 md:px-12 lg:px-20 
        py-10 sm:py-14 gap-6 sm:gap-7"
      >
        {educationItems.map((item, index) => (
          <div
            key={item.title}
            className={`w-full h-full border rounded-2xl shadow-sm transition duration-300 transform hover:-translate-y-2 hover:scale-[1.01] ${
              index === 2
                ? "sm:col-span-2 sm:mx-auto sm:max-w-[500px] xl:col-span-1 xl:max-w-none"
                : ""
            }`}
          >
            <div className="group relative flex h-full flex-col 
            p-4 sm:p-5 md:p-6 
            bg-slate-900/60 backdrop-blur-md rounded-2xl 
            transition duration-300 border border-cyan-300/20 
            hover:border-cyan-300/50 
             hover:shadow-[0_10px_40px_rgba(34,211,238,0.35),0_0_25px_rgba(34,211,238,0.25)] overflow-hidden">

              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-300/70 to-blue-400/70" />
              <div className="absolute -right-10 -top-10 h-20 w-20 sm:h-28 sm:w-28 rounded-full bg-cyan-400/10 blur-2xl" />

              <span className="absolute top-3 left-3 text-[10px] sm:text-[11px] font-bold tracking-[0.12em] text-cyan-200/85">
                0{index + 1}
              </span>

              <div className="flex items-start justify-between gap-3 pl-2 pt-2">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl border border-cyan-300/35 bg-cyan-400/10 flex items-center justify-center shadow-[0_0_16px_rgba(34,211,238,0.15)]">
                  <FaGraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300 group-hover:scale-110 transition duration-300" />
                </div>

                <span className="text-[10px] sm:text-xs font-semibold tracking-wide px-2 sm:px-3 py-1 rounded-full border border-cyan-300/35 text-cyan-200 bg-cyan-500/10">
                  {item.period}
                </span>
              </div>

              <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-bold text-gray-100 group-hover:text-gray-300 transition duration-300 pl-2">
                {item.title}
              </h3>

              <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-semibold text-cyan-200 pl-2">
                {item.institute}
              </p>

              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-100/90 leading-5 pl-2 pr-1">
                {item.detail}
              </p>

              <div className="mt-auto pt-3 pl-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-500/10 px-3 py-1 text-[10px] sm:text-xs font-medium text-cyan-200">
                  Academic Milestone
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}