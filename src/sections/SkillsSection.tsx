import { useState, useEffect, type SetStateAction} from 'react';

const TechStackCard = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Group technologies into slides
    const slides = [
        {
            title: "Frontend Technologies",
            subtitle: "Building beautiful user interfaces",
            technologies: [
                {name: 'React', color: 'from-cyan-400 to-blue-500', icon: '⚛️', description: 'Frontend Library'},
                {name: 'TypeScript', color: 'from-blue-500 to-blue-600', icon: 'TS', description: 'Type Safety'},
                {
                    name: 'JavaScript',
                    color: 'from-yellow-400 to-yellow-500',
                    icon: 'JS',
                    description: 'Programming Language'
                },
                {name: 'HTML5', color: 'from-orange-500 to-red-500', icon: '5', description: 'Markup Language'},
                {name: 'CSS3', color: 'from-blue-500 to-blue-600', icon: '3', description: 'Styling'},
                {name: 'Tailwind', color: 'from-teal-400 to-blue-500', icon: '🌊', description: 'CSS Framework'}
            ]
        },
        {
            title: "Backend & Mobile",
            subtitle: "Powering server-side and mobile applications",
            technologies: [
                {name: 'Node.js', color: 'from-green-500 to-green-600', icon: '⬢', description: 'Runtime Environment'},
                {
                    name: 'React Native',
                    color: 'from-cyan-400 to-purple-500',
                    icon: '📱',
                    description: 'Mobile Development'
                },
                {name: 'Java', color: 'from-red-500 to-orange-500', icon: '☕', description: 'Backend Language'},
                {name: 'Python', color: 'from-blue-500 to-yellow-500', icon: '🐍', description: 'Programming Language'},
                {name: 'MySQL', color: 'from-orange-400 to-orange-600', icon: '🐬', description: 'Database'}
            ]
        },
        {
            title: "Full Stack Overview",
            subtitle: "Complete technology ecosystem",
            technologies: [
                {name: 'Frontend', color: 'from-purple-500 to-pink-500', icon: '🎨', description: 'User Experience'},
                {name: 'Backend', color: 'from-green-500 to-teal-500', icon: '⚙️', description: 'Server Logic'},
                {name: 'Database', color: 'from-blue-500 to-indigo-500', icon: '💾', description: 'Data Storage'},
                {name: 'Mobile', color: 'from-orange-500 to-red-500', icon: '📱', description: 'Cross Platform'},
                {name: 'DevOps', color: 'from-gray-500 to-gray-700', icon: '🔧', description: 'Deployment'},
                {name: 'API', color: 'from-yellow-500 to-orange-500', icon: '🔗', description: 'Integration'}
            ]
        }
    ];

    // Auto-advance slideshow
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsTransitioning(false);
        }, 300);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setIsTransitioning(false);
        }, 300);
    };

    const goToSlide = (index: SetStateAction<number>) => {
        if (isTransitioning || index === currentSlide) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide(index);
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 flex items-center justify-center">
            <div className="max-w-6xl w-full relative">

                {/* Main Card Container */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden relative">

                    {/* Slide Container */}
                    <div className="relative h-[600px]">
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                className={`absolute inset-0 p-8 transition-all duration-500 ease-in-out transform ${
                                    slideIndex === currentSlide
                                        ? 'translate-x-0 opacity-100 z-10'
                                        : slideIndex < currentSlide
                                            ? '-translate-x-full opacity-0 z-0'
                                            : 'translate-x-full opacity-0 z-0'
                                } ${isTransitioning ? 'transition-all duration-300' : ''}`}
                            >

                                {/* Header */}
                                <div className="text-center mb-8">
                                    <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                                        {slide.title}
                                    </h1>
                                    <p className="text-gray-300 text-lg">
                                        {slide.subtitle}
                                    </p>
                                </div>

                                {/* Technology Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                                    {slide.technologies.map((tech, techIndex) => (
                                        <div
                                            key={`${slideIndex}-${techIndex}`}
                                            className={`group relative bg-gradient-to-br ${tech.color} rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer ${
                                                slideIndex === currentSlide && !isTransitioning ? 'animate-fade-in-up' : ''
                                            }`}
                                            style={{
                                                animationDelay: slideIndex === currentSlide ? `${techIndex * 100}ms` : '0ms',
                                                animationFillMode: 'both'
                                            }}
                                        >
                                            {/* Icon/Text */}
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                                                    {tech.icon}
                                                </div>
                                                <h3 className="text-white font-semibold text-sm mb-1">{tech.name}</h3>
                                                <p className="text-white/80 text-xs">{tech.description}</p>
                                            </div>

                                            {/* Hover effects */}
                                            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    ))}
                                </div>

                                {/* Progress bar for current slide */}
                                <div className="w-full bg-white/20 rounded-full h-1 mb-4">
                                    <div
                                        className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-300"
                                        style={{ width: slideIndex === currentSlide ? '100%' : '0%' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Controls */}
                    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
                        <button
                            onClick={prevSlide}
                            disabled={isTransitioning}
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 transition-all duration-300 disabled:opacity-50"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>

                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
                        <button
                            onClick={nextSlide}
                            disabled={isTransitioning}
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 transition-all duration-300 disabled:opacity-50"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                disabled={isTransitioning}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide
                                        ? 'bg-gradient-to-r from-cyan-400 to-purple-500 scale-125'
                                        : 'bg-white/30 hover:bg-white/50'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Slide Counter */}
                    <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-md rounded-full px-4 py-2 text-white/80 text-sm z-20">
                        {currentSlide + 1} / {slides.length}
                    </div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className={`absolute w-2 h-2 bg-white/20 rounded-full animate-float-${(i % 6) + 1}`}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${i * 0.7}s`
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(90deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-90deg); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(270deg); }
        }
        @keyframes float-6 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(-270deg); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 8s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 9s ease-in-out infinite; }
        .animate-float-5 { animation: float-5 5s ease-in-out infinite; }
        .animate-float-6 { animation: float-6 10s ease-in-out infinite; }
      `}</style>
        </div>
    );
};

export default TechStackCard;