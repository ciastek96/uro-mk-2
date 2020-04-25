import React from "react"
import PropTypes from "prop-types"

import Layout from "../layout/layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/SEO/SEO"

const Oferta = () => (
  <Layout>
    <SEO title="Oferta" />
    <Hero></Hero>
    <h1>Oferta</h1>
  </Layout>
)

Oferta.propTypes = {
  siteTitle: PropTypes.string,
}

Oferta.defaultProps = {
  siteTitle: ``,
}

export default Oferta
