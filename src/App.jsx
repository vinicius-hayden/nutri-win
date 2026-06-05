'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import SiteNav from './components/SiteNav'
import { Wheat, Sparkles, Users } from 'lucide-react'

const sdgCards = [
  {
    title: 'Zero Hunger',
    description: 'Encouraging nutrition education, supporting sustainable food production, and improving food security.',
  },
  {
    title: 'Good Health and Well-being',
    description: 'Promoting access to nutritious food so communities can improve health outcomes with dignity.',
  },
  {
    title: 'Decent Work & Economic Growth',
    description: 'Creating employment opportunities through local agriculture and stronger community supply chains.',
  },
]

const dropdownShowcase = [
  {
    title: 'Our Story',
    href: '/our-story',
    description: 'How Nutri-Win grew from local nutrition work into a movement.',
    image: '/imgs/story4.JPG',
    badge: 'Journey',
  },
  {
    title: 'Our Mission',
    href: '/our-mission',
    description: 'The purpose guiding every formula, partnership, and community action.',
    image: '/imgs/Nutri-Win_Mission.jpg',
    badge: 'Purpose',
  },
  {
    title: 'Our Farmers',
    href: '/our-farmers',
    description: 'Meet the growers and food-system partners powering impact.',
    image: '/imgs/cornfield.jpg',
    badge: 'People',
  },
  {
    title: 'The Founder',
    href: '/founder',
    description: 'The voice and vision behind Nutri-Win’s long-term direction.',
    image: '/imgs/mother_heart.png',
    badge: 'Vision',
  },
]

const recipes = [
  {
    title: 'Nutri Breakfast Bowl',
    image: '/recipes/breakfast-bowl.jpeg',
    tag: 'morningfuel',
    views: '48.2K',
    likes: '3.8K',
    duration: '0:26',
  },
  {
    title: 'Banana Bread',
    image: '/recipes/banana_bread.jpg',
    tag: 'comfortbake',
    views: '61.4K',
    likes: '4.7K',
    duration: '0:31',
  },
  {
    title: 'Blueberry Muffin',
    image: '/recipes/blueberry_muffin.jpg',
    tag: 'berrybake',
    views: '39.9K',
    likes: '2.9K',
    duration: '0:19',
  },
]

const fanReviews = [
  {
    quote:
      '"Nutri-Win made it easier for my family to stay consistent with better meals. You can feel the difference in energy, and the product is simple to use every day."',
    name: 'Michael D.',
    role: 'Verified Customer',
    image: '/imgs/michael.png',
  },
  {
    quote:
      '"I am a 72 years old grandmother with Diabetes, which has limited my choice of foods. Over the past three years, I have depended on Nutri-Win for my major food intake. Thank you for making it regularly available to me."',
    name: 'Mrs. Philomena Oforka',
    role: 'Happy Customer',
    image: '/imgs/grandma_review.png',
  },
]

