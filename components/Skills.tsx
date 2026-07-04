"use client";
import skills from "@/content/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-8 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="bg-gray-900 rounded-2xl p-8 text-center
              hover:scale-105 hover:border-blue-500
              border border-gray-800
              transition duration-300"
            >

              <div className="text-blue-400 flex justify-center mb-5">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.name}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}