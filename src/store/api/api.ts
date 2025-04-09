import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../models";


export const api = createApi({
    reducerPath:"api",
    tagTypes:["users"],
    baseQuery:fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
    }),
    endpoints:builder=>({
        getAllUsers: builder.query<IUser[], null>({
            query:()=>"/"
        }),
    })
})

export const {useGetAllUsersQuery}= api
