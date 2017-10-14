import React from 'react'
import { MemoryRouter as Router} from 'react-router-dom'
import {mount} from 'enzyme'

import Home from '../Home/Home'
import About from '../About/About'
import PostDetail from '../PostDetail/PostDetail'
import NotFoundPage from '../NotFoundPage/NotFoundPage'

import Routes from '../Routes/Routes'

test('when path=/ then it should render Home component', () => {
    const component = mount(
        <Router initialEntries={["/"]} initialIndex={0}>
            <Routes />
        </Router>
    )

    expect(component.find(Home).length).toBe(1)
})

test('when visiting path /about then it should render About component', () => {
    const component = mount(
        <Router initialEntries={["/about"]} initialIndex={0}>
            <Routes />
        </Router>
    )

    expect(component.find(About).length).toBe(1)
})

test('when visiting path /post/:slug then it should render PostDetail component', () => {
    const component = mount(
        <Router initialEntries={["/posts/how-to-build-a-progressive-web-app-with-react"]} initialIndex={0}>
            <Routes />
        </Router>
    )

    expect(component.find(PostDetail).length).toBe(1)
})

test('when visiting path /404-not-found then it should render NotFoundPage component', () => {
    const component = mount(
        <Router initialEntries={["/404-not-found"]} initialIndex={0}>
            <Routes />
        </Router>
    )

    expect(component.find(NotFoundPage).length).toBe(1)
})
