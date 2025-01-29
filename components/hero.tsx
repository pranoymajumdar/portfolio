"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Code2, Sparkles } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={ref}
      className="relative min-h-[100dvh] w-full overflow-hidden isolate"
    >

      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.6, 0.4] 
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-gradient-to-l from-blue-500/20 to-primary/20 blur-3xl"
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(var(--foreground) / 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(var(--foreground) / 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '64px 64px',
              maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
            }}
          />
        </div>

        {/* Radial Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, transparent 20%, var(--background))'
          }}
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-[100dvh] items-center justify-center">
        <div className="container">
          <motion.div
            style={{ y: textY }}
            className="flex flex-col items-center text-center gap-8 px-4"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-background/50 backdrop-blur-sm text-sm font-medium">
                <Code2 className="h-4 w-4" />
                Full Stack Developer
                <Sparkles className="h-4 w-4 text-yellow-500" />
              </span>
            </motion.div>

            {/* Name and Description */}
            <div className="space-y-4 max-w-4xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl/tight sm:text-5xl/tight md:text-6xl/tight lg:text-7xl/tight font-bold"
              >
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Pranoy Majumdar
                </span>
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-block ml-2"
                >
                  👋
                </motion.span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg/relaxed sm:text-xl/relaxed text-muted-foreground max-w-2xl mx-auto"
              >
                Transforming ideas into exceptional digital experiences. 
                Specialized in crafting modern, user-centric web applications 
                with cutting-edge technologies.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button 
                size="lg" 
                className="group"
                asChild
              >
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="glow" 
                size="lg" 
                className="group"
                asChild
              >
                <Link href="#contact">
                  Let&apos;s Talk
                  <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              {[
                { href: "https://github.com", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:your.email@example.com", icon: Mail, label: "Email" },
              ].map((social) => (
                <Link 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-2"
                >
                  <span className="absolute inset-0 rounded-full bg-primary/20 blur-lg opacity-0 transition-opacity group-hover:opacity-100" />
                  <social.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground relative z-10" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ 
              y: [0, 5, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-col items-center gap-1">
                <ChevronDown className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
            </div>
            <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
              Scroll
            </span>
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
