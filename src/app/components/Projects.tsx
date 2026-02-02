import React from "react";

// ✅ Correct image imports (VERY IMPORTANT)
import thumb1 from "../../../images/thumb1.jpg";
import thumb2 from "../../../images/thumb2.jpg";
import thumb3 from "../../../images/thumb3.jpg";
import thumb4 from "../../../images/thumb4.jpg";
import thumb5 from "../../../images/thumb5.jpg";
import thumb6 from "../../../images/thumb6.jpg";

const projects = [
  {
    title: "Thumbnail Design 1",
    image: thumb1,
  },
  {
    title: "Thumbnail Design 2",
    image: thumb2,
  },
  {
    title: "Thumbnail Design 3",
    image: thumb3,
  },
  {
    title: "Thumbnail Design 4",
    image: thumb4,
  },
  {
    title: "Thumbnail Design 5",
    image: thumb5,
  },
  {
    title: "Thumbnail Design 6",
    image: thumb6,
  },
];

const Projects = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
