import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tile Roofing Boise | Concrete & Clay Tile Roofs | (208) 505-9352',
  description: 'Professional tile roof installation in Boise. Concrete and clay tile. 50+ year lifespan. Beautiful, durable roofing. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roof-replacement.com/services/roofing-materials/tile-roofing' },
}

export default function TileRoofingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <Link href="/services/roofing-materials" className="inline-flex items-center text-white mb-6 hover:text-[#FFC845] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roofing Materials
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tile Roofing in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Beautiful, long-lasting tile roofs that add character and value to your home.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Why Choose Tile Roofing?</h2>
            <p>Tile roofs offer unmatched beauty and longevity. They're heavy, expensive, and require proper structural support—but they can last 50-100 years and provide a distinctive look you can't get with other materials.</p>

            <p>Tile roofing works best on certain architectural styles, particularly Mediterranean, Spanish, Mission, and Southwestern homes. On the right house, nothing looks better.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Benefits of Tile Roofing</h2>
            <ul>
              <li><strong>Exceptional lifespan</strong> - 50-100+ years depending on material and climate</li>
              <li><strong>Distinctive appearance</strong> - Adds character and curb appeal</li>
              <li><strong>Fire resistant</strong> - Class A fire rating, non-combustible</li>
              <li><strong>Weather resistant</strong> - Handles Idaho's temperature swings well</li>
              <li><strong>Low maintenance</strong> - Tile doesn't rot, warp, or deteriorate</li>
              <li><strong>Energy efficient</strong> - Natural thermal properties keep homes cooler</li>
              <li><strong>Increases home value</strong> - Premium roofing material adds resale value</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Types of Tile Roofing</h2>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Concrete Tile</h3>
            <p>Most common tile roofing in the US. Made from cement and sand, formed into various shapes and colors.</p>

            <p>Benefits of concrete tile:</p>
            <ul>
              <li>More affordable than clay tile</li>
              <li>Wide variety of colors and profiles</li>
              <li>50+ year lifespan</li>
              <li>Can be made to look like clay, slate, or wood shakes</li>
              <li>Excellent durability</li>
            </ul>

            <h3 className="text-2xl font-bold text-dark-blue mb-4 mt-8">Clay Tile</h3>
            <p>Traditional tile roofing material. Beautiful terracotta color that doesn't fade or change over time.</p>

            <p>Benefits of clay tile:</p>
            <ul>
              <li>Authentic appearance</li>
              <li>Natural terracotta color that lasts forever</li>
              <li>100+ year lifespan potential</li>
              <li>Completely natural material</li>
              <li>Premium look and feel</li>
            </ul>

            <p>Clay costs more than concrete but has that authentic look that concrete can't quite match.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Tile Profiles and Styles</h2>
            <p>Tile comes in several different profiles:</p>

            <p><strong>Barrel or Mission Tile</strong> - Traditional curved S-shaped tiles. Classic Spanish and Mediterranean look.</p>

            <p><strong>Flat Tile</strong> - Low-profile tiles that create a sleek, modern appearance. Works on a wider variety of home styles.</p>

            <p><strong>Interlocking Tile</strong> - Tiles that lock together for better weather protection and easier installation.</p>

            <p><strong>French Tile</strong> - Similar to barrel tile but with a different profile. Common in French provincial architecture.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Structural Considerations</h2>
            <p>Tile is heavy—about 900-1,100 pounds per square compared to 250 pounds for asphalt shingles.</p>

            <p>Your home needs proper structural support for tile roofing. We'll assess your roof framing before recommending tile to ensure your home can handle the weight.</p>

            <p>Most homes in Idaho weren't designed for tile roofs, but many can be reinforced if needed. We'll let you know if structural upgrades are necessary.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Tile Roofing in Idaho Climate</h2>
            <p>Tile performs well in Idaho's climate:</p>

            <p><strong>Temperature swings:</strong> Tile is extremely durable and isn't affected by freeze-thaw cycles like some materials.</p>

            <p><strong>Snow loads:</strong> Tile is strong and handles snow weight well. The bigger concern is whether your structure can handle both the tile and the snow.</p>

            <p><strong>Energy efficiency:</strong> Tile's natural thermal properties help regulate attic temperatures, keeping homes cooler in summer.</p>

            <p><strong>Hail:</strong> Individual tiles can crack from large hail, but they're easy to replace without affecting surrounding tiles.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Installation</h2>
            <p>Tile installation is specialized work that requires experience. Tiles must be installed with proper underlayment, battens, and fastening methods.</p>

            <p>We've installed tile roofs on homes throughout the Treasure Valley. We understand proper installation techniques, including:</p>
            <ul>
              <li>Multi-layer underlayment systems</li>
              <li>Proper fastening to prevent wind lift</li>
              <li>Correct ridge and hip cap installation</li>
              <li>Flashing details around penetrations</li>
              <li>Proper venting under tiles</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Cost</h2>
            <p>Tile roofing is expensive—typically 2-4 times the cost of asphalt shingles.</p>

            <p>But consider the total cost over the roof's life. If tile lasts 75 years and asphalt lasts 25, you're buying three asphalt roofs versus one tile roof. The economics work differently than you might expect.</p>

            <p>Tile roofing is an investment in your home's appearance and longevity.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Maintenance</h2>
            <p>Tile roofs require minimal maintenance:</p>
            <ul>
              <li>Replace broken tiles as needed (occasional breakage from falling branches is normal)</li>
              <li>Keep valleys and gutters clear of debris</li>
              <li>Inspect and maintain underlayment (may need replacement before tiles wear out)</li>
              <li>Check flashing periodically</li>
            </ul>

            <p>The tiles themselves can last 50-100 years, but the underlayment typically needs replacement every 30-40 years.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Is Tile Right for Your Home?</h2>
            <p>Tile roofing works best when:</p>
            <ul>
              <li>Your home's architectural style suits tile (Mediterranean, Spanish, Mission, etc.)</li>
              <li>Your structure can support the weight</li>
              <li>You're planning to stay in the home long-term</li>
              <li>You value distinctive appearance and longevity</li>
              <li>Your budget allows for premium roofing</li>
            </ul>

            <p>We'll be honest about whether tile makes sense for your specific situation.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">Serving the Treasure Valley</h2>
            <p>We install tile roofs throughout Boise, Meridian, Nampa, Caldwell, Eagle, and all surrounding areas.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Considering Tile Roofing?</h3>
              <p className="mb-6">Let's discuss whether tile makes sense for your home. We'll assess your structure, show you options, and provide a detailed estimate.</p>
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
