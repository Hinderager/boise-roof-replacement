import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Metal Roofing Boise | Standing Seam Metal Roofs | (208) 505-9352',
  description: 'Professional metal roof installation in Boise. Standing seam and metal shingles. 50+ year lifespan. Energy efficient. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/roofing-materials/metal-roofing' },
}

export default function MetalRoofingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services/roofing-materials" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roofing Materials
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Metal Roofing in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Long-lasting, energy-efficient metal roofs that handle Idaho weather perfectly.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Why Metal Roofing?</h2>
            <p>Metal roofs are becoming more popular in Idaho, and it's not hard to see why. They last 50-70 years, require almost no maintenance, and handle our weather better than any other roofing material.</p>

            <p>Yes, they cost more upfront. But when you factor in longevity and energy savings, metal roofing makes financial sense for many homeowners.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Benefits of Metal Roofing</h2>
            <ul>
              <li><strong>Extremely long lifespan</strong> - 50-70+ years with minimal maintenance</li>
              <li><strong>Excellent snow shedding</strong> - Snow slides off instead of building up</li>
              <li><strong>Superior wind resistance</strong> - Can handle winds up to 140 mph</li>
              <li><strong>Energy efficient</strong> - Reflects heat in summer, reducing cooling costs</li>
              <li><strong>Fire resistant</strong> - Class A fire rating</li>
              <li><strong>Lightweight</strong> - Less structural load than tile or heavy shingles</li>
              <li><strong>Eco-friendly</strong> - 100% recyclable at end of life</li>
              <li><strong>Low maintenance</strong> - No shingles to replace or repair</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Types of Metal Roofing</h2>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Standing Seam Metal Roofing</h3>
            <p>The most common and popular style for residential homes. Vertical panels with raised seams that snap or clip together.</p>

            <p>Benefits of standing seam:</p>
            <ul>
              <li>Clean, modern appearance</li>
              <li>Hidden fasteners prevent leaks</li>
              <li>Allows for thermal expansion and contraction</li>
              <li>Available in many colors</li>
              <li>Long manufacturer warranties</li>
            </ul>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Metal Shingles</h3>
            <p>Metal panels designed to look like traditional shingles, slate, or tile. Good option if you want the durability of metal with a more traditional appearance.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Corrugated Metal</h3>
            <p>The traditional wavy metal roofing. Often used on agricultural buildings, but can work for certain home styles—especially modern or industrial designs.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Material Options</h2>
            <p><strong>Steel</strong> - Most common and affordable. Coated with zinc (galvanized) or aluminum-zinc (Galvalume). Painted finishes in many colors.</p>

            <p><strong>Aluminum</strong> - Naturally rust-resistant, lightweight. Good for coastal areas or high-corrosion environments.</p>

            <p><strong>Copper</strong> - Premium option. Beautiful patina over time. Extremely long lifespan of 100+ years. Expensive.</p>

            <p><strong>Zinc</strong> - Develops protective patina. Long lifespan. Higher cost but minimal maintenance.</p>

            <p>For most homes in Idaho, painted steel or Galvalume is the best value.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Metal Roofing in Idaho's Climate</h2>
            <p>Metal roofing is nearly perfect for Idaho's weather:</p>

            <p><strong>Winter performance:</strong> Snow slides off easily, preventing ice dams and reducing structural load. No worries about snow accumulation.</p>

            <p><strong>Summer performance:</strong> Reflective coatings bounce heat away, keeping attics cooler and reducing AC costs.</p>

            <p><strong>Wind resistance:</strong> Metal roofing is rated for the strongest winds Idaho gets. Panels are mechanically fastened and extremely secure.</p>

            <p><strong>Hail resistance:</strong> Dents from large hail are possible but don't affect performance. Many metal roofs have impact ratings.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Color Options</h2>
            <p>Metal roofing comes in a wide range of colors—from traditional grays and blacks to reds, greens, blues, and browns.</p>

            <p>Most colors use Kynar or similar finishes that resist fading for 30+ years. We'll show you samples and discuss what works best with your home's style.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Installation Matters</h2>
            <p>Metal roofing requires specialized installation skills. Panels must be installed with proper fastening, appropriate underlayment, and correct detailing around penetrations.</p>

            <p>We've installed hundreds of metal roofs and know how to handle tricky details like valleys, chimneys, and skylights. Improper installation voids warranties and causes leaks.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Cost Considerations</h2>
            <p>Metal roofing costs 2-3 times more than asphalt shingles upfront. But consider:</p>
            <ul>
              <li>You'll likely need 2-3 asphalt roofs over the life of one metal roof</li>
              <li>Lower energy costs from reflectivity</li>
              <li>Higher home resale value</li>
              <li>Minimal maintenance costs</li>
              <li>Potential insurance discounts</li>
            </ul>

            <p>If you're planning to stay in your home long-term, metal roofing is often the better financial choice.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Common Concerns</h2>
            <p><strong>Is it noisy?</strong> No. With proper underlayment and insulation, metal roofs are no louder than asphalt shingles during rain or hail.</p>

            <p><strong>Will it attract lightning?</strong> No more than any other roofing material. Metal roofs don't attract lightning, and if struck, they actually dissipate energy better than combustible materials.</p>

            <p><strong>Does it look industrial?</strong> Not anymore. Modern metal roofing comes in styles that look great on any home.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We install metal roofs throughout Boise, Meridian, Nampa, Caldwell, Eagle, and all surrounding areas.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Is Metal Roofing Right for You?</h3>
              <p className="mb-6">Let's discuss your options. We'll explain the costs, benefits, and help you decide if metal roofing makes sense for your home.</p>
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
