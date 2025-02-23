"use client"

import type React from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text3D, Center } from "@react-three/drei"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaCode, FaPalette, FaMobileAlt } from "react-icons/fa"

const FloatingText = () => (
  <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
    <Center>
      <Text3D font="/fonts/Poppins_Bold.json" size={1.5} height={0.2} curveSegments={12}>
        Your Name
        <meshStandardMaterial color="#FF4136" />
      </Text3D>
    </Center>
  </Float>
)

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: { icon: React.ElementType; title: string; description: string }) => (
  <div className="bg-accent p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
    <Icon className="text-4xl text-secondary mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
)

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <Canvas className="absolute inset-0">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} />
          <FloatingText />
        </Canvas>
        <div className="z-10 text-center">
          <motion.h1
            className="text-6xl font-bold mb-4 font-poppins"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Your Name
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-300 font-inter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Web Developer & Designer
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
            <Button asChild className="mt-8">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 bg-gradient-to-b from-black to-accent">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center font-poppins">Welcome to My Portfolio</h2>
            <p className="text-xl text-center max-w-2xl mx-auto font-inter">
              I'm a passionate web developer and designer with over 5 years of experience in creating stunning,
              functional websites and applications. My goal is to bring your ideas to life with cutting-edge technology
              and eye-catching designs.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center font-poppins">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={FaCode}
                title="Web Development"
                description="Custom web applications built with the latest technologies to meet your specific needs."
              />
              <ServiceCard
                icon={FaPalette}
                title="UI/UX Design"
                description="Intuitive and visually appealing interfaces that enhance user experience and engagement."
              />
              <ServiceCard
                icon={FaMobileAlt}
                title="Responsive Design"
                description="Websites that look and function perfectly on all devices, from mobile to desktop."
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-gradient-to-b from-accent to-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center font-poppins">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div
                  key={project}
                  className="bg-muted rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                >
                  <img
                    src={`https://picsum.photos/seed/${project}/400/250`}
                    alt={`Project ${project}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 font-poppins">Project {project}</h3>
                    <p className="text-gray-400 font-inter">
                      A brief description of the project and the technologies used. Click to learn more about the
                      challenges and solutions.
                    </p>
                    <Button variant="ghost" asChild className="mt-4">
                      <Link href={`/projects#project-${project}`}>View Project</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 font-poppins">Let's Work Together</h2>
            <p className="text-xl mb-8 font-inter">
              Ready to start your next project? I'm here to help you bring your vision to life.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}

