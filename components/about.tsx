"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Code2, Rocket, Zap, Brain, FolderKanban, Laptop } from "lucide-react"
import Link from "next/link"

const features = [
  {
    title: "Full Stack Development",
    description: "Building complete web applications with modern technologies and best practices.",
    icon: Laptop,
  },
  {
    title: "Problem Solver",
    description: "Turning complex challenges into elegant, efficient solutions.",
    icon: Brain,
  },
  {
    title: "Performance Focused",
    description: "Creating fast, responsive, and optimized applications.",
    icon: FolderKanban,
  },
  {
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code.",
    icon: Code2,
  },
  {
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and methodologies.",
    icon: Zap,
  },
  {
    title: "Innovation Driven",
    description: "Always exploring cutting-edge technologies and approaches.",
    icon: Rocket,
  },
]

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-20"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed max-w-3xl mx-auto">
              I&apos;m a passionate Full Stack Developer with a keen eye for design and a 
              commitment to creating seamless user experiences. With years of experience 
              in web development, I specialize in building modern, scalable applications.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group h-full"
              >
                <div className="relative h-full p-6 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl border border-primary/10 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex flex-col h-full space-y-4">
                    <div className="p-3 w-fit rounded-xl bg-primary/10">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2 flex-grow">
                      <h3 className="font-semibold text-xl">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 flex justify-center"
          >
            <Button asChild className="group" variant="glow" size="lg">
              <Link href="/about">
                Read More About Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
