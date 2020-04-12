import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import Image from "../components/image"
import Hero from "../components/Hero/Hero"
import SEO from "../components/SEO/SEO"

import Video from "../assets/video.mp4"

const IndexPage = () => (
  <Layout>
    <SEO title="URO-MK - usługi remontowo ociepleniowe" />
    <Hero>
      <video loop muted autoPlay preload="auto">
        <source src={Video} type="video/mp4" />
      </video>
    </Hero>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
