import { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { title: 'Home', href: '#home' },
        { title: 'Services', href: '#services' },
        { title: 'Projects', href: '#projects' },
        { title: 'Clients', href: '#clients' },
        { title: 'About', href: '#about' },
        { title: 'Contact', href: '#contact' }
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`} id="home">
            <div className="header-content">
                <div className="logo" onClick={() => window.scrollTo(0, 0)}>
                    <div className="logo-dots">
                        <span className="dot blue"></span>
                        <span className="dot green"></span>
                        <span className="dot orange"></span>
                        <span className="dot pink"></span>
                    </div>
                    <span>Skillkoder</span>
                </div>

                <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
