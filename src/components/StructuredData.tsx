const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

const faqData = [
  { question: 'How much does roof replacement cost in Boise?', answer: 'Most residential roof replacements in Boise cost between $8,000-$25,000 depending on size, materials, and complexity. We provide free estimates with no obligation.' },
  { question: 'How long does a roof replacement take?', answer: 'Most residential roof replacements take 1-3 days. Larger homes or commercial buildings may take longer. We provide a timeline before starting.' },
  { question: 'What roofing materials do you install?', answer: 'We install asphalt shingles, metal roofing, tile, and flat roofing systems. We\'ll help you choose the best option for your home and budget.' },
  { question: 'Do you help with insurance claims?', answer: 'Yes! We work with insurance companies regularly for storm damage claims. We document everything and help ensure you get fair coverage.' },
  { question: 'What areas do you serve?', answer: 'We serve Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities.' },
  { question: 'What warranty do you offer?', answer: 'We provide workmanship warranty on all installations plus manufacturer warranties on materials (25-50 years for shingles, longer for metal).' },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": `Boise Roof Replacement Pros - ${city}`,
    "description": `Professional roof replacement services in ${city}, Idaho. Residential and commercial roofing, asphalt shingles, metal roofing. Licensed and insured. Free estimates.`,
    "url": "https://boise-roof-replacement.com",
    "telephone": "+1-208-505-9352",
    "email": "info@boise-roof-replacement.com",
    "address": { "@type": "PostalAddress", "addressLocality": city, "addressRegion": "ID", "addressCountry": "US" },
    "geo": { "@type": "GeoCoordinates", "latitude": coords.lat, "longitude": coords.lng },
    "areaServed": [
      { "@type": "City", "name": "Boise", "addressRegion": "ID" },
      { "@type": "City", "name": "Meridian", "addressRegion": "ID" },
      { "@type": "City", "name": "Nampa", "addressRegion": "ID" },
      { "@type": "City", "name": "Caldwell", "addressRegion": "ID" },
      { "@type": "City", "name": "Eagle", "addressRegion": "ID" }
    ],
    "serviceType": ["Roof Replacement", "Residential Roofing", "Commercial Roofing", "Asphalt Shingle Installation", "Metal Roof Installation", "Storm Damage Repair", "Roof Inspection"],
    "priceRange": "$$",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "07:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "08:00", "closes": "14:00" }
    ],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "150" }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roof Replacement",
    "provider": { "@type": "RoofingContractor", "name": "Boise Roof Replacement Pros" },
    "areaServed": { "@type": "State", "name": "Idaho" },
    "description": `Professional roof replacement services in ${city} and the Treasure Valley. Residential and commercial roofing, premium materials, and expert installation.`
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
