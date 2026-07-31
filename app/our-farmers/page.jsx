"use client"

import { Factory, HandCoins, Leaf, MapPin, ShieldCheck, Sparkles, Sprout, Truck } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import SiteNav from '../../src/components/SiteNav'

const storyModes = [
  {
    label: 'Farmer Pay',
    Icon: HandCoins,
    title: 'Farmers Get Paid Fairly, On Time.',
    line: 'Predictable pricing means less risk for families and better planning for the next season.',
    points: ['Lower debt pressure', 'More household stability', 'Long-term partnership'],
    stat: '90 active partner regions',
  },
  {
    label: 'Food Quality',
    Icon: ShieldCheck,
    title: 'Every Batch Is Verified For Quality.',
    line: 'From fortification to packing, the process is controlled so families can trust what they eat.',
    points: ['Safer daily nutrition', 'Consistent product quality', 'No shortcut production'],
    stat: 'Quality checks at each stage',
  },
  {
    label: 'Local Growth',
    Icon: Sprout,
    title: 'Local Agriculture Stays Local.',
    line: 'Sourcing close to home helps communities keep value in their own food systems.',
    points: ['Local market strength', 'Fewer import dependencies', 'More community jobs'],
    stat: 'Crops sourced across West Africa',
  },
  {
    label: 'Distribution',
    Icon: Truck,
    title: 'Nutrition Reaches Real Households.',
    line: 'Products move through trusted local channels so support arrives where it is needed most.',
    points: ['Community-based delivery', 'Faster access to nutrition', 'Built for daily use'],
    stat: '10K+ families reached',
  },
]

const visualIngredients = [
  {
    name: 'Tuwo Rice',
    src: '/imgs/seeds/rice.png',
    benefit: 'Gentle carbs for steady energy.',
    orbitClass: 'orbit-item-1',
  },
  {
    name: 'Maize',
    src: '/imgs/seeds/corn.png',
    benefit: 'Naturally rich in fiber and B vitamins.',
    orbitClass: 'orbit-item-2',
  },
  {
    name: 'Millet',
    src: '/imgs/seeds/millet_fr.png',
    benefit: 'Mineral-dense grain for daily strength.',
    orbitClass: 'orbit-item-3',
  },
  {
    name: 'Guinea Corn',
    src: '/imgs/seeds/guineacorns_fr.png',
    benefit: 'Helps support digestion and fullness.',
    orbitClass: 'orbit-item-4',
  },
  {
    name: 'Soyabean',
    src: '/imgs/seeds/soya_beans.png',
    benefit: 'Plant protein for growth and recovery.',
    orbitClass: 'orbit-item-5',
  },
]

