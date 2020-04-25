import React from "react"
import PropTypes from "prop-types"

import Layout from "../layout/layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/SEO/SEO"

const Realizacje = () => (
  <Layout>
    <SEO title="Realizacje" />
    <Hero></Hero>
  </Layout>
)

Realizacje.propTypes = {
  siteTitle: PropTypes.string,
}

Realizacje.defaultProps = {
  siteTitle: ``,
}

export default Realizacje
