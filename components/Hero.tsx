"use client";
import profile from "@/content/profile";
import contact from "@/content/contact";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl"
      >
        <p className="text-blue-500 uppercase tracking-[0.35em] mb-4">
          Welcome
        </p>

        <h1 className="text-6xl md:text-8xl font-black">
          {profile.name}
        </h1>

        <div className="mt-6 text-3xl text-blue-400 font-semibold">
          <TypeAnimation
            sequence={[
              profile.title,
              2000,
              "AWS Cloud Engineer",
              2000,
              "Docker & Kubernetes",
              2000,
              "Terraform Specialist",
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </div>

        <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-8">
          {profile.summary}
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-600 hover:border-blue-500 hover:text-blue-400 px-8 py-4 rounded-xl transition"
          >
            Contact Me
          </a>

          <a
            href={contact.resume}
            download
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Download Resume
          </a>
        </div>

        <div className="flex justify-center gap-8 mt-14 text-4xl text-gray-400">
          <a href={contact.github}
             target="_blank"
             rel="noopener noreferrer">
            <FaGithub className="hover:text-white transition" />
          </a>

          <a href={contact.linkedin}
             target="_blank"
             rel="noopener noreferrer"
             >
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>

          <a href='mailto:${contact.email}'>
            <FaEnvelope className="hover:text-red-500 transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}