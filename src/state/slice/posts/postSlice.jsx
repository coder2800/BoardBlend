import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    posts_array : [
        {id: 1, title: "First Post", content: "This is the first post", userId: 1},
        {id: 2, title: "Second Post", content: "This is the second post", userId: 2}
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
                        userId
                    }
                }
            }
        }
    }
})
export const tempPostsVar = state => state.posts_state.posts_array;
export const {AddPosts} = postsSlice.actions
export default postsSlice.reducer