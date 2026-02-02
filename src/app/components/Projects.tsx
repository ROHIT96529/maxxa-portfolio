import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    image: "/thumbnails/thumb1.jpg",
    description: "Complete brand identity system for a modern tech startup",
  },
  {
    id: 2,
    title: "Typography Poster",
    category: "Print Design",
    image: "/thumbnails/thumb2.jpg",
    description: "Bold typographic poster series for cultural event",
  },
  {
    id: 3,
    title: "Web Interface Design",
    category: "Digital Design",
    image: "/thumbnails/thumb3.jpg",
    description: "Modern and intuitive web application interface",
  },
  {
    id: 4,
    title: "Package Design",
    category: "Packaging",
    image: "/thumbnails/thumb4.jpg",
    description: "Eco-friendly packaging design for organic products",
  },
  {
    id: 5,
    title: "Logo Collection",
    category: "Branding",
    image: "/thumbnails/thumb5.jpg",
    description: "Diverse logo designs for various industries",
  },
  {
    id: 6,
    title: "Creative Workspace",
    category: "Photography",
    image: "/thumbnails/thumb6.jpg",
    description: "Behind the scenes of creative process",
  },
];

export function Projects() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const selectedProjectData = projects.find(
    (p) => p.id === selectedProject
  );

  return (
    <section id="projects" className="py-24 bg-black text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-6"
            animate={
              isInView
                ? { scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] }
                : {}
            }
            transition={{ duration: 1, delay: 0.3 }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Work
            </span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of my best projects showcasing creativity and innovation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedProject(project.id)}
              className="cursor-pointer group relative overflow-hidden rounded-2xl aspect-video"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h3
                    className="text-2xl font-bold"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 border-4 border-red-500 rounded-2xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && selectedProjectData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white text-black rounded-2xl max-w-4xl w-full overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.img
              src={selectedProjectData.image}
              alt={selectedProjectData.title}
              className="w-full h-96 object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            <div className="p-8">
              <motion.h3
                className="text-4xl font-bold mb-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {selectedProjectData.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-lg"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {selectedProjectData.description}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
