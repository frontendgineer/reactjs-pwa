import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import NotFoundPage from './NotFoundPage'

test('NotFoundPage component should render as expected', () => {
    const component = shallow(<NotFoundPage />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
})
