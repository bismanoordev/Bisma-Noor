import React from "react";
import htmlLogo from "../assets/html5.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import bootstrapLogo from "../assets/bootstrap.png";
import githubLogo from "../assets/github.png";
import tailLogo from "../assets/tail.png";

export default function Skills() {
  return (
    <div className="bg-slate-800">
      <h1 className="text-center mb-10 sm:mb-12 cursor-pointer text-gray-100 text-5xl font-semibold pt-6 underline decoration-gray-600 decoration-4 underline-offset-4">
        Skills
      </h1>

      {/* ✅ Using responsive grid for perfect alignment */}
      <div
        id="skills"
        className="
         flex flex-wrap justify-center pb-10 sm:pb-12 gap-6 md:justify-between items-center min-h-screen bg-slate-800 px-5 md:px-20 
        "
      >
        {/* HTML */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#E65100] rounded-xl cursor-pointer p-7 
          shadow-[0_0_25px_5px_rgba(230,81,0,0.6)] 
          hover:shadow-[0_0_35px_10px_rgba(230,81,0,0.9)] 
          transition duration-300 mx-auto"
        >
          <img
            src={htmlLogo}
            alt="HTML5 Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* CSS */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#0277BD] cursor-pointer rounded-xl p-7 
          shadow-[0_0_25px_5px_rgba(2,119,189,0.6)] 
          hover:shadow-[0_0_35px_10px_rgba(2,119,189,0.9)] 
          transition duration-300 mx-auto"
        >
          <img
            src={cssLogo}
            alt="CSS Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* JavaScript */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#F7DF1E] cursor-pointer rounded-xl p-7 
          shadow-[0_0_25px_5px_rgba(247,223,30,0.6)] 
          hover:shadow-[0_0_35px_10px_rgba(247,223,30,0.9)] 
          transition duration-300 mx-auto"
        >
          <img
            src={jsLogo}
            alt="JavaScript Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* React */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#00D8FF] cursor-pointer rounded-xl p-7 
          shadow-[0_0_25px_5px_rgba(0,216,255,0.6)] 
          hover:shadow-[0_0_35px_10px_rgba(0,216,255,0.9)] 
          transition duration-300 mx-auto"
        >
          <img
            src={reactLogo}
            alt="React Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Bootstrap */}
        <div
          className="bg-[#0a0f1c] border-2 border-[#6C19FF] cursor-pointer rounded-xl p-7 
          shadow-[0_0_25px_5px_rgba(108,25,255,0.6)] 
          hover:shadow-[0_0_35px_10px_rgba(108,25,255,0.9)] 
          transition duration-300 mx-auto"
        >
          <img
            src={bootstrapLogo}
            alt="Bootstrap Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* GitHub */}
        <div
    className="
      bg-[#0a0f1c] border-2 border-[#F5F5F5] cursor-pointer rounded-xl p-7 
      shadow-[0_0_25px_5px_rgba(245,245,245,0.6)] 
      hover:shadow-[0_0_35px_10px_rgba(245,245,245,0.9)] 
      transition duration-300 
      mx-auto
    "
  >
    <img
      src={githubLogo}
      alt="GitHub Logo"
      className="w-24 h-24 object-contain"
    />
  </div>

  {/* Tailwind */}
  <div
    className="
      bg-[#0a0f1c] border-2 border-[#00ACC1] cursor-pointer rounded-xl p-7 
      shadow-[0_0_25px_5px_rgba(0,172,193,0.6)] 
      hover:shadow-[0_0_35px_10px_rgba(0,172,193,0.9)] 
      transition duration-300 
      mx-auto
    "
  >
    <img
      src={tailLogo}
      alt="Tailwind Logo"
      className="w-24 h-24 object-contain"
    />
  </div>
    </div>
    </div>
  );
}
