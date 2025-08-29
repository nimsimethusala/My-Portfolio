import { motion } from 'framer-motion'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
interface Project {
    id: number
    title: string
    category: string
    image: string
    description: string
    technologies: string[]
    demoUrl: string
    githubUrl: string
}
interface ProjectCardProps {
    project: Project
    index: number
}
export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
            }}
            viewport={{
                once: true,
                margin: '-100px',
            }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
            <div className="relative overflow-hidden group h-48">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#059212]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex space-x-3">
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full text-[#059212] hover:bg-[#F3FF90] transition-colors"
                        >
                            <ExternalLinkIcon size={18} />
                        </a>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full text-[#059212] hover:bg-[#F3FF90] transition-colors"
                        >
                            <GithubIcon size={18} />
                        </a>
                    </div>
                    <span className="text-white text-sm font-medium px-3 py-1 bg-black/30 rounded-full">
            {project.category}
          </span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="text-xs px-2 py-1 bg-[#F3FF90] text-[#059212] rounded-full"
                        >
              {tech}
            </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}