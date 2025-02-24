import type React from "react"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SmokeBackground from "@/components/smoke-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio",
  description: "My professional portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "bg-background text-foreground min-h-screen")}>
        <SmokeBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

