# Website Changes Tracker

Last updated: 2026-09-27 (search, organization schema, and Christmas banner completed)
Source: client feedback table + follow-up list

Use this file to track progress. Check items off as they ship.

**Legend:** `[ ]` not started · `[~]` in progress · `[x]` done · `[—]` deferred

---

## Decisions log (client confirmed)

| # | Question | Decision |
|---|----------|----------|
| 1 | Shewberry vs Shrewsbury | **`Shewberry`** — use everywhere (copy, slugs, labels) |
| 2 | Bucks Haven page structure | **Own slug** — separate `/what-we-do/[slug]` page (not nested under Clarendon only) |
| 3 | Hero overlay opacity | **Reduce ~50%** — e.g. `/60` → `/30`, `/55` → `/30`; lighten gradients proportionally |
| 4 | Nav logo size | **~30% bigger** — e.g. `h-11 sm:h-14` → `h-14 sm:h-18` (verify mobile fit) |
| 5 | DNS | **[~] Client propagating now** — `@blockislandhopeforjamaica.org` + `support@` |
| 6 | Back to school banner (August) | **[—] Deferred** — not doing yet; no August date |

---

## Epic-level work

| Status | Task | Notes |
|--------|------|-------|
| [x] | **Redo the Outreach** | Cards, pages, photos, videos on `/what-we-do` |
| [x] | **Push fixes from last meeting** | Implemented in this pass |
| [~] | **Setup DNS** | Client propagating DNS now; `support@` wired in site copy |

---

## UI & branding (site-wide)

### Hero overlays (all pages)

**Target:** cut overlay strength ~50% vs current.

| Status | Area | File(s) | Current | Target |
|--------|------|---------|---------|--------|
| [x] | Homepage hero | `src/app/page.tsx` | `bg-brand-ink/60`, gradient `/70` `/40` | **`/30`**, gradient **`/35` `/20`** |
| [x] | Page headers | `src/components/ui/PageHeader.tsx` | `bg-brand-ink/55`, gradient `/60` `/20` | **`/30`**, match homepage gradients |
| [ ] | QA pass | All routes with hero | — | Contrast check on light + dark slides |

### Top nav logo

| Status | Current | Target (confirmed) |
|--------|---------|-------------------|
| [x] | `h-11` / `sm:h-14` | **`h-14` / `sm:h-18`** (~30% increase) |

**File:** `src/components/layout/SiteHeader.tsx`

---

## What We Do — outreach content & media

### Naming & spelling

- [x] **Shewberry** — confirmed spelling (not Shrewsbury)
- [x] Apply **Shewberry** across cards, slugs, map, copy

### Pages & cards

| Status | Current | Future | Notes |
|--------|---------|--------|-------|
| [x] | School Outreach — Top Hill Primary | **School Outreach — Shewberry School** | Videos OK; photos placeholder until new assets |
| [x] | No Bucks Haven page | **`/what-we-do/bucks-haven-clarendon`** (own slug) | Clarendon outreach — church service in Bucks Haven |

Suggested slug: `bucks-haven-clarendon` (adjust if client prefers)

### Thumbnails & photo placement

| Status | Current | Future | Notes |
|--------|---------|--------|-------|
| [x] | Day 3 Galloway — 1st thumbnail | Use **4th photo** in set | `collage-before-after.png` as card thumb |
| [x] | Day 4 thumbnail (Petersfield) | **Vineyard** image | `DSC02560-1.jpg` |
| [x] | School Outreach thumbnail (Top Hill) | Move into **Day 1 photos** | `school-1/2/3.png` in Day 1 collage |

### Videos

| Status | Current | Future | YouTube / asset |
|--------|---------|--------|-----------------|
| [x] | Main hub video | Label as **Shewberry** | `bPwAq3-LtAg` — `#shewberry` section |
| [x] | “Highlights from outreach” | **Swap** with trip **Recap** video | Trip recap `zfZ8A_UW8Sk` — `#trip-recap` |
| [x] | Day 4 video | **Move to Day 3 — Galloway** | `QXBV2iysZgw` |
| [x] | Petersfield video | YouTube | `-H82yXaexn0` |
| [x] | Wrong Petersfield video | Reassign to **Galloway** | Done via move above |

### Outreach implementation order

1. [x] Update `src/data/events.ts` (Shewberry rename, Bucks Haven slug, media swaps)
2. [x] Add **Bucks Haven** entry + redirect from old Top Hill slug
3. [x] Apply video swaps + Petersfield YouTube link
4. [x] Fix thumbnails / collage images
5. [ ] Map + mobile/desktop parity check

---

## Our Story — people & copy

| Status | Current | Future | Notes |
|--------|---------|--------|-------|
| [x] | Martin listed as founder | **Martin Rosato — International Board Member** | Name, corrected title, bio above video |
| [x] | Org story placement | **Above** leadership section | “A Jamaican outreach organisation…” first |
| [x] | Peter Preiser interview | **Added beneath Martin** | YouTube `-b0zj2N8pf0`, matching leadership treatment |
| [x] | Shannon profile | **Board Member, coming-soon placeholder** | No recording-specific copy |
| [x] | Video + bio layout | **Responsive split layout** | Bio and interview align side-by-side on desktop, stack on mobile |

