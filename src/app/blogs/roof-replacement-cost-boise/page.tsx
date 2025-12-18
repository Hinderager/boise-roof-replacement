import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, CheckCircle, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Replacement Cost in Boise Idaho | Price Guide 2025',
  description: 'What does roof replacement cost in Boise? Learn about pricing factors, material costs, and get accurate estimates for your home in the Treasure Valley. No surprises.',
  alternates: {
    canonical: 'https://boise-roof-replacement.com/blogs/roof-replacement-cost-boise',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/roof-replacement-cost.webp"
          alt="Roof Replacement Cost in Boise Idaho"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            How Much Does Roof Replacement Cost in Boise?
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Real numbers from actual Treasure Valley roof replacement projects.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Your roof is leaking, or the shingles are curling up, or maybe your insurance adjuster just told you it's time for a new one. Now you're wondering what this is going to cost.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Here's the thing about roof replacement cost in Boise — there's no single answer because every home is different. But you're not here for "it depends." You want actual numbers you can work with.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              So let's break down what roof replacement actually costs in the Treasure Valley, what affects the price, and what you should expect when you get quotes from roofing contractors in Boise.
            </p>
          </div>
        </div>
      </section>

      {/* Average Costs - Gradient Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">The Average Roof Replacement Cost in Boise</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Most homeowners in Boise spend between <strong>$8,000 and $15,000</strong> for a complete roof replacement with standard asphalt shingles. That's for an average-sized home (1,500-2,000 square feet of roof area).
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Smaller homes with simpler rooflines might come in around $6,000-$8,000. Larger homes with multiple levels, steep pitches, or complex layouts can easily push $18,000-$25,000 or more.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Here's where it gets tricky: online calculators will tell you the national average is $5-$8 per square foot. That's not wrong, but it's not the full picture. In Idaho, when you factor in labor costs, disposal fees, and local building codes, you're looking at closer to <strong>$400-$600 per roofing square</strong> (a roofing square is 100 square feet).
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              So if your roof is 20 squares (2,000 sq ft), you're looking at $8,000-$12,000 for materials and labor with mid-grade asphalt shingles. Premium materials or specialty work will push that higher.
            </p>
          </div>
        </div>
      </section>

      {/* Factors That Affect Price - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What Actually Affects Your Roof Replacement Cost</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every Boise roofer you call is going to give you a different number. That's because these factors change the scope of work dramatically:
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Roof Size and Pitch</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Bigger roof, more materials, higher cost. Pretty straightforward.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              But pitch matters too. A steep roof is harder and more dangerous to work on, which means more labor hours and safety equipment. A 12/12 pitch (very steep) can add 30-50% to your labor costs compared to a gentle 4/12 pitch.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Roofing Material You Choose</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Asphalt shingles are the most common in Boise because they're affordable and handle Idaho weather well. But you've got options:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-gray-600">
                <span className="text-lg">•</span>
                <span className="text-lg"><strong>Architectural asphalt shingles:</strong> $350-$500 per square (the standard choice)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="text-lg">•</span>
                <span className="text-lg"><strong>Premium designer shingles:</strong> $500-$700 per square (better warranties, longer life)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="text-lg">•</span>
                <span className="text-lg"><strong>Metal roofing:</strong> $700-$1,200 per square (lasts 50+ years, great for snow)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="text-lg">•</span>
                <span className="text-lg"><strong>Tile roofing:</strong> $1,000-$1,800 per square (mostly on high-end homes)</span>
              </li>
            </ul>
            <p className="text-lg text-gray-600 leading-relaxed">
              Most people in the Treasure Valley stick with architectural shingles. They look good, last 20-30 years, and don't break the bank.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Condition of the Roof Deck</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              If your plywood decking is rotten or water-damaged, it needs to be replaced before new shingles go on. Most quotes assume the deck is solid. If it's not, expect to add $50-$100 per sheet of plywood that needs replacing.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              A typical roof might need 5-10 sheets replaced. That's an extra $500-$1,000 you didn't plan for. This is why contractors can't give you a final price until they tear off the old roof and see what's underneath.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Layers of Old Roofing</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Idaho building code allows up to two layers of shingles, but most roofers (and we agree) recommend tearing everything down to the deck for a proper job.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you've got two layers of old shingles, that's double the disposal weight and double the labor to remove. Tear-off and disposal can add $1,000-$3,000 depending on the size of your roof.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Complexity and Obstacles</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A simple ranch-style home with one roof plane is cheaper to re-roof than a two-story with dormers, valleys, skylights, and multiple chimneys. Every penetration, every angle, every transition adds time and materials.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you've got a lot of roof vents, satellite dishes, or solar panels, those all have to be worked around or temporarily removed. It adds up.
            </p>
          </div>
        </div>
      </section>

      {/* Why Estimates Vary - Gray Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Why Boise Roofing Quotes Vary So Much</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You'll call three contractors and get three wildly different prices. It's not random.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Some roofers use cheap materials and cut corners to win on price. Others include extras like upgraded underlayment, better ventilation, or longer warranties. You're not comparing apples to apples unless you dig into what's actually included.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Also, bigger roofing companies have more overhead — trucks, insurance, payroll, marketing. That gets passed to you. Smaller crews can charge less because they've got lower expenses. Neither is inherently better or worse, but it explains the price gap.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Here's what matters: make sure every quote includes tear-off, disposal, new underlayment, drip edge, valley metal, ridge vent, and cleanup. If someone's quote is way lower, find out what they're skipping.
            </p>
          </div>
        </div>
      </section>

      {/* Our Service Section - Dark Blue */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">How We Handle Roof Replacement Pricing</h2>
            </div>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              We're Top Shelf Roof Replacement, and we do one thing: replace roofs in the Treasure Valley. We don't do repairs, we don't do gutters, we don't upsell you on solar panels.
            </p>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              When you call us for a quote, we'll come out to look at your roof, measure it, check the condition, and give you a written estimate that includes everything. No surprises, no upsells. If we find issues with the decking during tear-off, we'll call you before doing extra work.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Free on-site estimates</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Transparent pricing breakdown</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Quality materials included</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Full tear-off and cleanup</span>
              </div>
            </div>

            <p className="text-lg text-white/90 leading-relaxed mt-6">
              Call us at <a href="tel:2085059352" className="text-white font-semibold hover:underline">(208) 505-9352</a> or get a quote online. We'll give you a straight answer.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line on Roof Replacement Costs</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Expect to pay $8,000-$15,000 for a standard Boise roof replacement with asphalt shingles. Bigger homes, premium materials, or complex rooflines will cost more.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Get at least three quotes. Make sure they're comparing the same scope of work. Ask what's included and what's not. If someone's price is way lower, figure out why.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              And if you're in Boise, Meridian, Nampa, Caldwell, or Eagle, give us a call. We'll come look at your roof, give you a real number, and explain exactly what you're paying for.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-600 to-dark-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Roof Replacement Quote in Boise?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We'll come out, measure your roof, and give you a transparent estimate. No pressure, no runaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2085059352"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-dark-blue bg-white rounded-lg hover:bg-gray-100 transition-colors"
              >
                Call (208) 505-9352
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors border-2 border-white/20"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue hover:text-blue-600 font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Read More Roofing Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
