# SEO Optimization Plan for Fenes Klaudia Portfolio
**Angular 20 + GitHub Pages Deployment**

---

## Executive Summary

This document outlines a comprehensive SEO strategy for your makeup artist portfolio website (fenesklaudia.com). The main challenge is that Angular Single Page Applications (SPAs) render content client-side, making it difficult for search engines to index dynamic content. This plan addresses that limitation through pre-rendering, meta tag management, schema markup, and performance optimization.

**Current State:**
- ✅ Custom domain (fenesklaudia.com) via GitHub Pages
- ✅ Modern Angular framework (v20)
- ✅ Responsive design with Bootstrap + Angular Material
- ❌ No server-side rendering or pre-rendering
- ❌ Limited meta tag management
- ❌ No schema markup
- ❌ No XML sitemap or robots.txt
- ❌ Image optimization not fully leveraged

---

## 1. Dynamic Meta Tags & Page Titles Strategy

### Problem
Currently, all pages share the same title "Fenes Klaudia Makeup Artist" with no page-specific descriptions or Open Graph metadata. Search engines and social media see identical metadata across all routes.

### Solution

#### Step 1.1: Create a Centralized SEO Service
Create `src/app/services/seo.service.ts` to manage all meta tags dynamically:

```typescript
import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  author?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private pageMetadata: { [key: string]: PageMetadata } = {
    '/': {
      title: 'Makeup Artist | Fenes Klaudia - Professional Makeup Services',
      description: 'Professional makeup artist offering bridal, wedding, and event makeup services. View portfolio and book your appointment.',
      keywords: ['makeup artist', 'bridal makeup', 'wedding makeup', 'makeup services', 'professional makeup'],
      ogType: 'website',
      ogImage: 'https://fenesklaudia.com/assets/images/logo.png'
    },
    '/galery': {
      title: 'Makeup Gallery | Professional Portfolio - Fenes Klaudia',
      description: 'Browse our professional makeup portfolio. See stunning bridal, wedding, and event makeup transformations.',
      keywords: ['makeup gallery', 'makeup portfolio', 'makeup before after', 'bridal makeup gallery'],
      ogType: 'website'
    },
    '/prices': {
      title: 'Makeup Services Pricing | Fenes Klaudia',
      description: 'Affordable makeup artist pricing for bridal, wedding, event, and special occasion makeup services.',
      keywords: ['makeup prices', 'makeup cost', 'makeup services pricing', 'bridal makeup price'],
      ogType: 'website'
    },
    '/services': {
      title: 'Makeup Services | Professional Makeup Artist - Fenes Klaudia',
      description: 'Professional makeup services including bridal, wedding, event makeup, and more. Book your makeup artist today.',
      keywords: ['makeup services', 'professional makeup', 'bridal makeup', 'makeup artist services'],
      ogType: 'website'
    },
    '/about-me': {
      title: 'About Me | Professional Makeup Artist - Fenes Klaudia',
      description: 'Learn about Klaudia Fenes, a professional makeup artist with years of experience in bridal and event makeup.',
      keywords: ['makeup artist about', 'professional makeup artist', 'makeup artist experience', 'makeup artist bio'],
      ogType: 'website'
    },
    '/contact-me': {
      title: 'Contact Me | Book Your Makeup Artist - Fenes Klaudia',
      description: 'Get in touch with Fenes Klaudia for makeup services. Contact form, phone, email, and social media links.',
      keywords: ['contact makeup artist', 'book makeup artist', 'makeup artist contact'],
      ogType: 'website'
    }
  };

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router
  ) {
    this.initializeRouteTracking();
  }

  private initializeRouteTracking(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateMetaTags(event.urlAfterRedirects);
      });
  }

  public updateMetaTags(route: string): void {
    const metadata = this.pageMetadata[route] || this.getDefaultMetadata();
    
    // Update title
    this.titleService.setTitle(metadata.title);
    
    // Update meta tags
    this.metaService.updateTag({ name: 'description', content: metadata.description });
    this.metaService.updateTag({ name: 'keywords', content: metadata.keywords.join(', ') });
    this.metaService.updateTag({ name: 'author', content: metadata.author || 'Fenes Klaudia' });
    
    // Open Graph tags for social media
    this.metaService.updateTag({ property: 'og:title', content: metadata.title });
    this.metaService.updateTag({ property: 'og:description', content: metadata.description });
    this.metaService.updateTag({ property: 'og:type', content: metadata.ogType || 'website' });
    if (metadata.ogImage) {
      this.metaService.updateTag({ property: 'og:image', content: metadata.ogImage });
    }
    
    // Canonical URL
    const canonical = metadata.canonical || `https://fenesklaudia.com${route}`;
    const link = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonical);
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(link);
    }
    
    // Twitter Card tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: metadata.title });
    this.metaService.updateTag({ name: 'twitter:description', content: metadata.description });
    if (metadata.ogImage) {
      this.metaService.updateTag({ name: 'twitter:image', content: metadata.ogImage });
    }
  }

  private getDefaultMetadata(): PageMetadata {
    return {
      title: 'Fenes Klaudia - Professional Makeup Artist',
      description: 'Professional makeup artist offering makeup services for weddings, events, and special occasions.',
      keywords: ['makeup artist', 'professional makeup'],
      ogType: 'website'
    };
  }

  public setPageMetadata(path: string, metadata: Partial<PageMetadata>): void {
    this.pageMetadata[path] = { ...this.pageMetadata[path], ...metadata };
  }
}
```

#### Step 1.2: Inject SeoService into App Component
Update `app.component.ts`:

```typescript
import { SeoService } from './services/seo.service';

