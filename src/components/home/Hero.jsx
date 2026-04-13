"use client";

import Link from "next/link";
import Image from "next/image";
import { HERO_STATS } from "@/constants";
import { ArrowRight, Phone, Trophy } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  MotionDiv,
  ScrollReveal,
} from "@/components/ui/Motion";

export default function Hero() {
  return (
    <ScrollReveal className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <MotionDiv
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/home/hero-home.png"
          alt="Hero background showing construction and engineering work"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
      </MotionDiv>

      {/* Overlay */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-r from-[rgba(15,23,42,0.92)] via-[rgba(15,23,42,0.75)] to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl text-white">
          <FadeInUp delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(245,158,11,0.15)] text-[var(--accent)] mb-6 backdrop-blur-sm">
              <Trophy size={16} />
              Saudi Arabia's Premier Contractor
            </div>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building the Future with{" "}
              <span className="text-[var(--accent)] relative inline-block">
                Quality
                <MotionDiv
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bottom-0 left-0 h-1 bg-[var(--accent)]"
                />
              </span>{" "}
              &{" "}
              <span className="text-[var(--accent)] relative inline-block">
                Trust
                <MotionDiv
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-0 left-0 h-1 bg-[var(--accent)]"
                />
              </span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="text-white/80 mb-8 text-lg md:text-xl leading-relaxed">
              Afrasco delivers excellence in plumbing, electrical works, and
              infrastructure development across the Kingdom of Saudi Arabia.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.5}>
            <div className="flex gap-4 flex-wrap">
              <HoverCard hoverEffect="glow">
                <Button
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  Get Quote
                </Button>
              </HoverCard>

              <HoverCard hoverEffect="scale">
                <Button
                  variant="outline"
                  size="lg"
                  icon={<Phone size={18} />}
                  iconPosition="left"
                >
                  Contact Us
                </Button>
              </HoverCard>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Stats */}
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-8 left-0 right-0"
      >
        <StaggerContainer className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HERO_STATS.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.label}>
                  <HoverCard hoverEffect="lift">
                    <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105">
                      <Icon
                        className="mx-auto mb-2 text-[var(--accent)]"
                        size={28}
                      />
                      <div className="text-2xl font-bold text-white">
                        {item.value}
                      </div>
                      <div className="text-sm text-white/80 mt-1">
                        {item.label}
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </MotionDiv>
    </ScrollReveal>
  );
}
