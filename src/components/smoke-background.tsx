"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function SmokeBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const particles: Particle[] = []
        const particleCount = 100

        class Particle {
            x: number
            y: number
            size: number
            speedX: number
            speedY: number
            color: string

            constructor() {
                this.x = Math.random() * canvas!.width
                this.y = Math.random() * canvas!.height
                this.size = Math.random() * 5 + 1
                this.speedX = Math.random() * 3 - 1.5
                this.speedY = Math.random() * 3 - 1.5
                this.color = `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
                    Math.random() * 100 + 155,
                )}, 255, ${Math.random() * 0.3 + 0.1})`
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                if (this.size > 0.2) this.size -= 0.1

                if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1
                if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        function createParticles() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle())
            }
        }

        function animateParticles() {
            if (!ctx) return
            ctx.clearRect(0, 0, canvas!.width, canvas!.height)
            for (let i = 0; i < particles.length; i++) {
                particles[i].update()
                particles[i].draw()
                if (particles[i].size <= 0.2) {
                    particles.splice(i, 1)
                    i--
                }
            }
            if (particles.length < particleCount) {
                createParticles()
            }
            requestAnimationFrame(animateParticles)
        }

        createParticles()
        animateParticles()

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <motion.canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    )
}

