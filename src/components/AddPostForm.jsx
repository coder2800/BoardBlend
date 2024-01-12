import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { AddPosts } from '../state/slice/posts/postSlice';
import { selectAllUsers } from '../state/slice/users/userSlice';
import styles from "./Posts.module.css"

const AddPostForm = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [userId, setUserId] = useState(0);

    const dispatch = useDispatch();
    const allUsers = useSelector(selectAllUsers);
    const buttonClicked = ()=>{
        if(userId==="blank" || userId===0){
            alert("Please select a valid user.")
            return;
        }
        if(title===""){
            alert("Please enter a title.")
            return;
        }
        if(content===""){
            alert("Please enter some content.")
            return;
        }
        dispatch(AddPosts(title, content, Number(userId)));
        setTitle("");
        setContent("");
        setUserId(0);
    };
    const renderedUsers = allUsers.map(oneUser => (
        <option key={oneUser.id} value={oneUser.id}>
            {oneUser.name}
        </option>
    ))
    const selectChanged = (e)=>{
        setUserId(e.target.value)
    }
    var nullCheck = Boolean(title) && Boolean(content) && Boolean(userId)
    return (
        <>
            <form id={styles.addPostForm}>
                <div id={styles.inputTitleDiv}>
                    <label id='titleLabel' htmlFor="addTitle">Title: </label>
                    <input type='text' id="addTitle" value={title} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div id='addPostContent'>
                    <label htmlFor="addContent">Content: </label>
                    <input type='text' id='addContent' value={content} onChange={e=>setContent(e.target.value)}/>
                </div>
                <div className={styles.selectUser}>
                    Select User :
                    <select id={styles.postAuthor} value={userId} onChange={selectChanged}>
                        <option value="blank">Select a user: </option>
                        {renderedUsers}
                    </select>
                </div>
                <button type='button' id={styles.AddPostButton} onClick={buttonClicked} disabled={!nullCheck}>
                    Add Post
                </button>
            </form>
        </>
    )
}

export default AddPostForm