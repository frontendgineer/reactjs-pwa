import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Post from './Post'

test('Post Component should render as expected', () => {
    const component = shallow(<Post title='My Post' />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
})

test('Post Component should render as expected', () => {
    const component = shallow(<Post title='My Post' titleLink />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
})
