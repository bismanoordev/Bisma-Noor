'use client';

import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import myImage from '@/assets/profile.png';
import ScrollReveal from './ScrollReveal';

const stats = [
  { value: '2+',   label: 'Years Experience' },
  { value: '10+',  label: 'Projects Done'    },
  { value: '5+',   label: 'Technologies'     },
  { value: '100%', label: 'Dedication'       },
];

const techStack = [
  'React.js', 'Next.js', 'Redux Toolkit', 'Shopify',
  'Tailwind CSS', 'Material UI', 'Bootstrap',
  'JavaScript (ES6+)', 'HTML5', 'CSS3',
  'Git', 'GitHub', 'Firebase', 'Supabase', 'Replit',
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 !border-t-0">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Editorial header — eyebrow + big statement ── */}
        <div className="mb-16 lg:mb-20">
          <ScrollReveal animation="fadeUp">
            <div className="flex items-center gap-4 mb-6">
              <span className="badge">About Me</span>
              <span className="flex-1 h-px bg-[var(--line)]" />
              <HiOutlineSparkles className="text-[var(--accent)]" size={16} />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={120}>
            <h2
              className="font-black text-white max-w-4xl"
              style={{
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.12,
                fontFamily: 'var(--font-space)',
              }}
            >
              A <span className="gradient-text">passionate developer</span> who loves
              turning ideas into{' '}
              <span className="gradient-text">elegant digital experiences</span>
              <span className="text-[var(--accent)]">.</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* ── Two-column editorial body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-14 items-start">

          {/* LEFT — photo */}
          <ScrollReveal animation="fadeLeft" delay={100}>
            <div className="flex justify-center lg:block lg:sticky lg:top-28">
              <div className="relative animate-float w-72 sm:w-80 lg:w-full">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[rgba(34,211,238,0.12)] to-[rgba(59,130,246,0.12)] blur-xl" />
                <div className="relative w-full h-80 sm:h-96 lg:h-[440px] rounded-2xl overflow-hidden border border-[rgba(34,211,238,0.2)] shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-[rgba(13,21,38,0.5)]">
                  <Image
                    src={myImage}
                    alt="Bisma Noor"
                    fill
                    className="object-contain object-top hover:grayscale-0 transition duration-500 cursor-pointer hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl border-2 border-[var(--accent)] opacity-30" />
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-lg border-2 border-[var(--accent-2)] opacity-30" />
                {/* Role tag under photo — editorial touch */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 badge text-[10px] whitespace-nowrap bg-[var(--bg)]">
                  Web Developer <HiOutlineSparkles size={11} />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — story */}
          <div className="flex flex-col gap-10">

            <ScrollReveal animation="fadeRight" delay={150}>
              <div>
                <p className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.25em] text-[var(--muted)] uppercase mb-3">
                  <HiOutlineSparkles size={13} className="text-[var(--accent)]" /> Who I Am
                </p>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                  Web Developer &{' '}
                  <span className="gradient-text">UI Artisan</span>
                </h3>
                <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
                  I&apos;m <span className="text-white font-semibold">Bisma Noor</span>, a Web Developer skilled in
                  React.js, Next.js, and Tailwind CSS, with experience building responsive and SEO-friendly web applications.
                  Strong focus on clean UI/UX, performance optimization, and modern web development practices.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeRight" delay={220}>
              <div className="pl-5 border-l-2 border-[rgba(34,211,238,0.3)]">
                <p className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.25em] text-[var(--muted)] uppercase mb-3">
                  <HiOutlineSparkles size={13} className="text-[var(--accent)]" /> My Journey
                </p>
                <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
                  Currently pursuing a <span className="text-white">BS in Computer Science</span> from the Virtual University of Pakistan,
                  while also completing a Web Development Certification from <span className="text-white">Saylani Mass I.T Training (SMIT)</span>,
                  and have completed <span className="text-white">C++ Essentials 1</span> from Cisco Networking Academy.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeRight" delay={290}>
              <div>
                <p className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.25em] text-[var(--muted)] uppercase mb-3">
                  <HiOutlineSparkles size={13} className="text-[var(--accent)]" /> Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium border border-[rgba(34,211,238,0.2)] bg-[rgba(34,211,238,0.05)] text-[var(--accent)] hover:border-[rgba(34,211,238,0.5)] hover:bg-[rgba(34,211,238,0.1)] transition-all cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeRight" delay={360}>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/bisma-noor-952092396/" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs sm:text-sm tracking-[0.08em] uppercase">
                  [ Hire Me ]
                </a>
                <a href="/resume.pdf" download className="btn-outline text-xs sm:text-sm tracking-[0.08em] uppercase">
                  <FaDownload size={11} />
                  [ Download CV ]
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Stats strip — editorial divider style ── */}
        <ScrollReveal animation="fadeUp" delay={100}>
          <div className="mt-20 pt-10 border-t border-[var(--line)] grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }, i) => (
              <div key={label} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--muted)] uppercase mb-1">
                  0{i + 1}
                </span>
                <p className="text-3xl sm:text-4xl font-display font-black gradient-text">{value}</p>
                <p className="text-xs text-[var(--muted)] mt-1 font-medium uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
