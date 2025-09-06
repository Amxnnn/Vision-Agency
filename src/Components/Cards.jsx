import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Cards = () => {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  useGSAP(() => {
    // Scroll animation for cards
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
    }).from(".card-item", {
      y: 100,
      opacity: 0,
      scale: 0.9,
      ease: "power2.out",
      stagger: 0.1
    })
  }, [])

  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    
    gsap.to(cardRef.current, {
      duration: 0.3,
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.05,
      transformPerspective: 1000,
      transformOrigin: "center center",
      ease: "power2.out"
    })
  }

  const handleMouseLeave = (cardRef) => {
    if (!cardRef.current) return
    
    gsap.to(cardRef.current, {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      ease: "power2.out"
    })
  }

  return (
    <section id="services" ref={containerRef} className="w-full max-w-[1415px] mx-auto px-4 py-16 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Card 1 - Web Development */}
        <div 
          ref={el => cardsRef.current[0] = el}
          className="card-item bg-white rounded-2xl flex flex-col h-[60vh] p-6 sm:p-8 border-2 border-gray-300 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          onMouseMove={(e) => handleMouseMove(e, cardsRef.current[0])}
          onMouseLeave={() => handleMouseLeave(cardsRef.current[0])}
        >
          <div className="flex justify-between items-center mb-16">
            <span className="text-sm font-medium text-gray-600">01. Web Development</span>
            <div className="w-18 h-18  rounded-full flex items-center bg-[url('/images/eye.png')] bg-cover  justify-center">
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-medium text-black mb-4 leading-tight">
            Modern, fast & engaging websites.
          </h3>
          <p className="text-sm sm:text-base text-gray-700 flex-grow">
            At Vision Labs, we create responsive websites powered by React and Next.js, enhanced with GSAP animations and Three.js for immersive 3D experiences. Our focus is simple — clean design, smooth interactions, and performance that makes your brand stand out.
          </p>
          <button 
            className="w-full sm:w-1/2 px-10 py-4 bg-black text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity mt-auto cursor-pointer"
            onClick={() => window.open('https://cal.com/amankamboj', '_blank')}
          >
            Let's Talk
          </button>
        </div>

        {/* Card 2 - Web Design */}
        <div 
          ref={el => cardsRef.current[1] = el}
          className="card-item bg-white rounded-2xl flex flex-col h-[60vh] p-6 sm:p-8 border-2 border-gray-300 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          onMouseMove={(e) => handleMouseMove(e, cardsRef.current[1])}
          onMouseLeave={() => handleMouseLeave(cardsRef.current[1])}
        >
          <div className="flex justify-between items-center mb-16">
            <span className="text-sm font-medium text-gray-600">02. Web Design</span>
            <div className="w-18 h-18  rounded-full flex items-center bg-[url('/images/eye.png')] bg-cover  justify-center">
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-medium text-black mb-4 leading-tight">
            Designs that speak your brand's language.
          </h3>
          <p className="text-sm sm:text-base text-gray-700 flex-grow">
            We design clean, modern, and user-focused websites that reflect your brand identity and connect with your audience. Every layout, color, and detail is crafted with purpose.
          </p>
          <button 
            className="w-full sm:w-1/2 px-10 py-4 bg-black text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity mt-auto cursor-pointer"
            onClick={() => scrollToSection('pricing')}
          >
            See Pricing
          </button>
        </div>

        {/* Card 3 - Interactive Experiences */}
        <div 
          ref={el => cardsRef.current[2] = el}
          className="card-item bg-white rounded-2xl flex flex-col h-[60vh] p-6 sm:p-8 border-2 border-gray-300 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          onMouseMove={(e) => handleMouseMove(e, cardsRef.current[2])}
          onMouseLeave={() => handleMouseLeave(cardsRef.current[2])}
        >
          <div className="flex justify-between items-center mb-16">
            <span className="text-sm font-medium text-gray-600">03. Interactive Experiences</span>
            <div className="w-18 h-18  rounded-full flex items-center bg-[url('/images/eye.png')] bg-cover  justify-center">
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-medium text-black mb-4 leading-tight">
            Bringing websites to life with motion.
          </h3>
          <p className="text-sm sm:text-base text-gray-700 flex-grow">
            We create smooth animations, micro-interactions, and immersive effects that make your website more engaging and enjoyable to use.
          </p>
          <button 
            className="w-full sm:w-1/2 px-10 py-4 bg-black text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity mt-auto cursor-pointer"
            onClick={() => window.open('https://cal.com/amankamboj', '_blank')}
          >
            Work With Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cards
