"use client";

import { memo } from "react";
import { FileText } from "lucide-react";

const Quote = memo(() => {
  return (
    <section
      id="quote"
      className="py-10 bg-[#0B1B2B] text-white relative overflow-hidden"
    >
      <div className="container mx-auto max-w-2xl px-4 flex flex-col items-center text-center">
        {/* Header */}
        <header className="mb-12">
          <span className="text-[#FF8A3D] font-semibold text-sm uppercase tracking-wider">
            Free Estimate
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4">
            Request a Quote
          </h2>

          <p className="text-white/70 text-lg">
            Fill out the form below and our team will get back to you within 24
            hours.
          </p>
        </header>

        {/* Form */}
        <form
          className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Row */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-white mb-1.5 block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                maxLength={100}
                required
                className="w-full h-10 px-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-white mb-1.5 block">
                Phone
              </label>
              <input
                type="tel"
                placeholder="+966 5X XXX XXXX"
                maxLength={20}
                required
                className="w-full h-10 px-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-white mb-1.5 block">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              maxLength={255}
              required
              className="w-full h-10 px-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]"
            />
          </div>

          {/* Service */}
          <div>
            <label className="text-sm font-medium text-white mb-1.5 block">
              Service Needed
            </label>
            <select
              required
              className="w-full h-10 px-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]"
            >
              <option value="">Select a service</option>
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>Infrastructure</option>
              <option>Building Construction</option>
              <option>Maintenance & Repair</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium text-white mb-1.5 block">
              Project Details
            </label>
            <textarea
              rows={4}
              placeholder="Describe your project..."
              maxLength={1000}
              required
              className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#FF8A3D] hover:bg-[#ff7a24] text-white font-bold text-lg py-3 rounded-md transition"
          >
            <FileText className="w-5 h-5" />
            Submit Quote Request
          </button>
        </form>
      </div>
    </section>
  );
});

Quote.displayName = "Quote";

export default Quote;
