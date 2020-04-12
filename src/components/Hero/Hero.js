import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: grey;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    object-fit: cover;
  }
`

const OpacityMask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  background: rgba(0, 0, 0, 0.7);
`

const Hero = ({ children }) => (
  <StyledWrapper>
    <>
      {children}
      <OpacityMask />
    </>
  </StyledWrapper>
)

export default Hero
