import React from "react";
import { FaLaptop, FaCode, FaLinkedinIn } from "react-icons/fa";

export default function Service() {
  return (
    <div className="bg-slate-900 ">
      <h1 className="text-center cursor-pointer text-gray-100 text-5xl font-semibold pt-6 underline decoration-gray-700 decoration-4 underline-offset-4">
        Services
      </h1>
      <div id="service" className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br bg-slate-900 text-white px-8 md:px-20">
      {/* Card 1 */}
      <div
        className="w-full max-w-sm border border-gray-400 rounded-lg shadow-sm mt-20 mx-5 my-10 
                      hover:shadow-gray-500 hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
      >
        <div className="group flex flex-col h-96 items-center pb-10 pt-10 bg-gray-900 cursor-pointer rounded-lg transition duration-300 hover:shadow-lg hover:shadow-gray-600">
          <FaLaptop className="h-20 w-20 text-gray-100 font-bold mb-5 group-hover:text-gray-400 transition duration-300" />
          <h5 className="mb-1 text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
            Custom Websites
          </h5>
          <p className="text-sm text-center mt-4 text-gray-100 group-hover:text-gray-400 transition duration-300">
            I build dynamic and user-friendly websites <br />
            that deliver seamless user experiences and <br />
            visually captivating animations, making each <br />
            interaction smooth and engaging.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="w-full max-w-sm border border-gray-400 rounded-lg shadow-sm mt-20 mx-5 my-10
                      hover:shadow-gray-500 hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
      >
        <div className="group flex flex-col cursor-pointer h-96 items-center pb-10 pt-10 bg-gray-900 rounded-lg transition duration-300 hover:shadow-lg hover:shadow-gray-600">
          <FaCode className="h-20 w-20 text-gray-100 font-bold mb-5 group-hover:text-gray-400 transition duration-300" />
          <h5 className="mb-1 text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
            Web Application
          </h5>
          <p className="text-sm text-center mt-4 text-gray-100 group-hover:text-gray-400 transition duration-300">
            I specialize in creating Full Stack Websites using <br />
            modern technologies like MERN Stack (MongoDB, <br />
            Express.js, React.js, and Node.js) and Next.js — <br />a perfect
            combination.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="w-full max-w-sm border border-gray-400 rounded-lg shadow-sm mt-20 mx-5 my-10
                      hover:shadow-gray-500 hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
      >
        <div className="group flex flex-col cursor-pointer h-96 items-center pb-10 pt-10 bg-gray-900 rounded-lg transition duration-300 hover:shadow-lg hover:shadow-gray-600">
          <FaLinkedinIn className="h-20 w-20 text-gray-100 font-bold mb-5 group-hover:text-gray-400 transition duration-300" />

          <h5 className="mb-1 text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
            LinkedIn Profile Optimization
          </h5>

          <p className="text-sm text-center mt-4 text-gray-100 group-hover:text-gray-400 transition duration-300">
            I optimize LinkedIn profiles to highlight your <br />
            professional strengths, creating a compelling <br />
            and visually engaging profile that attracts <br />
            recruiters and clients while boosting your <br />
            online presence.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
