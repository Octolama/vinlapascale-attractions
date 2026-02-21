import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AttractionsGrid from './components/AttractionsGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AttractionsGrid />
      <Footer />
    </div>
  )
}

export default App
