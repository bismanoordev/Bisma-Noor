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
import wordpressLogo from "../assets/wordpress.png";

const skills = [
  { name: "HTML5", img: htmlLogo, border: "#E65100"},
  { name: "CSS3", img: cssLogo, border: "#0277BD" },
  { name: "JavaScript", img: jsLogo, border: "#F7DF1E"},
  { name: "React", img: reactLogo, border: "#00D8FF" },
  { name: "Bootstrap", img: bootstrapLogo, border: "#6C19FF" },
  { name: "GitHub", img: githubLogo, border: "#F5F5F5" },
  { name: "Tailwind", img: tailLogo, border: "#00ACC1" },
  { name: "Replit", img: replitLogo, border: "#E74C3C" },
  { name: "Shopify", img: shopifyLogo, border: "#96BF48" },
  { name: "Firebase", img: firebaseLogo, border: "#FFCA28" },
  { name: "Supabase", img: supabaseLogo, border: "#3ECF8E" },
  { name: "Next.js", img: nextLogo, border: "#E5E7EB" },
  { name: "Vercel", img: vercelLogo, border: "#A3A3A3" },
  { name: "Material-UI", img: materialLogo, border: "#007FFF" },
  { name: "Redux", img: reduxLogo, border: "#764ABC" },
  { name: "Wordpress", img: wordpressLogo, border: "#007FFF" },
];

export default function Skills() {
  return (
    <div className="bg-slate-800">
      <h1 className="text-center mb-8 sm:mb-12 mt-6  text-gray-100 text-3xl sm:text-5xl font-semibold underline decoration-gray-600 decoration-4 underline-offset-4">
        Skills
      </h1>

      {/* ✅ Responsive Grid */}
      <div
        id="skills"
        className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-5 
        xl:grid-cols-6
        gap-4 sm:gap-6 
        px-4 sm:px-6 md:px-12 lg:px-20 lg:pt-20
        pb-10 sm:pb-12 md:pb-16
      "
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#0a0f1c] rounded-xl cursor-pointer p-4 sm:p-5 
            border-2 transition duration-300 group text-center"
            style={{
              borderColor: skill.border,
              boxShadow: `0 0 25px 5px ${skill.shadow}`,
            }}
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 object-contain mx-auto"
            />

            <p className="text-xs mt-3 text-gray-300 tracking-wide group-hover:text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}