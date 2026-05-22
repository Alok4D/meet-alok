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
  cgpa?: string;
  mapUrl?: string;
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
          title: "Full-Stack Developer",
          company: "Rhombix Technologies Web Solutions (Remote)",
          period: "2024 - 2025",
          description:
            "Developed full-stack web applications using React, Next.js, and Node.js. Focused on building scalable and high-performance interfaces while following best coding practices.",
        },
        {
          title: "Frontend Developer",
          company: "Client Project (Freelance)",
          period: "2025",
          description:
            "Developed responsive web interfaces using React.js and Tailwind CSS. Contributed to multiple full-stack projects, including 'iNotebook' – a MERN Stack Notes App with JWT authentication and full CRUD functionality.",
        },
        {
          title: "React & NextJS Developer ",
          company: "Freelance",
          period: "2023 - Present",
          description:
            "Worked on both frontend and backend development using React, NextJS, Node.js, and MongoDB. Built full-stack web applications and continue to work with clients as a freelance developer.",
        },
      ],
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
            "Currently pursuing a Bachelor's degree in Computer Science & Engineering (CSE) with a focus on Software Development, Programming, and Modern Web Technologies. Passionate about building real-world full-stack projects and continuously learning new technologies.",
        },
        {
          title: "Diploma in Computer Science Technology",
          company: "Dinajpur Polytechnic Institute, Dinajpur",
          period: "2021 - 2022",
          cgpa: "3.45 / 4.00",
          mapUrl: "https://maps.app.goo.gl/Bufk2M45Ve4yK7Qa8",
          description:
            "Currently pursuing a Diploma in Computer Science Technology with a focus on Programming, Software Development, Database Management, and Web Technologies. Actively building real-world projects and improving problem-solving skills.",
        },
        {
          title: "SSC (Science) – Secondary School Certificate",
          company: "Rangamati High School",
          period: "2020 – 2021",
          mapUrl: "https://maps.app.goo.gl/MmnTsnU2vSEzbij97",                  
          cgpa: "5.00 / 5.00",
          description:
            "Completed Secondary School Certificate in Science with excellent academic performance and a strong foundation in Mathematics, Physics, and Computer fundamentals.",
        },
      ],
    },
    {
      title: "Certificates",
      icon: <Award className="w-8 h-8" />,
      items: [
        {
          title: "Complete Web Development Course",
          company: "Course Certificates",
          period: "2022",
          description:
            "Successfully completed a complete web development course covering HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS with hands-on projects.",
        },
        {
          title: "English Communication Skills",
          company: "Course Certificates",
          period: "2022",
          description:
            "Gained practical experience in modern web development using React.js, Node.js, and Tailwind CSS while working on real client projects.",
        },
        {
          title: "Full-Stack Web Development Certificate",
          company: "DataFlair",
          period: "2024",
          description:
            "Completed a comprehensive training program covering both frontend and backend development using MERN stack technologies.",
        },
         {
      title: "Diploma in Information Technology (DIT)",
      company: "Government Institute",
      period: "2023",
      description:
        "Completed a one-year diploma focused on computer systems, programming, and database management.",
    },
    {
      title: "English Language Proficiency Certificate",
      company: "Language Course",
      period: "2023",
      description:
        "Earned certification for English communication and writing skills, demonstrating strong proficiency for academic and professional use.",
    },
      ],
    },
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
          borderColor="#333" 
          hoverFillColor="#222"
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
              {slides[currentSlide].items.map((item, index) => (
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
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
