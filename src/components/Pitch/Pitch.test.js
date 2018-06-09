import React from 'react'
import renderer from 'react-test-renderer'

import Pitch from './'

jest.mock('../Loading/three-dots.svg', () => 'SVG_CONTENT_HERE')
jest.mock('../Player', () => 'Player component')

const team = [
  [
    {
      name: 'Hugo Lloris',
      formation_place: 1,
      type: 'Goalkeeper',
      position: 'GK',
    },
    {
      name: 'Serge Aurier',
      formation_place: 2,
      type: 'Defender',
      position: 'RB',
    },
  ],
]

describe('<Pitch />', () => {
  test('Should render', () => {
    const result = renderer.create(<Pitch team={team} />).toJSON()
    expect(result).toMatchSnapshot()
  })
})
