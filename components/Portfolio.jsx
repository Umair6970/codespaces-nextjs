import React from "react";

export default function Portfolio() {
  const caseStudies = [
    {
      title: "Beauty & Skincare Brand",
      channel: "TikTok Shop US",
      growth: "+310% GMV in 60 Days",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      description: "Mobilized 140+ micro-creators, optimizing product listings for TikTok Shop algorithm. Drove viral traction and sustained recurring weekly orders.",
      metrics: [
        { label: "Monthly GMV", val: "$145,000" },
        { label: "ROAS", val: "5.4x" },
      ],
    },
    {
      title: "Home & Kitchen Essentials",
      channel: "Amazon FBA",
      growth: "Lowered ACOS from 38% to 19%",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      description: "Restructured keyword bid strategies, created brand story A+ modules, and eliminated negative spend keywords.",
      metrics: [
        { label: "Net Revenue", val: "$230,000" },
        { label: "Organic Rank", val: "Top 3 BSR" },
      ],
    },
    {
      title: "Activewear & Apparel Line",
      channel: "Omnichannel (TikTok + Amazon)",
      growth: "0 to $85k/mo in 90 Days",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      description: "Coordinated product launch combining influencer TikTok unboxings with Amazon Prime fast fulfillment availability.",
      metrics: [
        { label: "Affiliate GMV", val: "62%" },
        { label: "Repeat Buyers", val: "28%" },
      ],
    },
  ];

  return (
    <section id="results" className="py-24 bg-neutral-950 text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-xs md:text-sm uppercase tracking-widest text-emerald-400 font-semibold mb-3">
              Proven Track Record
            </h2>
            <p className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Real Stores. Verified Growth.
            </p>
          </div>
          <p className="text-neutral-400 max-w-md text-sm">
            Visual proof of our data-driven marketing, listing optimization, and affiliate distribution strategies.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 flex flex-col group hover:border-neutral-700 transition-all shadow-lg"
            >
              {/* Portfolio Image Showcase */}
              <div className="h-56 w-full relative overflow-hidden bg-neutral-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 border border-white/10">
                  {item.channel}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide mb-1">
                    {item.growth}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Metrics Footer */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800/80">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="block text-xs text-neutral-500 font-medium">
                        {m.label}
                      </span>
                      <span className="block text-base font-bold text-white">
                        {m.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}