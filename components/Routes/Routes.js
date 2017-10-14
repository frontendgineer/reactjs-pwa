import React from 'react'
import {Route, Switch} from 'react-router-dom'

import About from '../About/About'
import Post from '../Post/Post'
import Home from '../Home/Home'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import PostDetail from '../PostDetail/PostDetail'

import data from '../../data.json'

const Routes = () => (
    <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" exact render={() => <Home posts={data.posts} />}/>
        <Route path="/about" component={About} />
        <Route exact path="/posts/:slug" render={({match}) => (
            <div>
                <PostDetail post={data.posts.filter(post =>
                      post.slug === match.params.slug)}/>
            </div>
        )} />
        <Route component={NotFoundPage}/>
    </Switch>
)

export default Routes
