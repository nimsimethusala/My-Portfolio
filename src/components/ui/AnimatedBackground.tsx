/*
import {useEffect, useState} from "react";

const AnimatedBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            {/!* Animated Background Elements *!/}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '3s'}}></div>
                <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-orange-400/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

                {/!* Floating geometric shapes *!/}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-4 h-4 ${i % 3 === 0 ? 'bg-red-400/30' : i % 3 === 1 ? 'bg-orange-400/30' : 'bg-yellow-300/30'} 
                       ${i % 4 === 0 ? 'rounded-full' : i % 4 === 1 ? 'rotate-45' : 'rounded-sm'} animate-float`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${3 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>

            {/!* Mouse Follower *!/}
            <div
                className="fixed w-6 h-6 bg-gradient-to-r from-red-400 to-orange-400 rounded-full blur-sm opacity-30 pointer-events-none z-50 transition-all duration-300 ease-out"
                style={{
                    left: mousePosition.x - 12,
                    top: mousePosition.y - 12,
                }}
            ></div>
        </>
    );
};

export default AnimatedBackground;*/

import { useEffect, useState } from "react";

const AnimatedBackground = () => {
    const [bubbles, setBubbles] = useState<
        { id: number; left: string; top: string; size: number; delay: string; duration: string; color: string }[]
    >([]);

    const [ripples, setRipples] = useState<
        { id: number; left: string; top: string; size: number; delay: string; duration: string; color: string }[]
    >([]);

    useEffect(() => {
        const bubbleColors = [
            "bg-red-500/40",
            "bg-orange-500/40",
            "bg-yellow-400/40",
            "bg-green-500/40",
            "bg-blue-500/40",
            "bg-purple-500/40"
        ];

        const rippleColors = [
            "border-red-900/40",
            "border-orange-900/40",
            "border-yellow-900/40",
            "border-green-900/40",
            "border-blue-900/40",
            "border-purple-900/40"
        ];

        // Random bubbles
        const genBubbles = Array.from({ length: 12 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: 100 + Math.random() * 200,
            delay: `${Math.random() * 5}s`,
            duration: `${5 + Math.random() * 6}s`,
            color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)]
        }));

        // Random ripple waves
        const genRipples = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            size: 100 + Math.random() * 200,
            delay: `${Math.random() * 6}s`,
            duration: `${6 + Math.random() * 6}s`,
            color: rippleColors[Math.floor(Math.random() * rippleColors.length)]
        }));

        setBubbles(genBubbles);
        setRipples(genRipples);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none bg-white">
            {/* 🔮 Floating glowing bubbles */}
            {bubbles.map(b => (
                <div
                    key={b.id}
                    className={`absolute rounded-full blur-2xl ${b.color} animate-pulse`}
                    style={{
                        left: b.left,
                        top: b.top,
                        width: b.size,
                        height: b.size,
                        animationDelay: b.delay,
                        animationDuration: b.duration
                    }}
                />
            ))}

            {/* 🌊 Random ripple waves */}
            {ripples.map(r => (
                <div
                    key={r.id}
                    className={`absolute w-4 h-4 rounded-full border-2 ${r.color} animate-ping-slow`}
                    style={{
                        left: r.left,
                        top: r.top,
                        width: r.size,
                        height: r.size,
                        animationDelay: r.delay,
                        animationDuration: r.duration
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedBackground;
