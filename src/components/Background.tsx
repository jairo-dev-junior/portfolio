import React from 'react';

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-100 dark:bg-[#08070f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(2,132,199,0.20),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(192,38,211,0.18),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.10),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(51,65,85,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(51,65,85,0.10)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(rgba(34,34,68,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,34,68,0.3)_1px,transparent_1px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.28)_1px,transparent_0)] bg-[size:8px_8px] opacity-30 dark:opacity-15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.14)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.45)_100%)]" />
      <div className="scan-line absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-cyan-300/10 to-transparent dark:from-cyan-300/5" />
    </div>
  );
}

export default Background;
