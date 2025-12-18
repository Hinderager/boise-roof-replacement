import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Single Family Roof Replacement Boise | Home Roofing | (208) 505-9352',
  description: 'Expert roof replacement for single-family homes in Boise. All home sizes and styles. 30+ years experience. Free estimates. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/residential/single-family' },
}

export default function SingleFamilyPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services/residential" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Residential Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Single-Family Home Roofing</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Professional roof replacement for homes of all sizes and styles throughout the Boise area.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Residential Roofing Specialists</h2>
            <p>Single-family homes are what we do most. From small ranch-style homes to large two-story houses with complex rooflines—we've replaced thousands of residential roofs across the Treasure Valley.</p>

            <p>Every home is different. We adapt our approach to your specific roof, your property, and your needs.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">We Handle All Home Styles</h2>
            <p>Different homes present different roofing challenges. We have experience with every common architectural style:</p>

            <p><strong>Ranch and single-story homes</strong> - Straightforward rooflines, typically completed in 1-2 days.</p>

            <p><strong>Two-story traditional homes</strong> - More complex with valleys, dormers, and multiple planes. We handle the logistics safely.</p>

            <p><strong>Split-level homes</strong> - Multiple roof heights and intersections require careful flashing and integration.</p>

            <p><strong>Modern architectural homes</strong> - Flat sections, unusual angles, mixed materials. We have the skills for complex projects.</p>

            <p><strong>Historic homes</strong> - Older construction needs special attention to maintain architectural integrity while upgrading the roof.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Our Process for Your Home</h2>
            <p>Here's what happens when you hire us:</p>

            <ol>
              <li><strong>Initial consultation</strong> - We discuss your roof concerns and what you need</li>
              <li><strong>Thorough inspection</strong> - Check all roof surfaces, attic, and underlying structure</li>
              <li><strong>Detailed estimate</strong> - Clear breakdown of materials, labor, timeline, and cost</li>
              <li><strong>Material selection</strong> - Review options for shingles, underlayment, and ventilation</li>
              <li><strong>Scheduling</strong> - Pick a date that works for you, watching weather forecasts</li>
              <li><strong>Pre-work preparation</strong> - Protect landscaping, driveway, and belongings</li>
              <li><strong>Tear-off and inspection</strong> - Remove old roof, check deck for damage</li>
              <li><strong>Deck repairs</strong> - Replace any damaged decking before new roof goes on</li>
              <li><strong>Installation</strong> - Install underlayment, ice and water shield, drip edge, shingles, and ridge vents</li>
              <li><strong>Cleanup</strong> - Magnetic sweep for nails, haul all debris, rake yard</li>
              <li><strong>Final walkthrough</strong> - Review the completed work together</li>
            </ol>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Protecting Your Property</h2>
            <p>We treat your home with respect. That means:</p>
            <ul>
              <li>Tarps and plywood to protect landscaping, driveways, and walkways</li>
              <li>Careful handling around gardens and delicate plants</li>
              <li>Covered dumpster or trailer to contain debris</li>
              <li>Professional crews who respect your property</li>
              <li>Magnetic sweeps multiple times to catch nails</li>
              <li>Thorough cleanup that leaves your yard looking good</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Timeline</h2>
            <p>Most single-family roof replacements take 1-3 days depending on:</p>
            <ul>
              <li>Square footage of roof</li>
              <li>Complexity of roofline</li>
              <li>Number of layers being removed</li>
              <li>Extent of deck repairs needed</li>
              <li>Weather conditions</li>
            </ul>

            <p>We'll give you an accurate timeline before starting. Most jobs start early morning and we work until complete each day.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Can You Stay Home During Work?</h2>
            <p>Yes. Roof replacement is noisy, but you don't need to leave your home. Just expect noise during working hours.</p>

            <p>We'll let you know before we start each major phase (tear-off, installation, cleanup) so you know what to expect.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Upgrades and Improvements</h2>
            <p>A roof replacement is a good opportunity to improve your roof system:</p>
            <ul>
              <li><strong>Better ventilation</strong> - Ridge vents and proper intake vents extend shingle life</li>
              <li><strong>Ice and water shield</strong> - Extra protection in valleys and eaves prevents ice dam leaks</li>
              <li><strong>Upgraded underlayment</strong> - Synthetic underlayment lasts longer and provides better protection</li>
              <li><strong>Attic insulation</strong> - While we're up there, we can spot insulation issues</li>
              <li><strong>Gutter replacement</strong> - If gutters are old, replacing them with the roof makes sense</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Financing Options</h2>
            <p>A new roof is a significant investment. We offer financing to qualified homeowners to make it more manageable.</p>

            <p>Ask about financing options when you call for an estimate.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We replace roofs on single-family homes throughout Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, Garden City, and all surrounding communities.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Ready for a New Roof?</h3>
              <p className="mb-6">Get a free estimate for your home. We'll inspect your roof, discuss your options, and provide a detailed quote with no obligation.</p>
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
