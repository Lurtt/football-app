import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { margin, fontWeight } from '../mixins'

const PlayerStyle = styled.div`
  color: #ecf0f1;
`

const Position = styled.div`
  ${fontWeight};
`

const Name = styled.p`
  ${margin};
  text-overflow: ellipsis;
  overflow: hidden;
`

export default function Player({ player }) {
  return (
    <PlayerStyle>
      <Position fontWeight={700}>{player.position}</Position>
      <Name margin="0">{player.name}</Name>
    </PlayerStyle>
  )
}

Player.propTypes = {
  player: PropTypes.object.isRequired,
}
