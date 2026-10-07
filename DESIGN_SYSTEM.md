# Agencia Alamo design system

## Brand tokens

| Role | Value | Use |
| --- | --- | --- |
| Royal blue | `#1756A9` | Top bar, links, icons, location/service band |
| Deep blue | `#0D3D7B` | Hero overlay, final CTA, footer |
| Yellow | `#F5CF26` | Primary quote CTA and high-intent highlights |
| Red | `#E53945` | Phone/urgency accents only |
| Ink | `#17243A` | Headings and high-contrast copy |
| Slate | `#5F6F84` | Body copy and supporting labels |
| Soft background | `#F5F8FC` | Alternating sections |

Yellow buttons use dark text for accessible contrast. Red is not used for paragraphs or decorative body blocks.

## Typography and spacing

- Font stack: `Inter`, `Plus Jakarta Sans`, system sans-serif.
- H1: fluid `3.4rem–5.8rem`, weight 800, tight tracking.
- H2: fluid `2.25rem–3.4rem`, weight 700.
- Body copy: `1rem` minimum, `1.65–1.75` line height.
- Uppercase is reserved for small kicker labels with increased tracking.
- Desktop section rhythm: `96px` vertical padding; mobile: `64px`.
- Main content width: `1240px`.

## Core component structure

```tsx
<main className="home-v4">
  <section className="conversion-hero">
    <div className="conversion-hero-photo">...</div>
    <div className="conversion-hero-shade" />
    <div className="wrap conversion-hero-grid">
      <div className="conversion-copy">
        <div className="hero-kicker">...</div>
        <h1>Protección que <span>sí entiendes.</span></h1>
        <div className="hero-trust">...</div>
        <div className="actions">...</div>
      </div>
      <div className="hero-quote-card" id="cotizar">
        <QuoteForm />
      </div>
    </div>
  </section>

  <section className="services-section">
    <div className="modern-products">
      <a className="modern-product">...</a>
    </div>
  </section>

  <section className="value-section">
    <div className="value-grid">
      <article className="value-card">...</article>
    </div>
  </section>
</main>
```

## Interaction rules

- Cards rise no more than `4px` on hover.
- Images scale only slightly (`1.045`) to avoid distracting motion.
- Entrance animations finish in under one second.
- All transitions and animations are disabled when the visitor prefers reduced motion.
- Primary actions remain visible and full-width on mobile.

## Responsive behavior

- Desktop hero: copy left, quote card right.
- Mobile hero: image first, copy and CTAs second, quote form third.
- Three-column grids collapse to one column below `760px`.
- Phone and message controls remain reachable through the floating contact bar.
