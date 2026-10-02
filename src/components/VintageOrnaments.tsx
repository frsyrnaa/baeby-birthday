import React from "react";

// Antique Corner Ornament for Parchment Cards
export const CornerFlourish: React.FC<{
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}> = ({ className = "w-10 h-10 text-[#A8895B]", position = "top-left" }) => {
  const rotationClass = {
    "top-left": "",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position];

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${rotationClass} ${className} pointer-events-none select-none`}
    >
      {/* Delicate vintage engraved corner flourish */}
      <path
        d="M3 3H24M3 3V24M6 6H18M6 6V18"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="3" cy="3" r="2" fill="currentColor" />
      <path
        d="M9 9C9 15 15 21 21 21C27 21 33 15 33 9"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeDasharray="1.5 1.5"
      />
      <path
        d="M9 9C15 9 21 15 21 21C21 27 15 33 9 33"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeDasharray="1.5 1.5"
      />
      <circle cx="21" cy="21" r="1.5" fill="currentColor" />
      <path
        d="M3 24C8 23 14 18 16 13"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M24 3C23 8 18 14 13 16"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  );
};

// Vintage Botanical Laurel / Vine Divider
export const BotanicalDivider: React.FC<{ className?: string }> = ({
  className = "w-full max-w-xs h-6 text-[#A8895B]",
}) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#A8895B]/60 to-[#A8895B]" />
      <svg
        viewBox="0 0 64 24"
        fill="currentColor"
        className="w-12 h-5 text-[#A8895B] flex-shrink-0"
      >
        {/* Symmetrical olive / rose leaves */}
        <path d="M32 12C32 12 30 7 24 8C19 9 18 13 22 14C26 15 30 13 32 12Z" opacity="0.85" />
        <path d="M32 12C32 12 34 7 40 8C45 9 46 13 42 14C38 15 34 13 32 12Z" opacity="0.85" />
        <path d="M32 12C32 12 28 17 22 16C17 15 17 11 21 10C25 9 30 11 32 12Z" opacity="0.85" />
        <path d="M32 12C32 12 36 17 42 16C47 15 47 11 43 10C39 9 34 11 32 12Z" opacity="0.85" />
        <circle cx="32" cy="12" r="2.5" />
        <circle cx="16" cy="12" r="1.5" opacity="0.7" />
        <circle cx="48" cy="12" r="1.5" opacity="0.7" />
        <path d="M8 12H14M50 12H56" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#A8895B]/60 to-[#A8895B]" />
    </div>
  );
};

// Wax Seal Monogram Component
export const WaxSealStamp: React.FC<{
  size?: number;
  letter?: string;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}> = ({ size = 80, letter = "B", className = "", onClick, interactive = true }) => {
  return (
    <div
      onClick={onClick}
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`relative rounded-full select-none cursor-pointer group transition-transform duration-300 ${
        interactive ? "hover:scale-105 active:scale-95" : ""
      } ${className}`}
      title="Antique Wax Seal"
    >
      {/* Outer irregular dripping wax edge */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(58,13,22,0.45)] transition-all duration-300 group-hover:drop-shadow-[0_6px_16px_rgba(90,23,34,0.6)]"
      >
        <defs>
          <radialGradient id="waxGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#7E2231" />
            <stop offset="55%" stopColor="#5A1722" />
            <stop offset="85%" stopColor="#3B0D16" />
            <stop offset="100%" stopColor="#25050C" />
          </radialGradient>
          <filter id="waxTexture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0" />
            <feComposite in2="SourceGraphic" in="gl" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>
        </defs>

        {/* Organic irregular wax perimeter */}
        <path
          d="M 50 4 
             C 65 3, 76 10, 84 18 
             C 93 27, 98 40, 96 52 
             C 94 66, 88 78, 77 86 
             C 67 94, 53 97, 40 95 
             C 27 93, 14 87, 8 76 
             C 2 64, 3 50, 6 38 
             C 9 24, 18 13, 31 7 
             C 38 4, 44 4, 50 4 Z"
          fill="url(#waxGrad)"
        />

        {/* Inner pressed circle ring with embossed border */}
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="none"
          stroke="#3B0D16"
          strokeWidth="3.5"
          opacity="0.85"
        />
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="#A8895B"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.75"
        />

        {/* Tiny antique botanical ring wreath */}
        <circle
          cx="50"
          cy="50"
          r="29"
          fill="none"
          stroke="#25050C"
          strokeWidth="1.2"
          opacity="0.4"
        />

        {/* Pressed Monogram Letter with embossed bevel */}
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fontSize="30"
          fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
          fontWeight="bold"
          fontStyle="italic"
          fill="#F3E8D0"
          opacity="0.92"
          style={{
            textShadow: "1px 1px 2px #25050C, -0.5px -0.5px 1px rgba(255,255,255,0.25)",
          }}
        >
          {letter}
        </text>

        {/* Subtle gold dust flecks */}
        <circle cx="34" cy="30" r="0.8" fill="#F3E8D0" opacity="0.6" />
        <circle cx="68" cy="42" r="1.1" fill="#A8895B" opacity="0.8" />
        <circle cx="42" cy="74" r="0.9" fill="#A8895B" opacity="0.7" />
        <circle cx="62" cy="68" r="0.7" fill="#F3E8D0" opacity="0.5" />
      </svg>
    </div>
  );
};

// Vintage Postmark Stamp (Circular cancel mark)
export const VintagePostmark: React.FC<{
  city?: string;
  date?: string;
  className?: string;
}> = ({ city = "BOGOR", date = "04.10.26", className = "w-24 h-24 text-[#5A1722]/55" }) => {
  return (
    <div className={`relative select-none pointer-events-none ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current">
        {/* Double circular cancellation frame */}
        <circle cx="50" cy="50" r="46" strokeWidth="1.6" strokeDasharray="6 2" opacity="0.8" />
        <circle cx="50" cy="50" r="41" strokeWidth="1" opacity="0.6" />

        {/* Curved text path */}
        <path
          id="postmarkCircle"
          d="M 18,50 A 32,32 0 1,1 82,50"
          fill="none"
          stroke="none"
        />
        <text fontSize="7.5" letterSpacing="2.5" fill="currentColor" fontWeight="600">
          <textPath href="#postmarkCircle" startOffset="50%" textAnchor="middle">
            POSTE · {city}
          </textPath>
        </text>

        {/* Center date and cancellation lines */}
        <line x1="20" y1="42" x2="80" y2="42" strokeWidth="0.8" strokeDasharray="3 1" />
        <text
          x="50"
          y="53"
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="bold"
          letterSpacing="1.5"
          fill="currentColor"
        >
          {date}
        </text>
        <line x1="20" y1="58" x2="80" y2="58" strokeWidth="0.8" strokeDasharray="3 1" />

        {/* Wavy cancellation bars */}
        <path
          d="M 72 38 Q 80 40 88 38 T 100 38"
          strokeWidth="1"
          opacity="0.5"
        />
        <path
          d="M 72 48 Q 80 50 88 48 T 100 48"
          strokeWidth="1"
          opacity="0.5"
        />
        <path
          d="M 72 58 Q 80 60 88 58 T 100 58"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

// Vintage Serrated Postage Stamp Border / Graphic
export const PostageStamp: React.FC<{
  label: string;
  year?: string;
  icon?: React.ReactNode;
  className?: string;
}> = ({ label, year = "1926", icon, className = "" }) => {
  return (
    <div
      className={`relative p-2 bg-[#F3E8D0] border-2 border-dashed border-[#A8895B]/70 shadow-[2px_3px_8px_rgba(58,41,34,0.15)] flex flex-col items-center justify-center text-center ${className}`}
    >
      <div className="w-full h-full border border-[#A8895B]/40 p-2 flex flex-col items-center justify-between">
        <span className="text-[9px] tracking-widest text-[#5A1722] font-serif uppercase">
          {label}
        </span>
        <div className="my-1 text-[#5A1722]">{icon}</div>
        <span className="text-[8px] tracking-wider text-[#3A2922]/70 font-mono">
          {year}
        </span>
      </div>
    </div>
  );
};
