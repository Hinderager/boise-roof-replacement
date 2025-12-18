import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Full Roof Replacement Boise | Complete Roof Installation | (208) 505-9352',
  description: 'Need a complete roof replacement in Boise? We tear off old materials and install new roofing systems. 30+ years experience. Free estimates. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/full-roof-replacement' },
}

export default function FullRoofReplacementPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Full Roof Replacement in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">When your roof's beyond repair, we'll install a brand new system that protects your home for decades.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">When It's Time for a New Roof</h2>
            <p>Sometimes patching and repairing just doesn't make sense anymore. If your roof's getting old, has widespread damage, or you're dealing with constant leaks—it's probably time for a complete replacement.</p>
            
            <p>We've replaced hundreds of roofs across the Treasure Valley. The process is straightforward, and we handle everything from start to finish.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">What's Involved</h2>
            <p>A full roof replacement means we tear off all the old materials down to the deck, inspect everything underneath, and install a completely new roofing system.</p>

            <p>Here's how it works:</p>
            <ul>
              <li><strong>Initial inspection</strong> - We check your roof's condition and measure everything</li>
              <li><strong>Material selection</strong> - You choose your shingles, underlayment, and warranties</li>
              <li><strong>Tear-off</strong> - We remove all old roofing materials and haul them away</li>
              <li><strong>Deck inspection</strong> - Check for rot or damage that needs fixing</li>
              <li><strong>Installation</strong> - Install new underlayment, drip edge, flashing, and shingles</li>
              <li><strong>Cleanup</strong> - Magnetic sweep, haul debris, leave your property spotless</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Material Options</h2>
            <p>You've got choices when it comes to roofing materials. Each has its own benefits:</p>

            <p><strong>Asphalt Shingles</strong> - Most popular option. Affordable, reliable, and comes in tons of colors. Typically lasts 20-30 years.</p>

            <p><strong>Architectural Shingles</strong> - Thicker, more dimensional look. Better wind resistance and longer warranties. Great curb appeal.</p>

            <p><strong>Metal Roofing</strong> - Lasts 50+ years, energy-efficient, handles snow perfectly. Higher upfront cost but minimal maintenance.</p>

            <p><strong>Tile</strong> - Beautiful, long-lasting, and holds up great in Idaho weather. Best for certain architectural styles.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Why Choose Us</h2>
            <p>We've been doing this for over 30 years in the Boise area. Our crews are experienced, licensed, and actually care about doing quality work.</p>

            <p>You get:</p>
            <ul>
              <li>Free detailed estimates with no pressure</li>
              <li>High-quality materials from trusted manufacturers</li>
              <li>Experienced crews who show up on time</li>
              <li>Complete cleanup - we don't leave a mess</li>
              <li>Manufacturer warranties plus our workmanship guarantee</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Timeline and What to Expect</h2>
            <p>Most residential roof replacements take 1-3 days depending on size and complexity. We'll give you an accurate timeline before we start.</p>

            <p>It's loud. There's no way around that. But we work efficiently and keep disruption to a minimum. You can stay in your home during the work—just expect some noise.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We replace roofs throughout Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding areas. If you're in the Treasure Valley, we can help.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Ready for a New Roof?</h3>
              <p className="mb-6">Get a free estimate. We'll inspect your roof, discuss your options, and give you a detailed quote—no obligation.</p>
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
