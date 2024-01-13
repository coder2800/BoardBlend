import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";


const initialState = {
    posts_array : [
        {id: 1, title: "First Post", content: "This is the first post", userId: 1, date: sub(Date.now(), {minutes:10}).toISOString()},
        {id: 2, title: "Second Post", content: "This is the second post", userId: 2, date: sub(Date.now(), {minutes:5}).toISOString()}
    ]
}

export const postsSlice = createSlice({
    name : "Posts",
    initialState,
    reducers: {
        AddPosts : {
            reducer(state, action){
                state.posts_array.push(action.payload);
            },
            prepare(title, content, userId){
                return {
                    payload:{
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString()
                    }
                }
            }
        }
    }
})
export const tempPostsVar = state => state.posts_state.posts_array;
export const {AddPosts} = postsSlice.actions
export default postsSlice.reducer