import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  padding: 40px 25px;
  background: ${({ theme }) => theme.white};
  margin: 0 auto;
  text-align: center;
`

const ContentContainer = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
)

export default ContentContainer
