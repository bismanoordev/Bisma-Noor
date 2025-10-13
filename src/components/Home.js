import React from "react";
import myImage from "../assets/profile.png";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br bg-slate-900  text-white px-8 md:px-10">
      {/* Left Side Content */}
      <div className="flex flex-col space-y-7 md:w-1/2 mt-10 md:mt-0 mx-4 px-16">
        <h4 className="text-gray-300 text-lg font-semibold">Hi, I'm Bisma</h4>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          I'M A <br />
          <span className="text-white">FRONTEND DEVELOPER</span>
        </h1>

        {/* Buttons and Social Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-6">
          <div className="flex flex-wrap gap-4">
            {/* Regular button */}
            <button className="px-6 py-3 border border-white rounded-md hover:bg-gray-400 hover:text-black transition duration-300 font-semibold">
              Hire Me
            </button>

            {/* HashLinks styled like buttons */}
            {/* <HashLink
              smooth
              to="/#about"
              className="px-6 py-3 border border-white rounded-md hover:bg-gray-400 hover:text-black transition duration-300 font-semibold"
            >
              About Me
            </HashLink> */}

          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 text-3xl mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-gray-500 transition" />
            </a>
            <a
              href="https://www.instagram.com/accounts/login/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-gray-500 transition" />
            </a>
            <a
              href="https://github.com/bismanoordev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-500 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center mt-20 md:mt-0">
        <img
          src={myImage}
          alt="Profile"
          className="rounded-b-full mb-4 sm:mb-6 md:mb-3 object-cover w-80 grayscale hover:brightness-50 transition duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
}

