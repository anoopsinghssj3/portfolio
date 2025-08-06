import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code, Server, Palette, Database } from "lucide-react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [animated, setAnimated] = useState(false);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
      skills: [
        { name: "React.js", level: 90, color: "bg-accent" },
        { name: "TypeScript", level: 85, color: "bg-accent" },
        { name: "Tailwind CSS", level: 88, color: "bg-accent" },
        { name: "Next.js", level: 82, color: "bg-accent" },
      ]
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/30",
      skills: [
        { name: "Node.js", level: 87, color: "bg-success" },
        { name: "Python", level: 80, color: "bg-success" },
        { name: "Express.js", level: 85, color: "bg-success" },
        { name: "REST APIs", level: 88, color: "bg-success" },
      ]
    },
    {
      icon: Database,
      title: "Database & DevOps",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      skills: [
        { name: "PostgreSQL", level: 85, color: "bg-yellow-500" },
        { name: "MongoDB", level: 80, color: "bg-yellow-500" },
        { name: "Docker", level: 75, color: "bg-yellow-500" },
        { name: "AWS", level: 70, color: "bg-yellow-500" },
      ]
    },
    {
      icon: Palette,
      title: "Design & Tools",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/30",
      skills: [
        { name: "Figma", level: 85, color: "bg-purple-400" },
        { name: "UI/UX Design", level: 80, color: "bg-purple-400" },
        { name: "Photoshop", level: 75, color: "bg-purple-400" },
        { name: "Git", level: 90, color: "bg-purple-400" },
      ]
    }
  ];

  const tools = [
    "VS Code", "Postman", "Vercel", "GitHub", "Jira", "Slack", 
    "Chrome DevTools", "Webpack", "Vite", "ESLint", "Prettier"
  ];

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true);
    }
  }, [isInView, animated]);

  const SkillBar = ({ skill, delay }: { skill: { name: string; level: number; color: string }; delay: number }) => (
    <motion.div 
      className="mb-6 group"
      initial={{ opacity: 0, x: -20 }}
      animate={animated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="font-medium text-foreground group-hover:text-accent transition-colors duration-300">
          {skill.name}
        </span>
        <motion.span 
          className="text-muted-foreground font-semibold"
          initial={{ opacity: 0 }}
          animate={animated ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: delay + 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="relative bg-muted rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full ${skill.color} rounded-full relative`}
          initial={{ width: 0 }}
          animate={animated ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            animate={animated ? { x: ["0%", "100%", "0%"], opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            initial={{ opacity: 0 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-success rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                className={`bg-card border ${category.borderColor} rounded-2xl p-8 hover:border-opacity-60 transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="flex items-center mb-8"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className={`${category.bgColor} p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className={`${category.color} w-8 h-8`} />
                  </motion.div>
                  <h3 className={`text-xl font-semibold ${category.color}`}>
                    {category.title}
                  </h3>
                </motion.div>
                
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 0.2 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Tools & Technologies */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                className="bg-muted hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border border-border hover:border-accent hover:shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.05) }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  rotate: Math.random() > 0.5 ? 2 : -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}