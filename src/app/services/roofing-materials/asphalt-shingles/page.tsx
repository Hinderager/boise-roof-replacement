import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asphalt Shingle Roofing Boise | Shingle Installation | (208) 505-9352',
  description: 'Expert asphalt shingle roof installation in Boise. 3-tab and architectural shingles. All major brands. 30+ years experience. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/roofing-materials/asphalt-shingles' },
}

export default function AsphaltShinglesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services/roofing-materials" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roofing Materials
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Asphalt Shingle Roofing in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">The most popular roofing material in America. Affordable, reliable, and available in hundreds of styles.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Why Asphalt Shingles?</h2>
            <p>About 80% of homes in America have asphalt shingle roofs. There's good reasons for that popularity.</p>

            <p>Asphalt shingles offer:</p>
            <ul>
              <li>Affordable upfront cost compared to other materials</li>
              <li>Wide variety of colors and styles to match any home</li>
              <li>Proven performance in all climates including Idaho weather</li>
              <li>Easy repairs if damage occurs</li>
              <li>Good warranties from major manufacturers</li>
              <li>Reasonable lifespan of 20-30 years</li>
            </ul>

            <p>For most homes, asphalt shingles provide the best combination of value, performance, and appearance.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Types of Asphalt Shingles</h2>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Architectural Shingles</h3>
            <p>Also called dimensional or laminate shingles. These are thicker, multi-layered shingles that create a more dimensional appearance.</p>

            <p><strong>Benefits:</strong></p>
            <ul>
              <li>Better appearance with shadow lines and texture</li>
              <li>25-30 year lifespan</li>
              <li>Better wind resistance (often rated for 110-130 mph winds)</li>
              <li>Longer warranties than 3-tab shingles</li>
              <li>Higher resale value</li>
            </ul>

            <p>This is what we recommend for most residential roofs. The extra cost over 3-tab shingles is worth it.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">3-Tab Shingles</h3>
            <p>The basic, economical option. Flat shingles with a simple three-tab design.</p>

            <p><strong>Benefits:</strong></p>
            <ul>
              <li>Lowest upfront cost</li>
              <li>Clean, uniform appearance</li>
              <li>20-25 year lifespan</li>
              <li>Lighter weight</li>
            </ul>

            <p>These work fine for budget-conscious projects or rentals, but architectural shingles are a better long-term value.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Impact-Resistant Shingles</h3>
            <p>Specially designed shingles that resist hail damage. They use modified asphalt or rubber backing to absorb impacts.</p>

            <p><strong>Why choose impact-resistant:</strong></p>
            <ul>
              <li>Better protection in hail-prone areas</li>
              <li>Potential insurance discounts (check with your insurer)</li>
              <li>Class 4 impact rating</li>
              <li>All the benefits of architectural shingles plus impact protection</li>
            </ul>

            <p>If you live in an area that gets hail, these are worth considering.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Color Selection</h2>
            <p>Asphalt shingles come in just about every color you can imagine—from traditional blacks and grays to browns, reds, greens, and blues.</p>

            <p>Choosing the right color:</p>
            <ul>
              <li><strong>Match your home's style</strong> - Traditional homes look good with classic colors, modern homes can go bolder</li>
              <li><strong>Consider climate</strong> - Lighter colors reflect heat, darker colors absorb it</li>
              <li><strong>Check HOA rules</strong> - Some neighborhoods restrict color choices</li>
              <li><strong>Look at samples</strong> - Colors look different in full sun vs. shade</li>
            </ul>

            <p>We'll bring samples so you can see how they look on your actual home before deciding.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Brands We Install</h2>
            <p>We install all major asphalt shingle brands:</p>

            <ul>
              <li><strong>Owens Corning</strong> - Duration series, excellent warranties</li>
              <li><strong>GAF</strong> - Timberline HDZ, most popular brand</li>
              <li><strong>CertainTeed</strong> - Landmark series, great color options</li>
              <li><strong>IKO</strong> - Cambridge and Dynasty lines</li>
              <li><strong>Malarkey</strong> - Made in Portland, eco-friendly options</li>
            </ul>

            <p>All these manufacturers make quality products. We'll help you choose based on your preferences for warranty, color options, and budget.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Proper Installation Matters</h2>
            <p>Even the best shingles won't last if installed incorrectly. We follow manufacturer specifications exactly:</p>

            <ul>
              <li>Proper nailing pattern and placement</li>
              <li>Correct underlayment for your application</li>
              <li>Ice and water shield in valleys and eaves</li>
              <li>Proper ventilation to prevent premature aging</li>
              <li>Correct flashing details around chimneys, vents, and skylights</li>
            </ul>

            <p>Cutting corners on installation voids warranties and causes early failures. We do it right.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Asphalt Shingles in Idaho Climate</h2>
            <p>Asphalt shingles perform well in Idaho's climate. They handle our temperature swings, shed snow reasonably well, and hold up to wind.</p>

            <p>The key is proper attic ventilation. Idaho's hot summers can bake shingles from underneath if ventilation is inadequate. We always check and upgrade ventilation when needed.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Warranties</h2>
            <p>Asphalt shingles come with two warranties:</p>

            <p><strong>Material warranty</strong> - From the manufacturer, typically 25-50 years depending on product</p>
            <p><strong>Workmanship warranty</strong> - From us, covering installation defects</p>

            <p>We register all warranties with manufacturers and provide you with complete warranty documentation.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We install asphalt shingle roofs throughout Boise, Meridian, Nampa, Caldwell, Eagle, and all surrounding areas.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Ready for New Shingles?</h3>
              <p className="mb-6">Get a free estimate. We'll show you samples, discuss options, and provide a detailed quote.</p>
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
