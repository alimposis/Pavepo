import { configureStore } from '@reduxjs/toolkit';
import { allUsersReducer } from './users/users.slice';
import { api } from './api/api';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        allUsers: allUsersReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
