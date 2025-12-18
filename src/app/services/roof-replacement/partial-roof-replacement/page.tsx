import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partial Roof Replacement Boise | Section Replacement | (208) 505-9352',
  description: 'Partial roof replacement services in Boise. Replace damaged sections without replacing entire roof. Match existing materials. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/roof-replacement/partial-roof-replacement' },
}

export default function PartialRoofReplacementPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services/roof-replacement" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roof Replacement
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Partial Roof Replacement in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Sometimes you don't need to replace the whole roof—just the damaged section. We can help.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">When Partial Replacement Makes Sense</h2>
            <p>Not every roof problem requires tearing off the entire roof. Sometimes damage is localized to one section or slope.</p>

            <p>Partial roof replacement is a cost-effective option when:</p>
            <ul>
              <li>Storm damage affected only one side of your roof</li>
              <li>A tree fell and damaged a specific area</li>
              <li>One slope gets more sun exposure and wore out faster</li>
              <li>Previous repair work failed in a particular section</li>
              <li>Your roof is relatively new but has localized issues</li>
            </ul>

            <p>The key is making sure the rest of your roof is in good enough condition to last another 10-15 years. If not, a full replacement usually makes more financial sense.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Our Partial Replacement Process</h2>
            <p>Partial replacements require careful planning to ensure the new section integrates properly with your existing roof.</p>

            <p>Here's how we do it:</p>

            <ol>
              <li><strong>Thorough inspection</strong> - Check the entire roof to confirm partial replacement is the right approach</li>
              <li><strong>Material matching</strong> - Find shingles that match your existing roof as closely as possible</li>
              <li><strong>Scope determination</strong> - Define exactly which section needs replacement</li>
              <li><strong>Tear-off and deck inspection</strong> - Remove damaged materials and check for structural issues</li>
              <li><strong>Installation</strong> - Install new materials with proper tie-in to existing roof</li>
              <li><strong>Blending</strong> - Arrange shingles to minimize visual difference between old and new</li>
            </ol>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Material Matching</h2>
            <p>One challenge with partial replacements is matching your existing shingles. Shingle products get discontinued, colors change slightly over time, and new shingles look brighter than weathered ones.</p>

            <p>We work hard to get the closest match possible. Sometimes we can find the exact product. Other times we select something that's close in color and style.</p>

            <p>The new section will look different initially—that's unavoidable. But it weathers in over time and becomes less noticeable.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Cost Savings</h2>
            <p>Partial replacement costs 40-60% less than a full roof replacement, depending on the size of the damaged area.</p>

            <p>If your roof is less than 15 years old and the damage is isolated, partial replacement can extend your roof's life at a fraction of the cost of full replacement.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Insurance Claims</h2>
            <p>Many partial replacements result from storm damage covered by homeowner's insurance. We work with insurance companies regularly.</p>

            <p>We can:</p>
            <ul>
              <li>Provide detailed documentation of damage</li>
              <li>Meet with insurance adjusters</li>
              <li>Submit estimates in the format insurers require</li>
              <li>Advocate for proper scope of work</li>
            </ul>

            <p>Your insurance company might try to approve repairs instead of replacement. We'll give you an honest assessment of whether repairs are sufficient or replacement is necessary.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">When NOT to Do Partial Replacement</h2>
            <p>We'll tell you straight if partial replacement doesn't make sense for your situation.</p>

            <p>Full replacement is usually better when:</p>
            <ul>
              <li>Your roof is more than 15-20 years old</li>
              <li>Multiple sections have problems</li>
              <li>The existing roof is nearing end of life</li>
              <li>You'd just be replacing another section in a few years</li>
            </ul>

            <p>We don't push for the bigger job. We recommend what makes the most sense for your situation.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We provide partial roof replacement throughout Boise, Meridian, Nampa, Caldwell, Eagle, and all surrounding areas.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Is Partial Replacement Right for You?</h3>
              <p className="mb-6">Let's assess your roof together. We'll give you an honest opinion on whether partial or full replacement makes more sense.</p>
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
