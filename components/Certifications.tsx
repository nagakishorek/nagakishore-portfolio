"use client";

import certifications from "@/content/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen bg-black text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {cert.name}
              </h3>

              <p className="text-gray-300 mb-2">
                {cert.issuer}
              </p>

              <span className="text-blue-300 font-semibold">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}