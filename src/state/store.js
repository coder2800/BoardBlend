import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slice/posts/postSlice"

const store = configureStore({
    reducer: {
        posts_state: postReducer,
    }
})

export default store