import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-sky-400 mb-4">About</h3>
                        <p className="text-gray-400">
                            Crafting digital experiences with passion and precision. Let's bring your ideas to life.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-sky-400 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-sky-400 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-sky-400 mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-400">&copy; 2023 Your Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

