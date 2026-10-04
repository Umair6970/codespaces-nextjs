import React from "react";

export default function StatsBar() {
  const stats = [
    { label: "Total GMV Generated", value: "$4.8M+" },
    { label: "Active TikTok Creators", value: "350+" },
    { label: "Average Client ROAS", value: "4.6x" },
    { label: "Stores Scaled", value: "45+" },
  ];

  return (
    <div className="bg-neutral-950 border-y border-neutral-800/80 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm text-neutral-400 mt-2 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}