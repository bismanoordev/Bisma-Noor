'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { FaLaptop, FaCode, FaRocket, FaSearch, FaCheck, FaEnvelope } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: FaLaptop,
    title: 'Custom Websites',
    desc: 'I build pixel-perfect, responsive websites with smooth animations and engaging user experiences tailored to your brand.',
    tags: ['React', 'Next.js', 'Tailwind'],
    color: '#22d3ee',
    rgb: '34,211,238',
    tagline: 'Responsive, SEO-ready websites built with React & Next.js',
    intro:
      'Your website is often the first impression of your business. I design and develop custom websites with React, Next.js and Tailwind CSS that load fast, look great on every device and are SEO-ready from day one — so visitors stay longer and turn into customers.',
    includes: [
      { title: 'Responsive, mobile-first design', text: 'Pixel-perfect layouts that adapt to phones, tablets and desktops.' },
      { title: 'Smooth animations', text: 'Subtle scroll and hover effects that feel polished, not distracting.' },
      { title: 'On-page SEO setup', text: 'Meta tags, Open Graph previews, semantic HTML and clean URLs.' },
      { title: 'Contact forms & integrations', text: 'Working email forms, social links, maps and analytics.' },
      { title: 'Launch on Vercel', text: 'Deployed with HTTPS and your custom domain connected.' },
    ],
    idealFor: ['Small businesses', 'Law firms & agencies', 'Personal brands', 'Landing pages'],
  },
  {
    icon: FaCode,
    title: 'Web Applications',
    desc: 'Full-stack web apps using modern technologies like MERN Stack, Next.js, Firebase and Supabase with clean, scalable architecture.',
    tags: ['Full-Stack', 'API', 'Database'],
    color: '#3b82f6',
    rgb: '59,130,246',
    featured: true,
    tagline: 'Full-stack web apps with Next.js, Firebase & Supabase',
    intro:
      'Need more than a brochure site? I build full-stack web applications — booking systems, dashboards and SaaS products — with Next.js, React, Firebase, Supabase and MongoDB. Clean architecture keeps your app secure, scalable and easy to extend as your business grows.',
    includes: [
      { title: 'User authentication', text: 'Sign-up, login and role-based protected routes.' },
      { title: 'Database design', text: 'Structured data with Firebase, Supabase or MongoDB.' },
      { title: 'REST API integration', text: 'Connect payments, maps, email and third-party services.' },
      { title: 'State management', text: 'Predictable, fast UI with Redux Toolkit.' },
      { title: 'Dashboards & CRUD', text: 'Admin panels, bookings and real-time data views.' },
    ],
    idealFor: ['Startups & MVPs', 'SaaS products', 'Booking platforms', 'Internal tools'],
  },
  {
    icon: FaRocket,
    title: 'Vibe Coding',
    desc: 'Rapid prototyping and vibe coding sessions to build clean, modern, and scalable solutions with optimized performance.',
    tags: ['Replit', 'Shopify', 'CMS'],
    color: '#a78bfa',
    rgb: '167,139,250',
    tagline: 'AI-assisted rapid prototyping — from idea to MVP',
    intro:
      'Have an idea you want to test quickly? Using AI-assisted development with Claude, Cursor and v0, I turn concepts into working prototypes and MVPs fast — then review and refine the code by hand so it is clean, maintainable and ready for real users.',
    includes: [
      { title: 'MVPs & proof of concepts', text: 'Validate your idea with a working product, quickly.' },
      { title: 'AI-assisted development', text: 'Claude, Cursor, v0 and Copilot to speed up every step.' },
      { title: 'Shopify store setup', text: 'Themes, product pages and a smooth checkout experience.' },
      { title: 'WordPress & CMS sites', text: 'Content you can edit yourself — no code needed.' },
      { title: 'Production-ready code', text: 'Every line reviewed, cleaned up and documented.' },
    ],
    idealFor: ['Founders testing ideas', 'E-commerce stores', 'Demos & pitches', 'Content websites'],
  },
  {
    icon: FaSearch,
    title: 'SEO & Performance',
    desc: 'Boost your website visibility and speed with technical SEO, Core Web Vitals optimization, and best-in-class performance tuning.',
    tags: ['SEO', 'Core Web Vitals', 'Speed'],
    color: '#34d399',
    rgb: '52,211,153',
    tagline: 'Technical SEO & Core Web Vitals optimization',
    intro:
      'A slow website loses visitors and rankings. I audit and optimize your site’s technical SEO and Core Web Vitals — LCP, CLS and INP — so pages load faster, rank higher on Google and give every visitor a smoother experience.',
    includes: [
      { title: 'Technical SEO audit', text: 'Find crawl errors, broken links and indexing issues.' },
      { title: 'Meta tags & structured data', text: 'Titles, descriptions and JSON-LD schema for rich results.' },
      { title: 'Core Web Vitals', text: 'Improve LCP, CLS and INP for a better Google page experience.' },
      { title: 'Image & font optimization', text: 'Modern formats, lazy loading and smaller bundles.' },
      { title: 'Lighthouse report', text: 'Clear before/after scores so you can see the impact.' },
    ],
    idealFor: ['Slow websites', 'New site launches', 'Online stores', 'Local businesses'],
  },
];

