import React from "react"
import styled, { css } from "styled-components"

import MaskImg from "../../assets/dividerMask.svg"
import MaskImg2 from "../../assets/dividerMask2.svg"

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  background: ${({ color, theme }) => theme[color]};
  left: 0;
  width: 100%;
  height: 15%;
  mask-image: url(${MaskImg});
  mask-size: 101% 101%;
  z-index: 10;

  ${({ bottom }) =>
    bottom &&
    css`
      top: inherit;
      bottom: 0;
      mask-image: url(${MaskImg2});
    `}
`

const Mask = ({ color, bottom }) => (
  <StyledWrapper color={color} bottom={bottom}></StyledWrapper>
)

export default Mask
