import React from "react";
import myImage from "../assets/profile.png";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="bg-slate-800 ">
        <h1 className="text-center cursor-pointer text-gray-100 text-5xl font-semibold pt-6 underline decoration-gray-600 decoration-4 underline-offset-4">
          About me
        </h1>
        <div
          id="about"
          className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br bg-slate-800  text-white px-8 md:px-20"
        >
          <div className="md:w-1/2 flex justify-center mt-20 md:mt-0 ">
            <img
              src={myImage}
              alt="Profile"
              className="rounded-b-full object-cover w-80 grayscale hover:brightness-50 transition duration-300 cursor-pointer"
            />
          </div>
          <div className="flex flex-col space-y-7 md:w-1/2 mt-10 md:mt-0 ">
            <h2 className=" text- md:text-6xl leading-tight">Hi, I'm Bisma</h2>
            <h4 className="text-gray-300 text-lg font-semibold">
              <p>
                I am a{" "}
                <span className="font-semibold text-white">
                  Frontend Developer
                </span>
                . I have a very good understanding of
                <span className="font-semibold text-[#00ACC1]">
                  {" "}
                  Tailwind CSS{" "}
                </span>
                and{" "}
                <span className="font-semibold text-[#6C19FF]">Bootstrap</span>,
                and I’ve created many websites using them in a professional way.
                I also have strong knowledge of
                <span className="font-semibold text-[#00D8FF]"> React.js</span>
                .
                <br />
                <br />
                <p>
                  Email :{" "}
                  <span className="mx-4">bismanoordeveloper@gmail.com</span>
                </p>
                <br />
                <p>
                  From : <span className="mx-4">Faisalabad, Pakistan</span>
                </p>
                <br />
                <p>
                  Language : <span className="mx-4">English,Urdu,Punjabi</span>
                </p>
              </p>
            </h4>

            <div className="flex gap-4 text-3xl ">
              <button className="w-fit mb-4 sm:mb-6 md:mb-3 px-6 py-3 border border-white rounded-md hover:bg-gray-400 hover:text-black transition duration-300 font-semibold">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
