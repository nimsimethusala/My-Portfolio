import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ExternalLinkIcon,
} from "lucide-react";

export function GallerySection() {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack shopping platform with React and Node.js",
            image:
                "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1000&q=80",
            link: "#",
        },
        {
            id: 2,
            title: "Social Media Dashboard",
            description: "Analytics dashboard with data visualization",
            image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
            link: "#",
        },
        {
            id: 3,
            title: "Mobile Banking App",
            description: "Secure financial application with React Native",
            image:
                "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
            link: "#",
        },
        {
            id: 4,
            title: "AI Content Generator",
            description: "Machine learning tool for content creation",
            image:
                "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80",
            link: "#",
        },
        {
            id: 5,
            title: "Real-time Chat Application",
            description: "WebSocket powered messaging platform",
            image:
                "https://images.unsplash.com/photo-1563986768494-4dee9dbf56ce?auto=format&fit=crop&w=1000&q=80",
            link: "#",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Framer Motion slide variants
    const slideVariants: Variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.5 },
        }),
    };

    const navigateGallery = (newDirection: number) => {
        setDirection(newDirection);
        if (newDirection > 0) {
            setCurrentIndex((prevIndex) =>
                prevIndex === projects.length - 1 ? 0 : prevIndex + 1
            );
        } else {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? projects.length - 1 : prevIndex - 1
            );
        }
    };

    const getVisibleThumbnails = () => {
        const total = projects.length;
        const thumbnails = [currentIndex];
        for (let i = 1; i <= 2; i++) {
            thumbnails.push((currentIndex + i) % total);
        }
        thumbnails.push((currentIndex - 1 + total) % total);
        return thumbnails;
    };

    const visibleThumbnails = getVisibleThumbnails();

    return (
        <section
            id="gallery"
            className="relative py-20 bg-gradient-to-br from-[#F3FF90]/10 via-white to-[#9BEC00]/10 overflow-hidden"
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Project <span className="text-[#059212]">Gallery</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#9BEC00] mx-auto"></div>
                </motion.div>

                {/* Main Gallery */}
                <div className="relative w-full max-w-4xl mx-auto mb-16">
                    <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0"
                            >
                                <div className="relative w-full h-full">
                                    <img
                                        src={projects[currentIndex].image}
                                        alt={projects[currentIndex].title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            className="text-3xl md:text-4xl font-bold text-white mb-3"
                                        >
                                            {projects[currentIndex].title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.5 }}
                                            className="text-lg text-gray-200 mb-6"
                                        >
                                            {projects[currentIndex].description}
                                        </motion.p>
                                        <motion.a
                                            href={projects[currentIndex].link}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4, duration: 0.5 }}
                                            className="inline-flex items-center bg-white text-[#059212] px-6 py-3 rounded-full hover:bg-[#F3FF90] transition-colors shadow-lg w-fit"
                                        >
                                            View Project <ExternalLinkIcon size={18} className="ml-2" />
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <button
                            onClick={() => navigateGallery(-1)}
                            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full text-[#059212] z-10 shadow-lg"
                            aria-label="Previous project"
                        >
                            <ChevronLeftIcon size={24} />
                        </button>
                        <button
                            onClick={() => navigateGallery(1)}
                            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full text-[#059212] z-10 shadow-lg"
                            aria-label="Next project"
                        >
                            <ChevronRightIcon size={24} />
                        </button>

                        {/* Counter */}
                        <div className="absolute top-6 right-6 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                            {currentIndex + 1} / {projects.length}
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex justify-center mt-6 gap-4">
                        {visibleThumbnails.map((index) => (
                            <motion.button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`relative overflow-hidden rounded-lg ${
                                    index === currentIndex
                                        ? "ring-4 ring-[#059212]"
                                        : "ring-2 ring-transparent"
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="w-20 h-20">
                                    <img
                                        src={projects[index].image}
                                        alt={`Thumbnail for ${projects[index].title}`}
                                        className="w-full h-full object-cover"
                                    />
                                    {index !== currentIndex && (
                                        <div className="absolute inset-0 bg-black/30"></div>
                                    )}
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <motion.div
                className="absolute -left-20 top-1/4 w-40 h-40 rounded-full border-8 border-[#9BEC00]/20 z-0"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute right-0 bottom-1/3 w-60 h-60 rounded-full border-8 border-[#059212]/10 z-0"
                animate={{ scale: [1, 0.9, 1], x: [0, -20, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
        </section>
    );
}