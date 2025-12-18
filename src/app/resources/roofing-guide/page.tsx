import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Boise Roofing Guide | Everything About Roof Replacement | (208) 505-9352',
  description: 'Complete guide to roof replacement in Boise. Materials, costs, timelines, and what to expect. Expert advice from 30+ years experience. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/resources/roofing-guide' },
}

export default function RoofingGuidePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/resources" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Complete Roofing Guide for Boise Homeowners</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Everything you need to know about roof replacement—from choosing materials to understanding costs.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">When Do You Need a New Roof?</h2>
            <p>Knowing when to replace your roof saves money in the long run. Here are the signs:</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Age</h3>
            <p>Most asphalt shingle roofs last 20-30 years. If your roof is approaching or past this age, start planning for replacement—even if it looks okay.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Obvious Damage</h3>
            <ul>
              <li>Missing or damaged shingles</li>
              <li>Curling or buckling shingles</li>
              <li>Granules collecting in gutters</li>
              <li>Moss or algae growth</li>
              <li>Sagging areas</li>
            </ul>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Interior Signs</h3>
            <ul>
              <li>Water stains on ceilings</li>
              <li>Light coming through roof boards in attic</li>
              <li>Mold or mildew in attic</li>
              <li>Higher than normal energy bills</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Choosing Roofing Materials</h2>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Asphalt Shingles</h3>
            <p><strong>Best for:</strong> Most homeowners looking for reliable, affordable roofing.</p>
            <p><strong>Lifespan:</strong> 20-30 years</p>
            <p><strong>Cost:</strong> $$</p>
            <p><strong>Pros:</strong> Affordable, wide color selection, proven performance, easy repairs</p>
            <p><strong>Cons:</strong> Shorter lifespan than premium materials, can be damaged by severe hail</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Metal Roofing</h3>
            <p><strong>Best for:</strong> Homeowners planning long-term, those wanting low maintenance.</p>
            <p><strong>Lifespan:</strong> 50-70+ years</p>
            <p><strong>Cost:</strong> $$$</p>
            <p><strong>Pros:</strong> Extremely long-lasting, excellent snow shedding, energy efficient, low maintenance</p>
            <p><strong>Cons:</strong> Higher upfront cost, can dent from large hail (though doesn't affect function)</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Tile Roofing</h3>
            <p><strong>Best for:</strong> Mediterranean/Spanish style homes, premium applications.</p>
            <p><strong>Lifespan:</strong> 50-100+ years</p>
            <p><strong>Cost:</strong> $$$$</p>
            <p><strong>Pros:</strong> Beautiful appearance, exceptional longevity, fire resistant, energy efficient</p>
            <p><strong>Cons:</strong> Expensive, heavy (requires structural support), limited to certain architectural styles</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Understanding Costs</h2>
            <p>Roof replacement costs in Boise typically range from $5,000-$25,000+ depending on several factors:</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Cost Factors</h3>
            <ul>
              <li><strong>Size</strong> - Larger roofs cost more (priced per square foot)</li>
              <li><strong>Pitch</strong> - Steeper roofs are more difficult and expensive</li>
              <li><strong>Complexity</strong> - Valleys, dormers, and skylights add labor</li>
              <li><strong>Materials</strong> - Premium materials cost more than basic shingles</li>
              <li><strong>Layers</strong> - Removing multiple layers adds to tear-off costs</li>
              <li><strong>Deck repairs</strong> - Damaged decking must be replaced</li>
              <li><strong>Accessibility</strong> - Difficult-to-access roofs cost more</li>
            </ul>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">What's Included</h3>
            <p>A complete roof replacement should include:</p>
            <ul>
              <li>Tear-off and disposal of old roofing</li>
              <li>Deck inspection and repairs</li>
              <li>Underlayment</li>
              <li>Ice and water shield</li>
              <li>Drip edge</li>
              <li>New shingles</li>
              <li>Ridge vents</li>
              <li>Flashing around chimneys, vents, skylights</li>
              <li>Cleanup and disposal</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">The Replacement Process</h2>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Step 1: Get Estimates</h3>
            <p>Get 2-3 estimates from reputable contractors. Make sure they inspect your roof thoroughly and provide detailed written estimates.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Step 2: Choose Materials</h3>
            <p>Review material options with your contractor. Consider appearance, lifespan, warranty, and budget.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Step 3: Schedule the Work</h3>
            <p>Most roof replacements are scheduled 2-6 weeks out. Your contractor will watch weather forecasts and confirm dates.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Step 4: Preparation</h3>
            <ul>
              <li>Move vehicles out of driveway</li>
              <li>Remove items from walls (vibration can knock things down)</li>
              <li>Protect items in attic from dust</li>
              <li>Trim back tree branches near roof</li>
              <li>Arrange for pets to be away from noise</li>
            </ul>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Step 5: Installation (1-3 days typical)</h3>
            <p>Expect noise during tear-off and installation. Your contractor should do daily cleanup and keep the site safe.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Step 6: Final Walkthrough</h3>
            <p>Review the completed work with your contractor. Make sure you're satisfied before making final payment.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Best Time for Roof Replacement in Boise</h2>
            <p><strong>Spring and Fall</strong> are ideal—moderate temperatures and lower chance of weather delays.</p>

            <p><strong>Summer</strong> works fine but can be very hot for workers. Schedule early mornings.</p>

            <p><strong>Winter</strong> is possible during dry spells but weather is unpredictable. Shingles don't seal as well in cold temperatures.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Choosing a Contractor</h2>
            <p>The contractor matters as much as the materials. Look for:</p>
            <ul>
              <li><strong>Local and established</strong> - Avoid storm chasers who disappear after payment</li>
              <li><strong>Licensed and insured</strong> - Verify liability and workers' comp coverage</li>
              <li><strong>Good references</strong> - Check online reviews and ask for local references</li>
              <li><strong>Detailed estimates</strong> - Vague estimates lead to surprise costs</li>
              <li><strong>Clear warranty</strong> - Understand both material and workmanship warranties</li>
              <li><strong>Good communication</strong> - You should feel comfortable asking questions</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Common Mistakes to Avoid</h2>
            <ul>
              <li><strong>Choosing based only on price</strong> - Low bids often mean corners will be cut</li>
              <li><strong>Ignoring ventilation</strong> - Proper attic ventilation extends roof life significantly</li>
              <li><strong>Skipping underlayment upgrades</strong> - Good underlayment is insurance against leaks</li>
              <li><strong>Not checking contractor credentials</strong> - Verify licenses and insurance</li>
              <li><strong>Paying everything upfront</strong> - Standard is deposit at signing, balance at completion</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Financing Options</h2>
            <p>If you need to spread out payments, options include:</p>
            <ul>
              <li>Contractor financing programs</li>
              <li>Home equity loans or lines of credit</li>
              <li>Personal loans</li>
              <li>Credit cards (if you can pay off quickly)</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Questions to Ask Contractors</h2>
            <ul>
              <li>How long have you been in business in this area?</li>
              <li>Can you provide proof of insurance?</li>
              <li>What's included in your estimate?</li>
              <li>How long will the project take?</li>
              <li>What warranty do you provide on workmanship?</li>
              <li>Will you handle permits?</li>
              <li>How do you handle unexpected issues like deck damage?</li>
            </ul>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Ready to Replace Your Roof?</h3>
              <p className="mb-6">Get a free estimate from experienced local roofers. We'll answer your questions and help you make the right decision for your home.</p>
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
