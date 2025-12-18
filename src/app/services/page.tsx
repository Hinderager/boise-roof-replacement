import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Replacement Services | Boise Roofing | (208) 505-9352',
  description: 'Complete roof replacement services in Boise. Asphalt shingles, metal, tile, flat roofs. Free estimates. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services' },
}

const services = [
  { 
    name: 'Full Roof Replacement', 
    slug: 'full-roof-replacement', 
    description: 'Complete tear-off and installation of new roofing systems. From asphalt shingles to premium materials.' 
  },
  { 
    name: 'Shingle Replacement', 
    slug: 'shingle-replacement', 
    description: 'Repair missing or damaged shingles. Quick fixes that match your existing roof perfectly.' 
  },
  { 
    name: 'Metal Roof Installation', 
    slug: 'metal-roof-installation', 
    description: 'Long-lasting metal roofing systems. Standing seam, corrugated, and metal shingles.' 
  },
  { 
    name: 'Tile Roof Replacement', 
    slug: 'tile-roof-replacement', 
    description: 'Clay and concrete tile installation and repair. Beautiful, durable, built to last generations.' 
  },
  { 
    name: 'Flat Roof Systems', 
    slug: 'flat-roof-replacement', 
    description: 'TPO, EPDM, and modified bitumen systems for garages, additions, and commercial buildings.' 
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Roof Replacement Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Complete roofing solutions for the Treasure Valley. Whatever type of roof you need, we have got you covered.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">{service.name}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-dark-blue font-semibold">Learn More <ArrowRight className="w-4 h-4 ml-2" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need a New Roof?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
