import React from "react";
import htmlLogo from "../assets/html5.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import bootstrapLogo from "../assets/bootstrap.png";
import githubLogo from "../assets/github.png";
import tailLogo from "../assets/tail.png";
import replitLogo from "../assets/Replit.png";
import shopifyLogo from "../assets/shopify.png";
import firebaseLogo from "../assets/firebase.png";
import supabaseLogo from "../assets/supabase.png";
import nextLogo from "../assets/next.png";
import vercelLogo from "../assets/vercel.png";
import materialLogo from "../assets/matrial-ui.png";
import reduxLogo from "../assets/redux.png";

export default function Skills() {
  return (
    <div className="bg-slate-800">
      <h1 className="text-center mb-10 mt-6 sm:mb-12 cursor-pointer text-gray-100 text-4xl sm:text-5xl font-semibold underline decoration-gray-600 decoration-4 underline-offset-4">
        Skills
      </h1>

      {/* ✅ Using responsive grid for perfect alignment */}
      <div
        id="skills"
        className="
         flex flex-wrap justify-center pt-10 pb-10 sm:pb-12 gap-4 sm:gap-5 items-center md:min-h-screen px-4 sm:px-5 md:px-20 
        "
      >
        {/* HTML */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#E65100] rounded-xl cursor-pointer w-[128px] sm:w-[148px] min-h-[148px] p-4 sm:p-6 
          shadow-[0_0_25px_5px_rgba(230,81,0,0.6)] 
          hover:shadow-[0_0_35px_10px_rgba(230,81,0,0.9)] 
          transition duration-300 mx-auto group"
        >
          <img
            src={htmlLogo}
            alt="HTML5 Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
          <p className="text-center text-xs mt-3 text-gray-300 tracking-wide group-hover:text-white">
            HTML5
          </p>
        </div>

        {/* CSS */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#0277BD] cursor-pointer rounded-xl w-[128px] sm:w-[148px] min-h-[148px] p-4 sm:p-6 
          shadow-[0_0_25px_5px_rgba(2,119,189,0.6)] 
          hover:shadow-[0_0_35px_10px_rgba(2,119,189,0.9)] 
          transition duration-300 mx-auto group"
        >
          <img
            src={cssLogo}
            alt="CSS Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
          <p className="text-center text-xs mt-3 text-gray-300 tracking-wide group-hover:text-white">
            CSS3
          </p>
        </div>

        {/* JavaScript */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#F7DF1E] cursor-pointer rounded-xl w-[128px] sm:w-[148px] min-h-[148px] p-4 sm:p-6 
          shadow-[0_0_25px_5px_rgba(247,223,30,0.6)] 
          hover:shadow-[0_0_35px_10px_rgba(247,223,30,0.9)] 
          transition duration-300 mx-auto group"
        >
          <img
            src={jsLogo}
            alt="JavaScript Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
          <p className="text-center text-xs mt-3 text-gray-300 tracking-wide group-hover:text-white">
            JavaScript
          </p>
        </div>

        {/* React */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#00D8FF] cursor-pointer rounded-xl w-[128px] sm:w-[148px] min-h-[148px] p-4 sm:p-6 
          shadow-[0_0_25px_5px_rgba(0,216,255,0.6)] 
          hover:shadow-[0_0_35px_10px_rgba(0,216,255,0.9)] 
          transition duration-300 mx-auto group"
        >
          <img
            src={reactLogo}
            alt="React Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
          <p className="text-center text-xs mt-3 text-gray-300 tracking-wide group-hover:text-white">
            React
          </p>
        </div>

        {/* Bootstrap */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#6C19FF] cursor-pointer rounded-xl w-[128px] sm:w-[148px] min-h-[148px] p-4 sm:p-6 
          shadow-[0_0_25px_5px_rgba(108,25,255,0.6)] 
          hover:shadow-[0_0_35px_10px_rgba(108,25,255,0.9)] 
          transition duration-300 mx-auto group"
        >
          <img
            src={bootstrapLogo}
            alt="Bootstrap Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
          <p className="text-center text-xs mt-3 text-gray-300 tracking-wide group-hover:text-white">
            Bootstrap
          </p>
        </div>

        {/* GitHub */}
        <div
          className="
      bg-[#0a0f1c] border-2 border-[#F5F5F5] cursor-pointer rounded-xl w-[128px] sm:w-[148px] min-h-[148px] p-4 sm:p-6 
      shadow-[0_0_25px_5px_rgba(245,245,245,0.6)] 
      hover:shadow-[0_0_35px_10px_rgba(245,245,245,0.9)] 
      transition duration-300 mx-auto group
    "
        >
          <img
            src={githubLogo}
            alt="GitHub Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
          <p className="text-center text-xs mt-3 text-gray-300 tracking-wide group-hover:text-white">
            GitHub
          </p>
        </div>

        {/* Tailwind */}
        <div
          className="
      bg-[#0a0f1c] border-2 border-[#00ACC1] cursor-pointer rounded-xl w-[128px] sm:w-[148px] min-h-[148px] p-4 sm:p-6 
      shadow-[0_0_25px_5px_rgba(0,172,193,0.6)] 
      hover:shadow-[0_0_35px_10px_rgba(0,172,193,0.9)] 
      transition duration-300 mx-auto group
    "
        >
          <img
            src={tailLogo}
            alt="Tailwind Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
          <p className="text-center text-xs mt-3 text-gray-300 tracking-wide group-hover:text-white">
            Tailwind
          </p>
        </div>

        {/* Replit */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#E74C3C] cursor-pointer rounded-xl w-[128px] sm:w-[148px] min-h-[148px] p-4 sm:p-6
          shadow-[0_0_25px_5px_rgba(231,76,60,0.6)]
          hover:shadow-[0_0_35px_10px_rgba(231,76,60,0.9)]
          transition duration-300 mx-auto group"
        >
          <img
            src={replitLogo}
            alt="Replit Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
          <p className="text-center text-xs mt-3 text-gray-300 tracking-wide group-hover:text-white">
            Replit
          </p>
        </div>

        {/* Shopify */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#96BF48] cursor-pointer rounded-xl w-[128px] sm:w-[148px] min-h-[148px] p-4 sm:p-6
          shadow-[0_0_25px_5px_rgba(150,191,72,0.6)]
          hover:shadow-[0_0_35px_10px_rgba(150,191,72,0.9)]
          transition duration-300 mx-auto group"
        >
          <img
            src={shopifyLogo}
            alt="Shopify Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
          <p className="text-center text-xs mt-1 text-gray-300 tracking-wide group-hover:text-white">
            Shopify
          </p>
        </div>

        {/* Firebase */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#FFCA28] cursor-pointer rounded-xl w-[128px] sm:w-[148px] min-h-[148px] p-4 sm:p-6
          shadow-[0_0_25px_5px_rgba(255,202,40,0.6)]
          hover:shadow-[0_0_35px_10px_rgba(255,202,40,0.9)]
          transition duration-300 mx-auto group"
        >
          <img
            src={firebaseLogo}
            alt="Firebase Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
          <p className="text-center text-xs mt-3 text-gray-300 tracking-wide group-hover:text-white">
            Firebase
          </p>
        </div>

        {/* Supabase */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#3ECF8E] cursor-pointer rounded-xl w-[128px] sm:w-[148px] min-h-[148px] p-4 sm:p-6
          shadow-[0_0_25px_5px_rgba(62,207,142,0.6)]
          hover:shadow-[0_0_35px_10px_rgba(62,207,142,0.9)]
          transition duration-300 mx-auto group"
        >
          <img
            src={supabaseLogo}
            alt="Supabase Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
          <p className="text-center text-xs mt-3 text-gray-300 tracking-wide group-hover:text-white">
            Supabase
          </p>
        </div>

        {/* Next.js */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#E5E7EB] cursor-pointer rounded-xl w-[128px] sm:w-[148px] min-h-[148px] p-4 sm:p-6
          shadow-[0_0_25px_5px_rgba(229,231,235,0.45)]
          hover:shadow-[0_0_35px_10px_rgba(229,231,235,0.7)]
          transition duration-300 mx-auto group"
        >
          <img
            src={nextLogo}
            alt="Next.js Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
          <p className="text-center text-xs mt-3 text-gray-300 tracking-wide group-hover:text-white">
            Next.js
          </p>
        </div>

        {/* Vercel */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#A3A3A3] cursor-pointer rounded-xl w-[128px] sm:w-[148px] min-h-[148px] p-4 sm:p-6
          shadow-[0_0_25px_5px_rgba(163,163,163,0.45)]
          hover:shadow-[0_0_35px_10px_rgba(163,163,163,0.7)]
          transition duration-300 mx-auto group"
        >
          <img
            src={vercelLogo}
            alt="Vercel Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
          <p className="text-center text-xs mt-3 text-gray-300 tracking-wide group-hover:text-white">
            Vercel
          </p>
        </div>

        {/* Material-UI */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#007FFF] cursor-pointer rounded-xl w-[128px] sm:w-[148px] min-h-[148px] p-4 sm:p-6
          shadow-[0_0_25px_5px_rgba(0,127,255,0.5)]
          hover:shadow-[0_0_35px_10px_rgba(0,127,255,0.8)]
          transition duration-300 mx-auto group"
        >
          <img
            src={materialLogo}
            alt="Material UI Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
          <p className="text-center text-xs mt-3 text-gray-300 tracking-wide group-hover:text-white">
            Material-UI
          </p>
        </div>

        {/* Redux */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#764ABC] cursor-pointer rounded-xl w-[128px] sm:w-[148px] min-h-[148px] p-4 sm:p-6
          shadow-[0_0_25px_5px_rgba(118,74,188,0.55)]
          hover:shadow-[0_0_35px_10px_rgba(118,74,188,0.85)]
          transition duration-300 mx-auto group"
        >
          <img
            src={reduxLogo}
            alt="Redux Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
          <p className="text-center text-xs mt-3 text-gray-300 tracking-wide group-hover:text-white">
            Redux
          </p>
        </div>
      </div>
    </div>
  );
}

