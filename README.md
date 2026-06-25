# Forbes Middle East Frontend Assessment

A responsive news platform built with **Nuxt 3**, inspired by the Forbes Middle East website. The project focuses on clean architecture, component reusability, accessibility, responsive design, and performance optimization.

---

## Features

* Responsive design for mobile, tablet, and desktop devices
* Homepage with multiple news sections
* Dynamic category pages
* Article details pages
* Reusable component architecture
* Dark Mode support
* Skeleton loading states
* Optimized image delivery with Nuxt Image
* SEO-friendly routing structure
* Accessibility best practices
* Lighthouse score above 90

---

## Tech Stack

* Nuxt 3
* Vue 3
* TypeScript
* Tailwind CSS
* Nuxt Image

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd forbes-middle-east-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Application will be available at:

```text
http://localhost:3000
```

---

## Available Scripts

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Generate Static Site

```bash
npm run generate
```

---

## Project Structure

```text
components/
├── features/
│   ├── category/
│   └── home/
│
├── layout/
│
├── shared/
│   └── cards/
│
└── ui/

data/
├── categories.ts
└── home.ts

layouts/
└── default.vue

pages/
├── index.vue
├── category/[slug].vue
└── category/[slug]/[article].vue

public/
└── images/

assets/
└── styles/
```

### Structure Overview

| Directory           | Purpose                                   |
| ------------------- | ----------------------------------------- |
| components/features | Page-specific UI sections                 |
| components/shared   | Reusable shared components                |
| components/ui       | Generic UI building blocks                |
| data                | Mock data used throughout the application |
| pages               | Route definitions                         |
| layouts             | Shared application layouts                |
| public              | Static assets and optimized images        |

---

## Routing

### Homepage

```text
/
```

### Category Pages

```text
/category/business
/category/politics
/category/technology
/category/health
/category/sports
/category/culture
/category/podcast
```

### Article Details

```text
/category/[slug]/[article]
```

Example:

```text
/category/culture/deep-dive-cultural-movements
```

---

## Performance Optimizations

Several optimizations were implemented to achieve strong Lighthouse results and improve the overall user experience:

* Nuxt Image integration
* WebP image assets
* Responsive image sizing
* Lazy-loaded non-critical images
* Inline SVG icons instead of icon font libraries
* Fixed image dimensions to reduce layout shifts
* Reusable component architecture
* Static generation support
* Optimized asset loading

### Lighthouse Results

The project was optimized to achieve Lighthouse scores above 90 in:

* Performance
* Accessibility
* Best Practices
* SEO

> Lighthouse results may vary slightly depending on device, network conditions, and browser environment.

---

## Dark Mode

Dark mode support was implemented to improve readability and user experience across different viewing environments.

---

## Skeleton Loaders

Skeleton loading states were added to:

* Improve perceived performance
* Provide visual feedback while content loads
* Reduce layout shifts
* Create a smoother user experience

---

## Assumptions Made During Development

The assessment requirements did not include a backend or API integration. Therefore:

* Content is powered by local mock data files.
* Authentication and user accounts were considered out of scope.
* Search functionality was not implemented since it was not part of the provided requirements.
* Advertisement sections are represented as static UI placeholders.
* Focus was placed on frontend architecture, responsiveness, accessibility, and performance.

---

## Reusability & Architecture

The application was structured around reusable components to improve maintainability and scalability.

Examples include:

* Shared article cards
* Shared section headers
* Reusable layout components
* Centralized data management
* Consistent design patterns across pages

This approach minimizes duplication and simplifies future enhancements.

---

## Future Improvements

Potential enhancements if connected to a production backend:

* API integration
* Search functionality
* Pagination
* Content management system integration
* User authentication
* Saved articles
* Internationalization (i18n)
* Analytics integration

---

## Notes

* Category pages are generated from centralized mock data.
* Article details pages are dynamically routed.
* Local optimized image assets are included.
* The project prioritizes accessibility, responsiveness, and performance.
* Component design emphasizes reusability and maintainability.

---

## Author

Developed as part of a Frontend Assessment using Nuxt 3, Vue 3, TypeScript, and Tailwind CSS.
