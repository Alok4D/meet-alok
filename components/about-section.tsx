"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { IconDownload } from "@tabler/icons-react"
import { PurpleFlowingLights } from "@/components/ui/purple-flowing-lights"

export function AboutSection() {


  const handleDownloadCV = () => {
    // Create a link element to trigger download
    const link = document.createElement('a')
    link.href = '/cv/alok-roy-resume.pdf' // You'll need to add your CV file to the public folder
    link.download = 'alok-roy-resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="relative py-20 px-8 md:px-16 lg:px-24 bg-[#0A0A0A] text-white overflow-hidden">
      {/* Purple Flowing Lights Background */}
      <div className="absolute inset-0">
        <PurpleFlowingLights />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-[450px] h-[450px] border-2 border-white/20 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm shadow-2xl">
              <img src="/about-image/Alok-profession-image.jpg" alt="Sree Alok Chandro" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white">Hello! I'm Sree Alok Chandro</h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              I'm a 22-year-old Computer Science student from Bangladesh who enjoys building modern and secure web applications. I love turning ideas into real working websites and learning new tools to make my projects better. I'm interested in becoming a Full-Stack Web Developer and exploring areas like cybersecurity and cloud technology.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              I work with both front-end and back-end development, creating web apps using React, Next.js, Node.js, and MongoDB. I enjoy building websites that are easy to use, look good, and work fast.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              When I'm not coding, I like exploring new technologies and learning new skills to improve my work. I enjoy sharing ideas with others and believe in always learning to stay updated with the latest tech trends.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                <span className="text-white font-medium">Age: 22</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                <span className="text-white font-medium">Location: Bangladesh</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                <span className="text-white font-medium">Experience: 6 Month</span>
              </div>
            </div>
            
            {/* CV Download Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                onClick={handleDownloadCV}
                className="bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-none px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <IconDownload className="w-5 h-5 mr-2" />
                Download My CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
