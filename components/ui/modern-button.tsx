"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface ModernButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export const ModernButton = ({
  children,
  href,
  variant = "primary",
  className,
}: ModernButtonProps) => {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "group relative overflow-hidden rounded-full px-6 py-2.5 transition-all duration-300",
          variant === "primary" &&
            "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg",
          variant === "secondary" &&
            "border border-white/10 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10",
          className
        )}
      >
        {variant === "primary" && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute h-full w-[200%] translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-[50%]" />
          </div>
        )}

        {/* Button content */}
        <div className="relative flex items-center justify-center gap-2">
          {children}
        </div>
      </motion.div>
    </Link>
  );
}; 