import React from 'react'
import { motion } from 'framer-motion'
import {useTheme} from "../context/ThemeContext.tsx";
import AnimatedText from "../ui/AnimatedText.tsx";
import reactIcon from "../assets/logos/react.svg"
import typeScriptIcon from "../assets/logos/typescript.svg"
import javascriptIcon from "../assets/logos/javascript.svg"
import HTMLIcon from "../assets/logos/html.svg"
import CSSIcon from "../assets/logos/css.svg"
import tailwindIcon from "../assets/logos/tailwind-css.svg"
import nodeIcon from "../assets/logos/nodejs.svg"
import reactNativeIcon from "../assets/logos/react-native.svg"
import mysqlIcon from "../assets/logos/mysql.svg"
import javaIcon from "../assets/logos/java.svg"
import pythonIcon from "../assets/logos/python.svg"

const AboutSection: React.FC = () => {
    const { theme, themeColors } = useTheme()
    const skills = [
        {
            icon: (
                <div className="bg-white border-2 shadow-lg rounded-xl flex items-center justify-center w-20 h-20"
                     style={{ borderColor: themeColors[theme].accent }}>
                    <img src={reactIcon} alt="React" className="w-15 h-15" />
                </div>
            ),
        },
        {
            icon: (
                <div className="bg-white border-2 shadow-lg rounded-xl flex items-center justify-center w-20 h-20"
                     style={{ borderColor: themeColors[theme].accent }}>
                    <img src={typeScriptIcon} alt="TypeScript" className="w-15 h-15" />
                </div>
            ),
        },
        {
            icon: (
                <div className="bg-white border-2 shadow-lg rounded-xl flex items-center justify-center w-20 h-20"
                     style={{ borderColor: themeColors[theme].accent }}>
                    <img src={javascriptIcon} alt="JavaScript" className="w-15 h-15" />
                </div>
            ),
        },
        {
            icon: (
                <div className="bg-white border-2 shadow-lg rounded-xl flex items-center justify-center w-20 h-20"
                     style={{ borderColor: themeColors[theme].accent }}>
                    <img src={HTMLIcon} alt="HTML" className="w-15 h-15" />
                </div>
            ),
        },
        {
            icon: (
                <div className="bg-white border-2 shadow-lg rounded-xl flex items-center justify-center w-20 h-20"
                     style={{ borderColor: themeColors[theme].accent }}>
                    <img src={CSSIcon} alt="CSS" className="w-15 h-15" />
                </div>
            ),
        },
        {
            icon: (
                <div className="bg-white border-2 shadow-lg rounded-xl flex items-center justify-center w-20 h-20"
                     style={{ borderColor: themeColors[theme].accent }}>
                    <img src={tailwindIcon} alt="Tailwind" className="w-15 h-15" />
                </div>
            ),
        },
        {
            icon: (
                <div className="bg-white border-2 shadow-lg rounded-xl flex items-center justify-center w-20 h-20"
                     style={{ borderColor: themeColors[theme].accent }}>
                    <img src={nodeIcon} alt="Node.js" className="w-15 h-15" />
                </div>
            ),
        },
        {
            icon: (
                <div className="bg-white border-2 shadow-lg rounded-xl flex items-center justify-center w-20 h-20"
                     style={{ borderColor: themeColors[theme].accent }}>
                    <img src={reactNativeIcon} alt="Next.js" className="w-15 h-15" />
                </div>
            ),
        },
        {
            icon: (
                <div className="bg-white border-2 shadow-lg rounded-xl flex items-center justify-center w-20 h-20"
                     style={{ borderColor: themeColors[theme].accent }}>
                    <img src={mysqlIcon} alt="GraphQL" className="w-15 h-15" />
                </div>
            ),
        },
        {
            icon: (
                <div className="bg-white border-2 shadow-lg rounded-xl flex items-center justify-center w-20 h-20"
                     style={{ borderColor: themeColors[theme].accent }}>
                    <img src={javaIcon} alt="Git" className="w-15 h-15" />
                </div>
            ),
        },
        {
            icon: (
                <div className="bg-white border-2 shadow-lg rounded-xl flex items-center justify-center w-20 h-20"
                     style={{ borderColor: themeColors[theme].accent }}>
                    <img src={pythonIcon} alt="Git" className="w-15 h-15" />
                </div>
            ),
        },
    ]

    return (
        <section id="about" className="py-20 w-full">
            <div className="container mx-auto px-6">
                <motion.div
                    className="mb-16 text-center"
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
                >
                    <h2
                        className="text-5xl md:text-4xl font-bold mb-4"
                        style={{ color: themeColors[theme].text }}
                    >
                        About Me
                    </h2>
                    <div className="w-24 h-1 mx-auto mb-4 rounded-full bg-white"></div>
                    <p className="text-gray-300 text-2xl max-w-2xl mx-auto">
                        Get to know more about me and my skills
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
                            duration: 0.8,
                        }}
                        viewport={{
                            once: true,
                        }}
                    >
                        <div className="relative">
                            <div
                                className={`absolute inset-0 ${themeColors[theme].primary} rounded-lg transform translate-x-4 translate-y-4 -z-10`}
                            ></div>
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                alt="Developer working"
                                className="rounded-lg w-full h-auto transition-transform duration-500 hover:scale-105"
                                style={{
                                    boxShadow: `0 0 40px ${themeColors[theme].accent}`
                                }}
                            />
                        </div>
                    </motion.div>
                    <div>
                        <AnimatedText
                            text="Full stack Developer"
                            className="text-2xl md:text-3xl font-bold mb-6"
                            style={{ color: themeColors[theme].text }}
                        />
                        <motion.p
                            className="text-gray-300 mb-6"
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
                        >
                            I'm a passionate web developer with a focus on creating beautiful
                            and functional websites. With several years of experience in the
                            field, I've worked on a variety of projects from small business
                            websites to complex web applications.
                        </motion.p>
                        <motion.p
                            className="text-gray-300 mb-8"
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
                                delay: 0.3,
                            }}
                            viewport={{
                                once: true,
                            }}
                        >
                            My approach combines creative design with clean, efficient code to
                            deliver exceptional user experiences. I'm constantly learning new
                            technologies and techniques to stay at the forefront of web
                            development.
                        </motion.p>
                        <div>
                            <h3 className="text-3xl font-semibold mb-4"
                                style={{ color: themeColors[theme].text }}
                            >My Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        className={`${themeColors[theme].primary} px-3 py-1 rounded-full text-white text-sm flex items-center gap-1`}
                                        initial={{
                                            opacity: 0,
                                            scale: 0,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.1 * index,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        whileHover={{
                                            y: -5,
                                        }}
                                    >
                                        {skill.icon}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection