import { useState, useEffect } from 'react';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const messages = [
        'AI Automation for Modern Businesses',
        'Intelligent Solutions, Real Results',
        'Transform Your Business with AI'
    ];

    useEffect(() => {
        const fadeOutTimer = setTimeout(() => {
            setFade(false);
        }, 3500);

        const changeTimer = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % messages.length);
            setFade(true);
        }, 4000);

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(changeTimer);
        };
    }, [currentIndex]);

    return (
        <section className="hero" id="home">
            <div className="hero-background"></div>
            <div className="hero-container">
                <h1 className={`gradient-text-hero ${fade ? 'fade-in' : 'fade-out'}`}>
                    {messages[currentIndex]}
                </h1>
                <p className="hero-subtext">Delivering innovative AI-powered solutions and beautiful websites that clients trust.</p>
                <a href="#projects" className="hero-cta">View Our Work</a>
            </div>
        </section>
    );
};

export default Hero;