// Structured data so search engines understand the services offered
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Web Development Services by Bisma Noor',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.intro,
      serviceType: s.tagline,
      provider: { '@type': 'Person', name: 'Bisma Noor', jobTitle: 'Web Developer' },
      areaServed: 'Worldwide',
    },
  })),
};

const eyebrow = 'text-[10px] font-bold tracking-[0.25em] uppercase mb-4';

// Always rendered (hidden with CSS) so the details stay in the page HTML for search engines
function ServiceModal({ service, index, open, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    if (panelRef.current) panelRef.current.scrollTop = 0;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const { icon: Icon, title, tagline, intro, includes, idealFor, tags, color, rgb } = service;

  const goToContact = () => {
    onClose();
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      aria-labelledby={`service-title-${index}`}
    >
      <div className="absolute inset-0 bg-[#060b14]/80 backdrop-blur-md" onClick={onClose} />

      <article
        ref={panelRef}
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden modal-scroll rounded-3xl bg-[#0d1526]
          shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-all duration-300 ${
          open ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
        style={{
          border: `1px solid rgba(${rgb}, 0.3)`,
          '--scroll-thumb': `rgba(${rgb}, 0.35)`,
          '--scroll-thumb-hover': color,
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center text-[var(--muted)] hover:text-white bg-white/5 hover:bg-white/10 transition"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        {/* ── Header ── */}
        <header
          className="relative overflow-hidden px-7 sm:px-9 pt-9 pb-8 border-b"
          style={{
            background: `linear-gradient(160deg, rgba(${rgb}, 0.16) 0%, rgba(13,21,38,0) 70%)`,
            borderColor: `rgba(${rgb}, 0.15)`,
          }}
        >
          <div
            className="pointer-events-none absolute -top-24 -right-16 w-72 h-72 rounded-full blur-[110px]"
            style={{ background: color, opacity: 0.18 }}
          />

          <div className="relative flex items-center gap-4 mb-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `rgba(${rgb}, 0.12)`,
                border: `1px solid rgba(${rgb}, 0.3)`,
                boxShadow: `0 0 24px rgba(${rgb}, 0.2)`,
              }}
            >
              <Icon className="w-6 h-6" style={{ color }} />
            </div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color }}>
              Service 0{index + 1}
            </span>
          </div>

          <h3
            id={`service-title-${index}`}
            className="relative font-display font-black text-white pr-8"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            {title}
          </h3>
          <p className="relative mt-2 text-sm sm:text-base font-medium text-[var(--text)] opacity-90">{tagline}</p>
        </header>

        {/* ── Body ── */}
        <div className="px-7 sm:px-9 py-8 flex flex-col gap-9">
          <p className="text-sm sm:text-[15px] text-[var(--muted)] leading-relaxed">{intro}</p>

          <section className="!border-t-0">
            <h4 className={eyebrow} style={{ color }}>What&apos;s included</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {includes.map(({ title: itemTitle, text }) => (
                <li
                  key={itemTitle}
                  className="flex items-start gap-3 rounded-xl p-3.5 sm:last:odd:col-span-2 bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                >
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: `rgba(${rgb}, 0.15)` }}
                  >
                    <FaCheck size={9} style={{ color }} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{itemTitle}</span>
                    <span className="block text-xs text-[var(--muted)] leading-relaxed mt-0.5">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="!border-t-0">
            <h4 className={eyebrow} style={{ color }}>Perfect for</h4>
            <div className="flex flex-wrap gap-2">
              {idealFor.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full text-[var(--text)]"
                  style={{ background: `rgba(${rgb}, 0.08)`, border: `1px solid rgba(${rgb}, 0.25)` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                  {item}
                </span>
              ))}
              {tags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-[var(--muted)] border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div
            className="rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            style={{ background: `linear-gradient(135deg, rgba(${rgb}, 0.12), rgba(${rgb}, 0.03))`, border: `1px solid rgba(${rgb}, 0.2)` }}
          >
            <div>
              <p className="font-display font-bold text-white">Ready to get started?</p>
              <p className="text-xs text-[var(--muted)] mt-1">Tell me about your project and let&apos;s build something great.</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button onClick={goToContact} className="btn-primary rounded-full px-6 py-3 text-sm normal-case tracking-normal">
                Start a project →
              </button>
              <a
                href="mailto:bismanoordeveloper@gmail.com"
                aria-label="Email Bisma"
                className="w-11 h-11 rounded-full flex items-center justify-center border border-[rgba(34,211,238,0.25)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition"
              >
                <FaEnvelope size={14} />
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function Services() {
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="services" className="py-24 lg:py-32 !border-t-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Editorial header ── */}
        <div className="mb-16 lg:mb-20">
          <ScrollReveal animation="fadeUp">
            <div className="flex items-center gap-4 mb-6">
              <span className="badge">Services</span>
              <span className="flex-1 h-px bg-[var(--line)]" />
              <HiOutlineSparkles className="text-[var(--accent)]" size={16} />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={120}>
            <h2
              className="font-black text-white"
              style={{
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.12,
                fontFamily: 'var(--font-space)',
              }}
            >
              What I <span className="gradient-text">Offer</span>
              <span className="text-[var(--accent)]">.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={200}>
            <p className="text-[var(--muted)] mt-4 max-w-xl text-sm sm:text-base">
              End-to-end web development services with a focus on modern design and performance.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const { icon: Icon, title, desc, tags, color, rgb, featured } = service;
            return (
              <ScrollReveal key={title} animation="fadeUp" delay={i * 120}>
                <div
                  className={`relative group glow-card rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2 h-full ${
                    featured ? 'border-[rgba(59,130,246,0.4)] shadow-[0_0_30px_rgba(59,130,246,0.1)]' : ''
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge text-[10px] whitespace-nowrap">✦ Most Popular</span>
                  )}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: `rgba(${rgb}, 0.1)`, border: `1px solid rgba(${rgb}, 0.25)` }}
                  >
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">{title}</h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 text-[var(--muted)] border border-white/10">{tag}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelected(i)}
                    aria-haspopup="dialog"
                    className="self-start flex items-center gap-2 text-xs font-semibold text-[var(--muted)] hover:text-[var(--accent)] group-hover:text-[var(--accent)] transition-colors duration-200 mt-1"
                  >
                    Learn more <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {services.map((service, i) => (
        <ServiceModal key={service.title} service={service} index={i} open={selected === i} onClose={close} />
      ))}
    </section>
  );
}
