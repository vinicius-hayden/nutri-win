"use client"

import Image from 'next/image'
import { useEffect } from 'react'
import SiteNav from '../../src/components/SiteNav'

export default function OurStoryPage() {
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

  const storyImages = [
    {
      src: '/imgs/story1.png',
      alt: 'Nutri-Win story image 1',
      year: '1998',
      textPlacement: 'left',
      markerTop: '34%',
      copyTop: '45%',
    },
    {
      src: '/imgs/story2.jpg',
      alt: 'Nutri-Win story image 2',
      year: '2002',
      textPlacement: 'right',
      markerTop: '53%',
      copyTop: '58%',
      reverseImage: true,
    },
    {
      src: '/imgs/story3.png',
      alt: 'Nutri-Win story image 3',
      year: '2008',
      textPlacement: 'right',
      markerTop: '46%',
      copyTop: '58%',
      accentImage: '/imgs/akamuuu-removebg-preview.png',
    },
    {
      src: '/imgs/story4.JPG',
      alt: 'Nutri-Win story image 4',
      year: '2023',
      textPlacement: 'left',
      markerTop: '49%',
      copyTop: '58%',
    },
    {
      src: '/imgs/story5.jpg',
      alt: 'Nutri-Win story image 5',
      year: '2024',
      textPlacement: 'bottom-left',
      markerTop: '57%',
      copyTop: '68%',
      imagePosition: '50% 42%',
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
    },
  ]

  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <div className="relative h-28 bg-white">
        <SiteNav theme="light" />
      </div>
      <main>
        <section className="mx-auto grid w-full max-w-7xl gap-0 px-4 pb-14 md:grid-cols-[1.05fr_0.95fr] md:px-6 lg:px-8">
          <div className="flex flex-col justify-center bg-white px-8 py-12 sm:px-12 sm:py-16">
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

        <section className="story-snap-gallery h-screen overflow-y-auto overscroll-y-contain snap-y snap-mandatory">
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
                  <div className="absolute inset-y-0 left-10 w-2 bg-white/90 md:left-1/2 md:-translate-x-1/2" />
                  <div
                    className="absolute left-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white md:left-1/2"
                    style={{ top: image.markerTop }}
                  />
                </div>

                <div
                  className={`absolute z-20 left-24 right-4 max-w-2xl text-white md:max-w-136 ${textPlacementClass}`}
                  style={{ top: image.copyTop, transform: 'translateY(-50%)' }}
                >
                  <h2 data-title-reveal className="title-reveal display-face text-5xl font-black leading-none sm:text-6xl md:text-7xl">
                    IN {image.year}
                  </h2>
                  <p data-card-reveal className="card-reveal mt-5 text-2xl leading-tight text-white/95 sm:text-3xl">
                    Lorem ipsum dolor sit amet consectetur <strong className="font-black text-white">adipiscing</strong> elit, sed do eiusmod tempor <strong className="font-black text-white">indicideunt</strong>.
                  </p>
                  <p data-card-reveal className="card-reveal mt-5 text-2xl leading-tight text-white/95 sm:text-3xl">
                    Ut enim duis aute irrue dolor in <strong className="font-black text-white">repehenredirrit</strong> dolore eu fugiat nulla culpa <strong className="font-black text-white">qui officia deserunt</strong>. Mollit anim id est laborum.
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