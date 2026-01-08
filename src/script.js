import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { useState, useEffect } from 'react';
import UserContext from './utils/UseContext';
const App = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: 'Praneeth',
        };
        setUserName(data.name);
    }, []);

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    );
};

const Grocery = lazy(() => import('./components/Grocery'));

const appLayout = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/Grocery',
                element: (
                    <Suspense fallback={<h1>loading...</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: '/restaurants/:resid',
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },
    // {
    //     path:'/about',
    //     element:<About/>
    // },
    // {
    //     path:'/contact',
    //     element:<Contact/>
    // }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appLayout} />);
