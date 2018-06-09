import React from 'react'
import styled from 'styled-components'

import svg from './three-dots.svg'

const LoadingStyle = styled.img`
  display: flex;
  margin: auto;
`

export default () => {
  return <LoadingStyle src={svg} />
}
