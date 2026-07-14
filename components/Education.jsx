import { FaGraduationCap } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import ScrollReveal from './ScrollReveal';

const timeline = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'Virtual University of Pakistan',
    period: '2025 – 2029',
    detail: 'Relevant Coursework: Programming, Web Technologies, Software Engineering. Building real-world projects alongside academics.',
    grade: 'In Progress',
  },
  {
    degree: 'Web Development Certification',
    school: 'Saylani Mass I.T Training (SMIT)',
    period: 'Mar 2025 – Dec 2025',
    detail: 'Hands-on training in frontend frameworks and full-stack basics. Built multiple real-world projects using React and modern tools.',
    grade: 'In Progress',
  },
  {
    degree: 'C++ Essentials 1',
    school: 'Cisco Networking Academy — Virtual University Campus, Faisalabad',
    period: 'May 2026',
    detail: 'Completed C++ Essentials 1 through the Cisco Networking Academy program, covering core programming fundamentals and object-oriented concepts in C++.',
    grade: 'Completed',
  },
];

export default function Education() {
  return (
    <section id="education" className=" !border-t-0">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Editorial header ── */}
        <div className="mb-16 mt-20 lg:mb-20">
          <ScrollReveal animation="fadeUp">
            <div className="flex items-center gap-4 mb-6">
              <span className="badge">Education</span>
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
              Academic <span className="gradient-text">Journey</span>
              <span className="text-[var(--accent)]">.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={200}>
            <p className="text-[var(--muted)] mt-4 max-w-xl text-sm sm:text-base">
              A timeline of my educational milestones and learning foundations.
            </p>
          </ScrollReveal>
        </div>

        {/* ── Cards — 3 in a row (like Services) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {timeline.map((item, i) => (
            <ScrollReveal key={item.degree} animation="fadeUp" delay={i * 120}>
              <div className="relative group glow-card rounded-2xl p-8 flex flex-col gap-5 h-full transition-all duration-300 hover:-translate-y-2">

                {/* Icon + number */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl border border-[rgba(34,211,238,0.25)] bg-[rgba(34,211,238,0.08)] flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.12)]">
                    <FaGraduationCap className="text-[var(--accent)] w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[var(--muted)] uppercase">0{i + 1}</span>
                </div>

                {/* Title + school */}
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-1.5 group-hover:text-[var(--accent)] transition-colors duration-200">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-semibold text-[var(--accent)]">{item.school}</p>
                </div>

                {/* Detail */}
                <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">{item.detail}</p>

                {/* Footer — period + status */}
                <div className="flex flex-wrap items-center justify-between gap-2 mt-auto pt-4 border-t border-[rgba(34,211,238,0.1)]">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border border-[rgba(34,211,238,0.3)] text-[var(--accent)] bg-[rgba(34,211,238,0.08)]">
                    {item.period}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider ${
                      item.grade === 'Completed' ? 'text-[#34d399]' : 'text-[var(--muted)]'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${item.grade === 'Completed' ? 'bg-[#34d399]' : 'bg-[var(--accent)] animate-pulse'}`}
                    />
                    {item.grade}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
