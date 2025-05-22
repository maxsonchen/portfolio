import Link from "next/link"
import { Github } from "lucide-react"
import MobileMenu from "@/components/mobile-menu"
import ProjectCard from "@/components/project-card"
import { projects } from "@/data/projects"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-10 md:mb-20">
          <div className="text-yellow-400 font-semibold">MaxsonChen();</div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-400">
                  About
                </Link>
              </li>
              <li className="relative">
                <Link href="/portfolio" className="text-white hover:text-yellow-400">
                  Portfolio / Projects
                </Link>
                <div className="absolute bottom-[-10px] left-0 w-full h-1 bg-yellow-400 rounded-full"></div>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="https://github.com/maxsonchen" className="text-white hover:text-yellow-400">
              <Github size={24} />
            </Link>
            <MobileMenu currentPath="/portfolio" />
          </div>
        </header>

        <main>
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Past Project Experience</h1>
            <p className="text-gray-400">
              Explore the projects I've worked on <span className="text-yellow-400">so far</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
