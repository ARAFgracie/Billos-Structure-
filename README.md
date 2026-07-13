# BillOS — Presentation Website

A static, single-page website version of the BillOS software presentation. Pure HTML/CSS/JS — no build step, no dependencies.

## Files
- `index.html` — all page content
- `styles.css` — pine-green / receipt-themed visual design
- `script.js` — mobile/PC toggle + click-flow interactions

## Run it locally
Just double-click `index.html`, or serve it:
```bash
cd billos-site
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## Deploy free with GitHub Pages

1. Create a new repo on GitHub (e.g. `billos-site`), public.
2. On your computer, in this folder:
```bash
git init
git add .
git commit -m "BillOS presentation site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/billos-site.git
git push -u origin main
```
3. On GitHub: go to the repo → **Settings** → **Pages** (left sidebar).
4. Under "Build and deployment" → Source: **Deploy from a branch**.
5. Branch: `main`, folder: `/ (root)` → **Save**.
6. Wait ~1 minute. Your site goes live at:
```
https://YOUR_USERNAME.github.io/billos-site/
```

## Editing later
- Text/content → edit `index.html`
- Colors/fonts/spacing → edit `styles.css` (`:root` variables at the top control the whole palette)
- Interactions (toggle, click-flow tooltip) → `script.js`

No rebuild needed — just push changes and GitHub Pages updates automatically in a minute or two.

