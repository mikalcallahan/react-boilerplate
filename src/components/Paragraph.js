/*
 * Paragraph.js
 *
 * @returns: Paragraph
 */

import styled from 'styled-components'

export default styled.p`
  align-items: center;
  display: flex;
  font-size: ${props => (props.sm ? '1.8rem' : '2rem')};
  font-weight: 400;
  letter-spacing: .03em;
  justify-content: flex-start;
  text-align: center;
  width: auto;
`
