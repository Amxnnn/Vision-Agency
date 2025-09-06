import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div className='overflow-hidden my-24' >
        <motion.div
            className="flex whitespace-nowrap"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, // slower for smoother scroll
            }}
        >
            <span className="text-[1rem] 
                            capitalize tracking-wider text-black pr-8">
            MOTION — DESIGN — IMPACT — INTERACTION — IMMERSIVE — DYNAMIC — CREATIVE — DIGITAL — FLOW — EXPERIENCE — PIXELS — FUTURE — STORY — VISUALS — INNOVATE — SEAMLESS — ENERGY — CONNECT — TRANSFORM — INSPIRE — EVOLVE — FLUID — BOLD — BEYOND — LIMITLESS —       
            </span>
            <span className="text-[1rem] 
                            capitalize tracking-wider text-black pr-8">
            MOTION — DESIGN — IMPACT — INTERACTION — IMMERSIVE — DYNAMIC — CREATIVE — DIGITAL — FLOW — EXPERIENCE — PIXELS — FUTURE — STORY — VISUALS — INNOVATE — SEAMLESS — ENERGY — CONNECT — TRANSFORM — INSPIRE — EVOLVE — FLUID — BOLD — BEYOND — LIMITLESS —        
            </span>
        
        </motion.div>
    </div>
  )
}

export default Marquee