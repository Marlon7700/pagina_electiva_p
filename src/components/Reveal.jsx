import React, { useEffect, useRef, useState } from 'react';

const line = [];
let busy = false;

function playNext() {
  if (busy || line.length === 0) return;
  busy = true;
  const next = line.shift();
  next.show();
  window.setTimeout(() => {
    busy = false;
    playNext();
  }, 420);
}

function enqueue(el, show) {
  line.push({ el, show });
  line.sort((a, b) => {
    const ra = a.el.getBoundingClientRect();
    const rb = b.el.getBoundingClientRect();
    const top = (ra.top + window.scrollY) - (rb.top + window.scrollY);
    return top || ra.left - rb.left;
  });
  playNext();
}

export default function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let alive = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        enqueue(el, () => {
          if (alive) setVisible(true);
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -48px 0px' }
    );

    observer.observe(el);
    return () => {
      alive = false;
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-item ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
