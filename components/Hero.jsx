import React from "react";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black text-white">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-emerald-500/15 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-700/60 text-xs md:text-sm text-neutral-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Full-Stack TikTok Shop & Amazon Growth Partner
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Scale Your E-Commerce Store with <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
            Predictable Revenue Systems
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed">
          From TikTok Shop creator affiliate networks to Amazon PPC optimization and catalog dominance, we handle end-to-end execution so you focus on brand vision.
        </p>

        {/* Action Buttons (Zero Input Required) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/yourphonenumber?text=Hello%20Umair,%20let's%20discuss%20managing%20my%20store"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-black font-bold text-base hover:opacity-95 transition-all shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2"
          >
            <span>Claim Free Store Audit</span>
            <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#results"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 font-semibold text-base hover:bg-neutral-800 hover:border-neutral-700 transition-all flex items-center justify-center"
          >
            Explore Portfolio & Results
          </a>
        </div>
      </div>
    </section>
  );
}