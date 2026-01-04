const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="contact-header">
                    <h2>How can we help you?</h2>
                    <p>Every day, Skillkoder leverages AI-infused technologies to empower clients around the globe to build a more resilient, secure and sustainable future.</p>
                </div>

                <div className="contact-form-container">
                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="First Name" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Last Name" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Work Email" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Job Title" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Company" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <select className="form-input">
                                <option value="">Country</option>
                                <option value="IN">India</option>
                                <option value="US">USA</option>
                                <option value="UK">UK</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message" className="form-input" rows="4"></textarea>
                        </div>
                        <button type="submit" className="form-submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
