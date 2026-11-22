# Rabin Neupane — Personal Website

Personal portfolio + blog built with [Astro](https://astro.build). Static output,
fast, and free to host.

## Tech

- **Astro** — static site generator (ships almost no JavaScript)
- **Markdown blog** — write posts in `src/content/blog/`
- Light/dark theme, responsive, SEO + sitemap

## Edit your content

Almost everything lives in one file:

```
src/data/site.ts        # name, summary, experience, projects, skills, education
```

Other things you may touch:

```
src/content/blog/*.md   # blog posts (copy hello-world.md to start a new one)
public/Rabin_Neupane_Resume.pdf   # the résumé the "Download" button serves
astro.config.mjs        # set `site` to your final domain
```

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # outputs static site to ./dist
npm run preview    # preview the built site
```

## Add a blog post

Create `src/content/blog/my-post.md`:

```md
---
title: 'My post title'
description: 'One-line summary for the blog list and SEO.'
pubDate: 2026-11-21
tags: ['backend', 'docker']
draft: false
---

Write your post in **Markdown** here.
```

Set `draft: true` to keep it hidden until ready.

---

## Deploy

### Option A — Cloudflare Pages (recommended)

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy. You'll get a `*.pages.dev` URL.
5. Add your custom domain `rabinneupanee.com.np` under the project's **Custom domains**
   tab (needs the domain's DNS on Cloudflare — see below).

### Option B — GitHub Pages

1. Push to GitHub.
2. Add `.github/workflows/deploy.yml` with the Astro GitHub Pages action
   (https://docs.astro.build/en/guides/deploy/github/).
3. In repo **Settings → Pages**, set Source = GitHub Actions, and add the custom domain.

## The `.com.np` domain

`.com.np` is registered free via **register.com.np** (Mercantile Communications) and
requires document verification, which can take a few days to approve.

Recommended setup:
1. Register / confirm `rabinneupanee.com.np` at register.com.np.
2. Create a free Cloudflare account and add the domain; Cloudflare gives you two
   nameservers.
3. At register.com.np, set those as the domain's nameservers.
4. In Cloudflare Pages, attach the domain — HTTPS is issued automatically.
