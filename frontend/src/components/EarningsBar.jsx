const EarningsBar = () => {
    return (
        <section className="earnings-bar">
            <div className="container">
                <div className="earnings-grid">
                    <div className="earnings-title">Earnings</div>
                    <div className="earnings-stats">
                        <div className="stat-item">
                            <span className="stat-label">IT Services Revenue</span>
                            <span className="stat-value">$2,604 Mn</span>
                            <span className="stat-trend">▲ 0.7% QoQ</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Net Income</span>
                            <span className="stat-value">$365.6 Mn</span>
                            <span className="stat-trend">▲ 1.2% YoY</span>
                        </div>
                    </div>
                    <div className="earnings-cta">
                        {/* Additional info or link can go here */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EarningsBar;
