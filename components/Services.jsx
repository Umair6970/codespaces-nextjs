import React from "react";

export default function Services() {
  const services = [
    {
      title: "TikTok Shop Management",
      badge: "High Growth Channel",
      accent: "from-cyan-500/20 to-teal-500/10",
      description: "Full organic and paid acceleration inside TikTok Shop with automated creator affiliate pipelines.",
      features: [
        "Creator Outreach & Affiliate Sampling",
        "TikTok LIVE Shopping Management",
        "Product SEO & Listing Optimization",
        "TikTok Ads (Spark Ads & GMV Max)",
        "Violation Defense & Account Health",
      ],
    },
    {
      title: "Amazon Full-Service Management",
      badge: "Marketplace Authority",
      accent: "from-amber-500/20 to-orange-500/10",
      description: "Dominating Amazon SERPs through advanced PPC structuring, listing conversion optimization, and brand stores.",
      features: [
        "PPC Bid Architecture & Sponsored Ads",
        "A+ Content Design & Brand Story",
        "FBA Inventory Flow & Restock Planning",
        "Competitor Keyword Harvesting",
        "Review Velocity & Case Resolution",
      ],
    },
    {
      title: "Omnichannel E-Commerce Strategy",
      badge: "Scale & Retention",
      accent: "from-emerald-500/20 to-green-500/10",
      description: "Bridging the gap between marketplaces and brand equity for long-term valuation and margin health.",
      features: [
        "Product Sourcing & Margin Analysis",
        "Multi-channel Inventory Sync",
        "Cross-platform Promo Planning",
        "Conversion Rate Optimization (CRO)",
        "Bi-weekly Strategic Growth Reviews",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs md:text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-3">
            Core Specialization
          </h2>
          <p className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Tailored Solutions Built for Multi-Figure Scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between relative overflow-hidden group`}
            >
              <div className="relative z-10">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700/80 mb-6">
                  {svc.badge}
                </span>
                <h3 className="text-2xl font-bold mb-4">{svc.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  {svc.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {svc.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-neutral-300">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-neutral-800 relative z-10">
                <a
                  href="https://wa.me/yourphonenumber?text=I%20want%20to%20learn%20more%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Discuss this service
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}