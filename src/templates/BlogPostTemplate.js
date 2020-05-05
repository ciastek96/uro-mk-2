import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../layout/layout"
import Article from "../components/Article/Article"
import ContactWrapper from "../components/ContactWrapper/ContactWrapper"
import MoreArticles from "../components/MoreArticles/MoreArticles"
import ContentContainer from "../components/ContentContainter/ContentContainer"
import StyledBlockContent from "../components/StyledBlockContent/StyledBlockContent"
import SEO from "../components/SEO/SEO"

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: ${({ theme }) => theme.breakpoints.md};
  }
`

const BlogPostTemplate = ({ pageContext, data }) => (
  <Layout>
    <SEO title={data.post.title} />
    <Article
      type="big"
      image={data.post.background.asset.fluid.src}
      title={data.post.title}
      date={data.post._updatedAt}
      description={data.post.content2}
    />
    <ContentContainer>
      <StyledWrapper>
        <StyledBlockContent input={data.post._rawContent} />
      </StyledWrapper>
    </ContentContainer>
    <MoreArticles title="Zobacz więcej postów" />
    <ContactWrapper />
  </Layout>
)

export const query = graphql`
  query fetchPost($slug: String) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      title
      content2
      _rawContent(resolveReferences: { maxDepth: 2 })
      _updatedAt(locale: "PL", formatString: "D MMMM YYYY")
      background {
        asset {
          fluid {
            src
          }
        }
      }
    }
  }
`

export default BlogPostTemplate
