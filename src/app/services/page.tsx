"use client"

import { motion } from "framer-motion"
import { Code2, Palette, LineChart, Globe2, Cpu, Shield } from "lucide-react"
import ParticlesBackground from "@/components/particles-background"
import { ServiceCard } from "@/components/service-card"

export default function ServicesPage() {
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
                    Services
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const services = [
    {
        icon: Code2,
        title: "Web Development",
        description: "Building modern, responsive websites with cutting-edge technologies and best practices.",
        features: ["Custom Website Development", "E-commerce Solutions", "Progressive Web Apps", "API Development"],
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Creating intuitive and beautiful user interfaces that deliver exceptional user experiences.",
        features: ["User Interface Design", "User Experience Design", "Wireframing & Prototyping", "Design Systems"],
    },
    {
        icon: LineChart,
        title: "Digital Marketing",
        description: "Implementing effective digital marketing strategies to grow your online presence.",
        features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
    },
    {
        icon: Globe2,
        title: "Web Optimization",
        description: "Optimizing websites for peak performance and better user engagement.",
        features: ["Performance Optimization", "SEO Implementation", "Core Web Vitals", "Mobile Optimization"],
    },
    {
        icon: Cpu,
        title: "App Development",
        description: "Developing custom applications tailored to your specific needs.",
        features: ["Mobile App Development", "Desktop Applications", "Cross-platform Solutions", "App Maintenance"],
    },
    {
        icon: Shield,
        title: "Security Solutions",
        description: "Implementing robust security measures to protect your digital assets.",
        features: ["Security Audits", "SSL Implementation", "Data Protection", "Security Monitoring"],
    },
]

