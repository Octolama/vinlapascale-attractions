export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
          alt="Scenic landscape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <p className="text-primary-200 text-lg mb-4 font-medium">
          Sarica-Niculițel DOC Wine Region
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          VINLAPASCALE
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          A Taste of History. A Sip of Home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#attractions" className="btn-primary text-lg">
            Explore Attractions
          </a>
          <a href="https://www.booking.com/Share-jmCSmi" target="_blank" rel="noopener noreferrer" className="btn-secondary bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30">
            Book Your Stay
          </a>
        </div>
      </div>
    </section>
  )
}
