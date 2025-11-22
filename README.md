# Houses Boutique - Free Real Estate Template

A modern, responsive real estate website template built with **Astro 5** and **Tailwind CSS v4**. Perfect for real estate agencies, property listings, and boutique real estate businesses.

![Astro](https://img.shields.io/badge/Astro-5-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

- 🏠 **Property Listings** - Dynamic property showcase with detailed pages
- 📍 **Location-based Search** - Filter properties by zones/neighborhoods
- 👥 **Agent Profiles** - Showcase real estate agents with contact information
- 🖼️ **Advanced Gallery** - Lightbox gallery with thumbnail navigation and swipe support
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Blazing Fast** - Static site generation for optimal performance
- 🎨 **Modern Design** - Clean, professional, and elegant UI/UX
- 🔍 **SEO Optimized** - Built-in meta tags and structured data
- ♿ **Accessible** - WCAG compliant with keyboard navigation
- 🎯 **TypeScript** - Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Framework:** Astro 5
- **Styling:** Tailwind CSS v4
- **Content Management:** Astro Content Collections
- **Icons:** Lucide Icons
- **Language:** TypeScript
- **Build Tool:** Vite

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/housesboutique.com.git
   cd housesboutique.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:4321](http://localhost:4321)

### Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Content Management

This template uses Astro Content Collections to manage properties, zones, and agents. All content is stored in Markdown files with frontmatter for easy editing.

### Properties Management

Property listings are managed in the `src/content/properties/` directory:

#### Adding a New Property

1. Create a new `.md` file in `src/content/properties/`
2. Use the following frontmatter structure:

```yaml
---
title: "Luxury Villa with Ocean View"
description: "Stunning modern villa with panoramic ocean views, infinity pool, and contemporary design"
price: 1250000
currency: "USD"
status: "sale" # Options: sale, rent, sold
location:
  address: "123 Ocean Drive, Miami Beach, FL"
  coordinates:
    lat: 25.7617
    lng: -80.1918
zone: "Miami Beach"
bedrooms: 4
bathrooms: 3
size: 320
sizeUnit: "sqm"
parking: 2
yearBuilt: 2021
agent-id: "john-smith"
images:
  - "https://example.com/image1.jpg"
  - "https://example.com/image2.jpg"
  - "https://example.com/image3.jpg"
amenities:
  - "Swimming Pool"
  - "Ocean View"
  - "Modern Kitchen"
  - "Smart Home"
facilities:
  - "Air Conditioning"
  - "Security System"
  - "Garden"
  - "Garage"
featured: true
meta:
  title: "Luxury Villa with Ocean View - Houses Boutique"
  description: "Stunning modern villa in Miami Beach with ocean views"
  keywords: ["luxury villa", "miami beach", "ocean view"]
---
# Property Description

This exquisite luxury villa represents the pinnacle of modern coastal living...

## Key Features

- Panoramic ocean views from every room
- State-of-the-art smart home technology
- Infinity pool overlooking the Atlantic
- Professional-grade kitchen with high-end appliances
- Master suite with private terrace
```

#### Property Fields Explained

- `title`: Property display name
- `description`: Detailed property description
- `price`: Property price (numeric)
- `currency`: Currency code (USD, EUR, etc.)
- `status`: sale | rent | sold
- `location`: Address and coordinates
- `zone`: Neighborhood/area
- `bedrooms`, `bathrooms`, `size`: Property specifications
- `parking`: Number of parking spaces (optional)
- `agent-id`: Reference to agent profile
- `images`: Array of property images
- `amenities`: List of property amenities
- `facilities`: List of facilities and features
- `featured`: Whether to feature on homepage
- `meta`: SEO metadata

### Agents Management

Agent profiles are managed in `src/content/agents/`:

#### Adding a New Agent

1. Create a new `.md` file in `src/content/agents/`
2. Use the following structure:

```yaml
---
agent-id: "john-smith"
name: "John Smith"
title: "Senior Real Estate Agent"
phone: "+1 (555) 123-4567"
email: "john.smith@housesboutique.com"
bio: "Experienced real estate agent specializing in luxury properties"
photo: "https://example.com/john-smith.jpg"
social:
  linkedin: "https://linkedin.com/in/johnsmith"
  twitter: "https://twitter.com/johnsmith"
  instagram: "https://instagram.com/johnsmith"
languages: ["English", "Spanish"]
specialties: ["Luxury Homes", "Beach Properties", "Investment Properties"]
experience: 10
meta:
  title: "John Smith - Real Estate Agent"
  description: "Contact John Smith for your real estate needs"
---

# About John Smith

John is a dedicated real estate professional with over a decade of experience...
```

### Zone Management

Zones/neighborhoods are automatically created from property data. To add a new zone, simply use the zone name in property frontmatter.

## 🎨 Customization

### Colors and Styling

The template uses Tailwind CSS with a custom color palette. Update the colors in your CSS variables or Tailwind configuration:

```css
:root {
  --color-primary: #3B82F6;    /* Blue */
  --color-primary-dark: #1E40AF;
  --color-primary-soft: #EFF6FF;
  --color-primary-light: #60A5FA;
  --color-primary-lightest: #DBEAFE;
  --color-primary-faint: #F0F9FF;
  --color-primary-pale: #F0F9FF;
  --color-neutral: #6B7280;
  --color-neutral-dark: #374151;
}
```

### Adding New Components

1. Create `.astro` files in `src/components/`
2. Import and use them in your pages
3. Follow the established naming conventions

### Custom Pages

Add new pages by creating `.astro` files in `src/pages/`. The file structure determines the URL routing:

- `src/pages/about.astro` → `/about`
- `src/pages/properties/index.astro` → `/properties`
- `src/pages/properties/[slug].astro` → `/properties/{slug}`

## 📁 Project Structure

```
/
├── public/                    # Static assets (images, fonts)
├── src/
│   ├── components/            # Reusable Astro components
│   │   ├── ContactAgent.astro
│   │   ├── Hero.astro
│   │   ├── ImageGallery.astro
│   │   └── PropertyHero.astro
│   ├── content/               # Content collections
│   │   ├── agents/           # Agent profiles
│   │   ├── properties/       # Property listings
│   │   └── config.ts         # Content schema definitions
│   ├── layouts/              # Page layouts
│   │   └── Layout.astro
│   ├── pages/                # File-based routing
│   │   ├── index.astro
│   │   ├── properties/
│   │   │   └── [slug].astro
│   │   └── ...
│   └── styles/               # Global styles
│       └── global.css
├── astro.config.mjs          # Astro configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
└── README.md                 # This file
```

## 🧞 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local development server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI |

## 🌐 Deployment

### Static Hosting

This template builds to static HTML and can be deployed to any static hosting service:

- **Vercel:** Connect your repository and deploy automatically
- **Netlify:** Drag and drop the `dist/` folder or connect Git
- **GitHub Pages:** Use GitHub Actions to deploy automatically
- **Cloudflare Pages:** Connect your repository for seamless deployment

### Environment Variables

Create a `.env` file for environment-specific variables:

```env
# Example environment variables
SITE_URL=https://yourdomain.com
SITE_NAME=Houses Boutique
```

## 🔧 Development Tips

### Content Management

1. **Use VS Code** with the [Astro extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
2. **Preview images** using the VS Code Markdown preview
3. **Validate content** using the defined schemas in `src/content/config.ts`

### Performance Optimization

1. **Optimize images** before adding to the content
2. **Use modern formats** (WebP, AVIF) for better compression
3. **Lazy load images** (already implemented)
4. **Minimize external dependencies**

### SEO Best Practices

1. **Unique meta titles** for each property
2. **Descriptive meta descriptions** (150-160 characters)
3. **Structured data** for real estate listings
4. **Alt text** for all images
5. **Canonical URLs** for proper indexing

## 📚 Learning Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [Real Estate SEO Best Practices](https://example.com)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Created and maintained by [Alejandro Mozo]**

- **Website:** [https://amozo.es](https://amozo.es)
- **LinkedIn:** [https://www.linkedin.com/in/alejandro-mozo-quesada/](https://www.linkedin.com/in/alejandro-mozo-quesada/)

### Support

If you find this template useful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs and issues
- 💡 Suggesting features and improvements
- 📖 Sharing with others

---

Made with ❤️ using [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)