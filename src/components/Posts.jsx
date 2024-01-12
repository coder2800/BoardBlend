import React from 'react'
import { useSelector } from 'react-redux'
import { tempPostsVar } from '../state/slice/posts/postSlice';
import "./Posts.css"
import { selectAllUsers } from '../state/slice/users/userSlice';

const Posts = () => {
    const posts = useSelector(tempPostsVar);
    const allUsers = useSelector(selectAllUsers)
    const userName = (userId)=>{
        const User = allUsers.find((user)=>user.id===userId)
        return User.name;
    }

    const renderedPosts = posts.map(post => (
        <article key={post.id} className='post-box'>
            <div className='post-title'>
                {post.title}
            </div>
            <div className='post-content'>
                {post.content.substring(0, 100)}
            </div>
            <div className="post-username">
                Posted By: {userName(post.userId)}
            </div>
        </article>
    ))
    return (
        <>
            <div className='PostsContainer'>
                {renderedPosts}
            </div>
        </>
    )
}

export default Posts