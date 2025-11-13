import React from "react";
import {
    Check,
    ChevronRight,
    Menu,
    Wifi,
    Shield,
    Smartphone,
    Monitor,
    Laptop,
    ArrowRight,
} from "lucide-react";
import { gym, project1 } from "../assets";

export default function PortfolioWorks() {
    return (
        <div className="min-h-screen bg-gray-50" id="works">
            {/* Header */}
            <header className="px-8 md:px-20 lg:px-32 py-12">
                <h1 className="text-3xl md:text-4xl font-normal">
                    Selected Works
                </h1>
            </header>

            {/* Main Content */}
            <div className="px-2 md:px-20 lg:px-32 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 ">
                {/* Left Side - Image */}

                <img
                    src={project1}
                    alt="Norton 360 iOS Design System"
                    className="w-[500px] h-[500px] object-cover  rounded-lg"
                />

                {/* Right Side - Project Description */}
                <div className="lg:sticky lg:top-12 space-y-8 flex  flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-normal leading-tight">
                        Track learning progress of trainee
                    </h2>

                    <div className="space-y-6 text-lg text-gray-700">
                        <div className="flex gap-3">
                            <Check className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                            <p>
                                A robust platform for admins to monitor
                                trainee's progress
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <Check className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                            <p>
                                A comprehensive ecosystem that enables
                                operations to effectively administer trainings
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-start p-8">
                        <a
                            href="https://drive.google.com/file/d/1yKVX9lwbpT57VeOCHc5r6cxP9J9744Gk/view?usp=sharing"
                            className="group relative inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 active:scale-95"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {/* Animated background shine effect */}
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>

                            {/* Pulsing glow effect */}
                            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"></span>

                            {/* Button text */}
                            <span className="relative z-10 tracking-wide">
                                Read More
                            </span>

                            {/* Arrow icon with slide animation */}
                            <span className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-2">
                                <ArrowRight className="w-5 h-5" />
                            </span>

                            {/* Particle effect on edges */}
                            <span className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500"></span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="px-2 md:px-20 lg:px-32 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 ">
                {/* Left Side - Image */}

                <img
                    src={gym}
                    alt="Norton 360 iOS Design System"
                    className="w-[500px] h-[500px] object-cover  rounded-lg"
                />

                {/* Right Side - Project Description */}
                <div className="lg:sticky lg:top-12 space-y-8 flex  flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-normal leading-tight">
                        Mobile Application for Gym management
                    </h2>

                    <div className="space-y-6 text-lg text-gray-700">
                        <div className="flex gap-3">
                            <Check className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                            <p>Automate attendance tracking and fee reminder</p>
                        </div>

                        <div className="flex gap-3">
                            <Check className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                            <p>
                                Track your Gym income & compare from last month,
                                quarter, half yearly
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start p-8">
                        <a
                            href="https://drive.google.com/file/d/1fyrqTMlrlmlEsfdHHIaEqriBHPyztJqq/view?usp=sharing"
                            className="group relative inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 active:scale-95"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {/* Animated background shine effect */}
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>

                            {/* Pulsing glow effect */}
                            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"></span>

                            {/* Button text */}
                            <span className="relative z-10 tracking-wide">
                                Read More
                            </span>

                            {/* Arrow icon with slide animation */}
                            <span className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-2">
                                <ArrowRight className="w-5 h-5" />
                            </span>

                            {/* Particle effect on edges */}
                            <span className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
