import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Row, Column, Player } from '../'

const PitchStyle = styled.div`
  margin: auto;
  background-color: #27ae60;
`

const generateColumns = (player, index) => (
  <Column key={index} maxWidth="320px" textAlign="center">
    <Player player={player} />
  </Column>
)

const generateRows = (row, index) => (
  <Row key={index} justifyContent="center">
    {row.map(generateColumns)}
  </Row>
)

export default function Pitch({ team }) {
  return <PitchStyle>{team && team.map(generateRows)}</PitchStyle>
}

Pitch.propTypes = {
  team: PropTypes.array.isRequired,
}
