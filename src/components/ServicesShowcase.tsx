import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  { title: 'Full Roof Replacement', description: 'When your roof is past its prime, patching it up will not cut it anymore. We tear off the old materials and install a completely new system that protects your home for decades. From asphalt shingles to metal, we handle every step and clean up like we were never there.', image: '/generated/full-roof-replacement.webp', link: '/services/full-roof-replacement', buttonText: 'Learn More' },
  { title: 'Shingle Replacement', description: 'Missing shingles after a windstorm? Damaged spots from hail? You do not always need a whole new roof. We match your existing shingles and replace just what needs fixing. Quick work, no mess, and your roof looks good as new.', image: '/generated/shingle-replacement.webp', link: '/services/shingle-replacement', buttonText: 'Learn More' },
  { title: 'Metal Roof Installation', description: 'Metal roofs last 50+ years and handle Idaho weather like champs. They are energy-efficient, fire-resistant, and honestly just look sharp. We install standing seam, corrugated, and metal shingle systems. If you want a roof that outlasts everything else on your house, this is it.', image: '/generated/metal-roof-installation.webp', link: '/services/metal-roof-installation', buttonText: 'Learn More' },
  { title: 'Tile Roof Replacement', description: 'Tile roofs are tough, beautiful, and built to last but when they crack or slip, you need someone who knows what they are doing. We work with clay and concrete tiles, matching styles perfectly. These roofs add serious curb appeal and hold up against Boise summers without breaking a sweat.', image: '/generated/tile-roof-replacement.webp', link: '/services/tile-roof-replacement', buttonText: 'Learn More' },
  { title: 'Flat Roof Systems', description: 'Flat roofs need different materials and techniques than pitched roofs. We install TPO, EPDM, and modified bitumen systems that handle ponding water and UV exposure. Whether it is your garage, addition, or commercial building, we keep it watertight and worry-free.', image: '/generated/flat-roof-replacement.webp', link: '/services/flat-roof-replacement', buttonText: 'Learn More' },
]

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-blue mb-4 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>Roof Replacement Services in Boise</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">From Boise to Nampa, Meridian to Caldwell, we replace roofs that protect Treasure Valley homes and businesses from Idaho weather.</p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] lg:hidden w-full">{service.title}</h3>
              <div className={`relative w-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/3]">
                  <Image src={service.image} alt={service.title} fill loading={index === 0 ? "eager" : "lazy"} className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" quality={85} />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h3 className="hidden lg:block text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">{service.description}</p>
                <Link href={service.link} className="inline-block bg-[#FFC845] hover:bg-[#e5b13d] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide">{service.buttonText}</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 justify-center mt-16">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352"><span className="md:hidden">Call Now</span><span className="hidden md:inline">(208) 505-9352</span></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
