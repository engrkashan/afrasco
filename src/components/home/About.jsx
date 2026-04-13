"use client";

import Card from "@/components/ui/Card";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  MotionDiv,
  ScrollReveal,
  fadeInLeft,
  fadeInRight,
  MotionSpan,
} from "@/components/ui/Motion";

const ValueCard = ({ icon, title, desc, index }) => {
  const Icon = icon;

  return (
    <StaggerItem>
      <HoverCard hoverEffect="lift">
        <Card
          variant="bordered"
          hover
          padding={false}
          className="text-center transition-all duration-300 h-full group"
        >
          <MotionDiv className="p-6">
            <MotionDiv
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              <Icon
                className="w-10 h-10 mx-auto mb-4 transition-colors duration-300"
                style={{ color: "var(--accent)" }}
                strokeWidth={1.5}
              />
            </MotionDiv>

            <h4
              className="font-bold mb-2 text-lg"
              style={{ color: "var(--primary)" }}
            >
              {title}
            </h4>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {desc}
            </p>
          </MotionDiv>
        </Card>
      </HoverCard>
    </StaggerItem>
  );
};

const StatCounter = ({ value, label, suffix = "", delay = 0 }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      <MotionDiv
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, type: "spring", stiffness: 100 }}
      >
        <div
          className="text-3xl md:text-4xl font-bold mb-2"
          style={{ color: "var(--accent)" }}
        >
          {value}
          {suffix}
        </div>
      </MotionDiv>
      <div className="text-sm" style={{ color: "var(--muted)" }}>
        {label}
      </div>
    </MotionDiv>
  );
};

export default function About() {
  const values = [
    {
      title: "Safety First",
      desc: "Strict adherence to safety standards on every project with comprehensive risk management.",
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
          />
        </svg>
      ),
    },
    {
      title: "Quality Focus",
      desc: "Premium materials and skilled craftsmanship guaranteed with rigorous quality control.",
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <circle cx="12" cy="12" r="6" strokeWidth="2" />
          <circle cx="12" cy="12" r="2" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Transparency",
      desc: "Clear communication and honest timelines with real-time project tracking.",
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
          />
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Reliability",
      desc: "On-time delivery with consistent results backed by our performance guarantee.",
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M21.801 10A10 10 0 1 1 17 3.335" />
          <path strokeWidth="2" d="m9 11 3 3L22 4" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: "15", suffix: "+", label: "Years of Excellence" },
    { value: "500", suffix: "+", label: "Projects Completed" },
    { value: "98", suffix: "%", label: "Client Satisfaction" },
    { value: "200", suffix: "+", label: "Expert Team Members" },
  ];

  return (
    <ScrollReveal
      id="about"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInUp delay={0.1}>
            <span
              className="text-sm font-semibold uppercase tracking-wider inline-block mb-3"
              style={{ color: "var(--accent)" }}
            >
              About Afrasco
            </span>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "var(--primary)" }}
            >
              Your Trusted Construction Partner
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <MotionDiv
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 mx-auto mb-6"
              style={{ backgroundColor: "var(--accent)" }}
            />
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              With over 15 years of experience in Saudi Arabia, Afrasco has
              built a reputation for delivering exceptional construction,
              plumbing, and electrical services with unwavering commitment to
              quality.
            </p>
          </FadeInUp>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <StaggerContainer>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((item, index) => (
                <ValueCard key={item.title} {...item} index={index} />
              ))}
            </div>
          </StaggerContainer>
        </div>

        {/* Stats Section */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </MotionDiv>
      </div>

      {/* Decorative Elements with animation */}
      <MotionDiv
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 right-0 w-64 h-64 rounded-full"
        style={{ backgroundColor: "var(--accent)" }}
      />
      <MotionDiv
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
        style={{ backgroundColor: "var(--accent)" }}
      />

      {/* Animated background pattern */}
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--accent) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </ScrollReveal>
  );
}
