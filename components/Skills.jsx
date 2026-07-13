'use client';

import { useState, useRef, useEffect } from 'react';
import { HiOutlineSparkles } from 'react-icons/hi';
import ScrollReveal from './ScrollReveal';

const groups = [
  {
    label: 'Technologies',
    role: 'Languages · Frameworks · Tools',
    desc: 'The core stack I reach for to build fast, modern, production-ready web applications.',
    dot: '#22d3ee',
    items: [
      'HTML5', 'CSS3', 'JavaScript', 'Python', 'React.js', 'Next.js', 'Tailwind CSS',
      'Redux', 'Bootstrap', 'Material-UI', 'Firebase', 'Supabase', 'MongoDB', 'Shopify',
      'GitHub', 'Vercel', 'Cloudinary', 'WordPress', 'Replit',
    ],
  },
  {
    label: 'Core Technologies',
    role: 'Foundation of my workflow',
    desc: 'The foundational technologies and tooling that power everything I build.',
    dot: '#22d3ee',
    items: ['TypeScript', 'Node.js', 'Shadcn UI', 'Replo', 'Git'],
  },
  {
    label: 'Web Expertise',
    role: 'Fast · Accessible · Discoverable',
    desc: 'How I make the web fast, SEO-friendly, cross-browser, and delightful to use.',
    dot: '#60a5fa',
    items: [
      'Responsive Web Design', 'SEO Optimization', 'Web Performance Optimization',
      'Core Web Vitals', 'API Integration', 'Cross-Browser Compatibility',
      'SaaS Development', 'UI/UX Design',
    ],
  },
  {
    label: 'AI Tools',
    role: 'AI-assisted development',
    desc: 'Modern AI tools I use daily to build faster and debug smarter.',
    dot: '#a78bfa',
    items: ['Claude AI', 'Cursor AI', 'GitHub Copilot', 'Vercel V0', 'OpenAI Codex', 'Lovable', 'DeepSeek', 'AI Code Debugging'],
  },
  {
    label: 'Other Skills',
    role: 'Platforms & problem solving',
    desc: 'Additional platforms and problem-solving strengths I bring to every project.',
    dot: '#34d399',
    items: ['Shopify Development', 'WordPress Development', 'Problem Solving', 'OOP'],
  },
];

const pad = (n) => String(n).padStart(2, '0');

function Header() {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 lg:pt-32 mb-12 lg:mb-16">
      <ScrollReveal animation="fadeUp">
        <div className="flex items-center gap-4 mb-6">
          <span className="badge">Skills</span>
          <span className="flex-1 h-px bg-[var(--line)]" />
          <HiOutlineSparkles className="text-[var(--accent)]" size={16} />
        </div>
      </ScrollReveal>
      <ScrollReveal animation="fadeUp" delay={120}>
        <h2
          className="font-black text-white"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.12, fontFamily: 'var(--font-space)' }}
        >
          My <span className="gradient-text">Tech Stack</span>
          <span className="text-[var(--accent)]">.</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal animation="fadeUp" delay={200}>
        <p className="text-[var(--muted)] mt-4 max-w-xl text-sm sm:text-base">
          Technologies and tools I use to build fast, modern, and scalable web experiences.
        </p>
      </ScrollReveal>
    </div>
  );
}

