import { IUser } from '../../models';
import { createSlice } from '@reduxjs/toolkit';

interface IUsers {
    Users: IUser[];
    filteredUsers: IUser[] | null;
}
interface IPayload {
    payload: IUser[];
}
const initialState: IUsers = {
    Users: [],
    filteredUsers: null,
};

export const allUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addAllUsers: (state, { payload }: IPayload) => {
            state.Users = payload;
        },
        addFilteredUsers: (state, { payload }: IPayload) => {
            state.filteredUsers = payload;
        },
    },
});

export const { addAllUsers, addFilteredUsers } = allUserSlice.actions;
export const allUsersReducer = allUserSlice.reducer;
