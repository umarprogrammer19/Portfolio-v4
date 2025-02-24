"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
    icon: LucideIcon
    title: string
    description: string
    features: string[]
    index: number
}

export function ServiceCard({ icon: Icon, title, description, features, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-8 rounded-xl backdrop-blur-sm bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all"
        >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
                <Icon className="h-12 w-12 mb-6 text-blue-400" />
                <h3 className="text-2xl font-semibold mb-4 text-white/90">{title}</h3>
                <p className="text-gray-400 mb-6">{description}</p>
                <ul className="space-y-3">
                    {features.map((feature, i) => (
                        <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                            className="flex items-center text-gray-400"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3" />
                            {feature}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}

