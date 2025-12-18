import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, CheckCircle, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Signs You Need a New Roof in Boise Idaho | When to Replace Your Roof',
  description: 'Is your Boise roof showing warning signs? Learn the clear indicators that it\'s time for roof replacement, from curling shingles to water damage. Get expert advice.',
  alternates: {
    canonical: 'https://boise-roof-replacement.com/blogs/signs-need-roof-replacement',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/signs-need-roof-replacement.webp"
          alt="Signs You Need a New Roof in Boise Idaho"
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
            Signs You Need a New Roof
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Your roof is probably warning you before it fails. Here's what to watch for.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Most roofs don't just suddenly fail. They give you warnings — sometimes for months or even years before they actually start leaking.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The problem is, most homeowners in Boise don't know what they're looking at. A few missing shingles? Maybe it's fine. Some dark stains on the ceiling? Could be nothing. Until it's not nothing, and you're dealing with water damage and expensive repairs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              So let's talk about the actual signs that your roof needs to be replaced. Not "might need attention eventually" — we're talking about the clear indicators that you're on borrowed time.
            </p>
          </div>
        </div>
      </section>

      {/* Age Section - Gradient */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">Your Roof Is Getting Old</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This one's simple. Most asphalt shingle roofs in Boise last 20-25 years if they were installed properly. Some premium shingles might make it to 30. But once you're past 20 years, you're living on borrowed time.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              If you don't know how old your roof is, check your records. Look at when you bought the house. Ask your neighbors if they remember when it was done. Or call a roofing contractor to come take a look — they can usually tell you pretty quickly based on the shingle type and condition.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Age alone doesn't mean you need a new roof tomorrow. But if your roof is 20+ years old <em>and</em> you're seeing any of the other signs on this list, it's time to start planning.
            </p>
          </div>
        </div>
      </section>

      {/* Curling Shingles - White */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Shingles Are Curling or Buckling</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Walk outside and look at your roof. Are the edges of the shingles starting to curl upward? Are any of them buckling or warping in the middle?
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This happens when shingles lose their protective granules and start breaking down from sun exposure and weather. Once they start curling, they're not keeping water out anymore. Wind can get under them, rain can blow underneath, and you're setting yourself up for leaks.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              If you're seeing widespread curling across your roof — not just a couple random shingles — that's a clear sign it's time for a replacement. You can't repair your way out of this one.
            </p>
          </div>
        </div>
      </section>

      {/* Missing Granules - Gray */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">You're Losing Granules (Check Your Gutters)</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Here's an easy test: go look in your gutters after a rainstorm. If you're seeing a bunch of dark, sandy granules collected in there, your shingles are breaking down.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Those granules protect the asphalt underneath from UV rays and weather. When they start coming off, the shingles deteriorate fast. A little bit of granule loss is normal early in a roof's life, but if you're seeing heavy amounts — especially if your roof is more than 15 years old — that's a red flag.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Also, if you're seeing bald spots on your shingles where the granules are completely gone, that's another clear indicator. The underlying asphalt is now exposed and it won't last long.
            </p>
          </div>
        </div>
      </section>

      {/* Missing Shingles - Gradient */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Shingles Are Missing or Damaged</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Did you notice a few shingles in your yard after that last windstorm? That's not great, but it happens. A roofer can replace a few individual shingles pretty easily.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              But if you're consistently losing shingles, or if you're seeing cracked and broken shingles all over your roof, that's a different story. It means your roof is brittle and failing, and patching it is just buying time.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Here's the reality: if you're calling a roofer every year to replace shingles, you're spending more money on repairs than you should. At some point, it makes more sense to just replace the whole thing and stop the constant maintenance cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Water Damage - White */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">You're Seeing Water Damage Inside</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you've got water stains on your ceiling or walls, your roof is already leaking. That's not a "maybe" — that's a confirmed problem.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Sometimes a leak can be traced to a specific damaged area and fixed with a repair. But if the leak is widespread, or if you're seeing multiple leak spots in different areas, your roof's waterproofing is compromised across the board.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Also, go up in your attic (if you have one) and look around with a flashlight. Are you seeing daylight through the roof boards? Dark stains or mold on the wood? Wet insulation? All of those are signs that water is getting through and your roof needs to be replaced.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Don't wait on this one. Water damage gets worse fast, and it's expensive to fix once it spreads to your walls, insulation, and structure.
            </p>
          </div>
        </div>
      </section>

      {/* Sagging Roof - Gray */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Your Roof Is Sagging</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you look at your roofline and it's not straight — if there are dips, sags, or drooping areas — that's a serious structural issue.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A sagging roof usually means the decking underneath has been damaged by moisture and is rotting. It can also mean there's a problem with the roof structure itself. Either way, this is not something you ignore.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              If your roof is sagging, call a roofing contractor ASAP. This is beyond a simple repair — you're likely looking at a full replacement along with decking and possibly structural work.
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
              <h2 className="text-3xl font-bold">We'll Tell You What Your Roof Needs</h2>
            </div>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Look, we replace roofs for a living. But we're not going to tell you that you need a new roof if you don't.
            </p>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              If you're seeing any of the signs above and you're not sure what to do, call us at <a href="tel:2085059352" className="text-white font-semibold hover:underline">(208) 505-9352</a>. We'll come out, inspect your roof, and give you an honest assessment. If it needs to be replaced, we'll explain why and give you a quote. If it can be repaired, we'll tell you that too.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Free roof inspections</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Honest recommendations</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Transparent pricing</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Quality work guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line - White */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Don't Wait Until It's Leaking</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Here's the thing about roofs: the longer you wait, the more expensive it gets. A leaking roof doesn't just damage shingles — it damages the decking, insulation, drywall, and structure underneath.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              If you're seeing curling shingles, missing granules, or any of the other warning signs we've talked about, get it inspected. The sooner you address it, the less damage you're dealing with and the less it's going to cost.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              And if you're in Boise, Meridian, Nampa, Caldwell, or anywhere in the Treasure Valley, we'll come take a look for free. No pressure, no sales pitch — just a straight answer about what your roof needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-600 to-dark-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not Sure If Your Roof Needs Replacing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We'll inspect it for free and give you an honest answer. No obligation, no pressure.
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
                Request Inspection
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
