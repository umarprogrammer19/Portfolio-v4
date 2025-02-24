"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Counter } from "@/components/counter"
import { SkillBar } from "@/components/skill-bar"
import { TestimonialCard } from "@/components/testimonial-card"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <motion.section className="min-h-screen relative flex items-center" style={{ opacity, scale }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">Creative Developer & Designer</h1>
            <p className="text-xl md:text-2xl text-gray-400">
              Building digital experiences that make a difference. Specialized in web development, UI/UX design, and
              creative solutions.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-6 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700"
                asChild
              >
                <Link href="/projects" className="flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-sky-400 text-sky-400 hover:bg-sky-400/10" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-sky-400" />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Counter from={0} to={stat.value} className="text-4xl md:text-5xl font-bold gradient-text" />
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillBar name={skill.name} percentage={skill.percentage} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-video rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-sky-400 text-sky-400 hover:bg-sky-400/10" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            Client Testimonials
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm bg-sky-900/20 border border-sky-400/20 p-12 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-600/10" />
            <div className="relative text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Start Your Project?</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Let's work together to create something amazing. Get in touch and let's discuss your ideas.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700"
                asChild
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const stats = [
  { value: 50, label: "Projects Completed" },
  { value: 25, label: "Happy Clients" },
  { value: 5, label: "Years Experience" },
  { value: 100, label: "Coffee Cups" },
]

const skills = [
  { name: "Web Development", percentage: 90 },
  { name: "UI/UX Design", percentage: 85 },
  { name: "React/Next.js", percentage: 95 },
  { name: "TypeScript", percentage: 88 },
  { name: "Node.js", percentage: 82 },
  { name: "Database Design", percentage: 85 },
]

const featuredProjects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with seamless user experience",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio website with stunning animations",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const testimonials = [
  {
    content: "Exceptional work! The attention to detail and creative solutions provided exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
  },
  {
    content:
      "A true professional who delivers outstanding results. The website has significantly improved our online presence.",
    author: "Mike Thompson",
    role: "Marketing Director",
  },
  {
    content: "Incredible experience working together. The final product was exactly what we envisioned and more.",
    author: "Emily Davis",
    role: "Product Manager",
  },
]

