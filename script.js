import React from 'react';
import ReactDOM from 'react-dom/client';

/*
- App
 -Header
  -Logo
  -Nav-items

 -Body
  -Search
  -Restaurant Container
   -Restaurant Card
    - Img
    - Name of Res,Star Rating, Cuisines,Delivery time


 -Footer
  -Copyright
  -Links
  -Address
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/011/294/606/small/burger-logo-delicious-happy-fun-food-sandwich-restaurant-burger-symbol-icon-illustration-vector.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const styleCard = {
    backgroundColor: '#f0f0f0',
};

const RestaurantCard = ({ resData }) => {
    // const { resName, cuisines
    // , rating, time } = props;
    // console.log(resData);
    
    return (
        <div className="res_card" style={styleCard}>
            <img
                className="res_logo"
                src={
                    resData.info.cloudinaryImageId
                        ? `https://media-assets.swiggy.com/${resData.info.cloudinaryImageId}`
                        : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/a46c64e9-675b-45e5-9945-01a30b6cf99b_10583.JPG'
                }
            />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(', ')}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
            <h4>{resData.info.avgRating}</h4>
        </div>
    );
};

const resObj = {
    info: {
        id: '10583',
        name: 'Pizza Hut',
        cloudinaryImageId:
            'RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/a46c64e9-675b-45e5-9945-01a30b6cf99b_10583.JPG',
        locality: 'Coles Road',
        areaName: 'Frazer Town',
        costForTwo: '₹350 for two',
        cuisines: ['Pizzas'],
        avgRating: 4.3,
        parentId: '721',
        avgRatingString: '4.3',
        totalRatingsString: '19K+',
        sla: {
            deliveryTime: 32,
            lastMileTravel: 3.7,
            serviceability: 'SERVICEABLE',
            slaString: '30-35 mins',
            lastMileTravelString: '3.7 km',
            iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
            nextCloseTime: '2025-12-20 03:00:00',
            opened: true,
        },
        badges: {},
        isOpen: true,
        type: 'F',
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {},
            },
        },
        aggregatedDiscountInfoV3: {
            header: '50% OFF',
        },
        differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
                lottie: {},
                video: {},
            },
        },
        reviewsSummary: {},
        displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
        restaurantOfferPresentationInfo: {},
        externalRatings: {
            aggregatedRating: {
                rating: '4.4',
                ratingCount: '2.8K+',
            },
            source: 'GOOGLE',
            sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
        },
        ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {
        context: 'seo-data-aeb28adb-a376-425b-956d-138dc66ff0cc',
    },
    cta: {
        link: 'https://www.swiggy.com/city/bangalore/pizza-hut-coles-road-frazer-town-rest10583',
        type: 'WEBLINK',
    },
};

const resList = [
    {
        info: {
            id: '10583',
            name: 'Pizza Hut',
            cloudinaryImageId:
                'RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/a46c64e9-675b-45e5-9945-01a30b6cf99b_10583.JPG',
            locality: 'Coles Road',
            areaName: 'Frazer Town',
            costForTwo: '₹350 for two',
            cuisines: ['Pizzas'],
            avgRating: 4.3,
            parentId: '721',
            avgRatingString: '4.3',
            totalRatingsString: '19K+',
            sla: {
                deliveryTime: 32,
                lastMileTravel: 3.7,
                serviceability: 'SERVICEABLE',
                slaString: '30-35 mins',
                lastMileTravelString: '3.7 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2025-12-20 03:00:00',
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: '50% OFF',
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: '4.4',
                    ratingCount: '2.8K+',
                },
                source: 'GOOGLE',
                sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
            },
            ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
        },
        analytics: {
            context: 'seo-data-aeb28adb-a376-425b-956d-138dc66ff0cc',
        },
        cta: {
            link: 'https://www.swiggy.com/city/bangalore/pizza-hut-coles-road-frazer-town-rest10583',
            type: 'WEBLINK',
        },
    },
    {
        info: {
            id: '770772',
            name: 'Olio - The Wood Fired Pizzeria',
            cloudinaryImageId:
                'RX_THUMBNAIL/IMAGES/VENDOR/2025/12/19/00b17cb8-0b58-4ad5-b115-848bdd9eb1de_770772.JPG',
            locality: 'Ali Askar Road',
            areaName: 'Central Bangalore',
            costForTwo: '₹300 for two',
            cuisines: [
                'Pizzas',
                'Pastas',
                'Italian',
                'Fast Food',
                'Snacks',
                'Beverages',
                'Desserts',
            ],
            avgRating: 4.3,
            parentId: '11633',
            avgRatingString: '4.3',
            totalRatingsString: '1.1K+',
            sla: {
                deliveryTime: 32,
                lastMileTravel: 2,
                serviceability: 'SERVICEABLE',
                slaString: '30-40 mins',
                lastMileTravelString: '2.0 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2025-12-20 05:00:00',
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: 'newg.png',
                        description: 'Gourmet',
                    },
                ],
            },
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: 'Gourmet',
                                    imageId: 'newg.png',
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: '50% OFF',
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: '--',
                },
            },
            ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
        },
        analytics: {
            context: 'seo-data-aeb28adb-a376-425b-956d-138dc66ff0cc',
        },
        cta: {
            link: 'https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-ali-askar-road-central-bangalore-rest770772',
            type: 'WEBLINK',
        },
    },
    {
        info: {
            id: '721822',
            name: 'Cheesecake & co.',
            cloudinaryImageId: 'b318c0b4bc2169550145ace1d6e791a2',
            locality: 'rt nagar',
            areaName: 'Koramangala',
            costForTwo: '₹500 for two',
            cuisines: ['Bakery', 'Desserts'],
            avgRating: 4.6,
            veg: true,
            parentId: '387417',
            avgRatingString: '4.6',
            totalRatingsString: '1.3K+',
            sla: {
                deliveryTime: 31,
                lastMileTravel: 5,
                serviceability: 'SERVICEABLE',
                slaString: '30-35 mins',
                lastMileTravelString: '5.0 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2025-12-19 23:59:00',
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: 'newg.png',
                        description: 'Gourmet',
                    },
                ],
            },
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: 'Gourmet',
                                    imageId: 'newg.png',
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: '40% OFF',
                subHeader: 'UPTO ₹80',
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: '--',
                },
            },
            ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
        },
        analytics: {
            context: 'seo-data-aeb28adb-a376-425b-956d-138dc66ff0cc',
        },
        cta: {
            link: 'https://www.swiggy.com/city/bangalore/cheesecake-and-co-rt-nagar-koramangala-rest721822',
            type: 'WEBLINK',
        },
    },
    {
        info: {
            id: '672074',
            name: 'Subway',
            cloudinaryImageId:
                'RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/8f9a90a5-4f89-4234-b4ed-a840580dbe52_672074.jpg',
            locality: 'Ashok Nagar',
            areaName: 'Sobha Mall',
            costForTwo: '₹350 for two',
            cuisines: ['sandwich', 'Salads', 'wrap', 'Healthy Food'],
            avgRating: 4.4,
            parentId: '2',
            avgRatingString: '4.4',
            totalRatingsString: '2.3K+',
            sla: {
                deliveryTime: 30,
                lastMileTravel: 3.7,
                serviceability: 'SERVICEABLE',
                slaString: '30-35 mins',
                lastMileTravelString: '3.7 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2025-12-20 03:00:00',
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: '50% OFF',
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: '--',
                },
            },
            ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
        },
        analytics: {
            context: 'seo-data-aeb28adb-a376-425b-956d-138dc66ff0cc',
        },
        cta: {
            link: 'https://www.swiggy.com/city/bangalore/subway-ashok-nagar-sobha-mall-rest672074',
            type: 'WEBLINK',
        },
    },
    {
        info: {
            id: '755276',
            name: "La Pino'z Pizza",
            cloudinaryImageId: 'f44bc9708c514cd2dd6ae0d8b4677214',
            locality: 'Pulikeshi Nagar',
            areaName: 'Pulikeshi Nagar',
            costForTwo: '₹250 for two',
            cuisines: ['Pizzas', 'Pastas', 'Italian', 'Desserts', 'Beverages'],
            avgRating: 4.3,
            parentId: '4961',
            avgRatingString: '4.3',
            totalRatingsString: '3.5K+',
            sla: {
                deliveryTime: 30,
                lastMileTravel: 3,
                serviceability: 'SERVICEABLE',
                slaString: '30-35 mins',
                lastMileTravelString: '3.0 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2025-12-20 02:30:00',
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: 'ITEMS',
                subHeader: 'AT ₹79',
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: '4.0',
                    ratingCount: '188',
                },
                source: 'GOOGLE',
                sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
            },
            ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
        },
        analytics: {
            context: 'seo-data-aeb28adb-a376-425b-956d-138dc66ff0cc',
        },
        cta: {
            link: 'https://www.swiggy.com/city/bangalore/la-pinoz-pizza-pulikeshi-nagar-rest755276',
            type: 'WEBLINK',
        },
    },
    {
        info: {
            id: '237668',
            name: "McDonald's",
            cloudinaryImageId:
                'RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/6e13e84c-0c56-41ac-8096-78ebc5469947_237668.JPG',
            locality: 'Commercial Street',
            areaName: 'Shivajinagar',
            costForTwo: '₹400 for two',
            cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
            avgRating: 4.5,
            parentId: '630',
            avgRatingString: '4.5',
            totalRatingsString: '6.9K+',
            sla: {
                deliveryTime: 34,
                lastMileTravel: 3.6,
                serviceability: 'SERVICEABLE',
                slaString: '30-40 mins',
                lastMileTravelString: '3.6 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2025-12-19 23:45:00',
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: 'Ratnesh_Badges/Rx_Awards_2025/Bolt.png',
                        description: 'Delivery!',
                    },
                ],
            },
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: 'Delivery!',
                                    imageId: 'Ratnesh_Badges/Rx_Awards_2025/Bolt.png',
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: 'ITEMS',
                subHeader: 'AT ₹99',
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: '--',
                },
            },
            ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
        },
        analytics: {
            context: 'seo-data-aeb28adb-a376-425b-956d-138dc66ff0cc',
        },
        cta: {
            link: 'https://www.swiggy.com/city/bangalore/mcdonalds-commercial-street-shivajinagar-rest237668',
            type: 'WEBLINK',
        },
    },
    {
        info: {
            id: '3369',
            name: 'Truffles',
            cloudinaryImageId: 'cd832b6167eb9f88aeb1ccdebf38d942',
            locality: 'St. Marks Road',
            areaName: 'St. Marks Road',
            costForTwo: '₹450 for two',
            cuisines: ['American', 'Desserts', 'Continental', 'Italian'],
            avgRating: 4.6,
            parentId: '218065',
            avgRatingString: '4.6',
            totalRatingsString: '148K+',
            sla: {
                deliveryTime: 33,
                lastMileTravel: 4.5,
                serviceability: 'SERVICEABLE',
                slaString: '30-35 mins',
                lastMileTravelString: '4.5 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2025-12-20 00:00:00',
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: 'Rxawards/_CATEGORY-Burger.png',
                        description: 'Delivery!',
                    },
                ],
            },
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: 'Delivery!',
                                    imageId: 'Rxawards/_CATEGORY-Burger.png',
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: '₹125 OFF',
                subHeader: 'ABOVE ₹249',
                discountTag: 'FLAT DEAL',
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: '4.5',
                    ratingCount: '20K+',
                },
                source: 'GOOGLE',
                sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
            },
            ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
        },
        analytics: {
            context: 'seo-data-aeb28adb-a376-425b-956d-138dc66ff0cc',
        },
        cta: {
            link: 'https://www.swiggy.com/city/bangalore/truffles-st-marks-road-rest3369',
            type: 'WEBLINK',
        },
    },
    {
        info: {
            id: '696230',
            name: 'ITC Master Chef Creations',
            cloudinaryImageId:
                'RX_THUMBNAIL/IMAGES/VENDOR/2025/9/6/14baf724-99f4-4733-aa96-6d300bf2036d_696230.JPG',
            locality: 'Shivaji Nagar',
            areaName: 'Dispensary Rd',
            costForTwo: '₹650 for two',
            cuisines: ['North Indian', 'Biryani', 'Kebabs', 'rolls', 'Desserts'],
            avgRating: 4.6,
            parentId: '11992',
            avgRatingString: '4.6',
            totalRatingsString: '1.5K+',
            sla: {
                deliveryTime: 36,
                lastMileTravel: 4.4,
                serviceability: 'SERVICEABLE',
                slaString: '35-40 mins',
                lastMileTravelString: '4.4 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2025-12-20 02:00:00',
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: 'newg.png',
                        description: 'Gourmet',
                    },
                ],
            },
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: 'Gourmet',
                                    imageId: 'newg.png',
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: 'ITEMS',
                subHeader: 'AT ₹249',
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: '--',
                },
            },
            ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
        },
        analytics: {
            context: 'seo-data-aeb28adb-a376-425b-956d-138dc66ff0cc',
        },
        cta: {
            link: 'https://www.swiggy.com/city/bangalore/itc-master-chef-creations-shivaji-nagar-dispensary-rd-rest696230',
            type: 'WEBLINK',
        },
    },
];

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res_container">
                <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[1]} />
                <RestaurantCard resData={resList[2]} />
                <RestaurantCard resData={resList[3]} />
                <RestaurantCard resData={resList[4]} />
                <RestaurantCard resData={resList[5]} />
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
