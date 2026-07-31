"use client"

import Image from 'next/image'
import { useEffect } from 'react'
import { BadgeDollarSign, Heart, Sprout, UsersRound, UtensilsCrossed } from 'lucide-react'
import SiteNav from '../../src/components/SiteNav'

const reasons = [
  {
    title: 'Fights Malnutrition At The Root',
    description:
      'Nutri-Win is designed to respond to severe deficiencies like Kwashiorkor with a practical balance of protein, energy, and essential micronutrients.',
    Icon: UtensilsCrossed,
  },
  {
    title: 'Locally Sourced Nutrition',
    description:
      'We use familiar grains and legumes sourced close to home, making nutrient-dense nutrition easier to trust, adopt, and sustain.',
    Icon: Sprout,
  },
  {
    title: 'Supports Local Communities',
    description:
      'By leaning on local agriculture, Nutri-Win helps strengthen regional food systems, support farmers, and reduce reliance on imported foods.',
    Icon: UsersRound,
  },
  {
    title: 'Proven Real Impact',
    description:
      'Created by Henrietta Okechukwu and inspired by Ephraem Okechukwu’s transformation, Nutri-Win shows how accessible nutrition can change lives.',
    Icon: Heart,
  },
  {
    title: 'Fair Wages, Fair Dignity',
    description:
      'In many agricultural systems across Africa, farmers are underpaid or paid late. Nutri-Win commits to fair pricing, reliable payments, and long-term relationships that respect farmers and their work.',
    Icon: BadgeDollarSign,
  },
]

export default function OurMissionPage() {
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
        threshold: 0.22,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-neutral-950">
      <div className="relative h-28 bg-[#f5f0e8]">
        <SiteNav theme="light" />
      </div>
      <main>
        <section className="w-full min-h-screen">
          <div className="relative min-h-screen w-full overflow-hidden rounded-none bg-[#163422] text-white shadow-[0_20px_48px_rgba(12,12,12,0.24)]">
            <div className="grid min-h-screen lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative z-10 flex flex-col justify-center px-7 py-10 sm:px-12 sm:py-16 lg:px-16 lg:py-18">
                <p data-title-reveal className="title-reveal display-face text-xs tracking-[0.2em] text-[#bdeec2]">
                  Our Mission
                </p>
                <h1
                  data-title-reveal
                  className="title-reveal display-face mt-4 max-w-4xl text-4xl leading-[0.95] sm:text-6xl lg:text-7xl"
                >
                  We&apos;re On A Mission: Help Communities Win With Simple, Local, And Powerful Nutrition.
                </h1>
                <p data-card-reveal className="card-reveal mt-7 max-w-3xl text-base leading-8 text-[#d2e9d5] sm:text-lg sm:leading-9">
                  NUTRI-WIN brings together accessible ingredients, local supply chains, and measurable outcomes. Our model is built to improve nutrition where it matters most while creating opportunity across farming and distribution networks.
                </p>
              </div>

              <div className="relative min-h-115 lg:min-h-full">
                <Image
                  src="/imgs/Nutri-Win_Mission.jpg"
                  alt="Nutri-Win mission team"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  quality={95}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex min-h-screen w-full items-center bg-[#f5f0e8] py-14">
          <div className="mx-auto w-full px-6 md:px-10 lg:px-14">
            <h2 data-title-reveal className="title-reveal display-face text-center text-5xl italic text-[#1f4d2f] sm:text-6xl">
              So, Why Nutri-Win?
            </h2>
            <div className="mt-14 grid gap-10 sm:grid-cols-2 xl:grid-cols-5">
              {reasons.map(({ title, description, Icon }) => (
                <article
                  key={title}
                  data-card-reveal
                  className="card-reveal flex flex-col items-center px-5 py-6 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#89b594] text-[#1f4d2f]">
                    <Icon className="h-9 w-9 stroke-[1.8]" />
                  </div>
                  <h3 className="display-face mt-6 text-2xl leading-tight text-[#1f4d2f]">{title}</h3>
                  <p className="mt-4 text-base leading-8 text-[#2f5e3d]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
