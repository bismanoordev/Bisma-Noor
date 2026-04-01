import React from "react";
import { FaLaptop, FaCode } from "react-icons/fa";

export default function Service() {
  return (
    <div>
      <h1 className="text-center cursor-pointer text-gray-100 text-5xl font-semibold pt-6 underline decoration-gray-700 decoration-4 underline-offset-4">
        Services
      </h1>
      <div
        id="service"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch text-white px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-14 gap-6 sm:gap-8"
      >
        {/* Card 1 */}
        <div className="w-full h-full border rounded-xl shadow-sm transition duration-300 transform hover:-translate-y-2">
          <div className="group flex h-full flex-col items-center pb-10 pt-10 bg-slate-900/60 backdrop-blur-md cursor-pointer rounded-xl transition duration-300 border border-cyan-300/20 hover:border-cyan-300/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
            <FaLaptop className="h-16 w-16 sm:h-20 sm:w-20 text-gray-100 font-bold mb-5 group-hover:text-cyan-300 transition duration-300" />
            <h5 className="mb-1 text-2xl sm:text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
              Custom Websites
            </h5>
            <p className="text-xs sm:text-sm text-center mt-4 text-gray-100 group-hover:text-gray-400 transition duration-300 px-4">
              I build dynamic and user-friendly websites that deliver seamless
              user experiences and visually captivating animations, making each
              interaction smooth and engaging.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full h-full border rounded-xl shadow-sm transition duration-300 transform hover:-translate-y-2">
          <div className="group flex h-full flex-col cursor-pointer items-center pb-10 pt-10 bg-slate-900/60 backdrop-blur-md rounded-xl transition duration-300 border border-cyan-300/20 hover:border-cyan-300/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
            <FaCode className="h-16 w-16 sm:h-20 sm:w-20 text-gray-100 font-bold mb-5 group-hover:text-cyan-300 transition duration-300" />
            <h5 className="mb-1 text-2xl sm:text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
              Web Application
            </h5>
            <p className="text-xs sm:text-sm text-center mt-4 text-gray-100 group-hover:text-gray-400 transition duration-300 px-4">
              I specialize in creating full stack websites using modern
              technologies like MERN Stack (MongoDB, Express.js, React.js, and
              Node.js) and Next.js.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full h-full border rounded-xl shadow-sm transition duration-300 transform hover:-translate-y-2 md:col-span-2 md:mx-auto md:max-w-[calc((100%-1.5rem)/2)] xl:col-span-1 xl:max-w-none">
          <div className="group flex h-full flex-col cursor-pointer items-center pb-10 pt-10 bg-slate-900/60 backdrop-blur-md rounded-xl transition duration-300 border border-cyan-300/20 hover:border-cyan-300/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
            <FaCode className="h-16 w-16 sm:h-20 sm:w-20 text-gray-100 font-bold mb-5 group-hover:text-cyan-300 transition duration-300" />

            <h5 className="mb-1 text-2xl sm:text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
              Vibe Codding
            </h5>

            <p className="text-xs sm:text-sm text-center mt-4 text-gray-100 group-hover:text-gray-400 transition duration-300 px-4">
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
