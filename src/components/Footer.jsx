export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-primary-400 mb-3">
              VINLAPASCALE
            </h3>
            <p className="text-neutral-300 text-sm mb-4">
              A Taste of History. A Sip of Home.
            </p>
            <p className="text-neutral-400 text-sm">
              Family-run wine estate and guesthouse in the heart of Romania's ancient Sarica-Niculițel wine region.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><a href="/" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#attractions" className="hover:text-primary-400 transition-colors">Attractions</a></li>
              <li><a href="#accommodation" className="hover:text-primary-400 transition-colors">Accommodation</a></li>
              <li><a href="#food" className="hover:text-primary-400 transition-colors">Food</a></li>
              <li><a href="#wine" className="hover:text-primary-400 transition-colors">Wine</a></li>
              <li><a href="#history" className="hover:text-primary-400 transition-colors">History</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Niculițel, Tulcea County,<br />Northern Dobrogea, Romania</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+40740123456" className="hover:text-primary-400 transition-colors">+40 740 123 456</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@vinlapascale.ro" className="hover:text-primary-400 transition-colors">contact@vinlapascale.ro</a>
              </li>
            </ul>
          </div>

          {/* Stay With Us */}
          <div>
            <h4 className="font-semibold mb-4">Stay With Us</h4>
            <p className="text-sm text-neutral-300 mb-4">
              Book your stay at Pensiunea Valentina and experience authentic Romanian hospitality.
            </p>
            <a 
              href="https://www.booking.com/Share-jmCSmi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors text-sm"
            >
              Book on Booking.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>© 2026 Vinlapascale. All rights reserved.</p>
            <p>Sarica-Niculițel DOC Wine Region · Est. 2,500+ Years of Winemaking</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
