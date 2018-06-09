import React from 'react'
import renderer from 'react-test-renderer'

import Column from './'

describe('<Column />', () => {
  test('Should render', () => {
    const result = renderer
      .create(
        <Column maxWidth="22rem" textAlign="center">
          Content here
        </Column>
      )
      .toJSON()
    expect(result).toMatchSnapshot()
  })
})
