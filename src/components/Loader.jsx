import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-dark-bg flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-orange-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-orange-primary rounded-full border-t-transparent animate-spin"></div>
          <span className="text-orange-primary font-bold text-xl">V</span>
        </div>
        <div className="text-white/80 font-medium tracking-[0.2em] text-sm animate-pulse">
          LOADING EXPERIENCE
        </div>
      </div>
    </div>
  );
}
