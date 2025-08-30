import React, { createContext, useContext, useState, type ReactNode } from 'react'
import { themeColors, type ThemeColor } from '../type/ThemeColors.ts'

interface ThemeContextType {
    theme: ThemeColor
    setTheme: (theme: ThemeColor) => void
    themeColors: typeof themeColors
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeColor>('blue')
    return (
        <ThemeContext.Provider value={{ theme, setTheme, themeColors }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error('useTheme must be used within a ThemeProvider')
    return context
}