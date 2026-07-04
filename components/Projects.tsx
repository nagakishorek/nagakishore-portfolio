"use client";
import projects from "@/content/projects";


export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-900 rounded-2xl border border-gray-800 p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((item) => (
                  <span
                    key={item}
                    className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-gray-600 hover:border-blue-500 py-3 rounded-lg font-semibold transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}