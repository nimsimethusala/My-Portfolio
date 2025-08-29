/*
import { motion } from 'framer-motion'
import {
    ArrowDownIcon,
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
} from 'lucide-react'
import { AnimatedText } from './ui/AnimatedText'
export function HeroSection() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/!* Creative Background Elements *!/}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute right-1/4 top-1/4 w-72 h-72 rounded-full bg-[#9BEC00]/20 filter blur-3xl animate-pulse"></div>
                <div className="absolute left-1/3 bottom-1/4 w-96 h-96 rounded-full bg-[#06D001]/15 filter blur-3xl"></div>
                <div className="absolute left-1/4 top-1/3 w-64 h-64 rounded-full bg-[#F3FF90]/20 filter blur-3xl"></div>
                {/!* Animated geometric shapes *!/}
                <motion.div
                    className="absolute right-[15%] top-[20%] w-20 h-20 border-4 border-[#059212]/30 rounded-lg"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                ></motion.div>
                <motion.div
                    className="absolute left-[10%] bottom-[30%] w-16 h-16 border-4 border-[#9BEC00]/30 rounded-full"
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                ></motion.div>
                <motion.div
                    className="absolute left-[20%] top-[15%] w-24 h-24 border-4 border-[#F3FF90]/30 rotate-45"
                    animate={{
                        rotate: [45, 90, 45],
                        scale: [1, 0.9, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                ></motion.div>
            </div>
            <div className="container mx-auto px-4 md:px-6 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/!* Text Content *!/}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="flex flex-col items-start text-left md:w-1/2"
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="mb-4"
                        >
              <span className="text-[#059212] font-medium text-lg bg-[#F3FF90]/30 px-4 py-1 rounded-full">
                Hello, I'm
              </span>
                        </motion.div>
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                            }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900"
                        >
                            <AnimatedText text="Your Name" />
                        </motion.h1>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.4,
                            }}
                            className="mb-8"
                        >
                            <h2 className="text-xl md:text-2xl text-gray-700 font-medium">
                                <span className="text-[#06D001]">Software Engineer</span>{' '}
                                specializing in
                                <AnimatedText text=" modern web applications" inline />
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.6,
                            }}
                            className="flex space-x-4 mb-8 md:mb-12"
                        >
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-gradient-to-r from-[#059212] to-[#06D001] text-white rounded-full hover:from-[#06D001] hover:to-[#9BEC00] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Get in Touch
                            </a>
                            <a
                                href="#projects"
                                className="px-6 py-3 border-2 border-[#059212] text-[#059212] rounded-full hover:bg-[#059212] hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                View My Work
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.8,
                            }}
                            className="flex space-x-6"
                        >
                            {[
                                {
                                    icon: <GithubIcon size={24} />,
                                    url: 'https://github.com/',
                                },
                                {
                                    icon: <LinkedinIcon size={24} />,
                                    url: 'https://linkedin.com/',
                                },
                                {
                                    icon: <TwitterIcon size={24} />,
                                    url: 'https://twitter.com/',
                                },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-[#059212] transition-colors"
                                    whileHover={{
                                        scale: 1.1,
                                    }}
                                    whileTap={{
                                        scale: 0.95,
                                    }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                    {/!* Profile Image with creative frame *!/}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 50,
                            rotate: -5,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            rotate: 0,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.3,
                        }}
                        className="md:w-2/5 relative"
                    >
                        <div className="relative">
                            {/!* Decorative elements *!/}
                            <motion.div
                                className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-[#059212]"
                                animate={{
                                    rotate: [0, 5, 0],
                                    x: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            ></motion.div>
                            <motion.div
                                className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-[#9BEC00]"
                                animate={{
                                    rotate: [0, -5, 0],
                                    x: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            ></motion.div>
                            {/!* Main image *!/}
                            <div className="rounded-2xl overflow-hidden border-8 border-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                    alt="Software Engineer Portrait"
                                    className="w-full h-auto object-cover"
                                />
                                {/!* Gradient overlay *!/}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#059212]/20 to-transparent"></div>
                            </div>
                            {/!* Floating code elements *!/}
                            <motion.div
                                className="absolute -bottom-4 -left-8 px-4 py-2 bg-white rounded-lg shadow-lg text-sm font-mono text-[#059212]"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                &lt;code/&gt;
                            </motion.div>
                            <motion.div
                                className="absolute -top-4 -right-4 px-4 py-2 bg-white rounded-lg shadow-lg text-sm font-mono text-[#06D001]"
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0.5,
                                }}
                            >
                                function()
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.5,
                    delay: 1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 0.5,
                }}
                className="absolute bottom-10"
            >
                <a
                    href="#about"
                    className="flex flex-col items-center text-gray-600 hover:text-[#059212]"
                >
                    <span className="text-sm mb-2">Scroll Down</span>
                    <ArrowDownIcon size={20} />
                </a>
            </motion.div>
        </section>
    )
}*/

import {ArrowDown, Github, Linkedin, Mail, Sparkles} from "lucide-react";
import ProfileImage from "./ui/ProfileImage.tsx";

export const HeroSection = ({ isLoaded }: { isLoaded: boolean }) => {
    return (
        <section className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-8 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}>
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-400/20 to-orange-300/20 px-4 py-2 rounded-full border border-orange-300/30">
                        <Sparkles className="w-4 h-4 text-orange-300" />
                        <span className="text-sm text-orange-300">Available for work</span>
                    </div>

                    <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-red-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
              Creative
            </span>
                        <br />
                        <span className="text-white">Software</span>
                        <br />
                        <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
              Engineer
            </span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-lg">
                        Crafting exceptional digital experiences through innovative code and creative problem-solving.
                    </p>

                    <div className="flex space-x-6">
                        <button className="group bg-gradient-to-r from-red-500 to-orange-400 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105">
              <span className="flex items-center space-x-2">
                <span>Let's Work Together</span>
                <ArrowDown className="w-5 h-5 rotate-[-45deg] group-hover:translate-x-1 transition-transform" />
              </span>
                        </button>

                        <div className="flex space-x-4">
                            {[
                                { icon: Github, href: '#' },
                                { icon: Linkedin, href: '#' },
                                { icon: Mail, href: '#' }
                            ].map(({ icon: Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-red-400 hover:to-orange-300 transition-all duration-300 hover:scale-110"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Profile Image with Creative Frame */}
                <ProfileImage isLoaded={isLoaded} />
            </div>
        </section>
    );
};