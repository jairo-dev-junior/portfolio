import React from 'react';

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#08070f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.10),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,34,68,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,34,68,0.3)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,7,15,0),rgba(8,7,15,0.9))]" />
    </div>
  );
}

export default Background;
