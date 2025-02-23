import Link from "next/link"
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                    Your Name
                </Link>
                <div className="space-x-4">
                    <Button variant="ghost" asChild>
                        <Link href="/">Home</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="/about">About</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="/services">Services</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="/projects">Projects</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="/contact">Contact</Link>
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

