"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { IconDownload } from "@tabler/icons-react"
import { PurpleFlowingLights } from "@/components/ui/purple-flowing-lights"
import Image from "next/image"

export function AboutSection() {


  const handleDownloadCV = () => {
    // Create a link element to trigger download
    const link = document.createElement('a')
    link.href = '/cv/MERN Alok-Resume  -  Frontend Developer.pdf'
    link.download = '/cv/MERN Alok-Resume  -  Frontend Developer.pdf'
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">    {/* justify-items-center */}
          {/* Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-[450px] h-[450px] border-2 border-white/20 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm shadow-2xl">
              <Image src="/about-image/Alok-profession-image.jpg" alt="Sree Alok Chandro" width={450} height={450}
              draggable={false}
              priority={true}
              className="w-full h-full object-cover" />
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
             A web designer and developer with 2 years of experience. My journey in programming began with a curiosity for how websites are built, and that spark led me to learn React, Tailwind CSS, and JavaScript. Over time, I’ve developed responsive websites and honed my problem-solving skills. Outside of programming, I enjoy Travel, Reading Books. These hobbies allow me to stay creative and energized and helps me approach my work with fresh ideas. I believe in continuous learning, and I’m always looking for opportunities to improve both professionally and personally.
            </p>
            {/* <p className="text-lg text-neutral-300 leading-relaxed">
              I work with both front-end and back-end development, creating web apps using React, Next.js, Node.js, and MongoDB. I enjoy building websites that are easy to use, look good, and work fast.
            </p> */}
            <p className="text-lg text-neutral-300 leading-relaxed">
             I have around 1 year of professional experience in MERN. And recently have been working remotely in a company for last 6 months as a Front-end Engineer. And like this, I would like to see myself as a magnificent Full-Stack Engineer in near future.
            </p>
         
            
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
                className="bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-none px-8 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
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
