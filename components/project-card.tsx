import Image from "next/image"
import { ExternalLink, ThumbsUp, Github } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden h-full flex flex-col">
      <div className="p-3 md:p-4 relative group">
        <div className="relative w-full h-40 md:h-48 overflow-hidden rounded-md">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {project.demoUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black p-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={24} />
            </a>
          </div>
        )}
      </div>
      <div className="p-4 md:p-6 flex-grow">
        <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center">
          {project.title}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-yellow-400 hover:text-yellow-300 inline-flex items-center"
              aria-label={`Visit ${project.title}`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </h3>
        <p className="text-gray-400 mb-4 text-sm md:text-base">{project.description}</p>
        <p className="text-yellow-400 text-xs md:text-sm">{project.technologies}</p>
      </div>
      <div className="px-4 md:px-6 pb-3 md:pb-4 flex justify-between">
        <div className="flex space-x-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center space-x-1"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={16} />
              <span className="text-xs md:text-sm">Visit</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center space-x-1"
              aria-label={`View ${project.title} code on GitHub`}
            >
              <Github size={16} />
              <span className="text-xs md:text-sm">Code</span>
            </a>
          )}
        </div>
        <button
          className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center space-x-1"
          aria-label={`Like ${project.title}`}
        >
          <ThumbsUp size={16} />
          <span className="text-xs md:text-sm">Like</span>
        </button>
      </div>
    </div>
  )
}
