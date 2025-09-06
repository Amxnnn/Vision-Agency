import React, { useRef } from 'react'
import logo from '/images/logo2.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Footer = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Scroll animation for the three words
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
    })
    .from(".word-1", {
      y: 50,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".word-2", {
      y: 50,
      opacity: 0,
      ease: "power2.out",
    }, "-=0.3")
    .from(".word-3", {
      y: 50,
      opacity: 0,
      ease: "power2.out",
    }, "-=0.3")
  }, [])

  return (
    <footer ref={containerRef} className="bg-black text-white w-full">
      <div className="max-w-[1415px] mx-auto px-6 py-16 flex flex-col gap-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          <span className="word-1">Designing.</span> <span className="word-2">Developing.</span> <span className="word-3">Delivering.</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="flex items-center h-[47px] w-[144px] gap-4">
            <img src={logo} alt="Vision Logo" className=" w-auto object-cover h-full w-full" />
          </div>

          <nav className="flex flex-wrap items-center gap-5 text-base">
            <a href="mailto:amxnkamboj@gmail.com<" className="opacity-80 hover:opacity-100 transition-opacity">amxnkamboj@gmail.com</a>
            <span className="opacity-30">/</span>
            <a
              href="https://x.com/_aman_kamboj"
              target="_blank"
              rel="noreferrer noopener"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              X
            </a>
           
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8 flex items-center justify-between text-sm opacity-60">
          <p>© {new Date().getFullYear()} Vision Agency. All rights reserved.</p>
          <p>Made with care.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


