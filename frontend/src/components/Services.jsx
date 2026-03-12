const Services = () => {
    const services = [
        {
            title: 'AI Automation',
            desc: 'Custom AI and machine learning workflows that streamline business processes and improve decision-making.',
            icon: '🤖'
        },
        {
            title: 'Website Design',
            desc: 'Responsive, modern websites that represent your brand and convert visitors into clients.',
            icon: '💻'
        },
        {
            title: 'AI Consulting',
            desc: 'Expert guidance on integrating AI into your products and services for maximum impact.',
            icon: '🧠'
        }
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                <h2>Our Services</h2>
                <div className="services-grid">
                    {services.map((s, i) => (
                        <div key={i} className="service-card">
                            <div className="service-icon">{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;