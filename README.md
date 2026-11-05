# Nexora Academy

Fictional demonstration website for a premium technology academy. Next.js 14 (App Router), JavaScript, Tailwind CSS, Framer Motion, Lucide React.

## Run locally
    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

## Contact form
No backend by default: the form validates and shows a clearly labelled demo state. To send real inquiries, set `NEXT_PUBLIC_INQUIRY_ENDPOINT` (see `.env.example`) to an endpoint that accepts JSON POST.

## Deploy
Push to GitHub and import into Vercel (zero config), or run `npm run build && npm start` on any Node 18.17+ host. Set `NEXT_PUBLIC_SITE_URL` to your domain.

## Content to replace before real use
`src/data/*`: programs, projects (fictional demos), team (placeholders; add photos and LinkedIn links), testimonials (placeholders), FAQ (illustrative). Certificate preview in `components/sections/Achievements.js`; contact placeholders and social icons in `components/layout/Footer.js`.
# nexora-academy
