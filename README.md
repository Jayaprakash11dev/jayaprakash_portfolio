# Jayaprakash M — Portfolio

Personal portfolio of **Jayaprakash M**, Full Stack Developer (React, Next.js, Node.js, NestJS, PostgreSQL, AWS).

Live: https://jayaprakash-portfolio.vercel.app

## Stack
- [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/) (dark-first, class-based theme toggle)
- [Framer Motion](https://www.framer.com/motion/) for scroll animations (respects reduced motion)
- [EmailJS](https://www.emailjs.com/) for the contact form
- Deployed on [Vercel](https://vercel.com/)

## Getting started
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Updating content
All text (profile, experience, projects, skills, education) lives in
[`src/data/portfolio.js`](src/data/portfolio.js). Edit that file; the components don't need to change.

- Resume download: replace `public/Jayaprakash-M.pdf`.
- Social share image: `public/og-image.png` (1200×630).
- Project screenshots: `src/assets/projects/*.webp`, registered in `src/constants/image.js`.

## Contact form
Copy `.env.example` to `.env` and fill in your EmailJS credentials (also add them as
environment variables in the Vercel project settings):

```
VITE_EMAIL_JS_SERVICE_ID=
VITE_EMAIL_JS_TEMPLATE_ID=
VITE_EMAIL_JS_PUBLIC_KEY=
```

The template receives `user_name`, `user_email` and `message`.
