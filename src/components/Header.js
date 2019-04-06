/* Header.js
 *
 * @author: Mikal Callahan
 * @version: a-0.0.1
 */

// imports
import React, { useState } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import styled from 'styled-components'
//import Button from 'components/Button'
import Paragraph from 'components/Paragraph'
import breakpoint from 'styles/breakpoints'
import hamburgerImage from 'assets/hamburger-menu.svg'

/* Header
 *
 * @returns header
 * @todo
 */

function Header() {
  const [isMenuOpen, setMenuState] = useState(false)
  const Nav = styled.nav`
    align-items: center;
    //background-color: blue;
    display: flex;
    padding 2rem 0;
    position: absolute;
    width: 100%;
  `

  const Wrapper = styled.section`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => (props.center ? 'center' : 'flex-start')};
    padding: 0 2.5rem;
    width: 100%;
    ${breakpoint.medium`
    //display: grid;
      padding: 0 3.5rem;
    `}
  `
  const HamburgerIcon = styled.div`
    //position: absolute;
    //right: 0;
    //padding-right: 2.5rem;
    margin-left: auto;
    ${breakpoint.medium`
      padding-right: 3.5rem;
      `}
  `

  return (
    <header className='header'>
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
    </header>
  )
}

/*
              {isMenuOpen ? (
              <Paragraph sm> Des Archives </Paragraph>
            ) : (
              <Paragraph sm> Des Archives </Paragraph>
            )}
            */
export default Header
