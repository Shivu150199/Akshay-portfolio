import React from "react";
import { resume } from "react-dom/server";

const Footer = () => {
    return (
        <footer className="px-8 md:px-20 lg:px-32 py-16 bg-purple-100">
            <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-normal">
                    Like what you see??
                </h2>

                <p className="text-3xl md:text-4xl font-normal">
                    View my{" "}
                    <a
                        href={resume}
                        className="text-purple-600 hover:underline"
                    >
                        résumé
                    </a>
                    , get in touch 👇
                </p>

                <div className="flex items-center gap-6 text-xl">
                    <a
                        href="mailto: akshay15696@gmail.com"
                        className="hover:text-purple-600 transition-colors flex items-center gap-2"
                    >
                        Email 💡
                    </a>
                    <span>|</span>
                    <a
                        href="https://www.linkedin.com/in/akshay-singh-b6910412b/"
                        className="hover:text-purple-600 transition-colors flex items-center gap-2"
                    >
                        LinkedIn 💼
                    </a>
                </div>

                <p className="text-gray-600 pt-8">
                    Designed and Handcoded in india with ♥️ by Akshay ©{" "}
                    {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
