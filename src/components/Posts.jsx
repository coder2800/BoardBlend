import React from 'react'
import { useSelector } from 'react-redux'
import { tempPostsVar } from '../state/slice/posts/postSlice';
import "./Posts.css"

const Posts = () => {
    const posts = useSelector(tempPostsVar);
    const renderedPosts = posts.map(post => (
        <article key={post.id} className='post-box'>
            <div className='post-title'>
                {post.title}
            </div>
            <div className='post-content'>
                {post.content.substring(0, 100)}
            </div>
        </article>
    ))
    return (
        <>
            {/* <div>{import.meta.env.VITE_API_URL}</div> */}
            <div>{renderedPosts}</div>
        </>
    )
}

export default Posts