"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BadgeShineProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const BadgeShine = ({ children, className, onClick }: BadgeShineProps) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-1.5 rounded-full border border-black/5 bg-neutral-100/50 px-4 py-1.5 text-sm text-neutral-700 transition-all duration-300 ease-in backdrop-blur-sm hover:border-black/10 hover:bg-neutral-200/50 dark:border-white/10 dark:bg-neutral-900/50 dark:text-neutral-300 dark:hover:border-white/20 dark:hover:bg-neutral-800/50",
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div 
          className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-500 ease-out group-hover:translate-x-[100%] group-hover:opacity-100"
          style={{
            width: '200%',
            left: '-50%'
          }}
        />
      </div>
      <div className="relative z-10 flex items-center gap-1.5">
        {children}
      </div>
    </motion.div>
  );
}; 