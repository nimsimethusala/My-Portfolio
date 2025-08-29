import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MenuIcon, XIcon } from 'lucide-react'
export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const navLinks = [
        {
            name: 'Home',
            href: '#hero',
        },
        {
            name: 'About',
            href: '#about',
        },
        {
            name: 'Skills',
            href: '#skills',
        },
        {
            name: 'Projects',
            href: '#projects',
        },
        {
            name: 'Contact',
            href: '#contact',
        },
    ]
    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -20,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    <a href="#hero" className="text-[#059212] font-bold text-2xl">
                        <span className="text-[#06D001]">&lt;</span>
                        Portfolio
                        <span className="text-[#06D001]">/&gt;</span>
                    </a>
                </motion.div>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="text-gray-800 hover:text-[#059212] transition-colors font-medium"
                            initial={{
                                opacity: 0,
                                y: -10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1,
                            }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </nav>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-800 focus:outline-none"
                    >
                        {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                    </button>
                </div>
            </div>
            {/* Mobile Navigation */}
            {isMenuOpen && (
                <motion.div
                    className="md:hidden bg-white shadow-lg absolute w-full"
                    initial={{
                        opacity: 0,
                        height: 0,
                    }}
                    animate={{
                        opacity: 1,
                        height: 'auto',
                    }}
                    exit={{
                        opacity: 0,
                        height: 0,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                >
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-800 hover:text-[#059212] transition-colors font-medium py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </header>
    )
}