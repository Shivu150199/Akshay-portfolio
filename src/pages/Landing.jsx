import React from "react";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioWorks from "../components/Portfolioworks";
import Footer from "../components/Footer";

const Landing = () => {
    return (
        <div className="w-full flex flex-col ">
            <PortfolioHero />
            <PortfolioWorks />
            <Footer />
        </div>
    );
};

export default Landing;
