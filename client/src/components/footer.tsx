import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const socialLinks = [
    {
      icon: Github,
      link: "https://github.com/alexthompson",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      link: "https://linkedin.com/in/alexthompson",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      link: "https://twitter.com/alexthompson",
      label: "Twitter"
    },
    {
      icon: Mail,
      link: "mailto:alex@example.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-secondary/80 py-8 px-4 border-t border-slate-700" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold gradient-text">Alex Thompson</div>
            <p className="text-slate-400">Full Stack Developer & UI/UX Designer</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.link}
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => e.preventDefault()}
                  aria-label={social.label}
                >
                  <IconComponent size={20} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
        
        <motion.div
          className="border-t border-slate-700 mt-6 pt-6 text-center text-slate-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>&copy; 2024 Alex Thompson. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
