import React from 'react'
import {Route} from 'react-router-dom'
import Post from '../Post/Post'

const PostDetail = ({post}) => (

    <div>
        {post.map(post => <Post key={post.slug}  {...post}/>)}
        {/* <Post {...post[0]}/> */}
    </div>
)

export default PostDetail
