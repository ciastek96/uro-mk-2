import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../layout/layout"
import Hero from "../components/Hero/Hero"
import Article from "../components/Article/Article"
import ContentContainer from "../components/ContentContainter/ContentContainer"
import ContactWrapper from "../components/ContactWrapper/ContactWrapper"
import SEO from "../components/SEO/SEO"

const Aktualnosci = ({ data }) => (
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
    </ContentContainer>
    <ContactWrapper />
  </Layout>
)

export const query = graphql`
  {
    allSanityPost {
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

Aktualnosci.propTypes = {
  siteTitle: PropTypes.string,
}

Aktualnosci.defaultProps = {
  siteTitle: ``,
}

export default Aktualnosci
