'use client'

const partners = [
  { name: 'Google', slug: 'google' },
  { name: 'Amazon', slug: 'amazon' },
  { name: 'Microsoft', slug: 'microsoft' },
  { name: 'Meta', slug: 'meta' },
  { name: 'Stripe', slug: 'stripe' },
  { name: 'Shopify', slug: 'shopify' },
  { name: 'Salesforce', slug: 'salesforce' },
  { name: 'HubSpot', slug: 'hubspot' },
  { name: 'Figma', slug: 'figma' },
  { name: 'Notion', slug: 'notion' },
]

function MarqueeRow({ items, reverse = false }: { items: typeof partners; reverse?: boolean }) {
  // Double items for seamless loop
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden py-4">
      <div
        className={`flex gap-16 items-center ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ width: 'max-content' }}
      >
        {doubled.map((partner, i) => (
          <div
            key={`${partner.slug}-${i}`}
            className="group flex items-center gap-3 flex-shrink-0 cursor-pointer"
            data-cursor-hover
          >
            {/* SVG logo from simpleicons */}
            <img
              src={`https://cdn.simpleicons.org/${partner.slug}/888888`}
              alt={partner.name}
              width={28}
              height={28}
              className="opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 object-contain"
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = 'none'
              }}
            />
            <span className="text-white/25 font-display font-semibold text-lg tracking-tight group-hover:text-white/70 transition-colors duration-300 whitespace-nowrap">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-dark border-y border-dark-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet/5 to-transparent pointer-events-none" />

      <div className="text-center mb-12 px-6">
        <p className="text-white/30 text-sm tracking-widest uppercase font-medium">
          Trusted by the World's Best Teams
        </p>
      </div>

      {/* First row — forward */}
      <MarqueeRow items={partners} />
      {/* Second row — reverse */}
      <MarqueeRow items={[...partners].reverse()} reverse />

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent pointer-events-none z-10" />
    </section>
  )
}
