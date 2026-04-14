"use client";

import {
  MotionDiv,
  fadeInDown,
  hoverLift,
  staggerContainer,
  staggerItem,
} from "@/components/ui/Motion";
import { NAV_ITEMS } from "@/constants";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      className="fixed top-0 w-full z-50"
    >
      <nav
        className={`transition-all duration-300 ${
          scrolled ? "bg-[#0f172a] shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container h-16 flex items-center justify-between">
          {/* Logo with hover animation */}
          <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#home"
              className="font-bold text-xl transition hover:opacity-80"
              style={{ color: "var(--white)" }}
            >
             <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </Link>
          </MotionDiv>

          {/* Desktop Navigation with stagger animation */}
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex gap-8"
          >
            {NAV_ITEMS.map((item, index) => (
              <MotionDiv
                key={item.label}
                variants={staggerItem}
                whileHover={hoverLift}
                custom={index}
              >
                <Link
                  href={item.href}
                  className="text-sm transition hover:text-[var(--accent)] text-white"
                >
                  {item.label}
                </Link>
              </MotionDiv>
            ))}
          </MotionDiv>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-3">

            <MotionDiv whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 rounded-lg transition text-white hover:bg-gray-100"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </MotionDiv>
          </div>
        </div>

        {/* Mobile Menu with animation */}
        <MotionDiv
          initial={false}
          animate={open ? "open" : "closed"}
          variants={{
            open: {
              height: "auto",
              opacity: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            },
            closed: {
              height: 0,
              opacity: 0,
              transition: { duration: 0.3, ease: "easeIn" },
            },
          }}
          className="lg:hidden overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.98)",
          }}
        >
          <MotionDiv
            variants={staggerContainer}
            initial="closed"
            animate={open ? "open" : "closed"}
            className="container mx-auto px-4 py-4 flex flex-col gap-3"
          >
            {NAV_ITEMS.map((item) => (
              <MotionDiv
                key={item.label}
                variants={staggerItem}
                whileHover={{ x: 10 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm py-2 px-3 rounded-lg transition hover:bg-gray-50 block"
                  style={{ color: "var(--primary)" }}
                >
                  {item.label}
                </Link>
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>
      </nav>
    </MotionDiv>
  );
};

export default Navbar;
