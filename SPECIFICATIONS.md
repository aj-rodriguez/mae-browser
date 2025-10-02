# UCSD MAE Website Redesign - Specifications

## 1. Core Design System

### 1.1 Color Palette

Primary: Navy (#182B49), Gold (#C69214), White (#FFFFFF)  
Secondary: Dark Gray (#333333), Light Gray backgrounds, Accent Blue, Green (success), Orange (alerts)

### 1.2 Typography

- Headings: Inter, 700/600
- Body: Inter, 400/500
- Monospace: JetBrains Mono

Scale: H1 = 48px, H2 = 36px, H3 = 28px, Body = 16px, Small = 14px

### 1.3 Spacing

Base unit: 4px → system of xs:4, sm:8, md:16, lg:24, xl:32, … up to 96px

### 1.4 Border Radius

- Small: 4px
- Medium: 8px
- Large: 16px
- Full: 9999px

### 1.5 Shadows

- sm: 0 1px 2px rgba(0,0,0,0.05)
- md: 0 4px 6px rgba(0,0,0,0.1)
- lg: 0 10px 15px rgba(0,0,0,0.1)

---

## 2. Component Specifications

### 2.1 Buttons

- Primary: Navy background, white text, hover scale + shadow
- Secondary: Outline navy → hover fill navy
- Ghost: Text only, hover gray background

### 2.2 Cards

- White background, 12px radius, shadow md
- Hover = lift + shadow-lg
- Info layout: Image → title → description → CTA

### 2.3 Faculty Profiles

- Avatar (120x120)
- Name, title, department, research tags
- Contact icons

### 2.4 Statistics

- Large bold number + smaller caption
- Animated counter-from-0

### 2.5 Accordion

- Toggle header with chevron rotate
- Smooth height transitions

### 2.6 Gallery

- Masonry/grid or carousel with lightbox

---

## 3. Accessibility Specifications

- WCAG 2.1 AA compliance
- Color contrast ratio ≥ 4.5:1
- Keyboard nav + ARIA labels
- Semantic HTML: `<nav>, <main>, <section>, <aside>` etc.

---

## 4. Technical Specifications

### 4.1 Performance

- Load < 3 sec
- FCP < 1.5 sec
- Lazy loaded media in WebP
- CSS/JS minified

### 4.2 SEO

- Proper `<title>` and `<meta>`
- Schema.org markup
- XML sitemap, robots.txt
- Open Graph tags

### 4.3 Browsers

Support: Chrome, Safari, Firefox, Edge (last 2), iOS Safari, Android Chrome

---

## 5. Content Specifications

### 5.1 Copywriting

- Headlines: < 10 words, active voice
- Body: 2–4 sentence paragraphs
- Bullet lists for scannability

### 5.2 Media

- Hero images: 2560x1440 @ <500KB
- Card images: 800x600 @ <200KB
- Profile pics: 400x400 square
- Video: MP4 H.264, with subtitles

---

## 6. Asset Specifications

- Logos: UCSD + Department SVG
- 24 research icons (SVG)
- Social icons (SVG)
- Decorative patterns optional

---

## 7. Component Library (Atomic Design)

- **Atoms:** Buttons, Inputs, Typography, Colors
- **Molecules:** Search bar, Form groups
- **Organisms:** Nav, Footer, Gallery
- **Templates:** Homepage, Directory, News
- **Pages:** Specific content

---

## 8. Tech Stack (Lovable/Dev)

- **Framework:** React/Next.js
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Icons:** Heroicons/lucide-react
- **State:** Zustand / Context

### Example Package.json Section

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^10.0.0",
    "lucide-react": "^0.300.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0"
  }
}
```

---

## 9. Maintenance Requirements

- **Content management:** CMS integration for news/faculty updates
- **Security patches + dependency updates** monthly
- **Content refresh:** monthly review
- **Analytics review:** dashboard checks monthly

---

## 10. Special Specifications

- Optional **Dark Mode** toggle (palette inversion + persistence)
- **Internationalization-ready**: language switch, localized dates/numbers
- **Print CSS styles** for academic use

---

## 11. Developer Handoff Checklist

- ☐ Responsive Figma prototypes
- ☐ Interaction specs for hover/scroll animations
- ☐ Accessible component documentation
- ☐ Copy/image/video assets
- ☐ Design tokens exported (color, type, spacing)
