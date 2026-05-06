'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Leaf,
  LineChart,
  Salad,
  Sparkles,
  Sprout,
  Users,
} from 'lucide-react'

const features = [
  {
    title: 'Protein-first nutrition',
    description:
      'A balanced blend of plant protein, fiber, and micronutrients designed for everyday energy without the crash.',
    icon: Salad,
  },
  {
    title: 'Built for real routines',
    description:
      'Fast to prep, easy to repeat, and adaptable for work lunches, family dinners, and high-volume food programs.',
    icon: Users,
  },
  {
    title: 'Measured climate upside',
    description:
      'Each serving is formulated to lower environmental load compared to conventional animal-heavy alternatives.',
    icon: Leaf,
  },
  {
    title: 'Brand-ready storytelling',
    description:
      'Nutri-Win gives teams a nutrition product with a clear impact narrative consumers can understand in seconds.',
    icon: LineChart,
  },
]

const storyPoints = [
  'Created for people who want better nutrition without giving up convenience or taste.',
  'Designed to help modern brands serve a smarter plate with a lower footprint.',
  'Grounded in practical ingredients, clear benefits, and a story people want to join.',
]

const stats = [
  { value: '18g', label: 'plant protein per serving' },
  { value: '7g', label: 'fiber to support fullness' },
  { value: '42%', label: 'lower estimated food emissions' },
]

