import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Metal Roof Installation Boise | Standing Seam Metal Roofing | (208) 505-9352',
  description: 'Metal roof installation in Boise. Standing seam, corrugated, metal shingles. 50+ year lifespan. Energy-efficient. Free estimates. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/metal-roof-installation' },
}

export default function MetalRoofInstallationPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Metal Roof Installation in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Long-lasting, energy-efficient, and tough as nails. Metal roofs are built for Idaho weather.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Why Metal Roofing?</h2>
            <p>Metal roofs last 50+ years. They're fire-resistant, handle snow loads like champs, and actually reduce your cooling costs in summer.</p>
            
            <p>Yeah, they cost more upfront than asphalt shingles. But when you factor in longevity and energy savings, they're often the smartest investment you can make.</p>

            <p>Plus they just look sharp. Modern metal roofs aren't those old barn roofs anymore—they come in tons of styles and colors.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Types of Metal Roofing</h2>
            <p>We install three main types of metal roofing:</p>

            <p><strong>Standing Seam</strong> - The premium option. Vertical panels with raised seams. No exposed fasteners means fewer leak points. Clean, modern look. This is what most people picture when they think "metal roof."</p>

            <p><strong>Corrugated Metal</strong> - Classic wavy panels. More affordable than standing seam. Great for shops, barns, and certain home styles. Exposed fasteners but still very durable.</p>

            <p><strong>Metal Shingles</strong> - Looks like traditional shingles or tiles but made of metal. Gets you the durability of metal with a more conventional appearance.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Benefits of Metal Roofs</h2>
            <p>Here's why people choose metal:</p>
            <ul>
              <li><strong>Longevity</strong> - 50+ years with minimal maintenance</li>
              <li><strong>Fire resistance</strong> - Class A fire rating</li>
              <li><strong>Snow shedding</strong> - Smooth surface lets snow slide off</li>
              <li><strong>Energy efficiency</strong> - Reflects heat, reduces cooling costs</li>
              <li><strong>Wind resistance</strong> - Handles high winds better than shingles</li>
              <li><strong>Environmentally friendly</strong> - Often made from recycled materials, fully recyclable</li>
              <li><strong>Low maintenance</strong> - Doesn't rot, crack, or need replacing every 20 years</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Color and Style Options</h2>
            <p>Metal roofs come in a huge range of colors—from traditional grays and blacks to reds, greens, blues, and browns. We'll show you samples and help you choose something that fits your home.</p>

            <p>Most metal roofs have special coatings that prevent fading and protect against the elements. Quality finishes hold their color for decades.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">The Installation Process</h2>
            <p>Installing a metal roof takes more skill than slapping down shingles. We've been doing it for years and know all the tricks to get it right.</p>

            <p>Here's what's involved:</p>
            <ul>
              <li>Remove old roofing (if needed)</li>
              <li>Inspect and repair roof deck</li>
              <li>Install proper underlayment</li>
              <li>Add drip edge and trim pieces</li>
              <li>Install metal panels with precise measurements</li>
              <li>Seal all penetrations and transitions</li>
              <li>Install ridge caps and flashings</li>
              <li>Final inspection and cleanup</li>
            </ul>

            <p>Metal roofs typically take longer to install than shingles—plan on 3-5 days for most residential projects.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">What About Noise?</h2>
            <p>People always ask about rain noise. Honestly? With modern underlayment and proper insulation, metal roofs aren't much louder than any other roof.</p>

            <p>Some people actually like the sound of rain on their metal roof. But if you're worried about it, we can add extra sound dampening.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Cost vs. Value</h2>
            <p>Metal roofs cost roughly 2-3 times more than asphalt shingles upfront. But they last 2-3 times longer and save money on energy and maintenance.</p>

            <p>They also increase your home's resale value. Buyers love seeing a metal roof—it means they won't have to deal with roofing for decades.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Perfect for Idaho Weather</h2>
            <p>Metal roofs are ideal for Boise's climate. They handle our hot summers, cold winters, occasional hail, and whatever else Idaho throws at them.</p>

            <p>The snow-shedding feature is huge. No more worrying about heavy snow loads or ice dams.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We install metal roofs throughout Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, and the surrounding areas.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Interested in Metal Roofing?</h3>
              <p className="mb-6">Get a free consultation. We'll show you samples, discuss your options, and provide a detailed estimate.</p>
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
