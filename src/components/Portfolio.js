import React from "react";
import MovieBox from "../assets/MovieBox.png";
import Food from "../assets/Food.png";
import Icoder from "../assets/Icoder.png";
import TextUtils from "../assets/TextUtils.png";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Service() {
  return (
    <div className="bg-slate-900 ">
      <h1 className="text-center cursor-pointer text-gray-100 text-5xl font-semibold pt-6 underline decoration-gray-700 decoration-4 underline-offset-4">
        Portifolio
      </h1>
      <div
        id="portfolio"
        className="flex flex-wrap  md:flex-wrap items-center justify-center min-h-screen bg-gradient-to-br bg-slate-900  text-white px-8 md:px-20"
      >
        {/* Card 1 */}
        <div
          className="w-full max-w-sm border border-gray-400 rounded-lg shadow-sm mt-20 mx-5 my-10 bg-black
                      hover:shadow-gray-500 hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
        >
          <div className="group flex flex-col h-96 items-center pb-10 bg-gray-900 cursor-pointer rounded-lg transition duration-300 hover:shadow-lg hover:shadow-gray-600">
            <img
              src={MovieBox}
              alt="Movie Box"
              className=" object-contain rounded-t-lg"
            />
            <h5 className="mb-2 mt-2 text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
              Movie Box
            </h5>
            <p className="mb-1 text-2xl text-center text-gray-100 group-hover:text-gray-400 transition duration-300">
              Explore the World of Movies Effortlessly.
            </p>
            <div className="flex gap-4 text-xl group-hover:text-gray-400 transition duration-300 ">
              <a
                href="https://movie-box-1lyj.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="flex items-center gap-2 px-4 py-2 mt-5 border border-white rounded-md hover:bg-gray-400 hover:text-black transition duration-300 font-semibold">
                Explore
                <FaExternalLinkAlt className="w-4 h-4 mt-[1px]" />
              </button>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="w-full max-w-sm border border-gray-400 rounded-lg shadow-sm mt-20 mx-5 my-10
                      hover:shadow-gray-500 hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
        >
          <div className="group flex flex-col h-96 items-center pb-10 bg-gray-900 cursor-pointer rounded-lg transition duration-300 hover:shadow-lg hover:shadow-gray-600">
            <img
              src={Food}
              alt="Food"
              className=" object-contain rounded-t-lg"
            />
            <h5 className="mb-1 text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
              Bite Into Happiness!
            </h5>
            <p className="mb-2 mt-2 text-2xl text-center text-gray-100 group-hover:text-gray-400 transition duration-300">
              The Fastest Way to Your Favorite Food.
            </p>
            <div className="flex gap-4 text-xl group-hover:text-gray-400 transition duration-300 ">
                 <a
                href="https://text-utils-csij.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="flex items-center gap-2 px-4 py-2 mt-5 border border-white rounded-md hover:bg-gray-400 hover:text-black transition duration-300 font-semibold">
                Explore
                <FaExternalLinkAlt className="w-4 h-4 mt-[1px]" />
              </button>
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="w-full max-w-sm border border-gray-400 rounded-lg shadow-sm mt-20 mx-5 my-10
                      hover:shadow-gray-500 hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
        >
          <div className="group flex flex-col h-96 items-center pb-10 bg-gray-900 cursor-pointer rounded-lg transition duration-300 hover:shadow-lg hover:shadow-gray-600">
            <img
              src={Icoder}
              alt="Icoder"
              className=" object-contain rounded-t-lg"
            />
            <h5 className="mb-2 mt-2 text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
              Icoder
            </h5>
            <p className="mb-1 text-2xl text-center text-gray-100 group-hover:text-gray-400 transition duration-300">
              Build the Future, One Line at a Time.
            </p>
            <div className="flex gap-4 text-xl group-hover:text-gray-400 transition duration-300 ">
                 <a
                href="https://icoder-silk.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="flex items-center gap-2 px-4 py-2 mt-5 border border-white rounded-md hover:bg-gray-400 hover:text-black transition duration-300 font-semibold">
                Explore
                <FaExternalLinkAlt className="w-4 h-4 mt-[1px]" />
              </button>
              </a>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div
          className="w-full max-w-sm border border-gray-400 rounded-lg shadow-sm mt-20 mx-5 my-10
                      hover:shadow-gray-500 hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
        >
          <div className="group flex flex-col h-96 items-center pb-10 bg-gray-900 cursor-pointer rounded-lg transition duration-300 hover:shadow-lg hover:shadow-gray-600">
            <img
              src={TextUtils}
              alt="TextUtils"
              className=" object-contain rounded-t-lg"
            />
            <h5 className="mb-2 mt-2 text-3xl text-center font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
              TextUtils
            </h5>
            <p className="mb-1 text-2xl text-center text-gray-100 group-hover:text-gray-400 transition duration-300">
              Edit, Clean, and Convert Text Effortlessly
            </p>
            <div className="flex gap-4 text-xl group-hover:text-gray-400 transition duration-300 ">
                <a
                href="https://text-utils-gamma-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="flex items-center gap-2 px-4 py-2 mt-5 border border-white rounded-md hover:bg-gray-400 hover:text-black transition duration-300 font-semibold">
                Explore
                <FaExternalLinkAlt className="w-4 h-4 mt-[1px]" />
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
