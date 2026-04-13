// components/ui/Motion.js
"use client";

import { motion } from "framer-motion";

// Animation variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export const hoverLift = {
  y: -5,
  transition: { duration: 0.3 },
};

export const hoverGlow = {
  scale: 1.02,
  boxShadow: "0 10px 30px rgba(245, 158, 11, 0.2)",
  transition: { duration: 0.3 },
};

// Scroll animations
export const scrollReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// Main Motion Components
export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionArticle = motion.article;
export const MotionButton = motion.button;
export const MotionSpan = motion.span;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionP = motion.p;
export const MotionImg = motion.img;

// Wrapper Components with default animations
export const FadeIn = ({ children, delay = 0, className = "" }) => (
  <MotionDiv
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeIn}
    transition={{ delay }}
    className={className}
  >
    {children}
  </MotionDiv>
);

export const FadeInUp = ({ children, delay = 0, className = "" }) => (
  <MotionDiv
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInUp}
    transition={{ delay }}
    className={className}
  >
    {children}
  </MotionDiv>
);

export const StaggerContainer = ({ children, className = "" }) => (
  <MotionDiv
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={staggerContainer}
    className={className}
  >
    {children}
  </MotionDiv>
);

export const StaggerItem = ({ children, className = "" }) => (
  <MotionDiv variants={staggerItem} className={className}>
    {children}
  </MotionDiv>
);

export const ScrollReveal = ({ children, className = "" }) => (
  <MotionDiv
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={scrollReveal}
    className={className}
  >
    {children}
  </MotionDiv>
);

// Card hover animation wrapper
export const HoverCard = ({
  children,
  className = "",
  hoverEffect = "lift",
}) => {
  const effects = {
    lift: hoverLift,
    scale: hoverScale,
    glow: hoverGlow,
  };

  return (
    <MotionDiv whileHover={effects[hoverEffect]} className={className}>
      {children}
    </MotionDiv>
  );
};

// Page transition wrapper
export const PageTransition = ({ children }) => (
  <MotionDiv
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </MotionDiv>
);

// Animated number counter
export const AnimatedNumber = ({ value, duration = 2, className = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span className={className}>{count}</span>;
};

// Export everything together
export default {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleUp,
  zoomIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
  hoverScale,
  hoverLift,
  hoverGlow,
  scrollReveal,
  MotionDiv,
  MotionSection,
  MotionArticle,
  MotionButton,
  MotionSpan,
  MotionH2,
  MotionH3,
  MotionP,
  MotionImg,
  FadeIn,
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  ScrollReveal,
  HoverCard,
  PageTransition,
  AnimatedNumber,
};
