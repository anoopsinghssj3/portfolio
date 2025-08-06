import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Coffee, Users, Zap } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Award, value: "50+", label: "Projects Completed", color: "text-accent" },
    { icon: Coffee, value: "5+", label: "Years Experience", color: "text-success" },
    { icon: Users, value: "25+", label: "Happy Clients", color: "text-yellow-500" },
    { icon: Zap, value: "100%", label: "Commitment", color: "text-purple-400" },
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
    <section id="about" className="py-20 px-4 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-success rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=450&q=80" 
                alt="Clean modern workspace with laptop and design tools" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                whileHover={{ scale: 1.02 }}
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-success/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-accent/30 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360] 
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
          
          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            >
              Crafting Digital Experiences
            </motion.h3>
            
            <motion.div variants={itemVariants} className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                With over 5 years of experience in web development, I specialize in creating 
                scalable, user-friendly applications that solve real-world problems. My journey 
                started with a Computer Science degree and has evolved through various challenging projects.
              </p>
              <p className="text-lg">
                I'm passionate about staying current with the latest technologies and best practices. 
                When I'm not coding, you'll find me contributing to open-source projects, mentoring 
                junior developers, or exploring new design trends.
              </p>
            </motion.div>
            
            {/* Skills Highlight */}
            <motion.div 
              variants={itemVariants}
              className="bg-card border border-border rounded-xl p-6 mt-8"
            >
              <h4 className="font-semibold mb-4 text-accent">Core Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {["React", "Node.js", "TypeScript", "UI/UX Design", "PostgreSQL"].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium border border-accent/20"
                    whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--accent))", color: "hsl(var(--accent-foreground))" }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Statistics Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="group text-center p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} bg-current/10 rounded-lg mb-4 group-hover:bg-current/20 transition-colors duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.div>
                <motion.div 
                  className={`text-3xl font-bold ${stat.color} mb-2`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1), type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}