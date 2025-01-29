"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedGradientText = ({
  children,
  className,
}: AnimatedGradientTextProps) => {
  return (
    <motion.span
      className={cn(
        "animate-gradient bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 bg-[200%_auto] bg-clip-text text-transparent",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.span>
  );
}; 