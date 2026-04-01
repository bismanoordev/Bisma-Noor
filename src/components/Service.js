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
        className="flex flex-col md:flex-row items-center justify-between min-h-screen text-white px-4 sm:px-6 md:px-20 py-14"
      >
        {/* Card 1 */}
        <div
          className="w-full max-w-sm border rounded-xl shadow-sm mt-8 md:mt-12 mx-4 my-8 
                      transition duration-300 transform hover:-translate-y-2"
        >
          <div className="group flex flex-col min-h-[22rem] items-center pb-10 pt-10 bg-slate-900/60 backdrop-blur-md cursor-pointer rounded-xl transition duration-300 border border-cyan-300/20 hover:border-cyan-300/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
            <FaLaptop className="h-16 w-16 sm:h-20 sm:w-20 text-gray-100 font-bold mb-5 group-hover:text-cyan-300 transition duration-300" />
            <h5 className="mb-1 text-2xl sm:text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
              Custom Websites
            </h5>
            <p className="text-xs sm:text-sm text-center mt-4 text-gray-100 group-hover:text-gray-400 transition duration-300 px-3">
              I build dynamic and user-friendly websites <br />
              that deliver seamless user experiences and <br />
              visually captivating animations, making each <br />
              interaction smooth and engaging.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="w-full max-w-sm border rounded-xl shadow-sm mt-8 md:mt-12 mx-4 my-8
                      transition duration-300 transform hover:-translate-y-2"
        >
          <div className="group flex flex-col cursor-pointer min-h-[22rem] items-center pb-10 pt-10 bg-slate-900/60 backdrop-blur-md rounded-xl transition duration-300 border border-cyan-300/20 hover:border-cyan-300/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
            <FaCode className="h-16 w-16 sm:h-20 sm:w-20 text-gray-100 font-bold mb-5 group-hover:text-cyan-300 transition duration-300" />
            <h5 className="mb-1 text-2xl sm:text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
              Web Application
            </h5>
            <p className="text-xs sm:text-sm text-center mt-4 text-gray-100 group-hover:text-gray-400 transition duration-300 px-3">
              I specialize in creating Full Stack Websites using <br />
              modern technologies like MERN Stack (MongoDB, <br />
              Express.js, React.js, and Node.js) and Next.js — <br />a perfect
              combination.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="w-full max-w-sm border rounded-xl shadow-sm mt-8 md:mt-12 mx-4 my-8
                      transition duration-300 transform hover:-translate-y-2"
        >
          <div className="group flex flex-col cursor-pointer min-h-[22rem] items-center pb-10 pt-10 bg-slate-900/60 backdrop-blur-md rounded-xl transition duration-300 border border-cyan-300/20 hover:border-cyan-300/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
            <FaCode className="h-16 w-16 sm:h-20 sm:w-20 text-gray-100 font-bold mb-5 group-hover:text-cyan-300 transition duration-300" />

            <h5 className="mb-1 text-2xl sm:text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
              Vipe Codding
            </h5>

            <p className="text-xs sm:text-sm text-center mt-4 text-gray-100 group-hover:text-gray-400 transition duration-300 px-3">
              I provide vipe codding services to build <br />
              clean, modern, and scalable web solutions <br />
              with smooth UI, strong logic, and optimized <br />
              performance for better user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
