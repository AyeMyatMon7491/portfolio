# Aye Myat Mon — Portfolio

Personal portfolio website built with **React + Vite**. Light/dark theme, scroll animations, fully responsive, English-language.

## Local development

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build in /dist
```

## Editing content

All personal data (name, links, skills, experience, projects) lives in **`src/data.js`** — edit that one file to update the site. The resume PDF is **`public/Aye_Myat_Mon_Resume.pdf`** — replace the file to update the download.

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio`).
2. Push this folder to it (see commands below).
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and publishes automatically on every push to `main`.

```bash
git remote add origin https://github.com/ayemyatmon7491/portfolio.git
git push -u origin main
```

The site will be live at `https://ayemyatmon7491.github.io/portfolio/`.
