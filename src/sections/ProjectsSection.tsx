import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from "../context/ThemeContext.tsx"
import furnitureShopVideo from "../assets/furnitureShop.webm"
import BookClubVideo from "../assets/BookClub.mp4"
import TaxImage from "../assets/Tax.jpg"

interface Project {
    id: number
    title: string
    description: string
    image?: string
    video?: string
    github?: string
    tags: string[]
    badge?: string
    featured?: boolean
    icon: string
}

const ProjectsSection: React.FC = () => {
    const { theme, themeColors } = useTheme()

    const projects: Project[] = [
        {
            id: 1,
            title: "E-commerce Platform for Furniture Shop",
            description:
                "A fully functional e-commerce platform with payment integration and admin dashboard.",
            video: furnitureShopVideo,
            github: "https://github.com/nimsimethusala/SecondSemesterFinalProject.git",
            tags: ["HTML", "CSS", "MySQL", "Spring Boot"],
            badge: "Video preview",
            icon: "🛒",
        },
        {
            id: 2,
            title: "Library Management System",
            description:
                "A digital system to manage books, users, and transactions efficiently with search and automation features.",
            video: BookClubVideo,
            github: "https://github.com/nimsimethusala/RAD_Final_Project.git",
            tags: ["React", "TypeScript", "Tailwind", "Node"],
            badge: "Video preview",
            icon: "📚",
        },
        {
            id: 3,
            title: "Tax Automation Web App",
            description:
                "A real-world personal tax calculation web app that simplifies tax estimation and filing for individuals.",
            image: TaxImage,
            github: "https://github.com/Shashi-Madushan/Utax_Frontend.git",
            tags: ["MERN", "OCR technology"],
            badge: "Group project",
            featured: true,
            icon: "🧾",
        },
    ]

    const accent = themeColors[theme].accent
    const primary = themeColors[theme].primary
    const text = themeColors[theme].text

    return (
        <section id="projects" className="py-20 w-full">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    className="mb-14 text-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2
                        className="text-5xl md:text-4xl font-bold mb-3"
                        style={{ color: text }}
                    >
                        My Projects
                    </h2>
                    <div
                        className="w-35 h-[4px] rounded-full mb-3 mx-auto"
                        style={{ backgroundColor: accent }}
                    />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group relative rounded-2xl overflow-hidden flex flex-col"
                            style={{
                                background: `${primary}18`,
                                border: project.featured
                                    ? `2px solid ${accent}`
                                    : `1px solid ${accent}30`,
                                boxShadow: project.featured
                                    ? `0 0 24px ${accent}35`
                                    : "none",
                            }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                        >
                            {/* Media area */}
                            <div className="relative h-48 overflow-hidden"
                                style={{ background: `${primary}30` }}
                            >
                                {project.video ? (
                                    <video
                                        src={project.video}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                ) : project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-5xl">
                                        {project.icon}
                                    </div>
                                )}

                                {/* Hover overlay */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: `${accent}28` }}
                                >
                                    <a
                                        href={project.github || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium"
                                        style={{ background: accent }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        View on GitHub
                                    </a>
                                </div>

                                {/* Badge */}
                                {project.badge && (
                                    <span
                                        className="absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full"
                                        style={
                                            project.featured
                                                ? { background: accent, color: "#fff" }
                                                : { background: `${accent}22`, color: accent }
                                        }
                                    >
                                        {project.badge}
                                    </span>
                                )}

                                {/* Project number */}
                                <span
                                    className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full"
                                    style={{ background: "rgba(0,0,0,0.45)", color: "#fff" }}
                                >
                                    {String(project.id).padStart(2, "0")}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-5">
                                <h3
                                    className="text-base font-semibold mb-2 leading-snug"
                                    style={{ color: text }}
                                >
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full text-xs font-medium"
                                            style={{
                                                background: `${accent}18`,
                                                color: accent,
                                                border: `1px solid ${accent}35`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div
                                    className="flex items-center justify-between pt-4"
                                    style={{ borderTop: `1px solid ${accent}20` }}
                                >
                                    <motion.a
                                        href={project.github || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm font-medium"
                                        style={{ color: accent }}
                                        whileHover={{ x: 4 }}
                                    >
                                        View project
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.a>

                                    {/* GitHub icon button */}
                                    <a
                                        href={project.github || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                                        style={{
                                            border: `1px solid ${accent}35`,
                                            color: accent,
                                        }}
                                        aria-label="GitHub repository"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection