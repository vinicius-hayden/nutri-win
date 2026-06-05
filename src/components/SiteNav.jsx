"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SiteNav({ theme = 'dark' }) {
  const dark = theme === 'dark'
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const firstSection = document.querySelector('section')

    const updateVisibility = () => {
      // Fallback keeps nav visible for roughly the first viewport if no section is found.
      if (!firstSection) {
        setIsVisible(window.scrollY <= window.innerHeight * 0.9)
        return
      }

      const cutoff = firstSection.offsetTop + firstSection.offsetHeight
      setIsVisible(window.scrollY < cutoff - 8)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  return (
    <header className={`fixed left-0 top-0 z-40 w-full bg-transparent px-4 py-4 transition-all duration-300 sm:px-6 lg:px-8 ${isVisible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
      <div className="mx-auto flex w-full max-w-none items-center justify-between">
        <Link href="/" className="inline-flex items-center" aria-label="Nutri-Win home">
          <Image
            src="/imgs/Rectangle 4.png"
            alt="Nutri-Win"
            width={220}
            height={66}
            className={`h-12 w-auto sm:h-14 ${dark ? '' : 'drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]'}`}
            priority
          />
        </Link>
        <nav className={`flex items-center gap-4 text-lg font-semibold uppercase tracking-widest sm:gap-7 ${dark ? 'text-white' : 'text-neutral-900'}`}>
          <a
            href="/recipes"
            className={`inline-flex items-center rounded-full px-5 py-3 text-base transition sm:px-6 ${dark ? 'hover:text-[#7fbc83]' : 'hover:text-[#4c8c51]'}`}
          >
            Recipes
          </a>
          <div className="group relative -m-2 p-2">
            <a
              href="/our-mission"
              className={`inline-flex items-center rounded-full px-5 py-3 text-base transition sm:px-6 ${dark ? 'hover:text-[#7fbc83]' : 'hover:text-[#4c8c51]'}`}
            >
              About
            </a>
            <div className="invisible absolute right-0 top-full mt-1 w-72 rounded-2xl border border-neutral-300 bg-white p-3 text-neutral-900 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <a href="/our-story" className="block rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-[0.08em] hover:bg-neutral-100">
                Our Story
              </a>
              <a href="/our-mission" className="block rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-[0.08em] hover:bg-neutral-100">
                Our Mission
              </a>
              <a href="/our-farmers" className="block rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-[0.08em] hover:bg-neutral-100">
                Our Farmers
              </a>
              <a href="/founder" className="block rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-[0.08em] hover:bg-neutral-100">
                The Founder
              </a>
            </div>
          </div>
          <a
            href="/join-us"
            className={`rounded-full border px-4 py-2 transition ${dark ? 'border-white/70 hover:border-[#7fbc83] hover:text-[#7fbc83]' : 'border-neutral-900 hover:border-[#4c8c51] hover:text-[#4c8c51]'}`}
          >
            Join Us
          </a>
        </nav>
      </div>
    </header>
  )
}