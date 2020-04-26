import React from "react"
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
  width: 18px;
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
    width: 24px;
    height: 2px;
    position: absolute;
    background-color: white;
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

const Hamburger = ({ isOpen }) => {
  // const [isOpen, toggleOpen] = useState(false)

  return (
    // <StyledWrapper onClick={() => toggleOpen(!isOpen)}>
    <StyledWrapper>
      <HamburgerBox>
        <HamburgerInner isOpen={isOpen} />
      </HamburgerBox>
    </StyledWrapper>
  )
}

export default Hamburger
