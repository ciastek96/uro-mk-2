import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../layout/layout"
import Article from "../components/Article/Article"
import AsideMenu from "../components/AsideMenu/AsideMenu"
import ContactWrapper from "../components/ContactWrapper/ContactWrapper"
import MoreArticles from "../components/MoreArticles/MoreArticles"
import ContentContainer from "../components/ContentContainter/ContentContainer"
import StyledBlockContent from "../components/StyledBlockContent/StyledBlockContent"
import SEO from "../components/SEO/SEO"

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: ${({ theme }) => theme.breakpoints.lg};
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 1fr;
  }
`

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-left: 40px;
  }
`

const OfferPageTemplate = ({ pageContext, data }) => (
  <Layout>
    <SEO title={data.offer.title} />
    <Article
      type="big"
      image={data.offer.background.asset.fluid}
      title={data.offer.title}
      date={data.offer._updatedAt}
    />
    <ContentContainer>
      <StyledWrapper>
        <div>
          <AsideMenu />
        </div>
        <StyledInnerWrapper>
          <StyledBlockContent input={data.offer._rawContent} />
        </StyledInnerWrapper>
      </StyledWrapper>
    </ContentContainer>
    <MoreArticles title="Zobacz więcej postów" />
    <ContactWrapper />
  </Layout>
)

export const query = graphql`
  query fetchOffer($slug: String) {
    offer: sanityOffer(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      title
      id
      background {
        asset {
          fluid(maxWidth: 2560) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawContent(resolveReferences: { maxDepth: 2 })
      _updatedAt(locale: "PL", formatString: "DD MMMM YYYY")
    }
  }
`

export default OfferPageTemplate
