const RestaurantCard = ({ resData }) => {
    const {
        cloudinaryImageId,
        name,
        cuisines = [],
        avgRating = 'N/A',
        costForTwo,
        sla,
    } = resData?.info || {};

    return (
        <div className="res_card h-full flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-gray-200 transition-colors cursor-pointer">
            <div className="h-44 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={
                        cloudinaryImageId
                            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`
                            : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/a46c64e9-675b-45e5-9945-01a30b6cf99b_10583.JPG'
                    }
                    alt={name}
                />
            </div>

            <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-base font-semibold text-gray-800 mb-1 line-clamp-1">{name}</h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-1">{cuisines.join(', ')}</p>

                <div className="mt-auto flex items-center gap-4 text-sm text-gray-600 pt-3 border-t border-gray-50">
                    <span
                        className={`flex items-center gap-1 ${
                            parseFloat(avgRating) >= 4 ? 'text-green-600' : 'text-amber-600'
                        }`}
                    >
                        ★ {avgRating}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>{sla?.slaString}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{costForTwo}</span>
                </div>
            </div>
        </div>
    );
};

export const withPromotedLabel = RestaurantCard => {
    return props => {
        return (
            <div className="relative h-full">
                <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-green-600 text-white text-xs rounded">
                    Open
                </div>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
