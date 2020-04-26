import React, { Component } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

import Hamburger from "../Hamburger/Hamburger"

const NavigationWrapper = styled.nav`
  padding-left: 15px;

  ${({ isMobile }) =>
    isMobile &&
    css`
      top: 0;
      left: ${({ isOpen }) => (isOpen ? "0" : "100%")};
      height: 100vh;
      width: 100%;
      padding: 10% 0;
      background: ${({ theme }) => theme.blue};
      position: fixed;
      opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
      transition: opacity 0.3s, left 0.3s ease-in-out;
    `}
`

const StyledList = styled.ul`
  margin: 0;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    justify-content: space-around;
  }
`

const StyledListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`

const StyledLink = styled(Link)`
  color: white;
  font-weight: 400;
  text-decoration: none;
  padding: 25px;
`

const HamburgerWrapper = styled.span`
  z-index: 999;
`

class Navigation extends Component {
  state = {
    isMobile: false,
    isMenuVisible: false,
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    window.innerWidth > 768
      ? this.setState({
          isMobile: false,
          isMenuVisible: true,
        })
      : this.setState({
          isMobile: true,
          isMenuVisible: false,
        })
  }

  handleClick = () => {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  render() {
    const { isMenuVisible, isMobile } = this.state
    return (
      <>
        {isMobile && (
          <HamburgerWrapper onClick={this.handleClick}>
            <Hamburger isOpen={isMenuVisible} />
          </HamburgerWrapper>
        )}
        <NavigationWrapper isOpen={isMenuVisible} isMobile={isMobile}>
          <StyledList>
            <StyledListItem>
              <StyledLink to="/">O nas</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/oferta">Oferta</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/realizacje">Realizacje</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/aktualnosci">Aktualności</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/kontakt">Kontakt</StyledLink>
            </StyledListItem>
          </StyledList>
        </NavigationWrapper>
      </>
    )
  }
}

export default Navigation
