import Image from 'next/image'
import Link from 'next/link'

export default function SiteNav({ theme = 'dark' }) {
  const dark = theme === 'dark'

  return (
    <header className="absolute left-0 top-0 z-30 w-full px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-none items-center justify-between">
        <Link href="/" className="inline-flex items-center" aria-label="Nutri-Win home">
          <Image
            src="/imgs/Rectangle 4.png"
            alt="Nutri-Win"
            width={220}
            height={66}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>
        <nav className={`flex items-center gap-4 text-lg font-semibold uppercase tracking-widest sm:gap-7 ${dark ? 'text-white' : 'text-neutral-900'}`}>
          <div className="group relative">
            <a
              href="/our-mission"
              className={`rounded-full px-3 py-2 transition sm:px-4 ${dark ? 'hover:text-[#7fbc83]' : 'hover:text-[#4c8c51]'}`}
            >
              About
            </a>
            <div className="invisible absolute right-0 top-full mt-2 w-56 rounded-2xl border border-neutral-300 bg-white p-2 text-neutral-900 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <a href="/our-story" className="block rounded-xl px-3 py-2 text-base font-semibold uppercase tracking-[0.08em] hover:bg-neutral-100">
                Our Story
              </a>
              <a href="/our-mission" className="block rounded-xl px-3 py-2 text-base font-semibold uppercase tracking-[0.08em] hover:bg-neutral-100">
                Our Mission
              </a>
              <a href="/our-farmers" className="block rounded-xl px-3 py-2 text-base font-semibold uppercase tracking-[0.08em] hover:bg-neutral-100">
                Our Farmers
              </a>
              <a href="/founder" className="block rounded-xl px-3 py-2 text-base font-semibold uppercase tracking-[0.08em] hover:bg-neutral-100">
                The Founder
              </a>
            </div>
          </div>
          <a
            href="#join"
            className={`rounded-full border px-4 py-2 transition ${dark ? 'border-white/70 hover:border-[#7fbc83] hover:text-[#7fbc83]' : 'border-neutral-900 hover:border-[#4c8c51] hover:text-[#4c8c51]'}`}
          >
            Join Us
          </a>
        </nav>
      </div>
    </header>
  )
}