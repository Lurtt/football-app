import React from 'react'
import renderer from 'react-test-renderer'

import Headline from './'

describe('<Headline />', () => {
  test('Should render h1 by default', () => {
    const result = renderer.create(<Headline>Headline h1</Headline>).toJSON()
    expect(result).toMatchSnapshot()
  })
  test('Should render h2', () => {
    const result = renderer
      .create(<Headline level={2}>Headline h2</Headline>)
      .toJSON()
    expect(result).toMatchSnapshot()
  })
})
