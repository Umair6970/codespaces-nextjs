import React, { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center font-bold text-black text-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            U
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-white">
              Ecom by <span className="text-cyan-400">Umair</span>
            </span>
            <span className="text-[10px] tracking-wider uppercase text-neutral-400">
              TikTok & Amazon Growth
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#results" className="hover:text-white transition-colors">Showcase</a>
          <a href="#process" className="hover:text-white transition-colors">Our Process</a>
          <a href="#team" className="hover:text-white transition-colors">Team</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Direct Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/yourphonenumber?text=Hi%20Umair,%20I'm%20interested%20in%20your%20management%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-md hover:shadow-cyan-500/20"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-300 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-neutral-300 text-base">
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#results" onClick={() => setMobileMenuOpen(false)}>Showcase</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)}>Our Process</a>
          <a href="#team" onClick={() => setMobileMenuOpen(false)}>Team</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3 rounded-full bg-cyan-400 text-black font-semibold mt-2"
          >
            Connect on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}