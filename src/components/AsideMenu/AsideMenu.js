import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
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

const AsideMenu = ({ slug }) => {
  const data = useStaticQuery(graphql`
    {
      post: allSanityOffer {
        edges {
          node {
            title
            slug {
              current
            }
            id
          }
        }
      }
    }
  `)
  return (
    <StyledWrapper>
      <StyledList>
        <StyledListItem>
          <StyledLink to={`/oferta`} activeClassName="active">
            {"<-"} Oferta
          </StyledLink>
        </StyledListItem>
        {data.post.edges.map(item => (
          <StyledListItem key={item.node.id}>
            <StyledLink
              to={`/oferta/${item.node.slug.current}`}
              activeClassName="active"
            >
              {item.node.title}
            </StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledWrapper>
  )
}

export default AsideMenu
