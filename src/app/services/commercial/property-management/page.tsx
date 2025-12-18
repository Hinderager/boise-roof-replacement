import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Property Management Roofing Boise | Multi-Property Services | (208) 505-9352',
  description: 'Roofing services for property managers in Boise. Multi-property programs, maintenance plans, emergency response. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/commercial/property-management' },
}

export default function PropertyManagementPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services/commercial" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Commercial Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Property Management Roofing</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Comprehensive roofing services for property managers and portfolio owners.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Your Roofing Partner</h2>
            <p>Property managers need roofing contractors who are responsive, reliable, and provide consistent quality across multiple properties.</p>

            <p>We work with property management companies throughout the Treasure Valley as their go-to roofing partner for replacements, repairs, and maintenance.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Services for Property Managers</h2>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Portfolio Assessments</h3>
            <p>Get a complete picture of your roofing assets:</p>
            <ul>
              <li>Inspection of all properties in your portfolio</li>
              <li>Condition reports with photos for each roof</li>
              <li>Remaining useful life estimates</li>
              <li>Prioritized replacement recommendations</li>
              <li>Multi-year capital planning</li>
            </ul>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Preventive Maintenance Programs</h3>
            <p>Extend roof life and prevent emergency replacements:</p>
            <ul>
              <li>Scheduled inspections (annual or semi-annual)</li>
              <li>Minor repairs included in program</li>
              <li>Detailed condition reports</li>
              <li>Track maintenance history</li>
              <li>Priority emergency response</li>
              <li>Volume pricing across portfolio</li>
            </ul>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Emergency Response</h3>
            <p>When roofs fail, your tenants and owners need fast action:</p>
            <ul>
              <li>24/7 emergency contact</li>
              <li>Rapid response to secure building</li>
              <li>Temporary repairs to prevent further damage</li>
              <li>Fast-track replacement when needed</li>
              <li>Photo documentation for insurance/owners</li>
            </ul>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Multi-Property Coordination</h3>
            <p>Managing multiple properties efficiently:</p>
            <ul>
              <li>Single point of contact for all properties</li>
              <li>Coordinated scheduling across portfolio</li>
              <li>Consistent pricing structure</li>
              <li>Standardized reporting</li>
              <li>Batch projects for better pricing</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Budget Planning Support</h2>
            <p>Help with capital expenditure planning:</p>
            <ul>
              <li>Replacement cost estimates for budgeting</li>
              <li>Phasing recommendations to spread costs</li>
              <li>Lifecycle cost analysis</li>
              <li>Repair vs. replace evaluations</li>
              <li>Long-term forecasting</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Transparent Documentation</h2>
            <p>Property managers need clear records:</p>
            <ul>
              <li>Detailed proposals with clear scope</li>
              <li>Before and after photo documentation</li>
              <li>Material specifications and receipts</li>
              <li>Warranty certificates and registration</li>
              <li>Inspection reports in standard format</li>
              <li>Digital file access for all projects</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Tenant Relations</h2>
            <p>We understand tenant satisfaction matters:</p>
            <ul>
              <li>Professional, respectful crews</li>
              <li>Clear communication with tenants</li>
              <li>Minimize disruption to residents/businesses</li>
              <li>Prompt response to tenant concerns</li>
              <li>Thorough cleanup</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Insurance Claim Assistance</h2>
            <p>Help navigating storm damage claims:</p>
            <ul>
              <li>Damage assessment and documentation</li>
              <li>Meet with insurance adjusters</li>
              <li>Detailed estimates for claims</li>
              <li>Supplement requests when needed</li>
              <li>Help maximize insurance recoveries</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Billing and Payment</h2>
            <p>Flexible billing to fit your processes:</p>
            <ul>
              <li>Net-30 terms for established clients</li>
              <li>Consolidated billing for multiple properties</li>
              <li>Detailed invoices matching proposals</li>
              <li>Electronic payment options</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Why Property Managers Choose Us</h2>
            <ul>
              <li><strong>Responsive</strong> - Return calls and emails promptly</li>
              <li><strong>Reliable</strong> - Show up when scheduled, complete on time</li>
              <li><strong>Consistent quality</strong> - Same high standards on every project</li>
              <li><strong>Transparent pricing</strong> - No surprise costs or hidden fees</li>
              <li><strong>Professional</strong> - Crews who reflect well on your company</li>
              <li><strong>Long-term partner</strong> - We're here when you need us</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We provide property management roofing services throughout Boise, Meridian, Nampa, Caldwell, Eagle, and all surrounding areas.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Partner With Us</h3>
              <p className="mb-6">Property managers—let's discuss how we can support your roofing needs across your portfolio.</p>
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
