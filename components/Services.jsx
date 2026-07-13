import { FaLaptop, FaCode, FaRocket, FaSearch } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: FaLaptop,
    title: 'Custom Websites',
    desc: 'I build pixel-perfect, responsive websites with smooth animations and engaging user experiences tailored to your brand.',
    tags: ['React', 'Next.js', 'Tailwind'],
    color: '#22d3ee',
  },
  {
    icon: FaCode,
    title: 'Web Applications',
    desc: 'Full-stack web apps using modern technologies like MERN Stack, Next.js, Firebase and Supabase with clean, scalable architecture.',
    tags: ['Full-Stack', 'API', 'Database'],
    color: '#3b82f6',
    featured: true,
  },
  {
    icon: FaRocket,
    title: 'Vibe Coding',
    desc: 'Rapid prototyping and vibe coding sessions to build clean, modern, and scalable solutions with optimized performance.',
    tags: ['Replit', 'Shopify', 'CMS'],
    color: '#a78bfa',
  },
  {
    icon: FaSearch,
    title: 'SEO & Performance',
    desc: 'Boost your website visibility and speed with technical SEO, Core Web Vitals optimization, and best-in-class performance tuning.',
    tags: ['SEO', 'Core Web Vitals', 'Speed'],
    color: '#34d399',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 !border-t-0">
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
          {services.map(({ icon: Icon, title, desc, tags, color, featured }, i) => (
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
                  style={{
                    background: `rgba(${color === '#22d3ee' ? '34,211,238' : color === '#3b82f6' ? '59,130,246' : '167,139,250'}, 0.1)`,
                    border:     `1px solid rgba(${color === '#22d3ee' ? '34,211,238' : color === '#3b82f6' ? '59,130,246' : '167,139,250'}, 0.25)`,
                  }}
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
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-200 mt-1">
                  Learn more <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
