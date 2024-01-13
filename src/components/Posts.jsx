import React from 'react'
import { useSelector } from 'react-redux'
import { tempPostsVar } from '../state/slice/posts/postSlice';
import styles from "./Posts.module.css"
import { selectAllUsers } from '../state/slice/users/userSlice';
import {parseISO, formatDistanceToNow} from "date-fns"

const Posts = () => {
    const posts = useSelector(tempPostsVar);
    const allUsers = useSelector(selectAllUsers)
    const userName = (userId)=>{
        const User = allUsers.find((user)=>user.id===userId)
        return User.name;
    }
    const ordered_posts = posts.slice().reverse();
    const renderedPosts = ordered_posts.map(post => (
        <article key={post.id} className={styles.postBox}>
            <div className={styles.postTitle}>
                {post.title}
            </div>
            <div className={styles.postContent}>
                {post.content.substring(0, 100)}
            </div>
            <div className={styles.postUsername}>
                Posted By: {userName(post.userId)}
            </div>
            <div className={styles.postedOn}>
                Date: {`${formatDistanceToNow(parseISO(post.date))} ago`}
            </div>
        </article>
    ))
    return (
        <>
            <div className={styles.PostsContainer}>
                {renderedPosts}
            </div>
        </>
    )
}

export default Posts