import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

import Button from "../Button/Button"
import MaskImg from "../../assets/articlePhotoMask.svg"

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 580px;
  background-color: ${({ theme }) => theme.grey100};
  border: 1px solid ${({ theme }) => theme.grey400};
  border-radius: 5px;
  margin: 35px auto;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;

  ${({ type }) => {
    if (type === "big") {
      return css`
        max-width: 100%;
        min-height: 600px;
        background: ${({ theme }) => theme.grey100};
        border-radius: 0;
        border-left: none;
        margin: 100px auto 0;
        border-top: 0;

        @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          grid-template-rows: 1fr;
          grid-template-columns: 55% 45%;
          min-height: 780px;
        }
      `
    } else if (type === "small") {
      return css`
        margin: 0;
        min-height: 480px;
        background-color: ${({ theme }) => theme.white};
      `
    } else {
      return css`
        @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          max-width: ${({ theme }) => theme.breakpoints.lg};
          grid-template-rows: 1fr;
          grid-template-columns: 55% 45%;
          min-height: 380px;
        }
      `
    }
  }}
`

const StyledImage = styled.div`
  width: 100%;
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
    right: -2px;
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
  padding: 25px 25px 80px 25px;

  /* @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 35px 35px 80px 50px;
  } */
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

const Article = ({ slug, image, title, author, description, date, type }) => (
  <StyledWrapper type={type}>
    <StyledImage as={Link} to={`/BlogPostTemplate`}>
      <StyledBg image={image} />
      {type !== "small" && <StyledDivider />}
    </StyledImage>
    <StyledContainer>
      {type !== "small" && <StyledDate>{date}</StyledDate>}
      <StyledTitle>{title}</StyledTitle>
      <p>{description}</p>
      {type !== "big" && (
        <StyledButton as={Link} to={`/BlogPostTemplate`}>
          Przejdź
        </StyledButton>
      )}
    </StyledContainer>
  </StyledWrapper>
)

export default Article
