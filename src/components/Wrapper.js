/* Wrapper.js
 *
 * @author: Mikal Callahan
 * @version: a-0.0.1
 *
 * @returns: Wrapper
 */

import styled from 'styled-components'
import breakpoint from 'styles/breakpoints'

export default styled.section`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
  padding: 0 2.5rem;
  width: 100%;
  ${breakpoint.medium`
    //display: grid;
      padding: 2.5rem 3.5rem;
    `}
`
