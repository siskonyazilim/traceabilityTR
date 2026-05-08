# Traceability - Corporate Website

Modern, responsive corporate website for Traceability solutions built with Next.js 14, React 18, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Smooth animations with Framer Motion
- **Dynamic Content**: Static data management with easy integration to APIs
- **SEO Optimized**: Next.js metadata API for SEO
- **Blog System**: Full-featured blog with pagination and filtering
- **Portfolio**: Case studies and reference projects showcase
- **Contact Form**: React Hook Form with validation
- **Multi-language Support**: Language selector for multiple sites

## 📁 Project Structure

```
traceability-website/
├── app/
│   ├── layout.js                    # Root layout
│   ├── page.js                      # Home page
│   ├── globals.css                  # Global styles
│   ├── contact/
│   │   └── page.js                  # Contact page
│   ├── blog/
│   │   ├── page.js                  # Blog listing
│   │   └── [slug]/page.js           # Blog detail
│   ├── portfolio/
│   │   └── [slug]/page.js           # Portfolio detail
│   ├── proiecte-de-referinta/
│   │   └── page.js                  # Reference projects
│   ├── solution-partners/
│   │   └── [slug]/page.js           # Partner detail
│   └── trasabilitate-end-to-end/
│       └── page.js                  # End-to-end service page
├── components/
│   ├── layout/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── Layout.js
│   ├── home/
│   │   ├── HeroSlider.js
│   │   ├── FaqAccordion.js
│   │   ├── SolutionsTabs.js
│   │   ├── ReferenceProjects.js
│   │   ├── StrategicPartners.js
│   │   ├── PerformanceMetrics.js
│   │   └── BlogPreview.js
│   └── ui/
│       ├── Button.js
│       ├── Container.js
│       ├── SectionHeader.js
│       ├── BlogCard.js
│       └── ProjectCard.js
├── data/
│   ├── solutions.js
│   ├── partners.js
│   ├── references.js
│   ├── blogPosts.js
│   └── products.js
├── public/
│   ├── logos/
│   ├── images/
│   └── videos/
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Steps

1. **Clone or navigate to the project:**
```bash
cd Traceability
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📦 Build & Deploy

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  'primary-black': '#0a0a2b',
  'accent-blue': '#0082d2',
  'accent-green': '#0d9246',
  // ... more colors
}
```

### Fonts
Google Fonts are loaded in `app/layout.js`:
```javascript
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
```

### Content
Update data in `data/` folder:
- `blogPosts.js` - Blog articles
- `solutions.js` - Solutions and products
- `partners.js` - Strategic partners
- `references.js` - Reference projects

## 🔧 Technologies Used

- **Next.js 14+** - React framework
- **React 18+** - UI library
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **React Hook Form** - Form management
- **Swiper.js** - Slider component
- **react-icons** - Icon library

## 📝 Pages Overview

### Home Page (`/`)
- Hero slider (3 slides)
- FAQ accordion (3 questions)
- Solutions & Products tabs
- Reference projects carousel
- Strategic partners grid
- Performance metrics with counters
- Blog preview (3 latest posts)

### Contact Page (`/contact`)
- Contact form with validation
- Contact information cards
- Google Maps integration

### Blog Page (`/blog`)
- Blog listing with pagination
- Category filtering
- Search functionality
- Responsive grid layout

### Blog Detail (`/blog/[slug]`)
- Full article content
- Author and date information
- Social sharing buttons
- Related articles

### Portfolio Pages
- Reference projects listing with sector filtering
- Portfolio detail with results and metrics
- Related projects

### Solution Partners (`/solution-partners/[slug]`)
- Partner information and details
- Related partners
- Call-to-action section

### End-to-End Traceability (`/trasabilitate-end-to-end`)
- Service overview sections
- Feature highlights
- Benefits showcase

## 🌐 Language Support

The header includes language selector:
- Română (ro) - Current site
- Engleză (en) - Redirects to `traceability.com.tr`
- Turcă (tr) - Redirects to `traceability.tr`

## 📱 Responsive Breakpoints

- Mobile: 375px - 639px
- Tablet: 640px - 1023px
- Desktop: 1024px+

## 🔒 Security & Best Practices

- Environment variables for sensitive data (add `.env.local`)
- CORS-friendly images configuration
- Optimized Core Web Vitals
- SEO-friendly metadata
- Accessible components with ARIA labels

## 📊 Performance Optimizations

- Image optimization with Next.js `<Image>`
- Code splitting and lazy loading
- Static generation where possible
- Responsive images
- CSS optimization with Tailwind

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For issues or questions, contact the development team or create an issue in the repository.

---

**Version**: 1.0.0  
**Last Updated**: May 2026
