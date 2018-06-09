import styled from 'styled-components'

import { maxWidth, textAlign } from '../mixins'

export default styled.div`
  flex: 1;
  ${maxWidth};
  padding: 1rem;
  ${textAlign};
  overflow: hidden;
`
