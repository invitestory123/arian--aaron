/**
 * wedding-data.js — Customer-facing editable data layer for wax-seal-royale
 * Couple: Ariana & Aaron
 * Wedding Date: January 16, 2027
 * Venue: Kovilakom Resort, Muhamma, Kerala, India
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Ariana",
    groom: "Aaron",
    monogram: "A&A",
    order: "bride-first",
    quote: {
      spanish: "“Dos almas, un solo corazón”",
      english: "Two souls, one heart.",
    },
    subtitle: "<div class='welcome-quote-script'>Dos almas, un solo corazón</div><div class='welcome-quote-trans'>Two souls, one heart.</div>",
  },

  wedding: {
    eventName: "A&A",
    dateLabel: "January 16, 2027",
    dateISO: "2027-01-16T15:30:00+05:30",
    scheduleTitle: "Schedule of Events",
    invitationNote: "<div class='welcome-message-heading'>Dear Friends and Family,</div><div class='welcome-message-body'>With hearts full of love and happiness, we invite you to join us as we celebrate the beginning of our forever. Your presence would make our special day even more meaningful.</div>",
  },

  celebration: {
    title: "Wedding Celebration",
    date: "Saturday, January 16, 2027",
    time: "7:00 PM – 9:00 PM",
    description: "An evening of love, laughter, celebration, and togetherness.",
  },

  schedule: [
    { title: "Guest Arrival", time: "3:30 PM" },
    { title: "Wedding Ceremony", time: "4:30 PM" },
    { title: "Cocktail Hour", time: "5:30 PM" },
    { title: "Reception", time: "7:00 PM" },
    { title: "Dinner", time: "7:30 PM" },
    { title: "Party & Dance", time: "8:00 PM" },
  ],

  venue: {
    name: "Kovilakom Resort",
    address: "Muhamma, Kerala, India",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kovilakom+Resort+Muhamma+Kerala+India",
  },

  details: {
    dressCode: "We kindly ask our guests to avoid wearing white and red.",
  },

  closing: {
    message: "We look forward to celebrating this special day with you!",
    salutation: "With love,",
    couple: "Ariana & Aaron",
  },

  media: {
    photo1: "./editable/assets/photo1.jpg",
    overlayImage: "./editable/assets/ChatGPT Image Jun 23, 2026, 04_40_29 PM.png",
    sealVideo: "./editable/assets/1782224012851.mp4",
    heroVideo: "./editable/assets/Swans2.mov",
    audio: "./editable/assets/Einaudi_ Divenire (1) (1).mp3",
  },
};