export default function OurFarmersPage() {
  const [activeMode, setActiveMode] = useState(0)
  const [familiesReached, setFamiliesReached] = useState(1000)
  const [partnerRegions, setPartnerRegions] = useState(1)
  const statsRef = useRef(null)
  const ActiveModeIcon = storyModes[activeMode].Icon

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-title-reveal], [data-card-reveal]')
    if (!nodes.length) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          currentObserver.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const statsNode = statsRef.current
    if (!statsNode) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setFamiliesReached(10000)
      setPartnerRegions(90)
      return
    }

    let rafId = null
    let hasAnimated = false

    const animateStats = () => {
      const startTime = performance.now()
      const duration = 1800
      const startFamilies = 1000
      const targetFamilies = 10000
      const startRegions = 1
      const targetRegions = 90

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)

        setFamiliesReached(Math.round(startFamilies + (targetFamilies - startFamilies) * eased))
        setPartnerRegions(Math.round(startRegions + (targetRegions - startRegions) * eased))

        if (progress < 1) {
          rafId = requestAnimationFrame(tick)
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasAnimated) return
          hasAnimated = true
          animateStats()
          currentObserver.unobserve(entry.target)
        })
      },
      {
        threshold: 0.4,
      }
    )

    observer.observe(statsNode)

    return () => {
      observer.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-neutral-950">
      <div className="relative h-28 bg-[#f5f0e8]">
        <SiteNav theme="light" />
      </div>

      <main className="pb-20">
        <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8">
          <div className="grid gap-0 overflow-hidden rounded-md border border-neutral-200 md:grid-cols-[1.05fr_0.95fr]">
            <div className="relative bg-[#f5f0e8] px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
              <div className="absolute -left-20 top-10 h-40 w-40 rounded-full border border-[#7fbc83]/30" />
              <p data-title-reveal className="title-reveal display-face relative z-10 text-xs tracking-[0.2em] text-[#4c8c51]">
                Growers First
              </p>
              <h1 data-title-reveal className="title-reveal display-face relative z-10 mt-4 max-w-3xl text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">
                Our Farmers Are The Engine Behind Every Spoon.
              </h1>
              <p data-card-reveal className="card-reveal relative z-10 mt-6 max-w-xl text-base leading-8 text-neutral-700 sm:text-lg sm:leading-9">
                Local growers. Better nutrition. Real impact.
              </p>

              <div ref={statsRef} className="mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
                <div data-card-reveal className="card-reveal group border-2 border-neutral-200 bg-[#f5f0e8] p-6 transition hover:-translate-y-1 hover:border-[#7fbc83]">
                  <Leaf className="h-6 w-6 text-[#4c8c51] transition group-hover:rotate-6" />
                  <p className="display-face mt-2 text-5xl text-[#1f5a2e]">{`${Math.round(familiesReached / 1000)}K`}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.15em] text-neutral-600">Families Reached</p>
                </div>
                <div data-card-reveal className="card-reveal group border-2 border-neutral-200 bg-[#f5f0e8] p-6 transition hover:-translate-y-1 hover:border-[#7fbc83]" style={{ transitionDelay: '120ms' }}>
                  <Sparkles className="h-6 w-6 text-[#4c8c51] transition group-hover:scale-110" />
                  <p className="display-face mt-2 text-5xl text-neutral-900">{partnerRegions}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.15em] text-neutral-600">Partner Regions</p>
                </div>
              </div>
            </div>

            <div className="relative min-h-96">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "linear-gradient(140deg,rgba(8,14,10,0.36),rgba(8,14,10,0.12)),url('/imgs/cornfield.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
              <p className="display-face absolute bottom-6 left-6 text-5xl text-white sm:text-6xl">Our Farmers</p>
              <p className="absolute bottom-6 right-6 text-sm uppercase tracking-[0.18em] text-white/80">Kaduna, Nigeria</p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-6 lg:px-8">
          <div className="grid gap-8 rounded-md border-2 border-neutral-200 bg-[#f5f0e8] p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p data-title-reveal className="title-reveal display-face text-xs tracking-[0.2em] text-[#4c8c51]">Choose Your Lens</p>
              <h2 data-title-reveal className="title-reveal display-face mt-3 text-4xl leading-[0.92] sm:text-6xl">
                What Matters Most To You?
              </h2>
              <p data-card-reveal className="card-reveal mt-4 max-w-md text-base leading-8 text-neutral-700 sm:text-lg">
                Hover or tap a topic to preview real-world impact.
              </p>

              <div className="mt-8 grid gap-3">
                {storyModes.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveMode(index)}
                    onMouseEnter={() => setActiveMode(index)}
                    className={`flex w-full items-center justify-between border-2 px-5 py-4 text-left transition ${activeMode === index ? 'border-[#4c8c51] bg-[#eaf6eb]' : 'border-neutral-300 bg-[#f5f0e8] hover:border-[#7fbc83]'}`}
                  >
                    <span className="inline-flex items-center gap-3">
                      <item.Icon className={`h-6 w-6 ${activeMode === index ? 'text-[#1f5a2e]' : 'text-neutral-600'}`} />
                      <span className="display-face text-base tracking-[0.08em] text-neutral-900">{item.label}</span>
                    </span>
                    <span className="text-sm uppercase tracking-[0.14em] text-neutral-500">view</span>
                  </button>
                ))}
              </div>
            </div>

            <article data-card-reveal className="card-reveal relative overflow-hidden border-2 border-[#d5e8d7] bg-[#f5f0e8] p-7 sm:p-10">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[#7fbc83]/30" />
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="display-face text-sm tracking-[0.2em] text-[#4c8c51]">{storyModes[activeMode].label}</p>
                  <h3 className="display-face mt-2 max-w-xl text-4xl leading-[0.92] text-neutral-950 sm:text-5xl">
                    {storyModes[activeMode].title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-neutral-700 sm:text-lg sm:leading-9">
                    {storyModes[activeMode].line}
                  </p>
                </div>
                <ActiveModeIcon className="h-10 w-10 shrink-0 text-[#4c8c51]" />
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {storyModes[activeMode].points.map((point) => (
                  <div key={point} className="border-2 border-neutral-200 bg-[#f5f0e8] px-4 py-4 text-base text-neutral-700">
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-[#7fbc83]/40 bg-[#f0f9f1] px-5 py-2.5">
                <Factory className="h-5 w-5 text-[#2e6a3d]" />
                <span className="text-sm uppercase tracking-[0.14em] text-[#2e6a3d]">{storyModes[activeMode].stat}</span>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-[#152b18]">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
            <div className="grid gap-16 md:grid-cols-2 md:items-center">
              <div>
                <p data-title-reveal className="title-reveal display-face text-xs tracking-[0.28em] text-[#7fbc83]">From The Field</p>
                <h2 data-title-reveal className="title-reveal display-face mt-4 text-5xl leading-[0.92] text-white sm:text-6xl">
                  Built With Farmers, Not Just From Farmers.
                </h2>
                <p data-card-reveal className="card-reveal mt-6 text-lg leading-9 text-white/70">
                  Farmers lead. We support.
                </p>
                <div className="mt-10 flex flex-col gap-6">
                  <div data-card-reveal className="card-reveal border-l-2 border-[#7fbc83] pl-5">
                    <p className="display-face inline-flex items-center gap-2 text-sm text-white">
                      <MapPin className="h-4 w-4 text-[#a9dcae]" />
                      Local Sourcing
                    </p>
                    <p className="mt-1 text-sm text-white/55">90 regions, one trusted network.</p>
                  </div>
                  <div data-card-reveal className="card-reveal border-l-2 border-[#7fbc83]/40 pl-5">
                    <p className="display-face inline-flex items-center gap-2 text-sm text-white">
                      <ShieldCheck className="h-4 w-4 text-[#a9dcae]" />
                      Controlled Fortification
                    </p>
                    <p className="mt-1 text-sm text-white/55">No shortcuts. No compromise.</p>
                  </div>
                  <div data-card-reveal className="card-reveal border-l-2 border-[#7fbc83]/40 pl-5">
                    <p className="display-face inline-flex items-center gap-2 text-sm text-white">
                      <Truck className="h-4 w-4 text-[#a9dcae]" />
                      Community Distribution
                    </p>
                    <p className="mt-1 text-sm text-white/55">Direct to families, through local channels.</p>
                  </div>
                </div>
              </div>

              <div
                className="min-h-96 border border-white/15 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(140deg,rgba(0,0,0,0.28),rgba(0,0,0,0.06)),url('/imgs/Nutri-Win_Factory_Abuja(1).jpg')",
                }}
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-6 lg:px-8">
          <div className="ingredient-showcase grid gap-8 overflow-hidden rounded-md border-2 border-[#d5e8d7] p-6 sm:p-10 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="ingredient-copy-panel rounded-md border border-[#d7ead9] p-5 sm:p-6">
              <p data-title-reveal className="title-reveal display-face text-xs tracking-[0.2em] text-[#4c8c51]">Simple Ingredients</p>
              <h2 data-title-reveal className="title-reveal display-face mt-3 text-4xl leading-[0.92] text-neutral-950 sm:text-6xl">
                Five Grains. Nothing Extra.
              </h2>
              <p data-card-reveal className="card-reveal mt-4 max-w-md text-base leading-8 text-neutral-700 sm:text-lg">
                Tuwo rice, maize, millet, guinea corn, and soyabean.
              </p>
            </div>

            <div data-card-reveal className="card-reveal ingredient-visual relative min-h-120 overflow-hidden sm:min-h-128">
              <div className="ingredient-speedlines" aria-hidden="true" />
              <div className="ingredient-aura ingredient-aura-1" aria-hidden="true" />
              <div className="ingredient-aura ingredient-aura-2" aria-hidden="true" />

              <div className="ingredient-center" aria-hidden="true">
                <img
                  src="/imgs/product_png.png"
                  alt="Nutri-Win product"
                  className="ingredient-product"
                />
              </div>

              {visualIngredients.map((item, index) => (
                <div
                  key={item.name}
                  data-card-reveal
                  className={`orbit-item ${item.orbitClass}`}
                  style={{ transitionDelay: `${index * 120 + 120}ms` }}
                >
                  <img src={item.src} alt={item.name} className="orbit-seed" />
                  <div className="orbit-tooltip" role="note">
                    <p className="display-face text-[11px] tracking-[0.14em] text-[#265f33]">{item.name}</p>
                    <p className="mt-1 text-xs leading-5 text-neutral-700">{item.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
