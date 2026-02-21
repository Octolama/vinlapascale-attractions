import { useState } from 'react'
import AttractionCard from './AttractionCard'

const attractionsData = [
  {
    id: 1,
    title: "Ancient Basilica of Niculițel",
    category: "Heritage",
    description: "4th-century Christian basilica with stunning mosaics and historical artifacts",
    image: "https://images.unsplash.com/photo-1555128535-b4e6eb92e0af?q=80&w=2070",
    distance: "2 km away",
    rating: 4.9,
    reviews: 127,
    price: "Free",
    duration: "1-2 hours"
  },
  {
    id: 2,
    title: "Niculițel Winery Tours",
    category: "Wine",
    description: "Taste 2,500 years of winemaking tradition in the Sarica-Niculițel DOC region",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070",
    distance: "Walking distance",
    rating: 5.0,
    reviews: 243,
    price: "€15/person",
    duration: "2-3 hours"
  },
  {
    id: 3,
    title: "Danube Delta Nature Reserve",
    category: "Nature",
    description: "UNESCO World Heritage site with unique biodiversity and bird watching",
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070",
    distance: "40 km away",
    rating: 4.8,
    reviews: 891,
    price: "€25/person",
    duration: "Full day"
  },
  {
    id: 4,
    title: "Babadag Monastery",
    category: "Heritage",
    description: "17th-century Orthodox monastery nestled in scenic hills",
    image: "https://images.unsplash.com/photo-1584452631214-d2f7d39a5cb6?q=80&w=2070",
    distance: "25 km away",
    rating: 4.7,
    reviews: 156,
    price: "Free",
    duration: "1 hour"
  },
  {
    id: 5,
    title: "Traditional Romanian Cooking Class",
    category: "Cuisine",
    description: "Learn to prepare authentic Dobrogean dishes with local ingredients",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070",
    distance: "On-site",
    rating: 5.0,
    reviews: 89,
    price: "€30/person",
    duration: "3 hours"
  },
  {
    id: 6,
    title: "Măcin Mountains National Park",
    category: "Nature",
    description: "Oldest mountains in Romania with unique flora and panoramic views",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
    distance: "35 km away",
    rating: 4.9,
    reviews: 302,
    price: "Free",
    duration: "Half/Full day"
  },
  {
    id: 7,
    title: "Tulcea City Walking Tour",
    category: "Heritage",
    description: "Explore the gateway to the Danube Delta with its rich history",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2070",
    distance: "40 km away",
    rating: 4.6,
    reviews: 178,
    price: "€10/person",
    duration: "2 hours"
  },
  {
    id: 8,
    title: "Grape Harvest Experience",
    category: "Wine",
    description: "Join the traditional vendange and learn the winemaking process",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2070",
    distance: "On-site",
    rating: 5.0,
    reviews: 65,
    price: "€20/person",
    duration: "4 hours",
    seasonal: "September-October"
  },
]

const categories = ["All", "Heritage", "Wine", "Nature", "Cuisine"]

export default function AttractionsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredAttractions = selectedCategory === "All"
    ? attractionsData
    : attractionsData.filter(attr => attr.category === selectedCategory)

  return (
    <section id="attractions" className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary-600 font-medium mb-2">Discover</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-4">
            Northern Dobrogea Attractions
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore monasteries, mountains, and the Danube Delta — a land of natural wonder and spiritual beauty
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:bg-primary-50 hover:text-primary-600 border border-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAttractions.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mt-8 text-neutral-600">
          Showing {filteredAttractions.length} of {attractionsData.length} attractions
        </div>
      </div>
    </section>
  )
}