---

## Contact, donate & forms

### Contact page UX

| Status | Task | Notes |
|--------|------|-------|
| [x] | Merge contact + follow cards | Single card with email, WhatsApp, location, social icons |
| [x] | Social icon links | `SocialIconLinks` component (not pill badges) |
| [x] | Donations coming soon card | Below contact card; links to `#contact-form` |
| [x] | Embedded form fallback | Direct link opens the Google Form in a new tab if the embed fails |

### Donate page

| Status | Task | Notes |
|--------|------|-------|
| [x] | Link to submit form | Primary CTA → `/contact#contact-form` |
| [x] | Donations coming soon | Removed fake payment UI; email + WhatsApp secondary |

---

## Contact, email & forms

### Official email

| Status | Current | Future |
|--------|---------|--------|
| [x] | Placeholders / gmail | **`support@blockislandhopeforjamaica.org`** |

**Apply across:** footer, contact, get involved, mailto links (after DNS live)

### Google Form → contact page

**Form URL:** https://docs.google.com/forms/d/e/1FAIpQLSfft2XiJgqMdXWzom_QijRRlsF3T_c3VyWVqRrHJFksO33G-Q/viewform?usp=header

| Status | Task |
|--------|------|
| [x] | Wire contact / get involved to Google Form |
| [x] | Form URL confirmed |

### Social & phone

| Channel | Value | Status |
|---------|-------|--------|
| WhatsApp | (876) 251-0622 | [x] |
| Instagram | https://www.instagram.com/bihopeforjamaica | [x] |
| X | https://x.com/BIhopeforJa | [x] |
| Facebook | https://web.facebook.com/people/BIHopeforJamaica/61590290863318/ | [x] |

---

## Footer & partners

| Status | Partner | URL |
|--------|---------|-----|
| [x] | Harbor Church | https://www.harborchurchblockisland.net/ |
| [x] | Open Door Deliverance Ministries | https://web.facebook.com/ODDM2022/?_rdc=1&_rdr# |
| [x] | Emergency resources | ODPEM / gov links present |

---

## Updates / banners

| Status | Item | Notes |
|--------|------|-------|
| [x] | Christmas and New Year activity cards | Three equal cards with authentic photo headers and seasonal calls to action |
| [x] | Christmas Community Care banner | Prominent image-led homepage banner with donation and activities links |
| [—] | Back to School outreach banner (August) | **Deferred** — not building yet |

---

## Cross-cutting / QA

- [ ] Mobile ↔ desktop parity
- [x] Redirects after slug renames (Top Hill → Shewberry, new Bucks Haven slug)
- [x] Hero overlay ~50% reduction (all pages)
- [x] Nav logo +30% (all breakpoints)
- [x] Global social-sharing metadata (WhatsApp, Facebook, X, and link previews)
- [x] Unique search titles and descriptions for all major static pages
- [x] Organization structured data for Google (`NGO`, contact details, social profiles, service area)

### Site-wide search

**Goal:** make outreach stories, programmes, updates, people, and ways to help easy to find from anywhere on the site.

- [x] Add a search trigger to the desktop and mobile navigation
- [x] Build a lightweight search index from existing site content and structured data
- [x] Support typo-tolerant matching, useful ranking, and highlighted result excerpts
- [x] Group results by content type (Outreach, Updates, Programmes, People, Pages)
- [x] Add keyboard navigation, clear focus states, empty results, and a no-results recovery path
- [x] Keep the first version local and build-time generated; no external search service required at the current site size
- [x] Verify search-index generation during production builds

### Assets still needed

- [ ] Shewberry School photos (correct set)
- [ ] Bucks Haven / Clarendon photos (from former Top Hill set)

---

## Done (reference)

- [x] Missions → **What We Do** hub
- [x] Nav + footer consolidation
- [x] Logo + favicon (PNG)
- [x] Hero slideshows + homepage charity name
- [x] Founder interview on Our Story (`2We2jb35X4k`)
- [x] Google Form URL confirmed
- [x] Client decisions: Shewberry, Bucks Haven slug, overlay %, logo size, DNS in progress, banner deferred
- [x] Tracker execution pass: outreach redo, footer/partners/social, site-contact constants
- [x] Contact: merged card, social icons, donations-coming-soon card
- [x] Donate page → contact form + coming-soon messaging
- [x] Our Story: org section first; Martin, Peter, and Shannon leadership sections

---

## Remaining work (summary)

| Item | Status | Owner |
|------|--------|-------|
| DNS propagation | [~] | Client — `support@` wired in site; delivery pending DNS |
| Hero contrast QA | [ ] | Dev — spot-check slideshow routes after lighter overlays |
| Mobile ↔ desktop parity | [ ] | Dev — general responsive pass |
| Map parity check | [ ] | Dev — outreach map on What We Do |
| Shewberry School photos | [ ] | Client — correct set to replace placeholder |
| Bucks Haven photos | [ ] | Client — dedicated Clarendon assets |
| August back-to-school banner | [—] | Deferred — replaced for now by the completed Christmas banner |

---

## Remaining open questions

_None — pending client input captured above. Re-open if DNS domain name or Bucks Haven slug string changes._
