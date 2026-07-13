'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaDownload } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineSparkles } from 'react-icons/hi';
import ScrollReveal from './ScrollReveal';
import IsoCubes from './IsoCubes';

import htmlLogo from '@/assets/html5.png';
import cssLogo from '@/assets/css.png';
import jsLogo from '@/assets/js.png';
import reactLogo from '@/assets/react.png';
import nextLogo from '@/assets/next.png';
import tailLogo from '@/assets/tail.png';
import reduxLogo from '@/assets/redux.png';
import bootstrapLogo from '@/assets/bootstrap.png';
import materialLogo from '@/assets/matrial-ui.png';
import firebaseLogo from '@/assets/firebase.png';
import supabaseLogo from '@/assets/supabase.png';
import shopifyLogo from '@/assets/shopify.png';
import githubLogo from '@/assets/github.png';
import vercelLogo from '@/assets/vercel.png';
import wordpressLogo from '@/assets/wordpress.png';
import replitLogo from '@/assets/Replit.png';

const socials = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/bisma-noor-952092396/', label: 'LinkedIn' },
  { icon: FaXTwitter,   href: 'https://x.com/',                                    label: 'X'        },
  { icon: FaGithub,     href: 'https://github.com/bismanoordev',                    label: 'GitHub'   },
];

const stats = [
  { value: '2+',   label: 'Years Experience' },
  { value: '10+',  label: 'Projects Done'    },
  { value: '5+',   label: 'Technologies'     },
  { value: '100%', label: 'Dedication'       },
];

