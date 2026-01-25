import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-4 transition-all duration-300">
            {/* Header */}
            <div
                className="w-full flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={handleClick}
            >
                <span className="font-bold text-lg text-gray-800">
                    {data.title} ({data.itemCards.length})
                </span>
                <span
                    className={`transform transition-transform duration-300 ${
                        showItems ? 'rotate-180' : ''
                    }`}
                >
                    🔽
                </span>
            </div>

            {/* Accordion Body */}
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    );
};

export default RestaurantCategory;
