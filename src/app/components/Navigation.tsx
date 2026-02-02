import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* LOGO + BRAND */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            <img
              src="/logo.png"
              alt="MAXXA GFX Logo"
              className="h-10 w-10 rounded-full object-cover border-2 border-white/20"
            />
            <div className="text-2xl font-black">
              <span className="text-white">MAXXA</span>
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                {" "}
                GFX
              </span>
            </div>
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-white hover:text-red-400 transition-colors font-semibold"
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all"
              onClick={() => scrollToSection("#contact")}
            >
              Hire Me
            </motion.button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-gradient-to-br from-red-950 via-black to-orange-950 z-40 md:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-white text-3xl font-bold hover:text-red-400 transition-colors"
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold text-xl hover:shadow-2xl hover:shadow-red-500/50 transition-all"
              onClick={() => scrollToSection("#contact")}
            >
              Hire Me
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
}
