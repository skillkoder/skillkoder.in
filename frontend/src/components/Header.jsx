import { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    const navItems = [
        {
            title: 'What We Do',
            type: 'megamenu',
            headerBoxColor: 'yellow',
            columns: [
                {
                    title: 'Services',
                    items: ['Applications', 'Skillkoder Intelligence', 'Business Process Services', 'Cloud', 'Consulting', 'Cybersecurity', 'Data & Analytics', 'Digital Experiences', 'Engineering', 'Sustainability']
                },
                {
                    title: 'Industries',
                    items: ['Banking & Financial Services', 'Comms, Media & Information Services', 'Consumer', 'Energy, Manufacturing and Resources', 'Technology Products and Services', 'Healthcare', 'Hi-Tech', 'Life Sciences & Pharma', 'Medical Devices', 'Platforms, Software Products and Gaming']
                }
            ]
        },
        {
            title: 'What We Think',
            type: 'link'
        },
        {
            title: 'About Skillkoder',
            type: 'megamenu',
            headerBoxColor: 'green',
            columns: [
                {
                    items: ['About Us', 'Analyst Speak', 'Awards and Recognitions', 'Case Studies', 'Corporate Sustainability', 'Events']
                },
                {
                    items: ['Inclusion and Belonging', 'Investors', 'Leadership', 'Locations', 'News', 'Partner Ecosystem']
                },
                {
                    items: ['Privacy', 'Supplier Diversity', 'Skillkoder Innovation Network', 'Skillkoder Ventures', 'Skillkoder Wellbeing']
                }
            ]
        },
        {
            title: 'Careers',
            type: 'link'
        },
        {
            title: 'Contact Us',
            type: 'link'
        }
    ];

    return (
        <>
            <div
                className={`megamenu-overlay ${activeDropdown !== null ? 'active' : ''}`}
                onClick={() => setActiveDropdown(null)}
            ></div>

            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="header-content">
                    <div className="logo" onClick={() => window.scrollTo(0, 0)}>
                        <div className="logo-dots">
                            <span className="dot blue"></span>
                            <span className="dot green"></span>
                            <span className="dot orange"></span>
                            <span className="dot pink"></span>
                        </div>
                        <span>skillkoder</span>
                    </div>

                    <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
                        <ul className="nav-links">
                            {navItems.map((item, index) => (
                                <li key={index} className={item.type === 'megamenu' ? 'dropdown' : ''}>
                                    <a
                                        href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        className={`nav-link ${activeDropdown === index ? 'active-toggle' : ''}`}
                                        onClick={(e) => {
                                            if (item.type === 'megamenu') {
                                                e.preventDefault();
                                                toggleDropdown(index);
                                            }
                                        }}
                                    >
                                        {item.title}
                                        {item.type === 'megamenu' && <span style={{ marginLeft: '5px', fontSize: '10px' }}>{activeDropdown === index ? '▲' : '▼'}</span>}
                                    </a>
                                    {item.type === 'megamenu' && (
                                        <div className={`megamenu ${activeDropdown === index ? 'active' : ''}`}>
                                            <div className="megamenu-grid">
                                                <div className="megamenu-header-col">
                                                    <div className={`megamenu-header-box ${item.headerBoxColor}`}>
                                                        <h2 className="megamenu-header-title">{item.title}</h2>
                                                    </div>
                                                </div>
                                                <div className="megamenu-content-cols" style={{ gridColumn: 'span 2', display: 'grid', gridTemplateColumns: `repeat(${item.columns.length}, 1fr)`, gap: 'var(--spacing-3xl)' }}>
                                                    {item.columns.map((col, colIdx) => (
                                                        <div key={colIdx} className="megamenu-column">
                                                            {col.title && <h3 className="megamenu-column-title">{col.title}</h3>}
                                                            <ul className="megamenu-list">
                                                                {col.items.map((link, linkIdx) => (
                                                                    <li key={linkIdx} className="megamenu-item">
                                                                        <a href="#" className="megamenu-link" onClick={() => setActiveDropdown(null)}>
                                                                            {link}
                                                                            <span className="arrow">›</span>
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className="language-selector">
                            <span className="globe-icon">🌐</span>
                            <span>EN</span>
                            <span className="arrow-down">▼</span>
                        </div>
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
        </>
    );
};

export default Header;
