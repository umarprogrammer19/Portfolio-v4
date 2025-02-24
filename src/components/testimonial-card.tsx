"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
    content: string
    author: string
    role: string
}

export function TestimonialCard({ content, author, role }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative p-8 rounded-xl backdrop-blur-sm bg-white/[0.02] border border-white/[0.05]"
        >
            <Quote className="w-8 h-8 text-blue-400 mb-4" />
            <p className="text-gray-400 mb-6">{content}</p>
            <div>
                <p className="font-semibold text-white/90">{author}</p>
                <p className="text-sm text-gray-400">{role}</p>
            </div>
        </motion.div>
    )
}

