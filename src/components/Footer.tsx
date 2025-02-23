import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-4 md:mb-0">&copy; 2024 Your Name. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary transition-colors"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary transition-colors"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary transition-colors"
                        >
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

