import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const ThemeSwitcher: React.FC = () => {
    const { theme, setTheme, themeColors } = useTheme()

    const themes: Array<{ value: 'blue' | 'purple' | 'green' | 'orange' | 'pink'; label: string }> = [
        { value: 'blue', label: 'Blue' },
        { value: 'purple', label: 'Purple' },
        { value: 'green', label: 'Green' },
        { value: 'orange', label: 'Orange' },
        { value: 'pink', label: 'Pink' },
    ]

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
        >
            <motion.div className="flex space-x-2" whileHover={{ scale: 1.05 }}>
                {themes.map((t) => (
                    <motion.button
                        key={t.value}
                        onClick={() => setTheme(t.value)}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        title={t.label}
                        style={{
                            backgroundColor: themeColors[t.value].primary,
                            boxShadow: theme === t.value ? '0 0 0 2px white' : 'none',
                        }}
                        className="w-5 h-5 rounded-full transition-all"
                    />
                ))}
            </motion.div>
        </motion.div>
    )
}

export default ThemeSwitcher