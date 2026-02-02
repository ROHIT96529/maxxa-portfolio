import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const skills = [
  { name: 'Adobe Photoshop', level: 95 },
  { name: 'Adobe Illustrator', level: 90 },
  { name: 'ibis Paint', level: 88 },
  { name: 'Blender', level: 85 },
  { name: 'InDesign', level: 92 },
  { name: 'Graphic Design', level: 94 }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-gradient-to-br from-red-950 via-red-900 to-orange-950 text-white">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
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
              rotate: [0, -3, 3, 0]
            } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Skills & <span className="text-yellow-300">Expertise</span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mastering the tools and techniques to bring visions to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, x: 10 }}
              className="mb-6"
            >
              <div className="flex justify-between mb-2">
                <motion.span 
                  className="font-semibold text-lg"
                  whileHover={{ x: [0, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.name}
                </motion.span>
                <motion.span 
                  className="text-yellow-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 rounded-full relative"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                >
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-4xl font-black mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                150+
              </motion.h3>
              <p className="text-gray-300">Projects</p>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, 5, -5, 0],
                boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-4xl font-black mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                50+
              </motion.h3>
              <p className="text-gray-300">Clients</p>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                boxShadow: "0 0 30px rgba(234, 179, 8, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-4xl font-black mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                5+
              </motion.h3>
              <p className="text-gray-300">Years</p>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, 5, -5, 0],
                boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-4xl font-black mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                15
              </motion.h3>
              <p className="text-gray-300">Awards</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}