import { FaFacebook, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import ScrollReveal from './ScrollReveal';

const socials = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/bisma-noor-952092396/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/bismanoordev', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://www.instagram.com/', label: 'Instagram' },
  { icon: FaFacebook, href: 'https://www.facebook.com/', label: 'Facebook' },
];

const links = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(34,211,238,0.1)] py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <ScrollReveal animation="fadeUp" className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <LiaLaptopCodeSolid className="w-7 h-7 text-[var(--accent)]" />
              <span className="font-display font-bold text-white text-xl">
                Bisma<span className="text-[var(--accent)]">.</span>
              </span>
            </div>
            <p className="text-sm text-[var(--muted)] max-w-xs text-center md:text-left">
              Frontend Developer crafting modern, performant, and beautiful web experiences.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest">Navigation</p>
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2">
              {links.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest">Follow</p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-[rgba(34,211,238,0.2)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_0_12px_rgba(34,211,238,0.25)] transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(34,211,238,0.08)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} Bisma Noor. All rights reserved.
          </p>
          <p className="text-xs text-[var(--muted)]">
            Built with <span className="text-[var(--accent)]">Next.js</span> &{' '}
            <span className="text-[var(--accent)]">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
