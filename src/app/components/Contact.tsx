import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, Instagram, Youtube, MessageCircle } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'maxxagfx@gmail.com',
      href: 'mailto:maxxagfx@gmail.com',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+91 76900 53452',
      href: 'https://wa.me/917690053452',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@maxxa_gfx',
      href: 'https://www.instagram.com/maxxa_gfx/',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: Youtube,
      title: 'YouTube',
      value: '@Maxxa_Gfx',
      href: 'https://www.youtube.com/@Maxxa_Gfx',
      gradient: 'from-red-600 to-red-700'
    },
    {
      icon: MessageCircle,
      title: 'Discord',
      value: 'Join Server',
      href: 'https://discord.gg/bjTV6Tmc',
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black mb-6 text-white"
            animate={isInView ? { 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get in touch through any of these platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.title}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative overflow-hidden p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-transparent group cursor-pointer"
              >
                {/* Animated gradient border on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                />
                
                <div className="relative z-10 flex items-center space-x-4">
                  <motion.div
                    className={`bg-gradient-to-br ${contact.gradient} p-4 rounded-xl`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl font-bold text-white mb-1"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {contact.title}
                    </motion.h3>
                    <p className="text-gray-400 text-sm">{contact.value}</p>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${contact.gradient} opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-500`}
                  initial={{ opacity: 0 }}
                />
              </motion.a>
            );
          })}
        </div>

        {/* Additional animated decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.p 
            className="text-gray-500 text-lg"
            animate={{ 
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Available for freelance projects
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
