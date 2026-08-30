"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Squares } from "@/components/ui/squares-background"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "EE Medical Supply",
      description: "Auth: JWT secured dashboards Users, Admins safe login access. Products Management: Add, edit, and remove products with featured and best-selling system. Order Tracking: Monitor active orders in real-time. Categories & Brands: Admin control. Coupon: percentage and fixed price system. Shipping management. Payment: Stripe and PayPal integration.",
      image: "/project-images copy/image copy 5.png",
      technologies: ["Next.js", "Tailwind CSS", "Redux", "RTK Query", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe", "PayPal", "Firebase"],
      liveUrl: "https://eemedicalsupply.com",
      githubUrl: "https://github.com/Alok4D/online-medicine-shop-frontend",
    },
    {
      title: "AI Meta Generator",
      description: "AI-powered keyword and title generation with real-time trend analysis. Multi-layout asset management workspace (Grid, List, Split View). Smart keyword analyzer with TM detection. Advanced keyword selection and CSV/TXT export. Secure dashboard with roles and subscriptions.",
      image: "/project-images copy/image copy 12.png",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Redux (RTK Query)", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe"],
      liveUrl: "https://metagen-ai-bd.vercel.app",
      githubUrl: "https://github.com/Alok4D/ai-meta-generator",
    },
    {
      title: "Axis Flare Enterprise",
      description: "Visa Management: Country-specific visas, processing times, and criteria. Activity Monitoring: Track sign-ups and travel plans. Subscription Management. Smart Journey Planner. Visa Analyzer with checklists. Route Comparison. Fully responsive design.",
      image: "/project-images copy/image copy 6.png",
      technologies: ["Next.js", "Tailwind CSS", "Redux", "RTK Query", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe", "Firebase"],
      liveUrl: "https://axisflare.tech",
      githubUrl: "https://github.com/Alok4D/axis-flare-frontend",
    },
    {
      title: "RepFix AI",
      description: "Responsive landing page with blogs, testimonials, FAQs, and stats. AI-powered dashboard featuring reputation sentiment analysis, chat, wallet, and support tickets. Marketplace system with service management and Stripe. Secure Admin CRM with RBAC. Business analytics.",
      image: "/project-images copy/image copy 2.png",
      technologies: ["Next.js", "Tailwind CSS", "Redux", "RTK Query", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe", "Firebase"],
      liveUrl: "https://repfix.ai",
      githubUrl: "https://github.com/Alok4D/repfix-frontend",
    },
    {
      title: "Smart ERP",
      description: "Real-time Synchronization with Socket.io. Advanced Role-Based Access Control (RBAC). Interactive POS System with smart search. Automatic Inventory Engine completing sales. Live Analytics Dashboard. Robust Security with JWT and RTK Query.",
      image: "/project-images copy/image copy 9.png",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Redux Toolkit", "TanStack Query", "JWT", "Tailwind CSS", "Zod"],
      liveUrl: "https://smart-erp-dashboard.vercel.app",
      githubUrl: "https://github.com/Alok4D/erp-inventory-frontend",
    },
    {
      title: "StayVista",
      description: "Role-Based Authentication: Secure registration, login, and JWT. Product Management: Admin room management (CRUD) and location tracking. Order & Payment System: Stripe payment gateway integration.",
      image: "/Screenshot 2025-09-25 172040.png",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Stripe", "Firebase", "TanStack Query", "vercel"],
      liveUrl: "https://stayvista-bd.vercel.app",
      githubUrl: "https://github.com/Alok4D/stayVista-frontend",
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
