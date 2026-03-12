const Clients = () => {
    const clients = [
        {
            name: 'GreenPark',
            service: 'AI Automation',
            description: 'Implemented intelligent automation solutions for operational efficiency.',
            logo: '🏢'
        },
        {
            name: 'Marigold Hotel',
            service: 'AI Automation',
            description: 'Developed AI-powered systems for guest experience and hotel management.',
            logo: '🏨'
        },
        {
            name: 'AVASA',
            service: 'AI Automation',
            description: 'Created automated workflows and AI solutions for business processes.',
            logo: '🏢'
        },
        {
            name: 'Divineretreat',
            service: 'Website Designing',
            description: 'Designed and developed a modern, responsive website for their retreat services.',
            logo: '🌿'
        }
    ];

    const certifications = [
        {
            title: 'AI Implementation Certified',
            issuer: 'TechCert Institute',
            year: '2024'
        },
        {
            title: 'Web Design Professional',
            issuer: 'Design Standards Board',
            year: '2024'
        },
        {
            title: 'Automation Solutions Expert',
            issuer: 'Business Tech Council',
            year: '2023'
        }
    ];

    return (
        <section className="clients" id="clients">
            <div className="container">
                <h2>Our Clients</h2>
                <p className="clients-intro">
                    Trusted by leading organizations for AI automation and web design solutions.
                </p>

                <div className="clients-grid">
                    {clients.map((client, index) => (
                        <div key={index} className="client-card">
                            <div className="client-logo">{client.logo}</div>
                            <h3>{client.name}</h3>
                            <span className="client-service">{client.service}</span>
                            <p>{client.description}</p>
                        </div>
                    ))}
                </div>

                <div className="certifications-section">
                    <h3>Certifications & Expertise</h3>
                    <div className="certifications-grid">
                        {certifications.map((cert, index) => (
                            <div key={index} className="certification-card">
                                <div className="cert-icon">🏆</div>
                                <h4>{cert.title}</h4>
                                <p className="cert-issuer">{cert.issuer}</p>
                                <span className="cert-year">{cert.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;