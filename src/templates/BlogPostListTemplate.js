import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../layout/layout"
import Hero from "../components/Hero/Hero"
import Article from "../components/Article/Article"
import Pagination from "../components/Pagination/Pagination"
import ContentContainer from "../components/ContentContainter/ContentContainer"
import ContactWrapper from "../components/ContactWrapper/ContactWrapper"
import SEO from "../components/SEO/SEO"

const BlogPostListTemplate = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      <SEO title="Aktualności" />
      <Hero />
      <ContentContainer>
        <h1>Aktualności</h1>
        {data.allSanityPost.nodes.map(item => (
          <Article
            type="normal"
            slug={item.slug.current}
            key={item._id}
            image={item.background.asset.fluid.src}
            title={item.title}
            date={item._updatedAt}
            description={item.content2}
          />
        ))}
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          numPages={numPages}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          path="aktualnosci"
        />
      </ContentContainer>
      <ContactWrapper />
    </Layout>
  )
}

export const query = graphql`
  query FetchPost($skip: Int!, $limit: Int!) {
    allSanityPost(limit: $limit, skip: $skip, sort: { fields: _updatedAt }) {
      nodes {
        title
        content2
        _updatedAt(locale: "PL", formatString: "DD-MMMM-YYYY")
        _id
        slug {
          current
        }
        background {
          asset {
            fluid(maxWidth: 600) {
              src
            }
          }
        }
      }
    }
  }
`

BlogPostListTemplate.propTypes = {
  siteTitle: PropTypes.string,
}

BlogPostListTemplate.defaultProps = {
  siteTitle: ``,
}

export default BlogPostListTemplate
