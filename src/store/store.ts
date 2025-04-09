import { configureStore } from "@reduxjs/toolkit";
import { allUsersReducer } from "./user/user.slice";
import { api } from "./api/api";

export const store = configureStore({
        reducer:{
                [api.reducerPath]:api.reducer,
                allProducts: allUsersReducer,
        },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>;