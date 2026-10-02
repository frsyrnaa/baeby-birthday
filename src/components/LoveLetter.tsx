import React from "react";
import { invitationData } from "@/data/invitationData";
import { BotanicalDivider, CornerFlourish, WaxSealStamp } from "./VintageOrnaments";
import { Heart } from "lucide-react";

export const LoveLetter: React.FC = () => {
  return (
    <section className="relative py-12 px-4 sm:px-8 border-b border-[#A8895B]/30">
      {/* Antique Letter Sheet */}
      <div className="relative max-w-lg mx-auto bg-[#F3E8D0] border border-[#A8895B]/50 p-6 sm:p-10 rounded-sm vintage-card-shadow">
        {/* Subtle corner flourishes */}
        <CornerFlourish position="top-left" className="absolute top-2 left-2 w-7 h-7 text-[#A8895B]/50" />
        <CornerFlourish position="top-right" className="absolute top-2 right-2 w-7 h-7 text-[#A8895B]/50" />
        <CornerFlourish position="bottom-left" className="absolute bottom-2 left-2 w-7 h-7 text-[#A8895B]/50" />
        <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-7 h-7 text-[#A8895B]/50" />

        {/* Small Heart Motif */}
        <div className="flex justify-center mb-4">
          <Heart className="w-5 h-5 text-[#5A1722]/80 fill-[#5A1722]/20" />
        </div>

        {/* Letter Heading */}
        <div className="text-center mb-6">
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#A8895B] font-mono block mb-1">
            A PERSONAL NOTE
          </span>
          <h2
            className="text-2xl sm:text-3xl text-[#3B0D16] font-serif font-bold tracking-widest"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            {invitationData.letter.heading}
          </h2>
          <div className="my-3 flex justify-center">
            <BotanicalDivider className="w-32" />
          </div>
        </div>

        {/* Romantic Poem / Quote Lines */}
        <div className="text-center my-6 space-y-2">
          {invitationData.letter.quoteLines.map((line, idx) => (
            <p
              key={idx}
              className="text-base sm:text-xl text-[#3A2922] italic font-serif leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Closing Phrase */}
        <div className="text-center mt-8 pt-6 border-t border-[#A8895B]/25">
          <p
            className="text-xl sm:text-2xl text-[#5A1722] font-serif font-bold tracking-wide mb-3"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            {invitationData.letter.closing}
          </p>

          <p className="text-xs sm:text-sm text-[#3A2922]/70 font-mono tracking-widest uppercase">
            {invitationData.letter.signature}
          </p>

          {/* Mini wax imprint */}
          <div className="flex justify-center mt-4">
            <WaxSealStamp size={48} letter="B" interactive={false} />
          </div>
        </div>
      </div>
    </section>
  );
};
