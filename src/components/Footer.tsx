import { motion } from 'framer-motion'
export function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
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
                        }}
                        className="mb-6 md:mb-0"
                    >
                        <a href="#hero" className="text-xl font-bold">
                            <span className="text-[#06D001]">&lt;</span>
                            Portfolio
                            <span className="text-[#06D001]">/&gt;</span>
                        </a>
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
                        }}
                        className="flex flex-wrap justify-center space-x-8 mb-6 md:mb-0"
                    >
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(
                            (item, index) => (
                                <a
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:text-[#9BEC00] transition-colors mb-2"
                                >
                                    {item}
                                </a>
                            ),
                        )}
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
                            delay: 0.4,
                        }}
                        viewport={{
                            once: true,
                        }}
                    >
                        <p className="text-gray-400">
                            © {currentYear} Your Name. All rights reserved.
                        </p>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}