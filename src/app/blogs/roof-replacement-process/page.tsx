import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClipboardList, CheckCircle, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What to Expect During Roof Replacement | Boise Roof Installation Process',
  description: 'Planning a roof replacement in Boise? Learn exactly what happens from tear-off to final inspection. Timeline, noise, mess, and what you need to prepare.',
  alternates: {
    canonical: 'https://boise-roof-replacement.com/blogs/roof-replacement-process',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/roof-replacement-process.webp"
          alt="What to Expect During Roof Replacement in Boise"
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
            What to Expect During Roof Replacement
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            A realistic look at what happens when you get a new roof installed in Boise.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've signed the contract, picked your shingles, and scheduled the work. Now you're wondering what actually happens when the roofing crew shows up.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Roof replacement is loud, messy, and disruptive. There's no way around that. But if you know what to expect, it's a lot less stressful.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              So let's walk through the entire roof replacement process from start to finish — what happens each day, how long it takes, and what you need to do to prepare.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline - Gradient */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">How Long Does Roof Replacement Take?</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Most residential roof replacements in Boise take 1-3 days, depending on the size and complexity of your roof.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A simple single-story ranch with a basic roofline? That might be done in a day. A two-story house with multiple roof planes, dormers, and skylights? Probably 2-3 days.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Weather can push things back. If it's raining or snowing, work stops. Nobody installs a roof in bad weather because you can't waterproof it properly. So if the forecast looks sketchy, expect delays.
            </p>
          </div>
        </div>
      </section>

      {/* Before Work Starts - White */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Before the Crew Arrives</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your roofing contractor should walk you through what to expect, but here's what you'll need to do before work starts:
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Move Your Cars</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The crew needs space for their trucks, dumpster, and material delivery. Park your cars on the street or at a neighbor's house for the duration of the job.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Clear the Area Around Your House</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Move patio furniture, grills, plants, and anything else near the house. The crew will be dropping old shingles and debris, and you don't want anything getting damaged.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Protect Stuff in Your Garage and Attic</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Roof tear-off is violent. The pounding will shake your whole house. If you've got stuff hanging on walls or stacked precariously in the garage or attic, secure it or move it. Dust will get everywhere too, so cover anything you don't want dirty.
            </p>

            <h3 className="text-2xl font-semibold text-gunmetal mt-8 mb-4">Plan for Noise</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              This job is LOUD. Tearing off old shingles, hammering, nail guns — it's constant noise from 7 or 8 AM until late afternoon. If you work from home, plan to be somewhere else. If you've got pets, keep them inside or away from the house so they don't freak out.
            </p>
          </div>
        </div>
      </section>

      {/* Day 1 - Gray */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Day 1: Tear-Off and Prep</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The crew usually shows up early — 7 or 8 AM — and gets to work immediately. First thing they'll do is set up tarps and protective barriers to catch debris.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Then comes the tear-off. They'll rip up all the old shingles, underlayment, and flashing down to the roof deck. This is the loudest, messiest part of the job. Expect constant banging and the sound of debris sliding off the roof into the dumpster.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Once everything's torn off, they'll inspect the roof deck for damage. If there are any rotten or water-damaged boards, they'll replace them. Most contracts assume the deck is solid, so if they find issues, they'll call you before doing extra work (and charging you for it).
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              By the end of Day 1, your old roof is gone and your house is covered with tarps for the night. If the weather's good and the crew moves fast, they might start laying new underlayment before they leave.
            </p>
          </div>
        </div>
      </section>

      {/* Day 2 - Gradient */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Day 2: Installation</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Day 2 is when your new roof goes on. The crew will start by laying underlayment (the waterproof barrier that goes under the shingles), installing drip edge, and flashing all the valleys and penetrations.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Then they'll start installing shingles, working from the bottom up. You'll hear constant nail gunning — hundreds and hundreds of nails going in. It's still loud, but not as violent as the tear-off.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              They'll work around vents, chimneys, skylights, and any other roof penetrations, making sure everything's flashed and sealed properly. This takes time, especially if your roof is complex.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              By the end of Day 2, most roofs are fully shingled. If your roof is on the larger or more complicated side, they might need a third day to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Final Day - White */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Final Day: Ridge Caps and Cleanup</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The last step is installing the ridge cap shingles along the peak of the roof and finishing any final details. They'll also install ridge vents if your roof is getting new ventilation.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Then comes cleanup. A good roofing crew will pick up every nail, scrap, and piece of debris from your yard. They'll run magnets over the grass to catch stray nails (because nothing ruins your day like a nail in your car tire).
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Before they leave, the crew lead should walk you around the house and show you the finished work. This is your chance to point out anything that doesn't look right or ask questions.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Once you're satisfied, they'll haul away the dumpster and you're done. You've got a new roof.
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
              <h2 className="text-3xl font-bold">How We Handle Roof Replacement Projects</h2>
            </div>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              We do roof replacements all over the Treasure Valley, and we've got the process down. You'll know exactly when we're showing up, how long the job will take, and what to expect each day.
            </p>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              We protect your property, clean up thoroughly, and don't leave until you're happy with the work. If we run into issues (damaged decking, unexpected structural problems), we'll call you immediately and explain what needs to be fixed before moving forward.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Clear timeline and communication</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Professional, experienced crews</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Thorough cleanup and inspection</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <span className="text-white/90">Quality materials and workmanship</span>
              </div>
            </div>

            <p className="text-lg text-white/90 leading-relaxed mt-6">
              Call us at <a href="tel:2085059352" className="text-white font-semibold hover:underline">(208) 505-9352</a> to schedule your roof replacement in Boise.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line - Gray */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Roof replacement isn't fun, but it's not that bad if you're prepared. Expect 1-3 days of noise, mess, and disruption. Move your cars, protect your stuff, and plan to be somewhere else during the day if possible.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A good roofing contractor will keep you updated, protect your property, and clean up thoroughly when they're done. If they don't, find someone else.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              And once it's done, you've got a new roof that'll last 20-30 years (or more, depending on the material). That's worth a few days of inconvenience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-600 to-dark-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Replace Your Roof in Boise?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We'll walk you through the entire process and make it as smooth as possible. Get a free estimate today.
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
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-white">
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