const marqueeLogos = [
  { name: 'React.js',     img: reactLogo     },
  { name: 'Next.js',      img: nextLogo      },
  { name: 'JavaScript',   img: jsLogo        },
  { name: 'Tailwind CSS', img: tailLogo      },
  { name: 'Redux',        img: reduxLogo     },
  { name: 'HTML5',        img: htmlLogo      },
  { name: 'CSS3',         img: cssLogo       },
  { name: 'Bootstrap',    img: bootstrapLogo },
  { name: 'Material-UI',  img: materialLogo  },
  { name: 'Firebase',     img: firebaseLogo  },
  { name: 'Supabase',     img: supabaseLogo  },
  { name: 'Shopify',      img: shopifyLogo   },
  { name: 'GitHub',       img: githubLogo    },
  { name: 'Vercel',       img: vercelLogo    },
  { name: 'WordPress',    img: wordpressLogo },
  { name: 'Replit',       img: replitLogo    },
];

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2);
    const y = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
    setMouse({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => setMouse({ x: 0, y: 0 }), []);

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex flex-col">

      <div
        className="relative flex-1 flex items-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Ambient blobs */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[rgba(34,211,238,0.06)] blur-[120px]" />
          <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full bg-[rgba(59,130,246,0.07)] blur-[100px]" />
        </div>

        {/* ── 3D FLOATING SHAPES — mouse parallax ── */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">

          {/* Ring 1 — large cyan ring, top-left, rotates on X */}
          <div className="absolute" style={{
            top: '12%', left: '4%',
            transition: 'transform 0.4s ease-out',
            transform: `translate3d(${mouse.x * -22}px, ${mouse.y * -12}px, 0)`,
          }}>
            <div style={{
              width: 150, height: 150,
              border: '1.5px solid rgba(34,211,238,0.22)',
              borderRadius: '50%',
              animation: 'ring3dX 9s linear infinite',
            }} />
          </div>

          {/* Ring 2 — medium blue ring, top-right, rotates on Y */}
          <div className="absolute" style={{
            top: '14%', right: '6%',
            transition: 'transform 0.35s ease-out',
            transform: `translate3d(${mouse.x * 28}px, ${mouse.y * 14}px, 0)`,
          }}>
            <div style={{
              width: 100, height: 100,
              border: '1px solid rgba(59,130,246,0.28)',
              borderRadius: '50%',
              animation: 'ring3dY 7s linear infinite',
            }} />
          </div>

          {/* Ring 3 — small ring, bottom-right, rotates XY */}
          <div className="absolute" style={{
            bottom: '18%', right: '20%',
            transition: 'transform 0.3s ease-out',
            transform: `translate3d(${mouse.x * 18}px, ${mouse.y * 22}px, 0)`,
          }}>
            <div style={{
              width: 64, height: 64,
              border: '1px solid rgba(34,211,238,0.18)',
              borderRadius: '50%',
              animation: 'ring3dXY 6s linear infinite',
            }} />
          </div>

          {/* Square — rotating 3D square, bottom-left */}
          <div className="absolute" style={{
            bottom: '24%', left: '10%',
            transition: 'transform 0.25s ease-out',
            transform: `translate3d(${mouse.x * -30}px, ${mouse.y * 18}px, 0)`,
          }}>
            <div style={{
              width: 40, height: 40,
              border: '1.5px solid rgba(34,211,238,0.3)',
              animation: 'square3d 5s linear infinite',
            }} />
          </div>

          {/* Diamond — mid-left */}
          <div className="absolute" style={{
            top: '55%', left: '3%',
            transition: 'transform 0.3s ease-out',
            transform: `translate3d(${mouse.x * -16}px, ${mouse.y * -20}px, 0)`,
          }}>
            <div style={{
              width: 26, height: 26,
              border: '1px solid rgba(59,130,246,0.35)',
              animation: 'diamond3d 4s linear infinite',
            }} />
          </div>

          {/* Diamond 2 — top-center */}
          <div className="absolute" style={{
            top: '8%', left: '45%',
            transition: 'transform 0.45s ease-out',
            transform: `translate3d(${mouse.x * 10}px, ${mouse.y * -25}px, 0)`,
          }}>
            <div style={{
              width: 20, height: 20,
              border: '1px solid rgba(34,211,238,0.25)',
              animation: 'diamond3d 3.5s linear infinite reverse',
            }} />
          </div>

          {/* Floating dots — different parallax depths */}
          {[
            { top: '25%', left: '2%',  dx: -18, dy: -10, size: 4, op: 0.5  },
            { top: '42%', left: '6%',  dx: -24, dy:  15, size: 3, op: 0.35 },
            { top: '72%', left: '3%',  dx: -12, dy:  20, size: 5, op: 0.4  },
            { top: '15%', right: '3%', dx:  20, dy: -14, size: 3, op: 0.4  },
            { top: '48%', right: '4%', dx:  25, dy:  10, size: 4, op: 0.5  },
            { top: '78%', right: '2%', dx:  15, dy:  18, size: 3, op: 0.3  },
            { top: '86%', left: '32%', dx: -8,  dy:  22, size: 3, op: 0.3  },
            { top: '6%',  left: '58%', dx:  12, dy: -20, size: 4, op: 0.35 },
          ].map((d, i) => (
            <div key={i}
              className="absolute rounded-full bg-[var(--accent)]"
              style={{
                top: d.top,
                left: d.left,
                right: d.right,
                width:  d.size,
                height: d.size,
                opacity: d.op,
                transition: 'transform 0.5s ease-out',
                transform: `translate3d(${mouse.x * d.dx}px, ${mouse.y * d.dy}px, 0)`,
              }}
            />
          ))}
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 lg:pt-32 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">

            {/* LEFT — headline, intro, CTAs, stats */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

              <ScrollReveal animation="fadeDown" delay={0}>
                <span className="badge text-[10px] sm:text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  Available for work
                </span>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={120}>
                <h1
                  className="font-black text-white mt-5"
                  style={{
                    fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.04,
                    fontFamily: 'var(--font-space)',
                  }}
                >
                  Building fast, modern
                  <br />
                  &amp; scalable{' '}
                  <span className="gradient-text">web experiences</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={240}>
                <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed mt-6 max-w-xl">
                  Hi, I&apos;m <span className="text-white font-semibold">Bisma Noor</span> — a{' '}
                  <span className="text-white font-semibold">Web Developer</span> with{' '}
                  <span className="text-white font-semibold">2+ years</span> building responsive,
                  SEO-friendly web applications with{' '}
                  <span className="text-white font-semibold">React, Next.js &amp; Tailwind CSS</span>.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={360}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-8">
                  <a
                    href="https://www.linkedin.com/in/bisma-noor-952092396/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs sm:text-sm tracking-[0.08em] uppercase"
                  >
                    [ Hire Me ]
                  </a>
                  <a
                    href="/resume.pdf"
                    download="Bisma Noor - Web Developer.pdf"
                    className="btn-outline text-xs sm:text-sm tracking-[0.08em] uppercase"
                  >
                    <FaDownload size={11} />
                    [ Download CV ]
                  </a>
                  <div className="flex items-center gap-2 sm:ml-2">
                    {socials.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-9 h-9 rounded-lg border border-[rgba(34,211,238,0.2)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_0_10px_rgba(34,211,238,0.25)] transition-all duration-200"
                      >
                        <Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Stats strip */}
              <ScrollReveal animation="fadeUp" delay={480} className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[var(--line)] w-full">
                  {stats.map(({ value, label }) => (
                    <div key={label} className="text-center lg:text-left">
                      <p className="text-2xl sm:text-3xl font-display font-bold gradient-text">{value}</p>
                      <p className="text-[11px] sm:text-xs text-[var(--muted)] mt-1 font-medium uppercase tracking-wider">{label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT — isometric hover cubes */}
            <ScrollReveal animation="scale" delay={300} className="flex flex-col items-center gap-3 lg:pl-24">
              <IsoCubes />
              <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[var(--muted)]">
                — hover the cubes —
              </p>
            </ScrollReveal>

          </div>
        </div>
      </div>

      {/* ── TECH LOGO MARQUEE ── */}
      <div className="relative z-10 border-t border-[var(--line)] py-5 overflow-hidden marquee-mask">
        <div className="marquee-track items-center gap-12 px-6">
          {[...marqueeLogos, ...marqueeLogos].map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="flex items-center gap-3 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-200">
              <div className="relative w-7 h-7">
                <Image src={logo.img} alt={logo.name} fill className="object-contain" />
              </div>
              <span className="text-xs font-semibold text-[var(--muted)] whitespace-nowrap uppercase tracking-wider">
                {logo.name}
              </span>
              <span className="text-[var(--accent)] opacity-40 ml-6"><HiOutlineSparkles size={13} /></span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="relative z-10 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }}
      />
    </section>
  );
}
