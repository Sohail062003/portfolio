import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectService from "../../services/project.service";

export default function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const handleFetchProjects = async () => {
      // Placeholder for future dynamic fetching logic
      try {
        const response = await ProjectService.getAllProjects();
        if (response.ok) {
          const data  = await response.json();
          setProjects(data.data.projects);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    handleFetchProjects();
  }, []);
  

  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-b from-white via-gray-50 to-indigo-50">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Featured <span className="text-indigo-600">Projects</span>
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="rounded-xl bg-white/70 backdrop-blur-lg border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={'/images/default-project.jpg'}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {p.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.stack.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <a
                  href={p.demo}
                  className="flex items-center gap-2 w-full justify-center py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>

                <a
                  href={p.github}
                  className="flex items-center gap-2 w-full justify-center py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                >
                  <Github size={18} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
