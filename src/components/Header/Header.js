import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Headline from '../Headline'

const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  background-color: #34495e;
  padding: 1rem;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
`

export default function Header({ team, formation }) {
  return (
    <HeaderStyle>
      <Headline
        level={2}
        uppercase
        textAlign="center"
        margin="0"
        color="#ecf0f1"
        letterSpacing="0.05rem"
      >
        {team}
      </Headline>
      <Headline level={3} textAlign="center" margin="0" color="#bdc3c7">
        Formation {formation}
      </Headline>
    </HeaderStyle>
  )
}

Header.propTypes = {
  team: PropTypes.string.isRequired,
  formation: PropTypes.string.isRequired,
}
