import React from "react";

export default function Team() {
  const members = [
    {
      name: "Umair",
      role: "Founder & E-Commerce Director",
      bio: "Leads overarching brand strategy, client acquisition, and omnichannel scaling across TikTok Shop & Amazon ecosystems.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      skills: ["Strategic Growth", "Account Architecture", "Executive Audits"],
    },
    {
      name: "Amazon PPC Specialist",
      role: "Head of Paid Search",
      bio: "Focuses on sponsored products, sponsored brands, negative keyword mining, and automated TACoS management.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      skills: ["PPC Automation", "Helium10 / JungleScout", "ACOS Reduction"],
    },
    {
      name: "TikTok Creator Manager",
      role: "Affiliate & Influencer Lead",
      bio: "Manages day-to-day communication, sample fulfillment, and performance tracking across hundreds of creators.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      skills: ["Creator Outreach", "Viral Briefs", "LIVE Commerce"],
    },
  ];

  return (
    <section id="team" className="py-24 bg-neutral-950 text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs md:text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-3">
            The Specialists
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Meet the Team Behind Your Numbers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-neutral-700 transition-all shadow-md group"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-5 border-2 border-cyan-400/40 p-1 group-hover:scale-105 transition-transform">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <h3 className="text-xl font-bold text-white">{m.name}</h3>
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mt-1 mb-4">
                {m.role}
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {m.bio}
              </p>

              <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
                {m.skills.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-700/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}