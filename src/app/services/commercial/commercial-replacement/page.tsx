import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Roof Replacement Boise | Business Roofing | (208) 505-9352',
  description: 'Professional commercial roof replacement in Boise. Minimal downtime, quality materials, on-budget completion. Licensed and insured. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/commercial/commercial-replacement' },
}

export default function CommercialReplacementPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services/commercial" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Commercial Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Commercial Roof Replacement</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Expert commercial roofing for businesses throughout the Boise area. On time, on budget, minimal disruption.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Commercial Roofing Expertise</h2>
            <p>Your business can't afford unexpected downtime or roof failures. We provide commercial roof replacement that's completed on schedule with minimal disruption to your operations.</p>

            <p>We've replaced commercial roofs on retail buildings, office complexes, medical facilities, restaurants, warehouses, and more.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Our Commercial Process</h2>
            <ol>
              <li><strong>Initial consultation</strong> - Understand your needs, timeline, and budget</li>
              <li><strong>Comprehensive inspection</strong> - Full roof assessment with photo documentation</li>
              <li><strong>Detailed proposal</strong> - Clear scope of work with materials, timeline, and costs</li>
              <li><strong>Pre-construction planning</strong> - Coordinate scheduling, staging, and logistics</li>
              <li><strong>Project execution</strong> - Professional installation with daily progress reports</li>
              <li><strong>Quality control</strong> - Inspections throughout project to ensure quality</li>
              <li><strong>Final walkthrough</strong> - Review completed work and provide documentation</li>
              <li><strong>Warranty registration</strong> - Complete warranty paperwork and provide certificates</li>
            </ol>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Minimizing Business Disruption</h2>
            <p>We understand roof work can impact your business. We minimize disruption through:</p>
            <ul>
              <li>Off-hours work when possible (nights/weekends)</li>
              <li>Phased scheduling to keep parts of building operational</li>
              <li>Clear communication with your team</li>
              <li>Safe work zones away from customer/employee areas</li>
              <li>Noise mitigation strategies</li>
              <li>Efficient work to reduce project duration</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Commercial Roofing Systems</h2>
            <p>We install all major commercial roofing systems:</p>

            <p><strong>TPO Single-Ply</strong> - Most popular commercial system. White membrane, energy efficient, heat-welded seams.</p>

            <p><strong>EPDM Rubber</strong> - Proven performance, cost-effective, reliable for decades.</p>

            <p><strong>Modified Bitumen</strong> - Multi-layer asphalt system. Excellent waterproofing.</p>

            <p><strong>Standing Seam Metal</strong> - Long lifespan, low maintenance, modern appearance.</p>

            <p><strong>Built-Up Roofing</strong> - Traditional tar and gravel. Still used for certain applications.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Safety and Compliance</h2>
            <p>Commercial roofing has strict safety requirements. We maintain full OSHA compliance:</p>
            <ul>
              <li>Fall protection systems on all projects</li>
              <li>OSHA-trained crews</li>
              <li>Regular safety meetings</li>
              <li>Proper equipment and gear</li>
              <li>Site-specific safety plans</li>
            </ul>

            <p>We carry comprehensive commercial general liability and workers' compensation insurance. Certificates provided upon request.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Budget Certainty</h2>
            <p>Commercial projects need predictable costs. Our detailed estimates include:</p>
            <ul>
              <li>Complete material specifications</li>
              <li>Labor breakdown</li>
              <li>Project timeline</li>
              <li>Payment schedule</li>
              <li>Allowances for unknowns</li>
            </ul>

            <p>No surprise costs. What we quote is what you pay unless you approve changes.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Warranty Protection</h2>
            <p>We provide comprehensive warranty coverage:</p>
            <ul>
              <li>Manufacturer material warranties (15-30 years typical)</li>
              <li>Workmanship warranty on our installation</li>
              <li>Optional extended warranties available</li>
              <li>Full warranty documentation and registration</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Maintenance Programs</h2>
            <p>Extend your new roof's life with scheduled maintenance:</p>
            <ul>
              <li>Annual or semi-annual inspections</li>
              <li>Detailed condition reports</li>
              <li>Minor repairs included</li>
              <li>Priority emergency response</li>
              <li>Maintain warranty compliance</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We provide commercial roof replacement throughout Boise, Meridian, Nampa, Caldwell, Eagle, and all surrounding areas.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Commercial Roofing Quote</h3>
              <p className="mb-6">Get a detailed estimate for your commercial roof replacement. We'll assess your building and provide a comprehensive proposal.</p>
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