function Panel({ group, index }) {
  return (
    <div key={index} className="step-in relative glow-card rounded-2xl p-8 lg:p-12 w-full min-h-[480px] flex flex-col overflow-hidden">
      {/* Ambient tint */}
      <div
        className="pointer-events-none absolute -top-20 -right-10 w-80 h-80 rounded-full blur-[120px]"
        style={{ background: group.dot, opacity: 0.1 }}
      />

      {/* Counter top-right */}
      <span
        className="absolute top-8 right-8 lg:top-12 lg:right-12 font-display font-black italic text-transparent"
        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', WebkitTextStroke: `1px ${group.dot}`, opacity: 0.35 }}
      >
        {pad(index + 1)}<span className="text-base align-super">/{pad(groups.length)}</span>
      </span>

      {/* Title */}
      <div className="relative">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-3" style={{ color: group.dot }}>
          {group.items.length} Skills
        </p>
        <h3
          className="font-display font-black italic text-white mb-2"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
        >
          {group.label}
        </h3>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">{group.role}</p>
        <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mt-4 max-w-lg">{group.desc}</p>
      </div>

      {/* Pills */}
      <div className="relative flex flex-wrap gap-2.5 mt-8">
        {group.items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-default"
            style={{
              background: `${group.dot}14`,
              border: `1px solid ${group.dot}44`,
              color: '#e2edf8',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: group.dot }} />
            {item}
          </span>
        ))}
      </div>

      {/* Progress bar */}
      <div className="relative pt-8">
        <div className="w-full h-0.5 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((index + 1) / groups.length) * 100}%`, background: group.dot }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = scrolled / total;
      const idx = Math.min(groups.length - 1, Math.floor(p * groups.length));
      setActive(idx);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const targetP = (i + 0.5) / groups.length;
    window.scrollTo({ top: el.offsetTop + targetP * total, behavior: 'smooth' });
  };

  return (
    <section id="skills" className="!border-t-0">

      {/* ── Desktop: pinned scroll-driven experience (header pinned with panel) ── */}
      <div ref={trackRef} className="hidden lg:block relative" style={{ height: `${groups.length * 60}vh` }}>
        <div className="sticky top-0 h-screen flex flex-col justify-center">
          <div className="w-full max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">

            {/* Header — pinned together with the panel */}
            <div className="mb-12 xl:mb-14">
              <div className="flex items-center gap-4 mb-5">
                <span className="badge">Skills</span>
                <span className="flex-1 h-px bg-[var(--line)]" />
                <HiOutlineSparkles className="text-[var(--accent)]" size={16} />
              </div>
              <h2
                className="font-black text-white"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.12, fontFamily: 'var(--font-space)' }}
              >
                My <span className="gradient-text">Tech Stack</span>
                <span className="text-[var(--accent)]">.</span>
              </h2>
              <p className="text-[var(--muted)] mt-3 max-w-xl text-sm">
                Technologies and tools I use to build fast, modern, and scalable web experiences.
              </p>
            </div>

            <div className="grid grid-cols-[260px_1fr] gap-10 xl:gap-14 items-center">

              {/* Left — group list */}
              <div className="flex flex-col justify-center gap-1.5">
                {groups.map((g, i) => {
                  const isActive = active === i;
                  return (
                    <button
                      key={g.label}
                      onClick={() => goTo(i)}
                      className={`text-left rounded-xl px-4 py-4 border transition-all duration-300 ${
                        isActive
                          ? 'border-[rgba(34,211,238,0.3)] bg-[rgba(34,211,238,0.06)]'
                          : 'border-transparent hover:bg-white/[0.03]'
                      }`}
                      style={isActive ? { borderColor: `${g.dot}55`, background: `${g.dot}12` } : {}}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className={`font-display font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-[var(--muted)]'}`}
                        >
                          {g.label}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: g.dot, boxShadow: `0 0 6px ${g.dot}` }} />
                        )}
                      </span>
                      <span className="block text-[11px] font-semibold tracking-widest uppercase mt-1 text-[var(--muted)]">
                        {g.items.length} skills
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right — active panel */}
              <Panel group={groups[active]} index={active} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile / tablet: stacked ── */}
      <div className="lg:hidden">
      <Header />
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 pb-24 flex flex-col gap-6">
        {groups.map((g, i) => (
          <ScrollReveal key={g.label} animation="fadeUp" delay={(i % 2) * 100}>
            <div className="glow-card rounded-2xl p-6 sm:p-8">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-2" style={{ color: g.dot }}>
                {pad(i + 1)} · {g.items.length} Skills
              </p>
              <h3 className="font-display font-black italic text-white text-2xl mb-1" style={{ letterSpacing: '-0.02em' }}>
                {g.label}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)] mb-3">{g.role}</p>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">{g.desc}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: `${g.dot}14`, border: `1px solid ${g.dot}44`, color: '#e2edf8' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: g.dot }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      </div>
    </section>
  );
}
