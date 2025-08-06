import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "alex@example.com",
      link: "mailto:alex@example.com",
      color: "text-accent"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Alex Thompson",
      link: "https://linkedin.com/in/alexthompson",
      color: "text-accent"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@alexthompson",
      link: "https://github.com/alexthompson",
      color: "text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Let's <span className="gradient-text">Connect</span>
        </motion.h2>
        
        <motion.p
          className="text-xl text-slate-300 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm always interested in new opportunities and exciting projects. 
          Let's discuss how we can work together!
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={method.title}
                href={method.link}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
                whileHover={{ y: -5 }}
                onClick={(e) => e.preventDefault()}
              >
                <div className="bg-secondary/50 rounded-xl p-6 hover:bg-secondary transition-all duration-300 h-full">
                  <IconComponent className={`mx-auto mb-4 ${method.color}`} size={32} />
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-slate-400 group-hover:text-white transition-colors duration-300">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
        
        <motion.a
          href="mailto:alex@example.com"
          className="bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 inline-block"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => e.preventDefault()}
        >
          Get In Touch
        </motion.a>
      </div>
    </section>
  );
}
