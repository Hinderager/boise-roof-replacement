import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Layers, CheckCircle, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Choosing Roofing Materials for Boise Homes | Best Roof Types for Idaho Weather',
  description: 'What\'s the best roofing material for Boise\'s climate? Compare asphalt shingles, metal, tile, and more. Learn costs, durability, and what works best in Idaho.',
  alternates: {
    canonical: 'https://boise-roof-replacement.com/blogs/choosing-roofing-materials-boise',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/choosing-roofing-materials.webp"
          alt="Choosing Roofing Materials for Boise Homes"
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
            Choosing Roofing Materials for Boise Homes
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            What works best for Idaho's hot summers, cold winters, and everything in between.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You're replacing your roof, and now you've got to decide what kind of material to put on it. Everyone's got an opinion, and every roofing contractor you talk to pushes a different product.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Here's the thing: Boise's climate is tough on roofs. We get hot, dry summers with intense UV exposure. Cold winters with snow and ice. Wind. Hail. Your roof has to handle all of it and last for decades.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              So let's talk about the actual roofing materials that work well in the Treasure Valley, what they cost, and what you should consider when making your choice.
            </p>
          </div>
        </div>
      </section>

      {/* Asphalt Shingles - Gradient */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">Asphalt Shingles (The Standard Choice)</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              About 80% of homes in Boise have asphalt shingles, and there's a reason for that. They're affordable, they look good, they last 20-30 years, and they handle Idaho weather just fine.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              You've got two main types: 3-tab shingles (the basic flat kind) and architectural shingles (thicker, with more dimension). Most people go with architectural because they look better and last longer. They're only a bit more expensive, but the upgrade is worth it.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Cost</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Architectural asphalt shingles run about $350-$500 per square (100 sq ft) installed. For a typical Boise home, that's $8,000-$12,000 for the whole roof.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Lifespan</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Expect 20-25 years out of standard architectural shingles. Premium designer shingles can push 30 years if they're installed well and maintained.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Best For</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Homeowners who want a good-looking, reliable roof without breaking the bank. Works on any home style, comes in tons of colors, and pretty much every roofer knows how to install them properly.
            </p>
          </div>
        </div>
      </section>

      {/* Metal Roofing - White */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Metal Roofing (The Long-Term Investment)</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Metal roofs are becoming more popular in Boise, especially on modern-style homes and mountain properties. They're expensive upfront, but they last forever and handle snow really well.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              You've got standing seam metal (the clean, modern-looking panels), corrugated metal (more industrial), and metal shingles that mimic the look of traditional roofing. Standing seam is the most popular for residential.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Cost</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Metal roofing is pricey: $700-$1,200 per square installed. That's roughly double what asphalt shingles cost. But you're buying a roof that'll outlive you.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Lifespan</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              50+ years, easily. Some metal roofs can last 70+ years if they're maintained. That's two or three asphalt roof replacements you're avoiding.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Best For</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              People who plan to stay in their home long-term and want to never think about their roof again. Great for snowy areas because snow slides right off. Also energy-efficient because it reflects heat in the summer.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Downsides</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Higher upfront cost. Can be noisy during heavy rain or hail (though proper insulation helps). Not every roofing contractor installs metal, so your options are more limited.
            </p>
          </div>
        </div>
      </section>

      {/* Tile Roofing - Gray */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Tile Roofing (The Premium Option)</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Tile roofs — either concrete or clay — look great and last a really long time. You see them more often on high-end homes in Boise, especially Mediterranean or Spanish-style architecture.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Tile is heavy, though. Your roof structure has to be able to handle the extra weight, and not all homes can. You'll need a structural engineer to verify before you commit to tile.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Cost</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Concrete tile runs $1,000-$1,500 per square. Clay tile is even higher, sometimes $1,500-$1,800 per square. Plus potential structural reinforcement costs if your roof can't handle the weight.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Lifespan</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              50-100 years, depending on the tile type. Concrete tile is the lower end of that range, clay tile can genuinely last a century if maintained.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Best For</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              High-end homes where aesthetics matter and budget isn't the main concern. Tile is fireproof, energy-efficient, and extremely durable. It also holds up well in hail.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Downsides</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Very expensive. Heavy. Brittle, so walking on it can crack tiles. Installation requires specialized experience, so not every roofer does tile work.
            </p>
          </div>
        </div>
      </section>

      {/* Flat/Low Slope Options - Gradient */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Flat Roof or Low-Slope Options</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you've got a flat or low-slope roof — common on modern homes, garages, and additions — you're not using shingles. You're using membrane systems like TPO, EPDM, or modified bitumen.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              TPO (white rubber membrane) is the most popular for residential flat roofs in Boise. It's durable, reflects heat, and handles UV exposure well. EPDM (black rubber) is also common and slightly cheaper, but it absorbs more heat.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Cost</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              TPO and EPDM run about $400-$700 per square installed, depending on the thickness and whether it's mechanically attached or fully adhered.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Lifespan</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              15-25 years for most membrane systems. They can develop leaks over time, especially at seams and penetrations, so regular inspections are important.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Best For</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Flat or low-pitch roofs where traditional shingles don't work. TPO is better if you want energy efficiency (reflects heat). EPDM is fine if the roof isn't highly visible and you're trying to save money.
            </p>
          </div>
        </div>
      </section>

      {/* Service Section - Dark Blue */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">We'll Help You Pick the Right Material</h2>
            </div>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Every material we've talked about has trade-offs. Asphalt is affordable but doesn't last as long. Metal lasts forever but costs more. Tile looks amazing but it's heavy and expensive.
            </p>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              When we come out to quote your roof, we'll walk through your options based on your home, your budget, and what you're trying to accomplish. We work with all of these materials, so we're not pushing one product over another — we just want you to get the right roof for your situation.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Material recommendations based on your home</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Detailed cost breakdowns</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Color and style options</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Honest advice, no upselling</span>
              </div>
            </div>

            <p className="text-lg text-white/90 leading-relaxed mt-6">
              Call us at <a href="tel:2085059352" className="text-white font-semibold hover:underline">(208) 505-9352</a> and we'll come out to look at your roof. We'll explain what'll work best and why.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line - White */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What Most Boise Homeowners Choose</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you want the straight answer: most people in the Treasure Valley go with architectural asphalt shingles. They're affordable, they look good, they last long enough, and they work well in Idaho's climate.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Metal is growing in popularity, especially for people who want a lifetime roof and don't mind the higher upfront cost. Tile is for high-end homes where aesthetics and longevity matter more than budget.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Whatever you choose, make sure it's installed by someone who knows what they're doing. A cheap material installed well will outlast an expensive material installed poorly. Get multiple quotes, ask questions, and don't just go with the lowest bid.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-600 to-dark-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Discuss Your Roofing Options?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We'll help you choose the right material for your home and budget. No pressure, just honest advice.
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
