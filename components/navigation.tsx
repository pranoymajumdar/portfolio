"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  User2,
  FolderKanban,
  Mail,
  Menu,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const navItems = [
  {
    path: "/",
    name: "Home",
    icon: HomeIcon,
  },
  {
    path: "/about",
    name: "About",
    icon: User2,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: FolderKanban,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: Mail,
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  
  // Transform values for scroll-based animations
  const headerOpacity = useTransform(
    scrollY,
    [0, 50],
    ["0", "0.9"]
  );

  const headerBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  const scale = useTransform(
    scrollY,
    [0, 50],
    [1, 0.98]
  );

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
    >
      <motion.div
        className="relative"
        style={{
          scale,
        }}
      >
        {/* Background blur effect */}
        <motion.div
          className="absolute inset-0 bg-background/50"
          style={{
            opacity: headerOpacity,
            backdropFilter: headerBlur,
          }}
        />

        {/* Desktop Navigation */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between relative z-10">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link 
                href="/"
                className={cn(
                  "text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-300",
                  isScrolled && "scale-90"
                )}
              >
                PM
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-1 p-1">
              {navItems.map((item) => {
                const isActive = item.path === pathname;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onMouseOver={() => setHoveredPath(item.path)}
                    onMouseLeave={() => setHoveredPath(pathname)}
                    className={cn(
                      "relative px-4 py-2 text-sm transition-colors",
                      "hover:text-neutral-200",
                      isActive ? "text-neutral-100" : "text-neutral-400",
                    )}
                  >
                    <span>{item.name}</span>
                    {item.path === hoveredPath && (
                      <motion.div
                        className="absolute inset-0 -z-10 rounded-md bg-gradient-to-r from-violet-500/20 to-indigo-500/20 backdrop-blur-sm"
                        layoutId="navbar-hover"
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu */}
            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 hover:bg-accent rounded-md transition-colors">
                    <Menu className="h-5 w-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <nav className="flex flex-col gap-4 mt-12">
                    {navItems.map((item) => {
                      const isActive = item.path === pathname;
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.path}
                          href={item.path}
                          className={cn(
                            "flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-colors relative",
                            "hover:bg-accent",
                            isActive ? "text-primary font-medium" : "text-muted-foreground"
                          )}
                        >
                          <Icon className="h-4 w-4" />
                          <span>{item.name}</span>
                          {isActive && (
                            <motion.div
                              className="absolute left-0 w-1 h-6 bg-primary rounded-r-full"
                              layoutId="sidebar-active"
                              transition={{
                                type: "spring",
                                bounce: 0.25,
                                duration: 0.5,
                              }}
                            />
                          )}
                        </Link>
                      );
                    })}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Gradient Border */}
        <motion.div 
          className="absolute bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent"
          style={{
            opacity: headerOpacity
          }}
        />
      </motion.div>
    </motion.header>
  );
}
