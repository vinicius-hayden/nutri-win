"use client"

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import SiteNav from '../../src/components/SiteNav'

export default function OurStoryPage() {
  const galleryRef = useRef(null)
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

  // Prevent the outer page from scrolling past the gallery before its inner
  // scroll is complete — stops the footer from peeking through early.
  useEffect(() => {
    const gallery = galleryRef.current
    if (!gallery) return

    const galleryDone = () =>
      gallery.scrollTop + gallery.clientHeight >= gallery.scrollHeight - 4

    // Non-passive wheel guard: block outer-document scroll past gallery
    const onWheel = (e) => {
      const galleryTop = gallery.offsetTop
      if (window.scrollY < galleryTop - 10) return   // not at gallery yet
      if (gallery.contains(e.target)) return          // wheeling inside gallery — leave alone
      if (e.deltaY > 0 && !galleryDone()) e.preventDefault()
    }

    // Scroll correction: if outer scroll has somehow crept past gallery and
    // the gallery isn't done, snap back.
    const onScroll = () => {
      const galleryTop = gallery.offsetTop
      if (window.scrollY > galleryTop + 4 && !galleryDone()) {
        window.scrollTo({ top: galleryTop, behavior: 'instant' })
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const storyImages = [
    {
      src: '/imgs/story1.png',
      alt: 'Nutri-Win story image 1',
      year: '1998',
      textPlacement: 'left',
      markerTop: '34%',
      copyTop: '45%',
      line1: 'Henrietta, a trained microbiologist, begins documenting the nutritional deficiencies she witnesses across Lagos communities.',
      line2: 'Her scientific conviction grows: that West Africa’s indigenous grains hold a powerful answer to chronic malnutrition — one that modern medicine had long overlooked.',
    },
    {
      src: '/imgs/story2.jpg',
      alt: 'Nutri-Win story image 2',
      year: '2002',
      textPlacement: 'right',
      markerTop: '53%',
      copyTop: '58%',
      reverseImage: true,
      line1: 'Henrietta begins delivering health talks to youth communities across Nigeria, bridging traditional food knowledge and modern nutritional science.',
      line2: 'From school halls to community centres, she plants a radical idea: that the answer to protein deficiency was already growing in local soil.',
    },
    {
      src: '/imgs/story3.png',
      alt: 'Nutri-Win story image 3',
      year: '2008',
      textPlacement: 'right',
      markerTop: '46%',
      copyTop: '58%',
      accentImage: '/imgs/akamuuu-removebg-preview.png',
      line1: 'When her son Ephraem suffers severe malnutrition and stunted growth, Henrietta channels years of research into creating the first Nutri-Win formula.',
      line2: 'A blend of millet, wheat, and sorghum — rooted in Akamu, a West African staple — transforms Ephraem’s health within three months, proving the concept beyond doubt.',
    },
    {
      src: '/imgs/story4.JPG',
      alt: 'Nutri-Win story image 4',
      year: '2023',
      textPlacement: 'left',
      markerTop: '49%',
      copyTop: '58%',
      line1: 'A movement takes shape. Community events, health fairs, and grassroots partnerships across Nigeria bring the Nutri-Win formula into the spotlight.',
      line2: 'Farmers, health workers, and families unite behind a shared mission: to make local, high-protein food accessible to every household facing malnutrition.',
    },
    {
      src: '/imgs/story5.jpg',
      alt: 'Nutri-Win story image 5',
      year: '2024',
      textPlacement: 'bottom-left',
      markerTop: '57%',
      copyTop: '68%',
      imagePosition: '50% 42%',
      line1: 'Ephraem earns a fully funded scholarship to Soka University of America in California — and carries the Nutri-Win mission across the ocean with him.',
      line2: 'The university’s business-to-business initiative becomes the catalyst for international expansion, opening new doors for the brand beyond West Africa.',
    },
    {
      src: '/imgs/story6.png',
      alt: 'Nutri-Win story image 6',
      year: '2026',
      textPlacement: 'bottom-right',
      markerTop: '41%',
      copyTop: '66%',
      imageClassName: 'object-cover',
      imagePosition: '50% 28%',
      line1: 'Nutri-Win stands at the intersection of heritage and impact — a formula born in a Lagos kitchen, now reaching families, farmers, and partners across continents.',
      line2: 'The work continues: deeper community roots, new formulas, and a growing network of people who believe that indigenous food can change the future of nutrition.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-neutral-950">
      <div className="relative h-28 bg-[#f5f0e8]">
        <SiteNav theme="light" />
      </div>
      <main>
        <section className="mx-auto grid w-full max-w-7xl gap-0 px-4 pb-14 md:grid-cols-[1.05fr_0.95fr] md:px-6 lg:px-8">
          <div className="flex flex-col justify-center bg-[#f5f0e8] px-8 py-12 sm:px-12 sm:py-16">
            <h1 data-title-reveal className="title-reveal display-face max-w-2xl text-4xl font-black leading-tight text-neutral-800 sm:text-5xl">
              From A Mother&apos;s Heart
            </h1>
            <p data-card-reveal className="card-reveal mt-6 max-w-2xl text-base leading-8 text-neutral-700">
              Nutri-Win was shaped by a mother&apos;s urgency to find nourishment that could truly make a difference when health was fragile and options were limited. That personal search became a deeper commitment to create a food solution grounded in care, science, and accessibility.
            </p>
            <p data-card-reveal className="card-reveal mt-5 max-w-2xl text-base leading-8 text-neutral-700">
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

        <section ref={galleryRef} className="story-snap-gallery h-screen overflow-y-auto overscroll-y-contain snap-y snap-mandatory">
          {storyImages.map((image, index) => {
            const textPlacement = image.textPlacement ?? 'right'
            const textPlacementClass =
              textPlacement === 'left'
                ? 'md:left-[9%] md:right-[52%]'
                : textPlacement === 'bottom-left'
                  ? 'md:left-[9%] md:right-[52%]'
                  : textPlacement === 'bottom-right'
                    ? 'md:left-[58%] md:right-[4%]'
                    : 'md:left-[58%] md:right-[4%]'

            const imageTransforms = [
              image.reverseImage ? 'scaleX(-1)' : null,
              image.imageScale ? `scale(${image.imageScale})` : null,
            ].filter(Boolean)

            return (
              <article
                key={image.src}
                className={`relative h-screen snap-start snap-always ${image.frameClassName ?? ''}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={image.imageClassName ?? 'object-cover object-center'}
                  style={{
                    ...(image.imagePosition ? { objectPosition: image.imagePosition } : {}),
                    ...(imageTransforms.length > 0 ? { transform: imageTransforms.join(' ') } : {}),
                  }}
                  sizes="100vw"
                  priority={index === 0}
                />
                <div className="pointer-events-none absolute inset-0 bg-black/50" aria-hidden="true" />

                {image.accentImage ? (
                  <Image
                    src={image.accentImage}
                    alt="Decorative accent for story timeline"
                    width={340}
                    height={340}
                    className="story-accent-fade absolute bottom-4 left-2 z-20 w-28 md:bottom-8 md:left-8 md:w-52"
                    sizes="(min-width: 768px) 208px, 112px"
                  />
                ) : null}

                <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
                  <div className="absolute inset-y-0 left-10 w-2 bg-[#f5f0e8]/90 md:left-1/2 md:-translate-x-1/2" />
                  <div
                    className="absolute left-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5f0e8] md:left-1/2"
                    style={{ top: image.markerTop }}
                  />
                </div>

                <div
                  className={`absolute z-20 left-24 right-4 max-w-2xl text-white md:max-w-136 ${textPlacementClass}`}
                  style={{ top: image.copyTop, transform: 'translateY(-50%)' }}
                >
                  <h2 data-title-reveal className="title-reveal display-face text-3xl font-black leading-none sm:text-5xl md:text-7xl">
                    IN {image.year}
                  </h2>
                  <p data-card-reveal className="card-reveal mt-4 text-sm leading-snug text-white/95 sm:mt-5 sm:text-2xl sm:leading-tight md:text-3xl">
                    {image.line1}
                  </p>
                  <p data-card-reveal className="card-reveal mt-3 text-sm leading-snug text-white/95 sm:mt-5 sm:text-2xl sm:leading-tight md:text-3xl">
                    {image.line2}
                  </p>
                </div>
              </article>
            )
          })}
        </section>

      </main>
    </div>
  )
}