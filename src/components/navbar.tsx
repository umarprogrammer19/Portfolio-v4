"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"
                        >
                            Portfolio
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`relative px-3 py-2 rounded-md text-sm font-medium ${pathname === item.href ? "text-sky-400" : "text-gray-300 hover:text-sky-400"
                                        } transition-colors`}
                                >
                                    {item.label}
                                    {pathname === item.href && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400"
                                            layoutId="navbar-underline"
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === item.href
                                        ? "text-sky-400 bg-gray-900"
                                        : "text-gray-300 hover:text-sky-400 hover:bg-gray-700"
                                    } transition-colors`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

