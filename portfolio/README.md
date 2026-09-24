# Fayis KV — 3D Animated Portfolio

A dark cinematic React + Three.js portfolio inspired by the supplied hero image.

## 1. Install

```bash
npm install
npm run dev
```

## 2. Add the hero image

Create:

```text
public/
└── assets/
    └── fayis-hero.png
```

Put your supplied portfolio hero image there. The website already references:

```text
/assets/fayis-hero.png
```

## 3. Add project preview images

Create these files:

```text
public/assets/luxe-living.jpg
public/assets/invento.jpg
public/assets/kc-vegetables.jpg
public/assets/zentro.jpg
```

The code will automatically use them in the project cards.

If you don't have project screenshots yet, temporarily duplicate any placeholder image into those four names, or replace the `image` values in `src/data/portfolio.js`.

## Main features

- Cinematic hero based on your supplied image
- Neon-glowing name animation
- Automatic typewriter + backspace profession cycle
- Glassmorphism navbar
- Responsive mobile navigation
- Scroll progress indicator
- Scroll reveal animations
- Interactive 3D skill cloud
- Clickable skill nodes linking to official websites
- Project cards with live/GitHub links
- Creative mailto contact form
- Copy-email interaction
- Social links
- Responsive mobile/tablet/desktop layout
- Reduced-motion accessibility support

## Contact form note

This version uses `mailto:` so it requires no backend or API key. For a production contact form that sends directly without opening the visitor's email client, connect the same form to EmailJS, Formspree, Resend, or your own ASP.NET Core API.

## Asset structure

```text
fayis-3d-portfolio/
├── public/
│   └── assets/
│       ├── fayis-hero.png
│       ├── luxe-living.jpg
│       ├── invento.jpg
│       ├── kc-vegetables.jpg
│       └── zentro.jpg
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```
