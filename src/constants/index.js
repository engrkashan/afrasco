import {
  Wrench,
  Zap,
  Building2,
  HardHat,
  Shield,
  Users,
  Trophy,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

/* NAV */
export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* HERO STATS */
export const HERO_STATS = [
  { value: "50+", label: "Projects", icon: HardHat },
  { value: "100+", label: "Clients", icon: Users },
  { value: "150+", label: "Expert Workers", icon: Trophy },
];

/* CONTACT */
export const CONTACT_INFO = [
  { title: "Phone", value: "+966 53 020 7010", icon: Phone },
  { title: "Email", value: "info@afrasco.com", icon: Mail },
  { title: "Location", value: "Riyadh, Saudi Arabia", icon: MapPin },
];

/* PROJECTS */
export const PROJECTS = [
  {
    title: "Commercial Complex",
    desc: "Multi-story commercial building in Riyadh",
    category: "Construction",
    image: "/assets/project-building-ChhBlYRB.jpg",
  },
  {
    title: "Highway Development",
    desc: "120km highway project in Eastern Province",
    category: "Infrastructure",
    image: "/assets/project-infra-CPaHOdL-.jpg",
  },
  {
    title: "Luxury Villas",
    desc: "Residential villa compound in Jeddah",
    category: "Construction",
    image: "/assets/project-villa-BcBihap3.jpg",
  },
  {
    title: "Water Network",
    desc: "Industrial plumbing system",
    category: "Plumbing",
    image: "/assets/project-plumbing-MpQOLYn3.jpg",
  },
];

/* TESTIMONIALS */
export const TESTIMONIALS = [
  {
    name: "Ahmed Al-Rashid",
    role: "Property Developer",
    text: "Afrasco delivered our project on time with excellent quality.",
  },
  {
    name: "Mohammed Al-Faisal",
    role: "Facility Manager",
    text: "Reliable and professional maintenance services.",
  },
  {
    name: "Khalid Al-Saud",
    role: "Industrial Director",
    text: "Excellent electrical and plumbing execution.",
  },
];

export const SERVICES = [
  {
    title: "Plumbing Services",
    desc: "Complete plumbing solutions including installation, repair, and maintenance for residential and commercial properties.",
    icon: Wrench,
    image: "/services/plumbing.png",
  },
  {
    title: "Electrical Works",
    desc: "Professional electrical installations, wiring, panel upgrades, lighting systems, and power distribution with full safety compliance.",
    icon: Zap,
    image: "/services/electrical.png",
  },
  {
    title: "Infrastructure Projects",
    desc: "Large-scale civil engineering projects including roads, water networks, sewage systems, and urban infrastructure development.",
    icon: Building2,
    image: "/services/infrastructure.png",
  },
  {
    title: "Maintenance & Repair",
    desc: "Preventive maintenance, emergency repairs, and complete facility management solutions for long-term reliability.",
    icon: HardHat,
    image: "/services/maintenance.png",
  },
];
