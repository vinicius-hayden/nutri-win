import { ArrowUpRight } from 'lucide-react'
import SiteNav from '../../src/components/SiteNav'

export default function OurFarmersPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <div className="relative h-28 bg-white">
        <SiteNav theme="light" />
      </div>
      <main className="pb-16">
        <section className="mx-auto grid w-full max-w-7xl gap-0 px-4 py-10 md:grid-cols-2 md:px-6 lg:px-8">
          <div className="bg-white px-6 py-10 sm:px-12">
            <p className="max-w-xl text-base leading-8 text-neutral-700">
              We tackle malnutrition by equipping farmers, health workers, and households with reliable nutrition products that are practical to distribute and simple to adopt.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="flex h-44 w-44 items-center justify-center rounded-full border-4 border-[#4c8c51] bg-[#f4faf4]">
                  <span className="display-face text-5xl text-[#1c5b29]">10K</span>
                </div>
                <p className="display-face mt-5 text-center text-sm text-neutral-900">Families Reached</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-44 w-44 items-center justify-center rounded-full border-4 border-neutral-900 bg-neutral-100">
                  <span className="display-face text-5xl text-neutral-900">90</span>
                </div>
                <p className="display-face mt-5 text-center text-sm text-neutral-900">Partner Regions</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-115 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(120deg,rgba(0,0,0,0.35),rgba(0,0,0,0.1)),url('/imgs/cornfield.jpg')",
              }}
            />
            <p className="display-face absolute bottom-7 left-7 text-5xl text-white/90 sm:text-6xl">Our Farmers</p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-6 lg:px-8">
          <div className="border border-neutral-200 bg-white px-8 py-12 sm:px-12">
            <h2 className="display-face text-4xl text-neutral-950 sm:text-5xl">How Its Done.</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <p className="text-base leading-8 text-neutral-700">
                We start with local crop partnerships, process with quality-controlled fortification, and distribute through trusted community channels. The result is a nutrition product that is affordable, scalable, and grounded in local ownership.
              </p>
              <div
                className="min-h-55 border border-neutral-300 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg,rgba(0,0,0,0.16),rgba(0,0,0,0.08)),url('/imgs/Nutri-Win_Factory_Abuja(1).jpg')",
                }}
                aria-label="Nutri-Win production process"
              >
                <div className="flex h-full items-end p-5">
                  <span className="display-face bg-black/45 px-3 py-2 text-sm text-white">Process Visual</span>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-neutral-300">
              {['Source & Select', 'Fortify & Blend', 'Package & Verify', 'Distribute Locally'].map((label) => (
                <div key={label} className="flex items-center justify-between border-b border-neutral-300 py-5">
                  <span className="display-face text-sm text-neutral-900">Sub Head</span>
                  <span className="text-base font-semibold text-neutral-800">{label}</span>
                  <ArrowUpRight className="h-5 w-5 text-neutral-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* New section — title left empty for now */}
        <section className="bg-[#1a3a1e]">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
            <div className="grid gap-16 md:grid-cols-2 md:items-center">
              <div>
                <p className="display-face text-xs tracking-[0.28em] text-[#7fbc83]">FROM THE FIELD</p>
                {/* Title left empty */}
                <h2 className="display-face mt-4 text-4xl leading-tight text-white sm:text-5xl" />
                <p className="mt-6 text-base leading-8 text-white/60">
                  Every grain of Nutri-Win starts in the hands of local farmers — cultivated with care, harvested with intention, and processed to preserve every nutrient that nature put there.
                </p>
                <div className="mt-10 flex flex-col gap-6">
                  <div className="border-l-2 border-[#7fbc83] pl-5">
                    <p className="display-face text-sm text-white">Local Sourcing</p>
                    <p className="mt-1 text-sm text-white/50">All crops are sourced from partner farmers within 90 community regions.</p>
                  </div>
                  <div className="border-l-2 border-[#7fbc83]/40 pl-5">
                    <p className="display-face text-sm text-white">Controlled Fortification</p>
                    <p className="mt-1 text-sm text-white/50">Nutrients are locked in at our processing facilities — no shortcuts, no compromise.</p>
                  </div>
                  <div className="border-l-2 border-[#7fbc83]/40 pl-5">
                    <p className="display-face text-sm text-white">Community Distribution</p>
                    <p className="mt-1 text-sm text-white/50">Products reach families through trusted local health and market channels.</p>
                  </div>
                </div>
              </div>
              <div
                className="min-h-96 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(140deg,rgba(0,0,0,0.28),rgba(0,0,0,0.06)),url('/imgs/cornfield.jpg')",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
