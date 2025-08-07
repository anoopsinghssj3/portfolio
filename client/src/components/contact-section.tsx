import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "anoopsinghssj3@gmail.com",
      link: "mailto:anoopsinghssj3@gmail.com",
      color: "text-accent",
      bgColor: "bg-accent/10",
      description: "Best way to reach me"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Anoop Singh",
      link: "https://www.linkedin.com/in/anoop-singh-6b60a0294/",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      description: "Let's connect professionally"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@anoopsinghssj3",
      link: "https://github.com/anoopsinghssj3/",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      description: "Check out my repositories"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9174697005",
      link: "tel:+919174697005",
      color: "text-success",
      bgColor: "bg-success/10",
      description: "Available for quick calls"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-success rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-grid-pattern" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together to bring your ideas to life!
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center text-muted-foreground"
          >
            <MapPin className="w-5 h-5 mr-2" />
            <span>San Francisco, CA • Open to Remote</span>
          </motion.div>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={method.title}
                href={method.link}
                variants={itemVariants}
                className="group relative"
                onClick={(e) => e.preventDefault()}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-500 h-full hover:shadow-2xl">
                  {/* Icon */}
                  <motion.div
                    className={`${method.bgColor} p-4 rounded-xl mb-4 inline-block group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className={`${method.color} w-8 h-8`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-foreground font-medium mb-2">
                    {method.value}
                  </p>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                    {method.description}
                  </p>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/5 to-success/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form or CTA */}
        <motion.div
          className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.h3
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Ready to Start a Project?
          </motion.h3>

          <motion.p
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Whether you have a specific project in mind or just want to explore possibilities,
            I'd love to hear from you. Let's create something amazing together.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/919174697005"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              Send WhatsApp
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>

            <motion.a
              href="tel:+919174695165"
              className="group border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.div
                className="absolute inset-0 bg-accent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Schedule Call</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}