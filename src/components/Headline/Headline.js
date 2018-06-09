import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { textAlign, letterSpacing, margin, padding } from '../mixins'

export default function Headline({
  level = 1,
  color = '#444',
  children,
  ...props
}) {
  const HeadlineElement = styled(`h${level}`)`
    color: ${color};
    ${margin};
    ${padding};
    ${letterSpacing};
    ${textAlign};
    text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  `

  return <HeadlineElement {...props}>{children}</HeadlineElement>
}

Headline.propTypes = {
  level: PropTypes.number,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  color: PropTypes.string,
  letterSpacing: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.node,
}
