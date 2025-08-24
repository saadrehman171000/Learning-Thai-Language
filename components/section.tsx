"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
  staggerChildren?: boolean
}

export function Section({ 
  children, 
  className, 
  id, 
  delay = 0,
  staggerChildren = false 
}: SectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerChildren ? 0.1 : 0,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  }

  return (
    <motion.section
      id={id}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("py-16 md:py-24 relative", className)}
    >
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        variants={staggerChildren ? childVariants : undefined}
      >
        {staggerChildren ? (
          <motion.div variants={childVariants}>
            {children}
          </motion.div>
        ) : (
          children
        )}
      </motion.div>
    </motion.section>
  )
}
