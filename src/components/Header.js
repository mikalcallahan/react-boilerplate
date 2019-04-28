/* Header.js
 *
 * @author: Mikal Callahan
 * @version: a-0.0.1
 */

// imports
import React, { useState } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Paragraph from 'components/Paragraph'
import Wrapper from 'components/Wrapper'
import breakpoint from 'styles/breakpoints'
import hamburgerImage from 'assets/hamburger-menu.svg'

/* Header
 *
 * @returns Header
 * @todo
 */
export default () => {
  const [isMenuOpen, setMenuState] = useState(false)

  const Header = styled.header`
    width: 100%;
  `
  const Nav = styled.nav`
    align-items: center;
    //background-color: blue;
    display: flex;
    padding 2rem 0;
    //position: absolute;
    width: 100%;
  `
  const HamburgerIcon = styled.div`
    position: absolute;
    right: 0;
    padding-right: 3rem;
    ${breakpoint.medium`
      padding-right: 3.5rem;
      `}
  `

  return (
    <Header>
      <Router forceRefresh={true}>
        <Nav>
          <Wrapper>
            <Paragraph sm> Des Archives </Paragraph>
            <HamburgerIcon
              onClick={() => {
                setMenuState(!isMenuOpen)
              }}
            >
              <img src={hamburgerImage} alt='hamburger menu' />
            </HamburgerIcon>
          </Wrapper>
        </Nav>
      </Router>
    </Header>
  )
}
  /*{
  isMenuOpen ? (
    <Paragraph sm> Des Archives </Paragraph>
  ) : (
    <Paragraph sm> Des Archives </Paragraph>
  )
  }*/
