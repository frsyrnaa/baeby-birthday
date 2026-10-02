export interface TimelineItem {
  id: string;
  step: string;
  time: string;
  title: string;
  location?: string;
  description: string;
  details?: string;
  iconName: 'cake' | 'shopping-bag' | 'camera' | 'utensils' | 'coffee' | 'heart';
}

export interface SwatchItem {
  name: string;
  hex: string;
  description: string;
}

export interface InvitationData {
  event: {
    title: string;
    recipient: string;
    fullDate: string;
    dayOfWeek: string;
    dateFormatted: string;
    dateISO: string; // for calendar and countdown
    city: string;
    theme: string;
    subtitle: string;
  };
  envelope: {
    badge: string;
    recipientText: string;
    dateText: string;
    openButtonText: string;
    postmarkLocation: string;
    postmarkNumber: string;
  };
  timeline: TimelineItem[];
  dressCode: {
    title: string;
    subtitle: string;
    note: string;
    swatches: SwatchItem[];
  };
  letter: {
    heading: string;
    quoteLines: string[];
    closing: string;
    signature: string;
  };
  easterEgg: {
    title: string;
    message: string;
  };
}

export const invitationData: InvitationData = {
  event: {
    title: "Baeby's Birthday Date",
    recipient: "Baeby",
    fullDate: "Sunday, 4 October 2026",
    dayOfWeek: "Sunday",
    dateFormatted: "04 OCTOBER 2026",
    dateISO: "2026-10-04T08:00:00+07:00",
    city: "Bogor, Indonesia",
    theme: "Vintage Romance × Old Paper × Red Wine × Classic European",
    subtitle: "a little day made just for you.",
  },
  envelope: {
    badge: "SPECIAL DELIVERY · CONFIDENTIAL",
    recipientText: "FOR MY BAEBY",
    dateText: "04 · 10 · 2026",
    openButtonText: "OPEN THE INVITATION",
    postmarkLocation: "POSTE RESTANTE · BOGOR",
    postmarkNumber: "№ 1004-2026",
  },
  timeline: [
    {
      id: "01",
      step: "01",
      time: "08.00 — 09.00",
      title: "HOME BIRTHDAY CELEBRATION",
      description: "Starting the day with a little birthday surprise at home.",
      details: "Cake, candles, presents, birthday wishes and a little time together.",
      iconName: "cake",
    },
    {
      id: "02",
      step: "02",
      time: "09.30 — 10.00",
      title: "GRAB A CAKE",
      location: "MAKO",
      description: "Picking up the cake for our little photobox moment.",
      iconName: "shopping-bag",
    },
    {
      id: "03",
      step: "03",
      time: "10.30 — 11.30",
      title: "PHOTOMATICS",
      location: "BOTANI SQUARE",
      description: "Birthday photobox with cake.\nLet's make some memories.",
      iconName: "camera",
    },
    {
      id: "04",
      step: "04",
      time: "12.00 — 13.30",
      title: "LUNCH",
      location: "BAKSO SURYA KENCANA",
      description: "Lunch, stories and a little birthday date.",
      iconName: "utensils",
    },
    {
      id: "05",
      step: "05",
      time: "14.00 — 17.00",
      title: "AFTERNOON DATE",
      location: "CAFE — TBD",
      description: "Coffee, conversations, photographs and quality time.",
      details: "A cozy nook for quiet laughter and sweet stories.",
      iconName: "coffee",
    },
    {
      id: "06",
      step: "06",
      time: "17.00 — END",
      title: "GOING HOME",
      description: "Ending the day with a heart full of memories.",
      details: "Under the twilight sky, taking the warmth of this day home.",
      iconName: "heart",
    },
  ],
  dressCode: {
    title: "DRESS CODE",
    subtitle: "BROWNISH · EARTH TONES",
    note: "Wear your warmest earth tones, comfortable autumn silhouettes, or soft brownish hues.",
    swatches: [
      { name: "Chocolate", hex: "#3D2314", description: "Deep roasted espresso tone" },
      { name: "Mocha", hex: "#684A3B", description: "Rich velvety cocoa shade" },
      { name: "Coffee", hex: "#4B3621", description: "Warm brewed bean nuance" },
      { name: "Caramel", hex: "#A26E38", description: "Sun-drenched golden toffee" },
      { name: "Beige", hex: "#D8C4A9", description: "Soft linen antique paper" },
      { name: "Cream", hex: "#F5EEDB", description: "Gentle ivory parchment" },
      { name: "Khaki", hex: "#B7A482", description: "Muted botanical earth shade" },
    ],
  },
  letter: {
    heading: "FOR BAEBY",
    quoteLines: [
      "one day, one birthday,",
      "and a whole lot of little moments",
      "to remember.",
    ],
    closing: "happy birthday, baeby.",
    signature: "Forever yours,",
  },
  easterEgg: {
    title: "you found a little secret ♡",
    message: "Out of 8 billion people on this earth, celebrating this day with you is my absolute favorite privilege. I love you endlessly, my Baeby.",
  },
};
