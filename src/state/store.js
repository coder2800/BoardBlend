import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slice/posts/postSlice"
import userReducer from "./slice/users/userSlice"

const store = configureStore({
    reducer: {
        posts_state: postReducer,
        users_state: userReducer,
    }
})

export default store