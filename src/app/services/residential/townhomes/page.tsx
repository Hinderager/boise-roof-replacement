import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Townhome Roof Replacement Boise | HOA Roofing | (208) 505-9352',
  description: 'Professional townhome roof replacement in Boise. We work with HOAs and property managers. Coordinated scheduling. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/residential/townhomes' },
}

export default function TownhomesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services/residential" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Residential Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Townhome Roofing in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Expert roof replacement for townhomes and condos. We handle HOA requirements and neighbor coordination.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Townhome Roofing Specialists</h2>
            <p>Townhome and condo roofing is different from single-family homes. You've got shared rooflines, HOA requirements, neighbors to coordinate with, and architectural guidelines to follow.</p>

            <p>We've replaced hundreds of townhome roofs throughout the Treasure Valley. We know how to navigate the requirements and complete projects smoothly.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Working with HOAs</h2>
            <p>Most townhome communities have HOA rules about roofing. We're experienced in working with HOA boards and architectural committees.</p>

            <p>We can help with:</p>
            <ul>
              <li>Understanding your HOA's roofing requirements</li>
              <li>Selecting approved materials and colors</li>
              <li>Submitting architectural requests if needed</li>
              <li>Scheduling during approved work times</li>
              <li>Meeting community standards for cleanup and noise</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Neighbor Coordination</h2>
            <p>Many townhomes share rooflines with adjacent units. When one side needs replacement, it often makes sense to coordinate with neighbors.</p>

            <p>Benefits of coordinating:</p>
            <ul>
              <li>Better pricing when doing multiple units together</li>
              <li>Consistent appearance across shared rooflines</li>
              <li>Less disruption overall (one project instead of several)</li>
              <li>Easier to match existing materials</li>
            </ul>

            <p>We can provide proposals for individual units or entire buildings.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">For HOA Boards and Property Managers</h2>
            <p>If you're on an HOA board or manage townhome communities, we can be your roofing partner:</p>

            <ul>
              <li>Community-wide roof assessments</li>
              <li>Long-term replacement planning and budgeting</li>
              <li>Phased replacement schedules</li>
              <li>Resident communication assistance</li>
              <li>Detailed documentation for board records</li>
              <li>Special assessment planning support</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Material Matching</h2>
            <p>Matching existing materials is important when some units in a community aren't being replaced yet. We work hard to find the closest match possible for consistency.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Minimizing Disruption</h2>
            <p>We understand townhome living means close neighbors. We keep disruption to a minimum:</p>
            <ul>
              <li>Respectful crews who understand close quarters</li>
              <li>Clear communication with all affected residents</li>
              <li>Efficient work to minimize duration</li>
              <li>Careful debris management in tight spaces</li>
              <li>Thorough cleanup of common areas</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We replace townhome roofs throughout Boise, Meridian, Nampa, Caldwell, Eagle, and all surrounding areas.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Townhome Roof Replacement Estimate</h3>
              <p className="mb-6">Whether you're a homeowner, HOA board member, or property manager—we can help. Call for a free estimate.</p>
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
