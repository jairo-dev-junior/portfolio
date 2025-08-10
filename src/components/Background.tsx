import React from 'react';

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg className="absolute -top-24 left-1/2 -translate-x-1/2 opacity-40 blur-3xl dark:opacity-25" width="1200" height="600" viewBox="0 0 1200 600" fill="none">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-accent)" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="180" fill="url(#g1)"></circle>
        <circle cx="800" cy="300" r="220" fill="url(#g1)"></circle>
        <circle cx="500" cy="100" r="120" fill="url(#g1)"></circle>
      </svg>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-64 md:h-80">
        <div className="absolute inset-0 bg-center bg-cover opacity-25 dark:opacity-15" style={{ backgroundImage: "url('/images/1716259245388.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-[#0b0d12] dark:via-transparent dark:to-[#0b0d12]" />
      </div>
    </div>
  );
}
export default Background; 