'use client';

import { useEffect, useRef, useState } from 'react';

const variants = {
  fadeUp:    { hidden: 'opacity-0 translate-y-12',   visible: 'opacity-100 translate-y-0'  },
  fadeDown:  { hidden: 'opacity-0 -translate-y-8',   visible: 'opacity-100 translate-y-0'  },
  fadeLeft:  { hidden: 'opacity-0 -translate-x-12',  visible: 'opacity-100 translate-x-0'  },
  fadeRight: { hidden: 'opacity-0 translate-x-12',   visible: 'opacity-100 translate-x-0'  },
  scale:     { hidden: 'opacity-0 scale-90',          visible: 'opacity-100 scale-100'       },
  fadeIn:    { hidden: 'opacity-0',                  visible: 'opacity-100'                 },
};

export default function ScrollReveal({
  children,
  animation = 'fadeUp',
  delay      = 0,
  duration   = 650,
  threshold  = 0.12,
  className  = '',
  as         = 'div',
}) {
  const ref     = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShow(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const v   = variants[animation] ?? variants.fadeUp;
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`${show ? v.visible : v.hidden} ${className}`}
      style={{
        transition: `opacity ${duration}ms cubic-bezier(.4,0,.2,1), transform ${duration}ms cubic-bezier(.4,0,.2,1)`,
        transitionDelay: show ? `${delay}ms` : '0ms',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
}
