import React from 'react'
import renderer from 'react-test-renderer'

import Loading from './'

jest.mock('./three-dots.svg', () => 'SVG_CONTENT_HERE')

describe('<Loading />', () => {
  test('Should render', () => {
    const result = renderer.create(<Loading />).toJSON()
    expect(result).toMatchSnapshot()
  })
})
