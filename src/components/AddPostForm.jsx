import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { AddPosts } from '../state/slice/posts/postSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const dispatch = useDispatch();
    const buttonClicked = ()=>{
        dispatch(AddPosts(title, content));
        setTitle("");
        setContent("");
    };
    return (
        <>
            <form id='add-post-form'>
                <div id='inputTitleDiv'>
                    <label id='titleLabel' htmlFor="add-title">Title: </label>
                    <input type='text' id='add-title' value={title} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div id='add-post-content'>
                    <label htmlFor="add-content">Content: </label>
                    <input type='text' id='add-content' value={content} onChange={e=>setContent(e.target.value)}/>
                </div>
                <button type='button' id='Add-Post-Button' onClick={buttonClicked}>
                    Add Post
                </button>
            </form>
        </>
    )
}

export default AddPostForm