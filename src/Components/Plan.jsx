import React, { useRef } from 'react'
import { CiCircleCheck } from "react-icons/ci"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Plan = () => {
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const subtextRef = useRef(null)
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
    // Heading animation
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "top 30%",
        scrub: true,
      },
    })
    .from(".heading-text", {
      y: 100,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".subtext-text", {
      y: 50,
      opacity: 0,
      ease: "power2.out",
    }, "-=0.5")
    .from(".pricing-cards", {
      y: 80,
      opacity: 0,
      scale: 0.95,
      ease: "power2.out",
      stagger: 0.15
    }, "-=0.3")
  }, [])

  return (
    <section id="pricing" ref={containerRef} className="w-full max-w-[1415px] mx-auto px-4 py-20 sm:py-32">
      <div className="w-full">
        {/* Line 1: Your Journey, (single centered line) */}
        <h1 className="heading-text text-center text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] leading-tight sm:leading-[1.05] font-bold text-black">
          Your Journey,
        </h1>

        {/* Line 2: subtext + Your Plan on the same line, centered together */}
        <div className="mt-2 sm:mt-4 flex justify-center">
          <div className="subtext-text inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 lg:gap-6">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 whitespace-nowrap text-center sm:text-left">
              Choose what works today and upgrade anytime.
            </p>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] leading-tight sm:leading-[1.05] font-bold text-black whitespace-nowrap">
              Your Plan
            </h2>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div 
            ref={el => cardsRef.current[0] = el}
            className="pricing-cards bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-300"
          >
            <h3 className="text-xl  text-gray-800 mb-2">Starter</h3>
            <div className="text-4xl font-bold text-gray-800 mb-4">$499</div>
            <p className="text-gray-600 mb-6">A sleek one-page design and development to get you online fast.</p>
            
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-4">What you will get</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CiCircleCheck size={22} className="text-gray-800" />
                  <span className="text-gray-700">1-page responsive website</span>
                </li>
                <li className="flex items-center gap-3">
                  <CiCircleCheck size={22} className="text-gray-800" />
                  <span className="text-gray-700">Custom design tailored to your brand</span>
                </li>
                <li className="flex items-center gap-3">
                  <CiCircleCheck size={22} className="text-gray-800" />
                  <span className="text-gray-700">Basic animations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CiCircleCheck size={22} className="text-gray-800" />
                  <span className="text-gray-700">Responsive layout</span>
                </li>
              </ul>
            </div>
            
            <button 
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
              onClick={() => window.open('https://cal.com/amankamboj', '_blank')}
            >
              Book a call
            </button>
          </div>

          {/* Professional Plan */}
          <div 
            ref={el => cardsRef.current[1] = el}
            className="pricing-cards bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional</h3>
            <div className="text-4xl font-bold text-gray-800 mb-4">$999</div>
            <p className="text-gray-600 mb-6">Multi-page websites design and development with modern design & smooth interactions.</p>
            
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-4">What you will get</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CiCircleCheck size={22} className="text-gray-800" />
                  <span className="text-gray-700">5-page responsive website</span>
                </li>
                <li className="flex items-center gap-3">
                  <CiCircleCheck size={22} className="text-gray-800" />
                  <span className="text-gray-700">Modern, clean design</span>
                </li>
                <li className="flex items-center gap-3">
                  <CiCircleCheck size={22} className="text-gray-800" />
                  <span className="text-gray-700">Smooth animations & transitions</span>
                </li>
                <li className="flex items-center gap-3">
                  <CiCircleCheck size={22} className="text-gray-800" />
                  <span className="text-gray-700">SEO optimization</span>
                </li>
              </ul>
            </div>
            
            <button 
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
              onClick={() => window.open('https://cal.com/amankamboj', '_blank')}
            >
              Book a call
            </button>
          </div>

          {/* Premium Plan */}
          <div 
            ref={el => cardsRef.current[2] = el}
            className="pricing-cards bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium</h3>
            <div className="text-4xl font-bold text-gray-800 mb-4">$2,999</div>
            <p className="text-gray-600 mb-6">Feature-rich, highly interactive websites built to impress.</p>
            
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-4">What you will get</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CiCircleCheck size={22} className="text-gray-800" />
                  <span className="text-gray-700">5-page responsive website</span>
                </li>
                <li className="flex items-center gap-3">
                  <CiCircleCheck size={22} className="text-gray-800" />
                  <span className="text-gray-700">Fully custom UI/UX design</span>
                </li>
                <li className="flex items-center gap-3">
                  <CiCircleCheck size={22} className="text-gray-800" />
                  <span className="text-gray-700">Interactive animations & effects</span>
                </li>
                <li className="flex items-center gap-3">
                  <CiCircleCheck size={22} className="text-gray-800" />
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>
            </div>
            
            <button 
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
              onClick={() => window.open('https://cal.com/amankamboj', '_blank')}
            >
              Book a call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plan