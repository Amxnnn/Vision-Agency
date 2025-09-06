import React from 'react'
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Page1 = () => {
  const containerRef = useRef(null);

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
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
        end: "top 20%",
        scrub: true,
      },
    }).from(["#text1", "#text2", "#text3"], {
      y: 200,
      opacity: 0,
      ease: "power2.out",
    }).from(".paragraph-text", {
      opacity: 0,
      ease: "power2.out",
    }, "-=0.2")
    .from(".button-text", {
      opacity: 0,
      scale: 0.8,
      ease: "power2.out",
    }, "<");
  });

  return (
    <section ref={containerRef} className="w-full max-w-[1415px] mx-auto px-4 pt-10 sm:pt-16">
      <div className="flex md:flex-row flex-col justify-between gap-8 items-start">
        <h2 className="text-[32px] max-w-[800px] sm:text-[48px] flex flex-col justify-start items-start md:text-[56px] leading-[1.05]  tracking-tight">
          <div className='overflow-hidden' >
            <p id="text1"> At Vision Labs, we turn ideas</p>
          </div>
          <div className='overflow-hidden' >
          <p id="text2"> into impactful solutions that</p>
          </div>
          <div className='overflow-hidden' >
          <p id="text3"> drive progress.</p>
          </div>
        </h2>
        <div className="flex flex-col gap-6 md:pl-12">
          <p className="paragraph-text text-sm sm:text-base text-gray-700 max-w-[520px]">
            A creative web agency dedicated to building modern, responsive, and user-friendly digital experiences.
          </p>
          <div>
            <button 
              className="button-text h-[44px] w-[150px] rounded-full bg-[#171A17] text-white text-[14px] hover:opacity-90 cursor-pointer"
              onClick={() => scrollToSection('pricing')}
            >
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page1