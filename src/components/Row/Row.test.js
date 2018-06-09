import React from 'react'
import renderer from 'react-test-renderer'

import Row from './'

describe('<Row />', () => {
  test('Should render', () => {
    const result = renderer
      .create(<Row justifyContent="center">Content here</Row>)
      .toJSON()
    expect(result).toMatchSnapshot()
  })
})
