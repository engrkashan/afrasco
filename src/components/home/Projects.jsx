"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const PROJECTS = [
  {
    title: "Commercial Complex",
    desc: "Multi-story commercial building in Riyadh featuring sustainable design and smart building technologies.",
    category: "Construction",
    image: "/home/project1.jpg",
    stats: { area: "50,000 m²", duration: "24 months", value: "SAR 120M" },
  },
  {
    title: "Highway Development",
    desc: "120km highway project in the Eastern Province connecting major industrial zones.",
    category: "Infrastructure",
    image: "/home/project2.jpg",
    stats: { area: "120 km", duration: "18 months", value: "SAR 250M" },
  },
  {
    title: "Luxury Villas",
    desc: "Residential villa compound in Jeddah with modern amenities and landscape design.",
    category: "Construction",
    image: "/home/project3.jpg",
    stats: { area: "25,000 m²", duration: "12 months", value: "SAR 80M" },
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
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <Card
        variant="default"
        hover={false}
        padding={false}
        className="group overflow-hidden h-full cursor-pointer"
        interactive
        onClick={() => onViewDetails(project)}
      >
        <div className="relative overflow-hidden">
          <div className="relative w-full h-80 overflow-hidden bg-gray-900">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadingComplete={() => setImageLoaded(true)}
            />

            {!imageLoaded && <div className="absolute inset-0 animate-pulse" />}

            <div className="absolute top-4 left-4 z-10">
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md bg-black/70 text-white">
                {project.category}
              </span>
            </div>

            <div className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
              {project.title}
            </h3>

            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--muted)" }}
            >
              {project.desc}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

/* ---------------- MAIN ---------------- */

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Featured Projects
            </h2>
          </header>

          {/* GRID WITH STAGGER ANIMATION */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
