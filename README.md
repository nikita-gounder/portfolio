# nikita-gounder.vercel.app

Personal portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Deployed on Vercel.

## Stack

- **Framework:** Next.js 16 (App Router, Server Components)
- **Styling:** Tailwind CSS v4
- **Fonts:** Geist (via `next/font`)
- **Deployment:** Vercel (auto-deploys on push to `main`)

## Adding or editing content

All content lives in [`lib/data.ts`](lib/data.ts) — bio, education, experience, and projects. Edit that file and push to `main` to update the live site.

For project screenshots, add images to `public/projects/` and reference them as `/projects/filename.png` in `lib/data.ts`.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
