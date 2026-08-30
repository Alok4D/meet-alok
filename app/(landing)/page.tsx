import { HeroDemo } from "@/app/(landing)/_components/hero-demo"
import { MainHeader } from "@/app/(landing)/_components/main-header"
import { AboutSection } from "@/app/(landing)/_components/about-section"
import { SkillsSection } from "@/app/(landing)/_components/skills-section"
import { ExperienceSection } from "@/app/(landing)/_components/experience-section"
import { WhyChooseMeSection } from "@/app/(landing)/_components/why-choose-me-section"
import { ProjectsSection } from "@/app/(landing)/_components/projects-section"
import { TechnologiesSection } from "@/app/(landing)/_components/technologies-section"
import { ContactSection } from "@/app/(landing)/_components/contact-section"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MainHeader />
      <main>
        <HeroDemo />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <WhyChooseMeSection />
        <TechnologiesSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 lg:px-24 bg-[#000] text-center text-neutral-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Alok Roy. All rights reserved.</p>
      </footer>
    </div>
  )
}
