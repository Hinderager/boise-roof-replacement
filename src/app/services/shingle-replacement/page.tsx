import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shingle Replacement Boise | Repair Damaged Roof Shingles | (208) 505-9352',
  description: 'Missing or damaged shingles in Boise? We replace individual shingles or sections to match your existing roof. Quick repairs. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/shingle-replacement' },
}

export default function ShingleReplacementPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Shingle Replacement in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Quick repairs for missing or damaged shingles. We'll match your existing roof and make it look like nothing ever happened.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">You Don't Always Need a New Roof</h2>
            <p>Wind blew some shingles off? Hail damage in one section? A branch fell and cracked some tiles?</p>
            
            <p>Good news—you probably don't need to replace your entire roof. In most cases, we can replace just the damaged shingles and have your roof looking perfect again.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">When Shingle Replacement Makes Sense</h2>
            <p>Replacing individual shingles or sections works great when:</p>
            <ul>
              <li>Your roof is less than 15 years old</li>
              <li>Damage is limited to one area</li>
              <li>The rest of your roof is in good shape</li>
              <li>We can match your existing shingles</li>
            </ul>

            <p>If your roof's older or damage is widespread, a full replacement might make more sense. We'll give you an honest assessment.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">How We Match Your Shingles</h2>
            <p>This is the part people worry about—will it look obvious?</p>

            <p>We're really good at matching shingles. We'll identify your exact shingle manufacturer, style, and color. In most cases, we can get an exact match or something so close you'd never know the difference.</p>

            <p>Even if your shingles are discontinued, we work with suppliers who specialize in finding matches for older styles.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">The Repair Process</h2>
            <p>Shingle repairs are quick—usually done in a few hours for small jobs.</p>

            <p>Here's what happens:</p>
            <ul>
              <li>We inspect the damage and surrounding area</li>
              <li>Match your shingle style and color</li>
              <li>Carefully remove damaged shingles</li>
              <li>Check underlayment and decking for hidden damage</li>
              <li>Install new shingles using proper techniques</li>
              <li>Seal and secure everything</li>
              <li>Clean up all debris</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Storm Damage and Insurance</h2>
            <p>If your shingles got damaged in a storm, your homeowner's insurance might cover it.</p>

            <p>We work with insurance companies all the time. We can document the damage, provide detailed estimates, and help with your claim. No guarantees—insurance companies make their own decisions—but we know how to present the information they need.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Common Shingle Problems We Fix</h2>
            <p><strong>Missing shingles</strong> - Wind is usually the culprit. We replace them before water gets under your roof.</p>

            <p><strong>Cracked or broken shingles</strong> - From hail, branches, or just age. Quick fix prevents bigger problems.</p>

            <p><strong>Lifted or curling shingles</strong> - Often means the adhesive failed or improper installation. We reseal or replace them.</p>

            <p><strong>Granule loss</strong> - If shingles are losing lots of granules, they're probably near end of life. We'll tell you if replacement is a better option.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Why Act Fast</h2>
            <p>Missing or damaged shingles expose your roof deck to water. Even a small leak can cause expensive damage to your attic, insulation, and ceilings.</p>

            <p>The sooner you fix it, the less likely you are to deal with bigger problems later.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We handle shingle repairs throughout Boise, Meridian, Nampa, Caldwell, Eagle, and the surrounding area.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Need Shingle Repair?</h3>
              <p className="mb-6">Call us for a free inspection. We'll assess the damage and give you an honest recommendation.</p>
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
