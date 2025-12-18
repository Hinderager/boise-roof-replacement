import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Emergency Roof Replacement Boise | 24/7 Service | (208) 505-9352',
  description: 'Emergency roof replacement in Boise. Fast response for severe damage, storms, fallen trees. We secure your home and complete replacement quickly. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/roof-replacement/emergency-roof-replacement' },
}

export default function EmergencyRoofReplacementPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services/roof-replacement" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roof Replacement
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Emergency Roof Replacement in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">When you can't wait, we respond fast. Emergency roof replacement for severe damage.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">We Respond to Roofing Emergencies</h2>
            <p>Some roof damage can't wait. When you're dealing with major leaks, structural damage, or a roof that's actively failing—you need help now.</p>

            <p>We provide emergency roof replacement services throughout the Boise area. Our goal is to secure your home immediately and complete a proper replacement as quickly as possible.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Common Roofing Emergencies</h2>
            <p>We handle emergency replacements for:</p>

            <ul>
              <li><strong>Severe storm damage</strong> - High winds that blow off large sections of roofing</li>
              <li><strong>Fallen trees</strong> - Trees or large branches that puncture and destroy roofing</li>
              <li><strong>Fire damage</strong> - Roof damage from fires requiring immediate replacement</li>
              <li><strong>Structural failure</strong> - Sagging, collapse, or major structural issues</li>
              <li><strong>Major leaks</strong> - Active water intrusion causing interior damage</li>
              <li><strong>Heavy snow damage</strong> - Collapsed sections from excessive snow loads</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Our Emergency Response Process</h2>
            <p>When you call with an emergency, here's what happens:</p>

            <ol>
              <li><strong>Immediate assessment</strong> - We'll talk through your situation on the phone</li>
              <li><strong>Rapid response</strong> - Get to your property as quickly as possible</li>
              <li><strong>Emergency temporary repairs</strong> - Tarp, board up, or secure damaged areas to stop water intrusion</li>
              <li><strong>Damage documentation</strong> - Photos and notes for insurance claims</li>
              <li><strong>Inspection and estimate</strong> - Assess full extent of damage and provide replacement quote</li>
              <li><strong>Fast-track scheduling</strong> - Priority scheduling to complete replacement quickly</li>
              <li><strong>Full replacement</strong> - Complete tear-off and new roof installation</li>
            </ol>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Temporary Emergency Repairs</h2>
            <p>The first priority in any roofing emergency is stopping further damage to your home.</p>

            <p>We'll quickly install tarps, perform temporary board-ups, or apply emergency patches to keep water out while we plan the full replacement.</p>

            <p>These temporary measures buy us time to do the replacement properly rather than rushing and cutting corners.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Working with Insurance</h2>
            <p>Most emergency roof replacements involve insurance claims. We've worked with every major insurance company.</p>

            <p>We help by:</p>
            <ul>
              <li>Documenting all damage with detailed photos</li>
              <li>Providing emergency service documentation</li>
              <li>Meeting with insurance adjusters</li>
              <li>Submitting detailed estimates</li>
              <li>Advocating for proper scope of repairs</li>
            </ul>

            <p>Your insurance company has a duty to cover necessary repairs. We make sure they see the full extent of the damage.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Fast Scheduling</h2>
            <p>Emergency replacements get priority on our schedule. While most roof replacements are scheduled weeks in advance, we can typically start emergency work within days.</p>

            <p>We'll work with you and watch weather forecasts to find the first available window for replacement.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">What to Do Right Now</h2>
            <p>If you're dealing with a roofing emergency:</p>

            <ol>
              <li><strong>Stay safe</strong> - Don't go on the roof yourself</li>
              <li><strong>Contain interior damage</strong> - Move furniture, catch water with buckets</li>
              <li><strong>Take photos</strong> - Document damage for insurance if safe to do so</li>
              <li><strong>Call us immediately</strong> - (208) 505-9352</li>
            </ol>

            <p>We'll talk through your situation and get help to you as quickly as possible.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Prevention Tips</h2>
            <p>While you can't prevent every emergency, regular maintenance helps:</p>
            <ul>
              <li>Trim trees near your roof before storms</li>
              <li>Keep gutters clear to prevent ice dams</li>
              <li>Schedule annual roof inspections</li>
              <li>Address small issues before they become emergencies</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We provide emergency roof replacement throughout Boise, Meridian, Nampa, Caldwell, Eagle, and all surrounding areas.</p>

            <div className="bg-red-50 p-8 rounded-lg mt-12 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Roofing Emergency? Call Now</h3>
              <p className="mb-6">Don't wait. We'll respond quickly to secure your home and prevent further damage.</p>
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
