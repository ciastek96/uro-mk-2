import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  width: 100%;
  height: 450px;
  background: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
`

const StyledInnerWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: grid;
    grid-gap: 25px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }
`

const StyledItem = styled.div`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.dark};
`

const Footer = () => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <StyledItem>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </StyledItem>
      <StyledItem></StyledItem>
      <StyledItem></StyledItem>
      <StyledItem></StyledItem>
    </StyledInnerWrapper>
  </StyledWrapper>
)

export default Footer
