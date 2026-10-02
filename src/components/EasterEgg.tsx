"use client";

import React, { useState } from "react";
import { invitationData } from "@/data/invitationData";
import { Sparkles, Heart, X } from "lucide-react";
import confetti from "canvas-confetti";

export const EasterEgg: React.FC = () => {
  const [showSecret, setShowSecret] = useState(false);

  const handleOpenSecret = () => {
    setShowSecret(true);
    try {
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.7 },
        colors: ["#A8895B", "#5A1722", "#F3E8D0"],
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <>
      {/* Subtle Star Ornament Trigger */}
      <div className="flex justify-center my-6">
        <button
          onClick={handleOpenSecret}
          className="group relative p-2 text-[#A8895B]/60 hover:text-[#5A1722] hover:scale-125 transition-all duration-300 cursor-pointer"
          aria-label="A tiny antique star"
          title="A tiny antique ornament..."
        >
          {/* Decorative antique four-pointed star */}
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current animate-pulse group-hover:rotate-45 transition-transform"
          >
            <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
          </svg>
          <span className="sr-only">Hidden Surprise</span>
        </button>
      </div>

      {/* Secret Message Modal */}
      {showSecret && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setShowSecret(false)}
        >
          <div
            className="relative w-full max-w-sm bg-[#F3E8D0] border-2 border-[#A8895B] p-6 rounded-sm vintage-card-shadow text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowSecret(false)}
              className="absolute top-3 right-3 text-[#3A2922]/60 hover:text-[#5A1722] p-1 cursor-pointer"
              aria-label="Close message"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 rounded-full bg-[#5A1722] text-[#F3E8D0] flex items-center justify-center shadow-sm">
                <Heart className="w-5 h-5 fill-current" />
              </div>
            </div>

            <span className="text-[10px] font-mono tracking-[0.2em] text-[#A8895B] uppercase block mb-1">
              SECRET NOTE
            </span>

            <h3
              className="text-xl font-serif font-bold text-[#5A1722] tracking-wide mb-3"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              {invitationData.easterEgg.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#3A2922]/90 italic font-serif leading-relaxed mb-4">
              &ldquo;{invitationData.easterEgg.message}&rdquo;
            </p>

            <div className="pt-3 border-t border-[#A8895B]/30 flex justify-center items-center gap-1.5 text-xs text-[#5A1722] font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#A8895B]" />
              <span>Sunday, 4 October 2026</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
