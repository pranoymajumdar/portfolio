"use client";


import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
  Rocket,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { BadgeShine } from "./ui/badge-shine";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { ModernButton } from "./ui/modern-button";

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] w-full overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient orbs with enhanced animation */}
        <div aria-hidden="true" className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/30 to-purple-500/30 rounded-full blur-[120px] opacity-20"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.3, 0.4],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/30 to-violet-500/30 rounded-full blur-[120px] opacity-20"
          />
        </div>

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />
      </div>

      <div className="container relative flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] gap-8 px-4 mx-auto">
        {/* Professional Role Badge */}
        <BadgeShine>
          <Sparkles className="h-4 w-4 text-violet-400" />
          <span className="bg-gradient-to-r from-neutral-200 via-white to-neutral-300 bg-clip-text text-transparent font-medium tracking-wide">
            Full Stack Developer
          </span>
          <Code2 className="h-4 w-4 text-violet-400" />
        </BadgeShine>

        {/* Main Content */}
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight font-bold tracking-tight">
              <span className="inline-block">
                Hi, I&apos;m{" "}
                <AnimatedGradientText>Pranoy Majumdar</AnimatedGradientText>
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-base/relaxed sm:text-lg/relaxed md:text-xl/relaxed text-muted-foreground max-w-[42rem]"
          >
            A Full Stack Developer crafting exceptional digital experiences.
            Specialized in building modern, user-centric web applications with
            cutting-edge technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <ModernButton href="#projects" variant="primary">
              <span className="font-medium">View Projects</span>
              <Rocket className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </ModernButton>

            <ModernButton href="#contact" variant="secondary">
              <span className="font-medium">Let&apos;s Talk</span>
              <Mail className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </ModernButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="flex items-center gap-6 mt-8"
          >
            {[
              { href: "https://github.com", icon: Github, label: "GitHub" },
              {
                href: "https://linkedin.com",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "https://instagram.com",
                icon: Instagram,
                label: "Instagram",
              },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full hover:bg-foreground/5 transition-all duration-300"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                <social.icon className="w-5 h-5 text-foreground/60 transition-colors duration-300 group-hover:text-foreground relative z-10" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
