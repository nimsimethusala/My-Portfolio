import React, { useEffect, useRef } from 'react'
import {useTheme} from "../context/ThemeContext.tsx";

const BackgroundAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { theme } = useTheme()
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        let width = window.innerWidth
        let height = window.innerHeight
        const resizeCanvas = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }
        window.addEventListener('resize', resizeCanvas)
        resizeCanvas()
        // Particle class
        class Particle {
            x: number
            y: number
            size: number
            speedX: number
            speedY: number
            color: string
            constructor(color: string) {
                this.x = Math.random() * width
                this.y = Math.random() * height
                this.size = Math.random() * 5 + 1
                this.speedX = Math.random() * 3 - 1.5
                this.speedY = Math.random() * 3 - 1.5
                this.color = color
            }
            update() {
                this.x += this.speedX
                this.y += this.speedY
                if (this.x > width) this.x = 0
                else if (this.x < 0) this.x = width
                if (this.y > height) this.y = 0
                else if (this.y < 0) this.y = height
            }
            draw(ctx: CanvasRenderingContext2D) {
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }
        // Theme colors for particles
        const themeColorMap = {
            blue: [
                'rgba(37, 99, 235, 0.5)',
                'rgba(59, 130, 246, 0.5)',
                'rgba(96, 165, 250, 0.5)',
            ],
            purple: [
                'rgba(147, 51, 234, 0.5)',
                'rgba(168, 85, 247, 0.5)',
                'rgba(192, 132, 252, 0.5)',
            ],
            green: [
                'rgba(16, 185, 129, 0.5)',
                'rgba(5, 150, 105, 0.5)',
                'rgba(52, 211, 153, 0.5)',
            ],
            orange: [
                'rgba(234, 88, 12, 0.5)',
                'rgba(249, 115, 22, 0.5)',
                'rgba(251, 146, 60, 0.5)',
            ],
            pink: [
                'rgba(219, 39, 119, 0.5)',
                'rgba(236, 72, 153, 0.5)',
                'rgba(244, 114, 182, 0.5)',
            ],
        }
        // Create particles
        const particleCount = Math.floor((width * height) / 15000)
        const particles: Particle[] = []
        const initParticles = () => {
            particles.length = 0
            const colors = themeColorMap[theme]
            for (let i = 0; i < particleCount; i++) {
                const color = colors[Math.floor(Math.random() * colors.length)]
                particles.push(new Particle(color))
            }
        }
        initParticles()
        // Update when theme changes
        // const themeObserver = () => {
        //     initParticles()
        // }
        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height)
            // Draw connections between particles
            ctx.strokeStyle = themeColorMap[theme][0]
            ctx.lineWidth = 0.5
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    if (distance < 100) {
                        ctx.globalAlpha = 1 - distance / 100
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }
            ctx.globalAlpha = 1
            // Update and draw particles
            particles.forEach((particle) => {
                particle.update()
                particle.draw(ctx)
            })
            requestAnimationFrame(animate)
        }
        animate()
        return () => {
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [theme])
    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    )
}
export default BackgroundAnimation