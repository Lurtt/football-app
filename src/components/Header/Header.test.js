import React from 'react'
import renderer from 'react-test-renderer'

import Header from './'

const data = { team: 'Dark Side', formation: '333' }

describe('<Header />', () => {
  test('Should render', () => {
    const result = renderer.create(<Header {...data} />).toJSON()
    expect(result).toMatchSnapshot()
  })
})
