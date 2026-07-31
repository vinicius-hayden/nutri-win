"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SiteNav({ theme = 'dark' }) {
  const dark = theme === 'dark'
  const [isVisible, setIsVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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

  // Close mobile menu when viewport grows past the sm breakpoint
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 640) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed left-0 top-0 z-40 w-full transition-all duration-300 ${
        isVisible || isHovered ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Top bar */}
      <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
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

        {/* Desktop nav */}
        <nav
          className={`hidden items-center gap-4 text-lg font-semibold uppercase tracking-widest sm:flex sm:gap-7 ${
            dark ? 'text-white' : 'text-neutral-900'
          }`}
        >
          <a
            href="/recipes"
            className={`inline-flex items-center rounded-full px-5 py-3 text-base transition sm:px-6 ${
              dark ? 'hover:text-[#7fbc83]' : 'hover:text-[#4c8c51]'
            }`}
          >
            Recipes
          </a>
          <div className="group relative -m-2 p-2">
            <a
              href="/our-mission"
              className={`inline-flex items-center rounded-full px-5 py-3 text-base transition sm:px-6 ${
                dark ? 'hover:text-[#7fbc83]' : 'hover:text-[#4c8c51]'
              }`}
            >
              About
            </a>
            <div className="invisible absolute right-0 top-full mt-1 w-72 rounded-2xl border border-neutral-300 bg-[#f5f0e8] p-3 text-neutral-900 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <a href="/our-story" className="block rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-[0.08em] hover:bg-[#e8e2d8]">
                Our Story
              </a>
              <a href="/our-mission" className="block rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-[0.08em] hover:bg-[#e8e2d8]">
                Our Mission
              </a>
              <a href="/our-farmers" className="block rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-[0.08em] hover:bg-[#e8e2d8]">
                Our Farmers
              </a>
              <a href="/founder" className="block rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-[0.08em] hover:bg-[#e8e2d8]">
                The Founder
              </a>
            </div>
          </div>
          <a
            href="/join-us"
            className={`rounded-full border px-4 py-2 transition ${
              dark
                ? 'border-white/70 hover:border-[#7fbc83] hover:text-[#7fbc83]'
                : 'border-neutral-900 hover:border-[#4c8c51] hover:text-[#4c8c51]'
            }`}
          >
            Join Us
          </a>
        </nav>

        {/* Mobile hamburger button */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className={`flex flex-col items-center justify-center gap-1.25 p-2 sm:hidden ${
            dark ? 'text-white' : 'text-neutral-900'
          }`}
        >
          <span
            className={`block h-0.5 w-6 origin-center bg-current transition-all duration-200 ${
              mobileOpen ? 'translate-y-1.75 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-200 ${
              mobileOpen ? 'scale-x-0 opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 origin-center bg-current transition-all duration-200 ${
              mobileOpen ? '-translate-y-1.75 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <div
        className="sm:hidden overflow-hidden"
        style={{ maxHeight: mobileOpen ? '600px' : '0', transition: 'max-height 300ms ease-in-out' }}
      >
        <nav
          className={`px-6 pb-8 pt-2 ${
            dark
              ? 'bg-[#0c1c0f]/95 text-white backdrop-blur-md'
              : 'bg-[#f5f0e8]/95 text-neutral-900 backdrop-blur-md'
          }`}
        >
          <a
            href="/recipes"
            onClick={close}
            className="block border-b border-current/10 py-4 text-base font-semibold uppercase tracking-widest"
          >
            Recipes
          </a>
          <div className="border-b border-current/10 py-2">
            <p className="pb-1 pt-2 text-[10px] uppercase tracking-[0.22em] opacity-50">About</p>
            <a href="/our-story" onClick={close} className="block py-3 text-base font-semibold uppercase tracking-widest">
              Our Story
            </a>
            <a href="/our-mission" onClick={close} className="block py-3 text-base font-semibold uppercase tracking-widest">
              Our Mission
            </a>
            <a href="/our-farmers" onClick={close} className="block py-3 text-base font-semibold uppercase tracking-widest">
              Our Farmers
            </a>
            <a href="/founder" onClick={close} className="block py-3 text-base font-semibold uppercase tracking-widest">
              The Founder
            </a>
          </div>
          <a
            href="/join-us"
            onClick={close}
            className="block py-4 text-base font-semibold uppercase tracking-widest"
          >
            Join Us
          </a>
        </nav>
      </div>
    </header>
  )
}