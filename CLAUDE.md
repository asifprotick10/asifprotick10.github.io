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
`achievements.html`, `archive.html`) has an empty `<nav id="site-nav"></nav>`
placeholder and loads the same `style.css` + `script.js`. The actual nav
markup (links to all six pages + `#dark-mode-toggle` button) lives in one
place — the `NAV_HTML` template string at the top of `script.js` — which
gets injected into `#site-nav` on `DOMContentLoaded`, before the
active-link-highlight and dark-mode logic run. To change the nav (add a
page, reorder links, etc.), edit `NAV_HTML` once in `script.js`; don't touch
individual HTML files. Trade-off: the nav is briefly absent until JS runs
(fine for this site, since dark mode already depends on JS) and a no-JS
visitor would see no nav at all.

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

- Footer `<p>© YEAR Asif Islam</p>` is still duplicated per page (unlike
  nav, it wasn't templated) — currently unified to 2026 everywhere, but a
  future year bump means editing all six files again.
