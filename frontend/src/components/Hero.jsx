import { useState, useEffect } from 'react';

const Hero = () => {
    const [currentStage, setCurrentStage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Content configuration
    // The user wants:
    // 1. "AI is faster evaluation than ever"
    // 2. "Empowering enterprises with Skillkoder"
    // 3. "Skillkoder" (Constant)

    const stages = [
        {
            pillContent: "AI solutions",
            subText: "AI is faster evaluation than ever so we are from Skillkoder."
        },
        {
            pillContent: "Skillkoder Intelligence",
            subText: "And there next further Skillkoder."
        },
        {
            pillContent: "Skillkoder",
            subText: "Empowering enterprices with Skillkoder.",
            isFinal: true
        }
    ];

    useEffect(() => {
        // If we've reached the final stage (Skillkoder constant), stop the timer.
        if (stages[currentStage].isFinal) return;

        const timer = setTimeout(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentStage((prev) => prev + 1);
                setIsTransitioning(false);
            }, 500); // Wait for fade out animation
        }, 4000); // 4 seconds per slide

        return () => clearTimeout(timer);
    }, [currentStage]);

    const currentContent = stages[currentStage];

    return (
        <section className="hero">
            <div className="hero-container">

                {/* Main Static Header Part */}
                <h1 className="gradient-text-hero">
                    empowering enterprises
                </h1>

                <div className="hero-connector">
                    with
                </div>

                {/* Animated Central Pill */}
                <div className={`hero-pill-container ${isTransitioning ? 'animate-out' : ''}`}>
                    <div className="hero-pill">
                        {currentContent.pillContent}
                    </div>
                </div>

                {/* Animated Subtext */}
                <div className={`hero-subtext ${isTransitioning ? 'animate-out' : ''}`}>
                    {currentContent.subText}
                </div>

            </div>
        </section>
    );
};

export default Hero;
