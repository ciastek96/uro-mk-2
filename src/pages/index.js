import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../layout/layout"
import Image from "../components/image"
import Hero from "../components/Hero/Hero"
import SEO from "../components/SEO/SEO"

import Video from "../assets/video.mp4"

const IndexPage = () => (
  <Layout>
    <SEO title="URO-MK - usługi remontowo ociepleniowe" />
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
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
