import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const socialLinks = [
    {
      icon: Github,
      link: "https://github.com/alexthompson",
      label: "GitHub",
      color: "hover:text-purple-400"
    },
    {
      icon: Linkedin,
      link: "https://linkedin.com/in/alexthompson",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: Twitter,
      link: "https://twitter.com/alexthompson",
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      link: "mailto:alex@example.com",
      label: "Email",
      color: "hover:text-accent"
    }
  ];

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-success rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="px-4 py-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Brand Section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-2xl font-bold">
                <span className="gradient-text">Alex Thompson</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Full Stack Developer & UI/UX Designer passionate about creating 
                beautiful, functional web experiences that make a difference.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      className={`text-muted-foreground ${social.color} transition-all duration-300 p-2 rounded-lg hover:bg-muted`}
                      onClick={(e) => e.preventDefault()}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-2">
                {footerLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-accent transition-colors duration-300 text-left"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Ready to work together?
                </p>
                <motion.a
                  href="mailto:alex@example.com"
                  className="text-accent hover:text-accent/80 transition-colors duration-300 font-medium block"
                  onClick={(e) => e.preventDefault()}
                  whileHover={{ scale: 1.05 }}
                >
                  alex@example.com
                </motion.a>
                <p className="text-sm text-muted-foreground">
                  San Francisco, CA
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border px-4 py-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm flex items-center">
              <span>© 2024 Alex Thompson. Made with</span>
              <motion.div
                className="mx-1"
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ["hsl(var(--muted-foreground))", "hsl(var(--destructive))", "hsl(var(--muted-foreground))"]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.div>
              <span>& React</span>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center text-muted-foreground hover:text-accent transition-all duration-300 text-sm group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Back to top</span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}