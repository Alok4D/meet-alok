"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Squares } from "@/components/ui/squares-background"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
      {
  title: "Cian Collective",
  description:
    "A faith-based SaaS platform empowering worship communities through transformative music ministry, elevating creators to share Christ’s message globally through love, faith, and connection.",
  image: "/project-images/image.png",
  technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "bcrypt", "shadcn/ui", "lenis"],
  liveUrl: "https://www.ciancollective.org",
  githubUrl: "#",
},
    {
      title: "EE Medical Supply",
      description:
        "Developed a comprehensive medicine-based eCommerce platform with secure ordering, product management, and user-friendly interface.",
      image: "/project-images/Screenshot 2026-05-21 212543.png",
      technologies: ["Next.js", "Tailwind CSS", "Redux", "RTK Query", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe", "PayPal", "Firebase"],
      liveUrl: "https://eemedicalsupply.com",
      githubUrl: "https://github.com/Alok4D",
    },
    {
      title: "Axis Flare Enterprise",
      description:
        "Developed a visa support and travel analysis platform providing travel insights, visa guidance, and journey reports for international routes.",
      image: "/project-images/axif-flare.png",
      technologies: ["Next.js", "Tailwind CSS", "Redux", "RTK Query", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe", "Firebase"],
      liveUrl: "https://axisflare.tech",
      githubUrl: "https://github.com/Alok4D/axis-flare-frontend",
    },
         {
    title: "StayVista (Hotel Booking Platform)",
    description:
      "StayVista – A professional hotel and room booking platform that provides users with secure online reservations and room listing features. Anyone can also add their building rooms and rent them out.",
    image: "/project-images/image copy 2.png",
    technologies: ["Next.js", "Tailwind CSS", "Redux", "RTK Query", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe", "Firebase"],
    liveUrl: "https://stayvista-live-2025-ce330.web.app",
    githubUrl: "https://github.com/Alok4D/client",
  },

    {
    title: "My Jewish Tales",
    description:
      "My Jewish Tales is a modern full-stack web application built for digital creators, authors, and storytelling platforms, showcase customized children’s books and receive secure payments or direct donations from supporters in a crowdfunding-style ecosystem.",
    image: "/project-images/Screenshot 2026-05-22 085640.png",
    technologies: ["Next.js", "Tailwind CSS", "Redux", "RTK Query", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe", "Firebase"],
    liveUrl: "https://www.myjewishtales.com",
    githubUrl: "https://github.com/Alok4D",
  },


    {
      title: "Clash Gambling",
      description:
        "Clash Gambling – A fully responsive online lottery and gambling platform that features live updates, lottery draw systems, casino games, and betting functionalities with secure payments and an interactive user interface.",
      image: "/project-images/Screenshot 2026-05-21 213300.png",
      technologies: ["Next.js", "TypeScript", "JWT", "Stripe", "Tailwind CSS", "shadcn/ui"],
      liveUrl: "https://clash-gambling.vercel.app",
      githubUrl: "https://github.com/Alok4D/clash-gambling",
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
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  {(!project.githubUrl || project.githubUrl === "#") && (
                    <span className="px-2 py-0.5 bg-violet-500/10 border border-violet-500/30 rounded text-[10px] font-medium text-violet-400 whitespace-nowrap">
                      Client Project
                    </span>
                  )}
                </div>
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
