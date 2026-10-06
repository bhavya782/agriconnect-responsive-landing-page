# AgriConnect — Premium Responsive Agritech Landing Page

AgriConnect is a modern, high-performance, responsive landing page for a fictional digital agricultural marketplace that connects Indian farmers directly with produce buyers. 

This project was developed as part of a **Web Development Internship — Task 4: Make a Website Mobile-Friendly Using CSS Media Queries**.

---

## 🌟 Overview & Core Concept

AgriConnect addresses the agricultural supply chain by enabling:
- **Farmers** to showcase crop listings, share location/quantity availability, eliminate unnecessary middleman margins, and build direct buyer relationships.
- **Buyers** (retailers, wholesalers, restaurants, and procurement partners) to discover fresh produce directly at source with transparent pricing.

The design embodies a **Modern SaaS Startup + Premium Agriculture Brand** with sophisticated deep forest greens, warm harvest gold accents, responsive typography, and fluid micro-interactions.

---

## ⚡ Features & Key Highlights

- **Responsive Web Design (RWD)**: Seamless layout adaptation across Desktop, Laptop, Tablet, and Mobile devices.
- **CSS Media Queries**: Native breakpoint transformations using `@media (max-width: 1024px)`, `@media (max-width: 768px)`, and `@media (max-width: 480px)`.
- **Flexbox & CSS Grid**: Advanced CSS Grid multi-column cards and Flexbox navigation alignment.
- **Fluid Typography**: Dynamic sizing using `clamp()`, `rem`, `vw`, and `min()` units to prevent layout breakage.
- **Responsive Media**: Custom `max-width: 100%`, aspect ratio scaling, and `object-fit: cover` preventing horizontal scrollbars.
- **Mobile Drawer Navigation**: Animated hamburger menu drawer with background backdrop blur and focus trapping.
- **Accessibility & Performance**: Semantic HTML5 structure, ARIA attributes (`aria-expanded`, `aria-label`), keyboard navigation support, and `prefers-reduced-motion` compliance.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic document structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3**: Modern CSS Custom Properties (Variables), Flexbox, CSS Grid, Fluid Typography (`clamp`), Media Queries, and GPU-accelerated Keyframe Animations.
- **JavaScript (ES6+)**: Light, non-blocking script for mobile navigation drawer toggle, smooth scroll tracking, and header scroll dynamics.
- **Google Fonts**: *Outfit* (Headings) and *Plus Jakarta Sans* (Body text).

---

## 📐 Responsive Breakpoints

| Device Category | Breakpoint Range | Key Layout Transformation |
| :--- | :--- | :--- |
| **Large Desktop** | `1440px` and above | Full 1200px max container width, multi-column split sections & 4-card grids. |
| **Desktop / Laptop** | `1200px` – `1024px` | Adjusted container padding, 2-to-3 column responsive grid scaling. |
| **Tablet** | `1024px` – `768px` | 2-column feature blocks, tablet navigation spacing. |
| **Tablet / Mobile** | `768px` | **Primary Transformation**: Desktop nav converts to full-height mobile slide drawer, split hero transforms to 1-column stack, cards rearrange to 1 or 2 columns. |
| **Mobile Portrait** | `480px` | 1-column layout, stacked CTA button groups, fluid heading scaling. |
| **Small Mobile** | `375px` | Overflow-protected single-column flow with tight spacing and zero horizontal scroll. |

---

## 🎯 Internship Task Alignment

This website was engineered to demonstrate:
1. **Responsive Web Design & Viewport Control**: Meta viewport configuration (`width=device-width, initial-scale=1.0`).
2. **CSS Media Queries**: Real desktop-to-mobile transformation rather than basic uniform scaling.
3. **Flexible CSS Units**: Utilization of `clamp()`, `min()`, `rem`, `%`, and `vw` units.
4. **Layout Systems**: Hybrid implementation of Flexbox and CSS Grid.
5. **Mobile Navigation**: Interactive hamburger drawer menu with proper ARIA accessibility.
6. **Zero Horizontal Overflow**: Guaranteed no horizontal scrollbars at 1440px, 1200px, 1024px, 768px, 480px, or 375px.

---

## 📂 Project Directory Structure

```
agriconnect/
├── index.html         # Main HTML5 Document
├── style.css          # Core CSS Variables, Layouts & Media Queries
├── script.js           # Mobile Navigation & Scroll Logic
├── README.md          # Project Documentation
└── screenshots/
    ├── desktop.png    # Desktop Viewport Screenshot (1440px)
    └── mobile.png     # Mobile Viewport Screenshot (375px)
```

---

## 🚀 How to Run Locally

1. Clone or download the repository directory.
2. Open `index.html` directly in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Safari).
3. Alternatively, launch a local web server (e.g., Live Server in VS Code, or Python `python -m http.server`).

---

&copy; 2026 AgriConnect. Developed for Web Development Internship — Task 4.
