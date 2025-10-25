import React from "react";
import { resume } from "../assets";

export default function PortfolioHero() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 flex flex-col">
            {/* Navigation */}
            <nav className="flex justify-end items-center p-8 md:p-12">
                <div className="flex gap-8 md:gap-12 text-gray-700">
                    <a
                        href="#works"
                        className="text-lg hover:text-purple-600 transition-colors"
                    >
                        Works
                    </a>
                    {/* <a
                        href="#about"
                        className="text-lg hover:text-purple-600 transition-colors"
                    >
                        About
                    </a> */}
                    <a
                        href={resume}
                        className="text-lg hover:text-purple-600 transition-colors"
                        target="_blank"
                    >
                        Résumé
                    </a>
                </div>
            </nav>

            {/* Hero Content */}
            <main className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32 lg:max-w-[80%]">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
                        Hello there 👋,
                    </h1>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
                        I'm{" "}
                        <span className="text-purple-600 font-semibold">
                            Akshay
                        </span>
                        , a full spectrum product designer focused on
                        interaction design and design systems.
                    </h2>
                </div>

                <p className="mt-12 text-xl md:text-2xl text-gray-700">
                    Senior UX Designer @ Globallogic | Previously @ Ofbusiness,
                    clik.ai & iimjobs.com
                </p>
            </main>

            {/* Scroll Indicator */}
            <div className="flex justify-center pb-12">
                <svg
                    className="w-8 h-8 text-gray-700 animate-bounce"
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
            </div>
        </div>
    );
}
