import React, { useEffect, useRef, useState } from "react";

const stats = [
    { value: 16, suffix: "+", label: "Products Launched" },
    { value: 56, suffix: "%", label: "Usability Gain" },
    { value: 48, suffix: "%", label: "Adoption Rate" },
    { value: 90, suffix: "%", label: "User Satisfaction" },
];

function useCountUp(target, duration = 1800, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);
    return count;
}

function StatItem({ value, suffix, label, index, inView }) {
    const count = useCountUp(value, 1600 + index * 150, inView);

    return (
        <div
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "2rem 3rem",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
                position: "relative",
            }}
        >
            {index !== 0 && (
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: "20%",
                        height: "60%",
                        width: "1px",
                        background:
                            "linear-gradient(180deg, transparent, rgba(139,92,246,0.25) 40%, rgba(139,92,246,0.25) 60%, transparent)",
                    }}
                />
            )}

            <div
                style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "2px",
                    marginBottom: "0.4rem",
                }}
            >
                <span
                    style={{
                  
                        fontSize: "clamp(2.8rem, 4.5vw, 5rem)",
                        fontWeight: 700,
                        color: "#1a1035",
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                    }}
                >
                    {count}
                </span>
                <span
                    style={{
                       
                        fontSize: "clamp(1.8rem, 3vw, 3rem)",
                        fontWeight: 700,
                        color: "#7c3aed",
                        lineHeight: 1,
                    }}
                >
                    {suffix}
                </span>
            </div>

            <span
                style={{
                
                    fontSize: "0.82rem",
                    color: "#6b6880",
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                }}
            >
                {label}
            </span>
        </div>
    );
}

export default function StatsSection() {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
           
            <section
                ref={ref}
                style={{
                    background:
                        "linear-gradient(135deg, #faf5ff 0%, #f0f4ff 40%, #fce4ff 80%, #f5f0ff 100%)",
                    position: "relative",
                    overflow: "hidden",
                    padding: "3.5rem 0",
                }}
            >
                {/* Soft purple blob */}
                <div
                    style={{
                        position: "absolute",
                        top: "-60px",
                        left: "10%",
                        width: "320px",
                        height: "320px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }}
                />
                {/* Soft blue blob */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "-80px",
                        right: "5%",
                        width: "380px",
                        height: "380px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(147,197,253,0.2) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }}
                />

                {/* Top hairline */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: "5%",
                        right: "5%",
                        height: "1px",
                        background:
                            "linear-gradient(90deg, transparent, rgba(139,92,246,0.2) 30%, rgba(139,92,246,0.2) 70%, transparent)",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        alignItems: "stretch",
                        maxWidth: "1100px",
                        margin: "0 auto",
                        padding: "0 2rem",
                        position: "relative",
                    }}
                >
                    {stats.map((s, i) => (
                        <StatItem
                            key={s.label}
                            {...s}
                            index={i}
                            inView={inView}
                        />
                    ))}
                </div>

                {/* Bottom hairline */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: "5%",
                        right: "5%",
                        height: "1px",
                        background:
                            "linear-gradient(90deg, transparent, rgba(139,92,246,0.15) 30%, rgba(139,92,246,0.15) 70%, transparent)",
                    }}
                />
            </section>
        </>
    );
}
