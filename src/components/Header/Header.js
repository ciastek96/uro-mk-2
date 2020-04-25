import React, { Component } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

import Navigation from "../Navigation/Navigation"
import Logo from "../../assets/logo_b.svg"

const StyledWrapper = styled.div`
  background: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.35s ease-in-out;
  padding: 10px 0;

  ${({ isScrolled }) =>
    isScrolled &&
    css`
      transition: all 0.35s ease-in-out;
      background: ${({ theme }) => theme.dark2};
      border-bottom: 1px solid rgba(255, 255, 255, 0);
      padding: 0;
    `}
`

const StyledInnerWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin: 0 auto;
  display: flex;
  padding: 15px 5px 15px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const StyledLink = styled(Link)`
  width: 120px;
`

const Logotype = styled.img`
  height: 100%;
  margin: 0;
  z-index: 10;
`

class Header extends Component {
  state = {
    isScrolled: false,
  }

  componentDidMount() {
    this.updateScrollPosition()
    window.addEventListener("scroll", this.updateScrollPosition)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateScrollPosition)
  }

  updateScrollPosition = () => {
    window.scrollY > 120
      ? this.setState({
          isScrolled: true,
        })
      : this.setState({
          isScrolled: false,
        })
  }

  render() {
    const { isScrolled } = this.state
    return (
      <StyledWrapper isScrolled={isScrolled}>
        <StyledInnerWrapper>
          <StyledLink to="/">
            <Logotype src={Logo} alt="URO-MK logotyp" />
          </StyledLink>
          <Navigation />
        </StyledInnerWrapper>
      </StyledWrapper>
    )
  }
}

export default Header
