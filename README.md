# Jakub Ondreas — Personal Website & Digital Autobiography

A premium, modern, and responsive personal digital home and evolving autobiography for **Jakub Ondreas** (also published as **Jakub Ondreáš**).

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Resend** server-side email integration.

---

## 🌟 Table of Contents
1. [Overview & Design Principles](#overview--design-principles)
2. [Current Status & Verification Standards](#current-status--verification-standards)
3. [Facts Requiring Jakub's Final Confirmation](#facts-requiring-jakubs-final-confirmation)
4. [How to Replace Illustrative Images with Personal Photos](#how-to-replace-illustrative-images-with-personal-photos)
5. [How to Update Content & Add New Milestones](#how-to-update-content--add-new-milestones)
6. [Resend Server-Side Configuration](#resend-server-side-configuration)
7. [Running & Deploying the Project](#running--deploying-the-project)
8. [Photo References & Open-Source Licenses](#photo-references--open-source-licenses)

---

## 🏔️ 1. Overview & Design Principles

This website is an **authentic digital autobiography** designed around editorial adventure documentary aesthetics:
- **Alpine Palette**: Off-white, deep charcoal, slate, and muted forest green (`#3D5641`).
- **Restrained Typography**: Editorial serif headlines with clean, modern sans-serif body typography.
- **Fact Integrity**: Publicly sourced facts, direct first-person statements, and pending documentation are clearly color-coded with badges throughout the UI.
- **Privacy & Safety First**: Sensitive personal details (e.g. host family names, high school name, private home address) are strictly protected.
- **No Unverified Records**: Explicitly avoids sensationalist or unverified claims such as "youngest in the world".

---

## 🛡️ 2. Current Status & Verification Standards

Every milestone, expedition, and sport card is tagged with a verification category:
- 🟢 **Public Record**: Verified through published journalism and national broadcasts (*Tulení pásy*, *STVR Slovak Television*, *Slovak Athletics Federation*).
- 🔵 **Direct Statement**: Supplied directly by Jakub Ondreas (e.g., first-person TMB quote, Rotary Youth Exchange reflection).
- 🟡 **Awaiting Confirmation**: Held as a clearly marked editable placeholder awaiting official document upload.

---

## 📋 3. Facts Requiring Jakub's Final Confirmation

Before official public release, the following items should be confirmed or uploaded by Jakub:

1. **Slovak Athletics Championship Format & Results**:
   - *Current Status*: Represented as an editable placeholder for the 200m discipline and relay with **AO TJ Slávia STU Bratislava**.
   - *Action Needed*: Confirm official championship tournament name, year, age category (*starší žiaci* / *dorastenci*), relay leg, and medal placement from [statistika.atletika.sk](https://statistika.atletika.sk/).

2. **Tour du Mont Blanc Exact 2026 GPS Track**:
   - *Current Status*: Displayed using the open Wikimedia Commons route map illustration (by Hiiker paul, CC BY-SA 4.0).
   - *Action Needed*: Provide the raw exported GPX / FIT file from sports watch or mobile app to render the exact 2026 path.

3. **Original Personal Photography**:
   - *Current Status*: Displaying openly licensed Wikimedia Commons illustrative scenery assets with full attribution.
   - *Action Needed*: Replace with Jakub and Ondrej's personal photographs from the Mont Blanc ski descent and the TMB trek.

---

## 📷 4. How to Replace Illustrative Images with Personal Photos

All photo references are centralized in `src/data/content.ts` under `PHOTO_CREDITS`.

### Steps:
1. Place your photo inside the `public/images/` folder (e.g., `public/images/montblanc-summit.jpg`).
2. Open `src/data/content.ts` in your code editor.
3. Update the `imageUrl` property:
   ```ts
   export const PHOTO_CREDITS: Record<string, PhotoCredit> = {
     chamonix: {
       id: 'chamonix',
       title: 'Mont Blanc Summit Ski Descent',
       creator: 'Jakub Ondreas',
       imageUrl: '/images/montblanc-summit.jpg', // <-- your personal photo
       role: 'Summit descent personal archive',
       attributionNote: 'Original personal photography by Jakub Ondreas (2025).',
       ...
     }
   }
   ```
4. Run `npm run build` to preview your changes. The entire layout and modal attribution will update automatically.

---

## ✍️ 5. How to Update Content & Add New Milestones

All website text, quotes, milestones, and sports cards are maintained in a single, well-structured file:
📁 **`src/data/content.ts`**

- **Update Site Intro & Tagline**: Edit `SITE_METADATA`.
- **Add a New Expedition or Stage**: Edit `MONT_BLANC_EXPEDITION` or `TMB_EXPEDITION.stages`.
- **Add a New Autobiography Chapter**: Add an entry to the `AUTOBIOGRAPHY_CHAPTERS` array.
- **Add a New Article or Media Interview**: Add an entry to the `PUBLICATIONS_DATA` array.
- **Add an Athletic Result**: Update `ATHLETICS_DATA.statusBadge` and provide the SAZ certificate details.

---

## ✉️ 6. Resend Server-Side Configuration

The contact form uses a secure server-side endpoint (`/api/contact/route.ts`).
**No API keys or destination email addresses are ever exposed to the browser client.**

### Environment Variables
Create a `.env.local` file in the root directory:
```bash
# Resend API Key (from https://resend.com)
RESEND_API_KEY=re_your_api_key_here

# Destination mailbox where inquiries will be delivered
CONTACT_EMAIL=your.email@example.com
```

### Safety & Diagnostic Behavior
- **If `RESEND_API_KEY` is not set**: The API validates the form input and returns a transparent configuration notice (`CONFIG_PENDING`) to the user. It **never pretends an email was sent** if the key is missing.
- **Honeypot Anti-Spam**: A hidden `website` input field traps automated spam bots silently.
- **Rate Limiting**: Built-in in-memory rate limiting prevents abuse (max 4 requests per minute per IP).

### Cloudflare Pages / Workers Deployment
This project uses the official `@opennextjs/cloudflare` adapter compatible with Next.js 15.5.29+ and React 19:
- **Build command**: `npm run build:cloudflare` (or `npx opennextjs-cloudflare build`)
- **Deploy command**: `npm run deploy` (or `npx wrangler deploy`)
- **OpenNext configuration**: `open-next.config.ts`
- **Wrangler configuration**: `wrangler.jsonc`

In the Cloudflare dashboard:
1. Go to **Settings** ➔ **Environment Variables**.
2. Add `RESEND_API_KEY` (as an encrypted Secret).
3. Add `CONTACT_EMAIL` with your personal email.

---

## 🚀 7. Running & Deploying the Project

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 📜 8. Photo References & Open-Source Licenses

The temporary illustrative landscape references used in this project are openly licensed via Wikimedia Commons:

| Subject | Creator | License | Wikimedia Commons Source |
|---|---|---|---|
| **Chamonix and Mont Blanc valley** | Jef132 | CC BY-SA 3.0 | [View Source](https://commons.wikimedia.org/wiki/File:Chamonix-Mont-Blanc.jpg) |
| **GR5 / Tour du Pays du Mont Blanc trail** | Guilhem Vellut | CC BY 2.0 | [View Source](https://commons.wikimedia.org/wiki/File:GR5_-_GRP_Tour_du_Pays_du_Mont_Blanc_(51051862863).jpg) |
| **Mont Blanc north face** | Christian | CC BY-SA 3.0 | [View Source](https://commons.wikimedia.org/wiki/File:Mont_Blanc_Face_N.jpg) |
| **Tour du Mont Blanc route map** | Hiiker paul | CC BY-SA 4.0 | [View Source](https://commons.wikimedia.org/wiki/File:Tour_du_Mont_blanc_Map.jpg) |

*All illustrative assets are attributed in the website's dedicated **Photo Credits Modal** and **Fact Verification Drawer**.*
