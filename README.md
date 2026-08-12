# Alexis Chondrogiannis — Portfolio

A Next.js portfolio site for an advertising creative. Built to replace the Wix site
at `alexischondro.wixsite.com/alexischondrogiann-2`.

## Running it

```bash
npm install     # first time only
npm run dev     # http://localhost:3000
```

`npm run build` produces the production build. Every page is static, so it can be
hosted anywhere.

## How the site is organised

Content is completely separated from layout. **You should almost never need to edit
a component to change what the site says.**

| File | What it controls |
|---|---|
| `content/profile.ts` | Name, headline, bio, contact details, target roles, availability |
| `content/projects.ts` | Every case study — text, images, captions |
| `content/experience.ts` | Resume: education, jobs, skills, involvement |
| `app/globals.css` | The entire colour palette and type system (top of the file) |

Pages read from those files and rebuild themselves.

### Adding a project

1. Put the images in `public/work/<slug>/`
2. Copy an existing object in `content/projects.ts`, change the fields
3. Set `featured: true` to also show it on the home page

The project index, the home page, the case-study page, and the "next project"
link all update automatically.

### Changing the colours

Everything comes from five values at the top of `app/globals.css`:

```css
--color-paper:   #fdfcfa;  /* page background */
--color-surface: #f4f1ec;  /* cards, alternating sections */
--color-ink:     #1c1917;  /* headings */
--color-muted:   #78716c;  /* captions, labels */
--color-accent:  #b4553f;  /* links, buttons — the clay tone */
```

Change `--color-accent` alone and the whole site shifts mood.

## Pages

- `/` — hero, three strengths, three featured case studies, credentials
- `/work` — all five projects
- `/work/[slug]` — case study: challenge → audience → insights → big idea → approach → the work → deliverables
- `/about` — bio, skills, involvement, personal photos
- `/resume` — full resume, with optional PDF download
- `/contact` — form plus direct links

## Deploying

Vercel is the least-effort option and free for this:

1. Push the repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Accept the defaults — Vercel detects Next.js automatically

Then point a custom domain at it and update `siteUrl` in `content/profile.ts`
so the SEO tags and link previews use the real address.

## Waiting on Alexis

1. **Resume PDF** — `profile.resumePdf` is `null`, so the download button on
   `/resume` hides itself rather than 404ing. Drop the PDF into `public/` and
   set the path to switch it on.
2. **Formspree endpoint** — sign up free at [formspree.io](https://formspree.io),
   create a form, and paste the resulting URL (`https://formspree.io/f/xxxx`)
   into `components/ContactForm.tsx`. Until then the form opens the visitor's
   email client via `mailto:`, which works but can fail on machines with no mail
   client configured.
3. **Outcomes for each case study** — the `outcome` field on each project in
   `content/projects.ts`. This is the biggest remaining gap; see below.
4. **A better headshot** — `public/about/headshot.jpg`. The current one is a
   school portrait.

## Known gaps

- **Results.** Every case study explains what was made, none says what happened.
  Any real outcome — engagement, whether the work is still in use, a critique —
  would do more for hiring than any further design work.
- **Results/outcomes** — most case studies describe what was made but not what it
  achieved. Any real numbers (engagement, reach, "the office still uses these
  posters") would strengthen them considerably.
- **Scarsdale Family Dental** has no listed collaborators, and its year is inferred
  from the resume dates.

## Where the content came from

- Case study copy: the live Wix site's project pages
- Touchland project: the 71-page *FINAL Touchland Book* PDF, with the final ads
  extracted directly from the file rather than screenshotted
- Images: the Wix media export, identified and sorted into `public/work/<slug>/`
- Resume: the Wix resume page

Working files from that migration are in `_source/` (gitignored) — the original
Wix export, contact sheets used to identify each image, and the extracted PDF art.
Nothing in the site depends on that folder; it's safe to delete.
