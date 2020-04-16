import React from "react"
import styled from "styled-components"

import Layout from "../layout/layout"
import Image from "../components/image"
import Hero from "../components/Hero/Hero"
import SEO from "../components/SEO/SEO"

const Kontakt = () => (
  <Layout>
    <SEO title="Kontakt" />
    <Hero></Hero>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default Kontakt
