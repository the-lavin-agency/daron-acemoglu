# daronacemoglu.com — Official Website

## Project Overview

A warm, prestigious personal website for Nobel Prize-winning economist **Daron Acemoglu** — MIT Institute Professor, bestselling author, and leading voice on AI, institutions, democracy, and the future of prosperity.

**Design Direction:** Warm but prestigious, academic-editorial, focused on accomplishments — especially in AI and economics. Navy, gold, cream color palette.

---

## Pages Built

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero with headshot, credentials bar, featured book, about teaser, topics/expertise grid, books strip, press quotes, CTA banner |
| About | `about.html` | Full biography, education, career timeline, awards grid, fellowships, sidebar with key facts |
| Books | `books.html` | Detailed book entries for all 4 major titles + composite books image, selected academic publications |
| Speaking | `speaking.html` | 6 signature topics, video embed (Nobel interview), 6 speaking formats, audience types, past venues, inquiry CTA |
| Contact | `contact.html` | Contact channels, inquiry type selector, contact form, media kit section, Lavin Agency CTA |

---

## Assets

### Images (in `/images/`)
| File | Description |
|------|-------------|
| `daron-headshot.jpg` | MIT Blueprint Labs official portrait |
| `daron-portrait2.jpg` | Britannica/press portrait |
| `daron-speaking.jpg` | MIT News Nobel Prize announcement |
| `book-liberal-democracy.png` | *What Happened to Liberal Democracy?* 3D cover |
| `book-power-progress.png` | *Power and Progress* 3D cover |
| `book-narrow-corridor.png` | *The Narrow Corridor* 3D cover |
| `book-why-nations-fail.png` | *Why Nations Fail* 3D cover |
| `books-all.png` | All four books composite banner |

---

## Design System

### Colors
- `--color-navy: #1a2744` — Primary dark (hero, nav, accent sections)
- `--color-gold: #c9a84c` — Accent, highlights, CTAs
- `--color-cream: #faf8f3` — Warm off-white backgrounds
- `--color-charcoal: #2d2d2d` — Body text

### Typography
- **Serif:** Playfair Display (headings, names)
- **Sans:** Inter (body, labels, nav)

---

## Key Content Points

- 2024 Nobel Prize in Economic Sciences (with Simon Johnson & James A. Robinson)
- MIT Institute Professor since 1993
- #3 most-cited economist in the world
- 6 books; *Why Nations Fail* translated into 40+ languages
- John Bates Clark Medal (2005)
- Represented for speaking by **The Lavin Agency**
- Academic email: daron@mit.edu | MIT faculty page: economics.mit.edu

---

## Implementation Notes for WordPress/WPEngine

### Recommended approach:
1. Use the HTML/CSS/JS files as a **design reference** for a custom WordPress theme or page builder implementation
2. Alternatively, implement as **static HTML pages** on the WPEngine staging server via FTP
3. The navigation, footer, and styles are shared across all pages — ideal for a template/component system

### External dependencies (CDN — no install needed):
- **Google Fonts:** Playfair Display + Inter
- **Font Awesome 6.5:** Icons

### Form handling:
- The contact form currently simulates submission (1.6s delay → success message)
- For production: connect to **Formspree**, **Netlify Forms**, **WPForms**, or a custom WP contact endpoint

### Speaking booking:
- All speaking CTAs link to: https://thelavinagency.com/speakers/daron-acemoglu/

---

## Next Steps / Recommended Enhancements

1. **Add a real headshot** — Replace search-sourced images with official high-resolution photos from Daron's team
2. **Connect the contact form** — Wire up to Formspree or a WordPress forms plugin
3. **Add a News/Media page** — Press coverage, op-eds, podcast appearances, and video interviews
4. **Add speaking testimonials** — Source quotes from actual event organizers
5. **Link book buy buttons** — Replace placeholder Amazon/publisher links with tracked affiliate or direct links
6. **Add Google Analytics** or preferred analytics tool
7. **SEO meta tags** — Add structured data (JSON-LD) for Person schema markup
8. **Add CV download** — Link to updated PDF CV
9. **Social media links** — Add Twitter/X, LinkedIn if Daron maintains those profiles

---

## File Structure

```
index.html          ← Home
about.html          ← About / Biography
books.html          ← Books & Research
speaking.html       ← Speaking
contact.html        ← Contact

css/
  style.css         ← Complete shared stylesheet

js/
  main.js           ← Navigation, scroll, form, animations

images/
  daron-headshot.jpg
  daron-portrait2.jpg
  daron-speaking.jpg
  book-liberal-democracy.png
  book-power-progress.png
  book-narrow-corridor.png
  book-why-nations-fail.png
  books-all.png
```
