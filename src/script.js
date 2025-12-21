import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header"; 
import Body from "./components/Body";





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
