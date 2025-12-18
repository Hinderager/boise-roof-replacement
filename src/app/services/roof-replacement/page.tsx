import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Replacement Services Boise | Expert Installation | (208) 505-9352',
  description: 'Complete roof replacement services in Boise. Full replacements, partial repairs, emergency service, and storm damage restoration. 30+ years experience. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/roof-replacement' },
}

export default function RoofReplacementPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Roof Replacement in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">From full replacements to emergency repairs, we handle every type of roof replacement project in the Treasure Valley.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Comprehensive Replacement Services</h2>
            <p>Your roof is one of the biggest investments in your home. When it's time for a replacement, you want it done right the first time.</p>

            <p>We've been replacing roofs in Boise and the surrounding areas for over 30 years. Whether you need a complete tear-off and new installation, a partial replacement for damaged sections, or emergency service after a storm—we've got you covered.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Our Replacement Services</h2>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Full Roof Replacement</h3>
            <p>Complete tear-off and installation of a new roofing system. We remove all old materials, inspect the deck, repair any damage, and install brand new roofing with proper underlayment and flashing.</p>
            <p>Best for roofs that are 20+ years old, have widespread damage, or are nearing the end of their lifespan.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Partial Roof Replacement</h3>
            <p>Sometimes only one section of your roof needs replacing. We'll match materials to your existing roof and replace just the damaged area.</p>
            <p>This works great for localized storm damage, structural issues in one area, or when one slope is more exposed to weather than others.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Emergency Roof Replacement</h3>
            <p>When you can't wait, we respond fast. Emergency replacements for severe damage from storms, fallen trees, fire damage, or structural failure.</p>
            <p>We'll secure your home immediately, then complete a full replacement as quickly as possible to prevent further damage.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Storm Damage Replacement</h3>
            <p>Idaho weather can be brutal on roofs—hail, high winds, heavy snow loads. We work directly with insurance companies to document damage and handle storm-related replacements.</p>
            <p>Free inspections for storm damage assessment and help with the insurance claims process.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Why Choose Us</h2>
            <p>We're not the cheapest, and we're not trying to be. We focus on quality work that lasts.</p>

            <ul>
              <li><strong>Licensed and insured</strong> - Full liability and workers' comp coverage</li>
              <li><strong>30+ years experience</strong> - We've seen it all and know how to handle it</li>
              <li><strong>Quality materials</strong> - We use top-tier products from manufacturers we trust</li>
              <li><strong>Clean job sites</strong> - Magnetic sweeps, thorough cleanup, respectful crews</li>
              <li><strong>Transparent pricing</strong> - Detailed estimates with no hidden fees</li>
              <li><strong>Warranty protection</strong> - Manufacturer warranties plus our workmanship guarantee</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">The Replacement Process</h2>
            <p>Here's what you can expect when working with us:</p>

            <ol>
              <li><strong>Free inspection and estimate</strong> - We assess your roof and provide a detailed quote</li>
              <li><strong>Material selection</strong> - Choose your roofing materials, colors, and warranty options</li>
              <li><strong>Scheduling</strong> - We coordinate with you on timing and weather windows</li>
              <li><strong>Installation</strong> - Tear-off, deck repair, and new roof installation</li>
              <li><strong>Final inspection</strong> - Walk-through to ensure everything's perfect</li>
              <li><strong>Cleanup</strong> - Complete debris removal and site restoration</li>
            </ol>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We replace roofs throughout Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, and all surrounding communities.</p>

            <p>If you're in the Treasure Valley and need a roof replacement, we can help.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Get Your Free Roof Replacement Estimate</h3>
              <p className="mb-6">We'll inspect your roof, discuss your options, and provide a detailed quote with no obligation. Same-day estimates available.</p>
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
