import React from "react";
import myImage from "../assets/profile.png";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row items-center justify-between min-h-screen text-white 
      px-4 sm:px-6 md:px-12 lg:px-20 
      pt-20 sm:pt-24 md:pt-28 
      gap-10"
    >
      {/* Left Side Content */}
      <div className="flex flex-col space-y-5 lg:w-1/2 mt-6 lg:mt-0 
      text-center lg:text-left items-center lg:items-start">
        
        <h4 className="text-cyan-200 text-xs sm:text-sm font-semibold">
          Hi, I'm Bisma
        </h4>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          I'M A <br />
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            FRONTEND DEVELOPER
          </span>
        </h1>

        {/* Buttons and Social Links */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mt-4">
          
          {/* Button */}
          <a
            href="https://www.linkedin.com/in/bisma-noor-952092396/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-cyan-300/50 rounded-md 
            bg-cyan-500/10 hover:bg-cyan-500/20 hover:text-white 
            transition duration-300 text-sm font-semibold tracking-wide"
          >
            Hire Me
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg sm:text-xl">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-cyan-300 transition hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.75)]" />
            </a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-cyan-300 transition hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.75)]" />
            </a>
            <a href="https://github.com/bismanoordev" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-cyan-300 transition hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.75)]" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <div className="relative rounded-full border border-cyan-300/25 p-2 sm:p-3 animate-float-slow">
          <div className="absolute inset-2 rounded-full border border-dashed border-slate-300/35 animate-spin-slow" />
          <div className="absolute -inset-2 rounded-full bg-cyan-400/10 blur-xl animate-pulse-glow" />

          <img
            src={myImage}
            alt="Profile"
            className="relative z-10 rounded-full border border-cyan-300/30 bg-slate-900/40 object-contain 
            w-[180px] h-[180px] 
            sm:w-[240px] sm:h-[240px] 
            md:w-[300px] md:h-[300px] 
            lg:w-[330px] lg:h-[330px] 
            grayscale hover:grayscale-0 transition duration-300 cursor-pointer 
            shadow-[0_20px_50px_rgba(2,6,23,0.5)]"
          />
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
    </div>
  );
}