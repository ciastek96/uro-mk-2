import React, { useState } from "react"
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
  background-color: ${({ isOpen }) => (isOpen ? "white" : "transparent")};
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
      isOpen ? "rotate(0)" : "translateY(-5px) rotate(-45deg)"};
    top: 5px;
  }
  ::before {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(0)" : "translateY(5px) rotate(45deg)"};
    top: -5px;
  }
`

const Nav = () => {
  const [isOpen, toggleOpen] = useState(false)

  return (
    <StyledWrapper onClick={() => toggleOpen(!isOpen)}>
      <HamburgerBox>
        <HamburgerInner isOpen={isOpen} />
      </HamburgerBox>
    </StyledWrapper>
  )
}

export default Nav
