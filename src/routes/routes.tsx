import { Route, Routes } from "react-router"

import { Main } from "../pages/Main/Main"
import { User } from "../pages/User/User"
import { NoMatchPage } from "../pages/NoMatchPading/NoMatchPage"

export const AppRoutes = () =>{
    const navigationRoutes = [
        {
            path:"/", 
            element:<Main/>
        },
        {
            path:"/user/:pid", 
            element:<User/>
        },
        {
            path:"*", 
            element:<NoMatchPage/>
        },
    ]
    return(
        <>
        <Routes>
            {navigationRoutes.map((route)=><Route key={route.path} path={route.path} element={route.element}/>)}
        </Routes>
        </>
    )
}