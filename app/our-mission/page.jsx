import { Heart, Sprout, UsersRound, UtensilsCrossed } from 'lucide-react'
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
]

export default function OurMissionPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <div className="relative h-28 bg-white">
        <SiteNav theme="light" />
      </div>
      <main className="pb-16">
        <section id="about" className="mx-auto grid w-full max-w-7xl gap-0 px-4 pb-16 md:grid-cols-[1.25fr_0.75fr] md:px-6 lg:px-8">
          <div className="bg-[#1c1c1c] px-8 py-12 text-white sm:px-12 sm:py-16">
            <h1 className="display-face max-w-2xl text-4xl leading-tight sm:text-5xl">
              We&apos;re On A Mission: Help Communities Win With Simple, Local, And Powerful Nutrition.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-300">
              NUTRI-WIN brings together accessible ingredients, local supply chains, and measurable outcomes. Our model is built to improve nutrition where it matters most while creating opportunity across farming and distribution networks.
            </p>
          </div>
          <div className="grid min-h-135 grid-rows-2">
            <div
              className="bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/imgs/Nutri-Win_Mission.jpg')",
              }}
            />
            <div
              className="bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/imgs/Nutri-Win_Impact.JPG')",
              }}
            />
          </div>
        </section>

        <section className="bg-[#f3f1ed] py-18 sm:py-22">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
            <h2 className="display-face text-center text-4xl italic text-neutral-950 sm:text-5xl">
              So, Why Nutri-Win?
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {reasons.map(({ title, description, Icon }) => (
                <article key={title} className="flex flex-col items-center px-4 py-4 text-center">
                  <div className="flex h-18 w-18 items-center justify-center rounded-full border border-neutral-300 text-neutral-900">
                    <Icon className="h-8 w-8 stroke-[1.8]" />
                  </div>
                  <h3 className="display-face mt-6 text-xl leading-tight text-neutral-950">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-700">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
