"use client"

import Image from 'next/image'
import { useEffect } from 'react'
import SiteNav from '../../src/components/SiteNav'

export default function FounderPage() {
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
    <div className="min-h-screen bg-white text-neutral-950">
      <div className="relative h-28 bg-white">
        <SiteNav theme="light" />
      </div>
      <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-10 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(145deg,#f8faf8_0%,#ffffff_56%,#f3f8f4_100%)] p-4 sm:p-6 md:p-8">
          <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-emerald-100/65 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-14 -left-8 h-60 w-60 rounded-full bg-lime-100/55 blur-3xl" aria-hidden="true" />

          <section className="relative grid items-center gap-8 rounded-2xl border border-emerald-100/80 bg-white/90 p-4 shadow-[0_14px_40px_rgba(16,32,21,0.08)] md:grid-cols-[0.85fr_1.15fr] md:p-6">
            <div className="relative min-h-115 overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                src="/imgs/henrietta_microbiologist.png"
                alt="Henrietta Okechukwu, microbiologist, community leader, and dedicated mother"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 42vw, 100vw"
                priority
              />
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-7 sm:p-10">
              <h1 data-title-reveal className="title-reveal display-face text-4xl text-neutral-950 sm:text-5xl">Henrietta Okechukwu</h1>
              <p data-card-reveal className="card-reveal mt-4 text-lg font-semibold text-neutral-700">
                Microbiologist, community leader, &amp; dedicated mother.
              </p>

              <h2 data-title-reveal className="title-reveal display-face mt-10 text-3xl text-neutral-950 sm:text-4xl">Meet the Founder</h2>
              <p data-card-reveal className="card-reveal mt-5 text-base leading-8 text-neutral-700">
                Seeing her first child, Ephraem, suffer from severe acute malnutrition, Henrietta knew that only invention could help them surpass such a challenge. Combining indigenous grains and legumes, Henrietta created the first rendition of Nutri-Win, a superfood based on Akamu, a local favorite.
              </p>
              <p data-card-reveal className="card-reveal mt-5 text-base leading-8 text-neutral-700">
                Within three months, a transformation: her child had beaten malnutrition. Today, her son, who once saw the effects of malnutrition, now paves the way to solving malnutrition and other diseases that impact the African continent.
              </p>
            </div>
          </section>

          <section className="relative mt-8 grid items-center gap-8 rounded-2xl border border-emerald-100/80 bg-white/90 p-4 shadow-[0_14px_40px_rgba(16,32,21,0.08)] md:grid-cols-[1.15fr_0.85fr] md:p-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-7 sm:p-10">
              <h2 data-title-reveal className="title-reveal display-face text-3xl text-neutral-950 sm:text-4xl">Ephraem&apos;s Story</h2>
              <p data-card-reveal className="card-reveal mt-5 text-base leading-8 text-neutral-700">
                Ephraem, standing tall at 6&apos;1&quot; and 205 pounds, embodies the transformative power of determination and resilience. He became the first in his family to earn a fully funded scholarship to one of the nation&apos;s top liberal arts schools. However, two decades ago, his life in the inner city slums of Lagos, Nigeria, was fraught with challenges. Growing up with protein deficiency, Ephraem faced stunted growth and academic struggles.
              </p>
              <p data-card-reveal className="card-reveal mt-5 text-base leading-8 text-neutral-700">
                Despite these hardships, his mother&apos;s ingenuity led to the creation of the Nutri-Win product, which revitalized his health and academic performance. Today, inspired by his journey, Ephraem and our team are dedicated to sharing Nutri-Win&apos;s transformative power with communities in need.
              </p>
            </div>

            <div className="relative min-h-115 overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                src="/imgs/ephraem.png"
                alt="Ephraem"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 42vw, 100vw"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
