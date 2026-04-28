"use client";

import { useState, useRef } from "react";
import { Phone, Mail, MapPin, Send, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  FadeInUp,
  HoverCard,
  MotionDiv,
  MotionButton,
  fadeInLeft,
  fadeInRight,
} from "@/components/ui/Motion";

const theme = {
  bg: "#f8fafc",
  primary: "#0f172a",
  muted: "#64748b",
  accent: "#f59e0b",
  card: "#ffffff",
  border: "#e2e8f0",
};

const CONTACT_INFO = [
  {
    title: "Phone",
    value: "+966 53 535 3378",
    icon: Phone,
    link: "tel:+966 53 535 3378",
  },
  {
    title: "Email",
    value: "info@afrasco.com",
    icon: Mail,
    link: "mailto:info@afrasco.com",
  },
  {
    title: "Location",
    value: "Riyadh, Saudi Arabia",
    icon: MapPin,
    link: "https://maps.google.com",
  },
];

const ContactItem = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInLeft}
      transition={{ delay: index * 0.1 }}
    >
      <HoverCard hoverEffect="lift">
        <a href={item.link} className="flex items-start gap-4 group">
          <MotionDiv
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{ backgroundColor: "rgba(245,158,11,0.1)" }}
          >
            <Icon style={{ color: theme.accent }} className="w-5 h-5" />
          </MotionDiv>

          <div>
            <div className="font-bold text-lg" style={{ color: theme.primary }}>
              {item.title}
            </div>
            <div style={{ color: theme.muted }}>{item.value}</div>
          </div>
        </a>
      </HoverCard>
    </MotionDiv>
  );
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    title: "",
    message: "",
    website: "afrasco.com",
  });

  const formRef = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || serviceId === 'your_service_id') {
      console.error('EmailJS keys are not configured in .env');
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("error");
      }, 1000);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, {
      publicKey: publicKey,
    })
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setIsSubmitting(false);
        setSubmitStatus("error");
      });
  };

  return (
    <section id="contact" className="section-padding bg-white py-10">
      <div className="container flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mb-16">
          <FadeInUp delay={0.1}>
            <span
              className="text-sm font-semibold uppercase tracking-wider inline-block"
              style={{ color: theme.accent }}
            >
              Get In Touch
            </span>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4"
              style={{ color: theme.primary }}
            >
              Contact Us
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p style={{ color: theme.muted }} className="text-lg">
              Ready to start your project? Reach out to us today.
            </p>
          </FadeInUp>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl w-full">
          {/* LEFT SIDE */}
          <div>
            <div className="space-y-6 mb-8">
              {CONTACT_INFO.map((item, index) => (
                <ContactItem key={item.title} item={item} index={index} />
              ))}
            </div>

            {/* MAP */}
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInRight}
              transition={{ delay: 0.4 }}
            >
              <HoverCard hoverEffect="scale">
                <div
                  className="rounded-xl overflow-hidden h-64 border shadow-lg"
                  style={{ borderColor: theme.border }}
                >
                  <iframe
                    title="Afrasco Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463878.0306754775!2d46.54264055!3d24.725195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    style={{ border: 0 }}
                    className="rounded-xl"
                  />
                </div>
              </HoverCard>
            </MotionDiv>
          </div>

          {/* FORM */}
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInLeft}
            transition={{ delay: 0.2 }}
          >
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-xl p-8 space-y-5 border shadow-xl"
              style={{
                backgroundColor: theme.card,
                borderColor: theme.border,
              }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <MotionDiv
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    className="text-sm font-medium block mb-1.5"
                    style={{ color: theme.primary }}
                  >
                    Full Name
                  </label>
                  <MotionDiv
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full h-10 px-3 rounded-md border outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                      style={{
                        borderColor: theme.border,
                      }}
                      required
                    />
                  </MotionDiv>
                </MotionDiv>

                {/* Phone */}
                <MotionDiv
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label
                    className="text-sm font-medium block mb-1.5"
                    style={{ color: theme.primary }}
                  >
                    Phone Number
                  </label>
                  <MotionDiv
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+966 5X XXX XXXX"
                      className="w-full h-10 px-3 rounded-md border outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                      style={{ borderColor: theme.border }}
                    />
                  </MotionDiv>
                </MotionDiv>

                {/* Email */}
                <MotionDiv
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label
                    className="text-sm font-medium block mb-1.5"
                    style={{ color: theme.primary }}
                  >
                    Email Address
                  </label>
                  <MotionDiv
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="you@example.com"
                      className="w-full h-10 px-3 rounded-md border outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                      style={{ borderColor: theme.border }}
                      required
                    />
                  </MotionDiv>
                </MotionDiv>


                {/* Title */}
                <MotionDiv
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label
                    className="text-sm font-medium block mb-1.5"
                    style={{ color: theme.primary }}
                  >
                    Subject
                  </label>
                  <MotionDiv
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <input
                      name="title"
                      value={form.title}
                      onChange={handleChange}
                      type="text"
                      placeholder="Subject"
                      className="w-full h-10 px-3 rounded-md border outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                      style={{ borderColor: theme.border }}
                      required
                    />
                  </MotionDiv>
                </MotionDiv>

                {/* Message */}
                <MotionDiv
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label
                    className="text-sm font-medium block mb-1.5"
                    style={{ color: theme.primary }}
                  >
                    Message
                  </label>
                  <MotionDiv whileHover={{ scale: 1.01 }}>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full p-3 rounded-md border outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                      style={{ borderColor: theme.border }}
                      required
                    />
                  </MotionDiv>
                </MotionDiv>

                {/* Submit Button */}
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <MotionButton
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 font-bold text-lg rounded-md py-3 transition-all relative overflow-hidden"
                    style={{
                      backgroundColor: theme.accent,
                      color: theme.primary,
                    }}
                  >
                    <MotionDiv
                      animate={isSubmitting ? { rotate: 360 } : { rotate: 0 }}
                      transition={{
                        duration: 1,
                        repeat: isSubmitting ? Infinity : 0,
                      }}
                    >
                      <Send className="w-5 h-5" />
                    </MotionDiv>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </MotionButton>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <MotionDiv
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-3 p-3 rounded-md text-center text-sm font-medium"
                      style={{
                        backgroundColor: "rgba(34, 197, 94, 0.1)",
                        color: "#16a34a",
                        border: "1px solid rgba(34, 197, 94, 0.2)",
                      }}
                    >
                      ✓ Message sent successfully! We'll get back to you soon.
                    </MotionDiv>
                  )}

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <MotionDiv
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-3 p-3 rounded-md text-center text-sm font-medium flex items-center justify-center gap-2"
                      style={{
                        backgroundColor: "rgba(239, 68, 68, 0.1)",
                        color: "#dc2626",
                        border: "1px solid rgba(239, 68, 68, 0.2)",
                      }}
                    >
                      <AlertCircle className="w-4 h-4" />
                      Oops! Failed to send message. Please try again.
                    </MotionDiv>
                  )}
                </MotionDiv>
              </form>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
