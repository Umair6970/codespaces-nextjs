import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800/80 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Pre-footer Callout Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-800 border border-neutral-700/60 text-center mb-16 relative overflow-hidden">
          <h3 className="text-2xl sm:text-4xl font-extrabold mb-4">
            Ready to Take Your E-Commerce Store to the Next Level?
          </h3>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Let's review your store health, identify wasted spend, and craft a 90-day scaling roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/yourphonenumber?text=Hello%20Umair,%20let's%20connect%20about%20store%20management"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/20"
            >
              Message on WhatsApp
            </a>
            <a
              href="mailto:contact@ecombyumair.com?subject=Inquiry%20regarding%20Ecom%20Management"
              className="px-8 py-3.5 rounded-xl bg-neutral-800 text-neutral-200 border border-neutral-700 font-semibold text-sm hover:bg-neutral-700 transition-colors"
            >
              Send an Email
            </a>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-300">Ecom by Umair</span>
            <span>•</span>
            <span>All rights reserved &copy; {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-neutral-300">Services</a>
            <a href="#results" className="hover:text-neutral-300">Showcase</a>
            <a href="#team" className="hover:text-neutral-300">Team</a>
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              WhatsApp Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}