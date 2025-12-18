import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Roof Replacement Boise | Industrial Roofing | (208) 505-9352',
  description: 'Commercial and industrial roof replacement in Boise. Flat roofs, metal systems, property management services. Licensed and insured. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/commercial' },
}

export default function CommercialPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Commercial Roofing in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Professional commercial roof replacement and maintenance for businesses and property managers throughout the Treasure Valley.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Commercial Roofing Expertise</h2>
            <p>Commercial roofing is different from residential work. The stakes are higher, the projects are larger, and downtime costs you money.</p>

            <p>We've replaced commercial roofs on everything from small retail buildings to large industrial warehouses. We understand the importance of completing projects on time, on budget, and with minimal disruption to your business.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Commercial Services</h2>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Commercial Roof Replacement</h3>
            <p>Complete roof replacement for commercial buildings of all sizes. We work with flat roofs, low-slope systems, metal roofing, and built-up roofing.</p>

            <p>Our process:</p>
            <ul>
              <li>Thorough inspection and assessment</li>
              <li>Detailed scope of work and timeline</li>
              <li>Work scheduled around your business hours when possible</li>
              <li>Professional crews with commercial experience</li>
              <li>Daily progress reports</li>
              <li>Complete cleanup and site restoration</li>
            </ul>

            <p>We understand that every day without a functioning roof costs you money. We work efficiently without sacrificing quality.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Industrial Roofing</h3>
            <p>Warehouses, manufacturing facilities, and industrial buildings need roofing contractors who can handle large-scale projects safely and efficiently.</p>

            <p>We have the equipment and expertise for:</p>
            <ul>
              <li>Large flat roof systems (TPO, EPDM, modified bitumen)</li>
              <li>Metal roofing for industrial applications</li>
              <li>High-performance coating systems</li>
              <li>Structural repairs and deck replacement</li>
              <li>Fall protection and safety compliance</li>
            </ul>

            <p>All crews are OSHA trained and we maintain comprehensive safety protocols for every job.</p>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Property Management Services</h3>
            <p>If you manage multiple properties, we can be your go-to roofing partner for maintenance, repairs, and replacements.</p>

            <p>Services for property managers:</p>
            <ul>
              <li>Regular roof inspections and maintenance programs</li>
              <li>Emergency repair response</li>
              <li>Multi-property scheduling and coordination</li>
              <li>Detailed documentation and photo reports</li>
              <li>Budget planning and lifecycle analysis</li>
              <li>Insurance claim assistance</li>
            </ul>

            <p>We work with you to extend roof life, prevent emergency replacements, and plan capital improvements strategically.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Commercial Roofing Systems</h2>
            <p>We install and service all major commercial roofing systems:</p>

            <p><strong>TPO (Thermoplastic Polyolefin)</strong> - White single-ply membrane with excellent energy efficiency and welded seams. Popular choice for new commercial roofs.</p>

            <p><strong>EPDM (Rubber Roofing)</strong> - Proven performance, cost-effective, and reliable. Black membrane that's been the commercial standard for decades.</p>

            <p><strong>Modified Bitumen</strong> - Multi-layer torch-down or cold-applied system. Excellent waterproofing and puncture resistance.</p>

            <p><strong>Metal Roofing</strong> - Standing seam metal for commercial and industrial applications. Long lifespan and low maintenance.</p>

            <p><strong>Built-Up Roofing (BUR)</strong> - Traditional hot-tar and gravel system. Still used in certain applications where proven performance is critical.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Why Commercial Clients Choose Us</h2>
            <p>We understand what commercial property owners and managers need:</p>

            <ul>
              <li><strong>Minimal disruption</strong> - Work around your business hours when possible</li>
              <li><strong>Detailed documentation</strong> - Progress photos, inspection reports, warranty paperwork</li>
              <li><strong>Clear communication</strong> - Single point of contact, responsive to questions</li>
              <li><strong>Safety focus</strong> - OSHA compliance, proper fall protection, trained crews</li>
              <li><strong>Budget certainty</strong> - Detailed estimates with no surprise costs</li>
              <li><strong>Warranty protection</strong> - Full manufacturer warranties and workmanship guarantees</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Licensed and Insured</h2>
            <p>We carry comprehensive commercial general liability insurance and workers' compensation coverage. Certificates of insurance provided upon request.</p>

            <p>All work is performed by licensed contractors in compliance with local building codes and manufacturer specifications.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We provide commercial roofing services throughout Boise, Meridian, Nampa, Caldwell, Eagle, and all surrounding areas.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Commercial Roofing Quote</h3>
              <p className="mb-6">Get a detailed estimate for your commercial roofing project. We'll inspect your property, provide a comprehensive scope of work, and deliver a competitive quote.</p>
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
