import React from "react";
import MovieBox from "../assets/MovieBox.png";
import Food from "../assets/Food.png";
import Icoder from "../assets/Icoder.png";
import TextUtils from "../assets/TextUtils.png";
import CarBooking from "../assets/car-booking.png";
import MissRose from "../assets/miss-rose.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Movie Box",
    desc: "Explore the World of Movies Effortlessly.",
    img: MovieBox,
    link: "https://movie-box-1lyj.vercel.app/",
  },
  {
    title: "Bite Into Happiness!",
    desc: "The Fastest Way to Your Favorite Food.",
    img: Food,
    link: "https://text-utils-csij.vercel.app/",
  },
  {
    title: "Icoder",
    desc: "Build the Future, One Line at a Time.",
    img: Icoder,
    link: "https://icoder-silk.vercel.app/",
  },
  {
    title: "TextUtils",
    desc: "Edit, Clean, and Convert Text Effortlessly",
    img: TextUtils,
    link: "https://text-utils-gamma-five.vercel.app/",
  },
  {
    title: "Car-booking",
    desc: "Book Your Ride, Drive Your Journey.",
    img: CarBooking,
    link: "https://car-booking-rosy.vercel.app/",
  },
  {
    title: "Miss Rose",
    desc: "Miss Rose is a sleek beauty website.",
    img: MissRose,
    link: "https://miss-rose.vercel.app/",
  },
];

export default function Service() {
  return (
    <div>
      <h1 className="text-center text-gray-100 text-3xl sm:text-4xl md:text-5xl font-semibold pt-12 sm:pt-16 underline decoration-gray-700 decoration-4 underline-offset-4">
        Projects
      </h1>

      <div
        id="portfolio"
        className="
        grid grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-5 sm:gap-7 
        text-white 
        px-4 sm:px-6 md:px-12 lg:px-20 
        py-10 sm:py-12
      "
      >
        {projects.map((item) => (
          <div
            key={item.title}
            className="w-full max-w-sm mx-auto border border-cyan-300/25 rounded-xl shadow-sm
            transition duration-300 transform hover:-translate-y-2 
            bg-slate-900/60 backdrop-blur-md"
          >
            <div className="group flex flex-col h-full min-h-[22rem] sm:min-h-[24rem] rounded-xl overflow-hidden hover:shadow-[0_0_24px_rgba(34,211,238,0.22)] transition duration-300">
              
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 sm:h-44 md:h-48 object-cover"
              />

              <div className="flex flex-1 flex-col items-center justify-between px-3 py-4 text-center">
                
                <h5 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 group-hover:text-gray-400 transition duration-300">
                  {item.title}
                </h5>

                <p className="text-xs sm:text-sm md:text-base text-gray-100 group-hover:text-gray-400 transition duration-300 max-w-[16rem]">
                  {item.desc}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 px-4 py-2 border border-white rounded-md hover:bg-gray-400 hover:text-black transition duration-300 text-sm font-semibold">
                    Explore
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </button>
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}