export class AppComponent {
  title = 'fenesklaudia';
  loaded = true;

  constructor(
    private seoService: SeoService,
    // ...other dependencies
  ) {
    // SeoService will automatically handle route changes via NavigationEnd subscription
  }
}
```

#### Step 1.3: Update index.html with Essential Base Meta Tags

```html
<head>
    <meta charset="utf-8">
    <title>Fenes Klaudia - Professional Makeup Artist</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Professional makeup artist offering bridal, wedding, and event makeup services.">
    <meta name="keywords" content="makeup artist, bridal makeup, professional makeup">
    <meta name="author" content="Fenes Klaudia">
    <meta name="theme-color" content="#d4a574">
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="Fenes Klaudia - Professional Makeup Artist">
    <meta property="og:description" content="Professional makeup artist offering bridal, wedding, and event makeup services.">
    <meta property="og:image" content="https://fenesklaudia.com/assets/images/logo.png">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://fenesklaudia.com">
    <meta property="og:site_name" content="Fenes Klaudia">
    
    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Fenes Klaudia - Professional Makeup Artist">
    <meta name="twitter:description" content="Professional makeup artist offering bridal, wedding, and event makeup services.">
    
    <!-- Canonical URL (will be updated by SeoService per route) -->
    <link rel="canonical" href="https://fenesklaudia.com/">
    
    <!-- Icons -->
    <link href="favicon.ico" rel="icon" type="image/x-icon">
    <link rel="apple-touch-icon" href="favicon.ico">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Roboto:ital,wght@0,200;1,200&display=swap" rel="stylesheet">
    
    <!-- Preload critical resources -->
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Roboto:ital,wght@0,200;1,200&display=swap">
</head>
```

---

## 2. Pre-rendering Static Pages for Full SEO Compliance

### Problem
Search engines struggle with client-side rendered SPAs. Google may not execute JavaScript or may deprioritize it.

### Solution

#### Step 2.1: Implement Prerendering with Scully

**Install Scully:**
```bash
npm install --save-dev @scullyio/init @scullyio/scully
```

**Initialize Scully:**
```bash
npx ng add @scullyio/init
```

**Configure `scully.config.ts`:**
```typescript
import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'fenesklaudia',
  outDir: './dist/static',
  defaultPostRenderers: [],
  routes: {
    // Static routes that should be pre-rendered
    '/': {
      type: 'default'
    },
    '/galery': {
      type: 'default'
    },
    '/prices': {
      type: 'default'
    },
    '/contact-me': {
      type: 'default'
    },
    '/services': {
      type: 'default'
    },
    '/about-me': {
      type: 'default'
    }
  },
  extraRoutes: []
};
```

**Build and pre-render:**
```bash
npm run build
npx scully
```

#### Step 2.2: Alternative - Simple Prerendering Script

Create `scripts/prerender.js` for manual static generation if Scully integration is complex:

```javascript
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const routes = ['/', '/galery', '/prices', '/contact-me', '/services', '/about-me'];
const baseUrl = 'http://localhost:4200';
const outputDir = 'dist/fenesklaudia';