function App() {
  const [servingsPerWeek, setServingsPerWeek] = useState(24)

  const impact = useMemo(() => {
    const yearlyServings = servingsPerWeek * 52
    return {
      meals: yearlyServings.toLocaleString(),
      co2: Math.round(yearlyServings * 1.7).toLocaleString(),
      water: Math.round(yearlyServings * 120).toLocaleString(),
      protein: Math.round(yearlyServings * 18).toLocaleString(),
    }
  }, [servingsPerWeek])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(244,196,120,0.38),_transparent_32%),linear-gradient(180deg,_#fffaf0_0%,_#f4f7ef_42%,_#eef5e8_100%)] text-stone-900">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-6 lg:px-10">
        <header className="mb-10 flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-5 py-3 shadow-[0_10px_30px_rgba(71,85,55,0.08)] backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-900/20">
              <Sprout className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-700">Nutri-Win</p>
              <p className="text-xs text-stone-500">Nutrition that wins on health and impact</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-stone-600 md:flex">
            <a href="#features" className="transition hover:text-emerald-700">Features</a>
            <a href="#impact" className="transition hover:text-emerald-700">Impact</a>
            <a href="#story" className="transition hover:text-emerald-700">Story</a>
          </nav>
        </header>

        <main className="space-y-10">
          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-[0_24px_80px_rgba(74,93,61,0.12)] backdrop-blur lg:p-12">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                <Sparkles className="h-4 w-4" />
                Modern nutrition for brands, teams, and families
              </div>
              <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-stone-900 sm:text-6xl">
                A cleaner way to feed ambition.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                Nutri-Win is a startup-style nutrition product built to turn better ingredients into a stronger daily habit.
                High protein, real satisfaction, and a measurable footprint advantage in one simple format.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#impact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Explore impact
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#story"
                  className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-emerald-200 hover:text-emerald-800"
                >
                  Read the story
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-stone-50 px-5 py-4">
                    <p className="text-3xl font-semibold text-stone-900">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-stone-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] bg-[linear-gradient(135deg,_#27543e_0%,_#3d7a53_55%,_#e0a34b_100%)] p-8 text-white shadow-[0_24px_80px_rgba(48,78,57,0.2)]">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.28em] text-emerald-100/80">What makes it different</p>
                  <BadgeCheck className="h-5 w-5 text-amber-200" />
                </div>
                <p className="mt-8 text-3xl font-semibold leading-tight">
                  Startup-speed nutrition with a food-system point of view.
                </p>
                <p className="mt-4 text-sm leading-7 text-emerald-50/80">
                  Nutri-Win is positioned for modern consumers who want products that do more than list ingredients.
                  It connects taste, performance, and sustainability in a single story.
                </p>
              </div>
              <div className="rounded-[2rem] border border-emerald-100 bg-[#f9f3e8] p-8 shadow-[0_20px_60px_rgba(147,113,52,0.12)]">
                <div className="flex items-center gap-3 text-amber-700">
                  <div className="rounded-2xl bg-white p-3 shadow-sm">
                    <Salad className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em]">Daily experience</p>
                </div>
                <p className="mt-6 text-2xl font-semibold text-stone-900">
                  Familiar enough to adopt fast, different enough to stand out.
                </p>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  Rounded flavors, satisfying texture, and ingredient choices that feel warm, natural, and credible.
                </p>
              </div>
            </div>
          </section>

          <section id="features" className="rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_24px_80px_rgba(74,93,61,0.1)] backdrop-blur lg:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Features</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
                Built to tell a clearer nutrition story.
              </h2>
              <p className="mt-4 text-base leading-7 text-stone-600">
                From product formulation to brand positioning, every part of Nutri-Win is shaped to feel simple, useful, and future-facing.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon

                return (
                  <article key={feature.title} className="rounded-[1.75rem] border border-stone-100 bg-stone-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-stone-900">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{feature.description}</p>
                  </article>
                )
              })}
            </div>
          </section>

          <section id="impact" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-[#214b39] p-8 text-white shadow-[0_24px_80px_rgba(48,78,57,0.22)] lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-100/75">Impact calculator</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Show the upside in servings, not slogans.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50/80">
                Estimate how many meals, grams of protein, and environmental savings Nutri-Win can deliver over one year.
              </p>
              <div className="mt-10 rounded-[1.75rem] bg-white/10 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-emerald-50/70">Servings per week</p>
                    <p className="mt-2 text-4xl font-semibold">{servingsPerWeek}</p>
                  </div>
                  <div className="rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-amber-950">
                    Live estimate
                  </div>
                </div>
                <input
                  type="range"
                  min="4"
                  max="120"
                  step="2"
                  value={servingsPerWeek}
                  onChange={(event) => setServingsPerWeek(Number(event.target.value))}
                  className="mt-8 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-amber-300"
                />
                <div className="mt-4 flex justify-between text-xs uppercase tracking-[0.22em] text-emerald-50/60">
                  <span>4</span>
                  <span>120</span>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_24px_80px_rgba(74,93,61,0.12)] backdrop-blur lg:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-stone-50 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Yearly meals</p>
                  <p className="mt-4 text-4xl font-semibold text-stone-900">{impact.meals}</p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">Estimated servings delivered in one year.</p>
                </div>
                <div className="rounded-[1.5rem] bg-stone-50 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Protein delivered</p>
                  <p className="mt-4 text-4xl font-semibold text-stone-900">{impact.protein}g</p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">Total grams of plant protein supplied.</p>
                </div>
                <div className="rounded-[1.5rem] bg-emerald-50 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-emerald-700">CO2e saved</p>
                  <p className="mt-4 text-4xl font-semibold text-emerald-900">{impact.co2} kg</p>
                  <p className="mt-3 text-sm leading-7 text-emerald-800/80">Estimated emissions avoided versus heavier conventional meals.</p>
                </div>
                <div className="rounded-[1.5rem] bg-amber-50 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-amber-700">Water saved</p>
                  <p className="mt-4 text-4xl font-semibold text-amber-900">{impact.water} L</p>
                  <p className="mt-3 text-sm leading-7 text-amber-900/70">A simple signal for resource efficiency at scale.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="story" className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-[0_24px_80px_rgba(74,93,61,0.1)] backdrop-blur lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">About Nutri-Win</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
                The story starts with a simple question: what if everyday nutrition felt both credible and aspirational?
              </h2>
              <div className="mt-8 space-y-4 text-base leading-8 text-stone-600">
                {storyPoints.map((point) => (
                  <div key={point} className="flex gap-4 rounded-[1.5rem] bg-stone-50 p-5">
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[linear-gradient(180deg,_#fff7ea_0%,_#f3e2bc_100%)] p-8 shadow-[0_24px_80px_rgba(147,113,52,0.15)] lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">Why it resonates</p>
              <div className="mt-6 space-y-6">
                <div className="rounded-[1.5rem] bg-white/80 p-6">
                  <p className="text-xl font-semibold text-stone-900">Health that feels tangible</p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    Nutri-Win focuses on benefits people can quickly understand: protein, fullness, ease, and better everyday choices.
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-white/80 p-6">
                  <p className="text-xl font-semibold text-stone-900">Impact that can be explained fast</p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    The product story translates sustainability into practical numbers, making the value proposition clearer for buyers and consumers.
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-white/80 p-6">
                  <p className="text-xl font-semibold text-stone-900">A brand language with warmth</p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    Soft curves, natural tones, and straightforward claims create a look that feels optimistic rather than clinical.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
