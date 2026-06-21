import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import MovieBox from '@/assets/MovieBox.png';
import Food from '@/assets/Food.png';
import Icoder from '@/assets/Icoder.png';
import TextUtils from '@/assets/TextUtils.png';
import CarBooking from '@/assets/car-booking.png';
import MissRose from '@/assets/miss-rose.png';

const projects = [
  {
    title: 'Movie Box',
    desc: 'Explore the World of Movies Effortlessly. Browse, search, and discover your favorite films with a clean, modern UI.',
    img: MovieBox,
    link: 'https://movie-box-1lyj.vercel.app/',
    tags: ['React', 'API', 'Tailwind'],
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
    title: 'TextUtils',
    desc: 'Edit, Clean, and Convert Text Effortlessly. A utility app for text transformation with multiple powerful tools.',
    img: TextUtils,
    link: 'https://text-utils-gamma-five.vercel.app/',
    tags: ['React', 'Bootstrap'],
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

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <ScrollReveal animation="fadeUp" className="flex flex-col items-center text-center mb-16">
          <span className="badge mb-4">Portfolio</span>
          <h2 className="section-heading text-white">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--muted)] mt-4 max-w-xl text-sm sm:text-base">
            A selection of projects showcasing my skills in design, development, and problem solving.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} animation="fadeUp" delay={i * 100}>
            <div
              className="group glow-card rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-300 h-full"
            >
              {/* Image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[rgba(6,11,20,0.7)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                  <a
                    href="https://github.com/bismanoordev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200"
                    title="GitHub"
                  >
                    <FaGithub size={14} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-display font-bold text-white group-hover:text-[var(--accent)] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">{project.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/5 text-[var(--muted)] border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-[var(--accent)] mt-2 hover:gap-3 transition-all duration-200"
                >
                  View Project <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* GitHub CTA */}
        <ScrollReveal animation="fadeUp" delay={100}>
        <div className="mt-12 text-center">
          <a
            href="https://github.com/bismanoordev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FaGithub size={16} />
            View All on GitHub
          </a>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
