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
} from "lucide-react";
import { project1 } from "../assets";

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
                    className="w-full h-[600px] object-cover  rounded-lg"
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

                    <a
                        href="https://drive.google.com/file/d/1yKVX9lwbpT57VeOCHc5r6cxP9J9744Gk/view?usp=sharing "
                        className="flex items-center gap-2 text-xl"
                        target="_blank"
                    >
                        <span className="font-medium">Read More</span>
                        <span className="text-2xl">➡️</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
