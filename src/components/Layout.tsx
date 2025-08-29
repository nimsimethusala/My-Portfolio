import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import AnimatedBackground from "./ui/AnimatedBackground.tsx";

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-[#F3FF90]/10">
            <AnimatedBackground/>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    )
}