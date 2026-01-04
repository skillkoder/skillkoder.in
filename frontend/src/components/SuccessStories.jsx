const SuccessStories = () => {
    const stories = [
        {
            title: "State of Cybersecurity Report 2025",
            category: "Report",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Customer Success Stories",
            category: "Case Study",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Agentic AI: The New Frontier in Financial Services Innovation",
            category: "Innovation",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section className="success-stories">
            <div className="stories-grid">
                {stories.map((story, index) => (
                    <div key={index} className="story-card" style={{ backgroundImage: `url(${story.image})` }}>
                        <div className="story-overlay">
                            <span className="story-category">{story.category}</span>
                            <h3 className="story-title">{story.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SuccessStories;