async function prerender() {
  const browser = await puppeteer.launch();
  
  for (const route of routes) {
    console.log(`Prerendering ${route}...`);
    const page = await browser.newPage();
    await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle2' });
    
    const html = await page.content();
    const filePath = path.join(outputDir, route === '/' ? 'index.html' : `${route}.html`);
    
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);
    
    await page.close();
  }
  
  await browser.close();
  console.log('Prerendering complete!');
}

prerender();
```

---

## 3. Schema Markup & Structured Data (JSON-LD)

### Problem
Search engines don't know what type of content your site contains. Rich snippets require schema markup.

### Solution

#### Step 3.1: Create Schema Service

Create `src/app/services/schema.service.ts`:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchemaService {
  private schemaScript: HTMLScriptElement | null = null;

  constructor() {}

  public setLocalBusinessSchema(data?: any): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://fenesklaudia.com',
      'name': 'Fenes Klaudia - Makeup Artist',
      'description': 'Professional makeup artist for bridal, wedding, and event makeup services',
      'url': 'https://fenesklaudia.com',
      'telephone': '+36-YOUR-PHONE', // TODO: Add your phone
      'email': 'info@fenesklaudia.com', // TODO: Add your email
      'image': 'https://fenesklaudia.com/assets/images/logo.png',
      'sameAs': [
        'https://www.facebook.com/fenesklaudia', // TODO: Update with actual Facebook URL
        'https://www.tiktok.com/@fenesklaudia' // TODO: Update with actual TikTok URL
      ],
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'HU',
        'addressRegion': 'Budapest' // TODO: Update with your location
      },
      'areaServed': 'HU',
      'priceRange': '$$'
    };

    this.injectSchema(schema);
  }

  public setServiceSchema(service: any): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': service.name,
      'description': service.description,
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Fenes Klaudia',
        'url': 'https://fenesklaudia.com'
      },
      'areaServed': 'HU',
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Makeup Services',
        'itemListElement': [
          {
            '@type': 'Service',
            'name': service.name,
            'offers': {
              '@type': 'Offer',
              'price': service.price,
              'priceCurrency': 'HUF'
            }
          }
        ]
      }
    };

    this.injectSchema(schema);
  }

  public setBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>): void {
    const items = breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': crumb.url
    }));

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items
    };

    this.injectSchema(schema);
  }

  public setImageGallerySchema(images: any[]): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      'name': 'Makeup Portfolio Gallery',
      'url': 'https://fenesklaudia.com/galery',
      'associatedMedia': images.map(img => ({
        '@type': 'ImageObject',
        'url': img.url,
        'name': img.title || 'Makeup Portfolio',
        'description': img.description || 'Professional makeup transformation'
      }))
    };

    this.injectSchema(schema);
  }

  public setPriceSchema(prices: any[]): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'PriceSpecification',
      'priceCurrency': 'HUF',
      'offers': prices.map(price => ({
        '@type': 'Offer',
        'name': price.name,
        'price': price.amount
      }))
    };

    this.injectSchema(schema);
  }

  private injectSchema(schema: any): void {
    // Remove existing schema script if present
    if (this.schemaScript && this.schemaScript.parentNode) {
      this.schemaScript.parentNode.removeChild(this.schemaScript);
    }

    // Create and inject new schema script
    this.schemaScript = document.createElement('script');
    this.schemaScript.type = 'application/ld+json';
    this.schemaScript.text = JSON.stringify(schema);
    document.head.appendChild(this.schemaScript);
  }
}
```

