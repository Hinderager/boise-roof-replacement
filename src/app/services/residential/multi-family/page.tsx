import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Multi-Family Roof Replacement Boise | Apartment Roofing | (208) 505-9352',
  description: 'Expert multi-family roof replacement in Boise. Apartment buildings, duplexes, and multi-unit properties. Minimal tenant disruption. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/residential/multi-family' },
}

export default function MultiFamilyPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services/residential" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Residential Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Multi-Family Roofing in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Professional roof replacement for apartment buildings, duplexes, and multi-unit residential properties.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Multi-Family Property Roofing</h2>
            <p>Apartment buildings and multi-unit properties need roofing contractors who understand occupied buildings, tight timelines, and the importance of minimizing disruption to tenants.</p>

            <p>We've replaced roofs on multi-family properties throughout the Boise area—from small duplexes to large apartment complexes.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">For Property Owners and Managers</h2>
            <p>Managing rental properties means balancing quality work with cost control and tenant satisfaction. We get it.</p>

            <p>What we provide:</p>
            <ul>
              <li><strong>Detailed assessments</strong> - Thorough inspection with photo documentation</li>
              <li><strong>Transparent pricing</strong> - Clear breakdown so you know exactly what you're paying for</li>
              <li><strong>Flexible scheduling</strong> - Work around tenant needs when possible</li>
              <li><strong>Minimal disruption</strong> - Professional crews who respect occupied buildings</li>
              <li><strong>Progress reporting</strong> - Keep you informed throughout the project</li>
              <li><strong>Warranty documentation</strong> - Complete records for your files</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Types of Properties We Serve</h2>
            <p><strong>Duplexes and Triplexes</strong> - Small multi-unit buildings typically completed quickly</p>

            <p><strong>4-8 Unit Buildings</strong> - Mid-size properties requiring coordination but manageable timelines</p>

            <p><strong>Apartment Complexes</strong> - Larger projects requiring phasing, staging, and detailed planning</p>

            <p><strong>Mixed-Use Buildings</strong> - Commercial/residential combinations needing flexible scheduling</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Minimizing Tenant Disruption</h2>
            <p>Tenants are your customers. We treat them with respect and minimize inconvenience:</p>

            <ul>
              <li>Advance notice to residents about work schedule</li>
              <li>Professional, courteous crews</li>
              <li>Work during agreed-upon hours</li>
              <li>Safe work areas with clear signage</li>
              <li>Immediate cleanup of common areas</li>
              <li>Address tenant concerns promptly</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Maintenance Programs</h2>
            <p>For property managers with multiple buildings, we offer preventive maintenance programs:</p>

            <ul>
              <li>Annual roof inspections on all properties</li>
              <li>Detailed condition reports</li>
              <li>Priority emergency response</li>
              <li>Long-term capital planning</li>
              <li>Proactive repairs to extend roof life</li>
              <li>Volume pricing for multiple properties</li>
            </ul>

            <p>Preventive maintenance extends roof life and prevents expensive emergency replacements.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Budget Planning</h2>
            <p>We can help with long-term roof replacement planning:</p>

            <ul>
              <li>Assessment of all roofs in your portfolio</li>
              <li>Remaining useful life estimates</li>
              <li>Replacement cost projections</li>
              <li>Phasing recommendations to spread costs</li>
              <li>Financing options for large projects</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Emergency Response</h2>
            <p>When rental property roofs fail, you need fast response to prevent interior damage and keep tenants safe.</p>

            <p>We provide emergency services for multi-family properties including temporary repairs, tarping, and fast-tracked replacement.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Documentation</h2>
            <p>We provide comprehensive documentation for property management records:</p>
            <ul>
              <li>Before and after photos</li>
              <li>Detailed scope of work</li>
              <li>Material specifications and receipts</li>
              <li>Warranty certificates</li>
              <li>Inspection reports</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We provide multi-family roofing services throughout Boise, Meridian, Nampa, Caldwell, Eagle, and all surrounding areas.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Multi-Family Roofing Estimate</h3>
              <p className="mb-6">Property owners and managers—call for a comprehensive roof assessment and detailed quote.</p>
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
