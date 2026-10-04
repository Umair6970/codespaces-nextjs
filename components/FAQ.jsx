import React, { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "What does Ecom by Umair need to start managing our accounts?",
      a: "We only require secondary user permissions (child access) for your Amazon Seller Central or TikTok Shop Seller Center. We never ask for primary master passwords or sensitive credentials.",
    },
    {
      q: "How does the TikTok Shop affiliate model work?",
      a: "We identify creators who match your target demographic, organize sample shipments, negotiate commission structures, and provide them with viral content briefs to sell your SKUs.",
    },
    {
      q: "How do you charge for management?",
      a: "We work on a transparent flat-fee retainer plus performance percentage model once monthly milestones are reached, ensuring our incentives align with your revenue growth.",
    },
    {
      q: "Can you manage both TikTok Shop and Amazon concurrently?",
      a: "Yes. In fact, driving traffic on TikTok Shop while using Amazon Multi-Channel Fulfillment (MCF) or having an Amazon presence captures spillover search demand and increases overall margins.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs md:text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-3">
            Common Inquiries
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-neutral-900/60 border border-neutral-800 rounded-xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left p-6 font-semibold flex justify-between items-center text-neutral-200 hover:text-white"
              >
                <span>{faq.q}</span>
                <span className="text-cyan-400 text-xl font-bold ml-4">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/60 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}