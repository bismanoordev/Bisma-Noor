import React from "react";
import MovieBox from "../assets/MovieBox.png";
import Food from "../assets/Food.png";
import Icoder from "../assets/Icoder.png";
import TextUtils from "../assets/TextUtils.png";
import CarBooking from "../assets/car-booking.png";
import MissRose from "../assets/miss-rose.png";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Service() {
  return (
    <div>
      <h1 className="text-center cursor-pointer text-gray-100 text-5xl font-semibold pt-16 underline decoration-gray-700 decoration-4 underline-offset-4">
        Projects
      </h1>
      <div
        id="portfolio"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-h-screen text-white px-4 sm:px-6 md:px-20 pb-12 pt-12 place-items-center lg:place-items-start"
      >
        {/* Card 1 */}
        <div
          className="w-full max-w-sm border border-cyan-300/25 rounded-xl shadow-sm
                      transition duration-300 transform hover:-translate-y-2 bg-slate-900/60 backdrop-blur-md"
        >
          <div className="group flex h-[24rem] flex-col items-center bg-transparent cursor-pointer rounded-xl transition duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.22)] overflow-hidden">
            <img
              src={MovieBox}
              alt="Movie Box"
              className="w-full h-44 sm:h-48 object-cover rounded-t-lg"
            />
            <div className="flex flex-1 flex-col items-center justify-between px-3 py-4 text-center">
              <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
                Movie Box
              </h5>
              <p className="text-sm sm:text-lg text-gray-100 group-hover:text-gray-400 transition duration-300 max-w-[16rem]">
                Explore the World of Movies Effortlessly.
              </p>
              <div className="flex gap-4 text-xl group-hover:text-gray-400 transition duration-300 ">
                <a
                  href="https://movie-box-1lyj.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 px-4 py-2 border border-white rounded-md hover:bg-gray-400 hover:text-black transition duration-300 font-semibold">
                    Explore
                    <FaExternalLinkAlt className="w-4 h-4 mt-[1px]" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="w-full max-w-sm border border-cyan-300/25 rounded-xl shadow-sm
                      transition duration-300 transform hover:-translate-y-2 bg-slate-900/60 backdrop-blur-md"
        >
          <div className="group flex h-[24rem] flex-col items-center bg-transparent cursor-pointer rounded-xl transition duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.22)] overflow-hidden">
            <img
              src={Food}
              alt="Food"
              className="w-full h-44 sm:h-48 object-cover rounded-t-lg"
            />
            <div className="flex flex-1 flex-col items-center justify-between px-3 py-4 text-center">
              <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
                Bite Into Happiness!
              </h5>
              <p className="text-sm sm:text-lg text-gray-100 group-hover:text-gray-400 transition duration-300 max-w-[16rem]">
                The Fastest Way to Your Favorite Food.
              </p>
              <div className="flex gap-4 text-xl group-hover:text-gray-400 transition duration-300 ">
                <a
                  href="https://text-utils-csij.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 px-4 py-2 border border-white rounded-md hover:bg-gray-400 hover:text-black transition duration-300 font-semibold">
                    Explore
                    <FaExternalLinkAlt className="w-4 h-4 mt-[1px]" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="w-full max-w-sm border border-cyan-300/25 rounded-xl shadow-sm
                      transition duration-300 transform hover:-translate-y-2 bg-slate-900/60 backdrop-blur-md"
        >
          <div className="group flex h-[24rem] flex-col items-center bg-transparent cursor-pointer rounded-xl transition duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.22)] overflow-hidden">
            <img
              src={Icoder}
              alt="Icoder"
              className="w-full h-44 sm:h-48 object-cover rounded-t-lg"
            />
            <div className="flex flex-1 flex-col items-center justify-between px-3 py-4 text-center">
              <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
                Icoder
              </h5>
              <p className="text-sm sm:text-lg text-gray-100 group-hover:text-gray-400 transition duration-300 max-w-[16rem]">
                Build the Future, One Line at a Time.
              </p>
              <div className="flex gap-4 text-xl group-hover:text-gray-400 transition duration-300 ">
                <a
                  href="https://icoder-silk.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 px-4 py-2 border border-white rounded-md hover:bg-gray-400 hover:text-black transition duration-300 font-semibold">
                    Explore
                    <FaExternalLinkAlt className="w-4 h-4 mt-[1px]" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div
          className="w-full max-w-sm border border-cyan-300/25 rounded-xl shadow-sm
                      transition duration-300 transform hover:-translate-y-2 bg-slate-900/60 backdrop-blur-md"
        >
          <div className="group flex h-[24rem] flex-col items-center bg-transparent cursor-pointer rounded-xl transition duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.22)] overflow-hidden">
            <img
              src={TextUtils}
              alt="TextUtils"
              className="w-full h-44 sm:h-48 object-cover rounded-t-lg"
            />
            <div className="flex flex-1 flex-col items-center justify-between px-3 py-4 text-center">
              <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
                TextUtils
              </h5>
              <p className="text-sm sm:text-lg text-gray-100 group-hover:text-gray-400 transition duration-300 max-w-[16rem]">
                Edit, Clean, and Convert Text Effortlessly
              </p>
              <div className="flex gap-4 text-xl group-hover:text-gray-400 transition duration-300 ">
                <a
                  href="https://text-utils-gamma-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 px-4 py-2 border border-white rounded-md hover:bg-gray-400 hover:text-black transition duration-300 font-semibold">
                    Explore
                    <FaExternalLinkAlt className="w-4 h-4 mt-[1px]" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div
          className="w-full max-w-sm border border-cyan-300/25 rounded-xl shadow-sm
                      transition duration-300 transform hover:-translate-y-2 bg-slate-900/60 backdrop-blur-md"
        >
          <div className="group flex h-[24rem] flex-col items-center bg-transparent cursor-pointer rounded-xl transition duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.22)] overflow-hidden">
            <img
              src={CarBooking}
              alt="Car Booking"
              className="w-full h-44 sm:h-48 object-cover rounded-t-lg"
            />
            <div className="flex flex-1 flex-col items-center justify-between px-3 py-4 text-center">
              <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
                Car-booking
              </h5>
              <p className="text-sm sm:text-lg text-gray-100 group-hover:text-gray-400 transition duration-300 max-w-[16rem]">
                Book Your Ride, Drive Your Journey.
              </p>
              <div className="flex gap-4 text-xl group-hover:text-gray-400 transition duration-300 ">
                <a
                  href="https://car-booking-rosy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 px-4 py-2 border border-white rounded-md hover:bg-gray-400 hover:text-black transition duration-300 font-semibold">
                    Explore
                    <FaExternalLinkAlt className="w-4 h-4 mt-[1px]" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div
          className="w-full max-w-sm border border-cyan-300/25 rounded-xl shadow-sm
                      transition duration-300 transform hover:-translate-y-2 bg-slate-900/60 backdrop-blur-md"
        >
          <div className="group flex h-[24rem] flex-col items-center bg-transparent cursor-pointer rounded-xl transition duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.22)] overflow-hidden">
            <img
              src={MissRose}
              alt="Miss Rose"
              className="w-full h-44 sm:h-48 object-cover rounded-t-lg"
            />
            <div className="flex flex-1 flex-col items-center justify-between px-3 py-4 text-center">
              <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
                Miss Rose
              </h5>
              <p className="text-sm sm:text-lg text-gray-100 group-hover:text-gray-400 transition duration-300 max-w-[16rem]">
                Miss Rose is a sleek beauty website.
              </p>
              <div className="flex gap-4 text-xl group-hover:text-gray-400 transition duration-300 ">
                <a
                  href="https://miss-rose.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 px-4 py-2 border border-white rounded-md hover:bg-gray-400 hover:text-black transition duration-300 font-semibold">
                    Explore
                    <FaExternalLinkAlt className="w-4 h-4 mt-[1px]" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
