# Next Era Code — React + Vite

A responsive multi-page website built with React, React Router and CSS.

## Run locally

1. Install Node.js (LTS) if it is not installed.
2. Open this `nextera-react` folder in VS Code.
3. In the terminal, run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL shown by Vite (usually http://localhost:5173).

## Dynamic page features

- **Services:** search by service/technology, filter by category, see the live result count, clear filters, and open a service detail dialog.
- **About:** switch between Mission, Vision and Approach tabs, and expand the value cards to see additional details.
- **Projects:** search projects, filter by project type, see the result count, and open a project detail dialog.
- **Blog:** search articles, filter by topic, view live result counts, open full article dialogs, and navigate to the contact page from an article.
- **Responsive layout:** layouts adapt for desktop, tablet and mobile screens; controls wrap and dialogs fit smaller screens.
- **Navigation:** React Router page navigation and mobile menu.

The service and project descriptions are example website content and are stored as data in `src/main.jsx`. The dialogs are front-end only. The contact form validates input and saves demo submissions in the current browser using localStorage; it does not send data to a server. For real customer enquiries, connect a backend or hosted form service.

## Production build

```bash
npm run build
npm run preview
```

Original images are in `public/image/`.
