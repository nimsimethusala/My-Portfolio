import React, { type ReactNode } from 'react'
import { useTheme } from "./context/ThemeContext.tsx"
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"

interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { theme, themeColors } = useTheme()

    return (
        <div
            className="min-h-screen w-full text-white transition-colors duration-500"
            style={{ backgroundColor: themeColors[theme].background }}
        >
            <Header />
            <main className="w-full">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout