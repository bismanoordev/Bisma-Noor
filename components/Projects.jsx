import Image from 'next/image';
import { FaGithub, FaArrowRight, FaArrowUp } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import ScrollReveal from './ScrollReveal';
import SterlingHale from '@/assets/sterling-hale.png';
import Food from '@/assets/Food.png';
import Icoder from '@/assets/Icoder.png';
import Rivera from '@/assets/rivera.png';
import CarBooking from '@/assets/car-booking.png';
import MissRose from '@/assets/miss-rose.png';

const projects = [
  {
    title: 'Sterling & Hale Law',
    desc: 'A professional law firm website with elegant dark theme, smooth animations, and compelling call-to-action sections.',
    img: SterlingHale,
    link: 'https://sterling-hale-law-obsd.vercel.app/',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    featured: true,
  },
  {
    title: 'Bite Into Happiness',
    desc: 'The Fastest Way to Your Favorite Food. A sleek food delivery interface built for speed and satisfaction.',
    img: Food,
    link: 'https://text-utils-csij.vercel.app/',
    tags: ['React', 'Tailwind', 'Firebase'],
  },
  {
    title: 'Icoder',
    desc: 'Build the Future, One Line at a Time. An online code editor with live preview and syntax highlighting.',
    img: Icoder,
    link: 'https://icoder-silk.vercel.app/',
    tags: ['React', 'Monaco', 'CSS'],
  },
  {
    title: 'Rivera Injury Law',
    desc: 'We Take On the Insurance Company, So You Don\'t Have To. A personal injury law firm site with clear practice areas and a conversion-focused case intake flow.',
    img: Rivera,
    link: 'https://rivera-injury-law.vercel.app/',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Car Booking',
    desc: 'Book Your Ride, Drive Your Journey. A modern car rental platform with smooth booking flow.',
    img: CarBooking,
    link: 'https://car-booking-rosy.vercel.app/',
    tags: ['Next.js', 'Tailwind', 'Supabase'],
  },
  {
    title: 'Miss Rose',
    desc: 'A sleek beauty e-commerce website with elegant product showcase and smooth shopping experience.',
    img: MissRose,
    link: 'https://miss-rose.vercel.app/',
    tags: ['React', 'Shopify', 'CSS'],
  },
];

// Theme-tinted gradients for the card art area (all from the portfolio palette)
const tints = [
  'linear-gradient(160deg, rgba(34,211,238,0.22) 0%, rgba(13,21,38,0.95) 70%)',
  'linear-gradient(160deg, rgba(59,130,246,0.25) 0%, rgba(13,21,38,0.95) 70%)',
  'linear-gradient(160deg, rgba(167,139,250,0.20) 0%, rgba(13,21,38,0.95) 70%)',
  'linear-gradient(160deg, rgba(52,211,153,0.16) 0%, rgba(13,21,38,0.95) 70%)',
  'linear-gradient(160deg, rgba(59,130,246,0.22) 0%, rgba(13,21,38,0.95) 70%)',
  'linear-gradient(160deg, rgba(34,211,238,0.18) 0%, rgba(13,21,38,0.95) 70%)',
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 !border-t-0">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Editorial header ── */}
        <div className="mb-16 lg:mb-20">
          <ScrollReveal animation="fadeUp">
            <div className="flex items-center gap-4 mb-6">
              <span className="badge">Portfolio</span>
              <span className="flex-1 h-px bg-[var(--line)]" />
              <HiOutlineSparkles className="text-[var(--accent)]" size={16} />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={120}>
            <h2
              className="font-black text-white"
              style={{
                fontSize: 'clamp(1.9rem, 4.5vw, 3.6rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.12,
                fontFamily: 'var(--font-space)',
              }}
            >
              Recent <span className="gradient-text">Projects</span>
              <span className="text-[var(--accent)]">.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={200}>
            <p className="text-[var(--muted)] mt-4 max-w-xl text-sm sm:text-base">
              A selection of projects showcasing my skills in design, development, and problem solving.
            </p>
          </ScrollReveal>
        </div>

        {/* ── Project cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} animation="fadeUp" delay={(i % 3) * 120}>
              <div className="group glow-card rounded-2xl overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-all duration-300">

                {/* ── Art area — gradient + concentric circles + centered tile ── */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-64 overflow-hidden"
                  style={{ background: tints[i % tints.length] }}
                >
                  {/* Full-size project image */}
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Featured badge */}
                  {project.featured && (
                    <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] bg-[var(--accent)] text-[#04252b]">
                      ⭐ Featured
                    </span>
                  )}

                  {/* Corner arrow button */}
                  <span className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-[#04252b]">
                    <FaArrowUp size={11} className="rotate-45" />
                  </span>

                  {/* Bottom fade into card body */}
                  <span className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[rgba(6,11,20,0.5)] to-transparent pointer-events-none" />
                </a>

                {/* ── Content ── */}
                <div className="p-6 flex flex-col gap-2.5 flex-1">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-[var(--accent)] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">{project.desc}</p>

                  {/* Meta row — tech · tech  +  View → */}
                  <div className="flex items-center justify-between gap-3 mt-3 pt-3.5 border-t border-[rgba(34,211,238,0.1)]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)] truncate">
                      {project.tags.join(' · ')}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[var(--accent)] hover:gap-3 transition-all duration-200 flex-shrink-0"
                    >
                      View <FaArrowRight size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── GitHub CTA ── */}
        <ScrollReveal animation="fadeUp" delay={100}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/bismanoordev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.08em] uppercase"
            >
              <FaGithub size={15} />
              [ View All on GitHub ]
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
