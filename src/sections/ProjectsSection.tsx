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
            github:
                "https://github.com/nimsimethusala/SecondSemesterFinalProject.git",
            tags: ["HTML", "CSS", "MySQL", "Spring Boot"],
        },
        {
            id: 2,
            title: "Library Management System",
            description:
                "A digital system to manage books, users, and transactions efficiently with search and automation features.",
            video: BookClubVideo,
            github: "https://github.com/nimsimethusala/RAD_Final_Project.git",
            tags: ["React", "TypeScript", "Tailwind", "Node"],
        },
        {
            id: 3,
            title: "Tax Automation Web App",
            description:
                "Group project: A real-world personal tax calculation web app that simplifies tax estimation and filing for individuals.",
            image: TaxImage,
            github: "https://github.com/Shashi-Madushan/Utax_Frontend.git",
            tags: ["MERN", "OCR technology"],
        },
        {
            id: 4,
            title: "Weather Dashboard",
            description:
                "A weather application with interactive maps and detailed forecasts.",
            image:
                "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            tags: ["React", "API", "Chart.js"],
        },
    ]

    return (
        <section id="projects" className="py-20 w-full">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2
                        className="text-5xl md:text-4xl font-bold mb-4"
                        style={{ color: themeColors[theme].text }}
                    >
                        My Projects
                    </h2>

                    <div className="w-24 h-1 mx-auto mb-4 rounded-full bg-white"></div>
                    <p className="text-gray-300 text-3xl max-w-2xl mx-auto">
                        Explore my recent work and projects
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="rounded-lg overflow-hidden shadow-lg"
                            style={{
                                border: `2px solid ${themeColors[theme].accent}`, // ✅ fixed
                                boxShadow: `0 0 15px ${themeColors[theme].accent}55`, // ✅ subtle glow
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            {/* Media Preview */}
                            <div className="h-90 overflow-hidden">
                                {project.video ? (
                                    <video
                                        src={project.video}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2" style={{ color: themeColors[theme].text }}>{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 rounded-full text-xs text-white border-1"
                                            style={{ backgroundColor: themeColors[theme].primary }}
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <motion.a
                                    href={project.github || "#"}
                                    className="inline-flex items-center font-medium"
                                    style={{ color: themeColors[theme].text }}
                                    whileHover={{ x: 5 }}
                                >
                                    View Project
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection