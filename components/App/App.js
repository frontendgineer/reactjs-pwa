import React, {Component} from 'react'

import Header from '../Header/Header'
import 'normalize.css'
import styles from './App.css'

import Routes from '../Routes/Routes'

import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <Header />
                    <Routes />
                </div>
            </Router>
        )
    }
}

export default App
