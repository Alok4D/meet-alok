"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Squares } from "@/components/ui/squares-background"
import { ChevronLeft, ChevronRight, Briefcase, GraduationCap, Award, MapPin } from "lucide-react"

interface SlideItem {
  title: string;
  company: string;
  period: string;
  description: string;
  location?: string;
  points?: string[];
  technologies?: string[];
  cgpa?: string;
  mapUrl?: string;
  certificateUrl?: string;
}

interface Slide {
  title: string;
  icon: React.ReactNode;
  items: SlideItem[];
}

export function ExperienceSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: Slide[] = [
    {
      title: "Experience",
      icon: <Briefcase className="w-8 h-8" />,
      items: [
        {
          title: "Frontend Developer",
          company: "SM Technology",
          period: "Dec 2025 – May 2026",
          location: "Plot D-5, Road- 10, Block- D, Banasree, Rampura, Dhaka 1219",
          description: "",
          points: [
            "Managed multiple projects and handled client communication effectively.",
            "Built responsive and user-friendly web applications using Next.js, React.js, Redux, and RTK Query.",
            "Collaborated closely with backend developers to ensure smooth API integration and consistent data flow.",
            "Worked on projects for international clients, gathering requirements and providing consistent progress updates.",
            "Maintained clean, scalable, and maintainable code following modern development best practices.",
            "Contributed effectively in a team environment by coordinating tasks and solving technical issues."
          ],
          technologies: ["Next.js", "React.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "RTK Query", "Tailwind CSS", "shadcn/ui", "React Hook Form", "Zod", "Axios", "Framer Motion", "GSAP", "Git", "GitHub"]
        }     
      ]
    },
    {
      title: "Education",
      icon: <GraduationCap className="w-8 h-8" />,
      items: [
        {
          title: "Bachelor of Science in Computer Science & Engineering (CSE)",
          company: "Northern University Bangladesh",
          period: "2026 - Present",
          mapUrl: "https://maps.app.goo.gl/YdqEHLnADanEinbr5",
          description:
            "Currently pursuing a Bachelor's degree in Computer Science & Engineering (CSE) with a focus on Software Development, Programming, and Modern Web Technologies. Passionate about building real-world full-stack projects and continuously learning new technologies."
        },
        {
          title: "Diploma in Computer Science Technology",
          company: "Dinajpur Polytechnic Institute, Dinajpur",
          period: "2021 - 2022",
          cgpa: "3.45 / 4.00",
          mapUrl: "https://maps.app.goo.gl/Bufk2M45Ve4yK7Qa8",
          description:
            "Currently pursuing a Diploma in Computer Science Technology with a focus on Programming, Software Development, Database Management, and Web Technologies. Actively building real-world projects and improving problem-solving skills."
        },
        {
          title: "SSC (Science) – Secondary School Certificate",
          company: "Rangamati High School",
          period: "2020 – 2021",
          mapUrl: "https://maps.app.goo.gl/MmnTsnU2vSEzbij97",                  
          cgpa: "5.00 / 5.00",
          description:
            "Completed Secondary School Certificate in Science with excellent academic performance and a strong foundation in Mathematics, Physics, and Computer fundamentals."
        }
      ]
    },
    {
      title: "Certificates",
      icon: <Award className="w-8 h-8" />,
      items: [
        {
          title: "Complete Web Development Course",
          company: "Course Certificates",
          period: "2022",
          certificateUrl: "https://drive.google.com/file/d/1Y2eSJ_QRe9N8B5ICbl6zEZ7FNa7DHzSX/view",
          description:
            "Successfully completed a comprehensive web development course covering HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS, including practical hands-on projects and real-world application development."
        },
        {
          title: "English Communication Skills",
          company: "Course Certificates",
          period: "2022",
          certificateUrl: "https://drive.google.com/drive/u/0/home",
          description:
            "Completed an English communication skills course focused on improving speaking, listening, reading, and professional communication abilities for personal and workplace development."
        }
      ]
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="experience" className="relative py-20 px-8 md:px-16 lg:px-24 bg-black text-white overflow-hidden">
      {/* Squares Background */}
      <div className="absolute inset-0">
        <Squares 
          direction="right"
          speed={0.2}
          squareSize={60}
          borderColor="#222" 
          hoverFillColor="#111"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Journey
        </motion.h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              {slides[currentSlide].icon}
              <h3 className="text-2xl font-semibold">{slides[currentSlide].title}</h3>
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {slides[currentSlide].items.map((item, index) => {
                const isExperience = slides[currentSlide].title === "Experience";

                if (isExperience) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-[#0f1b21]/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group"
                    >
                      {/* Header Info */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20">
                              <Briefcase className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                              {item.title}
                            </h3>
                          </div>
                          <h4 className="text-lg font-semibold text-neutral-200">
                            {item.company}
                          </h4>
                          <p className="text-sm text-neutral-400">
                            {item.location}
                          </p>
                        </div>

                        {/* Date Badge */}
                        <div className="self-start md:self-auto px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-300 font-medium">
                          {item.period}
                        </div>
                      </div>

                      {/* Bullet Points */}
                      <ul className="space-y-4 mb-8">
                        {item.points?.map((point, pIndex) => (
                          <li
                            key={pIndex}
                            className="flex items-start gap-3 text-neutral-300 text-base md:text-[17px] leading-relaxed"
                          >
                            <span className="mt-2.5 w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0 group-hover:scale-125 transition-transform duration-300" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Badges */}
                      <div className="flex flex-wrap gap-2 md:gap-3 border-t border-white/10 pt-6">
                        {item.technologies?.map((tech) => (
                          <span
                            key={tech}
                            className="px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm text-neutral-300 font-medium hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-300 transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )
                }

                // Untouched original UI and styling for other slides
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                      <span className="text-sm text-neutral-400 mt-1 md:mt-0">{item.period}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      {item.mapUrl ? (
                        <a
                          href={item.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium transition-colors group/map"
                        >
                          <span>{item.company}</span>
                          <MapPin className="w-3.5 h-3.5 opacity-70 group-hover/map:opacity-100 group-hover/map:translate-y-[-2px] transition-all duration-300" />
                        </a>
                      ) : item.certificateUrl ? (
                        <a
                          href={item.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium transition-colors group/link"
                        >
                          <span>{item.company}</span>
                          <Award className="w-3.5 h-3.5 opacity-70 group-hover/link:opacity-100 transition-all duration-300" />
                        </a>
                      ) : (
                        <p className="text-blue-400 font-medium">{item.company}</p>
                      )}
                      {item.cgpa && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                          CGPA: {item.cgpa}
                        </span>
                      )}
                    </div>
                    <p className="text-neutral-300 leading-relaxed">{item.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
