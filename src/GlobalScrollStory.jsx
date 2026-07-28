'use client'

import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function GlobalScrollStory() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const media = gsap.matchMedia()

    media.add('(min-width: 769px) and (prefers-reduced-motion: no-preference)', () => {
      gsap.to('.global-scroll-progress span', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: .2 },
      })

      gsap.fromTo('.site-header', { y: -95, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .8, ease: 'power3.out' })
      gsap.to('.real-trust-card', { y: -9, duration: 2.2, stagger: .4, repeat: -1, yoyo: true, ease: 'sine.inOut' })

      const sections = gsap.utils.toArray('main > section, .interior > section')
      sections.forEach((section, sectionIndex) => {
        const headings = section.querySelectorAll('h1, h2, .kicker, .eyebrow')
        const copy = section.querySelectorAll('p, .button, .text-link')
        const cards = section.querySelectorAll('.service-card, .step, .reason-card, .interior-service, .process-page-step, .faq-item, .detail-steps article')
        const images = section.querySelectorAll('img:not(.no-scroll-motion)')
        const accents = section.querySelectorAll('.service-icon, .step-num, .storm-icon, .map-pin, .area-pills span, .why-points > div')
        const layoutGroups = section.querySelectorAll('.hero-grid > *, .hero-actions, .trust-row, .section-head > *, .process-grid > *, .why-copy > *, .quote-row > *, .local-grid > *, .emergency-inner, .faq-grid > *, .estimate-grid > *, .contact-grid > *, .service-detail-intro > *, .interior-hero-layout > *')

        if (sectionIndex > 0) {
          gsap.fromTo(section, { '--section-light': 0 }, {
            '--section-light': 1,
            ease: 'none',
            scrollTrigger: { trigger: section, start: 'top 92%', end: 'top 25%', scrub: 1 },
          })
        }

        if (headings.length) {
          gsap.fromTo(headings,
            { autoAlpha: 0, y: 90, rotateX: -18, transformOrigin: '50% 100%' },
            {
              autoAlpha: 1, y: 0, rotateX: 0, stagger: .08, ease: 'power2.out',
              scrollTrigger: { trigger: section, start: sectionIndex === 0 ? 'top 78%' : 'top 74%', end: 'top 28%', scrub: .8 },
            })
        }

        if (copy.length) {
          gsap.fromTo(copy, { autoAlpha: 0, y: 55 }, {
            autoAlpha: 1, y: 0, stagger: .035, ease: 'power1.out',
            scrollTrigger: { trigger: section, start: 'top 70%', end: 'top 20%', scrub: .7 },
          })
        }

        if (sectionIndex > 0) {
          const direction = sectionIndex % 2 === 0 ? 1 : -1
          const sectionShell = section.querySelector(':scope > .shell')
          if (sectionShell) {
            gsap.fromTo(sectionShell,
              { x: 34 * direction, rotateY: 2.5 * direction, transformOrigin: direction > 0 ? '100% 50%' : '0% 50%' },
              {
                x: 0, rotateY: 0, ease: 'none',
                scrollTrigger: { trigger: section, start: 'top bottom', end: 'top 24%', scrub: 1 },
              })
          }
        }

        if (cards.length) {
          gsap.fromTo(cards,
            { autoAlpha: 0, y: 120, z: -180, rotateX: 14, rotateY: sectionIndex % 2 ? -8 : 8 },
            {
              autoAlpha: 1, y: 0, z: 0, rotateX: 0, rotateY: 0, stagger: .09, ease: 'power2.out',
              scrollTrigger: { trigger: cards[0], start: 'top 88%', end: 'bottom 62%', scrub: .85 },
            })
        }

        if (accents.length) {
          gsap.fromTo(accents,
            { autoAlpha: 0, scale: .45, rotate: sectionIndex % 2 ? -16 : 16 },
            {
              autoAlpha: 1, scale: 1, rotate: 0, stagger: .055, ease: 'back.out(1.8)',
              scrollTrigger: { trigger: accents[0], start: 'top 92%', end: 'bottom 58%', scrub: .65 },
            })
        }

        if (layoutGroups.length) {
          layoutGroups.forEach((element, groupIndex) => {
            const column = groupIndex % 3
            const direction = (groupIndex + sectionIndex) % 2 === 0 ? -1 : 1
            gsap.fromTo(element,
              {
                x: direction * (55 + column * 18),
                y: 50 + column * 24,
                z: -90 - column * 45,
                rotateY: direction * (5 + column * 2),
                rotateX: 4 + column * 2,
                scale: .94,
              },
              {
                x: 0, y: 0, z: 0, rotateY: 0, rotateX: 0, scale: 1, ease: 'none',
                scrollTrigger: {
                  trigger: element,
                  start: 'top 96%',
                  end: 'top 42%',
                  scrub: .9 + groupIndex * .035,
                },
              })
          })
        }

        images.forEach((image, imageIndex) => {
          const direction = imageIndex % 2 === 0 ? 1 : -1
          gsap.fromTo(image,
            { scale: 1.25, xPercent: 13 * direction, yPercent: -12, rotateY: 12 * direction, rotateX: 6, clipPath: 'inset(12% 12% 12% 12% round 28px)' },
            {
              scale: 1.04, xPercent: 0, yPercent: 6, rotateY: -6 * direction, rotateX: -2, clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none',
              scrollTrigger: { trigger: image, start: 'top bottom', end: 'bottom top', scrub: 1.1 },
            })
        })

        if (sectionIndex > 0 && sectionIndex < sections.length - 1) {
          gsap.to(section.querySelector(':scope > *') || section, {
            y: -38,
            scale: .985,
            ease: 'none',
            scrollTrigger: { trigger: section, start: 'bottom 55%', end: 'bottom top', scrub: 1 },
          })
        }
      })

      gsap.fromTo('footer .footer-top > *',
        { autoAlpha: 0, y: 60, rotateX: 12 },
        {
          autoAlpha: 1, y: 0, rotateX: 0, stagger: .1, ease: 'power2.out',
          scrollTrigger: { trigger: 'footer', start: 'top 90%', end: 'top 48%', scrub: .8 },
        })
      gsap.fromTo('footer .footer-bottom', { autoAlpha: 0, y: 25 }, {
        autoAlpha: 1, y: 0,
        scrollTrigger: { trigger: 'footer', start: 'top 62%', end: 'top 35%', scrub: .6 },
      })

    })

    media.add('(max-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      gsap.to('.global-scroll-progress span', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: .2 },
      })
      gsap.utils.toArray('main section img:not(.no-scroll-motion)').forEach((image) => {
        gsap.fromTo(image, { scale: 1.12, yPercent: -5 }, {
          scale: 1.02, yPercent: 5, ease: 'none',
          scrollTrigger: { trigger: image, start: 'top bottom', end: 'bottom top', scrub: .7 },
        })
      })
      ScrollTrigger.batch('main section h1, main section h2, main section .service-card, main section .step', {
        start: 'top 92%',
        onEnter: (items) => gsap.fromTo(items, { autoAlpha: 0, y: 45 }, { autoAlpha: 1, y: 0, stagger: .08, duration: .65 }),
      })
      ScrollTrigger.batch('main section p, main section .button, main section li, main section .why-points > div, main section .area-pills span, main section .faq-item', {
        start: 'top 94%',
        onEnter: (items) => gsap.fromTo(items,
          { autoAlpha: 0, x: (index) => index % 2 ? 28 : -28, y: 30, scale: .97 },
          { autoAlpha: 1, x: 0, y: 0, scale: 1, stagger: .045, duration: .6, ease: 'power2.out' }),
      })
    })

    return () => media.revert()
  }, [])

  return <div className="global-scroll-progress" aria-hidden="true"><span /></div>
}
