import Image from 'next/image';
import htmlLogo from '@/src/assets/html5.png';
import cssLogo from '@/src/assets/css.png';
import jsLogo from '@/src/assets/js.png';
import reactLogo from '@/src/assets/react.png';
import bootstrapLogo from '@/src/assets/bootstrap.png';
import githubLogo from '@/src/assets/github.png';
import tailLogo from '@/src/assets/tail.png';
import replitLogo from '@/src/assets/Replit.png';
import shopifyLogo from '@/src/assets/shopify.png';
import firebaseLogo from '@/src/assets/firebase.png';
import supabaseLogo from '@/src/assets/supabase.png';
import nextLogo from '@/src/assets/next.png';
import vercelLogo from '@/src/assets/vercel.png';
import materialLogo from '@/src/assets/matrial-ui.png';
import reduxLogo from '@/src/assets/redux.png';
import wordpressLogo from '@/src/assets/wordpress.png';

const techSkills = [
  { name: 'HTML5',       img: htmlLogo,      color: '#E65100', level: 95 },
  { name: 'CSS3',        img: cssLogo,       color: '#0277BD', level: 90 },
  { name: 'JavaScript',  img: jsLogo,        color: '#F7DF1E', level: 88 },
  { name: 'React.js',    img: reactLogo,     color: '#00D8FF', level: 90 },
  { name: 'Next.js',     img: nextLogo,      color: '#E5E7EB', level: 85 },
  { name: 'Tailwind CSS',img: tailLogo,      color: '#00ACC1', level: 92 },
  { name: 'Redux',       img: reduxLogo,     color: '#764ABC', level: 80 },
  { name: 'Bootstrap',   img: bootstrapLogo, color: '#6C19FF', level: 85 },
  { name: 'Material-UI', img: materialLogo,  color: '#007FFF', level: 78 },
  { name: 'Firebase',    img: firebaseLogo,  color: '#FFCA28', level: 80 },
  { name: 'Supabase',    img: supabaseLogo,  color: '#3ECF8E', level: 75 },
  { name: 'Shopify',     img: shopifyLogo,   color: '#96BF48', level: 78 },
  { name: 'GitHub',      img: githubLogo,    color: '#F5F5F5', level: 85 },
  { name: 'Vercel',      img: vercelLogo,    color: '#A3A3A3', level: 82 },
  { name: 'WordPress',   img: wordpressLogo, color: '#00749C', level: 72 },
  { name: 'Replit',      img: replitLogo,    color: '#E74C3C', level: 75 },
];

const additionalSkills = [
  // Core
  { label: 'TypeScript',                  category: 'Core' },
  { label: 'Node.js',                     category: 'Core' },
  { label: 'Shadcn UI',                   category: 'Core' },
  { label: 'Replo',                       category: 'Core' },
  { label: 'Git',                         category: 'Core' },
  // Web Expertise
  { label: 'Responsive Web Design',       category: 'Web' },
  { label: 'SEO Optimization',            category: 'Web' },
  { label: 'Web Performance Optimization',category: 'Web' },
  { label: 'Core Web Vitals',             category: 'Web' },
  { label: 'API Integration',             category: 'Web' },
  { label: 'Cross-Browser Compatibility', category: 'Web' },
  { label: 'SaaS Development',            category: 'Web' },
  { label: 'UI/UX Design',                category: 'Web' },
  // AI Tools
  { label: 'Claude AI',                   category: 'AI' },
  { label: 'Cursor AI',                   category: 'AI' },
  { label: 'GitHub Copilot',              category: 'AI' },
  { label: 'Vercel V0',                   category: 'AI' },
  { label: 'OpenAI Codex',                category: 'AI' },
  { label: 'AI Code Debugging',           category: 'AI' },
  // Other
  { label: 'Shopify Development',         category: 'Other' },
  { label: 'WordPress Development',       category: 'Other' },
  { label: 'Problem Solving',             category: 'Other' },
  { label: 'OOP',                         category: 'Other' },
];

const categories = [
  {
    key: 'Core',
    label: 'Core Technologies',
    dot: '#22d3ee',
    tagBg: 'rgba(34,211,238,0.08)',
    tagBorder: 'rgba(34,211,238,0.22)',
    tagText: '#a5f3fc',
  },
  {
    key: 'Web',
    label: 'Web Expertise',
    dot: '#60a5fa',
    tagBg: 'rgba(59,130,246,0.08)',
    tagBorder: 'rgba(59,130,246,0.22)',
    tagText: '#bfdbfe',
  },
  {
    key: 'AI',
    label: 'AI Tools',
    dot: '#a78bfa',
    tagBg: 'rgba(167,139,250,0.08)',
    tagBorder: 'rgba(167,139,250,0.22)',
    tagText: '#ddd6fe',
  },
  {
    key: 'Other',
    label: 'Other Skills',
    dot: '#34d399',
    tagBg: 'rgba(52,211,153,0.08)',
    tagBorder: 'rgba(52,211,153,0.22)',
    tagText: '#a7f3d0',
  },
];

export default function Skills() {

  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="badge mb-4">Skills</span>
          <h2 className="section-heading text-white">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-[var(--muted)] mt-4 max-w-xl text-sm sm:text-base">
            Technologies and tools I use to build fast, modern, and scalable web experiences.
          </p>
        </div>

        {/* ── Tech Skills with logos ── */}
        <div className="mb-6">
          <p className="text-xs font-bold text-[var(--muted)] uppercase tracking-[0.15em] mb-5 flex items-center gap-3">
            <span className="flex-1 h-px bg-[rgba(34,211,238,0.1)]" />
            Technologies
            <span className="flex-1 h-px bg-[rgba(34,211,238,0.1)]" />
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-16">
          {techSkills.map((skill) => (
            <div
              key={skill.name}
              className="group glow-card rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                <Image src={skill.img} alt={skill.name} fill className="object-contain" />
              </div>
              <div className="text-center w-full">
                <p className="text-xs font-semibold text-[var(--muted)] group-hover:text-white transition-colors duration-200 truncate">
                  {skill.name}
                </p>
                <div className="mt-1.5 w-full h-0.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}66, ${skill.color})`,
                    }}
                  />
                </div>
                <p className="text-[10px] text-[var(--muted)] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {skill.level}%
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Additional Skills ── */}
        <div className="mt-4">
          <p className="text-xs font-bold text-[var(--muted)] uppercase tracking-[0.15em] mb-10 flex items-center gap-3">
            <span className="flex-1 h-px bg-[rgba(34,211,238,0.1)]" />
            Additional Skills
            <span className="flex-1 h-px bg-[rgba(34,211,238,0.1)]" />
          </p>

          <div className="flex flex-col gap-6">
            {categories.map((cat) => {
              const items = additionalSkills.filter((s) => s.category === cat.key);
              return (
                <div key={cat.key} className="flex flex-col sm:flex-row sm:items-start gap-4">

                  {/* Category label — fixed width */}
                  <div className="flex items-center gap-2 sm:w-44 flex-shrink-0 pt-0.5">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: cat.dot, boxShadow: `0 0 6px ${cat.dot}` }}
                    />
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: cat.dot }}
                    >
                      {cat.label}
                    </span>
                  </div>

                  {/* Divider line on desktop */}
                  <div className="hidden sm:block w-px self-stretch bg-[rgba(255,255,255,0.06)] flex-shrink-0 mt-1" />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {items.map(({ label }) => (
                      <span
                        key={label}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg cursor-default
                          transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                        style={{
                          background: cat.tagBg,
                          border: `1px solid ${cat.tagBorder}`,
                          color: cat.tagText,
                        }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
