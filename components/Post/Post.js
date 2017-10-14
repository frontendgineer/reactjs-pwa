import React from 'react'
import styles from './Post.css'
import {Link} from 'react-router-dom'

const Post = (props) => (
    <div className={styles.container}>
        <h2 className={styles.title}>
            {props.titleLink
            ? <Link to={`/posts/${props.slug}`} className={styles.link}>{props.title}</Link>
            : props.title}
        </h2>
        <p className={styles.content}>{props.excerpt}</p>
    </div>
)
export default Post;
