import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.grey100};
  margin-bottom: 25px;
`

const StyledList = styled.ul`
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
`
const StyledListItem = styled.li`
  margin: 0;
  padding: 0;
  text-align: left;

  &:first-child {
    background: ${({ theme }) => theme.dark2};
    a {
      padding: 30px;
      color: white;
      font-weight: 600;
    }
  }
`

const StyledLink = styled(Link)`
  padding: 30px 45px;
  display: block;
  color: ${({ theme }) => theme.dark};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover,
  &.active {
    background: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.white};
  }
`

const AsideMenu = ({ slug }) => (
  <StyledWrapper>
    <StyledList>
      <StyledListItem>
        <StyledLink to={`/oferta/${slug}`} activeClassName="active">
          {"<-"} Oferta
        </StyledLink>
      </StyledListItem>
      <StyledListItem>
        <StyledLink to={`/oferta/${slug}`} activeClassName="active">
          Kompleksowa budowa domów
        </StyledLink>
      </StyledListItem>
      <StyledListItem>
        <StyledLink to={`/oferta/${slug}`} activeClassName="active">
          Stropy i żelbety
        </StyledLink>
      </StyledListItem>
      <StyledListItem>
        <StyledLink to={`/oferta/${slug}`} activeClassName="active">
          Ocieplenia i termomodernizacje
        </StyledLink>
      </StyledListItem>
      <StyledListItem>
        <StyledLink to={`/oferta/${slug}`} activeClassName="active">
          Usługi wykończeniowe
        </StyledLink>
      </StyledListItem>
    </StyledList>
  </StyledWrapper>
)

export default AsideMenu
