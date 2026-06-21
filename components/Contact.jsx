'use client';

import { useState } from 'react';
import {
  FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram, FaFacebook,
} from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import { HiLocationMarker, HiMail } from 'react-icons/hi';

const socials = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/bisma-noor-952092396/', label: 'LinkedIn', color: '#0A66C2' },
  { icon: FaGithub, href: 'https://github.com/bismanoordev', label: 'GitHub', color: '#fff' },
  { icon: FaInstagram, href: 'https://www.instagram.com/', label: 'Instagram', color: '#E4405F' },
  { icon: FaFacebook, href: 'https://www.facebook.com/', label: 'Facebook', color: '#1877F2' },
];

const contactInfo = [
  { icon: HiMail, label: 'Email', value: 'bismanoordeveloper@gmail.com' },
  { icon: HiLocationMarker, label: 'Location', value: 'Faisalabad, Punjab, Pakistan' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const mailto = `mailto:bismanoordeveloper@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(mailto, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <ScrollReveal animation="fadeUp" className="flex flex-col items-center text-center mb-16">
          <span className="badge mb-4">
            <FaEnvelope size={11} />
            Contact
          </span>
          <h2 className="section-heading text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[var(--muted)] mt-4 max-w-xl text-sm sm:text-base">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Left: Info */}
          <ScrollReveal animation="fadeLeft" delay={100} className="lg:col-span-2 flex flex-col gap-6">
            <div className="glow-card rounded-2xl p-6 flex flex-col gap-6">
              <h3 className="text-xl font-display font-bold text-white">Let&apos;s work together</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                I&apos;m currently available for freelance work, full-time positions, or exciting collaborations.
                Drop me a message and let&apos;s create something amazing!
              </p>

              {/* Contact details */}
              <div className="flex flex-col gap-4">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg border border-[rgba(34,211,238,0.2)] bg-[rgba(34,211,238,0.06)] flex items-center justify-center">
                      <Icon className="text-[var(--accent)] w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-[var(--muted)] font-medium uppercase tracking-wider">{label}</p>
                      <p className="text-sm text-white">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest mb-3">Follow Me</p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl border border-[rgba(34,211,238,0.2)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_0_12px_rgba(34,211,238,0.25)] transition-all duration-200"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Hire banner */}
            <div className="glow-card rounded-2xl p-6 bg-gradient-to-br from-[rgba(34,211,238,0.05)] to-[rgba(59,130,246,0.05)]">
              <p className="text-white font-display font-bold text-lg mb-2">
                Open for Opportunities ✦
              </p>
              <p className="text-sm text-[var(--muted)]">
                Actively looking for new roles and freelance projects.
              </p>
              <a
                href="https://www.linkedin.com/in/bisma-noor-952092396/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 w-full justify-center"
              >
                View LinkedIn Profile
              </a>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal animation="fadeRight" delay={150} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glow-card rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-[rgba(34,211,238,0.15)] rounded-lg px-4 py-3 text-sm text-white placeholder-[var(--muted)] outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[rgba(34,211,238,0.3)] transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-[rgba(34,211,238,0.15)] rounded-lg px-4 py-3 text-sm text-white placeholder-[var(--muted)] outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[rgba(34,211,238,0.3)] transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-[rgba(34,211,238,0.15)] rounded-lg px-4 py-3 text-sm text-white placeholder-[var(--muted)] outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[rgba(34,211,238,0.3)] transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
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
                  className="w-full bg-white/5 border border-[rgba(34,211,238,0.15)] rounded-lg px-4 py-3 text-sm text-white placeholder-[var(--muted)] outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[rgba(34,211,238,0.3)] transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary justify-center w-full py-3 text-base"
              >
                {sent ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
