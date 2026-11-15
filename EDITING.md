# Customer Editing Guide — Ariana & Aaron Wedding Invitation (Second Link)

This template is a luxury royal wedding invitation (wax-seal-royale) designed for the Wedding Celebration of **Ariana & Aaron** on **January 16, 2027** at **Kovilakom Resort, Muhamma, Kerala, India**.

It features an interactive wax-seal envelope overlay with couple monogram (`A&A`), opening animation video, ambient background video, classical soundtrack, live countdown timer, Wedding Celebration card, Kovilakom Resort venue card with Google Maps & Calendar integration, dress code etiquette, couple photo portrait, and an affectionate closing message.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ `editable/wedding-data.js`

### Couple Information
Edit `couple` in `editable/wedding-data.js`:
- `bride` & `groom`: Names (`"Ariana"`, `"Aaron"`)
- `monogram`: Couple monogram (`"A&A"`)
- `subtitle`: Wedding quote with translation

### Wedding Date & Welcome Message
Edit `wedding` in `editable/wedding-data.js`:
- `eventName`: Header badge text (`"A&A"`)
- `dateLabel`: Date string for hero banner (`"January 16, 2027"`)
- `dateISO`: Event start ISO timestamp with timezone offset (`"2027-01-16T19:00:00+05:30"` for IST). Drives live countdown timer and Google Calendar link.
- `invitationNote`: Main welcome message text

### Wedding Celebration
Edit `celebration` in `editable/wedding-data.js`:
- `title`: `"Wedding Celebration"`
- `date`: `"Saturday, January 16, 2027"`
- `time`: `"7:00 PM – 9:00 PM"`
- `description`: `"An evening of love, laughter, celebration, and togetherness."`

### Venue & Location
Edit `venue` in `editable/wedding-data.js`:
- `name`: Resort name (`"Kovilakom Resort"`)
- `address`: Location (`"Muhamma, Kerala, India"`)
- `mapsUrl`: Google Maps direction URL

### Dress Code
Edit `details` in `editable/wedding-data.js`:
- `dressCode`: Dress code guideline (`"We kindly ask our guests to avoid wearing white and red."`)

### Closing Message
Edit `closing` in `editable/wedding-data.js`:
- `message`: `"We look forward to celebrating this special day with you!"`
- `salutation`: `"With love,"`
- `couple`: `"Ariana & Aaron"`

### Media & Assets
Replace files directly in `editable/assets/` or update `media` in `wedding-data.js`:
- `photo1`: Couple photograph (`editable/assets/photo1.jpg`)
- `overlayImage`: Wax-seal envelope graphic
- `sealVideo`: Wax-seal breaking/opening MP4
- `heroVideo`: Ambient background video
- `audio`: Background soundtrack

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and replace media in `editable/assets/`.
2. Do not modify bundled Tilda core scripts in `js/` or styling in `css/tilda-*`.
3. Custom styling belongs in `css/custom.css`.
4. Keep ISO date strings with proper timezone offsets (`+05:30` for IST).
5. Validate changes with `node --check editable/wedding-data.js`.
