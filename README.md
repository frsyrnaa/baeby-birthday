# Baeby's Birthday Date — Vintage Interactive Digital Invitation

A romantic, mobile-first, classic European vintage digital birthday invitation website designed for a private birthday date on **Sunday, 4 October 2026**.

## ✨ Design & Features

- **Opening Envelope Experience**: Fullscreen antique postal envelope with custom deep red-wine wax seal, postmarks, and smooth opening 3D transition.
- **Antique Letter Aesthetic**: Warm parchment (`#E8D8BE`), antique cream (`#F3E8D0`), deep wine accents (`#5A1722`), muted brass gold (`#A8895B`), and espresso ink (`#3A2922`).
- **Interactive Itinerary (01 to 06)**:
  - `01` Home Birthday Celebration (08.00 — 09.00)
  - `02` Grab a Cake — MAKO (09.30 — 10.00)
  - `03` Photomatics — Botani Square (10.30 — 11.30)
  - `04` Lunch — Bakso Surya Kencana (12.00 — 13.30)
  - `05` Afternoon Date — CAFE TBD (14.00 — 17.00)
  - `06` Going Home (17.00 — END)
- **Dress Code Swatches**: Vintage ticket format featuring 7 interactive paint swatches: Chocolate, Mocha, Coffee, Caramel, Beige, Cream, and Khaki.
- **Romantic Love Letter**: Heartfelt letter section with personal quote lines and closing.
- **Hidden Easter Egg**: Tapping the tiny antique star ornament reveals a secret love note (`"you found a little secret ♡"`).
- **Vintage Music Box**: Pure Web Audio API synthesized nostalgic music box melody (strictly off by default, optional toggle button).
- **Calendar Integration**: Instant "Save to Calendar" (.ics export) and Google Calendar link for Sunday, 4 October 2026.
- **Vintage Postage Stamp Back-to-Top**: Floating antique serrated stamp for smooth return to the top.

## 🛠️ Editing Content

All event details, itinerary stops, and messages are conveniently located in a single file:
👉 [`src/data/invitationData.ts`](file:///c:/Users/farsy/Downloads/Project%20Baeby/src/data/invitationData.ts)

## 🚀 Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your mobile or desktop browser.

## 🚢 Deploying to Vercel

The application is completely self-contained with no environment variables or backend required:

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the repository in [Vercel](https://vercel.com).
3. Deploy! The preset framework will automatically detect Next.js.
