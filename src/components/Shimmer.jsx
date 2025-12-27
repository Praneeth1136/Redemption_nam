const Shimmer = () => {
    return (
        <div className="Shimmer_container">
            {Array(12).fill("").map((_, index) => (
                <div key={index} className="shimmer-card">
                    <div className="shimmer-img"></div>
                    <div className="shimmer-line shimmer-title"></div>
                    <div className="shimmer-line shimmer-subtitle"></div>
                    <div className="shimmer-line shimmer-info"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;