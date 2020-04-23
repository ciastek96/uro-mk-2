import React from "react"
import Link from "gatsby"
import styled from "styled-components"

import Button from "../Button/Button"

const StyledWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  min-height: 380px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.grey100};
  margin: 35px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const StyledImage = styled.div`
  height: 100%;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  position: relative;
  cursor: pointer;

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

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
`

const Article = ({ slug, image, title, author, description, date }) => (
  <StyledWrapper>
    <StyledImage image={image} as={Link} to={`/${slug}`}></StyledImage>
    <StyledContainer>
      <p>{date}</p>
      <p>{author}</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <Button as={Link} to={`/${slug}`}>
        Przejdź
      </Button>
    </StyledContainer>
  </StyledWrapper>
)

export default Article
