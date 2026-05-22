"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Squares } from "@/components/ui/squares-background"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "iNotebook – MERN Stack Notes App",
      description:
        "Developed a visa support and travel analysis platform providing travel insights, visa guidance, and journey reports for international routes.",
      image: "/project-images/axif-flare.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      liveUrl: "https://axisflare.tech",
      githubUrl: "https://github.com/Alok4D/axis-flare-frontend",
    },
    {
      title: "Rhombix Music Player",
      description:
        "A modern and stylish music player built with React + Vite. It allows users to create playlists, search songs, and control playback with a clean and responsive UI.",
      image: "/project-images/Screenshot 2026-05-21 212543.png",
      technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://eemedicalsupply.com",
      githubUrl: "https://github.com/Alok4D",
    },
    {
      title: "NewsMonkey – React Real-Time News App",
      description:
        "A responsive news platform fetching live articles from an API and categorizing them into sections like Business, Sports, and Technology.",
      image: "/project-images/Screenshot 2026-05-21 213300.png",
      technologies: ["React", "TypeScript", "Firebase", "Framer Motion", "Chakra UI"],
      liveUrl: "https://clash-gambling.vercel.app",
      githubUrl: "https://github.com/Alok4D/clash-gambling",
    },
     {
    title: "3D Shopping Platform (NEXUS)",
    description:
      "An immersive 3D e-commerce site built with React, Three.js, and Framer Motion. Features real-time product visualization and a modern neon UI.",
    image: "/project-images/Screenshot 2026-05-21 213757.png",
    technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://stayvista-live-2025-ce330.web.app",
    githubUrl: "https://github.com/Alok4D/client",
  },
  {
    title: "Get Me a Chai – Next.js Crowdfunding Platform",
    description:
      "A creator-support web app inspired by 'Buy Me a Coffee', enabling secure payments and creator donations. Built with Next.js, MongoDB, and Tailwind CSS.",
    image: "/project-images/Screenshot 2026-05-22 085640.png",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://www.myjewishtales.com",
    githubUrl: "https://github.com/Alok4D",
  },
  {
  title: "Password Manager 🔑",
  description:
    "A full-stack password manager application built with Next.js, Node.js, Express, MongoDB, and Tailwind CSS. Users can securely store, update, and manage their passwords in one place with an intuitive UI and JWT-based authentication.",
  image: "/project-images/Screenshot 2026-05-22 111949.png",
  technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "bcrypt"],
  liveUrl: "https://svariois.vercel.app",
  githubUrl: "https://github.com/Alok4D/svario-frontend-landing",
},

  ]

  return (
    <section id="projects" className="relative py-20 px-8 md:px-16 lg:px-24 bg-black text-white overflow-hidden">
      {/* Squares Background */}
      <div className="absolute inset-0">
        <Squares 
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="text-lg text-neutral-300 text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of my recent projects that showcase my skills in full-stack development, UI/UX design, and
          problem-solving.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain bg-gray-900"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    size="sm"
                    className="bg-white text-black hover:bg-white/90"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-neutral-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
