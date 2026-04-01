import React from "react";
import myImage from "../assets/profile.png";

export default function About() {
  return (
    <>
      <div>
        <h1 className="text-center cursor-pointer text-gray-100 text-5xl font-semibold pt-6 underline decoration-gray-600 decoration-4 underline-offset-4">
          About me
        </h1>
        <div
          id="about"
          className="flex flex-col lg:flex-row items-center justify-between min-h-screen text-white px-4 sm:px-6 md:px-20 py-16"
        >
          <div className="lg:w-1/2 flex justify-center mt-14 lg:mt-0 ">
            <div className="relative rounded-full border border-cyan-300/25 p-3 animate-float-slow">
              <div className="absolute inset-2 rounded-full border border-dashed border-slate-300/35 animate-spin-slow" />
              <div className="absolute -inset-2 rounded-full bg-cyan-400/10 blur-xl animate-pulse-glow" />
              <img
                src={myImage}
                alt="Profile"
                className="relative z-10 rounded-full border border-cyan-300/30 bg-slate-900/40 object-contain w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[330px] md:h-[330px] grayscale hover:grayscale-0 transition duration-300 cursor-pointer shadow-[0_20px_50px_rgba(2,6,23,0.5)]"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-7 lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left items-center lg:items-start">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Hi, I'm <span className="text-cyan-300">Bisma</span>
            </h2>
            <h4 className="text-gray-300 text-sm lg:text-base font-semibold leading-6 sm:leading-7">
              <p>
                I am a{" "}
                <span className="font-semibold text-white">
                  Frontend Developer
                </span>
                . I have strong expertise in{" "}
                <span className="font-semibold text-[#06B6D4]">
                  Tailwind CSS
                </span>
                ,{" "}
                <span className="font-semibold text-[#6C19FF]">Bootstrap</span>,{" "}
                <span className="font-semibold text-[#00D8FF]">React.js</span>,{" "}
                <span className="font-semibold text-[#764ABC]">Redux.js</span>,{" "}
                <span className="font-semibold text-black">Next.js</span>,{" "}
                <span className="font-semibold text-[#FFA500]">Firebase</span>,{" "}
                <span className="font-semibold text-[#61DAFB]">Supabase</span>,{" "}
                <span className="font-semibold text-[#007FFF]">
                  Material-UI
                </span>
                ,{" "}
                <span className="font-semibold text-[#0EA5E9]">Shadcn UI</span>,{" "}
                <span className="font-semibold text-[#F7DF1E]">JavaScript</span>
                , <span className="font-semibold text-[#1572B6]">CSS</span>,{" "}
                <span className="font-semibold text-[#E34C26]">HTML</span>,{" "}
                <span className="font-semibold text-[#E74C3C]">Replit</span>,{" "}
                <span className="font-semibold text-[#3B82F6]">Replo</span>,{" "}
                <span className="font-semibold text-[#96BB7C]">Shopify</span>,{" "}
                <span className="font-semibold text-[#EC0000]">NestJS</span>,
                Responsive Web Design, Web Development, Web Applications, and
                Front-End Development.
                <br />
              </p>
            </h4>

            <div className="flex gap-4 text-3xl justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/bisma-noor-952092396/"
                target="_blank"
                rel="noreferrer"
                className="w-fit mb-4 sm:mb-6 md:mb-3 px-5 py-2 border border-cyan-300/50 rounded-md bg-cyan-500/10 hover:bg-cyan-500/20 hover:text-white transition duration-300 text-sm font-semibold tracking-wide"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.45;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 14s linear infinite;
        }

        .animate-float-slow {
          animation: float-slow 4.5s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2.8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
