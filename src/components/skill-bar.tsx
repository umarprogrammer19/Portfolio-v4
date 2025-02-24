"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SkillBarProps {
    name: string
    percentage: number
}

export function SkillBar({ name, percentage }: SkillBarProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <div ref={ref} className="space-y-2">
            <div className="flex justify-between text-sm">
                <span className="text-white/90">{name}</span>
                <span className="text-gray-400">{percentage}%</span>
            </div>
            <div className="h-2 bg-white/[0.02] rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-violet-500"
                />
            </div>
        </div>
    )
}

