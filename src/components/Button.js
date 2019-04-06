/*
 * Button.js
 *
 * @returns button
 */

import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  background: ${props => (props.none ? 'white' : 'inherit')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  color: ${props => (props.none ? 'inherit' : 'inherit')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default Button
