# GuazExpress Website

Customer-facing portfolio site for AfroBin Logistics / GuazExpress built with React, Vite, and Tailwind CSS.

## Features

- Multi-page experience with React Router covering Home, About, Services, Order, and Contact flows.
- Tailwind design system with GuazExpress brand palette, responsive layouts, and reusable components.
- Accessible navigation, skip links, and form validation states for order and contact submissions.
- Preconfigured production build via Vite.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to explore the site locally.

### Production Build

```bash
npm run build
```

The compiled assets output to the `dist` directory.

### Environment variables

Create a `.env` file in the project root with:

```
VITE_BACKEND_URL=https://back.guazexpress.com
```

`VITE_BACKEND_URL` should point to the deployed backend API that proxies email requests to Resend (defaults to https://back.guazexpress.com if not provided).

> **Note:** Vite 7 requires Node.js 20.19 or newer (or 22.12+). The build completes on Node 20.18 with a warning, but upgrading Node is recommended.
