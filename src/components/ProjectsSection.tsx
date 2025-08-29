import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from './ui/ProjectCard'
export function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState('all')
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'web',
            image:
                'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            description:
                'A full-stack e-commerce platform with product management, cart functionality, and payment integration.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            demoUrl: '#',
            githubUrl: '#',
        },
        {
            id: 2,
            title: 'Task Management App',
            category: 'mobile',
            image:
                'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            description:
                'A mobile task management application with real-time updates and collaboration features.',
            technologies: ['React Native', 'Firebase', 'Redux'],
            demoUrl: '#',
            githubUrl: '#',
        },
        {
            id: 3,
            title: 'Portfolio Website',
            category: 'web',
            image:
                'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            description:
                'A responsive portfolio website showcasing projects and skills with smooth animations.',
            technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
            demoUrl: '#',
            githubUrl: '#',
        },
        {
            id: 4,
            title: 'Data Visualization Dashboard',
            category: 'data',
            image:
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            description:
                'An interactive dashboard for visualizing complex datasets with filtering and export capabilities.',
            technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
            demoUrl: '#',
            githubUrl: '#',
        },
    ]
    const filters = [
        {
            id: 'all',
            name: 'All',
        },
        {
            id: 'web',
            name: 'Web',
        },
        {
            id: 'mobile',
            name: 'Mobile',
        },
        {
            id: 'data',
            name: 'Data',
        },
    ]
    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((project) => project.category === activeFilter)
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    viewport={{
                        once: true,
                        margin: '-100px',
                    }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        My <span className="text-[#059212]">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#9BEC00] mx-auto"></div>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                    }}
                    viewport={{
                        once: true,
                        margin: '-100px',
                    }}
                    className="flex justify-center mb-12"
                >
                    <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-4 py-2 rounded-full transition-all ${activeFilter === filter.id ? 'bg-[#059212] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                {filter.name}
                            </button>
                        ))}
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}