#### Step 3.2: Inject Schema Service into Components

Update components to call appropriate schema methods:

**app.component.ts:**
```typescript
export class AppComponent {
  constructor(private schemaService: SchemaService) {
    this.schemaService.setLocalBusinessSchema();
  }
}
```

**services.component.ts:**
```typescript
export class ServicesComponent implements OnInit {
  constructor(private schemaService: SchemaService) {}

  ngOnInit(): void {
    this.schemaService.setServiceSchema({
      name: 'Professional Makeup Services',
      description: 'Bridal, wedding, and event makeup'
    });
  }
}
```

---

## 4. XML Sitemap & Robots.txt Configuration

### Problem
Search engines don't know which pages to crawl or how often to visit.

### Solution

#### Step 4.1: Create robots.txt

Create `src/assets/robots.txt`:

```txt
User-agent: *
Allow: /
Disallow: /admin
Disallow: /assets/
Allow: /assets/images/

Sitemap: https://fenesklaudia.com/sitemap.xml

# Crawl delay for respectful crawling
Crawl-delay: 1

# Block bad bots
User-agent: AhrefsBot
User-agent: SemrushBot
Disallow: /
```

#### Step 4.2: Create Dynamic Sitemap

Create `src/assets/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    <!-- Homepage -->
    <url>
        <loc>https://fenesklaudia.com/</loc>
        <lastmod>2024-03-18</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>

    <!-- Gallery -->
    <url>
        <loc>https://fenesklaudia.com/galery</loc>
        <lastmod>2024-03-18</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>

    <!-- Prices -->
    <url>
        <loc>https://fenesklaudia.com/prices</loc>
        <lastmod>2024-03-18</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>

    <!-- Services -->
    <url>
        <loc>https://fenesklaudia.com/services</loc>
        <lastmod>2024-03-18</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>

    <!-- About -->
    <url>
        <loc>https://fenesklaudia.com/about-me</loc>
        <lastmod>2024-03-18</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.7</priority>
    </url>

    <!-- Contact -->
    <url>
        <loc>https://fenesklaudia.com/contact-me</loc>
        <lastmod>2024-03-18</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>

    <!-- Image Sitemap Examples -->
    <url>
        <loc>https://fenesklaudia.com/galery</loc>
        <image:image>
            <image:loc>https://fenesklaudia.com/assets/images/galery/sample1.jpg</image:loc>
            <image:title>Bridal Makeup Portfolio</image:title>
        </image:image>
    </url>
</urlset>
```

#### Step 4.3: Update angular.json to Include Static Files

In `angular.json`, ensure robots.txt and sitemap.xml are copied:

```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  {
    "glob": "robots.txt",
    "input": "src/assets",
    "output": "/"
  },
  {
    "glob": "sitemap.xml",
    "input": "src/assets",
    "output": "/"
  }
]
```

#### Step 4.4: Submit to Search Engines

1. **Google Search Console:**
   - Go to https://search.google.com/search-console
   - Add property: https://fenesklaudia.com
   - Verify via HTML file upload to `src/assets/google[verification-code].html`
   - Submit sitemap.xml

2. **Bing Webmaster Tools:**
   - Go to https://www.bing.com/webmaster
   - Add site and submit sitemap

---

## 5. Image Optimization Strategy

### Problem
Large, unoptimized images slow down page load and hurt Core Web Vitals. Gallery images aren't SEO-friendly.

### Solution

#### Step 5.1: Enhanced Image Lazy Loading

Update `src/app/directives/image-load.directive.ts`:

```typescript
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'img[appImageLoad]',
  standalone: false
})
export class ImageLoadDirective implements OnInit {
  @Input() appImageLoad: string = 'auto'; // 'lazy' | 'eager' | 'auto'

  constructor(
    private el: ElementRef<HTMLImageElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const img = this.el.nativeElement;

    // Add lazy loading
    if (this.appImageLoad === 'lazy' || this.appImageLoad === 'auto') {
      this.renderer.setAttribute(img, 'loading', 'lazy');
    }

    // Add alt text if missing (important for SEO)
    if (!img.getAttribute('alt')) {
      this.renderer.setAttribute(img, 'alt', 'Makeup portfolio image');
    }

    // Add native lazy loading with IntersectionObserver fallback
    if ('loading' in img) {
      // Browser supports loading attribute
      img.loading = this.appImageLoad === 'eager' ? 'eager' : 'lazy';
    } else {
      // Fallback for older browsers
      this.setupIntersectionObserver();
    }

    // Add responsive images support
    this.addResponsiveImageSupport();
  }

  private setupIntersectionObserver(): void {
    const img = this.el.nativeElement;
    
    if (!('IntersectionObserver' in window)) {
      img.src = img.dataset.src || img.src;
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const imgElement = entry.target as HTMLImageElement;
          imgElement.src = imgElement.dataset.src || imgElement.src;
          observer.unobserve(imgElement);
        }
      });
    });

    observer.observe(img);
  }

  private addResponsiveImageSupport(): void {
    const img = this.el.nativeElement;
    
    // Add width and height attributes for layout stability (CLS prevention)
    if (!img.hasAttribute('width') && img.dataset.width) {
      this.renderer.setAttribute(img, 'width', img.dataset.width);
    }
    if (!img.hasAttribute('height') && img.dataset.height) {
      this.renderer.setAttribute(img, 'height', img.dataset.height);
    }
  }
}
```

#### Step 5.2: Image Compression Strategy

Create a script to optimize images before deployment:

```bash
# Install image optimization tools
npm install --save-dev imagemin imagemin-mozjpeg imagemin-pngquant imagemin-webp
```

Create `scripts/optimize-images.js`:

```javascript
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');

async function optimizeImages() {
  console.log('Optimizing images...');

  // Optimize JPEG and PNG
  await imagemin(['src/assets/images/**/*.{jpg,png}'], {
    destination: 'src/assets/images',
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  // Generate WebP versions
  await imagemin(['src/assets/images/**/*.{jpg,png}'], {
    destination: 'src/assets/images/webp',
    plugins: [
      imageminWebp({ quality: 75 })
    ]
  });

  console.log('Images optimized successfully!');
}

optimizeImages();
```

Add to `package.json`:
```json
"scripts": {
  "optimize-images": "node scripts/optimize-images.js",
  "build": "npm run optimize-images && ng build"
}
```

#### Step 5.3: WebP Format with Fallback

Update component templates to use WebP with JPEG fallback:

```html
<picture>
  <source srcset="assets/images/webp/gallery-image.webp" type="image/webp">
  <img src="assets/images/gallery/gallery-image.jpg" 
       alt="Professional bridal makeup transformation" 
       appImageLoad="lazy"
       width="600" 
       height="400">
</picture>
```

---

## 6. Core Web Vitals & Performance Optimization

### Problem
Poor Core Web Vitals (LCP, FID, CLS) hurt search rankings and user experience.

### Solution

#### Step 6.1: Monitor Core Web Vitals

Create `src/app/services/web-vitals.service.ts`:

