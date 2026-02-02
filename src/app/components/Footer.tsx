import { motion } from 'motion/react';
import { Instagram, Youtube, MessageCircle, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/maxxa_gfx/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@Maxxa_Gfx', label: 'YouTube' },
    { icon: MessageCircle, href: 'https://discord.gg/bjTV6Tmc', label: 'Discord' }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-black"
          >
            <span className="text-white">MAXXA</span>
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> GFX</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 p-3 rounded-full hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-center"
          >
            <p className="flex items-center justify-center space-x-2">
              <span>Made with</span>
              <motion.span
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              <span>by MAXXA GFX</span>
            </p>
            <p className="mt-2">© 2026 All rights reserved</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}