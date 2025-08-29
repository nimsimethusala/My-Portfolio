import { motion } from 'framer-motion'
import { CodeIcon, BookOpenIcon, GraduationCapIcon } from 'lucide-react'
export function AboutSection() {
    return (
        <section id="about" className="py-20 bg-white">
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
                        About <span className="text-[#059212]">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#9BEC00] mx-auto"></div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                        }}
                        viewport={{
                            once: true,
                            margin: '-100px',
                        }}
                    >
                        <div className="relative">
                            <div className="w-full h-full absolute -left-4 -top-4 border-2 border-[#9BEC00] rounded-lg"></div>
                            <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Software Engineer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.4,
                        }}
                        viewport={{
                            once: true,
                            margin: '-100px',
                        }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-[#059212]">
                            Software Engineer
                        </h3>
                        <p className="text-gray-700 mb-6">
                            I'm a passionate software engineer with expertise in building
                            modern web applications. I focus on creating efficient, scalable,
                            and user-friendly solutions that solve real-world problems. With a
                            strong foundation in both front-end and back-end technologies, I
                            bring ideas to life through clean code.
                        </p>
                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    icon: <CodeIcon size={20} />,
                                    title: 'Development',
                                    description:
                                        'Crafting clean, efficient code for web applications',
                                },
                                {
                                    icon: <BookOpenIcon size={20} />,
                                    title: 'Learning',
                                    description: 'Continuously expanding my knowledge and skills',
                                },
                                {
                                    icon: <GraduationCapIcon size={20} />,
                                    title: 'Education',
                                    description:
                                        'Computer Science degree with focus on software engineering',
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="mr-4 p-2 bg-[#F3FF90] rounded-full text-[#059212]">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a
                            href="#contact"
                            className="inline-flex items-center text-[#059212] font-medium hover:text-[#06D001] transition-colors"
                        >
                            Let's work together
                            <svg
                                className="ml-2 w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}