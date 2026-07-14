'use client';

import { useState } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineSparkles } from 'react-icons/hi';
import { HiLocationMarker } from 'react-icons/hi';
import ScrollReveal from './ScrollReveal';

const socials = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/bisma-noor-952092396/', label: 'LinkedIn' },
  { icon: FaXTwitter,   href: 'https://x.com/bisma51406',                          label: 'X'        },
  { icon: FaGithub,     href: 'https://github.com/bismanoordev',                    label: 'GitHub'   },
];

const faqs = [
  {
    q: 'What does she build and specialize in?',
    a: 'Bisma is a Web Developer skilled in React.js, Next.js, and Tailwind CSS, building responsive and SEO-friendly web applications — with a strong focus on clean UI/UX, performance optimization, and modern web development practices.',
  },
  {
    q: 'What technologies does she use?',
    a: 'React.js, Next.js, Redux Toolkit, JavaScript (ES6+), Tailwind CSS, Material UI, Bootstrap, HTML5, CSS3, Firebase, Supabase, Shopify, WordPress, Git & GitHub — plus AI tools like Claude AI, Cursor AI, and GitHub Copilot.',
  },
  {
    q: 'Is she available for hire?',
    a: "Yes — currently available for freelance work, full-time positions, and exciting collaborations. Drop a message using the form, or reach out directly at bismanoordeveloper@gmail.com.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [open, setOpen] = useState(0);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 !border-t-0">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── LEFT — form card ── */}
          <ScrollReveal animation="fadeLeft">
            <div className="glow-card rounded-3xl p-7 sm:p-10">

              {/* Eyebrow */}
              <p className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.25em] text-[var(--accent)] uppercase mb-5">
                <HiOutlineSparkles size={13} /> Say Hello
              </p>

              {/* Heading */}
              <h2
                className="font-black text-white mb-3"
                style={{
                  fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  fontFamily: 'var(--font-space)',
                }}
              >
                Send me a
                <br />
                <em className="gradient-text italic">message.</em>
              </h2>

              <p className="text-[var(--muted)] text-sm leading-relaxed mb-8">
                Have a project in mind or want to collaborate? I&apos;d love to hear from you.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-[0.2em]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-[rgba(34,211,238,0.15)] rounded-xl px-4 py-3 text-sm text-white placeholder-[var(--muted)] outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[rgba(34,211,238,0.3)] transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-[0.2em]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-[rgba(34,211,238,0.15)] rounded-xl px-4 py-3 text-sm text-white placeholder-[var(--muted)] outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[rgba(34,211,238,0.3)] transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-[0.2em]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-[rgba(34,211,238,0.15)] rounded-xl px-4 py-3 text-sm text-white placeholder-[var(--muted)] outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[rgba(34,211,238,0.3)] transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary self-start rounded-full px-7 py-3 text-sm normal-case tracking-normal disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' && 'Sending...'}
                  {status === 'sent' && '✓ Message Sent!'}
                  {status === 'error' && '✕ Failed — try again'}
                  {status === 'idle' && 'Send message →'}
                </button>

                {status === 'sent' && (
                  <p className="text-xs text-[#34d399]">Thanks! Your message has been sent — I&apos;ll reply soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-xs text-red-400">
                    Couldn&apos;t send. Please email me directly at bismanoordeveloper@gmail.com.
                  </p>
                )}
              </form>

              {/* Availability + email */}
              <div className="mt-8 pt-6 border-t border-[rgba(34,211,238,0.1)] flex flex-col gap-3">
                <p className="flex items-center gap-2 text-xs text-[var(--muted)] font-medium tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  Available for freelance work &amp; full-time positions
                </p>
                <a
                  href="mailto:bismanoordeveloper@gmail.com"
                  className="text-base sm:text-lg italic font-semibold text-[var(--accent)] hover:underline underline-offset-4"
                >
                  bismanoordeveloper@gmail.com
                </a>

                <div className="flex items-center justify-between gap-4 mt-2">
                  <p className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                    <HiLocationMarker className="text-[var(--accent)]" size={13} />
                    Faisalabad, Punjab, Pakistan
                  </p>
                  <div className="flex gap-2">
                    {socials.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-8 h-8 rounded-lg border border-[rgba(34,211,238,0.2)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_0_10px_rgba(34,211,238,0.25)] transition-all duration-200"
                      >
                        <Icon size={13} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── RIGHT — FAQ ── */}
          <ScrollReveal animation="fadeRight" delay={120}>
            <div className="lg:pt-10">

              {/* Eyebrow */}
              <p className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.25em] text-[var(--accent)] uppercase mb-5">
                <HiOutlineSparkles size={13} /> FAQ
              </p>

              {/* Heading */}
              <h2
                className="font-black text-white mb-10"
                style={{
                  fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  fontFamily: 'var(--font-space)',
                }}
              >
                Questions,
                <br />
                <em className="gradient-text italic">answered.</em>
              </h2>

              {/* Accordion */}
              <div className="flex flex-col gap-4">
                {faqs.map((faq, i) => {
                  const isOpen = open === i;
                  return (
                    <div key={faq.q} className="glow-card rounded-2xl overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                      >
                        <span className="text-sm sm:text-base font-display font-bold text-white">
                          {faq.q}
                        </span>
                        <span
                          className={`flex-shrink-0 w-8 h-8 rounded-full border border-[rgba(34,211,238,0.3)] bg-[rgba(34,211,238,0.06)] flex items-center justify-center text-[var(--accent)] text-lg leading-none transition-transform duration-300 ${
                            isOpen ? 'rotate-45' : ''
                          }`}
                        >
                          +
                        </span>
                      </button>
                      <div
                        className="overflow-hidden transition-all duration-400 ease-in-out"
                        style={{ maxHeight: isOpen ? '300px' : '0px' }}
                      >
                        <p className="px-5 sm:px-6 pb-6 text-sm text-[var(--muted)] leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
