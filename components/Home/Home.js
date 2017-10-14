import React from 'react'
import {Route} from 'react-router-dom'

import Post from '../Post/Post'

const Home = ({posts}) => (
    <div>
        {(posts.length)
            ? posts.map(post => <Post key={post.slug} {...post} titleLink />)
            : <h3>Awaiting Post</h3>
        }
    </div>
)

export default Home
