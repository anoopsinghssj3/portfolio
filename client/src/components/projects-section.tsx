import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import cloudAcademy from "/public/images/cloudcademy.png"

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "CloudAcademy",
      description: "Academic session website is developed as part of my internship project. It showcases a platform designed to deliver comprehensive IT training, real-world project experience to prepare students for successful careers.",
      image: cloudAcademy,
      technologies: ["React", "Node.js", "MongoDB", "render"],
      liveUrl: "https://nti21.onrender.com",
      githubUrl: "https://github.com/anoopsinghssj3/Nti12",
      category: "Mern Stack",
      featured: true
    },
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <motion.div
      variants={itemVariants}
      className={`group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-2xl ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image.replace(/w=800&h=500/, "w=400&h=300&q=75")}
          alt={`${project.title} interface`}
          className="w-full h-48 md:h-56 object-cover transition-transform duration-700"
          whileHover={{ scale: 1.1 }}
          loading="lazy"
        />

        <motion.div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <motion.div
          className="absolute top-4 left-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {project.category}
        </motion.div>

        {project.featured && (
          <motion.div
            className="absolute top-4 right-4 bg-success/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm flex items-center gap-1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.7 }}
          >
            Featured
          </motion.div>
        )}

        <motion.div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent/90 text-accent-foreground p-3 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted hover:bg-muted/80 text-foreground p-3 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="bg-muted hover:bg-accent hover:text-accent-foreground px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 border border-border hover:border-accent"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + techIndex * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-muted-foreground text-xs px-2">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-accent hover:text-accent/80 transition-colors duration-300 text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
              whileHover={{ x: 5 }}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </motion.a>
          </div>

          <motion.button
            className="text-muted-foreground hover:text-accent transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-success rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#"
            className="group inline-flex items-center bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <motion.div
              className="ml-3"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
