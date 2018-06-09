import React from 'react'
import renderer from 'react-test-renderer'

import Player from './'

const player = { postion: 'GK', name: 'Darth Vader' }

describe('<Player />', () => {
  test('Should render', () => {
    const result = renderer.create(<Player player={player} />).toJSON()
    expect(result).toMatchSnapshot()
  })
})
