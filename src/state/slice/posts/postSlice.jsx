import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    posts_array : [
        {id: 1, title: "First Post", content: "This is the first post"},
        {id: 2, title: "Second Post", content: "This is the second post"}
    ]
}

export const postsSlice = createSlice({
    name : "Posts",
    initialState,
    reducers: {
        // AddPosts : {
        //     reducer(state, action){
        //         state.push(action.payload);
        //     },
        //     prepare(title, content){
        //         return {
        //             payload:{
        //                 id: nanoid(),
        //                 title,
        //                 content
        //             }
        //         }
        //     }
        // }
    }
})



export default postsSlice.reducer