```typescript
import { Injectable } from '@angular/core';

declare global {
  interface Window {
    webVitals?: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class WebVitalsService {
  constructor() {
    this.initializeWebVitals();
  }

  private initializeWebVitals(): void {
    // Dynamically load web-vitals
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/web-vitals@4/dist/web-vitals.iife.js';
    script.async = true;
    script.onload = () => {
      if (window.webVitals) {
        // Log metrics (in production, send to analytics service)
        window.webVitals.onCLS(this.logMetric.bind(this, 'CLS'));
        window.webVitals.onFID(this.logMetric.bind(this, 'FID'));
        window.webVitals.onLCP(this.logMetric.bind(this, 'LCP'));
        window.webVitals.onTTFB(this.logMetric.bind(this, 'TTFB'));
        window.webVitals.onINP(this.logMetric.bind(this, 'INP'));
      }
    };
    document.head.appendChild(script);
  }

  private logMetric(name: string, metric: any): void {
    console.log(`${name}:`, metric.value);
    
    // In production, send to Google Analytics or custom backend
    if (typeof gtag !== 'undefined') {
      gtag('event', name, {
        value: Math.round(metric.value),
        event_category: 'web_vitals',
        event_label: metric.id,
        non_interaction: true
      });
    }
  }
}
```

#### Step 6.2: Angular Bundle Optimization

Update `angular.json` for production build:

```json
"production": {
  "budgets": [
    {
      "type": "initial",
      "maximumWarning": "500kb",
      "maximumError": "1mb"
    },
    {
      "type": "anyComponentStyle",
      "maximumWarning": "2kb",
      "maximumError": "4kb"
    }
  ],
  "outputHashing": "all",
  "optimization": true,
  "buildOptimizer": true,
  "sourceMap": false,
  "namedChunks": false,
  "extractLicenses": true,
  "vendorChunk": false
}
```

#### Step 6.3: Font Loading Optimization

Update `index.html` to use font-display: swap:

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Roboto:ital,wght@0,200;1,200&display=swap" rel="stylesheet">
```

The `display=swap` parameter ensures text remains visible during font load (FOUT).

#### Step 6.4: Route-level Code Splitting

Update `app-routing.module.ts` to use lazy loading:

```typescript
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { 
    path: 'galery', 
    loadChildren: () => import('./pages/galery-component/galery.module').then(m => m.GaleryModule)
  },
  { 
    path: 'prices', 
    loadChildren: () => import('./pages/prices-component/prices.module').then(m => m.PricesModule)
  },
  // ... other routes
  { path: '**', component: PageNotFoundComponent }
];
```

---

## 7. Accessibility for SEO

### Problem
Poor accessibility signals to search engines that content may be hard to consume. WCAG compliance improves both UX and rankings.

### Solution

#### Step 7.1: HTML Semantic Improvements

Review components for:

1. **Proper Heading Hierarchy:**
   ```html
   <h1>Main Page Title</h1>
   <h2>Subheading</h2>
   <h3>Sub-subheading</h3>
   ```

2. **Semantic HTML Elements:**
   ```html
   <header>Navigation</header>
   <main>Page Content</main>
   <section>Gallery Section</section>
   <aside>Related Content</aside>
   <footer>Footer</footer>
   ```

3. **ARIA Labels for Images:**
   ```html
   <img src="makeup.jpg" alt="Professional bridal makeup with natural pink tones" 
        aria-label="Before and after bridal makeup transformation">
   ```

#### Step 7.2: Form Accessibility (Contact Component)

Ensure contact form has:

```html
<form [formGroup]="contactForm">
  <div class="form-group">
    <label for="name">Your Name *</label>
    <input id="name" 
           type="text" 
           formControlName="name"
           required
           aria-required="true"
           aria-describedby="name-help">
    <small id="name-help">Enter your full name</small>
  </div>

  <div class="form-group">
    <label for="email">Email Address *</label>
    <input id="email" 
           type="email" 
           formControlName="email"
           required
           aria-required="true"
           aria-describedby="email-help">
    <small id="email-help">We'll never share your email</small>
  </div>

  <button type="submit" aria-label="Send contact form">Send</button>
