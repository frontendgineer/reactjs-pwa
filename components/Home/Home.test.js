import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from './Home'
import Post from '../Post/Post'

import data from '../../data.json'

test('Home component should render as expected', () => {
    const component = shallow(<Home posts={data.posts} titleLink/>)
    const tree = toJson(component)
    expect(component.find(Post).length).toBe(3)
    expect(tree).toMatchSnapshot()
})

test('h3 tag should not render as expected', () => {
    const component = shallow(<h3>Awaiting Post</h3>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
})
