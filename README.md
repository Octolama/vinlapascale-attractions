# Vinlapascale Attractions Website

A beautiful attractions website combining the elegant aesthetic of Vinlapascale with an Airbnb-style browsing experience.

## 🎨 Design Features

### Vinlapascale Branding
- **Color Palette**: Warm, earthy tones inspired by wine and countryside
  - Primary: Golden/amber shades (#d89033)
  - Neutral: Stone and earth tones
  - Accent: Wine red, olive green, earth brown
- **Typography**: Serif headings + Sans-serif body text
- **Style**: Clean, professional, warm and welcoming

### Airbnb-Style Features
- **Grid Layout**: Responsive card grid for attractions
- **Category Filters**: Filter by Heritage, Wine, Nature, Cuisine
- **Card Design**: 
  - High-quality images
  - Rating and reviews
  - Price and duration
  - Hover effects
  - Category badges

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd ~/.openclaw/workspace/attractions-website
```

2. Install dependencies (if not already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to the URL shown (usually `http://localhost:5173`)

## 📁 Project Structure

```
attractions-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation with mobile menu
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── AttractionsGrid.jsx # Main attractions grid with filters
│   │   ├── AttractionCard.jsx  # Individual attraction card
│   │   └── Footer.jsx          # Footer with links and contact
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind + custom styles
├── tailwind.config.js         # Tailwind configuration
└── package.json               # Dependencies
```

## 🎯 Key Components

### Header
- Fixed navigation bar
- Mobile-responsive menu
- Smooth scroll links
- "Book Now" CTA button

### Hero Section
- Full-width background image
- Gradient overlay
- Clear value proposition
- Dual CTAs (Explore + Book)

### Attractions Grid
- 8 sample attractions included
- Category filtering (All, Heritage, Wine, Nature, Cuisine)
- Responsive grid (1-4 columns)
- Results counter

### Attraction Cards
- Image with hover zoom effect
- Category and seasonal badges
- Title, distance, and description
- Star rating and review count
- Duration indicator
- Price display
- "Learn More" CTA button

### Footer
- Brand information
- Navigation links
- Contact details
- Booking CTA
- Copyright notice

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#d89033', // Your brand color
  }
}
```

### Add More Attractions
Edit `src/components/AttractionsGrid.jsx`:
```javascript
const attractionsData = [
  {
    id: 9,
    title: "Your Attraction",
    category: "Nature",
    description: "Description here",
    image: "https://...",
    // ... more fields
  }
]
```

### Add New Categories
Edit the categories array in `AttractionsGrid.jsx`:
```javascript
const categories = ["All", "Heritage", "Wine", "Nature", "Cuisine", "YourCategory"]
```

## 📱 Responsive Design

- **Mobile**: Single column, hamburger menu
- **Tablet**: 2-column grid
- **Desktop**: 3-column grid
- **Large**: 4-column grid

## 🔧 Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment.

## 🚢 Deployment

Deploy to any static hosting service:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `dist` folder
- **GitHub Pages**: Push to gh-pages branch
- **Cloudflare Pages**: Connect your repo

## 📸 Sample Data

The website includes 8 sample attractions:
1. Ancient Basilica of Niculițel
2. Niculițel Winery Tours
3. Danube Delta Nature Reserve
4. Babadag Monastery
5. Traditional Romanian Cooking Class
6. Măcin Mountains National Park
7. Tulcea City Walking Tour
8. Grape Harvest Experience

All using Unsplash placeholder images that can be replaced with real photos.

## 🎯 Next Steps

1. **Replace placeholder images** with real attraction photos
2. **Update attraction data** with actual details
3. **Add booking integration** (Booking.com, custom form, etc.)
4. **Implement detail pages** for each attraction
5. **Add user reviews** functionality
6. **Integrate maps** (Google Maps, Mapbox)
7. **Add search functionality**
8. **Implement favorites/wishlist**

## 📞 Support

For questions or issues, contact your developer or check the documentation.

---

Built with ❤️ using React, Tailwind CSS, and Vite