function App() {
  const [activeQuote, setActiveQuote] = useState(0)
  const activeReview = fanReviews[activeQuote]
  const productSectionRef = useRef(null)
  const hasLockedProductRef = useRef(false)
  const isScrollAnimatingRef = useRef(false)
  const whyRef = useRef(null)
  const whyPanelRef = useRef(null)
  const whyItem1Ref = useRef(null)
  const whyItem2Ref = useRef(null)
  const whyItem3Ref = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % fanReviews.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const titles = document.querySelectorAll('[data-title-reveal]')
    if (!titles.length) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      titles.forEach((title) => title.classList.add('is-visible'))
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
        threshold: 0.3,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    titles.forEach((title) => observer.observe(title))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    let rafId = null

    const animateTo = (targetY, duration = 1000) => {
      const startY = window.scrollY
      const distance = targetY - startY
      if (Math.abs(distance) < 1) return

      isScrollAnimatingRef.current = true
      const startTime = performance.now()

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        window.scrollTo(0, startY + distance * eased)

        if (progress < 1) {
          rafId = requestAnimationFrame(tick)
          return
        }

        isScrollAnimatingRef.current = false
      }

      rafId = requestAnimationFrame(tick)
    }

    const onWheel = (event) => {
      const productSection = productSectionRef.current
      if (!productSection) return

      if (isScrollAnimatingRef.current) {
        event.preventDefault()
        return
      }

      const productTop = productSection.offsetTop
      const viewportBottom = window.scrollY + window.innerHeight
      const enteringProductFromHero = event.deltaY > 0 && viewportBottom >= productTop && window.scrollY < productTop

      // First downward interaction locks fully onto product before continuing.
      if (!hasLockedProductRef.current && enteringProductFromHero) {
        event.preventDefault()
        hasLockedProductRef.current = true
        animateTo(productTop, 1000)
        return
      }

      // After product lock, control scroll speed.
      if (window.scrollY >= productTop - 2) {
        event.preventDefault()
        window.scrollBy({
          top: event.deltaY * 1.1,
          behavior: 'auto',
        })
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('wheel', onWheel)
    }
  }, [])

  useEffect(() => {
    const section = whyRef.current
    const panel = whyPanelRef.current
    const items = [whyItem1Ref.current, whyItem2Ref.current, whyItem3Ref.current]
    if (!section || !panel || items.some((i) => !i)) return

    const ranges = [[0, 0.3], [0.25, 0.6], [0.5, 0.85]]
    let rafId = null

    function easeInOut(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    }

    function update() {
      const vh = window.innerHeight
      const sectionTop = section.offsetTop
      const sectionH = section.offsetHeight
      const scrollY = window.scrollY
      const total = sectionH - vh
      const scrolled = scrollY - sectionTop

      // JS-sticky: avoid relying on CSS sticky which is broken by overflow-x:hidden parent
      if (scrollY < sectionTop) {
        panel.style.position = 'absolute'
        panel.style.top = '0'
        panel.style.bottom = 'auto'
        panel.style.left = '0'
        panel.style.right = '0'
      } else if (scrollY >= sectionTop + total) {
        panel.style.position = 'absolute'
        panel.style.top = 'auto'
        panel.style.bottom = '0'
        panel.style.left = '0'
        panel.style.right = '0'
      } else {
        panel.style.position = 'fixed'
        panel.style.top = '0'
        panel.style.bottom = 'auto'
        panel.style.left = '0'
        panel.style.right = '0'
      }

      const progress = Math.max(0, Math.min(1, scrolled / total))
      items.forEach((el, i) => {
        const [start, end] = ranges[i]
        const raw = Math.max(0, Math.min(1, (progress - start) / (end - start)))
        const p = easeInOut(raw)
        el.style.transform = `translateY(${(1 - p) * 90}px)`
        el.style.opacity = p
      })
      rafId = null
    }

    function onScroll() {
      if (!rafId) rafId = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  const showPrevQuote = () => {
    setActiveQuote((prev) => (prev - 1 + fanReviews.length) % fanReviews.length)
  }

  const showNextQuote = () => {
    setActiveQuote((prev) => (prev + 1) % fanReviews.length)
  }

  return (
    <div className="w-full overflow-x-hidden bg-white text-neutral-950">
      <section className="snap-start relative h-[85svh] overflow-hidden bg-[#101010] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(0,0,0,0.28),rgba(0,0,0,0.12)),radial-gradient(circle_at_80%_20%,rgba(76,140,81,0.18),transparent_50%)]" />
        <div className="relative flex h-full w-full flex-col">
          <SiteNav theme="dark" />
          <div className="relative h-full w-full overflow-hidden bg-black">
            <iframe
              className="pointer-events-none absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/BnBvlz8EaZ0?autoplay=1&mute=1&playsinline=1&controls=0&modestbranding=1&disablekb=1&iv_load_policy=3&fs=0&rel=0"
              title="Nutri-Win brand video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/35 bg-black/35 px-4 py-2 backdrop-blur-sm">
              <p className="display-face text-[10px] tracking-[0.2em] text-[#d8f5dc] sm:text-xs">Scroll For More ↓</p>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section ref={productSectionRef} className="snap-section relative w-full">
          <div className="grid min-h-screen gap-0 md:grid-cols-2">
            <div className="min-h-screen border-r border-[#2f2f2f] bg-[#141414] text-white">
              <div className="flex min-h-screen flex-col justify-start px-7 pt-7 pb-6 sm:px-10 sm:pt-9 lg:px-12 lg:pt-12">
                <p className="display-face text-sm tracking-[0.18em] text-[#a5d8aa]">Nutrient-Rich Indigenous Foods</p>
                <h2
                  data-title-reveal
                  className="title-reveal display-face mt-2 max-w-xl text-4xl leading-[0.92] sm:text-5xl lg:text-6xl"
                >
                  Akamu for modern life.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
                  Nutri-Win is rooted in one of the oldest meals on the planet, AKAMU. Made from millet, wheat, and sorghum, Akamu is a staple food that has fed generations in West Africa.
                </p>

                <blockquote className="mt-3 max-w-xl border-l-2 border-[#7fbc83]/70 pl-3 text-xs italic leading-6 text-neutral-300 sm:text-sm">
                  "Its preparation methods have been passed down through generations, reflecting the region&apos;s resilient culinary history."
                </blockquote>

                <p className="display-face mt-2 max-w-xl text-xs tracking-[0.14em] text-[#a5d8aa] sm:text-sm">
                  "No Meat, No Sugar, All Love"
                </p>

                {/* Hero stat — Protein */}
                <div data-title-reveal className="card-reveal mt-4 flex justify-start" style={{ transitionDelay: '80ms' }}>
                  <div className="relative h-44 w-44 sm:h-48 sm:w-48">
                    <svg
                      viewBox="0 0 200 200"
                      className="absolute inset-0 h-full w-full"
                      style={{ animation: 'spinBadge 25s linear infinite' }}
                    >
                      <polygon points="100,15 117,48 150,31 144,68 181,74 155,100 181,126 144,132 150,169 117,152 100,185 83,152 50,169 56,132 19,126 45,100 19,74 56,68 50,31 83,48" fill="#7fbc83" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <p className="display-face normal-case text-4xl text-white font-black leading-none">27g</p>
                      <p className="text-sm font-black uppercase tracking-widest text-white/95 -mt-1">Protein</p>
                    </div>
                  </div>
                </div>

                {/* Supporting stats — chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    { value: '14g', label: 'Fiber' },
                    { value: '0g',  label: 'Sugar' },
                    { value: '12',  label: 'Vitamins' },
                  ].map(({ value, label }, i) => (
                    <div
                      key={label}
                      data-title-reveal
                      className="card-reveal flex items-center gap-2 rounded-full bg-[#2d5c31] px-5 py-2.5"
                      style={{ transitionDelay: `${180 + i * 80}ms` }}
                    >
                      <span className="display-face normal-case text-lg font-black leading-none text-white">{value}</span>
                      <span className="text-xs uppercase tracking-widest text-white/70">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/our-farmers"
                    className="inline-flex w-52 items-center justify-center rounded-sm border border-[#7fbc83]/40 py-4 text-[#a5d8aa] transition hover:border-[#7fbc83] hover:bg-[#1a3a1e] hover:text-white"
                  >
                    <span className="display-face tracking-widest uppercase text-xs">See how it&apos;s made</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex w-52 items-center justify-center rounded-sm border border-white/15 py-4 text-white/60 transition hover:border-[#7fbc83]/55 hover:bg-[#1a3a1e] hover:text-white"
                  >
                    <span className="display-face tracking-widest uppercase text-xs">Join Us</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative min-h-screen bg-[#f4f6f2]">
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(140deg,rgba(18,23,18,0.2),rgba(18,23,18,0.04)),url('/imgs/Nutri-Win_Product(1).jpg')",
                  }}
                />
                {/* Vegan seal */}
                <div className="absolute bottom-8 right-8 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-[#7fbc83] bg-[#1a3a1e] shadow-lg">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#7fbc83]" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C9 7 4 8 4 13a8 8 0 0 0 16 0c0-5-5-6-8-10Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
                  </svg>
                  <p className="display-face mt-1 text-[10px] leading-tight tracking-widest text-white">100%</p>
                  <p className="display-face text-[10px] leading-tight tracking-widest text-[#7fbc83]">VEGAN</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Combined: Testimonials (top 50%) + Recipes (bottom 50%) — free scroll */}
        <section className="flex min-h-screen w-full flex-col">

          {/* Top half: Testimonials */}
          <div className="relative flex h-[50svh] w-full items-center justify-center overflow-hidden bg-[#e7f4e8] px-8 sm:px-12 lg:px-16">
            <div className="wave" />
            <div className="wave-bottom" />
            <div className="slider-wrapper relative z-10 w-full p-7 sm:p-10">
              <div key={activeQuote} className="testimonial-slide-motion grid grid-cols-[auto_1fr] items-center gap-9 min-h-45">
                <div className="flex shrink-0 flex-col items-center gap-3 text-center">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-[#6ea875] shadow-[0_14px_30px_rgba(46,106,61,0.28)] sm:h-28 sm:w-28">
                    <Image src={activeReview.image} alt={activeReview.name} fill className="object-cover" sizes="96px" />
                  </div>
                  <div>
                    <p className="display-face text-sm text-[#2c6c3a]">{activeReview.role}</p>
                    <p className="display-face mt-1 text-xl text-[#1b3f26] sm:text-2xl">{activeReview.name}</p>
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="display-face text-sm tracking-[0.12em] text-[#2f7a3d] sm:text-base">Customer Experience</p>
                  <p className="mt-3 text-2xl font-semibold leading-9 text-[#1f2f22] text-pretty sm:text-3xl sm:leading-10">{activeReview.quote}</p>
                </div>
              </div>
              <button type="button" onClick={showPrevQuote} aria-label="View previous quote" className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#8fbe96] bg-[#f3fbf4] text-[#1f5a2e] transition hover:bg-[#d9f0dd] sm:left-3">
                <span className="text-xl leading-none">‹</span>
              </button>
              <button type="button" onClick={showNextQuote} aria-label="View next quote" className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#8fbe96] bg-[#f3fbf4] text-[#1f5a2e] transition hover:bg-[#d9f0dd] sm:right-3">
                <span className="text-xl leading-none">›</span>
              </button>
            </div>
          </div>

          {/* Bottom half: Recipes */}
          <div className="flex h-[50svh] w-full items-center bg-white px-8 sm:px-12 lg:px-16">
            <div className="w-full">
              <h2
                data-title-reveal
                className="title-reveal display-face text-2xl text-neutral-950 sm:text-3xl"
              >
                Recipes For You And Your Heart.
              </h2>
              <div className="mt-5 grid grid-cols-3 gap-5">
                {recipes.map((recipe, index) => (
                  <article
                    key={recipe.title}
                    data-title-reveal
                    className="reel-card card-reveal"
                    style={{ transitionDelay: `${index * 140 + 120}ms` }}
                  >
                    <div
                      className="reel-media h-[28svh] w-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${recipe.image}')` }}
                    />
                    <div className="reel-top-ui">
                      <span className="reel-pill">REEL</span>
                      <span className="reel-pill">{recipe.duration}</span>
                    </div>
                    <div className="reel-bottom-ui">
                      <p className="display-face reel-title">{recipe.title}</p>
                      <p className="reel-subtitle">#{recipe.tag}</p>
                      <p className="reel-metrics">{recipe.views} views  ·  {recipe.likes} likes</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href="/recipes"
                  className="inline-block rounded-sm border-2 border-[#4c8c51] bg-[#4c8c51] px-10 py-4 text-base font-semibold uppercase tracking-widest text-white! transition-all duration-200 hover:bg-white hover:text-[#4c8c51]! active:scale-95"
                >
                  See More Recipes
                </a>
              </div>
            </div>
          </div>

        </section>

        {/* What Makes Nutri-Win Better — Banza-style sticky scroll */}
        <section ref={whyRef} className="relative" style={{ height: '240vh' }}>
          <div
            ref={whyPanelRef}
            className="h-screen overflow-hidden bg-[#1a3a1e]"
            style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
          >

            {/* Floating product packaging */}
            <div className="pointer-events-none absolute inset-0 z-0">
              {[
                { top: '6%',  left: '4%',  size: 120, dur: '6s',  delay: '0s'   },
                { top: '10%', left: '78%', size: 135, dur: '8s',  delay: '1s'   },
                { top: '3%',  left: '48%', size: 110, dur: '7s',  delay: '2s'   },
                { top: '55%', left: '2%',  size: 128, dur: '9s',  delay: '0.5s' },
                { top: '60%', left: '85%', size: 115, dur: '6s',  delay: '1.5s' },
                { top: '72%', left: '40%', size: 122, dur: '8s',  delay: '3s'   },
                { top: '80%', left: '15%', size: 110, dur: '7s',  delay: '0.8s' },
                { top: '78%', left: '68%', size: 132, dur: '9s',  delay: '2.5s' },
                { top: '30%', left: '90%', size: 118, dur: '6s',  delay: '0.3s' },
                { top: '35%', left: '12%', size: 112, dur: '8s',  delay: '1.8s' },
              ].map((p, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src="/imgs/product_png.png"
                  alt=""
                  className="product-particle"
                  style={{
                    top: p.top,
                    left: p.left,
                    width: p.size,
                    animationDuration: p.dur,
                    animationDelay: p.delay,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center px-6 pt-20 sm:pt-24">

              {/* Heading — always visible */}
              <div className="text-center">
                <p className="display-face text-[10px] tracking-[0.32em] text-[#7fbc83] sm:text-xs">THE NUTRI-WIN DIFFERENCE</p>
                <h2 className="display-face mt-3 text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
                  What makes<br />Nutri-Win better?
                </h2>
              </div>

              {/* Three items */}
              <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-12 sm:mt-20 sm:grid-cols-3 sm:gap-8">

                <div ref={whyItem1Ref} className="text-center" style={{ opacity: 0, transform: 'translateY(90px)' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(127,188,131,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', flexShrink: 0 }}>
                    <Wheat className="h-7 w-7 text-[#7fbc83]" strokeWidth={1.6} />
                  </div>
                  <p className="display-face text-[10px] tracking-[0.28em] text-[#7fbc83]">MADE FROM</p>
                  <p className="display-face mt-3 text-3xl leading-tight text-white sm:text-4xl">WHOLE<br />GRAIN</p>
                  <div className="mx-auto mt-4 h-px w-10 bg-[#7fbc83]" />
                  <p className="mt-4 text-sm leading-7 text-white/70">Better for your health. Better for families. Better for the earth.</p>
                </div>

                <div ref={whyItem2Ref} className="text-center" style={{ opacity: 0, transform: 'translateY(90px)' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(127,188,131,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', flexShrink: 0 }}>
                    <Sparkles className="h-7 w-7 text-[#7fbc83]" strokeWidth={1.6} />
                  </div>
                  <p className="display-face text-[10px] tracking-[0.28em] text-[#7fbc83]">FULL OF</p>
                  <p className="display-face mt-3 text-3xl leading-tight text-white sm:text-4xl">THE GOOD<br />STUFF</p>
                  <div className="mx-auto mt-4 h-px w-10 bg-[#7fbc83]" />
                  <p className="mt-4 text-sm leading-7 text-white/70">27g protein. 14g fiber. 12 essential vitamins. All in one serving.</p>
                </div>

                <div ref={whyItem3Ref} className="text-center" style={{ opacity: 0, transform: 'translateY(90px)' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(127,188,131,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', flexShrink: 0 }}>
                    <Users className="h-7 w-7 text-[#7fbc83]" strokeWidth={1.6} />
                  </div>
                  <p className="display-face text-[10px] tracking-[0.28em] text-[#7fbc83]">TRUSTED BY</p>
                  <p className="display-face mt-3 text-3xl leading-tight text-white sm:text-4xl">THOUSANDS<br />OF FAMILIES</p>
                  <div className="mx-auto mt-4 h-px w-10 bg-[#7fbc83]" />
                  <p className="mt-4 text-sm leading-7 text-white/70">10,000 families across 90 partner regions — and the number keeps growing.</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* SDG + Pillars — free scroll */}
        <section className="bg-neutral-100 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="display-face text-xs tracking-[0.24em] text-[#4c8c51]">OUR THREE KEY SDGS</p>
                <h2
                  data-title-reveal
                  className="title-reveal display-face mt-4 max-w-3xl text-4xl leading-tight text-neutral-950 sm:text-5xl"
                >
                  Built around hunger, health, and economic growth.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-neutral-700 sm:text-lg">
                Backed by 22 years of research and development, Nutri-Win works to end malnutrition and protein deficiency while creating better outcomes for families, farmers, and local economies.
              </p>
            </div>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {sdgCards.map((card, index) => (
                <article key={card.title} className="relative">
                  <div className="absolute -left-2 top-10 h-16 w-16 rounded-full bg-[#4c8c51]/10 blur-xl" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1f5d32] text-[#dff4e2] shadow-[0_10px_24px_rgba(31,93,50,0.28)]">
                      {index === 0 && (
                        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                          <path d="M4 17h16" />
                          <path d="M7 17v-4.6c0-.6.5-1.1 1.1-1.1h7.8c.6 0 1.1.5 1.1 1.1V17" />
                          <path d="M9.2 11.3 10.6 7h2.8l1.4 4.3" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                          <path d="M12 20s-6.5-3.7-6.5-9A3.6 3.6 0 0 1 12 8.6 3.6 3.6 0 0 1 18.5 11c0 5.3-6.5 9-6.5 9Z" />
                          <path d="M9.4 12h5.2" />
                          <path d="M12 9.4v5.2" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                          <path d="M5 16.5 10 11l3.2 3.4L19 8.5" />
                          <path d="M16.2 8.5H19v2.8" />
                          <path d="M4.5 19.5h15" />
                        </svg>
                      )}
                    </div>

                    <div>
                      <p className="display-face text-sm text-[#4c8c51]">0{index + 1}</p>
                      <h3 className="display-face mt-1 text-2xl text-neutral-950">{card.title}</h3>
                      <p className="mt-3 border-l-2 border-[#6fb27a] pl-4 text-base leading-8 text-neutral-700">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="relative mt-18 overflow-hidden border border-[#cfe6d1] bg-white p-6 sm:p-8 lg:p-10">
              <div className="floating-tag floating-tag-1">Nutrition</div>
              <div className="floating-tag floating-tag-2">Community</div>
              <div className="floating-tag floating-tag-3">Impact</div>

              <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="display-face text-xs tracking-[0.24em] text-[#4c8c51]">Explore Nutri-Win</p>
                  <h3 className="display-face mt-3 max-w-3xl text-4xl leading-[0.95] text-neutral-950 sm:text-5xl">
                    Story, mission, people, and vision.
                  </h3>
                </div>
                <p className="max-w-2xl text-base leading-8 text-neutral-700 sm:text-lg">
                  Quick paths into what matters most behind the brand.
                </p>
              </div>

              <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {dropdownShowcase.map((item, index) => (
                  <a
                    key={item.title}
                    href={item.href}
                    data-title-reveal
                    className="feature-tile card-reveal group"
                    style={{ transitionDelay: `${index * 120 + 100}ms` }}
                  >
                    <div
                      className="feature-tile-image"
                      style={{
                        backgroundImage: `linear-gradient(158deg,rgba(0,0,0,0.12),rgba(0,0,0,0.55)),url('${item.image}')`,
                      }}
                    />
                    <div className="feature-tile-content">
                      <span className="feature-tile-badge">{item.badge}</span>
                      <h4 className="display-face mt-3 text-2xl text-white">{item.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-white/88">{item.description}</p>
                      <p className="mt-4 display-face text-xs tracking-[0.18em] text-[#a6e4af]">Open Page →</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default App
