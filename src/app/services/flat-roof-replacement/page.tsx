import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Flat Roof Replacement Boise | TPO, EPDM, Modified Bitumen | (208) 505-9352',
  description: 'Flat roof installation and replacement in Boise. TPO, EPDM, modified bitumen systems. Commercial and residential. Free estimates. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/flat-roof-replacement' },
}

export default function FlatRoofReplacementPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Flat Roof Systems in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Modern flat roofing systems for your garage, addition, or commercial building. Built to last and guaranteed watertight.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Flat Roofs Are Different</h2>
            <p>Flat roofs require different materials and installation methods than pitched roofs. Water does not run off as easily, so the membrane needs to be completely waterproof.</p>
            
            <p>We work with flat roofs every day—on garages, additions, porches, and commercial buildings. The right system makes all the difference.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Types of Flat Roofing Systems</h2>
            <p>We install three main types of flat roofing:</p>

            <p><strong>TPO (Thermoplastic Polyolefin)</strong> - The most popular option. White membrane reflects heat, making it energy-efficient. Seams are heat-welded for a watertight seal. Affordable, durable, and low-maintenance.</p>

            <p><strong>EPDM (Rubber Roofing)</strong> - Black rubber membrane. Handles temperature extremes well. Easy to repair if damaged. Been around forever and proven reliable.</p>

            <p><strong>Modified Bitumen</strong> - Multi-layer system similar to traditional tar and gravel but modern. Very tough and handles foot traffic well. Good for roofs that need regular access.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Benefits of Modern Flat Roofing</h2>
            <ul>
              <li><strong>Longevity</strong> - 20-30 years with proper maintenance</li>
              <li><strong>Energy efficiency</strong> - White TPO membranes reduce cooling costs</li>
              <li><strong>Easy maintenance</strong> - Simple inspections and repairs</li>
              <li><strong>Cost-effective</strong> - Less material and labor than pitched roofs</li>
              <li><strong>Accessible</strong> - Can safely walk on most flat roof systems</li>
              <li><strong>Space utilization</strong> - Can add rooftop HVAC units or solar panels</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Installation Process</h2>
            <p>Here is how we install flat roofing systems:</p>
            <ul>
              <li>Remove old roofing materials if needed</li>
              <li>Inspect and repair roof deck</li>
              <li>Install proper insulation layers</li>
              <li>Add tapered insulation for drainage if needed</li>
              <li>Install roofing membrane with proper overlaps</li>
              <li>Heat-weld or adhere seams</li>
              <li>Flash all penetrations, edges, and drains</li>
              <li>Install edge metal and termination bars</li>
              <li>Final inspection and testing</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Drainage Is Critical</h2>
            <p>Flat roofs are not actually flat—they need proper slope for water drainage. Even a small amount of ponding water shortens roof life.</p>

            <p>We make sure your roof has proper drainage. Sometimes that means adding tapered insulation to create slope. Other times we install additional drains or scuppers.</p>

            <p>Good drainage is what separates a flat roof that lasts 30 years from one that fails in 10.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Common Applications</h2>
            <p><strong>Residential</strong> - Garages, additions, covered patios, modern contemporary homes</p>

            <p><strong>Commercial</strong> - Retail buildings, warehouses, office buildings, apartment complexes</p>

            <p><strong>Industrial</strong> - Manufacturing facilities, storage buildings, workshops</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Maintenance Matters</h2>
            <p>Flat roofs need regular maintenance to reach their full lifespan. That means:</p>
            <ul>
              <li>Annual inspections</li>
              <li>Keeping drains clear</li>
              <li>Removing debris</li>
              <li>Checking seams and flashings</li>
              <li>Addressing small problems before they become big ones</li>
            </ul>

            <p>We offer maintenance programs for commercial properties. Regular checkups catch problems early and extend roof life.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Repairs vs. Replacement</h2>
            <p>Sometimes your flat roof just needs repairs. We can patch leaks, reseal seams, replace damaged sections, or add coatings to extend life.</p>

            <p>But if your roof has widespread problems or is near the end of its lifespan, replacement makes more sense. We will give you an honest assessment.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Warranties and Peace of Mind</h2>
            <p>We offer manufacturer warranties on materials and our own workmanship warranty. You get documentation and know exactly what is covered.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving Commercial and Residential</h2>
            <p>We handle flat roofing projects throughout Boise, Meridian, Nampa, Caldwell, and the Treasure Valley—both commercial and residential.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Need a Flat Roof?</h3>
              <p className="mb-6">Get a free inspection and estimate. We will assess your needs and recommend the right system.</p>
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
