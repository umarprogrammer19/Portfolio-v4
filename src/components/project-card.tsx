"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
    title: string
    description: string
    image: string
    tags: string[]
    link: string
    index: number
}

export function ProjectCard({ title, description, image, tags, link, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-xl overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
            <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
                <p className="text-gray-400 mt-2">{description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/80">
                            {tag}
                        </span>
                    ))}
                </div>
                <Link
                    href={link}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                </Link>
            </div>
        </motion.div>
    )
}

