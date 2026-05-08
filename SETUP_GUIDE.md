# Traceability Website - Setup & Deployment Guide

## 🚀 Quick Start

### 1. Installation

```bash
# Navigate to project directory
cd Traceability

# Install all dependencies
npm install
```

### 2. Development

```bash
# Start development server
npm run dev

# Open browser and navigate to:
# http://localhost:3000
```

### 3. Build & Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📋 Project Overview

### Site Structure (8 Main Pages)

1. **Home Page** (`/`)
   - Hero slider with 3 slides
   - FAQ accordion
   - Solutions & Products tabs
   - Reference projects carousel
   - Strategic partners
   - Performance metrics
   - Blog preview

2. **Contact** (`/contact`)
   - Contact form with React Hook Form
   - Contact information
   - Google Maps

3. **Blog** (`/blog`)
   - Blog listing (9 posts per page)
   - Category filtering
   - Search functionality
   - Pagination

4. **Blog Detail** (`/blog/[slug]`)
   - Full article content
   - Social sharing buttons
   - Related articles

5. **Reference Projects** (`/proiecte-de-referinta`)
   - Projects grid
   - Sector filtering
   - Project details

6. **Portfolio Detail** (`/portfolio/[slug]`)
   - Project case study
   - Results and metrics
   - Related projects

7. **Solution Partners** (`/solution-partners/[slug]`)
   - Partner information
   - Partnership benefits
   - Related partners

8. **End-to-End Traceability** (`/trasabilitate-end-to-end`)
   - Service overview
   - Feature highlights
   - CTA sections

### Data Structure

All data is static and stored in `/data/` folder:

- `blogPosts.js` - 7 blog articles
- `solutions.js` - 6 solutions + 4 products
- `partners.js` - 5 strategic partners
- `references.js` - 5 reference projects

### Component Architecture

#### Layout Components
- `Header.js` - Navigation with mobile menu & language selector
- `Footer.js` - Multi-column footer with newsletter signup
- `Layout.js` - Main layout wrapper

#### Home Page Components
- `HeroSlider.js` - Auto-rotating hero section
- `FaqAccordion.js` - 3-item accordion with smooth animation
- `SolutionsTabs.js` - Solutions & products tabs
- `ReferenceProjects.js` - Projects carousel
- `StrategicPartners.js` - Partners grid
- `PerformanceMetrics.js` - Counter animations with IntersectionObserver
- `BlogPreview.js` - 3 latest blog posts preview

#### UI Components
- `Button.js` - Reusable button with 4 variants
- `Container.js` - Max-width responsive container
- `SectionHeader.js` - Animated section titles
- `BlogCard.js` - Blog post card
- `ProjectCard.js` - Project case study card

## 🎨 Design System

### Colors (Tailwind)
```javascript
primary-black: #0a0a2b
primary-white: #ffffff
dark-bg: #1a1a2e
gray-text: #5b616b
gray-light: #d6d7d9
accent-blue: #0082d2
accent-green: #0d9246
accent-yellow: #8cc63f
accent-red: #bf1e2e
```

### Typography
- Fonts: Inter, Nunito (Google Fonts)
- Font sizes use `clamp()` for responsive scaling
- Headings: bold/semibold
- Body: gray-text color

### Components
- Buttons: rounded-full with hover scale
- Cards: rounded-2xl with shadow
- Inputs: rounded-lg with border focus

## 🔧 Technology Stack

```
Frontend:
- Next.js 14.0.0
- React 18.2.0
- JavaScript (ES6+)
- Tailwind CSS 3.3.0
- Framer Motion 10.16.4

Forms & Utilities:
- React Hook Form 7.48.0
- Swiper 10.0.0
- react-icons 4.12.0

Build Tools:
- PostCSS 8.4.31
- Autoprefixer 10.4.16
```

## 📱 Responsive Breakpoints

```
Mobile:        375px - 639px
Tablet:        640px - 1023px
Desktop:       1024px+
Large Desktop: 1280px+
```

## 🛠️ Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🌐 Language Support

Header includes language selector:
- **Română** (ro) - Current site
- **Engleză** (en) - Redirects to `https://traceability.com.tr`
- **Turcă** (tr) - Redirects to `https://traceability.tr`

Update in `Header.js` if URLs change.

## 📝 Content Management

### Blog Posts
Located in `/data/blogPosts.js`:
```javascript
{
  id: 1,
  title: "Article Title",
  slug: "article-slug",
  category: "Category Name",
  date: "YYYY-MM-DD",
  author: "Author Name",
  excerpt: "Short summary",
  content: "<html>Full content</html>"
}
```

### Solutions & Products
Located in `/data/solutions.js`:
```javascript
{
  id: 1,
  title: "Solution Title",
  description: "Solution description",
  icon: "icon-name", // See iconMap in SolutionsTabs.js
}
```

### Strategic Partners
Located in `/data/partners.js`:
```javascript
{
  id: 1,
  name: "Partner Name",
  slug: "partner-slug",
  description: "Short description",
  website: "https://website.com",
  fullDescription: "Detailed description"
}
```

### Reference Projects
Located in `/data/references.js`:
```javascript
{
  id: 1,
  title: "Project Title",
  slug: "project-slug",
  sector: "Automotive|Gıda|Beyaz Eşya|İlaç",
  description: "Project description",
  technologies: ["Tech1", "Tech2"],
  results: {
    efficiency: "35%",
    defects: "60%",
    productivity: "40%"
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t traceability .
docker run -p 3000:3000 traceability
```

### Traditional Server
```bash
# Build
npm run build

# Deploy dist/ and package files
# Install on server:
npm install --production
npm start
```

## 📊 Performance Tips

1. **Images**: Use WebP format with fallbacks
2. **Lazy Loading**: Components auto-lazy with IntersectionObserver
3. **Code Splitting**: Next.js handles automatically
4. **CSS**: Tailwind PurgeCSS removes unused styles
5. **Animations**: Framer Motion optimizes transforms

## 🔒 Security Considerations

1. **Form Data**: Currently logs to console. Implement backend API for production
2. **Environment Variables**: Create `.env.local` for sensitive data:
   ```
   NEXT_PUBLIC_API_URL=your_api_url
   NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key
   ```
3. **CORS**: Configure properly for backend APIs
4. **Validation**: Use server-side validation in production

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build -- --debug
```

### Tailwind not working
```bash
# Rebuild Tailwind cache
npm run dev
```

## 📞 Support & Updates

- Check `/app` folder for page structure
- Check `/components` for component reusability
- Update `/data` folder for content changes
- All styling in `globals.css` and `tailwind.config.js`

## 🎯 Next Steps

1. Add real backend API for forms
2. Connect blog to CMS
3. Add authentication if needed
4. Implement image optimization
5. Add Google Analytics
6. Set up automated backups
7. Configure email notifications

## ✅ Checklist for Production

- [ ] Update all URLs (API endpoints, social links)
- [ ] Add real contact form handler
- [ ] Configure email service
- [ ] Set up analytics (Google Analytics, Hotjar)
- [ ] Add sitemap.xml and robots.txt
- [ ] SSL certificate configured
- [ ] CDN configured for images
- [ ] Backup strategy in place
- [ ] Monitoring and alerts set up
- [ ] Performance tested (Lighthouse)

---

**Version**: 1.0.0  
**Created**: May 2026  
**Technology**: Next.js 14, React 18, Tailwind CSS
