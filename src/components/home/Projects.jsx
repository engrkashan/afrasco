"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const PROJECTS = [
  {
    title: "Commercial Complex",
    desc: "A landmark development combining a vibrant commercial complex with elegantly designed luxury villas, crafted with world-class standards and timeless architecture.",
    category: "Construction",
    image: "/home/commercial-complex.jpeg",
    stats: {
      area: "50,000 m²",
      duration: "24 months",
      value: "SAR 120M",
    },
  },
  {
    title: "Electrical Infrastructure",
    desc: "On-site electrical works executed with precision, including wiring, panel installations, and power distribution systems to support modern construction projects.",
    category: "Electrical",
    image: "/home/electrical-work.jpg",
    stats: {
      area: "Industrial",
      duration: "16 months",
      value: "SAR 45M",
    },
  },
  {
    title: "Luxury Villas",
    desc: "Premium luxury villas built with precision and excellence, creating homes that offer comfort, elegance, and lasting value.",
    category: "Construction",
    image: "/home/luxury-villas.jpeg",
    stats: {
      area: "25,000 m²",
      duration: "12 months",
      value: "SAR 80M",
    },
  },
];

/* ---------------- ANIMATIONS ---------------- */

const sectionVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const modalOverlay = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalContent = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
};

/* ---------------- MODAL ---------------- */

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        variants={modalOverlay}
        initial="hidden"
        animate="show"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl"
          style={{ backgroundColor: "var(--white)" }}
          variants={modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            ×
          </button>

          <div className="relative h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <h2
              className="text-2xl font-bold mt-2 mb-4"
              style={{ color: "var(--primary)" }}
            >
              {project.title}
            </h2>

            <p className="mb-6" style={{ color: "var(--muted)" }}>
              {project.desc}
            </p>

            <div className="flex gap-4">
              <Button>Request Similar Project</Button>
              <Button variant="outline">Download Brochure</Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ---------------- CARD ---------------- */

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative h-[500px] rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
      onClick={() => onViewDetails(project)}
    >
      {/* Background Image with Zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        {/* Overlay Layers */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent opacity-90" />
      </motion.div>

      {/* Content Container */}
      <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
        {/* Category Badge - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-4"
        >
          <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/20 text-[var(--accent)]">
            {project.category}
          </span>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description - Animated Reveal */}
        <motion.div
          initial={false}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
            marginTop: isHovered ? 12 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <p className="text-white/70 text-sm leading-relaxed max-w-sm">
            {project.desc}
          </p>

          <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-white/50">
            <div className="flex flex-col">
              <span className="text-[var(--accent)]">Duration</span>
              <span>{project.stats.duration}</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-[var(--accent)]">Scale</span>
              <span>{project.stats.area}</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative Indicator */}
        <motion.div
          className="h-1 bg-[var(--accent)] mt-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? 60 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="section-padding relative overflow-hidden bg-[var(--primary)] py-10"
      >
        <div className="container relative z-10 flex flex-col items-center">
          <header className="text-center max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
              Featured Projects
            </h2>
          </header>

          {/* GRID WITH STAGGER ANIMATION */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onViewDetails={setSelectedProject}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Projects;
