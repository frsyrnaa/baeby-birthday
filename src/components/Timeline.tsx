import React from "react";
import { invitationData, TimelineItem } from "@/data/invitationData";
import { Cake, ShoppingBag, Camera, Utensils, Coffee, Heart, MapPin, Clock } from "lucide-react";
import { BotanicalDivider } from "./VintageOrnaments";

const iconMap = {
  cake: Cake,
  "shopping-bag": ShoppingBag,
  camera: Camera,
  utensils: Utensils,
  coffee: Coffee,
  heart: Heart,
};

export const Timeline: React.FC = () => {
  return (
    <section className="relative py-10 px-4 sm:px-8 border-b border-[#A8895B]/30">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="text-[11px] tracking-[0.3em] uppercase text-[#A8895B] font-mono block mb-1">
          THE ITINERARY
        </span>
        <h2
          className="text-2xl sm:text-3xl text-[#3B0D16] font-serif font-bold tracking-wide"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          CHAPTERS OF OUR DAY
        </h2>
        <div className="my-3 flex justify-center">
          <BotanicalDivider className="w-40" />
        </div>
        <p className="text-xs sm:text-sm text-[#3A2922]/70 italic max-w-sm mx-auto">
          Every moment curated with love, from early morning surprises to quiet twilight moments.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative max-w-lg mx-auto">
        {/* Vintage Antique Dotted Line */}
        <div className="absolute left-6 sm:left-8 top-4 bottom-4 w-px border-l-2 border-dashed border-[#A8895B]/50" />

        <div className="space-y-8 sm:space-y-10">
          {invitationData.timeline.map((item: TimelineItem) => {
            const Icon = iconMap[item.iconName] || Heart;

            return (
              <div
                key={item.id}
                className="relative flex items-start gap-4 sm:gap-6 group"
              >
                {/* Timeline Step Badge */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F3E8D0] border-2 border-[#A8895B] shadow-sm flex flex-col items-center justify-center text-[#5A1722] group-hover:scale-105 group-hover:border-[#5A1722] transition-transform duration-300">
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider">
                    {item.step}
                  </span>
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A8895B] group-hover:text-[#5A1722] transition-colors" />
                </div>

                {/* Timeline Card */}
                <div className="flex-1 bg-[#F3E8D0]/90 hover:bg-[#F3E8D0] border border-[#A8895B]/40 hover:border-[#A8895B] p-4 sm:p-5 rounded-xs vintage-card-shadow transition-all duration-300">
                  {/* Time & Step Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-[#A8895B]/25">
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-[#5A1722] font-mono font-semibold tracking-wider">
                      <Clock className="w-3 h-3 text-[#A8895B]" />
                      {item.time}
                    </span>

                    <span className="text-[10px] tracking-widest uppercase text-[#A8895B] font-mono">
                      Part {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg sm:text-xl text-[#3B0D16] font-serif font-bold tracking-wide mb-1"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {item.title}
                  </h3>

                  {/* Location if present */}
                  {item.location && (
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 mb-2 bg-[#E8D8BE]/70 border border-[#A8895B]/30 rounded-xs text-[#3A2922] text-xs font-mono tracking-wider">
                      <MapPin className="w-3 h-3 text-[#5A1722]" />
                      <span className="font-semibold text-[#5A1722]">{item.location}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#3A2922]/90 leading-relaxed font-serif whitespace-pre-line">
                    &ldquo;{item.description}&rdquo;
                  </p>

                  {/* Optional extra details */}
                  {item.details && (
                    <p className="text-[11px] sm:text-xs text-[#3A2922]/70 italic mt-2 pt-2 border-t border-[#A8895B]/15">
                      {item.details}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
