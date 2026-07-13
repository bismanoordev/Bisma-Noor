'use client';

import { useEffect, useState } from 'react';

export default function LocalTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Karachi',
        })
      );
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
      Faisalabad, PK — {time || '--:--'} <span className="uppercase tracking-wider">local</span>
    </span>
  );
}
