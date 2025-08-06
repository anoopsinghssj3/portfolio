import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code, Server } from "lucide-react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [animated, setAnimated] = useState(false);

  const frontendSkills = [
    { name: "React.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Next.js", level: 82 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 87 },
    { name: "Python", level: 80 },
    { name: "PostgreSQL", level: 85 },
    { name: "AWS", level: 75 },
  ];

  const tools = [
    "Git", "Docker", "Figma", "VS Code", "Postman", "Vercel"
  ];

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true);
    }
  }, [isInView, animated]);

  const SkillBar = ({ skill, color, delay }: { skill: { name: string; level: number }; color: string; delay: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span>{skill.name}</span>
        <span className="text-slate-400">{skill.level}%</span>
      </div>
      <div className="bg-slate-700 rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={animated ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <motion.div
            className="bg-secondary/50 rounded-xl p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-accent flex items-center">
              <Code className="mr-2" size={20} />
              Frontend Development
            </h3>
            
            <div>
              {frontendSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  color="bg-accent"
                  delay={index * 0.2}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div
            className="bg-secondary/50 rounded-xl p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-success flex items-center">
              <Server className="mr-2" size={20} />
              Backend Development
            </h3>
            
            <div>
              {backendSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  color="bg-success"
                  delay={index * 0.2}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Tools & Technologies */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-8 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                className="bg-secondary/50 px-4 py-2 rounded-full text-sm hover:bg-accent hover:text-white transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
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
