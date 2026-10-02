"use client";

import React, { useState } from "react";
import { invitationData, SwatchItem } from "@/data/invitationData";
import { BotanicalDivider } from "./VintageOrnaments";
import { Palette, Sparkles, Check } from "lucide-react";

export const DressCode: React.FC = () => {
  const [selectedSwatch, setSelectedSwatch] = useState<SwatchItem | null>(
    invitationData.dressCode.swatches[0]
  );
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopyHex = (swatch: SwatchItem) => {
    setSelectedSwatch(swatch);
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(swatch.hex);
      setCopiedHex(swatch.hex);
      setTimeout(() => setCopiedHex(null), 2000);
    }
  };

  return (
    <section className="relative py-10 px-4 sm:px-8 border-b border-[#A8895B]/30">
      {/* Antique Ticket Frame Card */}
      <div className="relative max-w-lg mx-auto bg-[#F3E8D0] border-2 border-[#A8895B]/60 p-6 sm:p-8 rounded-sm vintage-card-shadow">
        {/* Ticket Notch Cutouts on Left and Right */}
        <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#2A1F1B] border border-[#A8895B]/40" />
        <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#2A1F1B] border border-[#A8895B]/40" />

        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs text-[#5A1722] font-mono tracking-[0.25em] uppercase mb-1">
            <Palette className="w-3 h-3 text-[#A8895B]" />
            <span>{invitationData.dressCode.title}</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl text-[#3B0D16] font-serif font-bold tracking-wider"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            {invitationData.dressCode.subtitle}
          </h2>

          <div className="my-3 flex justify-center">
            <BotanicalDivider className="w-36" />
          </div>

          <p className="text-xs sm:text-sm text-[#3A2922]/75 italic max-w-sm mx-auto">
            {invitationData.dressCode.note}
          </p>
        </div>

        {/* Swatch Samples Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-6">
          {invitationData.dressCode.swatches.map((swatch) => {
            const isSelected = selectedSwatch?.name === swatch.name;

            return (
              <button
                key={swatch.name}
                onClick={() => handleCopyHex(swatch)}
                className={`relative flex flex-col items-center p-2.5 rounded-xs transition-all duration-200 cursor-pointer text-left border ${
                  isSelected
                    ? "bg-[#E8D8BE] border-[#5A1722] shadow-sm -translate-y-1"
                    : "bg-[#F3E8D0] border-[#A8895B]/40 hover:border-[#A8895B] hover:-translate-y-0.5"
                }`}
                title={`Click to copy ${swatch.hex}`}
              >
                {/* Paint sample swatch chip */}
                <div
                  className="w-full h-12 sm:h-14 rounded-xs border border-black/15 shadow-inner relative overflow-hidden"
                  style={{ backgroundColor: swatch.hex }}
                >
                  {/* Subtle paper grain texture inside swatch */}
                  <div className="absolute inset-0 bg-white/5 opacity-50" />
                  {isSelected && (
                    <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-black/40 flex items-center justify-center text-white">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  )}
                </div>

                {/* Swatch Typography */}
                <span className="mt-2 text-xs font-serif font-bold text-[#3B0D16] tracking-wide">
                  {swatch.name}
                </span>
                <span className="text-[10px] font-mono text-[#3A2922]/70 uppercase tracking-wider">
                  {swatch.hex}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Swatch Description & Interactive Note */}
        {selectedSwatch && (
          <div className="mt-4 p-3 bg-[#E8D8BE]/50 border border-[#A8895B]/40 rounded-xs text-center">
            <p className="text-xs text-[#5A1722] font-semibold tracking-wide flex items-center justify-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#A8895B]" />
              <span>{selectedSwatch.name} tone</span>
              <span className="text-[11px] text-[#3A2922]/70 font-mono">({selectedSwatch.hex})</span>
            </p>
            <p className="text-[11px] text-[#3A2922]/80 italic mt-0.5">
              {selectedSwatch.description}
            </p>
            {copiedHex && (
              <span className="inline-block mt-1 text-[10px] text-[#5A1722] font-mono animate-fade-in">
                Hex code copied to clipboard!
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
