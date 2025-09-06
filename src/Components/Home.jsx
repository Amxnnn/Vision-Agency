import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap-trial/SplitText'
gsap.registerPlugin(useGSAP, SplitText)
import Navbar from './Navbar'

const Home = () => {
  const headingRef = useRef(null)
  const mediaSwapRef = useRef(null)

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
    if (headingRef.current) {
      // Create SplitText instance
      const split = new SplitText(headingRef.current, {
        type: "lines",
        linesClass: "split-line"
      })

      // Set initial state - lines are invisible and slightly moved up
      gsap.set(split.lines, {
        y: 50,
        opacity: 0
      })

      // Set initial state for MediaSwap
      gsap.set(mediaSwapRef.current, {
        opacity: 0,
        y: 30
      })

      // Create timeline for line-by-line animation
      const tl = gsap.timeline({
        delay: 0.5
      })

      // Animate each line with stagger
      tl.to(split.lines, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2
      })
      .from(".Stext", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2
      }, "-=0.8")
      .from(".Theading", {
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2
      }, "-=0.6")
      .to(mediaSwapRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.4")

      // Cleanup function
      return () => {
        split.revert()
      }
    }
  }, [])

  return (
    <div className="w-full pb-12 bg-white text-black">
      <Navbar />

      <main className="w-full pt-16 ">
        <section className="max-w-[1000px] mx-auto text-center mt-20 sm:mt-24 px-4">
          <p className="text-xs Theading sm:text-sm text-gray-500 flex items-center justify-center gap-2"> 
            <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse shadow-lg shadow-white/50 glow-effect"></span> Design. Technology. Innovation.
          </p>
          <h1 
            ref={headingRef}
            className="text-[32px] sm:text-[48px] md:text-[60px] leading-tight md:leading-[1.05] font-semibold tracking-tight"
          >
            Your vision deserves more than a website — it deserves an experience
          </h1>
          <div className="mt-3 sm:mt-4 flex flex-col text-gray-600 max-w-[380px] mx-auto text-sm sm:text-base">
            <div className='overflow-hidden h-5 '>
            <p className='Stext'>From startups to enterprises, we help brands bring 
            </p>
            </div>
            <div className='overflow-hidden h-5 '>
             <p className='Stext'>their ideas to life with creativity and precision.
             </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
            <button 
              className="h-[40px] Theading sm:h-[44px] px-5 sm:px-7 rounded-full bg-black text-white text-[13px] sm:text-[14px] cursor-pointer hover:opacity-90"
              onClick={() => window.open('https://cal.com/amankamboj', '_blank')}
            >
              Start a Project
            </button>
            <button 
              className="h-[40px] Theading sm:h-[44px] px-5 sm:px-14 flex justify-center items-center rounded-full border border-gray-700 text-[13px] sm:text-[14px] cursor-pointer hover:opacity-80"
              onClick={() => scrollToSection('projects')}
            >
              Works
            </button>
          </div>
        </section>

        <div ref={mediaSwapRef}>
          <MediaSwap />
        </div>
      </main>
    </div>
  )
}

export default Home



const MediaSwap = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Auto-play the video when component mounts
      video.play().catch(e => {
        console.error("Video play error:", e);
      });
    }
  }, []);

  return (
    <section className="w-full mx-auto mt-8 sm:mt-12 px-4">
      <div className="relative w-full max-w-[1415px] mx-auto rounded-lg overflow-hidden h-[270px] sm:h-[360px] md:h-[520px] lg:h-[800px]">
        <video
          ref={videoRef}
          src="/images/v1.mp4"
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          autoPlay
        />
      </div>
    </section>
  );
};

