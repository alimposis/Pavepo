import { IUser } from "../../models";
import { createSlice } from "@reduxjs/toolkit";

    interface IUsers {
        Users:IUser[]
    }

const initialState:IUsers = {
    Users:[]
}

export const allUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addAllUsers:(state,{payload}:{payload: IUser[]})=>{
            state.Users = payload
        },
    }
})

export const { addAllUsers } = allUserSlice.actions
export const allUsersReducer = allUserSlice.reducer