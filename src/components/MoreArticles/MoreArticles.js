import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Article from "../Article/Article"

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 580px;
  background-color: ${({ theme }) => theme.grey100};
  box-shadow: 0 1px 30px -10px hsla(0, 0%, 0%, 0.05);
  margin: 0 auto;
  padding: 35px 20px;
  text-align: center;
  /* border: 1px solid ${({ theme }) => theme.grey400}; */

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
  }
`
const StyledInnerWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin: 35px auto;
  display: flex;
  flex-direction: column;

  & > div {
    margin-top: 25px;
  }

  & > div :first-child {
    margin-top: 0;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 35px;

    & > div {
      margin-top: 0;
    }
  }
`

const MoreArticles = ({ title }) => {
  const data = useStaticQuery(
    graphql`
      query FetchMoreArticles($slug: String) {
        posts: allSanityPost(
          limit: 3
          filter: { slug: { current: { ne: $slug } } }
          sort: { fields: _updatedAt }
        ) {
          edges {
            node {
              id
              title
              slug {
                current
              }
              background {
                asset {
                  fluid(maxWidth: 500) {
                    src
                  }
                }
              }
              content2
            }
          }
        }
      }
    `
  )
  return (
    <StyledWrapper>
      {title && <h1>{title}</h1>}
      <StyledInnerWrapper>
        {console.log(data.posts.edges)}
        {data.posts.edges.map(i => (
          <Article
            type="small"
            key={i.node.id}
            image={i.node.background.asset.fluid.src}
            title={i.node.title}
            slug={i.node.slug.current}
            description={i.node.content2}
          />
        ))}
      </StyledInnerWrapper>
    </StyledWrapper>
  )
}

export default MoreArticles