</form>
```

#### Step 7.3: Image Slider Accessibility

Update `image-slider-wrapper.component.ts` with ARIA support:

```typescript
export class ImageSliderWrapperComponent implements OnInit, OnDestroy {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;

  ngOnInit(): void {
    // Add ARIA attributes for carousel/slider
    if (this.sliderContainer) {
      this.sliderContainer.nativeElement.setAttribute('role', 'region');
      this.sliderContainer.nativeElement.setAttribute('aria-label', 'Makeup portfolio gallery');
      this.sliderContainer.nativeElement.setAttribute('aria-live', 'polite');
    }
  }
}
```

---

## 8. Internal Linking & URL Structure

### Problem
Poor internal linking structure reduces crawlability and doesn't distribute link equity effectively.

### Solution

#### Step 8.1: Enhance Routing for SEO-Friendly URLs

Current routes are good. Ensure service routes use URL slugs instead of IDs:

**Good:**
- `/services/bridal-makeup`
- `/services/wedding-makeup`
- `/services/event-makeup`

**Bad:**
- `/services/1`
- `/services/2`

Update `app-routing.module.ts`:

```typescript
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'galery', component: GaleryComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:slug', component: ServicesComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: PageNotFoundComponent }
];
```

#### Step 8.2: Internal Linking Best Practices

Create component template snippets with contextual links:

**In galery component:**
```html
<p>Love this look? <a routerLink="/services/bridal-makeup" 
                       title="View our bridal makeup services">
                       Check our bridal makeup service</a></p>
```

**In services component:**
```html
<p>See examples in our <a routerLink="/galery" 
                         title="View our makeup portfolio">
                         makeup gallery</a></p>
```

**In prices component:**
```html
<p>Interested? <a routerLink="/contact-me" 
                  title="Book a makeup appointment">
                  Contact us to book</a></p>
```

#### Step 8.3: Breadcrumb Navigation

Add to all page templates:

```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a routerLink="/" title="Home">Home</a>
    </li>
    <li class="breadcrumb-item" *ngIf="currentPage !== 'home'">
      {{ currentPageTitle }}
    </li>
  </ol>
</nav>
```

---

## 9. Social Media Integration & Metadata

### Problem
Social media shares don't display rich previews without proper Open Graph tags.

### Solution

#### Step 9.1: Enhance Open Graph Implementation

Already covered in Section 1 (SeoService). Additionally, add specific metadata per route:

**Gallery page Open Graph:**
```typescript
'/galery': {
  title: 'Makeup Gallery | Professional Portfolio - Fenes Klaudia',
  description: 'Browse our professional makeup portfolio. See stunning bridal, wedding, and event makeup transformations.',
  ogImage: 'https://fenesklaudia.com/assets/images/galery/portfolio-sample.jpg',
  ogType: 'website'
}
```

#### Step 9.2: Structured Social Links

In footer or navbar component:

```html
<div class="social-links">
  <a href="https://www.facebook.com/fenesklaudia" 
     rel="me" 
     target="_blank"
     title="Visit our Facebook page"
     aria-label="Facebook profile">
    <i class="fab fa-facebook"></i>
  </a>
  <a href="https://www.tiktok.com/@fenesklaudia" 
     rel="me" 
     target="_blank"
     title="Visit our TikTok profile"
     aria-label="TikTok profile">
    <i class="fab fa-tiktok"></i>
  </a>
