"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, UserRound } from "lucide-react";

const team = [
  {
    name: "Human Resourse",
    role: "HR",
    img: "",
    email: "",
    linkedin: "",
  },
];

function Avatar({ name, img }) {
  if (img) {
    return (
      <img
        src={img}
        alt={name}
        className="h-24 w-24 rounded-full object-cover ring-2 ring-orange-400 shadow-md"
      />
    );
  }
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="h-24 w-24 rounded-full grid place-items-center bg-gradient-to-br from-orange-500 to-rose-500 text-white shadow-lg">
      <span className="font-bold text-xl">{initials}</span>
    </div>
  );
}

function Card({ member }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col items-center rounded-3xl border border-gray-200/70 bg-white p-8 shadow-sm hover:shadow-xl"
    >
      <Avatar name={member.name} img={member.img} />
      <div className="mt-4 text-center">
        <p className="text-sm text-orange-600 font-medium">{member.role}</p>
      </div>
      <div className="absolute inset-x-0 -bottom-1 h-1 rounded-b-3xl bg-gradient-to-r from-orange-500 to-rose-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}

export default function Team() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-widest text-orange-600 font-semibold">
            Want to join the team?
          </p>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Connect With the Best!
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            Join the team powering innovation, culture, and connectivity at
            Xtreme Wireless.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4">
          <a
            href="/career"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3 text-sm font-medium text-white shadow-lg hover:opacity-90 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
