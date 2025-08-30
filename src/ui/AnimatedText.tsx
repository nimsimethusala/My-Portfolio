import React from "react"
import { motion, type Variants } from "framer-motion"

// Allowed theme colors + fallback to any string
type AllowedColors =
    | "#A7E6FF"
    | "#EBD3F8"
    | "#023306"
    | "#FFC100"
    | "#fc6d98"
    | string

interface AnimatedTextProps {
    text: string
    className?: string
    once?: boolean
    style?: { color: AllowedColors }
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
                                                       text,
                                                       className = "",
                                                       once = true,
                                                       style
                                                   }) => {
    const words = text.split(" ")

    // Variants for container of words
    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.04 * i
            }
        })
    }

    // Variants for each word
    const child: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100
            }
        }
    }

    return (
        <motion.div
            className={`overflow-hidden flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            style={style} // ✅ now accepts both palette + any string
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className="mr-2 inline-block"
                    variants={child}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    )
}

export default AnimatedText