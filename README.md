# Dhanyashree Shyam Kulal — Developer Portfolio

A dark, responsive, multi-page React portfolio focused on Java and full-stack development, with an academic AI/NLP project as a differentiator.

## Stack
- React + Vite
- React Router
- CSS variables and responsive CSS
- Lucide React icons

## Run locally
1. Install Node.js (LTS).
2. Extract this folder.
3. Open a terminal in the project folder.
4. Run `npm install`
5. Run `npm run dev`
6. Open the local URL printed by Vite.

## Production build
- `npm run build`
- `npm run preview`

## Routes
- `/` — Home
- `/about` — About and education
- `/projects` — Project gallery and filters
- `/projects/study-material-management` — Study Material Management System
- `/projects/emotion-aware-conversational-agent` — Emotion-Aware Conversational Agent
- `/projects/java-full-stack-application` — Planned Java full-stack project
- `/experience` — Experience, education and certifications
- `/skills` — Skills
- `/contact` — Contact links

## Before publishing
- Verify all dates and role titles in Experience against the final resume.
- Add verified GitHub repository links and working demos to each project.
- Replace the planned Java project card with a completed implementation only after it exists.
- Add the IJARSCT paper title and public link if available.
- Review contact information and resume visibility.
- For GitHub Pages, configure SPA route fallback or use hash-based routing. For Vercel/Netlify, add a rewrite so nested routes resolve to `index.html`.

The uploaded resume is copied to `public/resume.pdf` for the local preview. Replace it with the latest approved PDF whenever the resume changes.


## Responsive verification
The stylesheet includes responsive safeguards and breakpoints for narrow phones (320–360px), phones, tablets, laptop widths, desktop, and wide monitors. Before publishing, manually inspect all routes in browser responsive mode at 320, 375, 430, 768, 1024, 1366, and 1920 CSS pixels. Verify there is no horizontal overflow, navigation overlap, clipped text, or inaccessible touch controls. These viewport checks are a test plan; do not mark them complete until checked in a browser.
