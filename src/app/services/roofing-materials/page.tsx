import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roofing Materials Boise | Shingles, Metal, Tile & More | (208) 505-9352',
  description: 'Expert installation of all roofing materials in Boise. Asphalt shingles, metal roofing, tile, and flat roofing systems. 30+ years experience. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/roofing-materials' },
}

export default function RoofingMaterialsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Roofing Materials in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">We install every type of roofing material. Find the right option for your home, budget, and Idaho's climate.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Choosing the Right Material</h2>
            <p>There's no one-size-fits-all when it comes to roofing. The right material depends on your home's style, your budget, and how long you plan to stay in the house.</p>

            <p>We install all major roofing materials and can help you understand the pros and cons of each option for Idaho's climate.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Roofing Material Options</h2>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Asphalt Shingles</h3>
            <p>The most popular roofing material in America, and for good reason. Asphalt shingles are affordable, reliable, and come in hundreds of colors and styles.</p>

            <p><strong>What you get:</strong></p>
            <ul>
              <li>20-30 year lifespan depending on quality</li>
              <li>Wide range of colors to match any home</li>
              <li>Good performance in Idaho weather</li>
              <li>Affordable upfront cost</li>
              <li>Easy to repair if damaged</li>
            </ul>

            <p>We install both 3-tab shingles and architectural shingles, with architectural being the better choice for most homes due to improved durability and appearance.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Metal Roofing</h3>
            <p>Metal roofs are becoming more popular in Idaho, and it's easy to see why. They handle our weather perfectly—snow slides off, wind doesn't lift them, and they last forever.</p>

            <p><strong>Benefits of metal:</strong></p>
            <ul>
              <li>50-70 year lifespan (or longer)</li>
              <li>Excellent snow shedding in winter</li>
              <li>Superior wind resistance</li>
              <li>Energy efficient in summer</li>
              <li>Low maintenance requirements</li>
              <li>Recyclable at end of life</li>
            </ul>

            <p>Higher upfront cost, but when you factor in longevity and low maintenance, metal roofing makes financial sense for many homeowners.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Tile Roofing</h3>
            <p>Concrete and clay tile roofs offer unmatched durability and a distinctive look. They're heavy, so your home needs proper structural support, but they last 50+ years.</p>

            <p><strong>Why tile?</strong></p>
            <ul>
              <li>Exceptional lifespan (50-100 years)</li>
              <li>Beautiful Mediterranean or Spanish aesthetic</li>
              <li>Fire resistant</li>
              <li>Handles Idaho's temperature swings well</li>
              <li>Low maintenance once installed</li>
            </ul>

            <p>Tile works best on certain architectural styles. We'll let you know if your home is a good candidate.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Flat Roofing Systems</h3>
            <p>For low-slope or flat roofs, we install TPO, EPDM, and modified bitumen systems. Common on additions, garages, and modern architectural designs.</p>

            <p><strong>Flat roof options:</strong></p>
            <ul>
              <li><strong>TPO</strong> - White membrane, energy efficient, welded seams</li>
              <li><strong>EPDM</strong> - Black rubber, proven performance, cost-effective</li>
              <li><strong>Modified bitumen</strong> - Multi-layer system, excellent waterproofing</li>
            </ul>

            <p>Flat roofs require proper drainage and regular maintenance. We'll design the system correctly to prevent ponding and leaks.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">What We Recommend for Boise</h2>
            <p>Idaho's climate is tough on roofs. We get temperature swings, snow loads, occasional hail, and strong winds.</p>

            <p>For most homes, we recommend:</p>
            <ul>
              <li><strong>Architectural shingles</strong> - Best value for typical residential homes</li>
              <li><strong>Metal roofing</strong> - If you're planning to stay long-term and want low maintenance</li>
              <li><strong>Impact-resistant shingles</strong> - In areas prone to hail damage</li>
            </ul>

            <p>But the right choice depends on your specific situation. That's why we always start with a conversation about your goals and budget.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Quality Installation Matters</h2>
            <p>The material is only half the equation. Proper installation is what makes a roof last.</p>

            <p>We install everything according to manufacturer specifications, use the right underlayment for your material, and ensure proper ventilation. Cutting corners on installation is how roofs fail early.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We install all types of roofing materials throughout Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding areas.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Not Sure Which Material Is Right?</h3>
              <p className="mb-6">Let's talk about your options. We'll explain what works best for your home and budget, with no pressure to choose the most expensive option.</p>
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
