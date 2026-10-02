"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const StampBackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-5 z-40">
      <button
        onClick={scrollToTop}
        className="group relative flex flex-col items-center justify-center w-14 h-16 bg-[#F3E8D0] border-2 border-dashed border-[#A8895B] shadow-[2px_4px_12px_rgba(0,0,0,0.25)] hover:border-[#5A1722] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 p-1 cursor-pointer"
        aria-label="Back to top vintage stamp"
        title="Scroll to top"
      >
        {/* Inner stamp frame */}
        <div className="w-full h-full border border-[#A8895B]/50 flex flex-col items-center justify-between p-1 bg-[#E8D8BE]/40">
          <span className="text-[8px] font-mono tracking-widest text-[#5A1722] uppercase">
            POST
          </span>
          <ArrowUp className="w-4 h-4 text-[#5A1722] group-hover:-translate-y-0.5 transition-transform" />
          <span className="text-[7.5px] font-mono text-[#3A2922]/70">
            TOP
          </span>
        </div>
      </button>
    </div>
  );
};
