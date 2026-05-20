import SiteNav from '../../src/components/SiteNav'

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <div className="relative h-28 bg-white">
        <SiteNav theme="light" />
      </div>
      <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-10 md:px-6 lg:px-8">
        <section className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div
            className="rounded-2xl bg-cover bg-center"
            style={{
              minHeight: '420px',
              backgroundImage:
                "url('/imgs/Nutri-Win_Mission.jpg')",
            }}
          />
          <div className="flex flex-col justify-center rounded-2xl border border-neutral-200 p-8 sm:p-10">
            <h1 className="display-face text-4xl text-neutral-950 sm:text-5xl">The Founder</h1>
            <p className="mt-6 text-base leading-8 text-neutral-700">
              NUTRI-WIN was founded to make nutrition interventions more practical, more local, and more human. The vision is simple: build products communities can trust and supply systems communities can own.
            </p>
            <p className="mt-4 text-base leading-8 text-neutral-700">
              By combining product quality with local partnerships, the founder&apos;s approach connects health outcomes with long-term regional resilience.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
