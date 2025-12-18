import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Flat Roofing Boise | TPO, EPDM, Modified Bitumen | (208) 505-9352',
  description: 'Expert flat roof installation in Boise. TPO, EPDM, and modified bitumen systems. Low-slope roofing specialists. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/roofing-materials/flat-roofing' },
}

export default function FlatRoofingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services/roofing-materials" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roofing Materials
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Flat Roofing in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Professional flat and low-slope roofing systems for residential and commercial properties.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Flat Roof Systems</h2>
            <p>Flat roofs aren't actually flat—they have a slight slope for drainage. But they require different materials and installation methods than sloped roofs.</p>

            <p>We install flat roofing on:</p>
            <ul>
              <li>Modern homes with flat or low-slope designs</li>
              <li>Additions and extensions</li>
              <li>Garages and outbuildings</li>
              <li>Covered patios and porches</li>
              <li>Commercial buildings</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Types of Flat Roofing</h2>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">TPO (Thermoplastic Polyolefin)</h3>
            <p>The most popular single-ply roofing membrane. White or light-colored membrane that reflects heat and reduces energy costs.</p>

            <p><strong>Benefits of TPO:</strong></p>
            <ul>
              <li>Energy efficient—reflects heat in summer</li>
              <li>Heat-welded seams create watertight bonds</li>
              <li>Resistant to UV, ozone, and chemicals</li>
              <li>20-30 year lifespan</li>
              <li>Good value for the performance</li>
              <li>Lightweight</li>
            </ul>

            <p>We recommend TPO for most residential flat roof applications.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">EPDM (Rubber Roofing)</h3>
            <p>Black rubber membrane that's been the standard for flat roofs for decades. Proven performance and reliability.</p>

            <p><strong>Benefits of EPDM:</strong></p>
            <ul>
              <li>Proven track record—40+ years of use</li>
              <li>Extremely durable and flexible</li>
              <li>Handles temperature extremes well</li>
              <li>20-30 year lifespan</li>
              <li>Cost-effective</li>
              <li>Easy to repair</li>
            </ul>

            <p>EPDM is a reliable choice, especially for areas that don't need the energy efficiency of white TPO.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Modified Bitumen</h3>
            <p>Multi-layer asphalt-based system. Can be torch-applied, cold-applied, or self-adhering.</p>

            <p><strong>Benefits of modified bitumen:</strong></p>
            <ul>
              <li>Excellent waterproofing</li>
              <li>Multi-layer redundancy</li>
              <li>Good puncture resistance</li>
              <li>15-20 year lifespan</li>
              <li>Can be walked on for maintenance</li>
            </ul>

            <p>Modified bitumen works well for applications that need extra durability or get foot traffic.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Proper Drainage Is Critical</h2>
            <p>Flat roofs need proper slope and drainage. Standing water ("ponding") will shorten any flat roof's life.</p>

            <p>We design flat roof systems with:</p>
            <ul>
              <li>Adequate slope (minimum 1/4" per foot)</li>
              <li>Properly sized drains or scuppers</li>
              <li>Tapered insulation if needed to create slope</li>
              <li>Secondary overflow drains for safety</li>
            </ul>

            <p>A well-designed flat roof sheds water quickly and doesn't have ponding issues.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Installation Details Matter</h2>
            <p>Flat roofing is less forgiving than sloped roofing. Every detail must be done correctly.</p>

            <p>Our installation includes:</p>
            <ul>
              <li><strong>Proper deck preparation</strong> - Smooth, clean, dry substrate</li>
              <li><strong>Insulation</strong> - Rigid board insulation for energy efficiency and slope</li>
              <li><strong>Membrane installation</strong> - Fully adhered or mechanically attached</li>
              <li><strong>Seam welding</strong> - Heat-welded seams on TPO (strongest method)</li>
              <li><strong>Flashing details</strong> - Proper detailing at walls, penetrations, and edges</li>
              <li><strong>Drain integration</strong> - Watertight connections to drains and scuppers</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Flat Roofing in Idaho</h2>
            <p>Flat roofs work fine in Idaho's climate when installed correctly:</p>

            <p><strong>Snow loads:</strong> Flat roofs must be designed for snow loads. We calculate structural requirements based on local building codes.</p>

            <p><strong>Temperature swings:</strong> Single-ply membranes handle Idaho's temperature extremes well. The key is using quality materials.</p>

            <p><strong>Ice and snow melt:</strong> Proper drainage prevents ice dams and ensures melt water has a way off the roof.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Maintenance</h2>
            <p>Flat roofs need more maintenance than sloped roofs:</p>
            <ul>
              <li>Keep drains clear of debris</li>
              <li>Inspect after heavy snow for ice buildup</li>
              <li>Check for punctures or damage</li>
              <li>Look for seam issues or bubbling</li>
              <li>Have professional inspections every few years</li>
            </ul>

            <p>Regular maintenance extends flat roof life significantly. We offer maintenance programs for commercial properties.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Warranty Coverage</h2>
            <p>We install flat roofing systems with manufacturer warranties ranging from 10-30 years depending on the product.</p>

            <p>Our workmanship warranty covers installation defects. Between manufacturer and workmanship warranties, you're protected.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">When to Replace vs. Repair</h2>
            <p>Small issues can often be repaired. Consider replacement when:</p>
            <ul>
              <li>The roof is more than 15-20 years old</li>
              <li>You have multiple problem areas</li>
              <li>There's extensive bubbling or delamination</li>
              <li>Insulation is wet or compressed</li>
              <li>You're spending too much on repeated repairs</li>
            </ul>

            <p>We'll give you an honest assessment of whether repair or replacement makes more sense.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We install flat roofing systems throughout Boise, Meridian, Nampa, Caldwell, Eagle, and all surrounding areas.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Need a Flat Roof Replacement?</h3>
              <p className="mb-6">Get a free estimate. We'll inspect your flat roof, discuss the best system for your application, and provide a detailed quote.</p>
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
