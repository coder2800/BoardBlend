import React from 'react'
import { useSelector } from 'react-redux'
import { tempPostsVar } from '../state/slice/posts/postSlice';
import styles from "./Posts.module.css"
import { selectAllUsers } from '../state/slice/users/userSlice';

const Posts = () => {
    const posts = useSelector(tempPostsVar);
    const allUsers = useSelector(selectAllUsers)
    const userName = (userId)=>{
        const User = allUsers.find((user)=>user.id===userId)
        return User.name;
    }

    const renderedPosts = posts.map(post => (
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