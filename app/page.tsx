import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { PhotoGallery } from "@/components/photo-gallery"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <PhotoGallery />
      <Contact />
    </main>
  )
}
