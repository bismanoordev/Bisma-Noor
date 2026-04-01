import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-6">
      <div className="mx-auto w-full max-w-7xl px-6 py-5 rounded-xl border border-cyan-300/20 bg-slate-950/45 backdrop-blur-md md:flex md:items-center md:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-100">
            © 2026 Portfolio. All Rights Reserved.
          </h3>
          <p className="mt-1 text-xs text-gray-300">
            Crafted with modern frontend design and clean user experience.
          </p>
        </div>

        <div className="mt-5 flex items-center gap-2 md:mt-0">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-300/30 p-2 text-gray-200 transition hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(34,211,238,0.55)]"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-300/30 p-2 text-gray-200 transition hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(34,211,238,0.55)]"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/bismanoordev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-300/30 p-2 text-gray-200 transition hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(34,211,238,0.55)]"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-300/30 p-2 text-gray-200 transition hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(34,211,238,0.55)]"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
