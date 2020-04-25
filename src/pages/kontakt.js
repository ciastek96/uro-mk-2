import React from "react"
import PropTypes from "prop-types"

import Layout from "../layout/layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/SEO/SEO"

const Kontakt = () => (
  <Layout>
    <SEO title="Kontakt" />
    <Hero></Hero>
  </Layout>
)

Kontakt.propTypes = {
  siteTitle: PropTypes.string,
}

Kontakt.defaultProps = {
  siteTitle: ``,
}

export default Kontakt
