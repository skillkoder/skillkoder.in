const Projects = () => {
    const projects = [
        {
            title: "AI Chatbot for E-Learning",
            description: "Developed an intelligent chatbot that answers student queries and provides course recommendations.",
            image: "https://images.unsplash.com/photo-1581093588401-2e995a2442c5?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Corporate Website Redesign",
            description: "Designed and built a modern responsive website for a client in the education sector.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section className="projects" id="projects">
            <h2>Our Work</h2>
            <div className="projects-grid">
                {projects.map((p, index) => (
                    <div key={index} className="project-card">
                        <div className="project-image" style={{ backgroundImage: `url(${p.image})` }} />
                        <div className="project-info">
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
