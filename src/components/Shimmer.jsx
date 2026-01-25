const Shimmer = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array(10)
                    .fill('')
                    .map((e, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-sm h-[280px] flex flex-col"
                        >
                            <div className="h-48 w-full bg-gray-200 shimmer-animate"></div>
                            <div className="p-4 flex-1 flex flex-col gap-3">
                                <div className="h-4 w-3/4 bg-gray-200 rounded shimmer-animate"></div>
                                <div className="h-3 w-1/2 bg-gray-200 rounded shimmer-animate"></div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Shimmer;
