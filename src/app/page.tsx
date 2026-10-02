"use client";

import React, { useState } from "react";
import { EnvelopeModal } from "@/components/EnvelopeModal";
import { InvitationCard } from "@/components/InvitationCard";
import { AudioPlayer } from "@/components/AudioPlayer";
import { StampBackToTop } from "@/components/StampBackToTop";

export default function Home() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full px-3 py-4 sm:p-6 md:p-8 flex flex-col items-center justify-start overflow-x-hidden">
      {/* Ambient European Desk Background Lighting */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(90,23,34,0.18)_0%,_rgba(42,31,27,0.95)_70%)] -z-10" />

      {/* Floating Audio Player Toggle */}
      <AudioPlayer />

      {/* Fullscreen Envelope Opening Experience */}
      {!isEnvelopeOpen && (
        <EnvelopeModal
          isOpen={!isEnvelopeOpen}
          onOpenInvitation={() => setIsEnvelopeOpen(true)}
        />
      )}

      {/* Main Vintage Letter Invitation (Rendered when opened) */}
      <div
        className={`w-full transition-opacity duration-1000 ${
          isEnvelopeOpen ? "opacity-100 animate-fade-in" : "opacity-0 pointer-events-none"
        }`}
      >
        <InvitationCard onReopenEnvelope={() => setIsEnvelopeOpen(false)} />
      </div>

      {/* Back to top stamp */}
      {isEnvelopeOpen && <StampBackToTop />}
    </main>
  );
}