</div>
```

#### Step 9.3: Schema Markup for Social Profiles

In `schema.service.ts`, add to LocalBusinessSchema:

```typescript
'sameAs': [
  'https://www.facebook.com/fenesklaudia',
  'https://www.tiktok.com/@fenesklaudia',
  'https://www.instagram.com/fenesklaudia'
]
```

---

## 10. Monitoring, Testing & Measurement

### Problem
Without measurement, you can't know if SEO optimizations are working.

### Solution

#### Step 10.1: Google Search Console Setup

1. Verify domain ownership
2. Submit sitemap: https://fenesklaudia.com/sitemap.xml
3. Monitor:
   - Organic search traffic
   - Indexed pages
   - Search queries
   - Mobile usability issues
   - Core Web Vitals

#### Step 10.2: Google Analytics 4 Integration

Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-GA4-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR-GA4-ID');
</script>
```

#### Step 10.3: SEO Testing Tools Checklist

Regularly test with:

- **Google PageSpeed Insights:** https://pagespeed.web.dev
- **Google Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **Schema.org Validator:** https://validator.schema.org
- **Lighthouse Audit:** Chrome DevTools > Lighthouse
- **W3C Markup Validator:** https://validator.w3.org
- **WAVE Accessibility:** https://wave.webaim.org

---

## 11. Implementation Roadmap (Priority Order)

### Phase 1 (Immediate - Week 1-2)
- [ ] Implement SeoService for dynamic meta tags
- [ ] Create robots.txt and sitemap.xml
- [ ] Add schema markup for local business
- [ ] Update index.html with Open Graph tags
- [ ] Submit sitemap to Google Search Console

### Phase 2 (Short-term - Week 3-4)
- [ ] Set up pre-rendering with Scully or alternative
- [ ] Optimize images (compression + WebP)
- [ ] Implement web vitals monitoring
- [ ] Enhance accessibility (semantic HTML, ARIA labels)
- [ ] Add breadcrumb navigation

### Phase 3 (Medium-term - Month 2)
- [ ] Implement route-level code splitting for lazy loading
- [ ] Enhance internal linking strategy
- [ ] Set up Google Analytics 4
- [ ] Create service-specific landing pages
- [ ] Implement image lazy loading directive

### Phase 4 (Long-term - Month 3+)
- [ ] A/B test meta descriptions and titles
- [ ] Build backlink strategy (local directories, social mentions)
- [ ] Create content strategy for blog/FAQ section
- [ ] Monitor and refine based on analytics
- [ ] Implement structured review schema (if offering services)

---

## 12. Additional Resources

### Documentation
- [Angular SEO Guide](https://angular.io/guide/universal)
- [Google Search Central SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org)
- [Web.dev Performance Guide](https://web.dev/performance)

### Tools
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- Scully Static Site Generator: https://scully.io
- ImageMin for optimization: https://github.com/imagemin/imagemin

### GitHub Pages Specific
- [GitHub Pages Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-site)
- [GitHub Pages Performance Optimization](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

---

## 13. FAQ & Troubleshooting

**Q: Will pre-rendering increase my build time significantly?**
A: Yes, by 30-60 seconds depending on number of routes. This is acceptable for a static portfolio.

**Q: Do I need a server for SSR?**
A: No. Pre-rendering generates static HTML files, compatible with GitHub Pages.

**Q: How often should I update the sitemap?**
A: Update `lastmod` and `changefreq` tags whenever content changes.

**Q: Will social media embeds hurt SEO?**
A: The existing Facebook and TikTok embed scripts load asynchronously, so minimal impact. Consider using `async` and `defer` attributes.

**Q: Should I implement i18n for English?**
A: If targeting international clients, yes. Use hreflang tags and separate route trees per language.

---

## Conclusion

This SEO optimization plan transforms your Angular portfolio from a standard SPA into a search-engine-optimized, accessible, and performant web application. Focus on Phase 1 items first, as they provide the highest ROI with minimal implementation effort.

**Expected Outcomes (3-6 months):**
- Improved ranking for "makeup artist Budapest" and related keywords
- Better search visibility for branded terms
- Higher click-through rate from search results (CTR) via rich snippets
- Improved Core Web Vitals scores
- Better social media preview when shared

Good luck with your optimization journey! 🚀
