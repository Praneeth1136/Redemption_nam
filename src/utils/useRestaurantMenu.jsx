import { useState, useEffect } from 'react';
import { MOCK_MENU } from '../utils/mockData';

const useRestaurantMenu = (MOCK_MENU) => {
    const [resInfo, setResInfo] = useState(MOCK_MENU);

    useEffect(() => {
        setResInfo(MOCK_MENU);
    }, []);

    return resInfo;
};

export default useRestaurantMenu;
