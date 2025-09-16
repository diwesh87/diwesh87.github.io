# Diwesh Saxena - Personal Portfolio

A production-grade personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components. Features conversion-optimized design, comprehensive SEO, accessibility compliance, and PWA capabilities.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Performance Optimized**: Target LCP ≤ 2.0s, Lighthouse scores 90+
- **Conversion-Focused**: Strategic CTAs, social proof, testimonials
- **SEO & Analytics**: next-seo, JSON-LD schema, GA4 integration
- **Accessibility**: WCAG AA compliance, keyboard navigation, focus management
- **PWA Ready**: Offline support, install prompts, app-like experience
- **Content Management**: JSON-based content with MDX blog support
- **Responsive Design**: Mobile-first with 44px touch targets
- **Dark Mode**: Theme toggle with system preference detection

## 📁 Project Structure

```
├── app/                    # Next.js app router
│   ├── (pages)/           # Route groups
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── home/             # Homepage sections
│   ├── layout/           # Layout components
│   ├── ui/               # shadcn/ui components
│   └── providers/        # Context providers
├── content/              # Content data
│   ├── profile.json      # Personal information
│   ├── work.json         # Case studies
│   ├── services.json     # Service offerings
│   ├── books.json        # Published books
│   ├── research.json     # Research papers
│   └── testimonials.json # Client testimonials
├── lib/                  # Utility functions
├── public/               # Static assets
└── test/                 # Test files
```

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd diwesh-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
NEXT_PUBLIC_GA4_ID=G-XXXXXXX
```

4. Start development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Adding a New Case Study

1. Add entry to `content/work.json`:
```json
{
  "slug": "new-project",
  "title": "New Project: Outcome achieved",
  "role": "Your Role",
  "period": "2024–Now",
  "client_or_org": "Client Name",
  "summary": "Brief description",
  "outcomes": ["Outcome 1", "Outcome 2"],
  "stack": ["Tech1", "Tech2"],
  "heroMetric": "X% improvement",
  "featured": true,
  "category": "Category"
}
```

2. Create detail page at `app/work/[slug]/page.tsx` if needed.

### Adding a Blog Post

1. Create MDX file in `app/writing/posts/[slug].mdx`:
```mdx
---
title: "Post Title"
description: "Post description"
date: "2024-01-01"
category: "AI/LLMOps"
published: true
---

# Your content here
```

### Updating Personal Information

Edit `content/profile.json` to update:
- Hero headline and subheadline
- Personal summary and keywords
- Social links and contact information
- Proof metrics and achievements

## 🎨 Design System

### Colors

- **Primary**: Teal 500 (#10B9AE) - conversion CTAs
- **Secondary**: Indigo 500 (#5A57FF) - accents
- **Emphasis**: Amber 500 (#FFB020) - highlights
- **Background**: Light (#F5F3EF) and Surface (#FFFFFF)
- **Text**: Primary (#0B1221) and Muted (#5B6473)

### Typography

- **Headlines**: Sora (700/600 weight)
- **Body/UI**: Inter (400/500/600 weight)
- **Line Heights**: 150% for body, 120% for headings

### Spacing

- Uses 8px base spacing system
- Touch targets minimum 44px on mobile
- Consistent margins and padding

## 🧪 Testing

Run tests:
```bash
npm run test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Test coverage:
```bash
npm run test:coverage
```

### Test Structure

- **Unit Tests**: Component logic and utilities
- **Integration Tests**: Component interactions
- **E2E Tests**: User workflows (Playwright)

## 📱 PWA Features

- **Manifest**: App installation support
- **Service Worker**: Offline caching (automatic via next-pwa)
- **Install Prompt**: Shown after 2 page views on mobile
- **App Icons**: 192x192 and 512x512 sizes required

## 🔧 Performance Optimization

### Image Optimization

- Use Next.js `Image` component
- WebP format with fallbacks
- Responsive images with `srcset`
- Lazy loading by default

### Core Web Vitals Targets

- **LCP**: ≤ 2.0s (Largest Contentful Paint)
- **FID**: ≤ 100ms (First Input Delay)
- **CLS**: ≤ 0.1 (Cumulative Layout Shift)

### Monitoring

- Lighthouse CI in build process
- Core Web Vitals tracking via Analytics
- Performance budgets enforced

## 📊 Analytics & Tracking

### Event Tracking

Key events tracked:
- CTA clicks (Book Call, Contact)
- Case study views
- Service page engagement
- Blog post reads
- External link clicks

### Implementation

```typescript
// Track custom event
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'click', {
    event_category: 'CTA',
    event_label: 'Book Call - Header',
    value: 1
  });
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push to main

### Environment Variables

Required for production:
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXX
```

### Build Commands

```bash
# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## ♿ Accessibility

### WCAG AA Compliance

- Color contrast ratios meet AA standards
- Keyboard navigation support
- Screen reader compatibility
- Focus management and visible focus indicators
- Semantic HTML structure
- Alt text for images
- ARIA labels where needed

### Testing

```bash
# Run accessibility tests
npm run test:a11y

# Lighthouse accessibility audit
npx lighthouse http://localhost:3000 --only-categories=accessibility
```

## 📄 License

This project is for portfolio purposes. Feel free to use as inspiration, but please don't copy directly.

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or issues:
- Email: hello@diweshsaxena.com
- LinkedIn: [diweshsaxena](https://linkedin.com/in/diweshsaxena)

---

**Built with ❤️ in Delhi–NCR, India**