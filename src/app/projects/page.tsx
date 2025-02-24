"use client"

import { motion } from "framer-motion"
import ParticlesBackground from "@/components/particles-background"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
    return (
        <div className="min-h-screen relative">
            <ParticlesBackground />
            <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-violet-900/20 -z-10" />
            <div className="fixed inset-0 bg-grid-white/[0.02] -z-10" />

            <div className="container mx-auto px-4 py-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400"
                >
                    Projects
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const projects = [
    {
        title: "E-commerce Platform",
        description: "A modern e-commerce solution built with Next.js and Stripe",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Next.js", "TypeScript", "Stripe"],
        link: "#",
    },
    {
        title: "Portfolio Website",
        description: "Creative portfolio website with stunning animations",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "Framer Motion", "Tailwind"],
        link: "#",
    },
    {
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media management",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "D3.js", "Node.js"],
        link: "#",
    },
    {
        title: "Mobile Banking App",
        description: "Secure and intuitive mobile banking application",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React Native", "TypeScript", "API"],
        link: "#",
    },
    {
        title: "AI Content Platform",
        description: "Content generation platform powered by AI",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Next.js", "OpenAI", "MongoDB"],
        link: "#",
    },
    {
        title: "Real Estate Website",
        description: "Property listing and management platform",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "Node.js", "PostgreSQL"],
        link: "#",
    },
]

