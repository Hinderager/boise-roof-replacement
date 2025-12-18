import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industrial Roofing Boise | Warehouse & Factory Roofs | (208) 505-9352',
  description: 'Expert industrial roof replacement in Boise. Warehouses, manufacturing facilities, large-scale projects. OSHA compliant. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/commercial/industrial-roofing' },
}

export default function IndustrialRoofingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services/commercial" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Commercial Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Industrial Roofing in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Large-scale roofing for warehouses, manufacturing facilities, and industrial buildings.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Industrial Roofing Specialists</h2>
            <p>Industrial roofing is different from commercial or residential work. The buildings are larger, the stakes are higher, and safety requirements are more stringent.</p>

            <p>We have the equipment, expertise, and safety protocols to handle large industrial roofing projects.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Types of Industrial Buildings</h2>
            <p>We provide roofing services for:</p>
            <ul>
              <li>Warehouses and distribution centers</li>
              <li>Manufacturing facilities</li>
              <li>Processing plants</li>
              <li>Storage facilities</li>
              <li>Industrial parks</li>
              <li>Cold storage buildings</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Industrial Roofing Systems</h2>
            <p><strong>TPO Single-Ply</strong> - Most common for large industrial roofs. White membrane reflects heat, reduces cooling costs.</p>

            <p><strong>EPDM Rubber</strong> - Black membrane, proven performance, cost-effective for large square footage.</p>

            <p><strong>Standing Seam Metal</strong> - Long lifespan, minimal maintenance, handles snow loads well.</p>

            <p><strong>Spray Polyurethane Foam</strong> - Seamless insulation and waterproofing. Good for irregular surfaces.</p>

            <p><strong>Silicone Coating Systems</strong> - Restore existing roofs, extend life, highly reflective.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Large-Scale Project Management</h2>
            <p>Industrial projects require careful planning and coordination:</p>
            <ul>
              <li>Pre-construction planning and logistics</li>
              <li>Phased scheduling to maintain operations</li>
              <li>Coordination with your facility managers</li>
              <li>Material staging and delivery planning</li>
              <li>Crane and equipment coordination</li>
              <li>Weather contingency plans</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Safety Is Non-Negotiable</h2>
            <p>Industrial roofing has significant safety challenges. We maintain strict safety protocols:</p>
            <ul>
              <li>Full OSHA compliance on every project</li>
              <li>Site-specific safety plans</li>
              <li>Fall protection systems</li>
              <li>Daily safety briefings</li>
              <li>OSHA-certified crew leaders</li>
              <li>Regular safety audits</li>
            </ul>

            <p>We've never had a serious safety incident, and we intend to keep it that way.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Minimal Production Disruption</h2>
            <p>We understand your facility can't shut down for roofing work. We minimize disruption:</p>
            <ul>
              <li>Work during off-shifts when possible</li>
              <li>Phased approach to keep operations running</li>
              <li>Dust and noise mitigation</li>
              <li>Coordinate with production schedules</li>
              <li>Efficient work to reduce total project time</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Energy Efficiency</h2>
            <p>Large industrial roofs offer significant energy savings opportunities:</p>
            <ul>
              <li>Reflective white membranes reduce cooling costs</li>
              <li>Proper insulation improves thermal performance</li>
              <li>Cool roof certifications available</li>
              <li>Energy modeling for cost-benefit analysis</li>
              <li>Potential utility rebates for energy-efficient roofing</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Long-Term Planning</h2>
            <p>For facilities with multiple buildings or large campuses, we provide:</p>
            <ul>
              <li>Facility-wide roof assessments</li>
              <li>Remaining useful life evaluations</li>
              <li>Multi-year capital planning</li>
              <li>Budget forecasting</li>
              <li>Preventive maintenance programs</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We provide industrial roofing services throughout Boise, Meridian, Nampa, Caldwell, and all surrounding areas.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Industrial Roofing Project Quote</h3>
              <p className="mb-6">Contact us for a comprehensive assessment and detailed proposal for your industrial roofing project.</p>
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
