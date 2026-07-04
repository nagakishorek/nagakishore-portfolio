"use client";

import { motion } from "framer-motion";
import profile from "@/content/profile";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0d1117] text-white flex items-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-80 h-80 rounded-full border-4 border-blue-500 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-7xl font-bold">
            {profile.name?.split(" ").map((word) => word[0]).join("")}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            {profile.summary}
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-blue-400 text-4xl font-bold">10+</h3>
              <p className="text-gray-400 mt-2">Technical Skills</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-blue-400 text-4xl font-bold">3+</h3>
              <p className="text-gray-400 mt-2">Certifications</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-blue-400 text-4xl font-bold">5+</h3>
              <p className="text-gray-400 mt-2">Projects</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-blue-400 text-4xl font-bold">100%</h3>
              <p className="text-gray-400 mt-2">Learning Mindset</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}