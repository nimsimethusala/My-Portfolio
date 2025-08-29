import { motion, type Variants } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    inline?: boolean;
}

export function AnimatedText({ text, inline = false }: AnimatedTextProps) {
    const words = text.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.04 * i,
            },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring", // ✅ must be literal
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring", // ✅
                damping: 12,
                stiffness: 100,
            },
        },
    };

    if (inline) {
        return (
            <motion.span
                variants={container}
                initial="hidden"
                animate="visible"
                className="inline-block"
            >
                {words.map((word, index) => (
                    <motion.span variants={child} key={index} className="inline-block">
                        {word}
                        {index !== words.length - 1 ? " " : ""}
                    </motion.span>
                ))}
            </motion.span>
        );
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="inline-block"
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index} className="inline-block mr-1">
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}