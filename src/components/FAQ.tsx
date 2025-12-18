'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const faqs = [
  { question: 'How much does a roof replacement cost?', answer: 'Most residential roof replacements in Boise run between $8,000-$25,000 depending on size, materials, and complexity. We provide free detailed estimates with no obligation. Financing options are available.' },
  { question: 'How long does a roof replacement take?', answer: 'Most residential roofs take 1-3 days to complete. Larger homes or commercial properties may take longer. We\'ll give you a timeline before starting and keep you updated throughout the project.' },
  { question: 'What roofing materials do you recommend?', answer: 'For most Boise homes, architectural asphalt shingles offer the best value—they\'re durable, look great, and handle our weather well. Metal roofing is excellent for longevity. We\'ll discuss options based on your budget and goals.' },
  { question: 'Do you help with insurance claims?', answer: 'Yes. We work with insurance companies regularly for storm damage claims. We document everything, meet with adjusters, and help ensure you get fair coverage for your roof replacement.' },
  { question: 'How do I know if I need a new roof?', answer: 'Common signs include missing or curling shingles, granules in gutters, daylight through roof boards, or a roof over 20 years old. We offer free inspections and will give you an honest assessment.' },
  { question: 'What warranty do you offer?', answer: 'We provide a workmanship warranty on all installations plus manufacturer warranties on materials (typically 25-50 years for shingles, longer for metal). We\'ll explain all coverage before starting.' },
  { question: 'Do you offer financing?', answer: 'Yes, we offer flexible financing options to fit your budget. Get your new roof installed now and pay over time with approved credit. Ask about current promotions and payment plans.' },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const toggleFAQ = (index: number) => setActiveIndex(activeIndex === index ? null : index)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-dark-blue">Frequently Asked Questions</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 last:border-b-0">
              <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50">
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">{faq.question}</span>
                <ChevronDown className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden"><div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">{faq.answer}</div></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352"><span className="md:hidden">Call Now</span><span className="hidden md:inline">(208) 505-9352</span></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
