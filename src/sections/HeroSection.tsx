import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from "../context/ThemeContext.tsx";
import AnimatedText from "../ui/AnimatedText.tsx";
import MyImage from "../assets/MyImage.jpg";

const HeroSection: React.FC = () => {
    const { theme, themeColors } = useTheme()

    return (
        <section
            id="home"
            className="relative w-full min-h-screen flex items-center justify-center px-6 overflow-hidden"
        >
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    {/* Profile Image */}
                    <motion.div
                        className="mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                            delay: 0.2,
                        }}
                    >
                        <div
                            className="w-72 h-72 rounded-full flex items-center justify-center overflow-hidden border-4 mt-24"
                            style={{
                                borderColor: themeColors[theme].accent,
                                boxShadow: `0 0 60px ${themeColors[theme].accent}`,
                            }}
                        >
                            <img
                                src={MyImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <AnimatedText
                        text="Hello, I'm"
                        className="text-3xl md:text-5xl font-bold"
                        style={{ color: themeColors[theme].text }}
                    />
                    <AnimatedText
                        text="Nimsi Methusala"
                        className="text-4xl md:text-6xl font-extrabold mb-4"
                        style={{ color: themeColors[theme].accent }}
                    />

                    {/* Subtitle */}
                    <AnimatedText
                        text="Creating beautiful web experiences with modern technologies"
                        className="text-xl md:text-2xl mb-8 max-w-2xl md:text-center"
                        style={{ color: themeColors[theme].text }}
                    />

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <motion.a
                            href="#projects"
                            className="px-8 py-3 rounded-full font-medium shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                backgroundColor: themeColors[theme].primary,
                                color: "#fff",
                                boxShadow: `0 0 20px ${themeColors[theme].accent}`
                            }}
                        >
                            View My Work
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="px-8 py-3 rounded-full font-medium shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                backgroundColor: themeColors[theme].text,
                                color: themeColors[theme].background,
                            }}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator (optional placeholder) */}
            <motion.div
                className="absolute bottom-10 left-0 right-0 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
            </motion.div>
        </section>
    )
}

export default HeroSection