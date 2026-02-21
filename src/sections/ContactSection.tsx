

import React, {useState} from 'react'
import { motion } from 'framer-motion'
import {useTheme} from "../context/ThemeContext.tsx";
import AnimatedText from "../ui/AnimatedText.tsx";

const ContactSection: React.FC = () => {
    const { theme, themeColors } = useTheme()
    const [result, setResult] = useState<string>("")

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setResult("Sending...")

        // clone karagannawa event target eka
        const form = e.currentTarget

        const formData = new FormData(form)
        formData.append("access_key", "e23873fd-dce2-47ed-b21f-704070e8f9de")

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })

            const data = await response.json()

            if (data.success) {
                setResult("Message sent successfully")
                form.reset() // <-- mehema reset karanna

                setTimeout(() => {
                    setResult("")
                }, 3000)
            } else {
                setResult("Something went wrong")
                setTimeout(() => {
                    setResult("")
                }, 3000)
            }
        } catch (err) {
            setResult("Something went wrong")
            setTimeout(() => {
                setResult("")
            }, 3000)
        }
    }

    return (
        <section id="contact" className="py-20 w-full">
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
                        className={`text-3xl md:text-4xl font-bold mb-4 ${themeColors[theme].text}`}
                        style={{ color: themeColors[theme].text }}
                    >
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 mx-auto mb-4 rounded-full bg-white"></div>
                    <p className="text-gray-300 text-2xl max-w-2xl mx-auto">
                        Have a project in mind? Let's work together!
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                        <AnimatedText
                            text="Let's Discuss Your Project"
                            className="text-2xl font-bold mb-6"
                            style={{ color: themeColors[theme].text }}
                        />
                        <p className="text-gray-300 mb-8">
                            I'm interested in freelance opportunities and collaborations. If
                            you have a project that needs some creative touch, don't hesitate
                            to reach out.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div
                                    className={`${themeColors[theme].primary} p-3 rounded-full mr-4`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Email</h3>
                                    <p className="text-gray-400">nimsimethusala42@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div
                                    className={`${themeColors[theme].primary} p-3 rounded-full mr-4`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Phone</h3>
                                    <p className="text-gray-400">077 910 0270</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div
                                    className={`${themeColors[theme].primary} p-3 rounded-full mr-4`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Location</h3>
                                    <p className="text-gray-400">Sri Lanka</p>
                                </div>
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
                            duration: 0.8,
                        }}
                        viewport={{
                            once: true,
                        }}
                    >
                        <form className="space-y-6" onSubmit={onSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-300 mb-1"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2"
                                        style={{
                                            backgroundColor: themeColors[theme].text,
                                            color: themeColors[theme].background,
                                            boxShadow: `0 0 0 2px transparent`,
                                        }}
                                        onFocus={(e) =>
                                            (e.currentTarget.style.boxShadow = `0 0 0 2px ${themeColors[theme].primary}`)
                                        }
                                        onBlur={(e) =>
                                            (e.currentTarget.style.boxShadow = `0 0 0 2px transparent`)
                                        }
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-300 mb-1"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2"
                                        style={{
                                            backgroundColor: themeColors[theme].text,
                                            color: themeColors[theme].background,
                                            boxShadow: `0 0 0 2px transparent`,
                                        }}
                                        onFocus={(e) =>
                                            (e.currentTarget.style.boxShadow = `0 0 0 2px ${themeColors[theme].primary}`)
                                        }
                                        onBlur={(e) =>
                                            (e.currentTarget.style.boxShadow = `0 0 0 2px transparent`)
                                        }
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2"
                                    style={{
                                        backgroundColor: themeColors[theme].text,
                                        color: themeColors[theme].background,
                                        boxShadow: `0 0 0 2px transparent`,
                                    }}
                                    onFocus={(e) =>
                                        (e.currentTarget.style.boxShadow = `0 0 0 2px ${themeColors[theme].primary}`)
                                    }
                                    onBlur={(e) =>
                                        (e.currentTarget.style.boxShadow = `0 0 0 2px transparent`)
                                    }
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2"
                                    style={{
                                        backgroundColor: themeColors[theme].text,
                                        color: themeColors[theme].background,
                                        boxShadow: `0 0 0 2px transparent`,
                                    }}
                                    onFocus={(e) =>
                                        (e.currentTarget.style.boxShadow = `0 0 0 2px ${themeColors[theme].primary}`)
                                    }
                                    onBlur={(e) =>
                                        (e.currentTarget.style.boxShadow = `0 0 0 2px transparent`)
                                    }
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className={`${themeColors[theme].primary} hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-medium w-full`}
                                style={{
                                    backgroundColor: themeColors[theme].secondary,
                                    color: themeColors[theme].background,
                                    boxShadow: `0 0 0 2px transparent`,
                                }}
                                whileHover={{
                                    scale: 1.02,
                                }}
                                whileTap={{
                                    scale: 0.98,
                                }}
                            >
                                Send Message
                            </motion.button>
                        </form>

                        {/* Result Message */}
                        {result && (
                            <p className="mt-4 text-center" style={{ color: themeColors[theme].text }}>
                                {result}
                            </p>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
export default ContactSection