import React from "react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Store & Catalog Audit",
      desc: "Deep-dive analysis of your current SKU unit economics, search visibility, conversion rates, and account health.",
    },
    {
      num: "02",
      title: "Listing & Asset Polish",
      desc: "Rewriting titles, bullet points, creating A+ visuals, and structuring high-converting product pages.",
    },
    {
      num: "03",
      title: "Creator & PPC Deployment",
      desc: "Triggering our outreach engine to send samples to vetted creators while dialing in Amazon PPC bid algorithms.",
    },
    {
      num: "04",
      title: "Compound Scaling",
      desc: "Weekly iterative optimization, ad scaling on top-converting assets, and proactive inventory forecasting.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs md:text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-3">
            How We Partner
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Our 4-Stage Growth Blueprint
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 relative hover:bg-neutral-900/80 transition-all"
            >
              <span className="text-4xl font-black text-neutral-800 block mb-4">
                {st.num}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}