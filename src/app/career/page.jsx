"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Send } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Careers() {
  const pathname = usePathname();

  const openings = [
    {
      title: "Sales Associate",
      location: "Columbus, OH",
      type: "Full-time",
      description:
        "Engage with customers, provide excellent service, and support daily store operations.",
      link: "#",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Re-render when route changes
    setIsLoading(false);
  }, [pathname]);

  function JobCard({ job }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4 }}
        className="group flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg"
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
          <p className="mt-1 text-sm text-orange-600 font-medium">
            {job.location} • {job.type}
          </p>
          <p className="mt-3 text-sm text-gray-600">{job.description}</p>
        </div>
        <div className="mt-6">
          <a
            href={job.link}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90 transition"
          >
            Apply Now <Send size={14} />
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-widest text-orange-600 font-semibold">
            Careers
          </p>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Join Xtreme Wireless
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            We’re looking for passionate, customer-focused individuals to grow
            with us. Explore open positions below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full place-items-center">
          {openings.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-sm text-gray-500">
            Don’t see a role that fits? We’d still love to hear from you.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3 text-sm font-medium text-white shadow-lg hover:opacity-90 transition"
          >
            Submit Your Resume <Briefcase size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
