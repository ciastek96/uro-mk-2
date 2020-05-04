import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../layout/layout"
import Article from "../components/Article/Article"
import ContactWrapper from "../components/ContactWrapper/ContactWrapper"
import MoreArticles from "../components/MoreArticles/MoreArticles"
import ContentContainer from "../components/ContentContainter/ContentContainer"
import SEO from "../components/SEO/SEO"

import Photo1 from "../images/2.jpg"

const posts = [
  {
    id: 0,
    title: "Realizacja stropu w Zacharzowicach",
    slug: "dom-w-zacharzowicach",
    author: "Arek",
    date: "20-04-2020",
    description:
      "Prace nad stropem dla projektu dom w Zefirantach w Zacharzowicach",
    content:
      "Ut diam lorem diam consetetur accusam gubergren dolor. Sit eirmod justo et nonumy, magna sea no lorem eirmod, sed at justo eirmod dolores, invidunt amet diam takimata dolor dolores aliquyam gubergren elitr takimata. Gubergren amet consetetur clita est eirmod accusam, sed kasd gubergren et vero diam eirmod. Stet diam takimata erat magna ea vero. Ea dolor takimata clita accusam invidunt sit sit, sanctus lorem kasd et tempor sed. Lorem sed eos dolor eirmod, et diam gubergren et nonumy vero, et justo voluptua rebum sadipscing, gubergren ipsum dolor takimata diam dolor elitr et, at clita takimata invidunt accusam eirmod lorem aliquyam magna, gubergren takimata takimata dolore clita sed, eirmod kasd lorem ipsum ipsum amet et amet at diam, sit labore et duo ipsum dolores erat stet at ipsum. Gubergren ut consetetur diam eos lorem justo no no et, dolor sea erat nonumy ipsum sea sanctus dolores nonumy. Stet sed eos labore elitr voluptua no, magna lorem invidunt et sed sed stet est diam erat. Rebum sit est diam et clita at. Vero sit et invidunt dolor. Et sanctus kasd justo elitr clita et rebum magna lorem, sit aliquyam sadipscing tempor duo stet aliquyam et. At vero et amet kasd et aliquyam..",
    image: Photo1,
  },
]

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
        <h1>{posts[0].title}</h1>
        <p>{posts[0].content}</p>
        <h1>{posts[0].title}</h1>
        <p>{posts[0].content}</p>
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
