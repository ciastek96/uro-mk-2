import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Button from "../Button/Button"
import MaskImg from "../../assets/clip-path.svg"

const StyledWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  min-height: 580px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.grey100};
  box-shadow: 0 1px 30px -10px hsla(0, 0%, 0%, 0.05);
  margin: 35px auto;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  overflow: hidden;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-rows: 1fr;
    grid-template-columns: 55% 45%;
    min-height: 380px;
  }
`

const StyledImage = styled.div`
  height: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
`

const StyledBg = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${({ image }) => image});
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.blue};
    opacity: 0;
    transition: all 0.25s ease-in-out;
  }

  &:hover::after {
    opacity: 0.75;
  }
`

const StyledDivider = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
    position: absolute;
    top: 0;
    right: -1px;
    height: 100%;
    width: 5vw;
    max-width: 72px;
    background: ${({ theme }) => theme.grey100};
    mask-image: url(${MaskImg});
    mask-size: 101% 101%;
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 35px 35px 80px 50px;
  }
`

const StyledDate = styled.p`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.grey300};
  text-align: right;
`
const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.black};
`

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  right: 20px;
`

const Article = ({ slug, image, title, author, description, date }) => (
  <StyledWrapper>
    <StyledImage as={Link} to={`/${slug}`}>
      <StyledBg image={image} />
      <StyledDivider />
    </StyledImage>
    <StyledContainer>
      <StyledDate>{date} </StyledDate>
      <StyledTitle>{title}</StyledTitle>
      <p>{description}</p>
      <StyledButton as={Link} to={`/aktualnosci/${slug}`}>
        Przejdź
      </StyledButton>
    </StyledContainer>
  </StyledWrapper>
)

export default Article
