# Ecom Bazzar Premium Website — Fixed No-Build Version

This version fixes the white-screen problem from the first React/Vite ZIP.

## Open the website
You can now simply double-click `index.html` and it will open in Chrome/Safari.
No `npm install` and no build step are required.

For the most reliable local preview on Mac, open Terminal in this folder and run:

```bash
python3 -m http.server 8080
```

Then open: http://localhost:8080

## Edit content and images
Almost everything is controlled from ONE file:

`assets/js/content.js`

Change:
- Brand name
- Email / phone
- Hero text
- About content
- Services
- Case studies
- Team members
- Contact details
- Image URLs

## Use your own images
1. Put your images inside `assets/images/`
2. In `assets/js/content.js`, change an image value, for example:

```js
hero: 'assets/images/hero.jpg'
```

## Pages
- index.html — Home
- about.html — About
- services.html — Services
- case-studies.html — Case Studies
- process.html — Process
- contact.html — Contact

## Contact form
The form is a safe front-end demo by default. Add a Formspree, Apps Script, or your backend endpoint in:

`assets/js/content.js` → `contact.formEndpoint`

## Hosting
This is a static website and can be uploaded directly to Vercel, Netlify, cPanel, Hostinger, GitHub Pages, or any normal web host.
