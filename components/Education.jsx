import { FaGraduationCap } from 'react-icons/fa';
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
    <section id="education" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <ScrollReveal animation="fadeUp" className="flex flex-col items-center text-center mb-16">
          <span className="badge mb-4">Education</span>
          <h2 className="section-heading text-white">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-[var(--muted)] mt-4 max-w-xl text-sm sm:text-base">
            A timeline of my educational milestones and learning foundations.
          </p>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-2)] to-transparent opacity-30" />
          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.degree} animation="fadeRight" delay={i * 150}>
                <div className="relative flex gap-8">
                  <div className="flex-shrink-0 relative z-10 flex items-start pt-1">
                    <div className="w-12 h-12 rounded-xl border border-[rgba(34,211,238,0.3)] bg-[rgba(34,211,238,0.08)] flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                      <FaGraduationCap className="text-[var(--accent)] w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-1 glow-card rounded-2xl p-6 group">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.15em] text-[var(--muted)] uppercase">0{i + 1}</span>
                        <h3 className="text-lg sm:text-xl font-display font-bold text-white mt-0.5 group-hover:text-[var(--accent)] transition-colors duration-200">{item.degree}</h3>
                        <p className="text-sm font-semibold text-[var(--accent)] mt-0.5">{item.school}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full border border-[rgba(34,211,238,0.3)] text-[var(--accent)] bg-[rgba(34,211,238,0.08)]">{item.period}</span>
                        <span className="text-[10px] font-medium text-[var(--muted)]">{item.grade}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">{item.detail}</p>
                    <div className="mt-4 pt-4 border-t border-[rgba(34,211,238,0.1)]">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[var(--muted)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                        Academic Milestone
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
