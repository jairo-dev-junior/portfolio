import React from 'react';

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-100 dark:bg-[#08070f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(2,132,199,0.20),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(192,38,211,0.18),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.10),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(51,65,85,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(51,65,85,0.10)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(rgba(34,34,68,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,34,68,0.3)_1px,transparent_1px)]" />

      <div className="absolute left-1/2 top-24 h-48 w-48 -translate-x-1/2 rounded-full bg-gradient-to-b from-fuchsia-400/70 to-cyan-300/40 blur-[1px] dark:from-fuchsia-500/60 dark:to-cyan-400/30" />
      <div className="absolute left-1/2 top-24 h-48 w-48 -translate-x-1/2 overflow-hidden rounded-full opacity-50">
        <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,rgba(8,7,15,0)_0px,rgba(8,7,15,0)_9px,rgba(8,7,15,0.5)_10px,rgba(8,7,15,0.5)_12px)]" />
      </div>

      <div className="absolute bottom-20 left-1/2 h-[240px] w-[420px] -translate-x-1/2 border border-fuchsia-400/40 opacity-40 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.28)_1px,transparent_0)] bg-[size:8px_8px] opacity-30 dark:opacity-15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.14)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.45)_100%)]" />
      <div className="scan-line absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-cyan-300/10 to-transparent dark:from-cyan-300/5" />
    </div>
  );
}

export default Background;
