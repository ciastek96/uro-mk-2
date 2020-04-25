import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  padding: 0 15px;
`

const ContentContainer = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
)

export default ContentContainer
