# Personal website — asifprotick10.github.io

Static HTML/CSS/JS personal academic site for Asif Islam (doctoral researcher,
NeuroAI Lab, University of Rhode Island). No build step, no framework — edit
files directly and push.

## Deployment

- Repo **is** the GitHub Pages site: pushing to `main` deploys live within
  ~1-2 minutes, no separate deploy step.
- Git identity: `Asif Islam <asifprotick.10@gmail.com>`.
- Auth: GitHub CLI (`gh`) installed and logged in as `asifprotick10`, set as
  git's credential helper (`gh auth setup-git`) — pushes work without prompts.
- Always tell the user what's about to be pushed and get confirmation before
  `git push`, unless they've said to push automatically.

## Page structure

Every page (`index.html`, `news.html`, `publications.html`, `vlog.html`,
`achievements.html`, `archive.html`) repeats the same `<nav>` block verbatim
(links to all six pages + `#dark-mode-toggle` button) and loads the same
`style.css` + `script.js`. There's no templating, so a nav change must be
copy-pasted into all six files by hand.

- `index.html` — homepage/about. Bio, research bullets, contact icons,
  two CTA buttons (`.btn.btn-primary` / `.btn.btn-secondary`).
- `news.html` — reverse-chronological `<article>` list, each with an `<h2>`
  headline (sometimes empty) and a bold `Date:` line.
- `publications.html` — three sections: **Pre-Prints**, then **Published**
  split into **Articles** (journal papers) and **Proceedings** (conference
  papers). Each entry is an IEEE-style citation line with the site owner's
  name bolded as `<strong>A. Islam</strong>`. First-author-heavy entries
  spell out all authors; entries where he's a middle/co-author use `et al.`
  after the first few names. New papers: journal articles go in Articles,
  conference papers in Proceedings, newest first isn't enforced — match
  whatever order looks intentional, ask if unsure.
- `vlog.html` — long-form posts. Uses a page-local `<style>` block for
  one-off needs (e.g. benchmark table styling) rather than touching the
  shared stylesheet, and overrides `.content` width inline for wider reading
  columns. Follow this pattern for post-specific styling.
- `achievements.html` — `<article class="left-align">` blocks: `<h2>` title,
  location `<p>`, bullet list.
- `archive.html` — photo gallery, `.gallery` / `.gallery-item` grid.

## Styling conventions (style.css)

- `--accent` custom property (currently `#3da5f4`) drives nav hover/active
  state, bullet markers, and the photo border — keep new accent-colored UI
  tied to this variable rather than hardcoding a new color.
- `.btn` / `.btn-primary` / `.btn-secondary` — standard CTA button styling
  with hover lift + shadow. Use these classes for new call-to-action links
  instead of inline `style=""`.
- Active nav-link highlighting is done in `script.js` (compares
  `location.pathname` to each nav `<a href>` and adds `.active`) — applies
  automatically to any page that includes the shared nav + script.
- Dark mode is the default; `body.light-mode` overrides. Toggle state
  persists via `localStorage` (`script.js`).

## Known inconsistencies (not yet cleaned up)

- Footer copyright year differs by page (`© 2025` vs `© 2026`) — hasn't
  been unified; ask before changing since it may be intentional per-page.
- Nav markup is duplicated per page (see above) rather than shared via
  include/template — a real templating step would need a static-site
  generator, which hasn't been requested.
