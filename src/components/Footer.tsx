import React from 'react'
import { motion } from 'framer-motion'
import {useTheme} from "../context/ThemeContext.tsx";

const Footer: React.FC = () => {
    const { theme, themeColors } = useTheme()
    const currentYear = new Date().getFullYear()

    const socialLinks = {
        GitHub: "https://github.com/nimsimethusala",
        LinkedIn: "https://www.linkedin.com/in/nimsi-methusala-79a464318/",
        Facebook: "https://web.facebook.com/nimsi.methusala",
    };

    return (
        <motion.footer
            className={`w-full py-8 ${themeColors[theme].background} border-t border-gray-800`}
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <motion.p
                            className="text-gray-400"
                            whileHover={{
                                scale: 1.01,
                            }}
                        >
                            © {currentYear} My Portfolio. All rights reserved.
                        </motion.p>
                    </div>
                    <div className="flex space-x-4">
                        {Object.entries(socialLinks).map(([social, link]) => (
                            <motion.a
                                key={social}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-400 hover:${themeColors[theme].text}`}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {social}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}
export default Footer