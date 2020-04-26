import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.white};
`

const ContentContainer = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
)

export default ContentContainer
