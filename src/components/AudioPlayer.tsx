"use client";

import React, { useState, useEffect } from "react";
import { getMusicBox } from "@/lib/musicBox";
import { Volume2, VolumeX, Music } from "lucide-react";

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const toggleMusic = () => {
    setHasInteracted(true);
    const box = getMusicBox();
    const active = box.toggle();
    setIsPlaying(active);
  };

  useEffect(() => {
    return () => {
      // stop audio on unmount
      const box = getMusicBox();
      box.stop();
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-40">
      <button
        onClick={toggleMusic}
        className={`group relative flex items-center gap-2 px-3 py-2 rounded-full border shadow-md transition-all duration-300 backdrop-blur-sm cursor-pointer ${
          isPlaying
            ? "bg-[#5A1722] text-[#F3E8D0] border-[#A8895B] shadow-[0_2px_12px_rgba(90,23,34,0.4)]"
            : "bg-[#F3E8D0]/90 text-[#3A2922] border-[#A8895B]/50 hover:bg-[#F3E8D0]"
        }`}
        aria-label={isPlaying ? "Mute music box" : "Play romantic music box melody"}
        title={isPlaying ? "Mute vintage music box" : "Play vintage music box melody"}
      >
        {isPlaying ? (
          <>
            <Music className="w-3.5 h-3.5 text-[#A8895B] animate-spin" style={{ animationDuration: "4s" }} />
            <span className="text-[10px] font-mono tracking-wider uppercase hidden sm:inline">
              Music Box Playing
            </span>
            <Volume2 className="w-4 h-4 text-[#F3E8D0]" />
          </>
        ) : (
          <>
            <Music className="w-3.5 h-3.5 text-[#5A1722]" />
            <span className="text-[10px] font-mono tracking-wider uppercase hidden sm:inline">
              Music Box
            </span>
            <VolumeX className="w-4 h-4 text-[#3A2922]/70 group-hover:text-[#5A1722]" />
          </>
        )}

        {/* Small tooltip hint if user hasn't clicked yet */}
        {!hasInteracted && !isPlaying && (
          <span className="absolute -bottom-8 right-0 bg-[#3B0D16] text-[#F3E8D0] text-[9px] font-mono py-0.5 px-2 rounded-xs whitespace-nowrap shadow-xs pointer-events-none opacity-80">
            ♫ Tap for melody
          </span>
        )}
      </button>
    </div>
  );
};
