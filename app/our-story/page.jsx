import Image from 'next/image'
import SiteNav from '../../src/components/SiteNav'

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <div className="relative h-28 bg-white">
        <SiteNav theme="light" />
      </div>
      <main className="pb-20">
        <section className="mx-auto grid w-full max-w-7xl gap-0 px-4 pb-14 md:grid-cols-[1.05fr_0.95fr] md:px-6 lg:px-8">
          <div className="flex flex-col justify-center bg-white px-8 py-12 sm:px-12 sm:py-16">
            <h1 className="display-face max-w-2xl text-4xl font-black leading-tight text-neutral-800 sm:text-5xl">
              From A Mother&apos;s Heart
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-700">
              Nutri-Win was shaped by a mother&apos;s urgency to find nourishment that could truly make a difference when health was fragile and options were limited. That personal search became a deeper commitment to create a food solution grounded in care, science, and accessibility.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-700">
              What started in the context of one child&apos;s need grew into a wider mission for families facing the same reality. The goal was never only to make a product, but to build a trusted path to better nutrition through ingredients people know, systems communities can sustain, and outcomes that reach beyond a single household.
            </p>
          </div>
          <div className="relative min-h-135 overflow-hidden">
            <Image
              src="/imgs/mother_heart.png"
              alt="A smiling mother holding a baby while surrounded by community members outdoors"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </section>

      </main>
    </div>
  )
}