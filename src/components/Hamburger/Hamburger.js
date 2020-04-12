import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledWrapper = styled.button`
  cursor: pointer;
  padding: 15px;
  margin: 0;
  background: transparent;
  border: none;
  border-radius: 15%;
  z-index: 999;
`

const HamburgerBox = styled.span`
  width: 24px;
  height: 24px;
  display: block;
  position: relative;
`
const HamburgerInner = styled.span`
  width: 80%;
  height: 2px;
  background-color: ${({ isOpen }) => (isOpen ? "transparent" : "white")};
  transition: all 0.15s ease-in;
  position: absolute;
  top: 50%;
  right: 0;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(-50%)" : "transform: rotate(0)"};

  ::after,
  ::before {
    content: "";
    width: 120%;
    height: 2px;
    position: absolute;
    background: white;
    right: 0;
    transition: transform 0.25s linear;
  }

  ::after {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(-5px) rotate(-45deg)" : "rotate(0)"};
    top: 5px;
  }
  ::before {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(5px) rotate(45deg)" : "rotate(0)"};
    top: -5px;
  }
`

const NavigationWrapper = styled.nav`
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "100%")};
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 1);
  position: fixed;
  /* display: ${({ isOpen }) => (isOpen ? "none" : "block")}; */
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: all 0.3s ease-in-out;
`

const StyledList = styled.ul`
  margin: 0;
  padding: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`

const StyledListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 25px;
`

const Hamburger = () => {
  const [isOpen, toggleOpen] = useState(false)

  return (
    <>
      <StyledWrapper onClick={() => toggleOpen(!isOpen)}>
        <HamburgerBox>
          <HamburgerInner isOpen={isOpen} />
        </HamburgerBox>
      </StyledWrapper>
      <NavigationWrapper isOpen={isOpen}>
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
            <StyledLink to="/kontakt">Kontakt</StyledLink>
          </StyledListItem>
        </StyledList>
      </NavigationWrapper>
    </>
  )
}

export default Hamburger
