import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Navbar = () => {
  const barRef = useRef(null)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const el = barRef.current
    if (!el) return

    gsap.set(el, { y: 0 })

    let lastY = window.scrollY
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const currentY = window.scrollY
        const scrollingDown = currentY > lastY && currentY > 80
        if (scrollingDown) {
          gsap.to(el, { y: -100, duration: 0.3, ease: 'power2.out', overwrite: 'auto' })
        } else {
          gsap.to(el, { y: 0, duration: 0.35, ease: 'power2.out', overwrite: 'auto' })
        }
        lastY = currentY
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  
  return (
    <div ref={barRef} className="fixed Theading top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-black/5">
      <header className="w-full max-w-[1415px] mx-auto flex items-center sm:px-0 px-4 justify-between py-4">
        <img 
          src="/images/visionlogo.png" 
          alt="Logo" 
          className="h-[27px] w-[124px] object-cover cursor-pointer hover:opacity-80 transition-opacity" 
          onClick={scrollToTop}
        />
        <nav className="hidden md:flex items-center gap-[25px] text-[18px]">
          <button 
            className="hover:opacity-80 transition-opacity cursor-pointer" 
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button 
            className="hover:opacity-80 transition-opacity cursor-pointer" 
            onClick={() => scrollToSection('services')}
          >
            Services
          </button>
          <button 
            className="hover:opacity-80 transition-opacity cursor-pointer" 
            onClick={() => scrollToSection('pricing')}
          >
            Pricing
          </button>
        </nav>
        <button 
          className="h-[46px] w-[132px] text-[13px] rounded-full bg-black text-white hover:opacity-90 ml-auto md:ml-0 cursor-pointer"
          onClick={() => window.open('https://cal.com/amankamboj', '_blank')}
        >
          Start a Project
        </button>
      </header>
    </div>
  )
}

export default Navbar


