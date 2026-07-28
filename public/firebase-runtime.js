(() => {
  document.documentElement.dataset.firebaseRuntime = 'active'
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const header = document.querySelector('.site-header')
  const menuButton = document.querySelector('.menu-button')
  const navigation = document.querySelector('.nav-links')
  const backToTop = document.querySelector('.back-to-top')
  const progress = document.querySelector('.global-scroll-progress span')

  const closeMenu = () => {
    if (!menuButton || !navigation) return
    navigation.classList.remove('is-open')
    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.setAttribute('aria-label', 'Open menu')
    document.body.style.overflow = ''
  }

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const open = !navigation.classList.contains('is-open')
      navigation.classList.toggle('is-open', open)
      menuButton.setAttribute('aria-expanded', String(open))
      menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
      document.body.style.overflow = open ? 'hidden' : ''
    })
    navigation.addEventListener('click', closeMenu)
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu()
    })
  }

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
    })
  }

  const updateChrome = () => {
    const y = window.scrollY
    header?.classList.toggle('is-scrolled', y > 28)
    backToTop?.classList.toggle('is-visible', y > 520)
    if (progress) {
      const available = document.documentElement.scrollHeight - window.innerHeight
      progress.style.transform = `scaleX(${available > 0 ? Math.min(1, y / available) : 0})`
    }
  }

  if (!reducedMotion) {
    header?.animate(
      [
        { opacity: 0, transform: 'translate(-50%, -80px)' },
        { opacity: 1, transform: 'translate(-50%, 0)' },
      ],
      { duration: 750, easing: 'cubic-bezier(.2,.75,.25,1)', fill: 'both' },
    )

    const revealTargets = document.querySelectorAll(
      'main section h1, main section h2, main section .kicker, main section .eyebrow, ' +
      '.service-card, .photo-card, .step, .why-points > div, .quote-row, .local-card, ' +
      '.faq-item, .estimate-copy > *, .interior-service, .process-page-step, .reason-card, ' +
      '.service-detail-intro > *, .detail-steps article, .legal-content > *',
    )

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const target = entry.target
        const index = Number(target.dataset.runtimeIndex || 0)
        target.animate(
          [
            { opacity: 0, transform: `translate3d(${index % 2 ? 34 : -34}px, 64px, -80px) rotateX(7deg) scale(.96)` },
            { opacity: 1, transform: 'translate3d(0, 0, 0) rotateX(0) scale(1)' },
          ],
          {
            duration: 720,
            delay: Math.min(index % 4, 3) * 70,
            easing: 'cubic-bezier(.2,.72,.22,1)',
            fill: 'both',
          },
        )
        observer.unobserve(target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })

    revealTargets.forEach((target, index) => {
      target.dataset.runtimeIndex = String(index)
      observer.observe(target)
    })

    const parallaxImages = [...document.querySelectorAll(
      '.real-photo-card img, .service-image img, .photo-card img, .why-points img, ' +
      '.interior-hero-photo img, .interior-service-image img, .reason-card > img, .service-detail-photo img',
    )]

    let ticking = false
    const updateParallax = () => {
      const viewportHeight = window.innerHeight
      parallaxImages.forEach((image, index) => {
        const rect = image.parentElement.getBoundingClientRect()
        if (rect.bottom < -120 || rect.top > viewportHeight + 120) return
        const progressValue = (viewportHeight - rect.top) / (viewportHeight + rect.height)
        const offset = (progressValue - 0.5) * (index % 2 ? -34 : 34)
        const rotation = (progressValue - 0.5) * (index % 2 ? -2.2 : 2.2)
        image.style.transform = `translate3d(0, ${offset}px, 0) rotate(${rotation}deg) scale(1.08)`
      })
      ticking = false
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(updateParallax)
      }
    }, { passive: true })
    window.addEventListener('resize', updateParallax, { passive: true })
    updateParallax()
  }

  window.addEventListener('scroll', updateChrome, { passive: true })
  updateChrome()
})()
