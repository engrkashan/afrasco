"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  MotionDiv,
  MotionFooter,
  MotionButton,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  hoverScale,
  hoverLift,
  StaggerContainer,
  StaggerItem,
  ScrollReveal,
} from "@/components/ui/Motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Plumbing",
    "Electrical Works",
    "Infrastructure",
    "Maintenance",
  ];

  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeInUp}
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--primary)" }}
    >
      {/* Animated Background Elements */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full"
        style={{ backgroundColor: "var(--accent)" }}
      />
      <MotionDiv
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
        style={{ backgroundColor: "var(--accent)" }}
      />

      {/* Animated grid pattern */}
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto py-16 px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* LEFT - BRAND */}
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            transition={{ delay: 0.2 }}
            className="md:col-span-2"
          >
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              <div
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--white)" }}
              >
                AFRA<span style={{ color: "var(--accent)" }}>SCO</span>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p
                className="mb-6 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Leading construction and contracting company in Saudi Arabia,
                delivering quality plumbing, electrical, infrastructure, and
                maintenance services since 2009.
              </p>
            </MotionDiv>

            {/* CONTACT INFO */}
            <StaggerContainer className="space-y-3 text-sm">
              <StaggerItem>
                <MotionDiv
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 group"
                >
                  <MotionDiv
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Phone
                      className="w-4 h-4"
                      style={{ color: "var(--accent)" }}
                    />
                  </MotionDiv>
                  <span style={{ color: "rgba(255,255,255,0.6)" }}>
                    +966 50 123 4567
                  </span>
                </MotionDiv>
              </StaggerItem>

              <StaggerItem>
                <MotionDiv
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 group"
                >
                  <MotionDiv
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Mail
                      className="w-4 h-4"
                      style={{ color: "var(--accent)" }}
                    />
                  </MotionDiv>
                  <span style={{ color: "rgba(255,255,255,0.6)" }}>
                    info@afrasco.com
                  </span>
                </MotionDiv>
              </StaggerItem>

              <StaggerItem>
                <MotionDiv
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 group"
                >
                  <MotionDiv
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapPin
                      className="w-4 h-4"
                      style={{ color: "var(--accent)" }}
                    />
                  </MotionDiv>
                  <span style={{ color: "rgba(255,255,255,0.6)" }}>
                    Riyadh, Saudi Arabia
                  </span>
                </MotionDiv>
              </StaggerItem>
            </StaggerContainer>
          </MotionDiv>

          {/* QUICK LINKS */}
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold mb-4" style={{ color: "var(--white)" }}>
              Quick Links
            </h4>

            <StaggerContainer className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <StaggerItem key={link.label}>
                  <MotionDiv whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className="block transition-colors duration-300"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                      }
                    >
                      {link.label}
                    </Link>
                  </MotionDiv>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </MotionDiv>

          {/* SERVICES */}
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-bold mb-4" style={{ color: "var(--white)" }}>
              Services
            </h4>

            <StaggerContainer className="space-y-2 text-sm">
              {services.map((service) => (
                <StaggerItem key={service}>
                  <MotionDiv whileHover={{ x: 5 }}>
                    <Link
                      href="#services"
                      className="block transition-colors duration-300"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                      }
                    >
                      {service}
                    </Link>
                  </MotionDiv>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </MotionDiv>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="py-6 text-center text-sm"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <MotionDiv
            whileHover={{ scale: 1.05 }}
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <p>© {new Date().getFullYear()} Afrasco. All rights reserved.</p>
          </MotionDiv>

          <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-white/60 hover:text-white group hover:bg-transparent!"
              icon={<ArrowUp className="w-4 h-4" />}
              iconPosition="left"
            >
              Back to Top
            </Button>
          </MotionDiv>
        </div>
      </MotionDiv>

      {/* Floating animated particles */}
      {[...Array(8)].map((_, i) => (
        <MotionDiv
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
          }}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            backgroundColor: "var(--accent)",
            top: `${10 + i * 10}%`,
            left: `${5 + i * 12}%`,
          }}
        />
      ))}
    </MotionDiv>
  );
};

export default Footer;
