"use client";

import React, { useState, useEffect } from "react";
import { BotanicalDivider, CornerFlourish, WaxSealStamp } from "./VintageOrnaments";
import { invitationData } from "@/data/invitationData";
import { generateIcsFile, getGoogleCalendarUrl } from "@/lib/calendar";
import { Calendar, CalendarCheck, Clock, MapPin } from "lucide-react";

export const HeaderSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-10-04T08:00:00+07:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative pt-8 pb-10 px-4 sm:px-8 text-center border-b border-[#A8895B]/30">
      {/* Antique Corner Flourishes */}
      <CornerFlourish position="top-left" className="absolute top-2 left-2 w-8 h-8 sm:w-10 sm:h-10 text-[#A8895B]/70" />
      <CornerFlourish position="top-right" className="absolute top-2 right-2 w-8 h-8 sm:w-10 sm:h-10 text-[#A8895B]/70" />

      {/* Top Monogram Seal Crest */}
      <div className="flex justify-center mb-5">
        <WaxSealStamp size={64} letter="B" interactive={false} />
      </div>

      {/* Date Eyebrow Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#A8895B]/40 rounded-full bg-[#F3E8D0] text-[#5A1722] text-[10px] sm:text-xs tracking-[0.25em] font-mono uppercase mb-4">
        <Calendar className="w-3 h-3 text-[#A8895B]" />
        <span>SUNDAY · 04 OCTOBER 2026</span>
      </div>

      {/* Main Title */}
      <h1
        className="text-4xl sm:text-5xl md:text-6xl text-[#3B0D16] font-serif font-bold tracking-tight uppercase leading-[1.1] mb-3"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        BAEBY&apos;S
        <span className="block text-3xl sm:text-4xl md:text-5xl text-[#5A1722] font-normal italic tracking-wide mt-1">
          BIRTHDAY DATE
        </span>
      </h1>

      {/* Subtitle in Italic Serif */}
      <p
        className="text-base sm:text-lg text-[#3A2922]/85 italic my-3"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        &ldquo;{invitationData.event.subtitle}&rdquo;
      </p>

      {/* Botanical Laurel Divider */}
      <div className="my-5 flex justify-center">
        <BotanicalDivider className="w-48 sm:w-64" />
      </div>

      {/* Location / Atmosphere Note */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#3A2922]/70 font-mono tracking-wider mb-6">
        <span className="inline-flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-[#5A1722]" />
          {invitationData.event.city}
        </span>
        <span>•</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[#A8895B]" />
          Full Day Celebration
        </span>
      </div>

      {/* Antique Countdown Clock */}
      <div className="max-w-xs sm:max-w-sm mx-auto p-3.5 bg-[#E8D8BE]/50 border border-[#A8895B]/40 rounded-sm mb-6">
        <div className="text-[10px] tracking-[0.2em] uppercase text-[#5A1722] font-mono mb-2">
          UNTIL OUR SPECIAL DAY
        </div>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="p-2 bg-[#F3E8D0] border border-[#A8895B]/30 rounded-xs">
            <span className="block text-lg sm:text-xl font-bold text-[#3B0D16] font-mono">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-[9px] text-[#3A2922]/70 uppercase tracking-wider">Days</span>
          </div>
          <div className="p-2 bg-[#F3E8D0] border border-[#A8895B]/30 rounded-xs">
            <span className="block text-lg sm:text-xl font-bold text-[#3B0D16] font-mono">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-[9px] text-[#3A2922]/70 uppercase tracking-wider">Hours</span>
          </div>
          <div className="p-2 bg-[#F3E8D0] border border-[#A8895B]/30 rounded-xs">
            <span className="block text-lg sm:text-xl font-bold text-[#3B0D16] font-mono">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-[9px] text-[#3A2922]/70 uppercase tracking-wider">Mins</span>
          </div>
          <div className="p-2 bg-[#F3E8D0] border border-[#A8895B]/30 rounded-xs">
            <span className="block text-lg sm:text-xl font-bold text-[#5A1722] font-mono">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-[9px] text-[#3A2922]/70 uppercase tracking-wider">Secs</span>
          </div>
        </div>
      </div>

      {/* Calendar Actions */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <button
          onClick={generateIcsFile}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-[#A8895B] bg-[#F3E8D0] hover:bg-[#E8D8BE] text-[#3A2922] text-xs font-mono tracking-wider rounded-xs transition-colors cursor-pointer"
          title="Download Apple / Outlook .ics calendar event"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-[#5A1722]" />
          <span>Save to Calendar (.ics)</span>
        </button>

        <a
          href={getGoogleCalendarUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-[#A8895B]/50 bg-[#E8D8BE]/70 hover:bg-[#E8D8BE] text-[#3A2922] text-xs font-mono tracking-wider rounded-xs transition-colors cursor-pointer"
        >
          <span>Google Calendar</span>
        </a>
      </div>
    </header>
  );
};
