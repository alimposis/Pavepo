import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';

import { gifLoading } from '../assets/gif';
const Main = lazy(() => import('../pages/Main/Main'));
const User = lazy(() => import('../pages/User/User'));
const Category = lazy(() => import('../pages/Category/Category'));
const NoMatchPage = lazy(() => import('../pages/NoMatchPading/NoMatchPage'));

export const AppRoutes = () => {
    const navigationRoutes = [
        {
            path: '/Pavepo/',
            element: <Main />,
        },
        {
            path: '/Pavepo/user/:pid',
            element: <User />,
        },
        {
            path: '/Pavepo/category/:category',
            element: <Category />,
        },
        {
            path: '*',
            element: <NoMatchPage />,
        },
    ];
    return (
        <>
            <Suspense
                fallback={
                    <>
                        <img src={gifLoading} alt="" />
                    </>
                }
            >
                <Routes>
                    {navigationRoutes.map(route => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </Suspense>
        </>
    );
};
