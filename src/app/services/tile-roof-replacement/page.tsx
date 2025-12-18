import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tile Roof Replacement Boise | Clay & Concrete Tile Roofing | (208) 505-9352',
  description: 'Tile roof replacement in Boise. Clay and concrete tile installation and repair. Beautiful, durable, long-lasting. Free estimates. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/tile-roof-replacement' },
}

export default function TileRoofReplacementPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tile Roof Replacement in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Beautiful, durable, and built to last generations. Tile roofs add serious character to your home.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Why Tile Roofing?</h2>
            <p>Tile roofs are the premium choice. They last 50-100 years, handle Idaho weather perfectly, and add incredible curb appeal to your home.</p>
            
            <p>Yeah, they are expensive. And heavy—your roof structure needs to support the weight. But if your home is built for it and you want something that will outlast everything else, tile is hard to beat.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Clay vs. Concrete Tiles</h2>
            <p>You have got two main options:</p>

            <p><strong>Clay Tiles</strong> - Traditional terra cotta look. Made from natural clay that is fired in kilns. They are lighter than concrete, do not fade, and have that classic Mediterranean or Spanish style. More expensive but absolutely beautiful.</p>

            <p><strong>Concrete Tiles</strong> - More affordable and heavier. Made from sand, cement, and water. They can be made to look like clay, slate, or wood. Tons of color options. Very durable and practical.</p>

            <p>Both types last decades and handle our climate well. Your choice usually comes down to budget and aesthetic preference.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Benefits of Tile Roofs</h2>
            <ul>
              <li><strong>Longevity</strong> - 50-100 years depending on material and maintenance</li>
              <li><strong>Fire resistance</strong> - Class A fire rating</li>
              <li><strong>Energy efficiency</strong> - Natural ventilation under tiles reduces heat transfer</li>
              <li><strong>Weather resistance</strong> - Handles wind, hail, rain, and UV exposure</li>
              <li><strong>Low maintenance</strong> - Individual tiles can be replaced if damaged</li>
              <li><strong>Curb appeal</strong> - Distinctive look that increases home value</li>
              <li><strong>Environmentally friendly</strong> - Natural materials, no petroleum products</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Installation Process</h2>
            <p>Installing tile roofing is specialized work. The tiles are heavy and brittle—you need crews who know what they are doing.</p>

            <p>Here is what is involved:</p>
            <ul>
              <li>Structural assessment to ensure your roof can handle the weight</li>
              <li>Remove old roofing materials</li>
              <li>Reinforce roof structure if needed</li>
              <li>Install proper underlayment and battens</li>
              <li>Layout and install tiles with precise spacing</li>
              <li>Install ridge caps and hip tiles</li>
              <li>Flash all penetrations and valleys</li>
              <li>Clean up and haul away debris</li>
            </ul>

            <p>Tile roof installation takes longer than shingles—usually 1-2 weeks for most homes.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We install and repair tile roofs throughout Boise, Meridian, Eagle, Star, and the surrounding areas.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Considering a Tile Roof?</h3>
              <p className="mb-6">Let us talk about your options. We will assess your home, show you tile samples, and provide a detailed estimate.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />
                (208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
