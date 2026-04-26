import React from "react";
import { FaLaptop, FaCode } from "react-icons/fa";

export default function Service() {
  return (
    <div>
      <h1 className="text-center text-gray-100 text-3xl sm:text-4xl md:text-5xl font-semibold pt-6 underline decoration-gray-700 decoration-4 underline-offset-4">
        Services
      </h1>

      <div
        id="service"
        className="
        grid grid-cols-1 
        sm:grid-cols-2 
        xl:grid-cols-3 
        items-stretch 
        text-white 
        px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 
        py-10 sm:py-14 
        gap-5 sm:gap-7
      "
      >
        {/* Card 1 */}
        <div className="w-full h-full border rounded-xl shadow-sm transition duration-300 transform hover:-translate-y-2">
          <div className="group flex h-full flex-col items-center justify-between 
          p-6 sm:p-8 
          bg-slate-900/60 backdrop-blur-md cursor-pointer rounded-xl 
          transition-all duration-300 ease-in-out border border-cyan-300/20 
          hover:border-cyan-300/50 
          hover:shadow-[0_10px_40px_rgba(34,211,238,0.35),0_0_25px_rgba(34,211,238,0.25)]">

            <FaLaptop className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 text-gray-100 mb-5 group-hover:text-cyan-300 transition duration-300" />

            <h5 className="text-xl sm:text-2xl md:text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
              Custom Websites
            </h5>

            <p className="text-xs sm:text-sm md:text-base text-center mt-4 text-gray-100 group-hover:text-gray-400 transition duration-300 px-2 sm:px-4 max-w-md">
              I build dynamic and user-friendly websites that deliver seamless
              user experiences and visually captivating animations, making each
              interaction smooth and engaging.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full h-full border rounded-xl shadow-sm transition duration-300 transform hover:-translate-y-2">
          <div className="group flex h-full flex-col items-center justify-between 
          p-6 sm:p-8 
          bg-slate-900/60 backdrop-blur-md cursor-pointer rounded-xl 
          transition-all duration-300 ease-in-out border border-cyan-300/20 
          hover:border-cyan-300/50 
          hover:shadow-[0_10px_40px_rgba(34,211,238,0.35),0_0_25px_rgba(34,211,238,0.25)]">

            <FaCode className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 text-gray-100 mb-5 group-hover:text-cyan-300 transition duration-300" />

            <h5 className="text-xl sm:text-2xl md:text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
              Web Application
            </h5>

            <p className="text-xs sm:text-sm md:text-base text-center mt-4 text-gray-100 group-hover:text-gray-400 transition duration-300 px-2 sm:px-4 max-w-md">
              I specialize in creating full stack websites using modern
              technologies like MERN Stack (MongoDB, Express.js, React.js, and
              Node.js) and Next.js.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full h-full border rounded-xl shadow-sm transition duration-300 transform hover:-translate-y-2 sm:col-span-2 sm:max-w-xl sm:mx-auto xl:col-span-1 xl:max-w-none">
          <div className="group flex h-full flex-col items-center justify-between 
          p-6 sm:p-8 
          bg-slate-900/60 backdrop-blur-md cursor-pointer rounded-xl 
          transition-all duration-300 ease-in-out border border-cyan-300/20 
          hover:border-cyan-300/50 
          hover:shadow-[0_10px_40px_rgba(34,211,238,0.35),0_0_25px_rgba(34,211,238,0.25)]">

            <FaCode className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 text-gray-100 mb-5 group-hover:text-cyan-300 transition duration-300" />

            <h5 className="text-xl sm:text-2xl md:text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
              Vibe Codding
            </h5>

            <p className="text-xs sm:text-sm md:text-base text-center mt-4 text-gray-100 group-hover:text-gray-400 transition duration-300 px-2 sm:px-4 max-w-md">
              I provide vipe codding services to build clean, modern, and
              scalable web solutions with smooth UI, strong logic, and optimized
              performance for better user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}