import React, { useState, useEffect } from "react";
import { resume } from "../assets";

export default function PortfolioHero() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 flex flex-col relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 transition-transform duration-300 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    }}
                ></div>
                <div
                    className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 transition-transform duration-500 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    }}
                ></div>
                <div
                    className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 transition-transform duration-700 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${
                            mousePosition.y * -0.03
                        }px)`,
                    }}
                ></div>
            </div>

            {/* Navigation */}
            <nav
                className={`flex justify-end items-center p-8 md:p-12 relative z-10 transition-all duration-1000 ${
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4"
                }`}
            >
                <div className="flex gap-8 md:gap-12 text-gray-700">
                    <a
                        href="#works"
                        className="text-lg hover:text-purple-600 transition-all duration-300 hover:scale-110 relative group"
                    >
                        Works
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a
                        href={resume}
                        className="text-lg hover:text-purple-600 transition-all duration-300 hover:scale-110 relative group"
                        target="_blank"
                    >
                        Résumé
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
            </nav>

            {/* Hero Content */}
            <main className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32 lg:max-w-[80%] relative z-10">
                <div className="space-y-6">
                    <h1
                        className={`text-3xl md:text-4xl lg:text-5xl font-normal leading-tight transition-all duration-700 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-8"
                        }`}
                        style={{ transitionDelay: "200ms" }}
                    >
                        Hello there{" "}
                        <span className="inline-block animate-wave origin-bottom-right">
                            👋
                        </span>
                        ,
                    </h1>

                    <h2
                        className={`text-3xl md:text-4xl lg:text-5xl font-normal leading-tight transition-all duration-700 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-8"
                        }`}
                        style={{ transitionDelay: "400ms" }}
                    >
                        I'm{" "}
                        <span className="text-purple-600 font-semibold">
                            Akshay
                        </span>
                        , a full spectrum product designer focused on AI-driven
                        experiences and interaction design.
                    </h2>
                </div>

                <p
                    className={`mt-12 text-xl md:text-2xl text-gray-700 transition-all duration-700 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                >
                    Senior UX Designer @ Globallogic | Previously @ Ofbusiness,
                    clik.ai & iimjobs.com
                </p>
            </main>

            <a
                href="#works"
                className={`flex justify-center pb-12 relative z-10 transition-all duration-700 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: "800ms" }}
            >
                <svg
                    className="w-8 h-8 text-gray-700 animate-bounce cursor-pointer hover:text-purple-600 transition-colors duration-300"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M19 9l-7 7-7-7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </a>

            <style>{`
             @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes wave {
                    0%, 100% {
                        transform: rotate(0deg);
                    }
                    10%, 30% {
                        transform: rotate(14deg);
                    }
                    20%, 40% {
                        transform: rotate(-8deg);
                    }
                    50% {
                        transform: rotate(14deg);
                    }
                    60% {
                        transform: rotate(-4deg);
                    }
                    70% {
                        transform: rotate(10deg);
                    }
                    80% {
                        transform: rotate(0deg);
                    }
                }
                
                .animate-wave {
                    animation: wave 2.5s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
