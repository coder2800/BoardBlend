import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user_array: [
        {id: 1, name: "User1"},
        {id: 2, name: "User2"}
    ]
}

const userSlice = createSlice({
    name: "Users",
    initialState,
    reducers :{}
})
export default userSlice.reducer

export const selectAllUsers = state => state.users_state.user_array 
