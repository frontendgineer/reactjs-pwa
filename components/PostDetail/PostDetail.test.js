import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import PostDetail from './PostDetail'

import data from '../../data.json'

test('PostDetail component should render as it should be', () => {
    const component = shallow(<PostDetail post={data.posts}/>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
})
