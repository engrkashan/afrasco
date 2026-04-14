"use client";

import { memo, useState } from "react";
import Image from "next/image";
import { SERVICES } from "../../constants";
import Card from "@/components/ui/Card";

const ServiceCard = memo(({ service, index, onHover }) => {
  const Icon = service.icon;

  return (
    <Card
      variant="bordered"
      hover
      padding={false}
      className="group h-full transition-all duration-300 overflow-hidden relative"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative h-48 overflow-hidden group-hover:scale-105 transition-transform duration-500">
        {service.image ? (
          <Image
            src={service.image}
            alt={service.title}
            width={500}
            height={500}
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-slate-100 flex items-center justify-center">
            <Icon size={48} className="text-slate-300" />
          </div>
        )}
      </div>

      <div className="p-6 relative z-10">
        {/* Icon with animated background */}
        <div className="relative mb-5">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rounded-2xl relative z-10"
            style={{
              backgroundColor: "var(--bg)",
              border: "1px solid var(--border)",
            }}
          >
            <Icon
              className="w-7 h-7 transition-all duration-300 group-hover:scale-110"
              style={{ color: "var(--accent)" }}
            />
          </div>
        </div>

        {/* Title with decorative number */}
        <div className="mb-3">
          <div className="flex items-start justify-between">
            <h3
              className="text-xl font-semibold transition-colors duration-300"
              style={{ color: "var(--primary)" }}
            >
              {service.title}
            </h3>
            <span
              className="text-4xl font-bold opacity-5 group-hover:opacity-10 transition-opacity duration-300"
              style={{ color: "var(--accent)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: "var(--muted)" }}
        >
          {service.desc}
        </p>

        {/* Features list (if available) */}
        {service.features && (
          <ul className="space-y-1 mb-4">
            {service.features.slice(0, 2).map((feature, idx) => (
              <li
                key={idx}
                className="text-xs flex items-center gap-2"
                style={{ color: "var(--muted)" }}
              >
                <span style={{ color: "var(--accent)" }}>✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
});

ServiceCard.displayName = "ServiceCard";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-white py-10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: "rgba(245, 158, 11, 0.05)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ backgroundColor: "rgba(245, 158, 11, 0.05)" }}
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center">
        {/* Enhanced Header */}
        <header className="text-center max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4 animate-fade-in">
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <span
              className="font-semibold text-sm uppercase tracking-wider text-[var(--accent)]"
            >
              What We Do
            </span>
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "var(--accent)" }}
            />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up text-[var(--primary)]"
          >
            Our Services
          </h2>

          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-1 rounded-full bg-[var(--accent)]"
            />
          </div>

          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-200 text-[var(--muted)]"
          >
            From concept to completion, we deliver a full spectrum of
            construction and contracting services with precision and trust.
          </p>
        </header>

        {/* Services Grid with staggered animation */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16 w-full">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                service={service}
                index={index}
                isHovered={hoveredIndex === index}
                onHover={setHoveredIndex}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Add animation keyframes */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </section>
  );
};

export default Services;
