import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useTheme } from "../context/ThemeContext.tsx";
import innovestaPresenting from "../assets/1000053101.jpg";
import innovativeTeam from "../assets/IMG-20240311-WA0007.jpg";
import demonstratorTeam from "../assets/1000086678.jpg";
import acedemicStaff from "../assets/IMG-20250101-WA0177.jpg";
import netronixWinning from "../assets/WhatsApp Image 2025-08-29 at 17.41.15_025e6d64.jpg";
import netronixTeam from "../assets/IMG-20250825-WA0017.jpg";

export function GallerySection() {
  const galleryItems = [
    {
      id: 1,
      title: "2nd Place Winner – Circle Edge Competition",
      description:
        "Developed an OCR-powered Tax Calculation Automation System and earned 2nd Place at the Circle Edge Competition for delivering an innovative and impactful solution.",
      image: netronixWinning,
    },
    {
      id: 2,
      title: "Academic Staff Collaboration – IJSE",
      description:
        "Worked alongside the academic staff as a Demonstrator, contributing to teaching support, student guidance, and academic excellence for one year.",
      image: acedemicStaff,
    },
    {
      id: 3,
      title: "Academic Demonstrator and Instructor Team – IJSE",
      description:
        "Collaborated with fellow academic demonstrators to support student learning, practical sessions, and academic activities during my one-year tenure at IJSE.",
      image: demonstratorTeam,
    },
    {
      id: 4,
      title: "Award-Winning Innovation Team",
      description:
        "Participated in a competitive innovation challenge and contributed to the successful development of a solution recognized for creativity, technical excellence, and teamwork.",
      image: innovativeTeam,
    },
    {
      id: 5,
      title: "Netronix Team – Circle Edge Competition",
      description:
        "Celebrating our achievement of securing 2nd Place in the Circle Edge Competition through innovation, teamwork, and technical excellence.",
      image: netronixTeam,
    },
    {
      id: 6,
      title: "Technical Presentation & Knowledge Sharing",
      description:
        "Delivered a professional presentation, communicating technical concepts and project insights to an audience. This experience strengthened public speaking, presentation, and stakeholder communication skills.",
      image: innovestaPresenting,
    },
  ];

  const total = galleryItems.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { theme, themeColors } = useTheme();

  // Left strip: start → end order (index 0,1,2,3,4,5)
  const leftStrip = galleryItems.map((_, i) => i);
  // Right strip: end → start order (index 5,4,3,2,1,0)
  const rightStrip = [...galleryItems.map((_, i) => i)].reverse();

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.5 },
    }),
  };

  const navigateGallery = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) =>
        newDirection > 0
          ? prev === total - 1 ? 0 : prev + 1
          : prev === 0 ? total - 1 : prev - 1
      );
    },
    [total]
  );

  // Auto-play every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => navigateGallery(1), 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, navigateGallery]);

  const pauseAndResume = () => {
    setIsAutoPlaying(false);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const handleUserNav = (newDirection: number) => {
    pauseAndResume();
    navigateGallery(newDirection);
  };

  const handleStripClick = (index: number) => {
    pauseAndResume();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Shared strip item renderer
  const StripItem = ({
    index,
    side,
  }: {
    index: number;
    side: "left" | "right";
  }) => {
    const isActive = index === currentIndex;
    return (
      <motion.button
        key={`${side}-${index}`}
        onClick={() => handleStripClick(index)}
        className="relative overflow-hidden w-full shrink-0"
        style={{
          height: `${Math.floor(500 / total) - 4}px`,
          borderRadius: "8px",
          border: isActive
            ? `2px solid ${themeColors[theme].accent}`
            : `1px solid ${themeColors[theme].accent}30`,
          boxShadow: isActive
            ? `0 0 12px ${themeColors[theme].accent}80`
            : "none",
          opacity: isActive ? 1 : 0.55,
          transition: "opacity 0.3s, box-shadow 0.3s, border 0.3s",
        }}
        whileHover={{ opacity: 1, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <img
          src={galleryItems[index].image}
          alt={galleryItems[index].title}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay blending toward main gallery */}
        <div
          className="absolute inset-0"
          style={{
            background:
              side === "left"
                ? `linear-gradient(to right, rgba(0,0,0,0.35), transparent 60%)`
                : `linear-gradient(to left, rgba(0,0,0,0.35), transparent 60%)`,
          }}
        />
        {/* Active highlight bar */}
        {isActive && (
          <div
            className="absolute inset-x-0 bottom-0 h-[3px]"
            style={{ backgroundColor: themeColors[theme].accent }}
          />
        )}
      </motion.button>
    );
  };

  return (
    <section
      id="gallery"
      className="relative py-20 bg-gradient-to-br from-[#FFFFFF]/30 to-[#000000]/50 overflow-hidden"
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
          <h2
            className="text-5xl font-bold"
            style={{ color: themeColors[theme].text }}
          >
            Gallery
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: themeColors[theme].accent }}
          />
        </motion.div>

        {/* Three-column layout */}
        <div className="flex items-stretch gap-3 w-full max-w-6xl mx-auto">

          {/* ── Left Strip: start → end ── */}
          <div className="hidden md:flex flex-col gap-1 w-[102px] shrink-0" style={{ height: "500px" }}>
            {leftStrip.map((index) => (
              <StripItem key={`left-${index}`} index={index} side="left" />
            ))}
          </div>

          {/* ── Main Gallery ── */}
          <div className="relative flex-1 min-w-0">
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
                  <div
                    className="relative w-full h-full"
                    style={{
                      borderBottom: `4px solid ${themeColors[theme].accent}`,
                    }}
                  >
                    <img
                      src={galleryItems[currentIndex].image}
                      alt={galleryItems[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 flex flex-col justify-end p-8 md:p-12"
                      style={{
                        background: `linear-gradient(to top,${themeColors[theme].accent}66,${themeColors[theme].accent}33,transparent)`,
                      }}
                    >
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-3"
                      >
                        {galleryItems[currentIndex].title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-lg text-white mb-6"
                      >
                        {galleryItems[currentIndex].description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Nav Buttons */}
              <button
                onClick={() => handleUserNav(-1)}
                className="absolute top-1/2 left-4 -translate-y-1/2 p-3 rounded-full z-10 shadow-lg"
                style={{
                  backgroundColor: themeColors[theme].accent,
                  color: "#fff",
                  boxShadow: `0 0 15px ${themeColors[theme].accent}`,
                }}
                aria-label="Previous project"
              >
                <ChevronLeftIcon size={24} />
              </button>
              <button
                onClick={() => handleUserNav(1)}
                className="absolute top-1/2 right-4 -translate-y-1/2 p-3 rounded-full z-10 shadow-lg"
                style={{
                  backgroundColor: themeColors[theme].accent,
                  color: "#fff",
                  boxShadow: `0 0 15px ${themeColors[theme].accent}`,
                }}
                aria-label="Next project"
              >
                <ChevronRightIcon size={24} />
              </button>

              {/* Counter */}
              <div className="absolute top-6 right-6 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {currentIndex + 1} / {total}
              </div>

              {/* Auto-play progress bar */}
              {isAutoPlaying && (
                <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                  <motion.div
                    key={`progress-${currentIndex}`}
                    className="h-full"
                    style={{ backgroundColor: themeColors[theme].accent }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* ── Right Strip: end → start ── */}
          <div className="hidden md:flex flex-col gap-1 w-[102px] shrink-0" style={{ height: "500px" }}>
            {rightStrip.map((index) => (
              <StripItem key={`right-${index}`} index={index} side="right" />
            ))}
          </div>

        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -left-20 top-1/4 w-40 h-40 rounded-full border-8 z-0"
        style={{ borderColor: `${themeColors[theme].accent}45` }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 bottom-1/3 w-60 h-60 rounded-full border-8 z-0"
        style={{ borderColor: `${themeColors[theme].primary}20` }}
        animate={{ scale: [1, 0.9, 1], x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}