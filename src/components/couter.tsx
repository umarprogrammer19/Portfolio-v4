"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface CounterProps {
    from: number
    to: number
    className?: string
} 

export function Counter({ from, to, className }: CounterProps) {
    const [count, setCount] = useState(from)
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            const duration = 2000 // 2 seconds
            const steps = 60
            const stepValue = (to - from) / steps
            const stepDuration = duration / steps

            let currentStep = 0

            const timer = setInterval(() => {
                currentStep++
                setCount(Math.min(from + Math.round(stepValue * currentStep), to))

                if (currentStep >= steps) {
                    clearInterval(timer)
                }
            }, stepDuration)

            return () => clearInterval(timer)
        }
    }, [from, to, isInView])

    return (
        <span ref={ref} className={className}>
            {count}
        </span>
    )
}

