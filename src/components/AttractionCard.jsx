export default function AttractionCard({ attraction }) {
  return (
    <div className="card overflow-hidden group cursor-pointer">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={attraction.image}
          alt={attraction.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-700">
          {attraction.category}
        </div>

        {/* Seasonal Badge */}
        {attraction.seasonal && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-medium">
            {attraction.seasonal}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Distance */}
        <div className="mb-2">
          <h3 className="text-lg font-serif font-bold text-neutral-800 mb-1 group-hover:text-primary-600 transition-colors">
            {attraction.title}
          </h3>
          <p className="text-sm text-neutral-500">{attraction.distance}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
          {attraction.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm mb-3">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium text-neutral-700">{attraction.rating}</span>
            <span className="text-neutral-400">({attraction.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-neutral-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{attraction.duration}</span>
          </div>
        </div>

        {/* Price */}
        <div className="pt-3 border-t border-neutral-100">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-neutral-800">{attraction.price}</span>
            <button className="px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
