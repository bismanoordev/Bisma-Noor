'use client';

import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';
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
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <ScrollReveal animation="fadeUp" className="flex flex-col items-center text-center mb-16">
          <span className="badge mb-4">About Me</span>
          <h2 className="section-heading text-white">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="text-[var(--muted)] mt-4 max-w-xl text-sm sm:text-base">
            A passionate developer who loves turning ideas into elegant digital experiences.
          </p>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image */}
          <ScrollReveal animation="fadeLeft" delay={100}>
            <div className="flex-shrink-0 flex justify-center">
              <div className="relative animate-float">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[rgba(34,211,238,0.12)] to-[rgba(59,130,246,0.12)] blur-xl" />
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[26rem] rounded-2xl overflow-hidden border border-[rgba(34,211,238,0.2)] shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-[rgba(13,21,38,0.5)]">
                  <Image
                    src={myImage}
                    alt="Bisma Noor"
                    fill
                    className="object-contain object-top hover:grayscale-0 transition duration-500 cursor-pointer hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl border-2 border-[var(--accent)] opacity-30" />
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-lg border-2 border-[var(--accent-2)] opacity-30" />
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal animation="fadeRight" delay={150} className="flex-1 flex flex-col gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Web Developer &{' '}
                <span className="gradient-text">UI Artisan</span>
              </h3>
              <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
                I&apos;m <span className="text-white font-semibold">Bisma Noor</span>, a Web Developer skilled in
                React.js, Next.js, and Tailwind CSS, with experience building responsive and SEO-friendly web applications.
                Strong focus on clean UI/UX, performance optimization, and modern web development practices.
              </p>
              <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed mt-4">
                Currently pursuing a <span className="text-white">BS in Computer Science</span> from the Virtual University of Pakistan,
                while also completing a Web Development Certification from <span className="text-white">Saylani Mass I.T Training (SMIT)</span>,
                and have completed <span className="text-white">C++ Essentials 1</span> from Cisco Networking Academy.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-medium border border-[rgba(34,211,238,0.2)] bg-[rgba(34,211,238,0.05)] text-[var(--accent)] hover:border-[rgba(34,211,238,0.5)] hover:bg-[rgba(34,211,238,0.1)] transition-all cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/bisma-noor-952092396/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Hire Me
              </a>
              <a href="/resume.pdf" download className="btn-outline">
                <FaDownload size={13} />
                Download CV
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ value, label }, i) => (
            <ScrollReveal key={label} animation="scale" delay={i * 80}>
              <div className="glow-card rounded-2xl p-6 text-center">
                <p className="text-3xl font-display font-bold gradient-text">{value}</p>
                <p className="text-xs text-[var(--muted)] mt-1 font-medium">{label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
