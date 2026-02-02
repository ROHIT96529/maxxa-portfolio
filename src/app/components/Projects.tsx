import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Brand Identity Design',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1740138160889-29d711607d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmFuZGluZyUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3Njk5ODIzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Complete brand identity system for a modern tech startup'
  },
  {
    id: 2,
    title: 'Typography Poster',
    category: 'Print Design',
    image: 'https://images.unsplash.com/photo-1630777690337-07a3389e7ba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0ZXIlMjBkZXNpZ24lMjBjb2xvcmZ1bCUyMHR5cG9ncmFwaHl8ZW58MXx8fHwxNzcwMDQ0NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Bold typographic poster series for cultural event'
  },
  {
    id: 3,
    title: 'Web Interface Design',
    category: 'Digital Design',
    image: 'https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBVSSUyMG1vY2t1cHxlbnwxfHx8fDE3NzAwNDQ3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Modern and intuitive web application interface'
  },
  {
    id: 4,
    title: 'Package Design',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1748765968965-7e18d4f7192b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBkZXNpZ24lMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzAwMTY3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Eco-friendly packaging design for organic products'
  },
  {
    id: 5,
    title: 'Logo Collection',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1762787863004-767d5d7eac07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmclMjBpZGVudGl0eXxlbnwxfHx8fDE3NzAwNDQ3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Diverse logo designs for various industries'
  },
  {
    id: 6,
    title: 'Creative Workspace',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1756723903184-32fed816ea5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGdyYXBoaWMlMjBkZXNpZ24lMjB3b3Jrc3BhY2UlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzAwNDQ3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Behind the scenes of creative process'
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-24 bg-black text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black mb-6"
            animate={isInView ? { 
              scale: [1, 1.1, 1],
              rotate: [0, 2, -2, 0]
            } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Featured <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">Work</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of my best projects showcasing creativity and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
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
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
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
              </motion.div>
              {/* Animated border on hover */}
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
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
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