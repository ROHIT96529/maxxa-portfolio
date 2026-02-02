import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Palette, Lightbulb, Zap } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Visual Identity',
    description: 'Creating memorable brands that stand out in the market'
  },
  {
    icon: Lightbulb,
    title: 'Creative Strategy',
    description: 'Innovative solutions that drive engagement and results'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quality work delivered on time, every time'
  }
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black mb-6"
            animate={isInView ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            About <span className="text-red-600">Me</span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate graphic designer with 5+ years of experience crafting 
            beautiful and functional designs. My work combines creativity with strategy 
            to deliver impactful visual solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl hover:shadow-xl hover:shadow-red-200 transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block"
                >
                  <Icon className="w-12 h-12 text-red-600 mb-4" />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold mb-3"
                  whileHover={{ x: [0, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}