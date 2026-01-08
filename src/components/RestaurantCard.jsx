const styleCard = {
    backgroundColor: '#f0f0f0',
};

const RestaurantCard = ({ resData }) => {
    // const { resName, cuisines
    // , rating, time } = props;
    // console.log(resData);
    const { cloudinaryImageId, name, cuisines = [], avgRating = 'N/A' } = resData?.info || {};

    return (
        <div className="res_card" style={styleCard}>
            <img
                className="res_logo"
                src={
                    cloudinaryImageId
                        ? `https://media-assets.swiggy.com/${cloudinaryImageId}`
                        : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/a46c64e9-675b-45e5-9945-01a30b6cf99b_10583.JPG'
                }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            {/* <h4>${costForTwo}</h4> */}
        </div>
    );
};

//Higher Order Component

//input - RestaurantCard  ==> RestaurantCardPromoted

export const withPromotedLabel = RestaurantCard => {
    return props => {
        return (
            <div>
                <h1 className="promoted">Promoted</h1>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
