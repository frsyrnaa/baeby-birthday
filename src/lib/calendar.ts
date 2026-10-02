/**
 * Utilities to generate iCalendar (.ics) and Google Calendar links for Baeby's Birthday Date
 */

export function generateIcsFile(): void {
  const title = "Baeby's Birthday Date 🎂✨";
  const description =
    "A private birthday date for my Baeby: surprise at home, cake at MAKO, photomatics at Botani Square, Bakso Surya Kencana, cozy afternoon cafe date, and cherished memories.";
  const location = "Bogor, Indonesia";
  
  // Sunday, October 4, 2026 from 08:00 to 20:00 (WIB / UTC+7 => 01:00 UTC to 13:00 UTC)
  const startDate = "20261004T010000Z";
  const endDate = "20261004T130000Z";
  const now = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Baeby's Birthday//Vintage Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:baeby-birthday-20261004@vintage-invitation`,
    `DTSTAMP:${now}`,
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "baeby-birthday-date.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

export function getGoogleCalendarUrl(): string {
  const title = encodeURIComponent("Baeby's Birthday Date 🎂✨");
  const details = encodeURIComponent(
    "A private birthday date for my Baeby: surprise at home, cake at MAKO, photobox at Botani Square, Bakso Surya Kencana, cozy afternoon cafe date, and sweet memories."
  );
  const location = encodeURIComponent("Bogor, Indonesia");
  // 2026-10-04 08:00 WIB (01:00 UTC) to 20:00 WIB (13:00 UTC)
  const dates = "20261004T010000Z/20261004T130000Z";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}
