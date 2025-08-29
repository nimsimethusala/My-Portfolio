import { motion } from 'framer-motion'
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react'
export function ContactSection() {
    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-br from-white to-[#F3FF90]/20"
        >
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
                        Get In <span className="text-[#059212]">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#9BEC00] mx-auto"></div>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                            Contact Information
                        </h3>
                        <div className="space-y-6 mb-8">
                            {[
                                {
                                    icon: <MailIcon size={24} />,
                                    title: 'Email',
                                    content: 'your.email@example.com',
                                },
                                {
                                    icon: <PhoneIcon size={24} />,
                                    title: 'Phone',
                                    content: '+1 (555) 123-4567',
                                },
                                {
                                    icon: <MapPinIcon size={24} />,
                                    title: 'Location',
                                    content: 'San Francisco, CA',
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="mr-4 p-3 bg-[#F3FF90] rounded-full text-[#059212]">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                                        <p className="text-gray-600">{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">
                                Follow Me
                            </h3>
                            <div className="flex space-x-4">
                                {[
                                    {
                                        name: 'GitHub',
                                        url: '#',
                                    },
                                    {
                                        name: 'LinkedIn',
                                        url: '#',
                                    },
                                    {
                                        name: 'Twitter',
                                        url: '#',
                                    },
                                    {
                                        name: 'Instagram',
                                        url: '#',
                                    },
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-[#059212] hover:text-white transition-colors"
                                    >
                                        {social.name[0]}
                                    </a>
                                ))}
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
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                            Send Me a Message
                        </h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059212] focus:border-transparent"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059212] focus:border-transparent"
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059212] focus:border-transparent"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059212] focus:border-transparent"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className="inline-flex items-center px-6 py-3 bg-[#059212] text-white rounded-lg hover:bg-[#06D001] transition-colors shadow-lg"
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                            >
                                Send Message
                                <SendIcon size={18} className="ml-2" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}