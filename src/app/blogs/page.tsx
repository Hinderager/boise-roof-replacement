import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Roof Replacement Blog | Expert Tips & Advice | Boise Roof Replacement',
  description: 'Expert tips, guides, and insights about roof replacement in Boise and the Treasure Valley. Learn from experienced roofing professionals.',
  alternates: {
    canonical: 'https://boise-roof-replacement.com/blogs',
  },
}

const blogPosts = [
  {
    slug: 'roof-replacement-cost-boise',
    title: 'How Much Does Roof Replacement Cost in Boise?',
    excerpt: 'Real numbers from actual Treasure Valley roof replacement projects. What affects the price and what you should expect.',
    image: '/generated/roof-replacement-cost.webp',
  },
  {
    slug: 'signs-need-roof-replacement',
    title: 'Signs You Need a New Roof',
    excerpt: 'Your roof is probably warning you before it fails. Here\'s what to watch for in Boise homes.',
    image: '/generated/signs-need-roof-replacement.webp',
  },
  {
    slug: 'choosing-roofing-materials-boise',
    title: 'Choosing Roofing Materials for Boise Homes',
    excerpt: 'What works best for Idaho\'s hot summers, cold winters, and everything in between.',
    image: '/generated/choosing-roofing-materials.webp',
  },
  {
    slug: 'roof-replacement-process',
    title: 'What to Expect During Roof Replacement',
    excerpt: 'A realistic look at what happens when you get a new roof installed in Boise.',
    image: '/generated/roof-replacement-process.webp',
  },
  {
    slug: 'best-time-roof-replacement-boise',
    title: 'Best Time for Roof Replacement in Boise',
    excerpt: 'When should you schedule your roof replacement? Here\'s what works best in Idaho.',
    image: '/generated/best-time-roof-replacement.webp',
  },
]

export default function BlogsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Roofing Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Tips, guides, and insights about roof replacement in the Treasure Valley. Real advice from experienced roofing professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-48 bg-dark-blue">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gunmetal mb-2 hover:text-dark-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-dark-blue font-semibold">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a New Roof?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your roof replacement project in Boise.
          </p>
          <a
            href="tel:2085059352"
            className="inline-block bg-white hover:bg-gray-100 text-dark-blue font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Call (208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
