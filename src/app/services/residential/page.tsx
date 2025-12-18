import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Roof Replacement Boise | Home Roofing Services | (208) 505-9352',
  description: 'Expert residential roof replacement in Boise. Single-family homes, townhomes, and multi-family properties. 30+ years experience. Free estimates. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/residential' },
}

export default function ResidentialPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Residential Roofing in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Professional roof replacement for every type of home in the Treasure Valley.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">We Specialize in Residential Roofing</h2>
            <p>Your home is your biggest investment. When it needs a new roof, you want someone who understands residential construction, respects your property, and delivers quality work.</p>

            <p>We've replaced thousands of residential roofs across the Boise area. From small single-story homes to large estates, townhomes to apartment buildings—we have the experience and equipment to handle any residential roofing project.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Types of Residential Properties We Serve</h2>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Single-Family Homes</h3>
            <p>This is our bread and butter. We replace roofs on single-family homes of all sizes and styles throughout the Treasure Valley.</p>

            <p>Whether you have a ranch-style home, two-story traditional, or a complex roofline with multiple valleys and dormers—we handle it all.</p>

            <p>Most single-family roof replacements take 1-3 days depending on size and complexity. We work efficiently while maintaining high quality standards.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Townhomes and Condos</h3>
            <p>Townhome and condo roofing requires coordination with HOAs, neighbors, and property managers. We've done hundreds of these projects and know how to navigate the requirements.</p>

            <p>We work with HOA boards to schedule work during approved times, coordinate with multiple units when rooflines are shared, and ensure all architectural guidelines are met.</p>

            <p>If you're on an HOA board or property management team, we can provide proposals for entire communities.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Multi-Family Properties</h3>
            <p>Apartment buildings, duplexes, and multi-unit properties need roofing contractors who understand the challenges of working with occupied buildings.</p>

            <p>We minimize disruption to tenants, maintain safe work areas, and complete projects on schedule. Our crews are professional and respectful of residents.</p>

            <p>For property owners and managers, we offer maintenance programs and regular inspections to extend roof life and prevent emergency replacements.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Our Residential Roofing Process</h2>
            <p>Here's what happens when you hire us for your roof replacement:</p>

            <ol>
              <li><strong>Free inspection</strong> - We assess your current roof and identify any underlying issues</li>
              <li><strong>Detailed estimate</strong> - Clear breakdown of materials, labor, and timeline</li>
              <li><strong>Material selection</strong> - Help choosing the right products for your home and budget</li>
              <li><strong>Scheduling</strong> - We work around your schedule and watch weather forecasts</li>
              <li><strong>Preparation</strong> - Protect landscaping, move vehicles, set up safety equipment</li>
              <li><strong>Installation</strong> - Tear-off, deck inspection, and new roof installation</li>
              <li><strong>Cleanup</strong> - Magnetic sweep for nails, haul all debris, leave property spotless</li>
              <li><strong>Final walkthrough</strong> - Ensure you're completely satisfied with the work</li>
            </ol>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Why Homeowners Choose Us</h2>
            <p>We treat your home like our own. That's not just marketing talk—it's how we operate.</p>

            <ul>
              <li><strong>Respectful crews</strong> - Professional behavior, no loud music, clean language</li>
              <li><strong>Property protection</strong> - Tarps, plywood walkways, landscape protection</li>
              <li><strong>Clear communication</strong> - Daily updates, photos of progress, accessible if you have questions</li>
              <li><strong>Quality materials</strong> - We don't cut corners on underlayment, flashing, or ventilation</li>
              <li><strong>Thorough cleanup</strong> - Magnetic sweeps for nails, haul all debris, rake yard</li>
              <li><strong>Warranty coverage</strong> - Manufacturer warranties plus our workmanship guarantee</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Financing Available</h2>
            <p>A new roof is a significant expense. We offer financing options to qualified homeowners so you can get the roof you need without waiting.</p>

            <p>Ask about our financing programs when you call for an estimate.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We replace residential roofs throughout Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, Garden City, Middleton, and all surrounding communities.</p>

            <p>If you're in the Treasure Valley, we can help with your residential roofing project.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Ready to Replace Your Roof?</h3>
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
