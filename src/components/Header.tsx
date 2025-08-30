import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import ThemeSwitcher from '../ui/ThemeSwitcher'

const Header: React.FC = () => {
    const { theme, themeColors } = useTheme()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = ['Home', 'About', 'Projects', 'Contact']

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? `backdrop-blur-lg bg-opacity-80 ${themeColors[theme].background}`
                    : 'bg-transparent'
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    className={`text-2xl font-bold ${themeColors[theme].text}`}
                    style={{ color: themeColors[theme].text }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    NM
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="font-medium transition"
                                    style={{ color: themeColors[theme].text }}
                                    onMouseEnter={e =>
                                        (e.currentTarget.style.color = themeColors[theme].accent)
                                    }
                                    onMouseLeave={e =>
                                        (e.currentTarget.style.color = themeColors[theme].text)
                                    }
                                >
                                    {item}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </nav>

                {/* Theme Switcher + Mobile Menu */}
                <div className="flex items-center gap-4 md:gap-6">
                    <ThemeSwitcher />

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden"
                        onClick={() => setMenuOpen(prev => !prev)}
                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                            whileTap={{ scale: 0.9 }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    menuOpen
                                        ? 'M6 18L18 6M6 6l12 12' // X icon
                                        : 'M4 6h16M4 12h16M4 18h16' // Hamburger
                                }
                            />
                        </motion.svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        className={`md:hidden bg-opacity-90 backdrop-blur-lg ${themeColors[theme].background}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="flex flex-col gap-4 p-4">
                            {navItems.map(item => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="font-medium text-lg transition"
                                        style={{ color: themeColors[theme].text }}
                                        onClick={() => setMenuOpen(false)}
                                        onMouseEnter={e =>
                                            (e.currentTarget.style.color = themeColors[theme].accent)
                                        }
                                        onMouseLeave={e =>
                                            (e.currentTarget.style.color = themeColors[theme].text)
                                        }
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Header