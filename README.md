# Jakub Ondreas — Personal Website & Digital Autobiography

A world-class, modern, and distinctive personal digital home and evolving autobiography for **Jakub Ondreas** (also published as **Jakub Ondreáš**).

Art-directed with an editorial aesthetic inspired by **Apple.com**, **Arc'teryx**, and premium outdoor adventure publications (*Alpinist*, *Sidetracked*, *National Geographic Adventure*).

Built with **Next.js 15.5.29 (App Router)**, **React 19**, **Tailwind CSS**, and **OpenNext Cloudflare adapter** with server-side Resend email integration.

---

## 🌟 Table of Contents
1. [Design Direction & Visual Identity](#design-direction--visual-identity)
2. [Curated Photography Archive](#curated-photography-archive)
3. [Fact Verification & Integrity Standards](#fact-verification--integrity-standards)
4. [Facts Awaiting Jakub's Final Confirmation](#facts-awaiting-jakubs-final-confirmation)
5. [Replacing Illustrative Images with Personal Photos](#replacing-illustrative-images-with-personal-photos)
6. [Updating Content & Milestones](#updating-content--milestones)
7. [Contact Form & Cloudflare Resend Integration](#contact-form--cloudflare-resend-integration)
8. [Cloudflare Deployment & Building](#cloudflare-deployment--building)

---

## 🏔️ 1. Design Direction & Visual Identity

### Aesthetic Pillars:
- **Colour Palette**:
  - `carbon-950` (`#07080A`): Foundational pure dark canvas.
  - `carbon-900` (`#0C0E12`): Elevated surface for editorial modules.
  - `carbon-850` (`#11141A`): Card surfaces with subtle border contrast.
  - `stoneLight` (`#E5E7EB`, `#F4F3EF`): Warm off-white editorial typography.
  - `alpine` (`#2E593C`, `#3D734E`): Natural mountain pine accents.
  - `goldAccent` (`#C9A265`): Muted alpine quartz & summit gold highlights.
- **Restrained Typography**:
  - `Manrope` / `Inter`: Ultra-clean, modern geometric sans-serif with tight tracking (`tracking-tight`, `tracking-tighter`).
  - `Playfair Display`: Selected italic accents for key first-person quotations and historical dates.
  - `JetBrains Mono`: Precise chapter markers (`01 // ORIGINS`, `02 // TRAVERSE`) and elevation metrics.
- **Glassmorphic Precision**:
  - Micro-borders (`border-white/[0.08]`, `hover:border-white/[0.2]`).
  - Frosted backdrops (`backdrop-blur-2xl bg-carbon-950/80`).
  - Zero generic neon gradients or visual clutter.

---

## 📷 2. Curated Photography Archive

High-resolution, professionally art-directed photography has been curated from **Unsplash** and **Wikimedia Commons** with full attribution and licensing:

| Section | Subject | Creator | Repository / License | Role |
|---|---|---|---|---|
| **Hero** | High Alpine Massif at Sunset | Kalen Emsley | Unsplash (Free) | Cinematic Hero Backdrop |
| **Mont Blanc 2025** | Ski Mountaineer on Glacial Ridge | Lucas Favre | Unsplash (Free) | Ski Alpinism Ascent Visual |
| **Mont Blanc 2025** | Alpine Crevasses & Séracs | Alberto Restifo | Unsplash (Free) | Grands Mulets Glacier Route |
| **Mont Blanc 2025** | High Alpine Refuge Hut | Dino Reichmuth | Unsplash (Free) | Acclimatization & Refuge |
| **Mont Blanc Reference** | Mont Blanc North Face | Christian | CC BY-SA 3.0 | Mountain Massif Reference |
| **Tour du Mont Blanc** | Chamonix Valley & Peaks | Daniel Frank | Unsplash (Free) | Chamonix Starting Point |
| **Tour du Mont Blanc** | Alpine Singletrack Traverse | Christopher Burns | Unsplash (Free) | 160 km Trek Atmosphere |
| **Tour du Mont Blanc** | Trekkers on High Pass | Kalen Emsley | Unsplash (Free) | Col Ferret Border Crossing |
| **TMB Route Map** | TMB 160 km Circuit Map | Hiiker paul | CC BY-SA 4.0 | Indicative Route Illustration |
| **Athletics** | All-Weather Running Track | Braden Collum | Unsplash (Free) | Club Training Base |
| **Athletics** | Sprinter in Starting Blocks | Andrea Piacquadio | Unsplash (Free) | 200m Sprint Discipline |
| **Athletics** | Relay Baton Exchange | Fitsum Admasu | Unsplash (Free) | Slávia STU Relay Teamwork |
| **Cycling** | Alpine Switchback Climbs | Coen van de Broek | Unsplash (Free) | Mountain Road & Gravel |
| **Cycling** | MTB Ridge Singletrack | Daniel Frank | Unsplash (Free) | Technical Trail Riding |
| **Cycling** | Self-Supported Bikepacker | Patrick Hendry | Unsplash (Free) | Multi-Day Autonomy |
| **Rotary USA** | American Wilderness Landscape | Bailey Zindel | Unsplash (Free) | Transatlantic Natural Spaces |
| **Rotary USA** | American City Golden Hour | Benjamin Davies | Unsplash (Free) | Cultural Discovery & Cities |
| **Rotary USA** | International Students | Chang Duong | Unsplash (Free) | Youth Community & Friendship |

---

## 🛡️ 3. Fact Verification & Integrity Standards

Every milestone, expedition, and sport card is tagged with a transparent verification category:
- 🟢 **Public Record**: Verified through published journalism (*Tulení pásy*, *STVR Slovak Television*, *Slovak Athletics Federation*).
- 🔵 **Direct Statement**: Supplied directly by Jakub Ondreas (e.g. verbatim TMB quote, Rotary Youth Exchange reflection).
- 🟡 **Awaiting Confirmation**: Held as an editable placeholder awaiting official document upload.

**Strict Fact Standard**: This website explicitly avoids sensationalism or unverified claims such as "youngest in the world".

---

## 📋 4. Facts Awaiting Jakub's Final Confirmation

Before official public release, the following items should be confirmed or uploaded by Jakub:

1. **Slovak Athletics Championship Format & Results**:
   - *Current Status*: Represented as an editable placeholder for the 200m discipline and relay with **AO TJ Slávia STU Bratislava**.
   - *Action Needed*: Confirm official championship tournament name, year, age category (*starší žiaci* / *dorastenci*), relay leg, and medal placement from [statistika.atletika.sk](https://statistika.atletika.sk/).

2. **Tour du Mont Blanc Exact 2026 GPS Track**:
   - *Current Status*: Displayed using the open Wikimedia Commons route map illustration (by Hiiker paul, CC BY-SA 4.0).
   - *Action Needed*: Provide the raw exported GPX / FIT file from sports watch or mobile app to render the exact 2026 path.

3. **Original Personal Photography**:
   - *Current Status*: Displaying curated high-resolution photography with full illustrative attribution.
   - *Action Needed*: Replace with Jakub and Ondrej's personal photographs from the Mont Blanc ski descent and the TMB trek.

---

## 📷 5. Replacing Illustrative Images with Personal Photos

All photo references are centralized in `src/data/content.ts` under `PHOTO_CREDITS`.

### Steps:
1. Place your photo inside `public/images/` (e.g. `public/images/montblanc-summit.jpg`).
2. Open `src/data/content.ts` in your code editor.
3. Update the `imageUrl` property of the corresponding credit item:
   ```ts
   hero_montblanc: {
     id: 'hero_montblanc',
     title: 'Mont Blanc Summit Ski Descent',
     creator: 'Jakub Ondreas',
     imageUrl: '/images/montblanc-summit.jpg', // <-- your personal photo
     role: 'Summit descent personal archive',
     ...
   }
   ```
4. Rebuild with `npm run build`. The layout and credit modals will automatically update without layout shifts.

---

## ✉️ 6. Contact Form & Cloudflare Resend Integration

The contact form uses secure server-side endpoints:
- Primary route: `/api/contact`
- Direct Cloudflare send endpoint: `/api/send-email` (with `getCloudflareContext({ async: true })`)

**No API keys or destination email addresses are ever exposed to the client.**

### Environment Variables
Configure these in the Cloudflare dashboard (or in `.env.local` locally):
```bash
# Resend API Key (from https://resend.com)
RESEND_API_KEY=re_your_api_key_here

# Destination mailbox where messages are sent
CONTACT_EMAIL=jakub.ondreas@gmail.com
```

- **If `RESEND_API_KEY` is not set**: The API validates your message successfully and returns a clean, transparent diagnostic notice (`CONFIG_PENDING`) without faking delivery.
- **Anti-Spam Defense**: Hidden honeypot field catches automated bots silently.
- **Rate Limiting**: In-memory rate limiting prevents abuse.

---

## 🚀 7. Cloudflare Deployment & Building

The project is pre-configured for Cloudflare with OpenNext and Next.js 15.5.29:

### Development
```bash
npm install
npm run dev
```

### Production Build & Cloudflare Dry-Run
```bash
npm run build
npx opennextjs-cloudflare build
npx wrangler deploy --dry-run
```

Deployments to `main` are automatically built by Cloudflare via `wrangler.jsonc`.
