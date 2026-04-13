"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const QUOTE_ICON = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
    />
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
    />
  </svg>
);

const STAR_ICON = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
    />
  </svg>
);

const TESTIMONIALS = [
  {
    name: "Ahmed Al-Rashid",
    role: "Property Developer",
    company: "Rashid Real Estate Group",
    text: "Afrasco delivered our commercial complex on time and within budget. Their professionalism and attention to detail are unmatched in the industry.",
    rating: 5,
    image: "/avatars/ahmed.jpg",
    project: "Commercial Complex, Riyadh",
  },
  {
    name: "Mohammed Al-Faisal",
    role: "Facility Manager",
    company: "Al-Faisal Industries",
    text: "We've been working with Afrasco for our maintenance contracts for 5 years. Reliable, responsive, and always delivering quality work.",
    rating: 5,
    image: "/avatars/mohammed.jpg",
    project: "Ongoing Maintenance Contract",
  },
  {
    name: "Khalid Al-Saud",
    role: "Industrial Director",
    company: "Saud Industrial Group",
    text: "The plumbing and electrical work Afrasco completed for our factory was exceptional. They handled the complexity with ease and expertise.",
    rating: 5,
    image: "/avatars/khalid.jpg",
    project: "Factory Infrastructure, Dammam",
  },
  {
    name: "Nora Al-Ghamdi",
    role: "Project Manager",
    company: "Ghamdi Construction",
    text: "Partnering with Afrasco was the best decision for our residential project. Their team's expertise and dedication to quality is truly commendable.",
    rating: 5,
    image: "/avatars/nora.jpg",
    project: "Luxury Villas, Jeddah",
  },
  {
    name: "Faisal Al-Otaibi",
    role: "Infrastructure Director",
    company: "Otaibi Holdings",
    text: "The highway development project was completed ahead of schedule thanks to Afrasco's efficient management and skilled workforce.",
    rating: 5,
    image: "/avatars/faisal.jpg",
    project: "Highway Development, Eastern Province",
  },
  {
    name: "Sara Al-Malki",
    role: "Operations Director",
    company: "Malki Contracting",
    text: "Afrasco's commitment to safety and quality standards sets them apart. They're our go-to contractor for all major projects.",
    rating: 5,
    image: "/avatars/sara.jpg",
    project: "Multiple Projects Across KSA",
  },
];

const Stars = ({ count = 5, size = "sm" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <STAR_ICON
          key={i}
          className={`${sizes[size]} transition-transform duration-300 hover:scale-110`}
          style={{ color: "var(--accent)", fill: "var(--accent)" }}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ item, index, isActive }) => {
  return (
    <Card
      variant="elevated"
      hover
      padding={false}
      className={`h-full transition-all duration-500 ${
        isActive ? "ring-2 ring-[var(--accent)] ring-offset-2" : ""
      }`}
    >
      <div className="p-8 relative overflow-hidden">
        {/* Decorative quote background */}
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <QUOTE_ICON
            className="w-32 h-32"
            style={{ color: "var(--accent)" }}
          />
        </div>

        {/* Quote icon */}
        <QUOTE_ICON
          className="w-10 h-10 mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{ color: "rgba(245, 158, 11, 0.4)" }}
        />

        {/* Testimonial text */}
        <p
          className="mb-6 leading-relaxed text-base relative z-10"
          style={{ color: "var(--muted)" }}
        >
          "{item.text}"
        </p>

        {/* Stars */}
        <Stars count={item.rating} size="sm" />

        {/* Client info */}
        <div
          className="mt-5 pt-4 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-3">
            {/* Avatar placeholder */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                backgroundColor: "rgba(245, 158, 11, 0.1)",
                color: "var(--accent)",
              }}
            >
              {item.name.charAt(0)}
            </div>

            <div className="flex-1">
              <div className="font-bold" style={{ color: "var(--primary)" }}>
                {item.name}
              </div>
              <div className="text-xs" style={{ color: "var(--accent)" }}>
                {item.role}
              </div>
            </div>
          </div>

          {/* Company and project */}
          <div className="mt-3">
            <div className="text-xs" style={{ color: "var(--muted)" }}>
              {item.company}
            </div>
            <div
              className="text-xs mt-1 flex items-center gap-1"
              style={{ color: "var(--accent)" }}
            >
              <span>📋</span> {item.project}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, TESTIMONIALS.length));
  };

  const visibleTestimonials = TESTIMONIALS.slice(0, visibleCount);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(245, 158, 11, 0.05)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(245, 158, 11, 0.05)" }}
        />

        {/* Quote marks scattered */}
        <div className="absolute top-40 left-20 opacity-5">
          <QUOTE_ICON className="w-24 h-24" />
        </div>
        <div className="absolute bottom-40 right-20 opacity-5">
          <QUOTE_ICON className="w-32 h-32" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: "var(--accent)" }}
            >
              Testimonials
            </span>
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "var(--accent)" }}
            />
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--primary)" }}
          >
            What Our Clients Say
          </h2>

          <div
            className="w-16 h-1 mx-auto mb-6 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />

          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Don't just take our word for it - hear from the clients who've
            experienced our commitment to excellence firsthand.
          </p>
        </header>

        {/* Rating Summary */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
            style={{ backgroundColor: "rgba(245, 158, 11, 0.1)" }}
          >
            <Stars count={5} size="md" />
            <span className="font-semibold" style={{ color: "var(--primary)" }}>
              5.0
            </span>
            <span style={{ color: "var(--muted)" }}>Average Rating</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((item, index) => (
            <div
              key={item.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <TestimonialCard
                item={item}
                index={index}
                isActive={activeIndex === index}
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < TESTIMONIALS.length && (
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              onClick={handleLoadMore}
              icon={<span>↓</span>}
              iconPosition="right"
            >
              Load More Testimonials
            </Button>
          </div>
        )}

        {/* Trust Indicators */}
        <div
          className="mt-16 pt-8 border-t text-center"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div
                className="text-2xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                500+
              </div>
              <div className="text-sm" style={{ color: "var(--muted)" }}>
                Happy Clients
              </div>
            </div>
            <div>
              <div
                className="text-2xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                98%
              </div>
              <div className="text-sm" style={{ color: "var(--muted)" }}>
                Satisfaction Rate
              </div>
            </div>
            <div>
              <div
                className="text-2xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                15+
              </div>
              <div className="text-sm" style={{ color: "var(--muted)" }}>
                Years of Trust
              </div>
            </div>
            <div>
              <div
                className="text-2xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                200+
              </div>
              <div className="text-sm" style={{ color: "var(--muted)" }}>
                Google Reviews
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
