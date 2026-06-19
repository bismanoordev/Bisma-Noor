'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { FaDownload } from 'react-icons/fa';
import myImage from '@/src/assets/profile.png';

const roles = [
  'Frontend Developer',
  'React.js Developer',
  'Next.js Developer',
  'UI/UX Enthusiast',
];

function useTyping(words, speed = 90, delSpeed = 50, pause = 2200) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx % words.length];
    const t = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setIdx((i) => i + 1);
          }
        }
      },
      deleting ? delSpeed : speed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, idx, words, speed, delSpeed, pause]);

  return text;
}

const socials = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/bisma-noor-952092396/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/bismanoordev', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://www.instagram.com/', label: 'Instagram' },
  { icon: FaFacebook, href: 'https://www.facebook.com/', label: 'Facebook' },
];

export default function Hero() {
  const typed = useTyping(roles);

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[rgba(34,211,238,0.06)] blur-[100px]" />
        <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[rgba(59,130,246,0.07)] blur-[100px]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── Left ── */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <span className="badge">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              Available for work
            </span>

            <h1 className="section-heading text-white">
              Hi, I&apos;m{' '}
              <span className="gradient-text">Bisma Noor</span>
            </h1>

            {/* Typing role */}
            <p className="text-xl sm:text-2xl font-display font-semibold text-[var(--muted)] min-h-[2rem]">
              <span className="text-white">{typed}</span>
              <span className="inline-block w-0.5 h-6 bg-[var(--accent)] ml-1 animate-blink" />
            </p>

            <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed max-w-xl">
              Frontend Developer skilled in React.js, Next.js, and Tailwind CSS — building responsive,
              SEO-friendly web apps with clean UI/UX and performance optimization.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-1.5">
                <span className="text-[var(--accent)]">📍</span> Faisalabad, Punjab, Pakistan
              </span>
              <a href="mailto:bismanoordeveloper@gmail.com" className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors">
                <span className="text-[var(--accent)]">✉</span> bismanoordeveloper@gmail.com
              </a>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <a
                href="https://www.linkedin.com/in/bisma-noor-952092396/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Hire Me
              </a>
              <a href="/resume.pdf" download="Bisma Noor - Frontend Developer.pdf" className="btn-outline">
                <FaDownload size={13} />
                Download CV
              </a>
              <a href="#projects" className="btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs text-[var(--muted)] font-medium tracking-widest uppercase">
                Follow
              </span>
              <span className="flex-1 h-px bg-[var(--line)] max-w-[40px]" />
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-[rgba(34,211,238,0.2)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right (profile image) ── */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative animate-float">

              {/* Outer soft glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[rgba(34,211,238,0.15)] to-[rgba(59,130,246,0.15)] blur-3xl animate-pulse-glow" />

              {/* Outermost thin ring */}
              <div className="absolute -inset-5 rounded-full border border-[rgba(34,211,238,0.08)]" />

              {/* Spinning dashed ring */}
              <div className="absolute -inset-3 rounded-full border border-dashed border-[rgba(34,211,238,0.25)] animate-spin-slow" />

              {/* Solid accent ring */}
              <div className="absolute -inset-1 rounded-full border border-[rgba(34,211,238,0.35)]" />

              {/* Image circle — tall enough to show full face + hijab */}
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[26rem] rounded-full overflow-hidden
                border-2 border-[rgba(34,211,238,0.3)]
                bg-gradient-to-b from-[rgba(34,211,238,0.05)] to-[rgba(6,11,20,0.8)]
                shadow-[0_0_60px_rgba(34,211,238,0.12),0_20px_60px_rgba(0,0,0,0.6)]">
                <Image
                  src={myImage}
                  alt="Bisma Noor"
                  fill
                  className="object-contain object-top hover:scale-105 transition-transform duration-700 cursor-pointer"
                  priority
                />
                {/* Bottom fade so image blends into background */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#060b14]/80 to-transparent pointer-events-none" />
              </div>

              {/* Floating badge — Projects */}
              <div className="absolute -bottom-3 -right-6 bg-[rgba(13,21,38,0.95)] border border-[rgba(34,211,238,0.3)] rounded-2xl px-4 py-2.5 shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-md">
                <p className="text-[10px] font-medium text-[var(--muted)] uppercase tracking-wider">Projects</p>
                <p className="text-xl font-bold gradient-text leading-tight">10+</p>
              </div>

              {/* Floating badge — Experience */}
              <div className="absolute -top-3 -left-6 bg-[rgba(13,21,38,0.95)] border border-[rgba(34,211,238,0.3)] rounded-2xl px-4 py-2.5 shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-md">
                <p className="text-[10px] font-medium text-[var(--muted)] uppercase tracking-wider">Experience</p>
                <p className="text-xl font-bold gradient-text leading-tight">2+ yrs</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200 group"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <HiArrowDown className="w-4 h-4 animate-bounce group-hover:text-[var(--accent)]" />
      </button>
    </section>
  );
}
