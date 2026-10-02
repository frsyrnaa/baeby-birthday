"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { WaxSealStamp, VintagePostmark } from "./VintageOrnaments";
import { invitationData } from "@/data/invitationData";
import { MailOpen, Sparkles } from "lucide-react";

interface EnvelopeModalProps {
  isOpen: boolean;
  onOpenInvitation: () => void;
}

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({
  isOpen,
  onOpenInvitation,
}) => {
  const [isOpening, setIsOpening] = useState(false);
  const [sealHovered, setSealHovered] = useState(false);

  if (!isOpen) return null;

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Subtle gentle golden & rose paper sparkles
    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#A8895B", "#5A1722", "#E8D8BE", "#D2BFA3"],
        disableForReducedMotion: true,
      });
    } catch {
      // safe fallback
    }

    // Allow flap and slide animation to play before transitioning
    setTimeout(() => {
      onOpenInvitation();
      setIsOpening(false);
    }, 1100);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#231815]/95 backdrop-blur-md transition-opacity duration-700 ${
        isOpening ? "opacity-90" : "opacity-100"
      }`}
      style={{ perspective: "1200px" }}
    >
      {/* Ambient background vintage vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(90,23,34,0.15)_0%,_transparent_75%)]" />

      {/* Main Envelope Container */}
      <div
        className={`relative w-full max-w-md mx-auto transition-all duration-1000 transform ${
          isOpening ? "scale-95 translate-y-6 opacity-0" : "scale-100 translate-y-0 opacity-100"
        }`}
      >
        {/* Vintage Postal Envelope Body */}
        <div className="relative envelope-texture rounded-lg envelope-shadow border border-[#A8895B]/40 overflow-hidden p-6 sm:p-8 text-[#3A2922]">
          {/* Antique gold inner hairline frame */}
          <div className="absolute inset-2 sm:inset-3 border border-[#A8895B]/30 rounded pointer-events-none" />
          <div className="absolute inset-3 sm:inset-4 border border-[#5A1722]/15 rounded pointer-events-none" />

          {/* Top Vintage Postmark & Airmail Stamp */}
          <div className="flex items-start justify-between relative z-10 mb-8 sm:mb-10">
            {/* Vintage French / European Postal Label */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-[#5A1722]/40 rounded-sm bg-[#F3E8D0]/80 text-[#5A1722] text-[10px] sm:text-xs tracking-widest font-mono uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5A1722] animate-pulse" />
              {invitationData.envelope.badge}
            </div>

            {/* Antique Bogor Postmark Stamp */}
            <div className="-mt-3 -mr-2">
              <VintagePostmark city="BOGOR" date="04.10.26" className="w-20 h-20 sm:w-24 sm:h-24 text-[#5A1722]/60" />
            </div>
          </div>

          {/* Envelope Center Recipient Content */}
          <div className="relative z-10 text-center my-6 sm:my-8 px-2">
            <span className="block text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#A8895B] font-mono mb-2">
              PRIVATE INVITATION
            </span>

            <h1
              className="text-3xl sm:text-4xl text-[#3A2922] font-serif font-bold tracking-wider mb-2"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              {invitationData.envelope.recipientText}
            </h1>

            <div className="flex items-center justify-center gap-3 my-3">
              <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#A8895B]/60" />
              <p
                className="text-base sm:text-lg tracking-[0.3em] text-[#5A1722] font-semibold"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {invitationData.envelope.dateText}
              </p>
              <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#A8895B]/60" />
            </div>

            <p className="text-xs sm:text-sm text-[#3A2922]/75 italic mt-2">
              &ldquo;{invitationData.event.subtitle}&rdquo;
            </p>
          </div>

          {/* Realistic Wax Seal in the Center */}
          <div className="relative z-20 flex flex-col items-center justify-center my-4 sm:my-6">
            <div
              className={`transition-transform duration-500 cursor-pointer ${
                isOpening
                  ? "scale-125 -translate-y-4 rotate-12 opacity-80"
                  : sealHovered
                  ? "scale-108 -translate-y-1"
                  : "animate-wax-float"
              }`}
              onMouseEnter={() => setSealHovered(true)}
              onMouseLeave={() => setSealHovered(false)}
              onClick={handleOpen}
            >
              <WaxSealStamp size={88} letter="B" />
            </div>
            <span className="text-[10px] tracking-widest text-[#5A1722]/80 uppercase mt-2 font-mono">
              SEALED WITH WINE WAX
            </span>
          </div>

          {/* Interactive Open Button */}
          <div className="relative z-10 mt-6 sm:mt-8 flex flex-col items-center">
            <button
              id="open-invitation-btn"
              onClick={handleOpen}
              disabled={isOpening}
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#5A1722] hover:bg-[#3B0D16] active:bg-[#25050C] text-[#F3E8D0] font-serif text-sm sm:text-base tracking-[0.2em] uppercase rounded-sm border border-[#A8895B]/50 shadow-[0_4px_16px_rgba(90,23,34,0.35)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(90,23,34,0.55)] hover:border-[#A8895B] active:scale-98 cursor-pointer"
            >
              <MailOpen className="w-4 h-4 text-[#A8895B] transition-transform duration-300 group-hover:rotate-12" />
              <span>{isOpening ? "UNSEALING..." : invitationData.envelope.openButtonText}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#A8895B] opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>

            <p className="text-[11px] text-[#3A2922]/60 mt-3 font-mono tracking-wider">
              {invitationData.envelope.postmarkLocation} · {invitationData.envelope.postmarkNumber}
            </p>
          </div>
        </div>

        {/* Vintage Desk Shadow Beneath Envelope */}
        <div className="w-5/6 h-5 mx-auto bg-black/40 blur-md rounded-full mt-2" />
      </div>
    </div>
  );
};
