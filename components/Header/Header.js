import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.css'
const Header = () => (
    <header className={styles.header}>
        <div className={styles.container}>
            <h1><Link className={styles.linkTitle} to='/'>HTC</Link></h1>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.listItem}><Link to='/' className={styles.link}>Posts</Link></li>
                    <li className={styles.listItem}><Link to='/about' className={styles.link}>About</Link></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header
