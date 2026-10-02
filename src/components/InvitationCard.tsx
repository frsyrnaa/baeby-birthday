"use client";

import React from "react";
import { HeaderSection } from "./HeaderSection";
import { Timeline } from "./Timeline";
import { DressCode } from "./DressCode";
import { LoveLetter } from "./LoveLetter";
import { EasterEgg } from "./EasterEgg";
import { CornerFlourish } from "./VintageOrnaments";
import { Mail, Sparkles } from "lucide-react";
import { invitationData } from "@/data/invitationData";

interface InvitationCardProps {
  onReopenEnvelope: () => void;
}

export const InvitationCard: React.FC<InvitationCardProps> = ({
  onReopenEnvelope,
}) => {
  return (
    <article className="relative w-full max-w-2xl mx-auto my-4 sm:my-10 bg-[#F3E8D0] paper-texture vintage-card-shadow rounded-sm border-2 border-[#A8895B]/60 overflow-hidden">
      {/* Decorative Gold & Wine Hairline Borders */}
      <div className="absolute inset-2 sm:inset-3 border border-[#A8895B]/35 rounded-xs pointer-events-none z-10" />
      <div className="absolute inset-3 sm:inset-4 border border-[#5A1722]/20 rounded-xs pointer-events-none z-10" />

      {/* Outer Corner Flourishes */}
      <CornerFlourish position="top-left" className="absolute top-2 left-2 w-8 h-8 sm:w-10 sm:h-10 text-[#A8895B]/80 z-20" />
      <CornerFlourish position="top-right" className="absolute top-2 right-2 w-8 h-8 sm:w-10 sm:h-10 text-[#A8895B]/80 z-20" />
      <CornerFlourish position="bottom-left" className="absolute bottom-2 left-2 w-8 h-8 sm:w-10 sm:h-10 text-[#A8895B]/80 z-20" />
      <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-8 h-8 sm:w-10 sm:h-10 text-[#A8895B]/80 z-20" />

      {/* Main Content Sections */}
      <HeaderSection />
      <Timeline />
      <DressCode />
      <LoveLetter />
      <EasterEgg />

      {/* Vintage Invitation Footer */}
      <footer className="relative py-8 px-4 sm:px-8 text-center bg-[#E8D8BE]/40 border-t border-[#A8895B]/30">
        <div className="flex flex-col items-center justify-center gap-3">
          <button
            onClick={onReopenEnvelope}
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#A8895B]/70 bg-[#F3E8D0] hover:bg-[#E8D8BE] text-[#5A1722] text-xs font-mono tracking-widest uppercase rounded-xs transition-all hover:border-[#5A1722] shadow-xs cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-[#A8895B]" />
            <span>Close & Re-seal Envelope</span>
          </button>

          <p className="text-[11px] text-[#3A2922]/70 font-mono tracking-wider">
            {invitationData.event.dateFormatted} · {invitationData.event.city}
          </p>

          <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#A8895B] font-serif italic mt-1">
            <Sparkles className="w-3 h-3 text-[#A8895B]" />
            <span>Made with all my heart for my Baeby</span>
          </div>
        </div>
      </footer>
    </article>
  );
};
